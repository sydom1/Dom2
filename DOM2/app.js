let numberOfDrumsButtons = document.querySelectorAll('.drum').length;

for(let i = 0; i < numberOfDrumsButtons;  i++){

    document.querySelectorAll('button')[i].addEventListener('click', function(){
        alert('clickkk')
    })

};



//document = documento / querySelector = selecione algo / button = classe que eu vou selecionar
//addEventListener = seleciona um evento / click e ação, quando clicar, e depois a função
//handleClick que foi criada
//codigo inicial para testar
//document.querySelector('button').addEventListener('click', handleClick)

//function handleClick(){
//    alert('clickkk')
//}