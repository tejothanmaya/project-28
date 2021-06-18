class Dustbin {
    constructor(x,y,width,height){
        var options = {
            'restitution' : 0,
            'friction' : 1,
            'density' : 0.1
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display(){
       
       
        rectMode(CENTER)
        
        stroke("black");
        fill("red");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    
    
    
    
}
}