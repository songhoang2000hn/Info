$(document).ready(function () {
  // options handel
  let itemOption = $(".item-option");
  let extendList = $(".extend-list");
  itemOption.click(function (e) {
    // active item
    itemOption.removeClass("active");
    $(this).addClass("active");
    let itemOptionArr = Array.from(itemOption);
    let indexItem = itemOptionArr.indexOf($(this)[0]);
    extendList.removeClass("active");
    extendList.eq(indexItem).addClass("active");
    // scroll to top
    let scrollTo = $(".detail").offset();
    $("html,body").animate({ scrollTop: scrollTo.top - 50 }, "slow");
  });

  //slide show
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    n = n ? n : 1;
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }
  var myTimeout;

  function showSlides(n) {
    clearTimeout(myTimeout)
    var i;
    var dots = $(".dot");
    var slides = $(".mySlides");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides.eq(i).css("display", "none");
    }
    for (i = 0; i < dots.length; i++) {
      dots.eq(i).removeClass("active");
    }
    slides.eq(slideIndex - 1).css("display", "flex");
    dots.eq(slideIndex - 1).addClass(" active");
    myTimeout = setTimeout(plusSlides, 5000);
  }

  $(".prev").click(function (e) {
    plusSlides(-1);
  });

  $(".next").click(function (e) {
    plusSlides(1);
  });

  $(".dot").click(function (e) {
    let dotArr = Array.from($(".dot"));
    let indexItem = dotArr.indexOf($(this)[0]);
    currentSlide(indexItem + 1);
  });
});
