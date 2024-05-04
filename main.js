sound1="";
sound2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;
function preload(){
    song = loadSound("music.mp3");
    song = loadSound("music2.mp3");
}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("poseNet is initialised");
}
function gotPoses(results)
{
    if(results.length>0)
        {
            console.log(results);
            leftWristX=results[0].pose.leftWrist.x;
            leftWristY=results[0].pose.leftWrist.y;
            console.log("leftWristX= " + leftWristX + "lefWristY=" + leftWristY);
            rightWristX=results[0].pose.rightWrist.x;
            rightWristY=results[0].pose.rightWrist.y;
            console.log("rightWristX= " + rightWristX + "rightWristY=" + rightWristY);
        }

}
function draw()
{
    Image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#ff0000");
    if(scoreLeftWrist>0.2)
        {
    circle(leftWristX,leftWristY,20);
    InNumberleftWristY =Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume =" + volume;
    song.setVolume(volume);
    }    
}
function play()
{
    song.play();
}