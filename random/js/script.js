"use strict"

const btn = document.getElementById('btn')
const cubeBlock = document.getElementById('cube-block')

let number

const toHTMLCube = `<div class="cube"></div>`

//-----ФОРМИРОВАНИЕ КВАДРАТОВ
function render(html) {
  cubeBlock.insertAdjacentHTML('beforeEnd', html)
}
function delleteCube() {
  cubeBlock.innerHTML = ''
}
function random(min, max) {
  number = Math.floor(Math.random() * (max - min)) + min
  return number
}
function printCube(num) {
  for (var i = 0; i <= num; i++) {
    render(toHTMLCube)
  }
}
//-------ЦВЕТ КВАДРАТОВ---
const colorCube = ['red', 'balck', 'green', 'yellow', 'blue', 'DeepPink', 'white', 'DarkOrange', 'DarkKhaki', 'Purple', 'SaddleBrown', 'DarkTurquoise', 'Tomato', 'Lime', 'DarkSlateGray', 'Plum']
let colorLength = colorCube.length



btn.onclick = () => {
  //квадраты
  delleteCube()
  random(10, 100)
  printCube(number)
  let cubeAll = document.querySelectorAll('.cube')
  //цвет
  cubeAll.forEach(el => {
    random(0, colorLength)
    el.style.backgroundColor = colorCube[number]

  })

}