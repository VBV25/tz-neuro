"use strict";
class SliderProt {
  constructor(init) {
    this.slideBlock = init.querySelectorAll('.slider__slide')
    this.wrapper = init.querySelectorAll('#wrapper')
    this.next = init.querySelectorAll(' #btnNext')
    this.prev = init.querySelectorAll(' #btnPrev')
  }
  slide() {
    //находим видимый слайд и отключаем кнопки если нет предыдущих и следующих слайдов
    const slidePosition = () => {
      let positionLastSlide = this.wrapper[0].lastElementChild.offsetLeft;
      if (this.wrapper[0].offsetLeft >= 0) {
        this.prev.forEach(el => {
          el.disabled = true;
        })
      } else {
        this.prev.forEach(el => {
          el.disabled = false;
        })
      }
      let lastSlideWidth = this.wrapper[0].lastElementChild.offsetWidth
      if (this.wrapper[0].offsetLeft <= (-positionLastSlide + lastSlideWidth / 3)) {
        this.next.forEach(el => {
          el.disabled = true;
        })
      } else {
        this.next.forEach(el => {
          el.disabled = false;
        })
      }
    }
    slidePosition()
    //листаем слайды
    //вперед
    for (let i = 0; i < this.next.length; i++) {
      this.next[i].onclick = () => {
        this.wrapper[0].style.left = (this.wrapper[0].offsetLeft - this.wrapper[0].lastElementChild.offsetWidth) + 'px';
        slidePosition()
      }
    }
    for (let i = 0; i < this.prev.length; i++) {
      this.prev[i].onclick = () => {
        this.wrapper[0].style.left = (this.wrapper[0].offsetLeft + this.wrapper[0].lastElementChild.offsetWidth) + 'px';
        slidePosition()
      }
    }
  }
}

function activeSlider(el) {
  let newSlider = new SliderProt(el)
  newSlider.slide();
}
activeSlider(slider)
activeSlider(slider2)

