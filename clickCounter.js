let point = document.getElementById("point");
let increase = document.getElementById("increase");
let subtract = document.getElementById("subtract");
let click = 0
increase.addEventListener("click", function(){
    click++
    point.innerHTML = click 
})
subtract.addEventListener("click", function(){
    click--
    point.innerHTML = click
})
