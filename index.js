var chalk = require("chalk");

function applyOptions(object, options = {}) {
    if (options.level > 3 || options.level < 0) {
        throw new Error('The `level` option should be an integer from 0 to 3');
    }

    // Detect level if not set manually
    const colorLevel = stdoutColor ? stdoutColor.level : 0;
    object.level = options.level === undefined ? colorLevel : options.level;
    object.enabled = 'enabled' in options ? options.enabled : object.level > 0;
}

var message = "Hello " + chalk.yellow("World");
console.log(message + applyOptions());

