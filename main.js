const d = new Date();
let day = d.getDay();
let blueColor = "#76b5bc";

addEventListener("load", CurrentDay());

function CurrentDay() {
    if (day == 1)
        document.getElementById("mon").style.backgroundColor=blueColor;
    else if (day == 2)
        document.getElementById("tue").style.backgroundColor=blueColor;
    else if (day == 3)
        document.getElementById("wed").style.backgroundColor=blueColor;
    else if (day == 4)
        document.getElementById("thu").style.backgroundColor=blueColor;
    else if (day == 5)
        document.getElementById("fri").style.backgroundColor=blueColor;
    else if (day == 6)
        document.getElementById("sat").style.backgroundColor=blueColor;
    else if (day == 0)
        document.getElementById("sun").style.backgroundColor=blueColor;
}

let col1 = document.getElementById("mon");
col1.addEventListener("click",showTooltip1);
var visible = false;
function showTooltip1() {
    if (visible == false)
    { document.getElementById("tool1").className = "visible"; visible = true; }
    else 
    { document.getElementById("tool1").className = "hidden"; visible = false; }
}

let col2 = document.getElementById("tue");
col2.addEventListener("click",showTooltip2);
function showTooltip2() {
    if (visible == false)
    { document.getElementById("tool2").className = "visible"; visible = true; }
    else 
    { document.getElementById("tool2").className = "hidden"; visible = false; }
}

let col3 = document.getElementById("wed");
col3.addEventListener("click",showTooltip3);
function showTooltip3() {
    if (visible == false)
    { document.getElementById("tool3").className = "visible"; visible = true; }
    else 
    { document.getElementById("tool3").className = "hidden"; visible = false; }
}

let col4 = document.getElementById("thu");
col4.addEventListener("click",showTooltip4);
function showTooltip4() {
    if (visible == false)
    { document.getElementById("tool4").className = "visible"; visible = true; }
    else 
    { document.getElementById("tool4").className = "hidden"; visible = false; }
}

let col5 = document.getElementById("fri");
col5.addEventListener("click",showTooltip5);
function showTooltip5() {
    if (visible == false)
    { document.getElementById("tool5").className = "visible"; visible = true; }
    else 
    { document.getElementById("tool5").className = "hidden"; visible = false; }
}

let col6 = document.getElementById("sat");
col6.addEventListener("click",showTooltip6);
function showTooltip6() {
    if (visible == false)
    { document.getElementById("tool6").className = "visible"; visible = true; }
    else 
    { document.getElementById("tool6").className = "hidden"; visible = false; }
}

let col7 = document.getElementById("sun");
col7.addEventListener("click",showTooltip7);
function showTooltip7() {
    if (visible == false)
    { document.getElementById("tool7").className = "visible"; visible = true; }
    else 
    { document.getElementById("tool7").className = "hidden"; visible = false; }
}