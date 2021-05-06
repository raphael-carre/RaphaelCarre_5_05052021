const path = require("path")
const miniExtractTextPlugin = require("mini-css-extract-plugin")

let cssLoaders = [{
    loader: "css-loader"
}]

cssLoaders.push({
    loader: "resolve-url-loader",
})

let config = {
    entry: {
        app: [
            "./assets/js/index.js",
            "./assets/sass/style.scss"
        ]
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "js/[name].js",
        publicPath: "/public/"
        
    },
    resolve: {
        alias: {
            "@img": path.resolve(__dirname, "assets/images/"),
            "@js": path.resolve("./assets/js/"),
            "@css": path.resolve("./assets/sass/")
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: miniExtractTextPlugin.loader
                    },
                    ...cssLoaders,
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "img/[name].[ext]",
                            limit: 8192
                        }
                    },
                    {
                        loader: "img-loader"
                    }
                ]
            }
        ]
    },
    watch: true,
    plugins: [
        new miniExtractTextPlugin({filename: "css/style.css"})
    ]
}

module.exports = config