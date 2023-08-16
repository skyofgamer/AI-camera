// https://teachablemachine.withgoogle.com/models/Lzb7tnfx6/

Webcam.set({
    width: 350,
    height:300,
    image_format: 'png',
    png_quality:90,
})
var camera = document.getElementById('camera');
Webcam.attach(camera);
 
function take_snapshot() {
    Webcam.snap(function(snapshot){
        document.getElementById("result").innerHTML = "<img id='capture_image' src='" + snapshot + "'>";
    })

}
console.log("ml5 version: " + ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Lzb7tnfx6/model.json",modeLoaded);

function modeLoaded(){
    console.log("model has been loaded");
}

function check() {
img = document.getElementById("capture_image");
classifier.classify(img, gotResult);
}

function gotResult(error,results) {
 if (error){
    console.log(error);
 }
 else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);

 }
}