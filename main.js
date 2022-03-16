function setup(){

    canvas=createCanvas(280,280)
    canvas.center()
    background("white")
    synth=window.speechSynthesis;
canvas.mouseReleased(classifyCanvas)

}
function preload(){
    classifier=ml5.imageClassifier('DoodleNet')
}
function clearCanvas(){
    background("white")
}
function draw(){
strokeWeight(13)
stroke("black")
if (mouseIsPressed) {
    line(pmouseX,pmouseY, mouseX,mouseY)
}
}
function classifyCanvas(){
    classifier.classify(canvas,gotresult)
}
function gotresult(error,results){
    if (error) {
       console.log(error) 
    } else {
     console.log(results) 
     document.getElementById("labelname").innerHTML=results[0].label
     document.getElementById("labelconfidence").innerHTML=results[0].confidence.toFixed(3)
     utter=new SpeechSynthesisUtterance(results[0].label)
     synth.speak(utter)
    }
}
