var answer;
var score=0;
var BackgroundImages=[]


function nextQuestion() {
    const n1=Math.floor(Math.random()*5);
    const n2=Math.floor(Math.random()*6);

    document.getElementById("n1").innerHTML=n1;
    document.getElementById("n2").innerHTML=n2;
    answer=n1+n2;
}


function checkAnswer(){
    prediction=predictImage();
    console.log(prediction);
    if (prediction==answer) {
        score++;
        console.log(`correct! ${score}`);
        
        if (score<=6){
            BackgroundImages.push(`url(images/background${score}.svg)`)
            document.body.style.backgroundImage=BackgroundImages;} 
            else{
            alert("Congratulations! You want more?");
            score=0;
            BackgroundImages=[];
            document.body.style.backgroundImage=BackgroundImages;
            clearCanvas();
            nextQuestion();
        }

        
    } else {
        if (score!=0){score--;
           
            }
        // if (score<0){score=0}
        console.log(`incorrect! ${score}`);
        alert("Oops! Check your calculations or try writing the number neater next time");
        setTimeout(function(){ 
            BackgroundImages.pop();
            document.body.style.backgroundImage=BackgroundImages;}, 1000)}


}

