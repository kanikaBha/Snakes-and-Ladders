
let startP=[1,4,8,21,28,50,71,80,32,36,48,62,88,95,97]
let endP=[38,14,30,42,76,67,92,99,10,6,26,18,24,56,78]

document.addEventListener('keydown',function(Event) {
    if(document.getElementById("b1").style.display!=="none"){
    if(Event.key==='a' || Event.key==='A'){
        rollDice1()
    }
}
    else{
        if(Event.key==='l' || Event.key==='L'){
        rollDice2()
    }
}

})

function firstPlayer(){
   
        if(localStorage.getItem("first")==1){
        document.getElementById("b2").style.display="none"
        localStorage.removeItem("first")
        document.getElementById("start").style.display="none"
    }
    else if (localStorage.getItem("first")==2){
        document.getElementById("b1").style.display="none"
        localStorage.removeItem("first")
        document.getElementById("start").style.display="none"


    }

}



function decision(){
    window.location.href="whoFirst.html"
    
}

function displayResult(x,y){
   
    if(x>y){
        document.getElementById("firstP").innerHTML="Player1 goes first!"
        document.getElementById("play").style.display="block"
        document.getElementById("play").innerHTML="Let's play!"
        localStorage.setItem("first",1)
        document.getElementById("play").onclick = function () {
            window.location.href="dice.html"
            
        }



    }
    else if(x<y){
        document.getElementById("firstP").innerHTML="Player2 goes first!"
        document.getElementById("play").style.display="block"
        document.getElementById("play").innerHTML="Let's play!"
        localStorage.setItem("first",2)
        document.getElementById("play").onclick = function () {
            window.location.href="dice.html"
             
    }

    }
    else if(x==y){
        document.getElementById("firstP").innerHTML="Tie!"
        document.getElementById("play").style.display="block"
        document.getElementById("play").innerHTML="Try again :("
        document.getElementById("play").onclick = function () {
            window.location.href="whoFirst.html"
            
        }

    
    }

   
}

let round=1
let p1r=0
let p2r=0

function RPS(){
   
    document.getElementById("round").innerHTML="round " + round

    if(round==3){
        document.getElementById("result").innerHTML=""
        document.getElementById("play").style.display="none"
        displayResult(p1r, p2r)

        return
    }

   

    //alert("k")
    let options=["rock", "paper", "scissors"]
    let a=Math.floor(Math.random()*options.length)
    let b=Math.floor(Math.random()*options.length)

    let p1=document.getElementById("display1")
    let p2=document.getElementById("display2")
    



    if(a==0){
        p1.style.backgroundImage='url(rock.jpeg)'
    }
    else if(a==1){
        p1.style.backgroundImage='url(paper.jpeg)'

    }
    else if(a==2){
        p1.style.backgroundImage='url(scissor.jpeg)'

    }

    if(b==0){
        p2.style.backgroundImage='url(rock.jpeg)'
    }
    else if(b==1){
        p2.style.backgroundImage='url(paper.jpeg)'

    }
    else if(b==2){
        p2.style.backgroundImage='url(scissor.jpeg)'

    }

    let result=document.getElementById("result")
   

   if(a==b){
    result.innerHTML="Tie!"
   }
   else if(a==0 && b==1){
    result.innerHTML="2 wins!"
    p2r++
   }
   else if(a==0 && b==2){
    result.innerHTML="1 wins!"
    p1r++
   }
   else if(a==1 && b==0){
    result.innerHTML="1 wins!"
    p1r++
   }
   else if(a==1 && b==2){
    result.innerHTML="2 wins!"
    p2r++
   }
   else if(a==2 && b==0){
    result.innerHTML="2 wins!"
    p2r++
   }
   else if(a==2 && b==1){
    result.innerHTML="1 wins!"
    p1r++
   }

   round++





}





function reachFinish(player){
    if(temp1>100 && player==1){
        alert("Oh no! Back you go ->")
        temp1=100-(temp1-100)
        document.getElementById("score1")=temp1
        document.getElementById("b1").style.display = "none";
        document.getElementById("b2").style.display = "block";

    }

    if(temp2>100 && player==2){
        alert("Oh no! Back you go ->")
        temp2=100-(temp2-100)
        document.getElementById("score2")=temp2
        document.getElementById("b2").style.display = "none";
        document.getElementById("b1").style.display = "block";        
    }


}

let temp1=0
const rollDice1=()=>{
    document.getElementById("start").style.display="none"
    let num=(Math.floor(Math.random() * 6))+1

    
    temp1=temp1+num

    let dicePic=document.getElementById("p1")

    if(num==1){
        dicePic.src="1.png"
    }
    else if(num==2){
        dicePic.src="2.png"
    }
    else if(num==3){
        dicePic.src="3.png"
    }
    else if(num==4){
        dicePic.src="4.png"
    }
    else if(num==5){
        dicePic.src="5.png"
    }
    else if(num==6){
        dicePic.src="6.png"
    }



    document.getElementById("dice1").innerHTML=num
    reachFinish(1)


    if(startP.indexOf(temp1)==-1){

    document.getElementById("score1").innerHTML=temp1
    }
    else{

        if(temp1>endP[startP.indexOf(temp1)]){
            alert("WHOOPS! Down the snake you go:(")
        }
        else{
            alert("NICE ONE! Up the ladder you go:)")
        }
    

      
    temp1=endP[startP.indexOf(temp1)]
    
    document.getElementById("score1").innerHTML=temp1

   
    }


    if(temp1==100){
        alert("You won!")
        localStorage.setItem("winner","Player1 is the winner!")
        window.location.href="finish.html"
    
    
        
    }

    
    document.getElementById("b1").style.display="none"
    document.getElementById("b2").style.display="block"


}

let temp2=0

const rollDice2=()=>{
    document.getElementById("start").style.display="none"

    let num=(Math.floor(Math.random() * 6))+1

    
    temp2=temp2+num

    let dicePic=document.getElementById("p2")

    if(num==1){
        dicePic.src="1.png"
    }
    else if(num==2){
        dicePic.src="2.png"
    }
    else if(num==3){
        dicePic.src="3.png"
    }
    else if(num==4){
        dicePic.src="4.png"
    }
    else if(num==5){
        dicePic.src="5.png"
    }
    else if(num==6){
        dicePic.src="6.png"
    }


    document.getElementById("dice2").innerHTML=num
    reachFinish(2)


    if(startP.indexOf(temp2)==-1){

    document.getElementById("score2").innerHTML=temp2
    }
    else{

        if(temp2>endP[startP.indexOf(temp2)]){
            alert("WHOOPS! Down the snake you go:(")
        }
        else{
            alert("NICE ONE! Up the ladder you go:)")
        }
       
    temp2=endP[startP.indexOf(temp2)]
    document.getElementById("score2").innerHTML=temp2

    

    }

    if(temp2==100){
        alert("You won!")
        localStorage.setItem("winner","Player2 is the winner!")
         window.location.href="finish.html"
        
    }

    document.getElementById("b2").style.display="none"
    document.getElementById("b1").style.display="block"


    

    }

    function whoWon(){
        document.getElementById("winner").innerHTML=localStorage.getItem("winner")
        document.getElementById("winner").style.fontWeight="bold"
        document.getElementById("winner").style.fontSize="2em"
        document.getElementById("won").style.display="none"
    }

    function playAgain(){
        window.location.href="dice.html"
        temp1=0
        temp2=0
        num=0
        localStorage.removeItem("winner")
    }

window.onload=firstPlayer()




