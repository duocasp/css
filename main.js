$(document).ready(function(){
  var html="";
  document.getElementById("profile").hidden= true;
  document.getElementById("projects").hidden= true;
  document.getElementById("about").hidden= true;
  
  $(".button").mouseover(function(){
       
       $("#overlay").css("display", "block");
     if(this.id == 'toProfile'){
       $('#toProfile').css("z-index", "3");
        html = "View My Basic Profile";
       $("#overlay").html(html);
     } 
    
     if(this.id == 'toProj'){
       $('#toProj').css("z-index", "3");
        html = "About my FreeCodeCamp Projects written in CodePen";
       $("#overlay").html(html);
     }
    
    if(this.id == 'toAbout'){
       $('#toAbout').css("z-index", "3");
        html = "More about Me and this Webpage...";
       $("#overlay").html(html);
     }
    
     
    
    
    
    });
    $(".button").mouseout(function(){
       // $(this).css("z-index", "0");
        $("#overlay").css("display", "none");
    });
  
  $("#toProfile").click(function(){
      $('.button').hide();
      $('#profile').show();
      $('.glyphicon').hide();
      $('#overlay').hide();
     });
  
  $("#toProj").click(function(){
      $('.button').hide();
      $('#projects').show();
    $('.glyphicon').hide();
    $('#overlay').hide();
     });
  
  $("#toAbout").click(function(){
    $('.button').hide();
      $('#about').show();
    $('.glyphicon').hide();
    $('#overlay').hide();
     });

  $(".toMain").click(function(){
    $('.button').show();
      $(this).closest('div').hide();
    $('.glyphicon').show();
     });
  
  
   });
