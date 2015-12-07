$(function() {

  $(document).tooltip();
  // tabs widget
  $('#tabs').tabs({ 
      heightStyle: "content",
      active: 1,
      collapsible: true,
      //disabled: [2],
      event: "mouseover",
      show: { effect: "blind", duration: 5000}
  });

  var icons = {
     header: "ui-icon-circle-arrow-e",
     activeHeader: "ui-icon-circle-arrow-s"
  };
     
  //accordion widget
  $("#accordion").accordion({
      heightStyle: "content",
      active: 0,
      collapsible: true,
      //disabled: true,
      //event: "mouseover"
      icons: icons
  });
   
  //menu widget
  $("#menu").menu();
  $("#style li:first-child").hover(function(){
    $(this).animate({
      "font-size" : "+=10px"
    }) },function(){
     $(this).animate({
       "font-size" : "-=10px"
     })
  });
    
  $("#tooltip").tooltip({ 
      content: "Awesome title", 
      track: true,
      tooltipClass: "tooltip_class"
  });
  var content = $("#tooltip").tooltip("option","content");
  if(content){
    $("#tooltip").tooltip("option","content","your sweet first name");
    $("#tooltip").tooltip("option","items","[name]");
  }
     
  $("#date").datepicker();
  $(".button").button();
      
  /* image slider */
  var current, changeTimeout;
  var length = $('#slider > *').length;
  $('#slider > *').hide();
  for (var z = 0 ; z<length; z++) {
    $("#uldots").append("<li class='dot "+z+"'/>"); 
  }
  var slide = function(n){
    var i = n;
    if(n == 'next'){
      i = (current < length - 1) ? (current + 1) : 0;
    }
    if (n == 'prev'){
     	i = (current > 0) ? (current - 1) : (length - 1);
    }
    $('#slider > li').eq(current).hide();
    $('#slider > li').eq(i).show();
   	$('#uldots > li').eq(i).addClass("active");
    $('#uldots > li').eq(current).removeClass("active");
    current = i;
    clearTimeout(changeTimeout);
    changeTimeout = setTimeout(function() { slide('next'); },7000);
    console.log("cto is " + changeTimeout);
  }
         
  slide('next');
  $("#next").click(function() { slide('next'); } );
  $("#prev").click(function() { slide('prev'); } );
});
