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

