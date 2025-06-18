let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
let btn10 = document.getElementById('btn10');

btn1.onclick = function () {
    document.body.style.backgroundColor = 'yellow';
}

btn2.onclick = function () {
    document.querySelector('.para1').classList.add('text-red');
}

btn3.onclick = function () {
    btn3.classList.add('bigger');
}

btn4.onclick = function () {
    document.querySelector('.box1').classList.add('black-border');
}

btn5.onclick = function () {
    btn5.classList.add('green-bg');
}

btn6.onclick = function () {
    document.querySelector('.heading1').classList.add('large-font');
}

btn7.onclick = function () {
    document.querySelector('.img1').classList.add('image-border');
}

btn8.onclick = function () {
    btn8.classList.add('white-on-black');
}

btn9.onclick = function () {
    document.querySelector('.para2').classList.add('italic-text');
}

btn10.onclick = function () {
    document.querySelector('.box2').classList.add('lightblue-bg');
}