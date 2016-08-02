/**
 * Created by wujincun on 2016/8/2.
 */
function StarObj() {
    this.x;
    this.y;
    this.picNo;
    this.timer;
}
StarObj.prototype.init = function () {
    this.x = Math.random() * 600 + 100;
    this.y = Math.random() * 300 + 150;
    this.picNo = 0;
    this.timer = 0;
};
StarObj.prototype.update = function () {
    this.timer += deltaTime;
    if(this.timer > 50){
        this.picNo += 1;
        this.picNo %= 7;
        this.timer = 0;
    }
}
StarObj.prototype.draw = function () {
    //drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
    ctx.drawImage(starPic, this.picNo * 7, 0, 7, 7, this.x, this.y, 7, 7)
};
function drawStars() {
    for (var i = 0; i < num; i++) {
        starts[i].update();
        starts[i].draw()
    }
}


