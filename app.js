var scores,activePlayer,roundScore,gamePlaying;
init();


document.querySelector('.btn-roll').addEventListener('click',function(){
   if(gamePlaying){
    //1. need a random number
   var dice=Math.floor(Math.random()*6) + 1;
   //2. display the result of the dice
   // created a diceDOM
   var diceDOM = document.querySelector('.dice');
   //display the dice by changing the css
   diceDOM.style.display = 'block';
   //select the relative image to display
   diceDOM.src = 'dice'+dice+'.png';
// update the round score according to the rules of the game
   if(dice !== 1){
      roundScore +=dice;
      //display the round score
      document.querySelector('#current-'+activePlayer).textContent = roundScore;
   }else{
       //change the player
        nextPlayer();
   }
}
});

document.querySelector('.btn-hold').addEventListener('click', function() {
     if(gamePlaying){
    
    
    //add current score to global score
    scores[activePlayer] += roundScore;
    // update the UI
    document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
    if(scores[activePlayer]>=100){
        gamePlaying = false;
        document.getElementById('name-'+activePlayer).textContent = 'WINNER!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    }else{
    nextPlayer();
    }
}
});

document.querySelector('.btn-new').addEventListener('click',init);


function nextPlayer() {
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

function init() {

    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true; 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player1';
document.getElementById('name-1').textContent = 'Player2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');

}






























