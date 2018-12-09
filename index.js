const { Generator } = require('@mbunifu/library');

module.exports = class GeneratorGenerator extends Generator {
  constructor(options) {
    super(options);

    this.prompts = [{
        type: 'input',
        name: 'name',
        message: 'Choose a name for your generator'
    }];
    this.templateName = 'generator';

    // Use custom tags so we can generate templates with standard tags
    this.templateOpeningTag = '<%';
    this.templateClosingTag = '%>';
  }
}
