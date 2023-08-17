let string = "";
let btns = document.querySelectorAll(".buttons");

// Array.from(btns).forEach((button) => {
//     button.addEventListener('click', (e) => {
//         if (e.target.innerHTML == "=") {
//             string = eval(string);
//             document.querySelector('input').value = string;
//         }
//         else if (e.target.innerHTML == "C") {
//             string = "";
//             document.querySelector('input').value = string;
//         }
//         else {
//             console.log(e.target)
//             string = string + e.target.innerHTML;
//             document.querySelector('input').value = string;
//         }
//     })
// })


// -----------------------------2nd method-----------------------------------
// -------------------------------buttons----------------------------
document.getElementById("0").addEventListener('click', ()=>{
    string = string + document.getElementById('0').innerHTML;
    document.querySelector('input').value = string;
})

document.getElementById("1").addEventListener('click', ()=>{
    string = string + document.getElementById('1').innerHTML;
    document.querySelector('input').value = string;
})

document.getElementById("2").addEventListener('click', ()=>{
    string = string + document.getElementById('2').innerHTML;
    document.querySelector('input').value = string;
})

document.getElementById("3").addEventListener('click', ()=>{
    string = string + document.getElementById('3').innerHTML;
    document.querySelector('input').value = string;
})

document.getElementById("4").addEventListener('click', ()=>{
    string = string + document.getElementById('4').innerHTML;
    document.querySelector('input').value = string;
})

document.getElementById("5").addEventListener('click', ()=>{
    string = string + document.getElementById('5').innerHTML;
    document.querySelector('input').value = string;
})

document.getElementById("6").addEventListener('click', ()=>{
    string = string + document.getElementById('6').innerHTML;
    document.querySelector('input').value = string;
})

document.getElementById("7").addEventListener('click', ()=>{
    string = string + document.getElementById('7').innerHTML;
    document.querySelector('input').value = string;
})

document.getElementById("8").addEventListener('click', ()=>{
    string = string + document.getElementById('8').innerHTML;
    document.querySelector('input').value = string;
})

document.getElementById("9").addEventListener('click', ()=>{
    string = string + document.getElementById('9').innerHTML;
    document.querySelector('input').value = string;
})

document.getElementById("00").addEventListener('click', ()=>{
    string = string + document.getElementById('00').innerHTML;
    document.querySelector('input').value = string;
})

// document.onkeydown = e =>{
//     if(e.key == "0" || e.key == "Num0"){
//         string = string + '0';
//         document.querySelector('input').value = string;
//     }
//     else if(e.key == "1" || e.key == "Num1"){
//         string = string + '1';
//         document.querySelector('input').value = string;
//     }
//     else if(e.key == "2" || e.key == "Num2"){
//         string = string + '2';
//         document.querySelector('input').value = string;
//     }
//     else if(e.key == "3" || e.key == "Num3"){
//         string = string + '3';
//         document.querySelector('input').value = string;
//     }
//     else if(e.key == "4" || e.key == "Num4"){
//         string = string + '4';
//         document.querySelector('input').value = string;
//     }
//     else if(e.key == "5" || e.key == "Num5"){
//         string = string + '5';
//         document.querySelector('input').value = string;
//     }
//     else if(e.key == "6" || e.key == "Num6"){
//         string = string + '6';
//         document.querySelector('input').value = string;
//     }
//     else if(e.key == "7" || e.key == "Num7"){
//         string = string + '7';
//         document.querySelector('input').value = string;
//     }
//     else if(e.key == "8" || e.key == "Num8"){
//         string = string + '8';
//         document.querySelector('input').value = string;
//     }
//     else if(e.key == "9" || e.key == "Num9"){
//         string = string + '9';
//         document.querySelector('input').value = string;
//     }
// }

// ------------------------Operators--------------------------
document.getElementById("+").addEventListener('click', ()=>{
    string = string + document.getElementById('+').innerHTML;
    document.querySelector('input').value = string;
})

document.getElementById("-").addEventListener('click', ()=>{
    string = string + document.getElementById('-').innerHTML;
    document.querySelector('input').value = string;
})

document.getElementById("*").addEventListener('click', ()=>{
    string = string + document.getElementById('*').innerHTML;
    document.querySelector('input').value = string;
})

document.getElementById("/").addEventListener('click', ()=>{
    string = string + document.getElementById('/').innerHTML;
    document.querySelector('input').value = string;
})

document.getElementById(".").addEventListener('click', ()=>{
    string = string + document.getElementById('.').innerHTML;
    document.querySelector('input').value = string;
})

document.getElementById("=").addEventListener('click', ()=>{
    string = eval(string);
    document.querySelector('input').value = string;
})

document.getElementById("C").addEventListener('click', ()=>{
    string = "";
    document.querySelector('input').value = string;
})

document.getElementById("DL").addEventListener('click', ()=>{
    string = string.slice(0,-1);
    document.querySelector('input').value = string;
})

document.getElementById("%").addEventListener('click', ()=>{
    string = string + "/" + "100";
    string = eval(string);
    document.querySelector('input').value = string;
})

