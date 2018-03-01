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
jsh.title = "Welcome to haxcv";
jsh.keywords = ["Manassa","Js","haxcv","framewrok","jsH"];
let data = fs.readFileSync('template.jsh');
let newData = jsh.compile(data.toString());

console.log(newData);

```
> template.jsh
```html
<!DOCTYPE html>
<html>
<head>
    <title>{@this.title@}</title>
</head>
<body>

<?

 this.keywords.forEach((e) =>{
   {{
     <h2>keywords :  {{+e+}}</h2>
   }}
 });

 ?>  
</body>
</html>    
```

### require external jsH template 
```html
 <?
   jsH.require("./files/header.html);   
   jsH.require("./files/body.html);
   jsH.require("./files/footer.html);  
 ?>    
```
> header.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>Welcome to website </title>
</head>
<body>
    <header>
        <nav>
         <!-- header list here -->
        </nav>
    </header>
```
> body.html
```html
<?
var menus = ["home","login","signup","about us"];
    menus.forEach(e=>{
     {{
       <ul>
         <li>
            <a href="{{+e+}}">e</a>
         </li>
       </ul>
     }}
?>
```
> footer.html 
```html
<footer>
  <?
var menus = ["Policy","Terms","Cookies","Career"];
    menus.forEach(e=>{
     {{
       <ul>
         <li>
            <a href="{{+e+}}">e</a>
         </li>
       </ul>
     }}
?>
</footer>
</body>
</html>
```


