var gBotao = document.querySelector("#botao");
var gFormData = document.querySelector(".formulario");
var gTable = document.querySelector("#tabela-pacientes");
var gPatience;
var gLine;
var gError = [];

gBotao.addEventListener("click", preparePax);

function preparePax(){
    var patience = {
        name: gFormData.nome.value,
        weight: gFormData.peso.value,
        height: gFormData.altura.value,
        lard: gFormData.gordura.value,
        imc: "0"
    }
    getPatData(patience)
}

function getPatData(patience){
    gPatience = patience;
    if(validateData(gPatience)){
        showError();
        createTab();
    }
    else
    {
        showError();
        return;
    } 
    gTable.appendChild(gLine);
    gFormData.reset();
}
function validateData(pax){
    var nameVd = validateName(pax.name);
    var weightVd = validateWeight(pax.weight);
    var heightVd = validateHeight(pax.height);
    var lardVd = validateLard(pax.lard);

    if(weightVd && heightVd && nameVd && lardVd) return true;
    else{
        return false;   
    }
}
function validateWeight(weight){
    if(weight > 0 && weight < 500) return true;
    else {
        gError.push("Peso Inválido");
        return false;
    }
}
function validateHeight(height){
    if(height > 0 && height < 3) return true;
    else {
        gError.push("Altura Inválida");
        return false;
    }
}
function validateName(name){
    if (name.length != 0)return true;
    else{
        gError.push("Nome inválido");
        return false;
    }
}
function validateLard(lard){
    if( lard.length > 0) return true;
    else {
        gError.push("Gordura inválida");
        return false;
    }
}
function createTab(){
    gLine = document.createElement("tr");
    gLine.classList.add("paciente");
    gLine.appendChild(facTd(gPatience.name, "info-nome"));
    gLine.appendChild(facTd(gPatience.weight, "info-peso"));
    gLine.appendChild(facTd(gPatience.height, "info-altura"));
    gLine.appendChild(facTd(gPatience.lard, "info-gordura"));
    gLine.appendChild(facTd((processData(gPatience.weight, gPatience.height)), "info-imc"));
}
function facTd(data, classname){
    var td = document.createElement("td");
    td.textContent = data;
    td.classList.add(classname);
    return td;
}
function processData(weight, height){
    return imcCalcule(weight, height);
}
function imcCalcule(weight, height){
    return (weight / (height * height)).toFixed(2);
}
function showError(){
    var ul = document.querySelector("#error-messages");
    ul.innerHTML = "";
    gError.forEach(function(err) {
        var li = document.createElement("li");
        li.textContent = err;
        ul.appendChild(li);
    });
    gError = [];  
}