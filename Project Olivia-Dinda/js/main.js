//Timer init
var endTime = 16000

function countdown1(endTime, nyawas) {
    cd = setInterval(calculate, 1000);

    function calculate() {

        let timeRemaining = parseInt((endTime - 1) / 1000);

        if (timeRemaining > 0) {
            seconds = parseInt(timeRemaining);

            document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
        } else {
            nyawas = nyawas - 1
            if (nyawas > 0) {
                document.getElementById("nyawa").innerHTML = nyawas
                document.getElementById("seconds").innerHTML = 15
                endTime = 16000
            } else {
                    document.getElementById("gameover").style.display = "block";
            }
        }
        endTime = endTime - 1000
    }
}
// next case
function countdown2(endTime, nyawas) {
    clearInterval(cd)
    document.getElementById("nyawa").innerHTML = nyawas
    document.getElementById("seconds").innerHTML = 15
    cd = setInterval(calculate, 1000);

    function calculate() {

        let timeRemaining = parseInt((endTime - 1) / 1000);

        if (timeRemaining > 0) {
            seconds = parseInt(timeRemaining);

            document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
        } else {
            nyawas = nyawas - 1
            if (nyawas > 0) {
                document.getElementById("nyawa").innerHTML = nyawas
                document.getElementById("seconds").innerHTML = 15
                endTime = 16000
            } else {
                document.getElementById("gameover").style.display = "block";
            }
        }
        endTime = endTime - 1000
    }
}

// click button
function myFunction1() {
    document.getElementById("btn1").style.backgroundColor = "transparent";
    document.getElementById("btn1").style.borderColor = "red";
    document.getElementById("next4").disabled = false;
    document.getElementById("next4").style.opacity = 1;
    countdown2(16000, document.getElementById("nyawa").innerHTML);
}

function myFunction2() {
    document.getElementById("btn2").style.backgroundColor = "transparent";
    document.getElementById("btn2").style.borderColor = "red";
    document.getElementById("next1").disabled = false;
    document.getElementById("next1").style.opacity = 1;
    countdown2(16000, document.getElementById("nyawa").innerHTML);
}

function myFunction3() {
    document.getElementById("btn3").style.backgroundColor = "transparent";
    document.getElementById("btn3").style.borderColor = "red";
    document.getElementById("next2").disabled = false;
    document.getElementById("next2").style.opacity = 1;
    countdown2(16000, document.getElementById("nyawa").innerHTML);
}

function myFunction4() {
    document.getElementById("btn4").style.backgroundColor = "transparent";
    document.getElementById("btn4").style.borderColor = "red";
}

function myFunction5() {
    document.getElementById("btn5").style.backgroundColor = "transparent";
    document.getElementById("btn5").style.borderColor = "red";
    document.getElementById("next3").disabled = false;
    document.getElementById("next3").style.opacity = 1;
    countdown2(16000, document.getElementById("nyawa").innerHTML);
}

function myFunction6() {
    document.getElementById("btn6").style.backgroundColor = "transparent";
    document.getElementById("btn6").style.borderColor = "red";
    document.getElementById("next6").disabled = false;
    document.getElementById("next6").style.opacity = 1;
    countdown2(16000, document.getElementById("nyawa").innerHTML);
}

function myFunction7() {
    document.getElementById("btn7").style.backgroundColor = "transparent";
    document.getElementById("btn7").style.borderColor = "red";
    document.getElementById("next5").disabled = false;
    document.getElementById("next5").style.opacity = 1;
    countdown2(16000, document.getElementById("nyawa").innerHTML);
}
// clue
function myFunctionSt() {
    document.getElementById("btn2").disabled = false;
    alert("Aku menulis semua tentang hari-hari ku. Semua tentang kesedihanku, kesepianku. Kehidupanku tertulis di dalamnya. Satu-satunya buku yang aku punya dengan warna kesukaanku. Kehidupanku...");
    countdown1(16000, 3);
}

function myFunctionA() {
    document.getElementById("btn3").disabled = false;
    alert("Dalam hidup ku ada seseorang yang selalu aku rindu, yang selalu aku cintai. Walaupun dia membenciku, aku tetap mencintainya, aku tetap menghormatinya... Aku berharap suatu hari nanti, aku bisa menikah dengan seseorang seperti dirinya.");
}

function myFunctionB() {
    document.getElementById("btn5").disabled = false;
    alert("Kenangan kebahagian hari-hari yang berlalu, masih tersimpan. Menjadi hartaku yang paling berharga.");
}

function myFunctionC() {
    document.getElementById("btn1").disabled = false;
    alert("Ah, aku ingat! Saat aku berumur 5 tahun. Ketika hujan turun sangat deras, gemuruh-gemuruh petir yang terus bersautan. Sebuah cahaya yang hangat, menerangi gelapnya malam itu.");
}

function myFunctionD() {
    document.getElementById("btn7").disabled = false;
    alert("Di malam yang dingin itu. Sosok yang selalu aku rindukan, dengan lincah tangannya, memainkan musik yang dia buat untukku. Kenangan itu tersimpan dalam coretannya yang selalu ku baca setiap malam.");
}

function myFunctionE() {
    document.getElementById("btn6").disabled = false;
    alert("Dan ketika hari itu datang, ketika hal itu terjadi. Dunia ku berubah. Hari itu, seluruh dunia ku berubah... Rasa takut, kecewa, marah... Ah, tidak! Aku membuat goresan di tempat terindah dalam hidupku. Aku sangat menyesal.");
}

function myFunctionF() {
    document.getElementById("btn4").disabled = false;
    alert("Kehidupanku. Kebahagiaan dan kesedihanku. Semua kenangan dalam hidupku, tersimpan di tempat ini. Aku selalu di tempat ini, sambil memandang dunia luar, berharap mungkin esok hari dia akan kembali.");
}
// key
// modal
var modal = document.getElementById('myModal');
// button
var btn = document.getElementById("btn4");
// span
var span = document.getElementsByClassName("close")[0];
// click button
btn.onclick = function () {
    modal.style.display = "block";
} 
// click x
span.onclick = function () {
    modal.style.display = "none";
    document.getElementById("youwin").style.display = "block"; 
}
//  click anywhere
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//
function exits(){
    document.getElementById("warniing").style.display = "block";
}

function undo(){
    document.getElementById("warniing").style.display = "none"; 
}

function home1(){
    document.getElementById("gameover").style.display = "none"; 
}

function home2(){
    document.getElementById("youwin").style.display = "none"; 
}
