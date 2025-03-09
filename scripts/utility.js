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