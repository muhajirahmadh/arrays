const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("para").innerHTML = fruits;

function string() {
    document.getElementById("para").innerHTML = fruits.toString();
}

const fruits_1 = ["Banana", "Orange", "Apple", "Mango"];



function join() {
    document.getElementById("para_").innerHTML = fruits_1;
    document.getElementById("para_1").innerHTML = fruits.join(" * ");
}

const fruits_2 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("para_2").innerHTML = fruits_2;


function remove() {
    fruits_2.pop();
    document.getElementById("para_2").innerHTML = fruits_2;
}

function add() {
    fruits_2.push("muhajir");
    document.getElementById("para_3").innerHTML = fruits_2;
}


const fruits_3 = ["Banana", "Orange", "Apple", "Mango"];

function len() {
    document.getElementById("para_4").innerHTML = fruits_3;
    document.getElementById("para_5").innerHTML = fruits_3.push("kiwi");;

}


function shif() {
    document.getElementById("para_6").innerHTML = fruits_3;
    fruits_3.shift();
    document.getElementById("para_7").innerHTML = fruits_3;
}

function unshif() {
    document.getElementById("para_8").innerHTML = fruits_3;
    fruits_3.unshift("Lemon");
    document.getElementById("para_9").innerHTML = fruits_3;
}

function index() {
    document.getElementById("para_10").innerHTML = fruits_3;
    fruits_3[0] = "Kiwi";
    document.getElementById("para_11").innerHTML = fruits_3;
}


document.getElementById("para_12").innerHTML =
    "The first fruit is: " + fruits_3[0];

function del() {
    delete fruits_3[0];

    document.getElementById("para_13").innerHTML =
        "The first fruit is: " + fruits_3[0];
}

const fruits_4 = ["Banana", "Orange", "Apple", "Mango"];
const fruits_5 = ["guva", "greenapple"];
document.getElementById("para_14").innerHTML = fruits_4;

function con() {
    document.getElementById("para_15").innerHTML = fruits_4.concat(fruits_5);
}

document.getElementById("para_16").innerHTML = fruits_4;

function splic() {
    fruits_4.splice(1, "Lemon", "Kiwi");
    document.getElementById("para_17").innerHTML = fruits_4;
}

const letters = ["a","b","f","g"];
document.getElementById("para_18").innerHTML = letters;
function slic(){
    
    document.getElementById("para_19").innerHTML = letters.slice(1);
   }
