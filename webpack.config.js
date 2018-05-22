const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AutoPrefixer = require('autoprefixer');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");


const devMode = process.env.NODE_ENV !== 'production';


// Basiskonfig ohne "entry" und "output" - Pfad
// Diese werden unten einzellen definiert
var config = {

    // entry: {
    //     frontend: './src/App/public_src/frontend/webpack.js'
    // },
    //
    // output: {
    //     filename: '[name]/scripts.js',
    //     path: __dirname +'/dist'
    // },
    //
    devtool: devMode ? 'source-map' : 'none',  // benoetigt fuer bestimmte plugins
    mode: devMode ? 'none' : 'production',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                options: {
                    presets: ['env']
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            // Browser List: http://browserl.ist/?q=last+3+version
                            plugins: () => [ AutoPrefixer({ browsers: ['last 4 versions'] })]
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name]-[hash:4].[ext]',
                            // path: '../'
                            // outputPath: 'frontend',
                            // publicPath: 'frontend',
                            // useRelativePath: true
                        }
                    }
                ]
            },
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
        ]
    },

    // Diese wahrscheinlich ab webpack 5 nicht mehr noetig sein, da native dabei
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true // set to true if you want JS source maps
          }),
          new OptimizeCSSAssetsPlugin({})
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({ filename: 'custom.css' }),
    ]

}



// INFO
//
// How to create multiple output paths in Webpack config
// https://stackoverflow.com/questions/35903246/how-to-create-multiple-output-paths-in-webpack-config/38132106#38132106
var frontendConfig = Object.assign({}, config, {
    // name: 'a',
    //entry: './src/js/index.js',
    entry: ['./src/frontend/js/index.js','./src/frontend/scss/custom.scss'],
    output: {
        filename: 'bundle.js',
        path: __dirname +'/dist/frontend'
    }
});

var backendConfig = Object.assign({}, config, {
    // name: 'b',
    entry: './src/App/public_src/backend/webpack.js',
    output: {
        filename: 'bundle.js',
        path: __dirname +'/dist/backend'
    }
});



module.exports = [
    //frontendConfig, backendConfig
    frontendConfig
];
