module.exports = {
    mode: 'development',
    entry: './resources/ts/index.tsx',
    output: {
        path: `${__dirname}/resources/js`,
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.json'],
    },
};
