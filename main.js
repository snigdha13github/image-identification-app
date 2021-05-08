Webcam.set({
    width:310,
    height:310,
    image_format:"png",
    png_quality:90,
    constraints:{facingMode:"environment"}
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_pic()
{
    Webcam.snap(
        function(data_uri)
        {
            document.getElementById("output").innerHTML='<img id="captured_image"src="'+data_uri+'"/>';
        }
    );
}
console.log("ml5 version: ",ml5.version);
snigdha=ml5.imageClassifier("MobileNet",modelLoaded);
function modelLoaded()
{
    console.log("model has loaded");
}
function give_result()
{
    photo=document.getElementById("captured_image");
    snigdha.classify(photo,gotResult);
}
function gotResult(error,results)
{
    if(error)
        {
            console.log(error);
        }
    else
        {
            console.log(results);
            document.getElementById("object_name").innerHTML=results[0].label;
        }
}