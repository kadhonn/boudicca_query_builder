import * as Blockly from 'blockly/core';

const queryRootBlock = {
    'type': 'query_root',
    'message0': 'query: %1',
    'args0': [
        {
            'type': 'input_value',
            'name': 'ROOT',
            'check': 'Query',
        },
    ],
    'colour': '%{BKY_VARIABLES_HUE}',
    'tooltip': '',
    'helpUrl': '',
};

const customFieldBlock = {
    'type': 'custom_field',
    'message0': '%1',
    'args0': [
        {
            "type": "field_input",
            "name": "FIELDNAME",
            "text": "name",
            "spellcheck": false
        }
    ],
    'output': 'Field',
    'colour': '%{BKY_COLOUR_HUE}',
    'tooltip': '',
    'helpUrl': '',
};

const knownFieldBlock = {
    'type': 'known_field',
    'message0': '%1',
    'args0': [
        {
            "type": "field_dropdown",
            "name": "FIELDNAME",
            "options": [
                ["Any Field (*)", "*"],
                ["Name", "name"],
                ["Description", "description"],
                ["Location Name", "location.name"],
                ["Location City", "location.city"],
            ]
        }

    ],
    'output': 'Field',
    'colour': '%{BKY_COLOUR_HUE}',
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
            'check': 'Field',
        },
        {
            'type': 'input_value',
            'name': 'TEXT',
            'check': 'String',
        },
    ],
    'output': 'Query',
    'colour': '%{BKY_LISTS_HUE}',
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
            'check': 'Query',
        },
        {
            'type': 'input_value',
            'name': 'OP2',
            'check': 'Query',
        },
    ],
    'output': 'Query',
    'colour': '%{BKY_LOGIC_HUE}',
    'tooltip': '',
    'helpUrl': '',
};

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
    [queryRootBlock, customFieldBlock, knownFieldBlock, containsBlock, andBlock]);
