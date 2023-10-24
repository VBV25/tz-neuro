"use strict"

const inputWindow = document.querySelectorAll('input')
const btnForm = document.getElementById('form-block-btn')

//---переменные валлидации---
const VALID_NAME_TEST = /^[а-яА-ЯЁёa-zA-Z]+$/
const VALID_PHONE_TEST = /^(8|\+[0-9])\d{1,14}$/
const VALID_PASSWORD_TEST = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,40}/

btnForm.onclick = () => {
  let password
  let validResult

  inputWindow.forEach((input) => {
    let inputType = input.name.toLowerCase()
    let inputValue = input.value
    let inputLength = input.value.length
    let windowErr = input.parentNode.querySelector('div')
    windowErr.innerText = ''

    if (inputType === 'name') {
      validResult = VALID_NAME_TEST.test(inputValue)
      if (!validResult || inputLength > 30 || inputLength < 3) {
        windowErr.innerText = 'только кириллица/латиница, от 3 до 30 символов'
      }
    }
    if (inputType === 'phone') {
      validResult = VALID_PHONE_TEST.test(inputValue)
      if (!validResult || inputLength < 10 || inputLength > 15) {
        windowErr.innerText = 'Введен некорректный номер телефона'
      }
    }
    if (inputType === 'password') {
      validResult = VALID_PASSWORD_TEST.test(inputValue)
      if (!validResult || inputLength < 8 || inputLength > 40) {
        windowErr.innerText = 'Длина от 8 до 40 симфолов, обязательна одна цифра и заглавная буква, только латинские буквы'
      }
      password = inputValue
      return password
    }

    if (inputType === 'сonfirm-password') {
      if (inputValue != password || inputValue === '') {
        windowErr.innerText = 'Пароли не совпадают'
      }
    }
  })
}