class Bob{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution :0,
            friction :1,
			density :0.8
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var pos=this.body.position;	
		push()
		translate(pos.x, pos.y);
		// rectMode(CENTER);
		//rotate(this.body.angle)
		fill(208,187,219)
		ellipseMode(CENTER);
		ellipse( 0,0,this.r*2, this.r*2)
		pop()
 }
}