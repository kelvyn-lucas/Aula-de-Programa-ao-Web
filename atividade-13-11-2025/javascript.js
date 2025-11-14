function displayRadioValue(){
    var elemento = document.getElementsByName('gender');

    for(i = 0; i < elemento.length; i++){
        if(elemento[i].checked){
        document.getElementById("result").innerHTML = "Genero: "+elemento[i].value;
        }
    }
} 

function getOption(){
    selectElement = document.querySelector('#select1');
    output = selectElement.value;
    document.querySelector('.output').textContent = output;
}

function getCheckBox(){
    let CheckBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let text = "";
    for(i = 0; i < CheckBoxes.length; i++){
        text = `${text}, ${CheckBoxes[i].value}`;
    }
    document.getElementById('pri').innerHTML = text;
}