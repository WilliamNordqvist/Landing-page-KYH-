

//toggle ansök knapp med färg samt Toggle genom ansök buttom genom ID - ingen for lopp 

var f = document.getElementById('form');
var y = document.getElementById('applybutton');
var s = document.getElementById('submit');
var h = document.getElementById('home');

var w = 20;
var x = document.getElementById('add');

y.onclick = function() {
    y.classList.toggle('newbutton');
    f.classList.toggle('formGone');
    y.scrollIntoView(true);
};


function buttonClick() {
 x.value = ++w;
 x.innerHTML = w;
};
y.addEventListener("click", buttonClick);

// element.classList.contains(class);


// document.getElementById('home').onclick = function() {
// alert('working');
// console.log('yesss')
// };


// window.location.href = ("./landing.html");