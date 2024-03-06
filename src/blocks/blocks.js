import * as Blockly from 'blockly/core';

const queryRootBlock = {
  'type': 'query_root',
  'message0': 'query: %1',
  'args0': [
    {
      'type': 'input_value',
      'name': 'ROOT',
      'check': 'String', //TODO can make query?
    },
  ],
  'colour': 160,
  'tooltip': '',
  'helpUrl': '',
};

const containsBlock = {
  'type': 'contains',
  'message0': 'Field %1 contains %2',
  'args0': [
    {
      'type': 'input_value',
      'name': 'FIELD',
      'check': 'String', //TODO can make field?
    },
    {
      'type': 'input_value',
      'name': 'TEXT',
      'check': 'String',
    },
  ],
  'output': null,
  'colour': 160,
  'tooltip': '',
  'helpUrl': '',
  "inputsInline": true,
};

const andBlock = {
  'type': 'and',
  'message0': 'and %1 %2',
  'args0': [
    {
      'type': 'input_value',
      'name': 'OP1',
      'check': 'String', //TODO can make query?
    },
    {
      'type': 'input_value',
      'name': 'OP2',
      'check': 'String',
    },
  ],
  'output': null,
  'colour': 160,
  'tooltip': '',
  'helpUrl': '',
};

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
    [queryRootBlock, containsBlock, andBlock]);
