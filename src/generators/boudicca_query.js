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

boudiccaQueryGenerator.forBlock['and'] = function (block, generator) {
    const op1Value = generator.valueToCode(block, 'OP1', Order.ATOMIC);
    const op2Value = generator.valueToCode(block, 'OP2', Order.ATOMIC);
    let queryCode = `(${op1Value}) and (${op2Value})`;
    return [queryCode, Order.ATOMIC];
}