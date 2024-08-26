import { handleSubmit } from './js/formHandler';
import { checkForName } from './js/nameChecker';

import webpack from './assets/webpack.png';

import "./styles/resets.css";
import "./styles/base.css";
import "./styles/footer.css";
import "./styles/form.css";
import "./styles/header.css";


let img = document.createElement('img');
img.src = webpack
console.log(webpack)
img.alt = 'Description of the image';
img.width = 300;  // Example: set width to 300px
img.height = 200; // Example: set height to 200px

var resultDiv = document.getElementById('results');
resultDiv.appendChild(img);

export {
    handleSubmit, 
    checkForName
}