var inputs = [false,false,false,false];

function setup(){
    frameRate = 30;
    colorMode(RGB, 255);
    red = color(255,0,0);
    green = color(0,255,0);
    blue = color(125, 249, 255)
    white = color(255)
    createCanvas(400,400);
    var G0Btn = createButton("G0");
    var G1Btn = createButton("G1");
    var G2Btn = createButton("G2");
    var G4Btn = createButton("G4");
    G0Btn.position(100,360);
    G1Btn.position(150,360);
    G2Btn.position(200,360);
    G4Btn.position(250,360);
    G0Btn.mousePressed(switcher0);
    G1Btn.mousePressed(switcher1);
    G2Btn.mousePressed(switcher2);
    G4Btn.mousePressed(switcher4);
};


function draw(){
    stroke(255)
    background(50);
    textAlign(CENTER);
    textSize(24);
    var inputValue;
    fill(white)
    text('G0',125,30);
    text('G1',175,30);
    text('G2',225,30);
    text('G4',275,30);
    for(var i = 0; i<inputs.length;i++){
	if(inputs[i]==true){
	    inputValue ='1'}
	else{
	    inputValue ='0'}
	text(inputValue,125+i*50,60)
    }
    fill(50)
    stroke(white);
    G0(inputs[0]);
    G1(inputs[1]);
    G2(inputs[2]);
    G4(inputs[3]);
};

function switcher0(){
    inputs[0]=!inputs[0];
    G0Btn.html('On')
};

function switcher1(){
    inputs[1]=!inputs[1];
};

function switcher2(){
    inputs[2]=!inputs[2];
}

function switcher4(){
    inputs[3]=!inputs[3];
}
function G0(on){
    if(on == true){
	fill(red);
    }
    else{
	fill(50);
    }
    ellipse(100,100,40,40);
    ellipse(300,300,40,40);
}

function G1(on){
    if(on == true){
	fill(red);
    }
    else{
	fill(50);
    }
    ellipse(100,200,40,40);
    ellipse(300,200,40,40);
}

function G2(on){
    if(on == true){
	fill(red);
    }
    else{
	fill(50);
    }
    ellipse(200,200,40,40);
}

function G4(on){
    if(on == true){
	fill(red);
    }
    else{
	fill(50);
    }
    ellipse(300,100,40,40);
    ellipse(100,300,40,40);
 
}
