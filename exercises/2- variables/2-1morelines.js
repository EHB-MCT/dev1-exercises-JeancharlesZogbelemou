"use strict";



let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

let context = canvas.getContext("2d");



let width = context.canvas.width;

let height = context.canvas.height;

let margin= 50;

let spacing = 100;



drawLines();



function drawLines() {

    //letter B

    context.lineWidth=2;



    context.beginPath();

    context.moveTo(margin,spacing);

    context.lineTo(width- margin, spacing);

    context.lineTo(margin, spacing * 2);

    context.lineTo(width- margin, spacing*2);

    context.closePath();



    context.stroke();

   

   

}