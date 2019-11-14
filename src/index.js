import printMe from "./print.js";
import { cube } from "./math.js";
import './style.scss';
import hello from "./templates/hello.handlebars";

function getComponent() {
  return import(/* webpackChunkName: "lodash" */ "lodash")
    .then(({ default: _ }) => {
      const element = document.createElement("div");

      element.innerHTML = [
        "Hello webpack!",
        "5 cubed is equal to " + cube(5) + hello()
      ].join("\n\n");
      element.classList.add('body');

      return element;
    })
    .catch(error => "An error occurred while loading the component");
}

getComponent().then(component => {
  document.body.appendChild(component);
});
