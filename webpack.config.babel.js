export default {
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'vue-waves.js',
        library: 'VueWaves',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
        ]
    }
}
