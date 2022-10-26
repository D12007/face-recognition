Webcam.set({
    width:350,
    height:300,
    image_formate:'png',
    png_quality:90
});
camera=document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot()
{
  Webcam.snap(
    function (data_uri){
     document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    }
  );
}

console.log("ml5version:",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/.json",modelLoaded);
function modelLoaded(){
    console.log("model loaded successfully");
}

function check(){
  console.log("yes");
  img=document.getElementById("selfie_image");
  console.log("yes");
  classifier.classify(img, gotResult);

}
function gotResult(error, results){
  if (error){
    console.log(error);
  }else{
 console.log(results);
 document.getElementById("object_name").innerHTML=results[0].label;
 document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3);
}}
  
