const button = document.querySelector('button')
const modal_bg = document.querySelector('.modal_bg')
const modal = document.querySelector('.modal')
const modal_btn_container = document.querySelector('.btn')
const close = document.querySelector('span')
const counterElement = document.querySelector('.counter')
let counter = localStorage.getItem('counter')

button.addEventListener('click', () => {
  if(counter==null){
    counter=0
  }
  counter++
  modal_bg.style.display = 'block'
  counterElement.innerHTML = counter
  localStorage.setItem('counter', counter)
  if(counter>5){
    showResetButton()
  }
})

close.addEventListener('click', () => modal_bg.style.display = 'none')

window.addEventListener('click', e => {
  if(e.target.className === 'modal_bg'){
    modal_bg.style.display = 'none'
  }
})

const showResetButton = () => {
  modal_btn_container.innerHTML = '<button class="red">Reset</button>'
  modal_btn_container.addEventListener('click', () => {
    localStorage.setItem('counter', 0)
    counter = 0
    counterElement.innerHTML = counter
    modal_btn_container.innerHTML = ''
  })
}


