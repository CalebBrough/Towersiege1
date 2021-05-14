const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//polygon (player)
var polygon, polygonimg;

//slingshot
var slingshot;

//platforms
var platform1, platform2;

//layer 1 of bricks for lvl 1
var l1brick1, l1brick2, l1brick3, l1brick4, l1brick5, l1brick6, l1brick7;
//layer 2 of bricks for lvl 1
var l1brick8, l1brick9, l1brick10, l1brick11, l1brick12;
//layers 3&4 of bricks for lvl 1
var l1brick13, l1brick14, l1brick15, l1brick16;


//layer 1 of bricks for lvl 2
var l2brick1, l2brick2, l2brick3, l2brick4, l2brick5;
//layers 2&3 of bricks for lvl 2
var l2brick6, l2brick7, l2brick8, l2brick9;

function preload() {

}

function setup() {
    canvas = createCanvas(1300,700);
    engine = Engine.create();
    world = engine.world;

    //polygon setup
    polygon = Bodies.rectangle(200, 350, 100, 100);
    World.add(world, polygon);
    console.log(polygon);
    polygonimg = loadImage("polygon.png");

    //slingshot setup
    slingshot = new Slingshot(polygon, {x: 200, y:350});

    //platform setup
    platform1 = new Ground(600, 500, 350, 20);
    platform2 = new Ground(1100, 600, 250, 20);

    //setup for layer 1 of bricks for lvl 1
    l1brick1 = new Block(450, 460, 50, 60);
    l1brick2 = new Block(500, 460, 50, 60);
    l1brick3 = new Block(550, 460, 50, 60);
    l1brick4 = new Block(600, 460, 50, 60);
    l1brick5 = new Block(650, 460, 50, 60);
    l1brick6 = new Block(700, 460, 50, 60);
    l1brick7 = new Block(750, 460, 50, 60);
    //setup for layer 2 of bricks for lvl 1
    l1brick8 = new Block(500, 400, 50, 60);
    l1brick9 = new Block(550, 400, 50, 60);
    l1brick10 = new Block(600, 400, 50, 60);
    l1brick11 = new Block(650, 400, 50, 60);
    l1brick12 = new Block(700, 400, 50, 60);
    //setup for layer 3&4 of bricks for lvl 1
    l1brick13 = new Block(550, 340, 50, 60);
    l1brick14 = new Block(600, 340, 50, 60);
    l1brick15 = new Block(650, 340, 50, 60);
    l1brick16 = new Block(600, 280, 50, 60);


    //setup for layer 1 of bricks for lvl 2
    l2brick1 = new Block(1000, 560, 50, 60);
    l2brick2 = new Block(1050, 560, 50, 60);
    l2brick3 = new Block(1100, 560, 50, 60);
    l2brick4 = new Block(1150, 560, 50, 60);
    l2brick5 = new Block(1200, 560, 50, 60);
    //setup for layer 2&3 of bricks for lvl 2
    l2brick6 = new Block(1050, 500, 50, 60);
    l2brick7 = new Block(1100, 500, 50, 60);
    l2brick8 = new Block(1150, 500, 50, 60);
    l2brick9 = new Block(1100, 440, 50, 60);
}

function draw() {
    background(0);
    Engine.update(engine);

    push();
        noStroke();
        fill("white");
        textSize(20);
        var textX=700;
        var textY=150;
        translate(textX, textY);
        rotate(20);
        text("Launch the polygon towards the Blocks to tip them over", 0, 0);
    pop();

    imageMode(CENTER);
    image(polygonimg, polygon.position.x, polygon.position.y, 100, 100);
    /*
    stroke("white");
    line(polygon.vertices[0].x, polygon.vertices[0].y, polygon.vertices[1].x, polygon.vertices[1].y);
    line(polygon.vertices[1].x, polygon.vertices[1].y, polygon.vertices[2].x, polygon.vertices[2].y);
    line(polygon.vertices[2].x, polygon.vertices[2].y, polygon.vertices[3].x, polygon.vertices[3].y);
    line(polygon.vertices[3].x, polygon.vertices[3].y, polygon.vertices[0].x, polygon.vertices[0].y);
    */

    //platform display
    platform1.display();
    platform2.display();

    //display for layer 1 of bricks for lvl 1
    l1brick1.display();
    l1brick2.display();
    l1brick3.display();
    l1brick4.display();
    l1brick5.display();
    l1brick6.display();
    l1brick7.display();
    //display for layer 2 of bricks for lvl 1
    l1brick8.display();
    l1brick9.display();
    l1brick10.display();
    l1brick11.display();
    l1brick12.display();
    //display for layers 3&4 of bricks for lvl 1
    l1brick13.display();
    l1brick14.display();
    l1brick15.display();
    l1brick16.display();


    //display for layer 1 of bricks for lvl 2
    l2brick1.display();
    l2brick2.display();
    l2brick3.display();
    l2brick4.display();
    l2brick5.display();
    //display for layers 2&3 of bricks for lvl 2
    l2brick6.display();
    l2brick7.display();
    l2brick8.display();
    l2brick9.display();
}

function mouseDragged() {
    Matter.Body.setPosition(polygon, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    slingshot.fly();
}