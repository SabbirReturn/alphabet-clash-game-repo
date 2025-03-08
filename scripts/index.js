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

function handleKeyButtonPress(){
    console.log('key press')
}
document.addEventListener('keyup',handleKeyButtonPress);