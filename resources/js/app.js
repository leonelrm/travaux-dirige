let globalScore = [0, 0];
let progressScore = 0;
let activePlayer = 1;
//
// document.getElementById('score-1').textContent = '0';
// document.getElementById('score-2').textContent = '0';
// document.getElementById('encours-1').textContent = '0';
// document.getElementById('encours-2').textContent = '0';
// document.querySelector(".de").style.display = "none";
startGame()

let lancerDe= document.querySelector(".btn-lancer");
lancerDe.addEventListener('click', () => {
    let de = Math.floor(Math.random()*6) + 1;
    let deImg = document.querySelector('.de');
    deImg.style.display = 'block';
    deImg.src = `resources/images/de-${de}.png`;    
    if(de !== 1){
        progressScore += de;
        document.getElementById(`encours-${activePlayer}`).textContent = progressScore;
    }else {
        nextPlayer();
    }
    
});

let commuter = document.querySelector('.btn-commuter');
commuter.addEventListener('click', () => {
    globalScore[activePlayer - 1] += progressScore;
    document.getElementById(`score-${activePlayer}`).textContent = globalScore[activePlayer - 1];
    if(globalScore[activePlayer - 1] >= 100){
       document.getElementById('nom-${activePlayer}').textContent = 'Bravo !!!';
       document.querySelector('.de').style.display = 'none;';
       document.querySelector(`.joueur-${activePlayer}-panel`).classList.add('vainqueur');
       document.querySelector(`.joueur-${activePlayer}-panel`).classList.remove('active');
    }else {
        nextPlayer()
    }
    
});
function nextPlayer() {
    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
    progressScore = 0;
    document.getElementById(`encours-${activePlayer}`).textContent = '0';
    document.querySelector('.joueur-1-panel').classList.toggle('active');
    document.querySelector('.joueur-2-panel').classList.toggle('active');
    document.querySelector('.de').style.display = 'none';
}
let newGame = document.querySelector('.btn-nouveau');
newGame.addEventListener('click', () =>{
    startGame()
});
function startGame() {
    //Code d'initialisation de la PARTIE 2
    scoreGlobals = [0, 0];
    scoreEnCours = 0;
    joueurActif = 1;
    document.querySelector('.de').style.display = 'none';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-2').textContent = '0';
    document.getElementById('encours-1').textContent = '0';
    document.getElementById('encours-2').textContent = '0';
}