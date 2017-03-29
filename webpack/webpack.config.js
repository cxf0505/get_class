const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');//命令html插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");//命令css插件
const html = new HtmlWebpackPlugin({ //配置下html
	filename: './es6.html',//编译后的文件名
	template: './index.html'//模板文件名
}) ;
const csss = new ExtractTextPlugin("styles.css");//配置下编译好的css存放路径
module.exports = {
	entry:{//入口
		web:'./web/app'
	},
//	plugins:[//插件第一个方式，内联样式
//		new HtmlWebpackPlugin({
//			title:'我的应用',
//			filename:'./index.html'
//		}) 
//	], 
	plugins:[//我配置好了的插件
		html,
		csss
	],
	output:{//如何输出？---到哪里？
		path:path.resolve(__dirname,'build'),//配置好的文件输出路径为哪里？
		filename:'[name].js'
	},
	module:{//模块
		rules:[//模块规则（配置加载器、解析器等选项）
//		{
//			test:/\.js$/,
//			use:'babel-loader'
//		}
//		{
//			test:/\.css$/,
//			use:['style-loader','css-loader']	
//		},
		{//css
	        test: /\.css$/,
	        use: ExtractTextPlugin.extract({
	          fallback: "style-loader",
	          use: "css-loader"
	        })
      	},
		{//react
          test: /\.js$/,
          use: [
            // 'react-hot-loader' ,
          {
            loader:'babel-loader',
            options:{
              presets:["latest","react"]
            }
          }],
          exclude: [path.resolve(__dirname, 'node_modules')]//排除当前目录下node_modules
      	}
		]
	} 
}
