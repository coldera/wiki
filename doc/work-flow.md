webpack工作流说明
=============================

主要依赖模块
---------------
+ **async** : 异步编程模块，在辅助工具中用于异步读取文件信息

+ **autoprefixer** : 用于在css中生成各种浏览器前缀

+ **babel-core**,**babel-preset-es2015** : 编译es2015/es6

+ **css-loader** : 用于处理css中的文件引用（比如url()）

+ **ejs-loader** : 用于解析页面模板文件中的ejs标记

+ **expose-loader** : 用于把模块暴露到全局作用域

+ **extract-text-webpack-plugin** : 用于把内容（这里主要用于css）从bundle文件中提取出来做为独立文件

+ **gaze** : 用于监听项目文件变化（这里主要是进行热替换）

+ **glob** : 用于文件检索

+ **handlebars**,**handlebars-layouts** : handlebars模板引擎（这里主要用于解析css sprite模板）

+ **html-webpack-harddisk-plugin** : 用于把html/jsp输出到硬盘上（配合html-webpack-plugin使用）

+ **html-webpack-plugin** : 用于构建html/jsp文件

+ **mkdirp** : 用于创建文件目录

+ **node-sass** : 用来给node和libSass（sass的C语言实现）搭桥，通过node来调用Sass的编译和输出

+ **postcss-loader** : 用postcss来处理js文件中的css资源

+ **sass-loader** : 用sass来处理js文件中的css资源

+ **style-loader** : 用来把css用style标签注入到页面模板中（然后再用extract-text-webpack-plugin抽取出来）

+ **swig** : swig模板引擎，页面最主要的模板引擎

+ **swig-loader** : 用于webpack和swig建立关系

+ **tmod-loader** : 用于编译artTemplate模板

+ **underscore** : 基础的语言扩展库

+ **url-loader** : 用于把小图片转成base64 DataURL

+ **webpack-dev-server** : 给项目建立一个静态资源live reloading服务

+ **webpack-manifest-plugin** : 用于输出一个入口文件的列表

+ **webpack-md5-hash** : 用于使用md5替换webpack生成的hash

+ **webpack-spritesmith** : 用于输出sprite图片和css sprite模板

+ **yaml-front-matter** : 用于解析页面模板中的yaml标记

+ **yargs** : 用于解析node命令行的参数

+ **/tools/hashedModuleIdsPlugin.js** : 用于把webpack的模块ID转为hash（根据本地路径和文件名）

+ **/tools/templatePlugin.js** : 针对开发环境的html-webpack-plugin替代（提高编译效率）

- - -

配置和启动
---------------

### 1. 配置

<md-path>/config/config.js</md-path>
项目公共配置，包含项目文件结构配置，公共资源配置
确保所有开发者都一致，具体可配置内容看文件的内部注释


<md-path>/config/myconfig.js</md-path>
开发者个性化配置，目前只用于开发环境域名和端口的配置



- - -

### 2. 启动命令

工作流有两个自定义的命令，其实是把一串参数简化成一个别名。

```npm start```: 是启动开发环境的命令，你在平常的开发中需要先跑
```npm run public```: 是启动打包项目代码的命令，你在要打包代码提交svn的时候跑

- - -


规范和语法
---------------

### 1. 页面模板

页面模板主要由3部分组成：**布局** **模块** **页面主体** 
布局放在<md-path>/src/swigLayout/</md-path>目录中，模块放在<md-path>/src/swigLayout/modules/</md-path>目录中，页面主体放在<md-path>/src/swig/</md-path>目录中

一个基本的布局如下：
```
{% include 'modules/header.html' %}
{% include 'modules/nav-header.html' %}
<div class="body-content">
    {% block content %}
    {% endblock %}
</div>
{% include 'modules/footer.html' %}
```
+ **modules/header.html** 表示页面的头部模块
+ **modules/nav-header.html** 表示页面的导航模块
+ **modules/footer.html** 表示页面的底部模块
+ **{% block content %}{% endblock %}** 是页面的主体的占位标记

- - -

### 2. 页面主体

页面主体按后端的项目分别放到swig目录中对应的各个项目目录中。
<md-em>每个项目目录都应该包含以下4个基本文件，用于公共资源的独立上线更新</md-em>
```
header.jsp 
footer.jsp
common-statics-css.jsp
common-statics-js.jsp
```

一个基本的页面主体如下：

```
---
title: '页面的标题'			//配置页面标题
entry: path-to-entry.js 	//配置页面的入口文件（bundle）
---							

{% extends 'default.html' %}		//指定页面的布局文件

{% block content %}
<div>这里是页面的HTML代码</div>		//页面主体
{% endblock %}
```

- - -

### 3. 页面模板语言

在jsp文件中可以使用 ejs, swig, jstl 3种模板语言
ejs 和 swig 会在 webpack 启动后被编译（打包前），jstl 只会在 tomcat 服务启动后编译（打包后）
一般情况推荐统一使用 swig ，ejs只是为了兼容

[ejs模板语法](http://www.embeddedjs.com/)
[swig模板语法](http://node-swig.github.io/swig-templates/docs/tags/)
[jstl语法](https://www.tutorialspoint.com/jsp/jsp_standard_tag_library.htm)

- - -

### 4. js模板语言

js 模板语言统一使用 artTemplate，模板文件使用.tpl 后缀，放到<md-path>/src/tpl/</md-path> 目录中

[artTemplate模板语法](https://aui.github.io/art-template/docs/)

- - -

### 5. css sprite 图片

+ 默认把需要拼接的图片，放到<md-path>/src/images/icon/</md-path>目录中

+ 运行 webpack 之后会在<md-path>/src/sass/sprites/</md-path>目录中生成对应的 sass 文件

+ 如果项目中需要多个 css sprite 图片，可以在<md-path>/src/images/</md-path>目录中新建一个目录来存放图片，并在 webpack 的配置文件中添加一个 SpritesmithPlugin 实例到工作流中 <md-em>（这一项后续建议应该提取到 config.js 文件中）</md-em>

+ 假如你有一张文件名为 home.png 的图片，使用的时候类似这样：

```
<i class="icon icon-home"></i>
```

- - -

### 6. sass语法

项目中使用 sass 来编写并输出 css 文件，支持 compass

[sass语法](http://sass.bootcss.com/docs/sass-reference/)
[compass用例](http://compass-style.org/examples/)
- - -