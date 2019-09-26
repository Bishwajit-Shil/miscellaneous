$(document).ready(function(){
  
 

  $(".butt").click(function() {
    var text = $(this).val();
   $( "#input" ).val( $( "#input" ).val() + text);


    
    var text2= $( "#input" ).val();
    var text3= text2.length;

    if(text3>14){
    $("#input").val(" too much long ");
    $("#result").val(" click AC")
   }

    });
    
  $("#clear").click(function(){
    $( "#input" ).val('');
    $("#result").val('');
  });



  $("#calcu").click(function(){
    $( "#result" ).val(eval($( "#input" ).val()));
  });



  $("#ce").click(function(){ 
    var eq = $( "#input" ).val().slice(0, -1);  
    $("#input").val(eq);
  });




});