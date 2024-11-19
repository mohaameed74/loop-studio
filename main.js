let burger = document.getElementById("burger");
let closeBtn = document.getElementById("close");
let sideBar = document.getElementById("side-bar");



 
burger.addEventListener("click",function() { 
    sideBar.classList.toggle("show")
})

closeBtn.addEventListener("click", function(){
    sideBar.classList.toggle("show")
})
