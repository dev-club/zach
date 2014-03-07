$(document).ready(function(){
   $('.tab-section').hide();
   $('#tabs a').bind('click', function(r){
       $('#tabs a.current').removeClass('current');
       $('.tab-section:visible').hide()
       $(this.hash).show();
       $(this).addClass('current');
       r.preventDefault;
   }).filter(':first').click();      
});    
