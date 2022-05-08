Webcam.set ({
    width:350,
    height:300,
    image_format:'png'
});

camera= document.getElementById("camera");
Webcam.attach ('#camera');

function takeSnapshot()
{
    Webcam.snap(function(data_uri) 
    {
        document.getElementById("camera2").innerHTML= '<img id="captured_img" src="' +data_uri+ '"/>';}
    
    )}

    console.log('ml5 version', ml5.version);
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VtPGVUm2I/model.json', modelLoaded)

    function modelLoaded() {
        console.log("modelLoaded");
    }
   
    function speak(){
        var synth= window.speakSynthesis
        speak_data_1="The first prediction is" + prediction_1
        speak_data_2="And the second prediction is" + prediction_2
        var utterThis= new SpeechSynthesisUtterance (speak_data_1 + speak_data_2);
        synth.speak(utterThis)
    }

    function check(){
        img=document.getElementById("captured_img");
        classifier.classify(img, gotResult);
    }

    function gotResult(error,results){
        if(error){
            console.error(error);
        }
        else {
        console.log(results)
        document.getElementById("result_emo").innerHTML=results[0].label
        document.getElementById("result_emo2").innerHTML=results[1].label
        prediction_1= results[0].label
        prediction_2= results[1].label
         speak();
            if(results[0].label=="Fist-bump"){
                console.log("Fist-bump")
                document.getElementById("update_emo").innerHTML="&#128074;";
            }

            if(results[0].label=="Wave"){
                console.log("Wave")
               document.getElementById("update_emo").innerHTML="&#128075;";
           }
           
           if(results[0].label=="Pointing"){
               console.log("Pointing")
               document.getElementById("update_emo").innerHTML="&#128072;"
           }
           
           if(results[0].label=="Yo sign"){
               console.log("Yo sign")
               document.getElementById("update_emo").innerHTML="&#9996"
           }

        
       if(results[1].label=="Fist-bump"){
            console.log("Fist-bump")
            document.getElementById("update_emo2").innerHTML="&#128074;";
        }

        if(results[1].label=="Wave"){
            console.log("Wave")
           document.getElementById("update_emo2").innerHTML="&#128075;";
       }
       
       if(results[1].label=="Pointing"){
           console.log("Pointing")
           document.getElementById("update_emo2").innerHTML="&#128072;"
       }
       
       if(results[1].label=="Yo sign"){
           console.log("Yo sign")
           document.getElementById("update_emo2").innerHTML="&#9996"
       }



         
       }
           

        
    }