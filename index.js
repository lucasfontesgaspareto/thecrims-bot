var addButton = function(name, fn) {
  var ul = document.querySelector('[href="/logout"]').parentElement.parentElement
  var li = document.createElement('li')
  li.innerHTML = '<button onclick="' + fn + '();">' + name + '</button>'
  ul.appendChild(li)
}

var init = function() {
  
  if(window.location.pathname.indexOf('/robberies') == -1) {
    window.location.href = "https://www.thecrims.com/newspaper#/robberies"
  }

  addButton('Stop', 'stop')
  addButton('Start', 'start')
}

var executing = false

var start = function() {
  bot()
}

window.document.addEventListener('DOMContentLoaded', function() { // parent. removed between window..document <
  init()
})