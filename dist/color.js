var color = (function () {
  'use strict';

  var browser = (typeof window !== 'undefined' && typeof document !== 'undefined');
  var worker = (typeof self !== 'undefined' && typeof importScripts === 'function');
  var cli = (!browser && !worker);

  var env = {
    cli: cli
  };

  var color = (function(){
    var color = { bg: {} }, i,
      variant = ['black','red','green','orange','blue','purple','teal','white','gray'],
      end = "\x1b[0m", tag = 'code'
    ;
    for(i = 0; i < variant.length; i++) {
      color[variant[i]] = (function(i){
        return function(str) {
          if(env.cli) {
            if(i === 8) { return "\x1b[90m"+str+end; }
            else { return "\x1b[3"+i+"m"+str+end; }
          }
          else { return '<'+tag+' style="color:'+variant[i]+'">'+str+'</'+tag+'>'; }
        };
      })(i);
      color.bg[variant[i]] = (function(i){
        return function(str) {
          if(env.cli) {
            if(i === 8) { return "\x1b[100m"+str+end; }
            else { return "\x1b[4"+i+"m"+str+end; }
          }
          else { return '<'+tag+' style="background-color:'+variant[i]+'">'+str+'</'+tag+'>'; }
        };
      })(i);
    }
    var style = ['normal','bold','dim','italic','underline','blink'];
    for(i = 0; i < style.length; i++) {
      color[style[i]] = (function(i){
        return function(str) {
          if(env.cli) {
            return "\x1b["+i+"m"+str;
          }
          else {
            var prop = 'font-style';
            var val = style[i];
            if(val === 'bold') { prop = 'font-weight'; }
            if(val === 'underline') { prop = 'text-decoration'; }
            if(val === 'dim') {
              prop = 'opacity';
              val = '.75';
            }
            return '<'+tag+' style="'+prop+':'+val+'">'+str+'</'+tag+'>';
          }
        };
      })(i);
    }  return color;
  })();

  return color;

})();
