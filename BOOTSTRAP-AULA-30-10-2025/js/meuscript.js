function ligar(){
    document.getElementById('RD350').src = 'img/moto-ligada.gif';
}

function desliga(){
    document.getElementById('RD350').src = 'img/RD350.jpg';
}

function onoff(){
    let parado = document.getElementById('peterParado').src;
    if(parado.includes('peter-griffin-parado')){
         document.getElementById('peterParado').src = 'img/peter-griffin-ligado.jpg';
    }else{
        document.getElementById('peterParado').src = 'img/peter-griffin-parado.jpg';
    }
    
    
}