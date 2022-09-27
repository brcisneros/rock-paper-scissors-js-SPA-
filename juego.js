
alert('Hola wachin')
alert('Vamo a jugá')
alert('Ganá 5 y te dejo ir en paz')

let w = 0
let l = 0
let d = 0

for(w=0; w<=4;){
    
    function pickRandom(warray){
        var randomNumber = Math.floor(Math.random() * warray.length);
        return warray[randomNumber]
    }
    let choices = ['Piedra', 'Papel', 'Tijeras'];
    let aiChoice = pickRandom(choices)
    let playerChoice = prompt('Piedra, Papel o Tijeras')
    

    alert ('IA eligió '+aiChoice);

    if(playerChoice == aiChoice){

        alert('Empate')
        d++
    }
    else if((playerChoice == "Piedra") && (aiChoice == 'Tijeras')){
        
        alert('Ganaste!')
        w++
    }
    else if((playerChoice == "Papel") && (aiChoice == 'Piedra')){
        
        alert('Ganaste!')
        w++
    }
    else if((playerChoice == "Tijeras") && (aiChoice == 'Papel')){
        
        alert('Ganaste!')
        w++
    }
    else if((playerChoice == "Piedra") && (aiChoice == 'Papel')){
        
        alert('Perdiste!')
        l++
    }
    else if((playerChoice == "Papel") && (aiChoice == 'Tijeras')){
        
        alert('Perdiste!')
        l++
    }
    else if((playerChoice == "Tijeras") && (aiChoice == 'Piedra')){
        
        alert('Perdiste!')
        l++
    }
    else{
        alert('Escrbí bien gil.')
    }

    alert('Ganadas: '+w+"\n"+'Perdidas: '+l+"\n"+'Empates: '+d)

}

alert('Bien ahi! Vaya con Dios.')