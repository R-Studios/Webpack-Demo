var atomic = require('./templates/atomic.handlebars')

document.addEventListener('DOMContentLoaded', function () {
  var div = document.createElement('div')
  div.innerHTML = atomic()
  var styles = require.context('./templates')
  styles.keys().forEach(function (key) {
    if (key.includes('.scss')) {
      styles(key)
    }
  })
  document.body.appendChild(div)
})
