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
                        "type": "known_field",
                        "fields": {
                            "FIELDNAME": "name"
                        }
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
            'type': 'equals',
            "inputs": {
                "FIELD": {
                    "shadow": {
                        "type": "known_field",
                        "fields": {
                            "FIELDNAME": "name"
                        }
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
            'type': 'before_after',
            "inputs": {
                "FIELD": {
                    "shadow": {
                        "type": "known_field",
                        "fields": {
                            "FIELDNAME": "name"
                        }
                    }
                },
                "DATE": {
                    "shadow": {
                        "type": "text",
                        "fields": {
                            "TEXT": "2024-02-03"
                        }
                    }
                }
            }
        },
        {
            'kind': 'block',
            'type': 'duration',
            "inputs": {
                "FIELD_FROM": {
                    "shadow": {
                        "type": "known_field",
                        "fields": {
                            "FIELDNAME": "name"
                        }
                    }
                },
                "FIELD_TO": {
                    "shadow": {
                        "type": "known_field",
                        "fields": {
                            "FIELDNAME": "name"
                        }
                    }
                },
                "NUMBER": {
                    "shadow": {
                        "type": "math_number"
                    }
                }
            }
        },
        {
            'kind': 'block',
            'type': 'hasField',
            "inputs": {
                "FIELD": {
                    "shadow": {
                        "type": "known_field",
                        "fields": {
                            "FIELDNAME": "name"
                        }
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