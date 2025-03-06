function homeSection(elementId){
    let element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function palyGroundSection(elementId){
    let playGround = document.getElementById(elementId);
    playGround.classList.remove('hidden');
}

function getRandomAlphabet(){
    let alPhabetString = 'abcdefghijklmnopqrstuvwxyz';
    let alphabets = alPhabetString.split('');
    
    // get randomNumber
    let randomNumber = Math.random()*25;
    let index= Math.round(randomNumber);
    let alphabet = alphabets[index];
    return alphabet;
    
}

