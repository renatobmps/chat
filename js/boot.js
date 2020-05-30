/*
import { currentInstance } from "./controllers/NegociacaoController";
import {} from "./pollyfill/fetch";

let negociacaoController = currentInstance()

document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController)
document.querySelector('[type=button]').onclick = negociacaoController.apaga.bind(negociacaoController)
*/
import { currentInstance } from "./app/controllers/IndexController";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css'

import 'jquery/dist/jquery.min.js';

import 'popper.js/dist/popper.min.js';

import 'bootstrap/dist/js/bootstrap.min.js';

let indexController = currentInstance()