//console.log('Loaded!');


//var img = document.getElementById('madi')
//var marginLeft= 0 ;

//function moveRight(){
 //   marginLeft=marginLeft+1;
    
   // img.style.marginLeft=marginLeft + 'px';
    
    
//}

//img.onclick=function(){
 //   //img.style.marginLeft='100px';
 //   var interval=setInterval(moveRight,50);
    
//}

//counter Code
var button=document.getElementById('counter');
var counter = 0;

button.onclick=function (){
    //make a request for counter end point
    
    //capture the response and store it in a variabe
    
    //render the variable in a correct span
    counter =counter +1 ;
    var span=document.getElementById('counter');
    span.innerHTML=counter.toString();
    
    
};

