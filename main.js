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