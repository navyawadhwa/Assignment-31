
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var divisons = [];
var balls = [];

function preload() {

}

function setup() {
	createCanvas(480, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(240, 790, 800, 20);

	stack1 = new Divisions(130, 600, 20, 430);
	stack2 = new Divisions(350, 600, 20, 430);
	stack3 = new Divisions(-20, 600, 20, 800);
	stack4 = new Divisions(-420, 600, 20, 800);

	for (var j = 5; j <= width; j = j + 50) {
		balls.push(new Ball(j, 85));
	}
	for (var j = 5; j <= width - 10; j = j + 50) {
		balls.push(new Ball(j, 175));
	}
	for (var j = 5; j <= width; j = j + 50) {
		balls.push(new Ball(j, 275));
	}


	Engine.run(engine);

}

function draw() {
	background(0);

	if (frameCount%60===0) {
		particles.push(new Particle(random(0,480), 0,20));
	}

	ground1.display();
	stack1.display();
	stack2.display();
	stack3.display();
	stack4.display();

	divisionsHeight = 300;

	for (var k = 0; k < particles.length; k++) {
		particles[k].display();
	}


	for (var j = 0; j < balls.length; j++) {
		balls[j].display();
	}
}



