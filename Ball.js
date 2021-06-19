class Ball {
	constructor(x,y,r){
		var options = {
			isStatic:false,
			restitution:0,
			friction:1.0,
			density:1.0
		}
		this.x = x;
		this.y = y;
		this.r = r
		this.body = Bodies.circle(this.x, this.y, this.r, options);
		World.add(world, this.body);

	}

	display(){
			var polygonpos = this.body.position;		
			push();
			translate(polygonpos.x, polygonpos.y);
			fill("RED")
			imageMode(CENTER);
			ellipseMode(RADIUS);
			ellipse(0,0,this.r, this.r);
			pop();
			
			
	}
}