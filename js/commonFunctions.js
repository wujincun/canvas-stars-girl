/**
 * Created by wujincun on 2016/8/2.
 */
window.requestAnimFrame = (function () {
   return  window.requestAnimationFrame||
           window.webkitRequestAnimationFrame||
           window.msRequestAnimationFrame||
           window.oRequestAnimationFrame||
           window.mozRequestAnimationFrame||
           function( callback,  element){
               return window.setTimeout(callBack,1000/60)
           }
})();