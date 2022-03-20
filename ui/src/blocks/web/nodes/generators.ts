export default function define(Python: Blockly.BlockGenerators) {

    Python['mapping'] = function (block) {
        const statements_mapping = Blockly.Python.statementToCode(block, 'DO');
        const code = `\n<mapping>${statements_mapping}\n</mapping>`
        return code;
    };

    Python['source'] = function (block) {
        const statements_mapping = Blockly.Python.statementToCode(block, 'DO');
        const code = `\n<source>${statements_mapping}\n</source>`
        return code;
    };

    Python['csv'] = function (block) {
        const name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
        const value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
        const code = `\n<csv name="${name}">${value}</csv>`
        return code;
    };

    Python['output'] = function (block) {
        const statements_mapping = Blockly.Python.statementToCode(block, 'DO');
        const code = `\n<output>${statements_mapping}\n</output>`
        return code;
    };

    Python['element'] = function (block) {
        const value = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
        const statements_name = Blockly.Python.statementToCode(block, 'DO');
        // TODO: Assemble JavaScript into code variable.
        const code = `\n<element name="${value}">${statements_name}\n</element>`
        return code;
    };

    Python['list'] = function (block) {
        const value = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
        const statements_name = Blockly.Python.statementToCode(block, 'DO');
        // TODO: Assemble JavaScript into code variable.
        const code = `\n<list name="${value}">${statements_name}\n</list>`
        return code;
    };

    Python['list_group'] = function (block) {
        const value = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
        const group = Blockly.Python.valueToCode(block, 'GROUP', Blockly.Python.ORDER_ATOMIC);
        const statements_name = Blockly.Python.statementToCode(block, 'DO');
        // TODO: Assemble JavaScript into code variable.
        const code = `\n<list name="${value}" group="${group}">${statements_name}\n</list>`
        return code;
    };

    Python['field'] = function (block) {
        const name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
        const value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        const code = `\n<field name="${name}" value="${value}"/>`
        return code;
    };

    Python['field_agg'] = function (block) {
        const name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
        const value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
        const agg = Blockly.Python.valueToCode(block, 'AGG', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        const code = `\n<field name="${name}" value="${value}" agg="${agg}"/>`
        return code;
    };


}
