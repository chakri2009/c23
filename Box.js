class Box{
    constructor(x,y,width,height)
{
    var options={
        restitution : 1
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;

    World.add(world,this.body)
}
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    //push() captures the new setting
    push();

    //translate() to change the 0 of the axis to given x & y position 
    translate(pos.x,pos.y);

    rotate(angle);

    rectMode(CENTER);
    fill("red");
    rect(0,0,this.width,this.height);

    //pop() is used to revert back the old settings
    pop();

}
}