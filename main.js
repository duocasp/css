$(document).ready(function(){
  
  document.getElementById("profile").hidden= true;
  document.getElementById("projects").hidden= true;
  document.getElementById("about").hidden= true;
  
  $("#toProfile").click(function(){
      $('#profile').show();
      $('.glyphicon').hide();
     });
  
  $("#toProj").click(function(){
      $('#projects').show();
    $('.glyphicon').hide();
     });
  
  $("#toAbout").click(function(){
      $('#about').show();
    $('.glyphicon').hide();
     });

  $(".toMain").click(function(){
      $(this).closest('div').hide();
    $('.glyphicon').show();
     });
  
  
   });
