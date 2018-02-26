function  App(){
  
    this.type = {};
    this.Event = {};
    this.Evt = [];
    this.Events = [];
    this.scM = [];
    this.scH = [];
    this.cache = [];    
    this.temp    = [];
    this.tempURL = [];
    this.refrence = [];
    this.post = {};
    this.dirname = __dirname;
    this.filename = __filename;
    this.env = {};

    
    
  

  }

  

  App.prototype = {
 
  parseDef:function()
  {
    
    var haxcv = this;
    function stop() {
       df  = '';
    }
    var o = this;
    var jsH = {
      refrence:[],
      print() {
        df+= arguments[0];
    },
    require() {
      try{
        var fs = require("fs");
      var d =  fs.readFileSync(arguments[0]).toString();
        df += haxcv.compile(d || '');
      }catch(er)
      {
        df += er;

      }
    } 
     

  }

  function print() {
        df+= arguments[0];
    }
    
    
    

    var t , e , a , nd , reg;
    var DefData = (arguments[0] ? arguments[0]  : '');
    DefData = DefData.replace(/\n/g , "/*f909*/");
    var defPattern = this.explode('def' , DefData);
        if (defPattern == null) return DefData;
        for (var i = 0; i < defPattern.length; i++) {
        var df = '';
          t = defPattern[i];

          e = t.substring(2 , t.length - 2);
          e = e.replace(/"/g , '\"');
          e = e.replace(/'/g , '\"');
          e = e.replace(/{{/g , "df+=\'");
          e = e.replace(/}}/g , "\';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;");
          e = e.replace(/&lt;/g , "<");
          e = e.replace(/&gt;/g , ">");




          a;
          nd = '';

          try {
            a = eval(e);
          } catch (er) {
            var len = e.split("/*f909*/");
            var line = er.lineNumber;
            var lineN = Math.floor(Math.abs(er.columnNumber / len.length));
             lineN = lineN < 1 ? 1 : lineN;          
            a = " ";
          } finally {

          }

          a = a.replace(/;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;/g , '');

          DefData = DefData.replace(t , a == undefined ? '' : a);

        }


        return DefData.replace(/df\+=/g , '');
  },
  parseObj:function()
  {
    var t , e , a , nd , reg;
    var ObjData = arguments[0] ? arguments[0]  : '';
    var strPattern = this.explode('str', ObjData);
        if (strPattern == null) return ObjData;
        var item = 0;
        for (var i = 0; i < strPattern.length; i++) {
          t = strPattern[i];
          e =   t.substring(2 , t.length - 2);
          a;
          nd = '';
          try {
            a = eval(e);
            var reg = new RegExp(t, "ig");
            ObjData = ObjData.replace(t , a);
          } catch (er) {

            a = '';
            reg = new RegExp(t, "ig");
            ObjData = ObjData.replace(reg , a);
          } finally {

          }



        }
        item = 0;

        return ObjData;

  },
  compile:function()
  {
    var d1 = this.parseObj(arguments[0] ? arguments[0] : '').replace(/\?>/g , ' {{                        }}; ?>'),
        d2 = this.parseDef(d1);
        return d2.replace(/\/\*f909\*\//g , "\n" ).replace(/{{                        }};/g , '');
  },

  explode:function()
  {
  var Reg =   {
      str:/{@(.*?)@}/g,
      def:/\<\?(.*?)\?\>/g,
      vim:/{{(.*?)}}/g,
    }
    try {

      return arguments[1].match(Reg[arguments[0]]);
    } catch (e) {
    } finally {

    }
  }

  
  

}


 module.exports = new App;

 
