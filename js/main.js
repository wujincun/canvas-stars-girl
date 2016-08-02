/**
 * Created by wujincun on 2016/8/2.
 */
var can,ctx,w,h;
var girlPic = new Image();
var starPic = new Image();
function init(){
    can = document.getElementById('canvas');
    ctx = can.getContext('2d');
    w = can.width;
    h = can.height;

    girlPic.src="src/girl.jpg";
    starPic.src="src/star.png";

    gameLoop()
}
document.body.onload = init;
function gameLoop(){
    window.requestAnimFrame(gameLoop);
    drawBackground();
    drawGirl();
    drawStar();
}

function drawBackground(){
    ctx.fillStyle = '#393550';
    ctx.fillRect(0,0,w,h)
}
function drawGirl() {
    //drawImage(img,x,y，width,height)
    //x轴标正方向向右，y轴坐标正方向向下，（0,0）在canvas左上角
    ctx.drawImage(girlPic,100,150,600,300)
}