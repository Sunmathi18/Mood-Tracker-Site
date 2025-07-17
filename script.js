var overlay=document.getElementById("overlay")
var popuph=document.getElementById("popuph")
var popups=document.getElementById("popups")
var popupt=document.getElementById("popupt")
var popupa=document.getElementById("popupa")
var popupe=document.getElementById("popupe")


function hpy(){
    overlay.style.display="block"
    popuph.style.display="block"

}
function sad(){
    overlay.style.display="block"
    popups.style.display="block"

}
function tired(){
    overlay.style.display="block"
    popupt.style.display="block"

}
function angry(){
    overlay.style.display="block"
    popupa.style.display="block"

}
function excite(){
    overlay.style.display="block"
    popupe.style.display="block"

}



var closehpy=document.getElementById("closehpy")

closehpy.addEventListener("click",function(){
    overlay.style.display="none"
    popuph.style.display="none"
   
})

var closesad=document.getElementById("closesad")

closesad.addEventListener("click",function(){
    overlay.style.display="none"
    popups.style.display="none"
   
})

var closet=document.getElementById("closet")

closet.addEventListener("click",function(){
    overlay.style.display="none"
    popupt.style.display="none"
   
})

var closea=document.getElementById("closea")

closea.addEventListener("click",function(){
    overlay.style.display="none"
    popupa.style.display="none"
   
})

var closee=document.getElementById("closee")

closee.addEventListener("click",function(){
    overlay.style.display="none"
    popupe.style.display="none"
   
})