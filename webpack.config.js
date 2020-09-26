const path = require('path');

module.exports = (env, argv) => {
    return {
        entry: './entry.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: (argv.mode === 'production') ? 'bubbles.min.js' : 'bubbles.js',
            library: 'bubbles',
            libraryTarget: 'umd'
        },
    };
};
