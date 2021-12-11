function start(){
    navigator.mediaDevices.getUserMedia({audio : true});
    soundmodel = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Hewu2D03R/model.json", modelloaded);
}

function modelloaded(){
    soundmodel.classify(getresults);
}

function getresults(error,results){
   if(error){
       console.error(error);
   }
   else{
       console.log(results);
       document.getElementById("sound_result").innerHTML = "I can hear a "+ results[0].label;
       document.getElementById("confidence_result").innerHTML = "I am "+ (results[0].confidence * 100).toFixed(2) + " % sure ";
       soundname = results[0].label;

       if(soundname=="Dog"){
           document.getElementById("img1").src="Dog.gif";
       }
       
       if(soundname=="Cat"){
        document.getElementById("img1").src="Cat.gif";
    }

    if(soundname=="Lion"){
        document.getElementById("img1").src="Lion.gif";
    }

   }
}
