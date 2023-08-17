const square = document.getElementById('square');
square.onclick = () => {
  square.classList.add('animation-square')
  console.log(square.style.animationDuration);
  setTimeout(() => { square.classList.remove('animation-square') }, 6000)
}

const circle = document.getElementById('circle-btn');
circle.onclick = () => {
  circle.classList.add('circle-active')
  setTimeout(() => { circle.classList.remove('circle-active') }, 1000)
}

const triangle = document.getElementById('triangle');
triangle.onclick = () => {
  triangle.classList.toggle('triangle-active')

}


const rectangle = document.getElementById('rectangle');
rectangle.onclick = () => {
  rectangle.classList.add('rectangle-active')
  setTimeout(() => { rectangle.classList.remove('rectangle-active') }, 2500)
}