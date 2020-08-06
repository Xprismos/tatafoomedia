window.onscroll = function()
{myFunction()};

var header =
document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    }   else {
        header.classList.remove("sticky");
    } 
};   



function openNav () {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav () {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft ="0";
}