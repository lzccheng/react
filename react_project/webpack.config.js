const json = {
  entry:{
    main:'./src/main.js',
    app:'./src/app.js'
  },
  output:{
    path:__dirname+'/public/js',
    filename:'[name].js'
  },
  devtool: 'eval-source-map',
  devServer:{
    contentBase:'./public',
    port:8088,
    inline:true,
    hot:true,
    historyApiFallback: true,
  },
  module:{
      rules:[
        {
          test:/\.js$|\.jsx$/,
          use:{
            loader:'babel-loader',
          }
        },
        {
          test:/\.css$/,
          use:[
            {
              loader:'css-loader',
            },
            {loader:'style-loader'},
            {loader:'postcss-loader'}
          ]
        }
      ]
  },
};

module.exports = json;
