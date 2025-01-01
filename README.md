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

## ...
