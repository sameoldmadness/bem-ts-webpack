function makeTypeScriptLoader({ babel }) {
    if (babel) {
        return {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/react',
                    '@babel/typescript',
                ],
            },
        };
    }

    return {
        loader: 'ts-loader',
    };
}

function makeConfig({ babel }) {
    return {
        devtool: false,
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        },
        output: {
            filename: `[name]-${babel ? 'babel' : 'ts'}.js`,
        },
        module: {
            rules: [
                {
                    test: /\.tsx?/,
                    exclude: /node_modules/,
                    use: [
                        makeTypeScriptLoader({ babel }),
                    ],
                },
            ],
        },
    };
}

module.exports = [
    makeConfig({ babel: false }),
    makeConfig({ babel: true }),
];
