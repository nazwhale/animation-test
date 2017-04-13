$(document).ready(function(){
  var game = new Game;
  updateSize();
  isGameFinished();

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


  // var intDuration = 1000;
  // setInterval(
  //   function(){
  //     $('div').animate({"height": "+=150px"})
  //   },
  //   intDuration
  // )

  $('div').click(function(){
    $(this).animate({
      height: "+=#{game.increaseSize()}px"
    })
    isGameFinished();
  })

  function updateSize() {
    $('#pink').height(game.getSize())
  }

  function finishGame() {
    $('#pink').css('background-color', 'red');
  }

  function isGameFinished() {
    console.log("WORKING");
    if (game.isGameOver()) {
      finishGame();
    }
  }

});
