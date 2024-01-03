// 'use strict';

var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;

document.querySelector('.btn.btn--roll').addEventListener('click', function() {
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;

        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block'
        diceDOM.src= 'dice-' + dice + '.png'
        
        if (dice === 6 && lastDice === 6) {
            scores[activePlayer] = 0
            document.querySelector('#score--' + activePlayer).textContent = 0;
            nextPlayer();
        }else if (dice !==1){
            roundScore += dice;
            document.querySelector('#current--' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    lastDice = dice
    }
});

document.querySelector('.btn.btn--hold').addEventListener('click', function() {
    if(gamePlaying) {
        console.log(scores);
        console.log(scores[activePlayer]);
        scores[activePlayer] += roundScore;
        console.log(scores[activePlayer]);
        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name--' + activePlayer).textContent = 'Winner!!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player.player--' + activePlayer).classList.add('player--winner');
            document.querySelector('.player.player--' + activePlayer).classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
})

document.querySelector('.btn.btn--new').addEventListener('click', init);

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0
    
    document.querySelector('#current--0').textContent = 0;
    document.querySelector('#current--1').textContent = 0;

    document.querySelector('.player.player--0').classList.toggle('player--active');
    document.querySelector('.player.player--1').classList.toggle('player--active');

    // document.querySelector('.player.player--0').classList.remove('.active')
    // document.querySelector('.player.player--1').classList.add('.active')
    document.querySelector('.dice').style.display = 'none';
}

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    document.querySelector('#name--0').textContent = 'Player 1';
    document.querySelector('#name--1').textContent = 'Player 2';
    document.querySelector('.player.player--0').classList.remove('player--winner');
    document.querySelector('.player.player--1').classList.remove('player--winner');
    document.querySelector('.player.player--0').classList.remove('player--active');
    document.querySelector('.player.player--1').classList.remove('player--active');
    document.querySelector('.player.player--0').classList.add('player--active');


}