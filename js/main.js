/**
 * Created by wujincun on 2016/8/2.
 */
var can, ctx, w, h;
var girlPic = new Image();
var starPic = new Image();

var num = 60;
var starts = [];

var lastTime, deltaTime;
var switchy = false;
var life = 0;
function init() {
    can = document.getElementById('canvas');
    ctx = can.getContext('2d');
    w = can.width;
    h = can.height;

    girlPic.src = "src/girl.jpg";
    starPic.src = "src/star.png";

    document.addEventListener('mousemove', mousemove, false);

    for (var i = 0; i < num; i++) {
        var obj = new StarObj();
        starts.push(obj);
        starts[i].init()
    }
    lastTime = Date.now();

    gameLoop()
}
document.body.onload = init;
function gameLoop() {
    window.requestAnimFrame(gameLoop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    drawBackground();
    drawGirl();
    drawStars();
    aliveUpdate()
}

function drawBackground() {
    ctx.fillStyle = '#393550';
    ctx.fillRect(0, 0, w, h)
}
function drawGirl() {
    //drawImage(img,x,y，width,height)
    //x轴标正方向向右，y轴坐标正方向向下，（0,0）在canvas左上角
    ctx.drawImage(girlPic, 100, 150, 600, 300)
}
function mousemove(e) {
    if (e.offsetX || e.layerX) {
        var px = e.offsetX == undefined ? e.layerX : e.offsetX;
        var py = e.offsetY == undefined ? e.layerY : e.offsetY;
        //out switchy=false in switchy=true
        if (px > 100 && px < 700 && py > 150 && py < 450) {
            switchy = true
        }else{
            switchy = false
        }
    }
}
