sound1="";
sound2="";
function preload(){
    song = loadsound("music.mp3");
    song = loadsound("music2.mp3");
}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    
}
function draw()
{
    Image(video, 0, 0, 600, 500);
}
funcion play(){
    song.play();
}