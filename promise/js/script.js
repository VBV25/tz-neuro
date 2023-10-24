"use strict"

const btn1 = document.getElementById('page1')
const btn2 = document.getElementById('page2')
const cardGroupBlock = document.getElementById('row');
const peopleArr = []
let listPeople
let listPeopleLength

function delleteCard() {
  cardGroupBlock.innerHTML = ''
}
function printCard(num) {
  for (var i = 0; i < num; i++) {
    let htmlCard = `
    <div class="card" id="${peopleArr[i].id}">
      <img class="card__img" src='${peopleArr[i].avatar}' alt='avatar'>
      <div class="card__body">
        <h3 class="card__name">${peopleArr[i].first_name}</h3>
        <h3 class="card__surname">${peopleArr[i].last_name}</h3>
        <p class="card__email">${peopleArr[i].email}</p>
      </div>
    </div>`
    cardGroupBlock.insertAdjacentHTML('beforeEnd', htmlCard)
  }
}

const getList = (src) => {
  const listPromise = fetch(src)
  return listPromise
    .then(data => data.json())
    .then(people => {
      listPeople = people.data
      listPeopleLength = people.data.length
      listPeople.forEach(el => {
        peopleArr.push(el)
      });
      peopleArr.sort((a, b) => a.first_name > b.first_name ? 1 : -1);
      printCard(peopleArr.length)
      return peopleArr
    })
    .catch(err => {
      console.log('Ошибка', err);
    })
}

getList('https://reqres.in/api/users')

btn1.onclick = () => {
  delleteCard()
  peopleArr.splice(0)
  getList('https://reqres.in/api/users')
}
btn2.onclick = () => {
  delleteCard()
  peopleArr.splice(0)
  getList('https://reqres.in/api/users?page=2')
}


