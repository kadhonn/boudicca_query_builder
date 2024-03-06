export const toolbox = {
    'kind': 'flyoutToolbox',
    'contents': [
        {
            'kind': 'block',
            'type': 'text',
        },
        {
            'kind': 'block',
            'type': 'math_number',
        },
        {
            'kind': 'block',
            'type': 'custom_field',
        },
        {
            'kind': 'block',
            'type': 'known_field',
            "fields": {
                "FIELDNAME": "name"
            }
        },
        {
            'kind': 'block',
            'type': 'contains',
            "inputs": {
                "FIELD": {
                    "shadow": {
                        "type": "custom_field"
                    }
                },
                "TEXT": {
                    "shadow": {
                        "type": "text"
                    }
                }
            }
        },
        {
            'kind': 'block',
            'type': 'and',
        },
        {
            'kind': 'block',
            'type': 'or',
        },
        {
            'kind': 'block',
            'type': 'not',
        },
    ]
};