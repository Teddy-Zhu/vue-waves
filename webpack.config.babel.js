export default {
    entry: './index.js',
    output: {
        path: './dist',
        filename: 'vue-waves.js',
        library: 'VueWaves',
        libraryTarget: 'umd',
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
        ]
    }
}
