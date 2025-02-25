# 概要

## 初始化工程

1、执行 pnpm init 初始化 package.json

2、手动创建 packages、apps、components、libs 文件夹，搭建monorepo

3、手动创建 pnpm-workspace.yaml 配置文件，用于同时管理多个项目

## 安装测试环境

（

- 全局安装： pnpm add XXX -w
- 局部项目安装： cd 到指定目录下 pnpm add XXX 或者在此根目录 pnpm add XXX --filter package-name
- 内部项目互相引用安装（类似软链）： pnpm add XXX --filter package-name
  ）

### 代码美化（全局安装）

#### 1、安装 eslint

pnpm add eslint -D -w

npx eslint --init

// 由于自动的脚本，没-w，会报错，报错部分安装下面这个
pnpm add @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest -D -w

#### 2、安装 eslint 在 vscode 的插件

### 代码检测（全局安装）

#### 1、安装 prettier

pnpm add prettier -D -w

// 解决 Prettier 和 eslint 的冲突
pnpm add eslint-plugin-prettier eslint-config-prettier -D -w

#### 2、新建一个 .prettierrc.json 配置文件，进行配置

#### 3、安装 prettier 在 vscode 的插件

### 安装 Typescript

#### 1、安装 typescript（局部安装）

pnpm add -D typescript --filter react-master

#### 2、初始化 typescript

tsc --init， 配置tsconfig.ts
(tip: 如果由于环境变量或文件夹权限问题导致识别不了tsc，那么直接执行 npx tsc --init)

#### 3、安装 typescript-eslint 插件（全局安装）

pnpm add @typescript-eslint/eslint-plugin -D -w

## 安装 React

(

- 如果安装不上，可以切换最新淘宝镜像
- npm config set registry https://registry.npmmirror.com
- npm config set sass_binary_site https://npmmirror.com/mirrors/node-sass

- 其他镜像源：
  npm 官方原始镜像网址是：https://registry.npmjs.org/
  淘宝最新 NPM 镜像：https://registry.npmmirror.com
  阿里云 NPM 镜像：https://npm.aliyun.com
  腾讯云 NPM 镜像：https://mirrors.cloud.tencent.com/npm/
  华为云 NPM 镜像：https://mirrors.huaweicloud.com/repository/npm/
  网易 NPM 镜像：https://mirrors.163.com/npm/
  中科院大学开源镜像站：http://mirrors.ustc.edu.cn/
  清华大学开源镜像站：https://mirrors.tuna.tsinghua.edu.cn/
  腾讯，华为，阿里的镜像站基本上比较全
  )

- 打包相关
  webpack
  webpack-cli
  webpack-merge
  webpack-dev-server

- babel相关
  babel-loader
  @babel/core
  @babel/preset-react
  @babel/preset-env
  @babel/preset-typescript

- css相关
  style-loader
  css-loader
  (这玩意很坑, 默认安装最新的是^7.1.2会报undefined, 只有^6.x才能用,推荐装^6.8.1, github上的css-loader有issue, https://blog.csdn.net/weixin_44523653/article/details/140782444)
  less
  less-loader
  postcss
  postcss-loader
  tailwindcss
  autoprefixer

- 插件相关
  css-minimizer-webpack-plugin
  terser-webpack-plugin
  mini-css-extract-plugin
  html-webpack-plugin

- react框架相关
  react
  react-dom
  react-router-dom
  @types/react
  @types/react-dom
  @types/react-router-dom

- 配置webpack
  ![图片示例](/success.png)

## 内置包作为命令行调用的能力

1、libsssssssssssss中，package.json中增加bin字段的配置

2、@hhxxyy/react-master中，重新安装libsssssssssssss

3、在@hhxxyy/react-master的package.json中配置命令，从而让package.json去扫描node_modules的bin

## 分支说明（作者自己的备忘录，无需关注）

1、master、dev：个人用来开发业务的分支
2、backup_template: 刚搭建完的项目的模板备份，不存在业务逻辑
