function continueGame(){
    let alphabet = getRandomAlphabet();
    let screen = document.getElementById('board');
    screen.innerText= alphabet;
    setBackGroundColor(alphabet);
}; 

document.getElementById('play').addEventListener('click', function(){
    // let homeSection = document.getElementById('home');
    // homeSection.classList.add('hidden')
    // let playGroundSection = document.getElementById('play-ground');
    // playGroundSection.classList.remove('hidden')
    homeSection('home')
    palyGroundSection('play-ground')
    continueGame();
});
function keyUpButtonPress(event){
    let playerPress = event.key;
    let screen = document.getElementById('board');
    let currentAlphabet = screen.innerText
    let expectedAlphabet = currentAlphabet.toLocaleLowerCase();

    if(playerPress === expectedAlphabet){
        // let currentScoreElement = document.getElementById('current-score');
        // let currentScore = currentScoreElement.innerText; 
        // let score = parseInt(currentScore);
        // let newScore = score + 1;
        // currentScoreElement.innerText = newScore;
        // currentScoreElementById('current-score')
        // continueGame();
        // removeBackGroundColor(expectedAlphabet);

        let currentScore = getElementValueById('current-score');
        let updatedScore = currentScore + 1;
        setTextElementById('current-score', updatedScore);
        continueGame();
        removeBackGroundColor(expectedAlphabet);
    }
    else{
        // let currentLifeElement = document.getElementById('current-life');
        // let currentLife = currentLifeElement.innerText;
        // let life = parseInt(currentLife);
        // let newLife = life-1;
        // currentLifeElement.innerText = newLife;

        let currentLife = getElementValueById('current-life')
        let updatedLife = currentLife - 1;
        setTextElementById('current-life',updatedLife);
        if(updatedLife === 0){
            gameOver();
        }

        // let updateLife = currentLifeElementById('current-life');
        // let life = parseInt(updateLife);
        // if( life === 0){
        //     console.log('game over');
        // }
    }
}
document.addEventListener('keyup',keyUpButtonPress);

function gameOver(){
    homeSection('play-ground');
    palyGroundSection('score');
}
