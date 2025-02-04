export default function define(Python: Blockly.BlockGenerators) {

    Python['musicplay'] = function (block) {
        var text_musicplay = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
            || '';
        let code = 'music.play(' + text_musicplay + ') \n';
        return code;
    };

    Python['audioplay'] = function (block) {
        var text_audioplay = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
            || '';
        let code = 'audio.play(' + text_audioplay + ') \n';
        return code;
    };

    Python['audio_options'] = function (block) {
        var dropdown_options = block.getFieldValue('options');
        var code = dropdown_options;
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Python['set_volume'] = function (block) {
        var value_input = Blockly.Python.valueToCode(block, 'input', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = 'set_volume(' + value_input + ')\n';
        return code;
    };

    Python['volumeslider'] = function (block) {
        var text_text = block.getFieldValue('slider');
        // TODO: Assemble Python into code variable.
        var code = text_text;
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Python['songs'] = function (block) {
        var dropdown_songs = block.getFieldValue('songs');
        var code = dropdown_songs;
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Python['musicimport'] = function (block) {
        let code = 'import music\n';
        return code;
    };

    Python['audioimport'] = function (block) {
        let code = 'import audio\n';
        return code;
    };

    Python['music_pin'] = function (block) {
        var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = 'pin = ' + value_pin;
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Python['musicpitch'] = function (block) {
        var text_musicpitch = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
            || '';
        let code = 'music.pitch(' + text_musicpitch + ') \n';
        return code;
    };

    Python['musicreset'] = function (block) {
        // TODO: Assemble Python into code variable.
        const code = 'music.reset()\n';
        return code;
    };

    Python['musicstop'] = function (block) {
        // TODO: Assemble Python into code variable.
        const code = 'music.stop()\n';
        return code;
    };

    Python['musicstop'] = function (block) {
        var text_musicstop = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
            || '';
        let code = 'music.stop(' + text_musicstop + ') \n';
        return code;
    };

    Python['musictempo'] = function (block) {
        var text_musictempo = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
            || '';
        let code = 'music.set_tempo(' + text_musictempo + ') \n';
        return code;
    };

    Python['musicgettempo'] = function (block) {
        const code = 'music.get_tempo()';
        return [code, Blockly.Python.ORDER_ATOMIC];
    };
}
