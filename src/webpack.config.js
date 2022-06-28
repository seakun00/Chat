const path = require("path");

module.exports = {
    mode: 'development',
    entry: './resources/ts/index.tsx',
    output: {
        path: `${__dirname}/public/js`,
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        alias: {
            '@': path.resolve('./resources'),
        },
        extensions: ['.js', '.ts', '.tsx', '.json'],
    },
};
