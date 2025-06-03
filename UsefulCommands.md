# Useful Commands
## Create a Node.js Project
* npm → Node Package Manager executable.

* init → A subcommand that npm understands, telling it to "initialize" a new project by creating a package.json file.

* -y → An optional flag to accept default values automatically.

  ### Example:
  * `npm init -y`

With this command, we will create the package.json file.

## Add TypeScript to the Project
* npx → A Node.js tool to run executables from npm packages, without installing them globally.

* tsc → Stands for TypeScript Compiler — the CLI tool to compile TypeScript files to JavaScript.

* --init → A flag that tells tsc to initialize a tsconfig.json file in the project, setting up TypeScript configuration with default options.

  ### Example:
  * `npx tsc --init`

With this command, we will create the tsconfig.json file.

## Install Dependencies
To work with the HTTP protocol, we need to install the Express package.

  ### Command:
* npm → Node Package Manager — the tool used to manage packages (dependencies) for Node.js projects.

* install → A subcommand that tells npm to download and add one or more packages to your project. It also installs all listed dependencies from package.json if no package is specified.

* <package dependencies> → Placeholder for the names of the packages you want to install (e.g., express, lodash). You can install multiple packages at once by separating them with spaces.

* --save → A flag that tells npm to add the package as a dependency in the dependencies section of your package.json. This ensures the package will be installed when others set up the project.

  ### Example:
  * `npm install @types/express --save`
