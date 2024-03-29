import * as Blockly from 'blockly';

export const boudiccaQueryGenerator = new Blockly.Generator('BOUDICCA_QUERY');

const Order = {
    ATOMIC: 0,
};

function escapeText(text) {
    return text.replaceAll('\\', '\\\\').replaceAll('"', '\\"');
}

boudiccaQueryGenerator.forBlock['query_root'] = function (block, generator) {
    return generator.valueToCode(block, 'ROOT', Order.ATOMIC);
}

boudiccaQueryGenerator.forBlock['text'] = function (block, generator) {
    const textValue = block.getFieldValue('TEXT');
    const escapedTextValue = escapeText(textValue);
    let queryCode = `"${escapedTextValue}"`;
    return [queryCode, Order.ATOMIC];
}

boudiccaQueryGenerator.forBlock['custom_field'] = function (block, generator) {
    const textValue = block.getFieldValue('FIELDNAME');
    const escapedTextValue = escapeText(textValue);
    let queryCode = `"${escapedTextValue}"`;
    return [queryCode, Order.ATOMIC];
}

boudiccaQueryGenerator.forBlock['known_field'] = function (block, generator) {
    const textValue = block.getFieldValue('FIELDNAME');
    const escapedTextValue = escapeText(textValue);
    let queryCode = `"${escapedTextValue}"`;
    return [queryCode, Order.ATOMIC];
}

boudiccaQueryGenerator.forBlock['math_number'] = function (block, generator) {
    const numberValue = block.getFieldValue('NUM');
    return [numberValue, Order.ATOMIC];
}

boudiccaQueryGenerator.forBlock['contains'] = function (block, generator) {
    const fieldValue = generator.valueToCode(block, 'FIELD', Order.ATOMIC);
    const textValue = generator.valueToCode(block, 'TEXT', Order.ATOMIC);
    let queryCode = `${fieldValue} contains ${textValue}`;
    return [queryCode, Order.ATOMIC];
}

boudiccaQueryGenerator.forBlock['equals'] = function (block, generator) {
    const fieldValue = generator.valueToCode(block, 'FIELD', Order.ATOMIC);
    const textValue = generator.valueToCode(block, 'TEXT', Order.ATOMIC);
    let queryCode = `${fieldValue} equals ${textValue}`;
    return [queryCode, Order.ATOMIC];
}

boudiccaQueryGenerator.forBlock['before_after'] = function (block, generator) {
    const fieldValue = generator.valueToCode(block, 'FIELD', Order.ATOMIC);
    const operation = block.getFieldValue('OPERATION');
    const textValue = generator.valueToCode(block, 'DATE', Order.ATOMIC);
    let queryCode = `${fieldValue} ${operation} ${textValue}`;
    return [queryCode, Order.ATOMIC];
}

boudiccaQueryGenerator.forBlock['duration'] = function (block, generator) {
    const fieldFromValue = generator.valueToCode(block, 'FIELD_FROM', Order.ATOMIC);
    const fieldToValue = generator.valueToCode(block, 'FIELD_TO', Order.ATOMIC);
    const operation = block.getFieldValue('OPERATION');
    const numberValue = generator.valueToCode(block, 'NUMBER', Order.ATOMIC);
    let queryCode = `duration ${fieldFromValue} ${fieldToValue} ${operation} ${numberValue}`;
    return [queryCode, Order.ATOMIC];
}

boudiccaQueryGenerator.forBlock['hasField'] = function (block, generator) {
    const fieldValue = generator.valueToCode(block, 'FIELD', Order.ATOMIC);
    let queryCode = `hasField ${fieldValue}`;
    return [queryCode, Order.ATOMIC];
}

boudiccaQueryGenerator.forBlock['and'] = function (block, generator) {
    const op1Value = generator.valueToCode(block, 'OP1', Order.ATOMIC);
    const op2Value = generator.valueToCode(block, 'OP2', Order.ATOMIC);
    let queryCode = `(${op1Value}) and (${op2Value})`;
    return [queryCode, Order.ATOMIC];
}

boudiccaQueryGenerator.forBlock['or'] = function (block, generator) {
    const op1Value = generator.valueToCode(block, 'OP1', Order.ATOMIC);
    const op2Value = generator.valueToCode(block, 'OP2', Order.ATOMIC);
    let queryCode = `(${op1Value}) or (${op2Value})`;
    return [queryCode, Order.ATOMIC];
}

boudiccaQueryGenerator.forBlock['not'] = function (block, generator) {
    const op1Value = generator.valueToCode(block, 'OP1', Order.ATOMIC);
    let queryCode = `not (${op1Value})`;
    return [queryCode, Order.ATOMIC];
}