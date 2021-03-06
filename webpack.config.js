const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/App.js',
    resolve: {
    extensions: [ '.js' ]
    },
    module: {
      rules: [
        {
            test: /\.css$/,
            use: [
              { loader: MiniCssExtractPlugin.loader },
              { loader: 'css-loader', options: { importLoaders: 1 } },
              { loader: 'postcss-loader', options: {
                ident: 'postcss',
                plugins: () => [
                  require('postcss-custom-properties')({ // for css vars
                    preserve: false, // completely reduce all css vars
                    importFrom: [
                      'src/fullcalendar-vars.css'
                    ]
                  }),
                  require('postcss-calc'),
                  require('postcss-breakpoints')
                ]
              } }
            ]
          }
      ]
    },
    output: {
        filename: 'App.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'App.css'
        })
    ]
  }