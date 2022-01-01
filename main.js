

difference=0;

rightWristX = 0;

leftWristX = 0 ;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,450);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses)
}

function modelLoaded(){
    console.log("PoseNet is itialized!");
}

function gotPoses(results){
    if(results.length > 0){
       
        rightWristX = results[0].pose.rightWrist.x;

        leftWristX = results[0].pose.leftWrist.x;

        difference = floor(leftWristX - rightWristX);      
    }
}

function draw(){
    background('#6C91C2')
    text('Jasraj',10 ,250)
    fill('red');
    textSize(difference);
}

