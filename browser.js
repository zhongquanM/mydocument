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
  // 第一个识别的是Opera，因为它的用户代理字符串可能完全模仿其他浏览器，不相信Opera！！！
  if(window.opera){
    engine.ver = window.opera.version();
  
  }
  
  
  
  
  
  
  return {
    engine: engine
  };

}();
