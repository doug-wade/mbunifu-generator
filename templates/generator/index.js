const { Generator } = require('@mbunifu/library');

module.exports = class <% pascalCaseName %>Generator extends Generator {
    constructor(options) {
        super(options);

        this.prompts = [{
            type: 'input',
            name: 'message',
            message: 'Choose a message for your console.log'
        }];
        this.templateName = 'example';
        this.name = 'generated-example-project';
    }
};
