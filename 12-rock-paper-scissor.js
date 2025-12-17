let score=JSON.parse(localStorage.getItem('scores'))||{
    wins:0,
    losses:0,
    ties:0
  };

updateScoreElement();
let isAutoplay=false;
let intervalId;
document.querySelector('.js-auto-btn').addEventListener('click',()=>{
    Autoplay();
});
document.body.addEventListener('keydown',(event)=>{
  if (event.key==='a') {
    
    Autoplay();
  }

})
function Autoplay() {
  
    let playerMove;
    if (isAutoplay===false) {
  intervalId= setInterval(()=>{
         playerMove=computeMove();
        playGame(playerMove);
          document.querySelector('.js-auto-btn').innerHTML='stop palying';
    },2000)
     isAutoplay=true;
  

}else{
    isAutoplay=false;
     document.querySelector('.js-auto-btn').innerHTML='Auto play';

   clearInterval(intervalId);
}
   

    
};

document.querySelector('.js-rock-btn').addEventListener('click',()=>{
    playGame('rock');
});


document.querySelector('.js-paper-btn').addEventListener('click',()=>{
    playGame('paper');
});
document.querySelector('.js-scissor-btn').addEventListener('click',()=>{
    playGame('scissors');
});


const confirmBox = document.querySelector('.confirm-box');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

function showConfirm() {
  confirmBox.style.display = 'block';
}
// hide confirmation
function hideConfirm() {
  confirmBox.style.display = 'none';
}
function resetScore() {
      score.wins=0;
    score.losses=0;
    score.ties=0;
    localStorage.removeItem('scores');
    updateScoreElement();
    document.querySelector('.result').innerHTML='';
    document.querySelector('.move-result').innerHTML='';
    hideConfirm();
}

document.querySelector('.reset-button').addEventListener('click',()=>{
    showConfirm();

})
// YES
yesBtn.addEventListener('click', resetScore);

// NO
noBtn.addEventListener('click', hideConfirm);

document.body.addEventListener('keydown',(event)=>{
    console.log(event.key);
    if(event.key=='Backspace') {
        showConfirm();

        
    }

})

document.body.addEventListener('keydown',(event)=>{
    event.key.toLocaleLowerCase
    if(event.key=='r'){
        playGame('rock')
    }
    else if (event.key=='p') {
        playGame('paper')
        
    }
    else if (event.key=='s') {
        playGame('scissors')
        
    }

})
  function playGame(playerMove){

    let computerMove= computeMove();
    let result='';
    

    if(playerMove=="rock"){
    if(playerMove===computeMove){
        result='tie';
    }else if(playerMove==='rock'){
        if(computerMove==='paper'){
            result='you lose';
        }else{
            result='you win';
        }
    }else if(playerMove==='paper'){
        if(computerMove==='scissors'){
            result='you lose';
        }else{
            result='you win';
        }
    }else if(playerMove==='scissors'){
        if(computerMove==='rock'){
            result='you lose';
        }else{
            result='you win';
        }
    }
    }
  
  else if(playerMove=="paper"){
   
    if(playerMove===computerMove){
        result='tie';
    }else if(playerMove==='rock'){
        if(computerMove==='paper'){
            result='you lose';
        }else{
            result='you win';
        }
    }else if(playerMove==='paper'){
        if(computerMove==='scissors'){
            result='you lose';
        }else{
            result='you win';
        }
    }else if(playerMove==='scissors'){
        if(computerMove==='rock'){
            result='you lose';
        }else{
            result='you win';
        }
    }
  

  }
    else if(playerMove=="scissors"){
     
        if(playerMove===computerMove){
            result='tie';
        }else if(playerMove==='rock'){
            if(computerMove==='paper'){
                result='you lose';
            }else{
                result='you win';
            }
        }else if(playerMove==='paper'){
            if(computerMove==='scissors'){
                result='you lose';
            }else{
                result='you win';
            }
        }else if(playerMove==='scissors'){
            if(computerMove==='rock'){
                result='you lose';
            }else{
                result='you win';
            }
        }
    
       
       
    }

     if(result==='you win'){
        score.wins+=1;
    } else if(result==='you lose'){
        score.losses+=1;
    } else if(result==='tie'){
        score.ties+=1;
    }
    //localStorage  
 localStorage.setItem('scores',JSON.stringify(score));
 //
 
updateScoreElement();

//       alert(`your move: ${playerMove}  computer move: ${computerMove}  result: ${result}
//  Wins: ${score.wins}  Losses: ${score.losses}  Ties: ${score.ties}`);
document.querySelector('.move-result').innerHTML=`
${result} `;
document.querySelector('.result').innerHTML=`your move: 
<button class="move-button-player">
<img src="
images/${playerMove}-emoji.png
" alt="${playerMove}" class="move-emoji">

</button>  
    computer move: 
<button class="move-button-computer">
<img src="images/${computerMove}-emoji.png
" alt="${computerMove}" class="move-emoji">

</button>`;


    
}


function updateScoreElement(){
    document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}  Losses: ${score.losses}  Ties: ${score.ties}`;
}

        function computeMove(){
            const ranodomNumber=Math.random();
               let computerMove;
    if(ranodomNumber<0.34){
        computerMove='rock';

    }else if(ranodomNumber<=0.67){
        computerMove='paper';
       
    }else{
        computerMove='scissors';
      
    }
    return computerMove;
        }