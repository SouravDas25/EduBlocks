export default function define(Blocks: Blockly.BlockDefinitions) {


    Blockly.Blocks['mapping'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("Mapping");
            this.appendStatementInput("DO")
                .setCheck(null);
            this.setColour(65);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['source'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("Source");
            this.appendStatementInput("DO")
                .setCheck(null);
            this.setColour("#644A9E");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['csv'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("csv");
            this.appendValueInput("NAME")
                .setCheck(null);
            this.appendDummyInput()
                .appendField("file");
            this.appendValueInput("VALUE")
                .setCheck(null);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("#F89621");
            this.setTooltip("");
            this.setHelpUrl("");
        }
    }

    Blockly.Blocks['output'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("Output");
            this.appendStatementInput("DO")
                .setCheck(null);
            this.setColour("#644A9E");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['element'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("element");
            this.appendValueInput("NAME")
                .setCheck(null);
            this.appendStatementInput("DO")
                .setCheck(null);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(300);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['list'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("list");
            this.appendValueInput("NAME")
                .setCheck(null);
            this.appendStatementInput("DO")
                .setCheck(null);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(300);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['list_group'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("list");
            this.appendValueInput("NAME")
                .setCheck(null);
            this.appendDummyInput()
                .appendField("groupBy");
            this.appendValueInput("GROUP")
                .setCheck(null);
            this.appendStatementInput("DO")
                .setCheck(null);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(300);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['field'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("field");
            this.appendValueInput("NAME")
                .setCheck(null);
            this.appendDummyInput()
                .appendField("value");
            this.appendValueInput("VALUE")
                .setCheck(null);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("#F89621");
            this.setTooltip("");
            this.setHelpUrl("");
        }
    }

    Blockly.Blocks['field_agg'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("field");
            this.appendValueInput("NAME")
                .setCheck(null);
            this.appendDummyInput()
                .appendField("value=");
            this.appendValueInput("VALUE")
                .setCheck(null);
            this.appendDummyInput()
                .appendField("agg=");
            this.appendValueInput("AGG")
                .setCheck(null);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("#F89621");
            this.setTooltip("");
            this.setHelpUrl("");
        }
    }


}

