新手上路
=============================

准备工作
---------------

### 1. 安装一些软件

+ git [花式安装](https://git-scm.com/book/zh/v1/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git)
+ svn 建议 win:[tortoisesvn](https://tortoisesvn.net/downloads.zh.html) mac:[cornerstone](http://www.jianshu.com/p/fc74e6351362)
+ tomcat <md-tips>（找同事copy）</md-tips>
+ nginx <md-tips>（找同事copy）</md-tips>
+ git bash <https://git-for-windows.github.io/><md-tips>（如果你用windows系统）</md-tips>

- - -

### 2. 安装工作流的依赖

(1) 安装nodejs <http://nodejs.cn/download/>

(2) 安装npm（建议npm 5+） 或者 yarn。一般安装node会附带npm <md-tips>（之前npm 5没出来，安装的模块会和以后的有冲突，找个机会把npm更新到npm 5+吧）</md-tips>

(3) 安装其他主要的依赖：

+ python 2.7 <https://www.python.org/downloads/>
+ ruby <https://rubyinstaller.org/downloads/>
+ sass <http://sass-lang.com/install>
+ compass <http://compass-style.org/install/>
+ webpack <http://webpack.github.io/docs/tutorials/getting-started/>

(4) 通过package.json，npm.lock或yarn.lock <md-tips>（找同事copy）</md-tips>安装其他模块 

### 3. 项目基础结构

> 创建项目的初始目录结构<md-tips>（找同事copy，旧项目并不是这个结构）</md-tips>

> 一个完整的项目目录结构如下：

```javascript
│  .babelrc		//babel配置
│  .gitignore
│  package.json 
│  webpack.config.babel.js 		//webpack工作流运行入口
│
├─config
│      config.js 	//工作流通用配置
│      myconfig.js 		//工作流个性配置
│
├─data
│      scss.template.handlebars 	//css sprite生成规则模板
│
├─helpers 	//artTemplate模板引擎基础文件
│      helper.js
│      template.js
│
├─node_modules
├─public 	//生产环境输出目录
├─src 	//静态资源和页面目录
│  ├─images 	//放图片
│  │   └─icon 	//放图标
│  ├─sass 	//放sass文件
│  ├─scripts 	//放js文件
│  ├─swig 	//放页面文件
│  ├─swigLayout 	//放页面模板
│  └─tpl 	//放artTemplate模板文件
├─static 	//开发环境输出目录
└─tools 	//webpack工作流辅助文件
        hashedModuleIdsPlugin.js
        templatePlugin.js
        tools.js
        underscoreHelper.js
```

- - -

代码和开发
---------------

### 1. 代码管理

+ 前端开发代码使用 git 管理，git公共仓库使用gitolite部署在 **git@192.168.9.146:acc369** 
+ 前端生产代码使用 svn 管理 
+ 需要新增项目仓库的话： `git remote add origin git@192.168.9.146:acc369/your-project-name.git`

- - -

### 2. 添加git用户

(1) 你把 `git@dev:gitolite-admin` clone 下来

(2) A同学用`ssh-keygen`命令生成用户公钥

(3) 你把A同学的公钥文件<md-tips>（可能是a.pub）</md-tips>放到 gitolite-admin 的 keydir 目录中，push 上去

(4) 最后在 gitolite.conf 中为A同学添加权限

(5) 现在A同学就可以自行获取项目代码了

(6) 可以到用户.ssh目录下 `vi ~/.ssh/config` 去配置一下别名

- - -

### 3. 启动项目

+ 同步 jar 包，启动 tomcat
+ 启动 nginx
+ 启动 webpack 开发服务 `npm start`
+ 开发完成后，用 webpack 打包代码 `npm run public`

- - -