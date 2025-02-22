( async function ( Scratch ) {
    const blocks = [
        {
            opcode: 'Message',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Message [text]',
            arguments: {
                text: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Hello, world!'
                }
            }
        }
    ];

    class Extension {
        getInfo() {
            return {
                id: 'message',
                name: 'Message',
                blocks: blocks,
                color1: '#808080'
            };
        }
    }

    Extension.prototype['Message'] = function (args) {
        window.alert(args.text);
    };

    Scratch.extensions.register(new Extension());
} ) (Scratch);
