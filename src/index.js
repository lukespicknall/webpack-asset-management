import _ from "lodash";
import './style.css'

function component() {
  const element = document.createElement("h2");

  element.innerHTML = _.join(["Hello", "Ronnie"], " ");
  element.classList.add('hello')

  return element;
}

document.body.appendChild(component());
