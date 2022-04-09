var gTable = document.querySelector("tbody");


gTable.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fade-out")
    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
    
})
