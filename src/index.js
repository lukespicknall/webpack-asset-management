import _ from "lodash";
import './style.css';
import Icon from './icon.png';

function component() {
  const element = document.createElement("h2");

  element.innerHTML = _.join(["Hello", "Ronnie"], " ");
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  return element;

}

document.body.appendChild(component());


