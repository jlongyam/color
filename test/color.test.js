import color from "../src/color.js";
import env from "@jlongyam/env";

var v, m;
var variant = ['black','red','green','orange','blue','purple','teal','white','gray'];
var mod = ['normal','bold','dim','italic','underline','blink'];
for(v = 0; v < variant.length; v++) {
  if(env.browser) {
    var d = document, b = d.body;
    b.innerHTML += '<pre>color '+color[variant[v]](variant[v])+'</pre>';
    b.innerHTML += '<pre>color '+color.bg[variant[v]]('bg '+variant[v])+'</pre>';
    for(m = 0; m < mod.length; m++) {
      b.innerHTML += '<pre>color '+color[variant[v]](variant[v]+' '+color[mod[m]](mod[m]))+'</pre>';
    }
  }
  else {
    console.log('color '+color[variant[v]](variant[v]));
    console.log('color '+color.bg[variant[v]]('bg '+variant[v]));
    for(m = 0; m < mod.length; m++) {
      console.log('color '+color[variant[v]](variant[v]+' '+color[mod[m]](mod[m])));
    }
  }
}