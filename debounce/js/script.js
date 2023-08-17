const btn = document.getElementById('btn');
const sideBarFontsBlock = document.getElementById('sideBarFontsBlock')
const sideBarColorBlock = document.getElementById('sideBarColorBlock')
const sideBarThemesBlock = document.getElementById('sideBarThemesBlock')
function visibleBlock() {
  sideBarFontsBlock.classList.toggle('open-block')
  setTimeout(() => {
    sideBarColorBlock.classList.toggle('open-block')
  }, 1010);
  setTimeout(() => {
    sideBarThemesBlock.classList.toggle('open-block')
  }, 2010);
}
/*
let debFn = function debounce(f, ms) {
  f, ms
}
function debounce(f, ms) {
  f, ms
}
btn.addEventListener('click', debFn(visibleBlock(), 1000))
*/
btn.onclick = () => {
  visibleBlock()
}