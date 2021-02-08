$(document).ready(function () {

  /* Open lightbox on button click */

  $('.lightbox-toggle img').click(function () {
    $('.backdrop').animate({ 'opacity': '.50' }, 300, 'linear').css('display', 'block');
    $('.box').fadeIn();

    //Check if lightbox has an image
    if ($('.box').contents('img')) {
      $('.box').contents().remove('img'); //If true, clear image
    }

    var altvalue = $(this).attr('alt');
  
    if (altvalue=="photo1") {
      var img = $('#photo1 img').clone();
      $('.box').append(img);
    }

    if (altvalue=="photo2") {
      var img = $('#photo2 img').clone();
      $('.box').append(img);
    }

    if (altvalue=="photo3") {
      var img = $('#photo3 img').clone();
      $('.box').append(img);
    }

    if (altvalue=="photo4") {
      var img = $('#photo4 img').clone();
      $('.box').append(img);
    }

    if (altvalue=="photo5") {
      var img = $('#photo5 img').clone();
      $('.box').append(img);
    }

    if (altvalue=="photo6") {
      var img = $('#photo6 img').clone();
      $('.box').append(img);
    }

    if (altvalue=="photo7") {
      var img = $('#photo7 img').clone();
      $('.box').append(img);
    }

    if (altvalue=="photo8") {
      var img = $('#photo8 img').clone();
      $('.box').append(img);
    }

    if (altvalue=="photo9") {
      var img = $('#photo9 img').clone();
      $('.box').append(img);
    }

    if (altvalue=="photo10") {
      var img = $('#photo10 img').clone();
      $('.box').append(img);
    }
  });

  /* Click to close lightbox */
  $('.close, .backdrop').click(function () {
    $('.backdrop').animate({ 'opacity': '0' }, 300, 'linear', function () {
      $('.backdrop').css('display', 'none');
    });
    $('.box').fadeOut();
  });
});