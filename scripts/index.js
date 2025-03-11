function continueGame(){
    let alphabet = getRandomAlphabet();
    console.log('random alphabet',alphabet);
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
    console.log( 'playerPress',playerPress);
    let screen = document.getElementById('board');
    let currentAlphabet = screen.innerText
    let expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerPress,expectedAlphabet);

    if(playerPress === expectedAlphabet){
        console.log('win')
        continueGame();
        removeBackGroundColor(expectedAlphabet);
    }
    else{
        console.log('fail');
    }
}
document.addEventListener('keyup',keyUpButtonPress);
