# generator-generator

`generator-generator` is a tool for scaffolding new projects.

## Usage

### From the command line

```sh
npx generator-generator --name my-generator
```

### Programmatically

```js
const GeneratorGenerator = require('@generator/generator');

(new GeneratorGenerator({ name: 'my-generator' })).run({
    dryRun: true,
    debug: true,
    name: 'my-<% name %>'
});
```

### Accepted Arguments

* `--dryRun` Returns the paths of which files would be written without actually writing anything to the file system. Useful for testing output.
* `--name` Name of the project you want to create.
* `--debug` Output debugging information during generation.
