## 脚手架搭建
脚手架搭建来自于 **[使用npm发布一个react组件（踩坑实践）](https://juejin.cn/post/6844903928316821517)**



## 添加typescript

1. 根目录下添加tsconfig.json
2. 添加typescript和ts-loader包,ts-loader换awesome-typescript-loader包

        npm i typescript ts-loader -D //包编译出问题（不知道什么问题）

        npm i typescript awesome-typescript-loader -D


## 添加scss

添加 node-sass包 和 sass-loader包，需要分别添加，以及对应版本号

        npm i node-sass@6.0.1 --save-dev

        npm i sass-loader@10.2.1 --save-dev
