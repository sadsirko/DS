const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const elemN = document.getElementById('elemN');
const elemUn = document.getElementById('elemUn');
const elemMatrix = document.getElementById('elemmatrix');
const elemTwoStep = document.getElementById('elemtwostep');
const elemThreeStep = document.getElementById('elemthreestep');
const elemDos = document.getElementById('elemDos');
const elemLink = document.getElementById('elemLink');
const elemSortLink = document.getElementById('elemSortLink');
const elemNext = document.getElementById('elemNext');
const elemClear = document.getElementById('elemClear');
const elemBFS  =  document.getElementById('elemBFS');
const elemPrim = document.getElementById('elemPrim');
const elemPrimStep = document.getElementById('elemPrimStep');
const elemWeight = document.getElementById('elemWeight');

const source = document.getElementById('source');
 
const G_COUNT = 12;
let countV = 0;
let graph = [];
let vector = [];
let vectorUn = [];
const RADIUS = 230;
const RADIUS_GR = 30;
const ELIPSE_WIDTH = 15;
const R_OF_OUT_CIRCLE = 10;
let arrUn = [];
let next = 0;
let iteratePrim = 1;

