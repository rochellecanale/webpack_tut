var webpack = require('webpack')

var config = {
    context: __dirname + '/src', // __disname root of project and /src is source
    entry: {
        app: './main.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, //rule for .js files
                exclude: /node_modules/,
                loader: "babel-loader" //name of the loader
            },
            {
                test: /\.css$/,
                use: ['style-loader', // order is important!
                'css-loader'] // this is loader first
            }
        ]
    }
}

module.exports = config;