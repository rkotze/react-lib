module.exports = {
    entry: {
        React: "./src/index.js",
        Examples: "./web-app/index.js"
    },
    output: {
        path: "./lib",
        filename: "[name]-lib.js",
        library: "[name]Lib",
        libraryTarget: "umd"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: "babel-loader"
            }
        ]
    },
    devServer: {
        inline: true,
        port: 8009
    },
    resolve: {
        extensions: ['', '.js', '.jsx'] 
    },
    externals: [
        "ReactLib"
    ]
};