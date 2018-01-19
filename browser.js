var client = function(){
  var engine = {
    // 呈现引擎
    ie: 0,
    gecko: 0,
    webkit: 0,
    khtml: 0,
    opera: 0,
    // 具体的版本号
    ver: null,
  };
//   第一个识别的是Opera，因为它的用户代理字符串可能完全模仿其他浏览器，不相信Opera！！！
  var ua= navigator.userAgent;
  if(window.opera){
    engine.ver = window.opera.version();
    engine.opera = parseFloat(engine.ver);
  }
//   第二个呈现引擎是WebKit, 因为Webkit的用户代理字符串中包含“Gecko”和“KHTML”这两个字符串，所以如果首先检测它们，很可能会得出错误的结论。
//   webkit的用户代理字符串中的“AppleWebKit”是第一无二的
  else if (/AppleWebKit\/(\S+)/.test(ua)){
        engine.ver = RegExp["$1"];
        engine.webkit = parseFloat(engine.ver);
  }
// 第三个检测的呈现引擎是“KHTML”, 同样的，KHTML的用户代理字符串也包含“Gecko”，由于Konqueror 3.1及更早版本中不包含KHTML， 故而就要使用Konqueror的版
// 本来代替
  else if(/KHTML\/(S+)/.test(ua) || /Konqueror\/(S+)/.test(ua)){
    engine.ver = RegExp("$1");
    engine.khtml = parseFloat(engine.ver);
  }
// 第四个是检测Gecko(Firefox) 它的版本号是出现在字符串'rv:'的后面；
  else if(/rv:([^\)]+\) Gecko\/\d{8}/.test(ua)){
    engine.ver = RegExp("$1");
    engine.gecko = paresFloat(engine.ver);
  
  }
//   最后检测IE，IE的版本号位于字符串 "MSIE" 的后面、一个分号的前面
  else if (/MSIE ([^;]+)/.test(ua)){
    engine.ver = RegExp["$1"];
    engine.ie = parseFloat(engine.ver);
  };
  
  
  
  
  
  return {
    engine: engine
  };

}();
