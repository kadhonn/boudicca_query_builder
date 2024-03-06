import * as Blockly from 'blockly';
import {blocks} from './blocks/blocks';
import {boudiccaQueryGenerator} from './generators/boudicca_query';
import {save, load, reset} from './serialization';
import {toolbox} from './toolbox';
import './index.css';

Blockly.common.defineBlocks(blocks);

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const boudiccaLink = document.getElementById('boudiccaLink');
const panicButton = document.getElementById('panicButton');
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, {
    toolbox,
    'comments': true,
    'trashcan': true,
});

// This function resets the code and output divs, shows the
// generated code from the workspace, and evals the code.
// In a real application, you probably shouldn't use `eval`.
const generateQuery = () => {
    const code = boudiccaQueryGenerator.workspaceToCode(ws);
    codeDiv.innerText = code;
    boudiccaLink.href = "https://boudicca.events/search?name=!" + encodeURIComponent(code);
};

// Load the initial state from storage and run the code.
load(ws);
generateQuery();

// Every time the workspace changes state, save the changes to storage.
ws.addChangeListener((e) => {
    // UI events are things like scrolling, zooming, etc.
    // No need to save after one of these.
    if (e.isUiEvent) return;
    save(ws);
});


// Whenever the workspace changes meaningfully, run the code again.
ws.addChangeListener((e) => {
    // Don't run the code when the workspace finishes loading; we're
    // already running it once when the application starts.
    // Don't run the code during drags; we might have invalid state.
    if (e.isUiEvent || e.type == Blockly.Events.FINISHED_LOADING ||
        ws.isDragging()) {
        return;
    }
    generateQuery();
});

panicButton.onclick = function() {
    reset();
}