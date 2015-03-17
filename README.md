scripted Http
脚本化HTTP

The Hypertext Transfer Protocol (HTTP) specifies how web browsers get documents from and post form contents to web servers, and how web servers respond to those requests and posts. 
超文本传输协议浏览器如何从服务器获取文档和如何向服务器提交表单，服务器如何响应这些请求和提交。



Web browsers obviously handle a lot of HTTP. Usually HTTP is not under the control of scripts and instead occurs when the user clicks on a link, submits a form, or types a URL.
浏览器处理大量HTTP。HTTP并不在脚本的控制下，当用户点击链接、提交表单、输入URL时发生。


It is possible for JavaScript code to script HTTP, however. 
可以用JS代码脚本化HTTP。


HTTP requests are initiated when a script sets the location property of a window object or calls the submit() method of a form object. 
当脚本设置WINDOW对象的LOCATION属性时，或者调用FORM对象的SUBMIT()方法时，HTTP请求被初始化。


In both cases, the browser loads a new page. This kind of trivial HTTP scripting can be useful in a multiframed web page but is not the topic we’ll cover here.
在这两种情况下，浏览器加载新页面。在多框架网页中，这种平常的HTTP脚本化很有用，但并非我们讨论的主题。


Instead, this chapter explains how scripts can communicate with a web server without causing the web browser to reload the content of any window or frame.
本章解释了：脚本如何与服务器通信，在不造成浏览器重新加载窗口和框架内容的情况下。



