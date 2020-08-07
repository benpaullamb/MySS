
module.exports = {
    entry: './src/js/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};