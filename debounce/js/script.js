const btn = document.getElementById('btn');
const sideBarFontsBlock = document.getElementById('sideBarFontsBlock')
const sideBarColorBlock = document.getElementById('sideBarColorBlock')
const sideBarThemesBlock = document.getElementById('sideBarThemesBlock')

//поочередное открытие списков
function visibleBlock() {
  sideBarFontsBlock.classList.toggle('open-block')
  setTimeout(() => {
    sideBarColorBlock.classList.toggle('open-block')
  }, 400)
  setTimeout(() => {
    sideBarThemesBlock.classList.toggle('open-block')
  }, 800)
}

// Функция debounce 
function debounce(func, delay) {
  let timer;
  return () => {
    clearTimeout(timer)
    timer = setTimeout(func, delay)
  };
}

// Функция, которая будет запускаться при клике на элемент
const handleClick = debounce(() => {
  visibleBlock()
}, 1000)


btn.onclick = () => {
  handleClick()
}


