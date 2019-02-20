document.getElementsByClassName('flashcard')[0].addEventListener('click', function(){
  var current = document.getElementsByClassName('bottom')[0].hidden;
  document.getElementsByClassName('bottom')[0].hidden = !current;
})
