$(document).ready(function(){
//all of the jquery you write can go inside of this global function
    console.log('The document is ready!')
   
    //function that fades the paragraph text in and out
    $('#btn1').click(function(){
          $('p').fadeOut(2000);          
    });
     $('#btn2').click(function(){
          $('p').fadeIn(2000);          
    });                            
      //paragraph text slides up when user clicks button 1, paragraph text slides down when user clicks button 2            
   $('#btn3').click(function(){
          $('p').slideUp();          
    });
     $('#btn4').click(function(){
          $('p').slideDown();          
    });    
    
    
                  
});