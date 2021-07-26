function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}


function draw(){
    image(video, 0, 0, 380, 380);
}


function modelLoaded(){
    console.log("Model loaded");
    status = true;
    
}