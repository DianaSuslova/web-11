$(document).ready(function(){
/* ready + click + addclass + css + hide + show + fadeIn +fadeOut + append + prepend + hover + trigger + html + dblclick + keydown*/
$('.prikol').click(function(){
  $(this).addClass('prekol');
  let message = $(this).css('font-family');
  swal(`теперь тут ${message}`);
});

let i = true;
$('.play').click(function(){
  if(i){
    $('.app').hide();
    i = !i;
  }
  else {
    $('.app').show();
    i= !i;
  }
  
});

let t = true;
$('.app').click(function(){
  if(t){
    $('.play').fadeOut();
    t = !t;
  }
  else {
    $('.play').fadeIn();
    t= !t;
  }
  
});

$(document).dblclick(function(){
  swal("двойное нажатие мыши");
});

$('.emoji').click(function(){
  $(this).append('😀');
  $(this).prepend('😀');
});


$('.sdd').hover(function(){
  $(this).trigger(asd());
});


  $( function() {
    $( "#accordion" ).accordion();
  } );
  
  function asd(){
    swal("привет, я плагин!");
  };
  
$('div').click(function(){
  let mes = $(this).html();
  swal(mes);
});
$(document).keydown(function(event){
  if (event.which == 13){
    swal("вы нажали enter")
  }
});

});

