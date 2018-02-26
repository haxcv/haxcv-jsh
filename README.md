# haxcv-jsh
haxcv-jsh is javascript Compiler with 

used as Javascript Compiler with Haxcv Templates Engine 

# Install 
``
npm install haxcv-jsh
``
# simple compilation 
```javascript
var jsh = require("haxcv-jsh");
var string = "<?  print("hello wold");  ?>";
var newStr = jsh.compile(string);
```

# export data
```javascript
var jsh = require("haxcv-jsh");
jsh.name = "Manassa Joseph";
var string = "<?  {{  <p>full name : {{+this.name+}} </p>   }}  ?>";
var newStr = jsh.compile(string);
```
### readFile

```javascript
'use strict';
let fs = require('fs');
let jsh = require("haxcv-jsh");

let data = fs.readFileSync('templates.jsh');
let newData = jsh.compile(data);

console.log(newData);

```
> template.jsh
```html
<?
 {{
<!DOCTYPE html>
<html>
<head>
	<title>{{+this.title+}}</title>
</head>
<body>
 }}


this.list.forEach(e){
	{{
		<h2>{{+e+}}</h2>
	}}
 }

?>      
</body>
</html>

```
