"use strict"

drawline();
//letter j
function drawline(){
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext ("2d");


    context.linewidth = 5;
    context.strokeStyle = "red";
    context.beginPath(); 
    context.moveTo (300, 300); 
    context.lineTo (300, 500);
    context.lineTo (250, 525);
    context.stroke();
//letter u
context.linewidth = 5;
context.strokeStyle = "blue"
context.beginPath ();
context.moveTo (350, 350);
context.lineTo (350, 500); 
context.stroke();


} 