function homeSection(elementId){
    let element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function palyGroundSection(elementId){
    let playGround = document.getElementById(elementId);
    playGround.classList.remove('hidden');
}


function getRandomAlphabet(){
    let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    let alphabets = alphabetString.split('');
    
    let randomNumber = Math.random()*25;
    let index = Math.round(randomNumber);
    let alphabet = alphabets[index];
    return alphabet;
}

// function setBackGroundColor(elementId){
//     let element = document.getElementById(elementId);
//     element.classList.add('bg-orange-400')
// }
 
function setBackGroundColor(elementId){
    let element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}
function removeBackGroundColor(elementID){
    let element = document.getElementById(elementID);
    element.classList.remove('bg-orange-400');
}

function currentScoreElementById(elementById){
    let currentScoreElement = document.getElementById(elementById);
    let currentScore = currentScoreElement.innerText;
    let score = parseInt(currentScore);
    let newScore = score + 1;
    currentScoreElement.innerText = newScore;
}
function currentLifeElementById(elementById){
    let currentLifeElement = document.getElementById(elementById);
    let currentLife = currentLifeElement.innerText;
    let life = parseInt(currentLife);
    let newLife = life -1;
    currentLifeElement.innerText = newLife;
}