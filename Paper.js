class Paper{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
       this.x = x;
       this.y = y;
       this.r = r;
        this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
        World.add(world,this.body);
    }
    display(){
       var position = this.body.position;
        rectMode(CENTER)
        fill("yellow");
        ellipse(160,460,25,25);
        
    
    
    
    }
    
}
function keyPressed(){
    if (keyCode === UP_ARROW){
        Matter.Body.applyForce(this.body, this.body.position, 4);
    }
}

