# Handbrake Preset Manager (WIP)

**Note: This is a work in progress and is not currently functional.**

App for managing Handbrake presets that can be exported as commands
for the CLI version of Handbrake which doesn't natively support
custom presets.

## Installation

### Clone repo and install dependencies:

```shell
$ git clone git@github.com:TomSeldon/handbrake-preset-manager.git
$ cd handbrake-preset-manager
$ npm install
$ bower install
```

### Database

The application is setup to work with a MongoDB instance. You'll need to create
the required collections manually.

The application expects the following collections to exist.

* `Preset`
* `Category`

### Configuration

* Copy `./config/index.js.dist` to `./config/index.js`.
* Enter config settings into `./config/index.js`.

### Run

```shell
$ npm start
```

Visit: http://localhost:3000

## Compiler flags

`hpm.debug.state.module.HPM_DEBUG_UI_STATE` - `false` - If set to true, outputs
debugging information related to UI Routes states to the console.
