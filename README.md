# learn-webpack2-07
webpack-dev-server + DevServer学习 02
=====================================
webpack-dev-server + express 配置服务
-------------------------------------------


这一demo的主要知识点在  这里
http://www.open-open.com/lib/view/open1456706930750.html  
关键词 ： Express结合Webpack的全栈自动刷新

在webpack.config.js 里面 声明 ：
 var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

其次，entry要这么配置： 

    entry: {
       main: ['./src/index.js', hotMiddlewareScript]
    },

hotMiddlewareScript 的值是 webpack-hot-middleware/client?reload=true ，其中 ? 后的内容相当于为webpack-hot-middleware设置参数，这里 reload=true 的意思是，如果碰到不能hot reload的情况，就整页刷新



