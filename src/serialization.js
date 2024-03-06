import * as Blockly from 'blockly/core';

const storageKey = 'mainWorkspace';
const DEFAULT_STATE= '{"blocks":{"languageVersion":0,"blocks":[{"type":"query_root","id":"fgOM9{`_13LP~ZlR|^5w","x":113,"y":260,"deletable":false,"inputs":{"ROOT":{"block":{"type":"contains","id":"l|6MZvU|~Fkh=/hU$l.4","inputs":{"FIELD":{"shadow":{"type":"text","id":"6PqLMX-#{F^{SxQ[R`{Z","fields":{"TEXT":"location.city"}}},"TEXT":{"shadow":{"type":"text","id":"*T4sdm0NaE2%mEunmv8l","fields":{"TEXT":"Linz"}}}}}}}}]}}';

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