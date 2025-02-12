let numberOfDrumsButtons = document.querySelectorAll('.drum').length;

for(let i = 0; i < numberOfDrumsButtons;  i++){

    document.querySelectorAll('button')[i].addEventListener('click', function(){
       
        let buttonInnerHTML = this.innerHTML
        
        makeSounds(buttonInnerHTML)

        buttonAnimation(buttonInnerHTML)

    })
    
};

document.addEventListener('keydown', function(event){
    makeSounds(event.key)

    buttonAnimation(event.key)
})

function makeSounds(key) {
    switch (key) {
        case 'w':
            let tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        
        case 'a':
            let tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case 's':
            let tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

        case 'd':
            let tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        case 'j':
            let snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

            case 'k':
            let crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

            case 'l':
            
            let kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            
            break;
    
            /*default e uma boa pratica para caso de algum 
            problema ele informe o que foi feito no console*/ 
        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey){
    let acctiveButton = document.querySelector('.' + currentKey) // o . e usado p/ o sistema entender que e uma classe.

    acctiveButton.classList.add('pressed')//para adicionar a ação 
    
    
    setTimeout(function(){
        acctiveButton.classList.remove('pressed') //para remover a ação
    }, 100)
}





//document = documento / querySelector = selecione algo / button = classe que eu vou selecionar
//addEventListener = seleciona um evento / click e ação, quando clicar, e depois a função
//handleClick que foi criada
//codigo inicial para testar
//document.querySelector('button').addEventListener('click', handleClick)

//function handleClick(){
//    alert('clickkk')
//}