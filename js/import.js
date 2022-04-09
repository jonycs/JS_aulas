var gImport = document.querySelector("#import");

gImport.addEventListener("click", function(){
    var importing = new XMLHttpRequest();
    importing.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    importing.addEventListener("load", function(){
        if(importing.status == 200)
        {
            var strimport = importing.responseText;
            var arrayimport = JSON.parse(strimport);
            arrayimport.forEach(function(pax){
                var importPax = {
                    name: pax.nome,
                    weight: pax.peso,
                    height: pax.altura,
                    lard: pax.gordura.toString(),
                    imc: "0"
                }
                getPatData(importPax);
            })
        } else{
            gError.push("O site para importar retornou o erro " + importing.status);
            gError.push(importing.responseText);
            showError();
        }  
    });
    importing.send();
});