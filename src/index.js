function getComponent() {
  return import('lodash').then(({ default: _ }) => {
    const element = document.createElement('div')

    var atomic = require.context('./templates')
    atomic.keys().forEach(function(key){

      if (key.includes('.handlebars')) {
        console.log(key);
        console.log(atomic(key));
        //Handlebars.registerPartial(key, atomic(key));

        element.innerHTML += atomic(key)()
      }
      else if (key.includes('.scss')) {
        atomic(key)
      }
      element.innerHTML += '<br>'
    });

    return element
  }).catch(error => 'An error occurred while loading the component')
}

getComponent().then(component => {
  document.body.appendChild(component)
});
