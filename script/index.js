const menuIcon=document.querySelector("#menu-icon");
const menu=document.querySelector("#menu");

menuIcon.addEventListener("click",function(){
    if(menu.className == "hidden"){
        menu.classList.remove("hidden");
    }else{
        menu.classList.add("hidden");
    }
})