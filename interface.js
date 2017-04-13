$(document).ready(function(){

  // $('div').mouseenter(function(){
  //   // $(this).animate({
  //   //   height: '+=100px'
  //   // });
  //   $(this).stop().animate({height: "+=30px"});
  // });

  // $('div').mouseleave(function(){
  //   $(this).animate({
  //     height: '-=100px'
  //   })
  // })


  var intDuration = 1000;
  setInterval(
    function(){
      $('div').animate({"height": "+=150px"}) 
    },
    intDuration
  )

  $('div').click(function(){
    $(this).animate({
      height: '-=50px'
    })
  })


});
