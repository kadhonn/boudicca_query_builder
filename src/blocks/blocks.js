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
    'colour': '%{BKY_LOOPS_HUE}',
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
                ["Start Date", "startDate"],
                ["End Date", "endDate"],
                ["Url", "url"],
                ["Type", "type"],
                ["Category", "category"],
                ["Description", "description"],
                ["Sources", "sources"],
                ["Recurrence", "recurrence"],
                ["Location Name", "location.name"],
                ["Location Url", "location.url"],
                ["Location Coordinates", "location.coordinates"],
                ["Location City", "location.city"],
                ["Location Address", "location.address"],
                ["Accessible Entry", "accessibility.accessibleEntry"],
                ["Accessible Seats", "accessibility.accessibleSeats"],
                ["Accessible Toilets", "accessibility.accessibleToilets"],
                ["Concert Genre", "concert.genre"],
            ]
        }
    ],
    'output': 'Field',
    'colour': '%{BKY_LOOPS_HUE}',
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

const equalsBlock = {
    'type': 'equals',
    'message0': 'Field %1 equals %2',
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

const beforeAfterBlock = {
    'type': 'before_after',
    'message0': 'Field %1 is at or %2 date %3',
    'args0': [
        {
            'type': 'input_value',
            'name': 'FIELD',
            'check': 'Field',
        },
        {
            "type": "field_dropdown",
            "name": "OPERATION",
            "options": [
                ["after", "after"],
                ["before", "before"],
            ]
        },
        {
            'type': 'input_value',
            'name': 'DATE',
            'check': 'String', //TODO do date
        },
    ],
    'output': 'Query',
    'colour': '%{BKY_LISTS_HUE}',
    'tooltip': '',
    'helpUrl': '',
    "inputsInline": true,
};

const durationBlock = {
    'type': 'duration',
    'message0': 'Duration from field %1 to field %2 is %3 then %4',
    'args0': [
        {
            'type': 'input_value',
            'name': 'FIELD_FROM',
            'check': 'Field',
        },
        {
            'type': 'input_value',
            'name': 'FIELD_TO',
            'check': 'Field',
        },
        {
            "type": "field_dropdown",
            "name": "OPERATION",
            "options": [
                ["longer", "longer"],
                ["shorter", "shorter"],
            ]
        },
        {
            'type': 'input_value',
            'name': 'NUMBER',
            'check': 'Number',
        },
    ],
    'output': 'Query',
    'colour': '%{BKY_LISTS_HUE}',
    'tooltip': '',
    'helpUrl': '',
    "inputsInline": true, //TODO check
};

const hasFieldBlock = {
    'type': 'hasField',
    'message0': 'Event has Field %1',
    'args0': [
        {
            'type': 'input_value',
            'name': 'FIELD',
            'check': 'Field',
        }
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

const orBlock = {
    'type': 'or',
    'message0': 'or %1 %2',
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

const notBlock = {
    'type': 'not',
    'message0': 'not %1',
    'args0': [
        {
            'type': 'input_value',
            'name': 'OP1',
            'check': 'Query',
        },
    ],
    'output': 'Query',
    'colour': '%{BKY_LOGIC_HUE}',
    'tooltip': '',
    'helpUrl': '',
};

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
    [queryRootBlock, customFieldBlock, knownFieldBlock, containsBlock, equalsBlock, beforeAfterBlock, durationBlock, hasFieldBlock, andBlock, orBlock, notBlock]);
