let div = document.querySelectorAll(".color");
div.forEach(function(div){
    div.addEventListener("click", function(){
    document.body.style.backgroundColor = div.id;

})

})
