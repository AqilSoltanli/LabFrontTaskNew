





 function SHOW() {
    var active  = document.querySelector('#sidebar-wrapper').classList;
    if (active.contains('d-none')){
        active.remove('d-none');
    }  
    else{
        active.add('d-none');
    }
}

var count = 16;

function plus(){
    var first = document.querySelectorAll('.container-fluid p') 
    count++;
    for(let a of first){
        a.style.fontSize = count+'px';
    }
    
}

function minus(){
    var first = document.querySelectorAll('.container-fluid p')
    count--;
    for(let a of first){
        a.style.fontSize = count+'px';
    }
    
}

function hi(){
    var value = document.getElementById('inp').value;
    var simp = document.querySelector('.container-fluid h1');
    simp.style.color = value;
}



