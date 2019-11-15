import './style.scss';
import text from './templates/01-atoms/text.handlebars';

function getComponent() {
  return import('lodash').then(({ default: _ }) => {
    const element = document.createElement('div')

    element.innerHTML = text()
    element.classList.add('body')

    return element
  }).catch(error => 'An error occurred while loading the component')
}

getComponent().then(component => {
  document.body.appendChild(component)
});
