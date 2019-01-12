var list = document.querySelector('ul')
var todos

function toLocal () {
  todos = list.innerHTML
  localStorage.setItem('todos', todos)
}

list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked')
    toLocal()
  } else if (ev.target.tagName === 'SPAN') {
    var div = ev.target.parentNode
    div.remove()
    toLocal()
  }
}, false)

function newElement () {
  var li = document.createElement('li')
  var inputValue = document.getElementById('toDoEl').value
  var t = document.createTextNode(inputValue)
  li.appendChild(t)
  if (inputValue == '') {
    alert('Введите ваше дело!')
  } else {
    document.getElementById('list').appendChild(li)
  }
  document.getElementById('toDoEl').value = ''
  var span = document.createElement('SPAN')
  var txt = document.createTextNode('X')
  span.className = 'close'
  span.appendChild(txt)
  li.appendChild(span)
  toLocal()
}

if (localStorage.getItem('todos')) {
  list.innerHTML = localStorage.getItem('todos')
}

window.onload = function () {
  document.querySelector('.tabs-header').addEventListener('click', fTabs)

  function fTabs (event) {
    console.log(event)
    if (event.target.className == 'tab-h') {
      var dataTab = event.target.getAttribute('data-tab')
      var tabH = document.getElementsByClassName('tab-h')
      for (var i = 0; i < tabH.length; i++) {
        tabH[i].classList.remove('active')
      }
      event.target.classList.add('active')
      var tabBody = document.getElementsByClassName('tab-b')
      for (var i = 0; i < tabBody.length; i++) {
        if (dataTab == i) {
          tabBody [i].style.display = 'block'
        }
        else {
          tabBody[i].style.display = 'none'
        }
      }
    }
  }
}