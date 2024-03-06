import * as Blockly from 'blockly/core';

const storageKey = 'mainWorkspace';
const DEFAULT_STATE= '{"blocks":{"languageVersion":0,"blocks":[{"type":"query_root","id":"3_sE,(?4OVtVja$jx^{E","x":94,"y":307,"deletable":false,"inputs":{"ROOT":{"block":{"type":"contains","id":"*fAQbOQ7e+XOe`n:5Ibw","inputs":{"FIELD":{"shadow":{"type":"known_field","id":"J~8?_B}vgRhdK3Mun-=b","fields":{"FIELDNAME":"description"}}},"TEXT":{"shadow":{"type":"text","id":"5d-YkY)0A;?naPQ|vN8f","fields":{"TEXT":"Rock"}}}}}}}}]}}';

/**
 * Saves the state of the workspace to browser's local storage.
 * @param {Blockly.Workspace} workspace Blockly workspace to save.
 */
export const save = function(workspace) {
  const data = Blockly.serialization.workspaces.save(workspace);
  window.localStorage?.setItem(storageKey, JSON.stringify(data));
};

/**
 * Loads saved state from local storage into the given workspace.
 * @param {Blockly.Workspace} workspace Blockly workspace to load into.
 */
export const load = function(workspace) {
  const data = window.localStorage?.getItem(storageKey) || DEFAULT_STATE;
  if (!data) return;
  // Don't emit events during loading.
  Blockly.Events.disable();
  Blockly.serialization.workspaces.load(JSON.parse(data), workspace, false);
  Blockly.Events.enable();
};

export const reset = function() {
  window.localStorage?.removeItem(storageKey);
};