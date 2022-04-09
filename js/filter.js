var gfilter = document.querySelector("#table-filter");

gfilter.addEventListener("input", function(){
    var patiences = document.querySelectorAll(".paciente");
    if(this.value.length > 0)
    {
        for(var i = 0; i < patiences.length; i++)
        {
            console.log(this.value);
            var patience = patiences[i];
            var tdName = patience.querySelector(".info-nome");
            var name = tdName.textContent;
            console.log(name);
            var exp = new RegExp(this.value, "i");
            if(!exp.test(name)){
                patience.classList.add("invisible");
            }
            else{
                patience.classList.remove("invisible");
            }
        }
    }else{
        for(var i = 0; i < patiences.length; i++)
        {
            var patience = patiences[i];
            patience.classList.remove("invisible");
        }
    } 
})
