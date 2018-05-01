module.exports = {
    mode: 'development',
    watch: true,
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?/,
                exclude: /node_modules/,
                // include: [/node_modules\/bem-react-components/, /src/],
                use: [
                    // {
                    //     loader: 'webpack-bem-loader',
                    //     options: {
                    //         levels: [
                    //             './node_modules/bem-react-components/blocks',
                    //             './src/my-awesome-blocks'
                    //         ],
                    //         techs: ['js', 'css'],
                    //     }
                    // },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/env',
                                '@babel/react',
                                '@babel/typescript',
                            ],
                            plugins: [
                                '@babel/proposal-class-properties',
                                '@babel/proposal-object-rest-spread',
                            ],
                        },
                    },
                ],
            },
        ],
    },
};
