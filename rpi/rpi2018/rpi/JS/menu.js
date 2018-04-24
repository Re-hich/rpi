
//Desplegar al poner el cursor encima
/*$('#menu li').hover(function(){
 $(this).find('ul').slideToggle('slow');
 });*/

//Desplegar al hacer clic
$('#menu li').click(function(){
                    $(this).find('ul').slideToggle('slow');
                    });

</script><script>
$(function(){
  // this will get the full URL at the address bar
  var url = window.location.href;
  
  // passes on every "a" tag
  $("#menu a").each(function() {
                    // checks if its the same on the address bar
                    if(url == (this.href)) {
                    $(this).closest("li").addClass("active");
                    }
                    });
  });
