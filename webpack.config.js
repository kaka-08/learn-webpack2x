var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
//这行代码是配置热加载的   很重要 ，改变代码之后的及时刷新
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
/*  var commonConfig = {*/
      entry: {
        main: ['./src/index.js', hotMiddlewareScript]
      },
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:"/"
      },
      module:{
        rules:[
          {
             test: /\.css$/,  //载入css
             use: [
               'style-loader',
               'css-loader'
              ]
          },
           {
             test: /\.(png|svg|jpg|gif)$/, //载入图像
             use: [
               'file-loader'
             ]
           },
           {
            test: /\.(woff|woff2|eot|ttf|otf)$/, //加载字体
            use: [
               'file-loader'
             ]
           }
        ]
      },
      devtool: "cheap-eval-source-map",  //跟踪JavaScript错误异常 知识点在 source-map
      plugins: [
        //该插件自动生成 目标 html文件 
        new HtmlWebpackPlugin({
          title: 'Output Management',
          favicon: './favicon.ico'
        }),
        new webpack.HotModuleReplacementPlugin(),
      ],
      
      devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        inline:true,
        compress: true,
        port: 9000
      }
  };
/*  console.log('env', env);
  return commonConfig;
};*/



