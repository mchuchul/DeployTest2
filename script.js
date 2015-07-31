/*script.js*/
var blink_thing = function(elem,state,depth){
  (state && depth < 100) ? elem.fadeIn(1000) : elem.fadeOut(1000);
  blink_thing(elem,!state,depth+1);
}
$(document).ready(function(){
  $('h1').click(function(){
    console.log("something!");
    blink_thing($(this),true,0);
  });  
});