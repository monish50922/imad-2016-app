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
    //Creating a Request Object
    var request=new XmlHttpRequest();
    request.onreadystate=function(){
    if(request.readystate==XmlHttpRequest.DONE){
        //Take someactio
    }
     if(request.Status==200){
         var counter=request.responsetext;
         var span=document.getElementById('count');
         spaninnerHTML=counter.tostring();
         
     }  
     
    };
    //Make Request
    request.open('GET','http://monish50922.imad.hasura-app.io/counter',true);
    request.send(null);
    
    
    
    //render the variable in a correct span
    ///counter =counter +1 ;
    //var span=document.getElementById('count');
    //span.innerHTML=counter.toString();
    
    
};

