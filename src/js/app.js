// JS Goes here - ES6 supported

// Say hello
console.log("🦊 Hello! Edit me in src/js/app.js");

$(function() {
  // MOBILE MENU
  $("#mobile-menu-button").click(function() {
    console.log("menu button clicked!");

    animate("#mobileNavContainer", "fadeIn");
    $("#mobileNavContainer").show();
    return false;
  });

  $("#mobileMenuCloseBtn").click(function() {
    console.log("close menu button clicked!");

    animate("#mobileNavContainer", "fadeOut");
    // Wait a second...
    sleep(250).then(() => {
      $("#mobileNavContainer").hide();
    });
    return false;
  });

  // NEWSLETTER SIGNUP MODAL
  $("#newsletterSignupButton").click(function() {
    animate("#newsletterSignupModal", "fadeIn");
    $("#newsletterSignupModal").show();
  });

  $(".closeModalBtn").click(function() {
    animate("#newsletterSignupModal", "fadeOut");
    sleep(250).then(() => {
      $("#newsletterSignupModal").hide();
    });
  });

  // Animate
  function animate(element, animation) {
    $(element).addClass("animated " + animation);
    var wait = setTimeout(function() {
      $(element).removeClass("animated " + animation);
    }, 300);
  }

  function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
});
