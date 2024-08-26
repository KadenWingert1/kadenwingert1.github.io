(function ($) {
  var $window = $(window),
    $body = $("body"),
    $nav = $("#nav");

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["361px", "736px"],
    xsmall: [null, "360px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Dropdowns.
  $("#nav > ul").dropotron({
    mode: "fade",
    noOpenerFade: true,
    speed: 300,
    alignment: "center",
  });

  // Scrolly
  $(".scrolly").scrolly({
    speed: 1000,
    offset: function () {
      return $nav.height() - 5;
    },
  });

  // Nav.

  // Title Bar.
  $(
    '<div id="titleBar">' +
      '<a href="#navPanel" class="toggle"></a>' +
      '<span class="title">' +
      $("#logo").html() +
      "</span>" +
      "</div>"
  ).appendTo($body);
})(jQuery);

window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  const maxScrollValue =
    document.documentElement.scrollHeight - window.innerHeight;

  // Ensure the scrollValue doesn't exceed maxScrollValue
  const limitedScrollValue = Math.min(scrollValue, maxScrollValue);

  // Calculate the scroll progress percentage
  const scrollPercentage = (limitedScrollValue / maxScrollValue) * 100;

  // Update the width of the progress bar
  document.querySelector(".progress-bar").style.width = `${scrollPercentage}%`;
});

function toggleColorMode() {
  var element = document.body;
  element.classList.toggle("light-mode");
}