"use strict";

var myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log("width ".concat(myWidth, " \n height ").concat(myHeight));

window.onload = function () {
  /*
      increase date
   */
  var today = new Date(),
      tomorrow = new Date(),
      day,
      month,
      year,
      i = 3,
      period = document.querySelectorAll('.to-order h6 output');
  tomorrow.setDate(today.getDate() + i);
  day = tomorrow.getDate() > 9 ? tomorrow.getDate() : "0".concat(tomorrow.getDate());
  month = tomorrow.getMonth() + 1 > 9 ? tomorrow.getMonth() + 1 : "0".concat(tomorrow.getMonth() + 1);
  year = tomorrow.getFullYear();

  for (var _i = 0; _i < period.length; _i++) {
    period[_i].innerHTML = "".concat(day, ".").concat(month, ".").concat(year.toString().slice(2));
  }

  var catalogYear = document.querySelectorAll('p output');

  for (var _i2 = 0; _i2 < catalogYear.length; _i2++) {
    catalogYear[_i2].innerHTML = year;
  }

  document.querySelector('h6.address output').innerHTML = year;
  /*
      fancybox loop
   */

  $.fancybox.defaults.loop = true;
  /*
      form styler
   */

  $(function () {
    $('select').styler({
      selectSmartPositioning: false
    });
  });
  /*
      review slider
   */

  $('.review__content-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 0,
    speed: 300,
    arrows: true,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow')
  }); // /*
  //     change href on mobile
  //  */
  //
  // if(/iPhone|iPod|Android/i.test(navigator.userAgent)){
  //     document.querySelector('a.grande').href = '#formgrande';
  //     document.querySelector('a.lake').href = '#formlake';
  //     document.querySelector('a.lou').href = '#formlou';
  // }
};