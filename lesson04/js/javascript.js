
function getLastUpdateDate() {
    var dt = new Date();
   /* document.getElementById("updateDate").innerHTML =	dt.toLocaleDateString();*/
    document.getElementById("updateDate").innerHTML = dt.toDateString();
}
function toggleMenu() {
    document.getElementsByClassName("navigation")[0]
    .classList.toggle("responsive");
}
/*const hambutton = document .querySelector();
const mainnav = document .querySelector(navigation);
hambutton .addEventListener('click'()=6);
{
    mainnav.classList.toggle(responsive)
},false);
window.onresize=()=>{if(window.innerWidth>760);
{
    mainnav.classList.remove('responsive')
}
};*/