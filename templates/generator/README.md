# <% name %>

`<% name %>` is a tool for scaffolding new projects.

# Usage

### Generating a new project

Change directories to where you want to generate the new project and run the cli using `npx`

```sh
$ cd ~/workspace/my-team
$ npx @generator/<% name %>
? Choose a name for your generated project my-new-project
```

The new project is now located at `./my-new-project`. You can provide any of the accepted arguments as a flag

```sh
$ npx @generator/<% name %> --name=my-<% name %> --dryRun
```

The new project is now located at `./my-new-project`.

### Using the programmatic api

First, install the library

```sh
npm install --save @generator/<% name %>
```

Then require it and run the `run` command

```js
const <% pascalCaseName %> = require('@mbunifu/my-generator');

const <% camelCaseName %> = new <% pascalCaseName %>();

<% camelCaseName %>.run();
```

You can provide any of the accepted arguments as a named argument to the constructor.

```js
const <% pascalCaseName %> = require('@mbunifu/my-generator');

const <% camelCaseName %> = new <% pascalCaseName %>({
    dryRun: true,
    debug: true,
    name: 'my-new-project'
});

<% camelCaseName %>.run();
```

The new project is now located at `./my-new-project`.

### Accepted Arguments

* `--dryRun` Returns the paths of which files would be written without actually writing anything to the file system. Useful for testing output.
* `--name` Name of the project you want to create.
* `--debug` Output debugging information during generation.

# Find out more

This generator is powered by `@mbunifu/library`.  Find out more about how it works and
how to make your own by reading its [README.md](https://github.com/doug-wade/mbunifu-library)
or its [annotate source code](https://github.com/doug-wade/mbunifu-library).
