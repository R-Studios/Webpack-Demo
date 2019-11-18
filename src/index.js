document.addEventListener('DOMContentLoaded', function () {
  var div = document.createElement('div')

  var templates = require.context('./')
  div.innerHTML += '<h1>./templates</h1>'

  templates.keys().forEach(function (key) {
    if (key.includes('.handlebars')) {
      div.innerHTML += '<h2>' + (key.substr(0, key.lastIndexOf('/'))).substr(0, (key.substr(0, key.lastIndexOf('/'))).lastIndexOf('/')) + '</h2>'
      div.innerHTML += '<h3>' + key.substr(0, key.lastIndexOf('/')) + '</h3>'
      div.innerHTML += templates(key)()
    } else if (key.includes('.scss')) {
      templates(key)
    }
  })

  document.body.appendChild(div)
})
