/**
 * https://juni-official.tistory.com/248
 *
 */

const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';
const envPath = `./.env.${isDevelopment ? 'dev' : 'prod'}`;

dotenv.config({
	path: envPath,
});

const config = {
	name: 'React-webpack-babel-setting',
	mode: 'development',
	devtool: 'eval',
	entry: {
		app: './src/index.tsx',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							'@babel/preset-typescript',
						],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new Dotenv({
			path: envPath,
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html', // 템플릿 설정
			minify:
        process.env.NODE_ENV === 'production'
        	? {
        		collapseWhitespace: true, // 빈칸 제거
        		removeComments: true, // 주석 제거
        	}
        	: false,
		}),
		new webpack.ProvidePlugin({
			// 리액트 자동 주입
			React: 'react',
		}),
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		publicPath: '/',
	},
	devServer: {
		static: './dist',
		port: 3000,
		hot: true, // 핫 모듈 교체(HMR) 활성화
		compress: true,
		open: true,
		historyApiFallback: true,
	},
};

if (isDevelopment && config.plugins) {
	config.plugins.push(new webpack.HotModuleReplacementPlugin());
	config.plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = config;
