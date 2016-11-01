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

button.onclick = function (){
    
    //Creating a Request Object
      var request = new XMLHttpRequest();
    
        request.onreadystate = function(){
        if(request.readyState == XMLHttpRequest.DONE){
        //Take someactio
     if(request.Status == 200){
       
         
         var counter = request.responseText;
            var span = document.getElementById('count');
         span.innerHTML=counter.toString();
       
    
     }  
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

//submit name 

var submit = document.getElementById('submitbtn');

submit.onclick=function(){
    //MAke the request to server and send name 
    //capture the list of names and render it as a list 
    //Creating a Request Object
      var request = new XMLHttpRequest();
    
        request.onreadystate = function(){
        if(request.readyState == XMLHttpRequest.DONE){
        //Take someactio
     if(request.Status == 200){
       
        var names= request.responseText;
        names=JSON.parse(names);
        
        var list='';
    for (var i=0;i<names.length;i++){
        list+='<li>'+names[i]+ '</li>';
        
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML = namelist;
      }  
    }
      
    };
    //Make Request
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://monish50922.imad.hasura-app.io/submit?name=' + name,true);
    request.send(null);
};


