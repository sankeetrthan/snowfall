class Snow
{
    constructor(x,y)
    {
        var options = {isStatic:false}
        this.body = Bodies.circle(x,y,10,options)
        World.add(world,this.body);
        this.image=loadImage("snow4.webp")
    }
    display()
    {
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,10,10)
    }
}