

//toggle ansök knapp med färg

document.getElementById('applybutton').onclick = function() {
    this.classList.toggle('newbutton')
};


// Apply counter 

var w = 20;
var x = document.getElementById('add');
var y = document.getElementById('applybutton')
function buttonClick() {
 x.value = ++w;
 x.innerHTML = w;
};
y.addEventListener("click", buttonClick);


    //toggle visebility av form 
    
var f = document.getElementById('form');
var el = document.getElementsByClassName('far');
for (var i=0; i < el.length; i++){
    // Here we have the same onclick
    el.item(i).onclick = function(){
        f.classList.toggle('formGone')
    }
};