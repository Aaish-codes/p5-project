function preload(){

}

function draw(){
    image(video,0,0,700,400)
    tint(tint_color);
}

function take_snapshot(){
    save(" student.jpg");
}

function setup(){
    canvas = createCanvas(700,400)
    canvas.position(120,300)
    video = createCapture(VIDEO);
    video.hide()

    tint_color = " ";
}

function applyfilter(){
    tint_color = document.getElementById("filtercolor").value;
}