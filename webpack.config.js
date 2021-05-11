const path = require("path")
const Webpack = require('webpack')
const miniExtractTextPlugin = require("mini-css-extract-plugin")
const dev = process.env.NODE_ENV === "development"

let cssLoaders = [{
    loader: "css-loader",
    options: {
        importLoaders: 1
    }
}]

if (!dev) {
    cssLoaders.push({
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: [
                    require('autoprefixer')({
                        overrideBrowserslist: [
                            'last 2 versions', 'ie > 8'
                        ]
                    })
                ]
            }
        }
    })
}

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
        publicPath: dev ? "/public/" : ""
        
    },
    resolve: {
        alias: {
            "@img": path.resolve("./assets/images/"),
            "@js": path.resolve("./assets/js/"),
            "@css": path.resolve("./assets/sass/"),
            "@fonts": path.resolve("./assets/fonts/")
        }
    },
    devtool: dev ? "eval-cheap-module-source-map" : false,
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
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: "fonts/"
                }
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
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        overlay: {
            warnings: true,
            errors: true
        },
        public: "macbook.local:8080",
        bonjour: true
    },
    plugins: [
        new Webpack.DefinePlugin({
            'process_env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new miniExtractTextPlugin({filename: "css/style.css"})
    ]
}

if (dev) {
    config.plugins.push(
        new Webpack.HotModuleReplacementPlugin()
    )
}

module.exports = config