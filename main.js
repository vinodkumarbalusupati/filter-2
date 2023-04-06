noseX=0;
noseY=0;


function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
}

function draw() {

}

function gotPosses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.Y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}


