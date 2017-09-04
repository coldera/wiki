<script>
Loader.load([
	'./assets/_new_vendors.js',
	'./assets/_new_vendors.css'
], function() {
	console.log(window.accdialog);
});

function fn1() {
	accdialog.alert('hello world');
}

function fn2() {
	accdialog.confirm('hello world',{
		okCallback: function() {
			alert('ok'); 
			this.removeSelf();
		},
		cancelCallback: function() {
			alert('cancel'); 
			this.removeSelf();
		}
	});
}

function fn3(e) {
	accdialog.notice('hello world',{
		dir: 'up',
		reTarget: document.querySelector('#noticeBtn')
	});

	e.preventDefault()
}

function fn4() {
	var box = accdialog.dialog('/data/accdialog_test_fn4.json', {
		title: '测试组件',
		contentAdapter: function(data) {
			return data.text;
		},
		fixed: true
	});
	box.on('dialog_ajax_done', function(e, data) {
		alert(JSON.stringify(data));
	});
}

function fn5() {
	accdialog.customBox('custom', {
		title: '测试组件',
		content: 'hello world',
		liveTime: 0,
		hasX: true,
		fixed: true,
		buttons: [
			{id:'btnid',value:'点我',callback:function(box){alert('呵呵');box.removeSelf()}},
			'cancel'
		]
	});
}

function fn6() {
	var box1 = accdialog.alert('第一个弹层', {
		alone: 0,
		liveTime: 0,
		hasX: true
	});

	var box2 = accdialog.alert('第二个弹层', {
		alone: 0,
		liveTime: 3000,
		dir: 'right',
		reTarget: box1,
		rePos: 0,
		hasX: true
	});
}

function fn7() {
	var box1 = accdialog.alert('hello world', {
		liveTime: 0,
		buttons: [
			{id:'btnid',value:'点我',callback:function(box){alert('呵呵');box.removeSelf()}},
			{id:'link-xx',value:'链接',link:'http://g.cn', target:'_blank'},
			'cancel'
		]
	});
}

function fn8() {
	accdialog.alert('hello world', {
		title: '测试组件',
		content: 'hello world2',
		liveTime: 0,
		fixed: true,
		buttons: [
			{id:'btnid',value:'点我',callback:function(box){alert('呵呵');box.removeSelf()}}
		]	
	});
}

function fn9() {
	var box = accdialog.alert('hello world', {
		liveTime: 0,
		fixed: true,
		hasX: true
	});

	setTimeout(function() {
		box.setContent('hell world');
	}, 2000);
}

</script>

通用弹层组件
=============================

在项目中的路径 ```/src/scripts/plugins/accdialog.js```

- - -

组件的静态方法
---------------

- - -

### ```.alert(str, settings) ```

> 弹出一个持续时间为2秒的弹层

+ **str** [String] 弹层的HTML字符串
+ **settings** [Object] 可选，弹层的配置信息，参考下一节的配置，配置参数可以覆盖默认配置

> Example:

```javascript
var dialog = require('scripts/plugins/accdialog');
dialog.alert('hello world');
```
<a href="#fn1" onclick="fn1()">试试看</a>

- - -

### ```.tips(str, settings) ```

> 基本上和 alert 方法相同，只是为了兼容旧项目

- - -

### ```.confirm(str, settings) ```

> 弹出一个带有确认和取消按钮的弹层

+ **str** [String] 弹层的HTML字符串
+ **settings** [Object] 可选，弹层的配置信息，参考下一节的配置，配置参数可以覆盖默认配置

> Example:

```javascript
var dialog = require('scripts/plugins/accdialog');
dialog.confirm('hello world',{
	okCallback: function() {
		alert('ok'); 
		this.removeSelf();
	},
	cancelCallback: function() {
		alert('cancel'); 
		this.removeSelf();
	}
});
```
<a href="#fn2" onclick="fn2()">试试看</a>

- - -

### ```.notice(str, settings) ```

> 弹出一个持续时间为3秒带有箭头的提示层

+ **str** [String] 弹层的HTML字符串
+ **settings** [Object] 可选，弹层的配置信息，参考下一节的配置，配置参数可以覆盖默认配置

> Example:

```javascript
var dialog = require('scripts/plugins/accdialog');
dialog.notice('hello world', {
	dir: 'up',
	reTarget: document.querySelector('#noticeBtn')
});
```
<a id="noticeBtn" href="#fn3" onclick="fn3()">试试看</a>

- - -

### ```.dialog(url, settings) ```

> 弹出一个弹层，内容由请求给定的接口返回

+ **url** [String] 获取内容的ajax请求接口
+ **settings** [Object] 可选，弹层的配置信息，参考下一节的配置，配置参数可以覆盖默认配置

> Example:

```javascript
var dialog = require('scripts/plugins/accdialog');
var box = dialog.dialog('/data/accdialog_test_fn4.json', {
	title: '测试组件',
	contentAdapter: function(data) {
		return data.text;
	},
	fixed: true
});
box.on('dialog_ajax_done', function(e, data) {
	alert(JSON.stringify(data));
});
```
<a href="#fn4" onclick="fn4()">试试看</a>

- - -

### ```.customBox(type, settings) ```

> 弹出一个完成自定义类型和设置的弹层

+ **type** [String] 自定义弹层类型
+ **settings** [Object] 可选，弹层的配置信息，参考下一节的配置，配置参数可以覆盖默认配置

> Example:

```javascript
var dialog = require('scripts/plugins/accdialog');
dialog.customBox('custom', {
	title: '测试组件',
	content: 'hello world',
	liveTime: 0,
	hasX: true,
	fixed: true,
	buttons: [
		{id:'btnid',value:'点我',callback:function(box){alert('呵呵');box.removeSelf()}},
		'cancel'
	]	
});
```
<a href="#fn5" onclick="fn5()">试试看</a>

- - -

配置
---------------

> 每一个 accdialog 的静态方法都可以传入配置信息 settings 参数

### 基本配置

+ **content** [String] 弹层的内容
+ **title** [String] 弹层的标题
+ **fixed** [Boolean] 弹层的position是否是fixed
+ **hasX** [Boolean] 弹层是否有关闭的叉
+ **noXSpace** [Boolean] 弹层是否添加X的位置
+ **noMask** [Boolean] 是否不需要后面的蒙层
+ **liveTime** [Number] 弹层多长时间后自动消失，默认0为不自动消失
+ **width** [Number] 弹层宽度
+ **minWidth** [Number] 弹层最小宽度
+ **position** [Object] 指定弹层绝对位置，例如｛x:0,y:0｝
+ **alone** [Number] 弹层显示时，是否需要移除其他弹层，
说明 2:同类弹层互斥，1:与所有弹层互斥，0:不互斥。默认值为1.

> Example:

```javascript
var dialog = require('scripts/plugins/accdialog');
var box1 = dialog.alert('第一个弹层', {
	alone: 0,
	liveTime: 0,
	hasX: true
});

var box2 = dialog.alert('第二个弹层', {
	alone: 0,
	liveTime: 3000,
	dir: 'right',
	reTarget: box1,
	rePos: 0,
	hasX: true
});
```
<a href="#fn6" onclick="fn6()">试试看</a>

+ **buttons** [Array] 弹层的按钮列表，长度为0时不显示
配置内置按钮：['ok','cancel']
配置自定义按钮：[{id:'btnid',value:'点我',callback:function(box){console.log('呵呵')}}]
混合配置：['ok',{id:'btnid',value:'点我',callback:function(box){console.log('呵呵')}}]
重置内置按钮：[{id:'ok',value:'接受',style:'lightgray'},{id:'cancel',value:'不接受',callback:function(){console.log('呵呵')}}]
纯链接：[{id:'link-xx',value:'点我',link:'http://g.cn', target:'_blank'}]

```javascript
var dialog = require('scripts/plugins/accdialog');
var box1 = dialog.alert('hello world', {
	liveTime: 0,
	buttons: [
		{id:'btnid',value:'点我',callback:function(box){alert('呵呵');box.removeSelf()}},
		{id:'link-xx',value:'链接',link:'http://g.cn', target:'_blank'},
		'cancel'
	]
});

```
<a href="#fn7" onclick="fn7()">试试看</a>

- - -

### 相对位置与箭头配置

+ **reTarget** [HTML Element | JQ Element Object] 弹层定位的参考元素对象
+ **dir** [String] 弹层相对reTarget的方向 取值:left right up down center
+ **arrowPos** [Number] 指定弹层箭头的偏移位置，取值区间[0,1]，例如中间就为0.5，超出取值范围不显示箭头
+ **rePos** [Number] 指定弹层相对reTarget的偏移位置，取值区间[0,1]，例如中间就为0.5
+ **autoAdjust** [Boolean] 位置不够显示时是否自动调整方向
+ **arrowSpace** [Number] 箭头与reTarget的间隔

- - -

### 事件配置

+ **okCallback** [Function] 点了id为ok的按钮后的回调
+ **cancelCallback** [Function] 点了id为cancel按钮后的回调
+ **xCallback** [Function] 点了x后的回调
+ **closedCallback** [Function] 弹层消失后的回调

- - -

实例的属性和方法
---------------

> 每一次的 accdialog 静态方法的调用，都会进行一次实例化
> 实例化的对象 box，是对弹层 DOM 的 JQ 对象的扩展
> 所以实例化后的对象，具有 JQ 元素对象实例的方法，还具有以下方法

- - -

### ```.removeSelf() ```

> 把自身的弹层对象卸载掉

> Example:

```javascript
var dialog = require('scripts/plugins/accdialog');
dialog.alert('hello world', {
	title: '测试组件',
	liveTime: 0,
	fixed: true,
	buttons: [
		{id:'btnid',value:'点我',callback:function(box){alert('呵呵');box.removeSelf()}}
	]	
});
```
<a href="#fn8" onclick="fn8()">试试看</a>

- - -

### ```.setPosition(settings, notAdjust) ```

> 重新定位弹层的位置

+ **settings** [Object] 可选，参考第二节相对位置与箭头配置部分
+ **notAdjust** [Boolean] 不进行位置自动调整

- - -

### ```.setContent(str) ```

> 为弹层设置内容

+ **str** [String] 弹层的HTML字符串

> Example:

```javascript
var dialog = require('scripts/plugins/accdialog');
var box = dialog.alert('hello world', {
	liveTime: 0,
	fixed: true	
});

setTimeout(function() {
	box.setContent('hell world');
}, 2000);

```
<a href="#fn9" onclick="fn9()">试试看</a>

- - -

消息/事件
---------------
> 组件中有实现了一些消息的订阅和发布，因为是利用 jQuery 的消息机制，所以订阅和发布都有其上下文

+ **dialog_ajax_done** 上下文为弹层的实例对象，类型为 dialog 的弹层专用，发布一个 ajax 请求结束的事件，参考 .dialog 静态方法的说明
+ **box_remove** 上下文为弹层的实例对象，发布一个弹层自身卸载的消息
+ **accdialog_hide** 上下文为 window，订阅一个消息，用于重新检查蒙层的显示逻辑
+ **accdialog_show** 上下文为 window，订阅一个消息，用于指定弹层蒙层的显示
```$(window).on('accdialog_show', function(e, data) {...})``` 参数 data 是一个扩展，目前只获取 data.box 做为弹层对象实例 


- - -
