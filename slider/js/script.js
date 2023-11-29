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


////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////


class SliderNew {
  constructor(init) {
    this.slide = init.querySelectorAll('.new-slider__slide')
    this.slideWrapper = init.querySelectorAll('.new-slider__wrapper')
    this.slideContainer = init.querySelectorAll('.new-slider__container')
    this.prevBtn = init.querySelectorAll('.btn-prev')
    this.nextBtn = init.querySelectorAll('.btn-next')
    this.slideBtn = init.querySelectorAll('.new-slider__btn')
  }
  slideFn() {
    // определяем активный слайд
    let activeSlide = document.querySelector('.active-slide')
    const searchActiveSlideFn = () => {
      activeSlide = document.querySelector('.active-slide')
    }

    //активация кнопок в зависимости от активного слайда
    const slidePosition = () => {
      let firstSlide = this.slideWrapper[0].firstElementChild
      let lastSlide = this.slideWrapper[0].lastElementChild

      let prevBtnDisabledFn = (meaning) => {
        this.prevBtn.forEach(el => {
          el.disabled =
            meaning;
        })
      }
      let nextBtnDisabledFn = (meaning) => {
        this.nextBtn.forEach(el => {
          el.disabled =
            meaning;
        })
      }

      if (firstSlide.classList.contains('active-slide')) {
        prevBtnDisabledFn(true)
        nextBtnDisabledFn(false)
      }
      else if (lastSlide.classList.contains('active-slide')) {
        prevBtnDisabledFn(false)
        nextBtnDisabledFn(true)
      }
      else {
        prevBtnDisabledFn(false)
        nextBtnDisabledFn(false)
      }
    }
    slidePosition()

    //листаем слайды

    // Функция debounce 
    function debounce(func, delay) {
      let timer;
      return () => {
        clearTimeout(timer)
        timer = setTimeout(func, delay)
      };
    }

    const nextSlideFn = debounce(() => {
      searchActiveSlideFn()
      activeSlide.classList.remove('active-slide')
      activeSlide.nextElementSibling.classList.add('active-slide')
      slidePosition()
      this.slideWrapper[0].style.left = (this.slideWrapper[0].offsetLeft - this.slideWrapper[0].lastElementChild.offsetWidth) + 'px'
    }, 300)

    const prevSideFn = debounce(() => {
      searchActiveSlideFn()
      activeSlide.classList.remove('active-slide')
      activeSlide.previousElementSibling.classList.add('active-slide')
      slidePosition()
      this.slideWrapper[0].style.left = (this.slideWrapper[0].offsetLeft + this.slideWrapper[0].lastElementChild.offsetWidth) + 'px'
    }, 300)


    this.slideBtn.forEach(el => {
      el.onclick = () => {
        if (el.classList.contains('btn-next')) {
          nextSlideFn()
        }
        if (el.classList.contains('btn-prev')) {
          prevSideFn()
        }
      }
    })
  }
}

function activeSliderNew(el) {
  let newSlider = new SliderNew(el)
  newSlider.slideFn();
}
activeSliderNew(slider3)


