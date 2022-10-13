const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext('2d');
const CANVAS_HEIGHT = canvas.height = 500
const CANVAS_WIDTH = canvas.width = 600

let canvasPosition = canvas.getBoundingClientRect();
animation =[];
const image = new Image();
image.src = "./boom.png";

class square{
    constructor(x,y){
       
        this.squareWidth = 50;
        this.squareHeight = 50;
        this.width = this.squareWidth*0.1;
        this.height = this.squareHeight*0.1;
        this.x = x - this.width*0.5;
        this.y = y - this.height*0.5;
        this.image = new Image();
        this.image.src = "./vibgyor.jpg";
        this.frame = 0;
        this.timer = 0;

    }
    update(){
        this.timer++;
        if(this.timer%10 ===0)
        this.frame++;
    }
    draw(){
        ctx.drawImage(this.image,this.squareWidth*this.frame,0,this.squareWidth,this.squareHeight,this.x,this.y,this.width,this.height);
    }
}
window.addEventListener('mousemove',function(e){
   let positionX = e.x-canvasPosition.left; 
   let positionY = e.y- canvasPosition.top;
   animation.push(new square(positionX,positionY));
   
    
    
});
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    for(let i = 0; i< animation.length; i++){
        animation[i].update();
        animation[i].draw();
    }
    requestAnimationFrame(animate);

};
animate()

// function animate(){
//  ctx.fillStyle = 'blue';
//     ctx.clearRect(0,0,CANVAS_HEIGHT,CANVAS_WIDTH);
//     ctx.fillRect(100,105,5,5)
//     requestAnimationFrame(animate);
// };
// animate();
