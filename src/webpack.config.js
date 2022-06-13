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
                test: /\.tsx$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.json'],
    },
};
