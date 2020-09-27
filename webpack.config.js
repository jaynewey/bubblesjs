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
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js']
        },
    };
};
