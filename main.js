var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run(event){
    console.log(event);
    content = event.results[0][0].transcript
    document.getElementById("textbox").innerHTML = content
    console.log(content);
    if(content == "take my selfie"){
    speak();
    console.log("Taking Selfie");
    }
    
}

function speak(){
    var synth = window.speechSynthesis;
    speakData = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach("#camera");
    setTimeout(function(){
        take_Snapshot();
        Save();
    },5000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");

function take_Snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img src="'+data_uri+'" id="selfie_image">';

    });
}

function Save(){
    link = document.getElementById("link");
    img = document.getElementById("selfie_image").src;
    link.href = img;
    link.click();
}