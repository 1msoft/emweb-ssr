const fs = require('fs')
const path = require('path')
const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const TerserPlugin = require('terser-webpack-plugin')

// build包分析
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
// 过滤控制台警告
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

// 配置.env文件
require('dotenv')
const Dotenv = require('dotenv-webpack')

const isDev = process.env.NODE_ENV !== 'production';

// Where your modifyVars.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/styles/modifyVars.less'), 'utf8')
)

// fix antd bug in dev development
const devAntd = '@import "~antd/dist/antd.less";\n';
const stylesData = fs.readFileSync(
  path.resolve(__dirname, './assets/styles/_style.less'),
  'utf-8'
);

fs.writeFileSync(
  path.resolve(__dirname, './assets/styles/system-style.less'),
  isDev ? `${devAntd}${stylesData}` : stylesData,
  'utf-8'
);

module.exports = withLess(
  withCss({
  // 禁用文件路由
  // useFileSystemPublicRoutes: false,

  // css模块导入
  // cssModules: true,

  // less配置参数
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables,
    localIdentName: '[local]___[hash:base64:5]',
  },
  webpack: (config, { dev, isServer }) => {
    config.node = { fs: 'empty' }

    if (isServer) {
      config.plugins.push(
        ...[
          new TerserPlugin({
            terserOptions: {
              ecma: 6,
              warnings: false,
              extractComments: false,
              compress: {
                drop_console: true
              },
              ie8: false
            }
          }),
          // 配置.env文件
          new Dotenv({
            path: path.join(__dirname, '.env'),
            systemvars: true
          }),
          // 配置控制台警告过滤
          new FilterWarningsPlugin({
            exclude: /chunk styles \[mini-css-extract-plugin\]/,
          })
      ]);
      config.devtool = 'cheap-module-inline-source-map';
    }
    // 配置文件路径别名
    config.resolve.alias = {
      ...config.resolve.alias,
      ["@pages"]: path.resolve(__dirname, 'pages'),
      ["@stores"]: path.resolve(__dirname, 'stores'),
      ["@assets"]: path.resolve(__dirname, 'assets'),
      ["@components"]: path.resolve(__dirname, 'components'),
      ["@layouts"]: path.resolve(__dirname, 'layouts'),
      ["@utils"]: path.resolve(__dirname, 'utils'),
      ["@config"]: path.resolve(__dirname, 'config'),
    }

    // webpack插件
    config.module.rules = [
      ...config.module.rules,
      ...[
        // 支持图片导入
        {
          test: /\.(txt|jpg|png|svg|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                context: '',
                outputPath: 'static',
                publicPath: '_next/static',
                name: '[path][name].[hash].[ext]'
              }
            }
          ]
        },
        // 支持文本导入
        {
          test: /\.(svg|eot|otf|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
              publicPath: './',
              outputPath: 'static/',
              name: '[name].[ext]'
            }
          }
        },
        // eslint检测&自动修复
        {
          test: /\.js$/,
          enforce: 'pre',
          include: [
            path.resolve(__dirname, 'pages'),
            path.resolve(__dirname, 'components'),
            path.resolve(__dirname, 'assets'),
            path.resolve(__dirname, 'stores'),
            path.resolve(__dirname, 'layouts'),
          ],
          options: {
            configFile: path.resolve('.eslintrc'),
            eslint: {
              configFile: path.resolve(__dirname, '.eslintrc')
            }
          },
          loader: 'eslint-loader'
        },
      ]
    ];
    return config
  }
}))
