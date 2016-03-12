module.exports = {
    entry: "./src/index.js",
    output: {
        path: "./lib",
        filename: "index.js"
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
    resolve: {
        extensions: ['', '.js', '.jsx'] 
    }
};