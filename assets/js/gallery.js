document.addEventListener("DOMContentLoaded", function () {
  var gallery = document.querySelector(".gallery");
  var galleryItems = document.querySelectorAll(".gallery-item");
  var numOfItems = gallery ? gallery.children.length : 0;
  var itemWidth = 23; // percent: as set in css

  var featured = document.querySelector(".featured-item");

  var leftBtn = document.querySelector(".move-btn.left");
  var rightBtn = document.querySelector(".move-btn.right");
  var leftInterval;
  var rightInterval;

  var scrollRate = 0.2;
  var left;

  function selectItem(e) {
    if (e.target.classList.contains("active")) return;

    featured.style.backgroundImage = e.target.style.backgroundImage;

    for (var i = 0; i < galleryItems.length; i++) {
      if (galleryItems[i].classList.contains("active"))
        galleryItems[i].classList.remove("active");
    }

    e.target.classList.add("active");
  }

  function galleryWrapLeft() {
    var first = gallery.children[0];
    gallery.removeChild(first);
    gallery.style.left = -itemWidth + "%";
    gallery.appendChild(first);
    gallery.style.left = "0%";
  }

  function galleryWrapRight() {
    var last = gallery.children[gallery.children.length - 1];
    gallery.removeChild(last);
    gallery.insertBefore(last, gallery.children[0]);
    gallery.style.left = "-23%";
  }

  function moveLeft() {
    left = left || 0;

    leftInterval = setInterval(function () {
      gallery.style.left = left + "%";

      if (left > -itemWidth) {
        left -= scrollRate;
      } else {
        left = 0;
        galleryWrapLeft();
      }
    }, 1);
  }

  function moveRight() {
    //Make sure there is element to the leftd
    if (left > -itemWidth && left < 0) {
      left = left - itemWidth;

      var last = gallery.children[gallery.children.length - 1];
      gallery.removeChild(last);
      gallery.style.left = left + "%";
      gallery.insertBefore(last, gallery.children[0]);
    }

    left = left || 0;

    leftInterval = setInterval(function () {
      gallery.style.left = left + "%";

      if (left < 0) {
        left += scrollRate;
      } else {
        left = -itemWidth;
        galleryWrapRight();
      }
    }, 1);
  }

  function stopMovement() {
    clearInterval(leftInterval);
    clearInterval(rightInterval);
  }

  leftBtn.addEventListener("mouseenter", moveLeft);
  leftBtn.addEventListener("mouseleave", stopMovement);
  rightBtn.addEventListener("mouseenter", moveRight);
  rightBtn.addEventListener("mouseleave", stopMovement);

  //Start this baby up
  (function init() {
    var currentPage = window.location.pathname;

    if (currentPage.includes("sportsphere")) {
      images = [
        "images/projects/sportsphere/login-screen.png",
        "images/projects/sportsphere/signup.png",
        "images/projects/sportsphere/sportsphere.png",
        "images/projects/sportsphere/map-game-pin.png",
        "images/projects/sportsphere/map-wide-view.png",
        "images/projects/sportsphere/filter.png",
        "images/projects/sportsphere/view-post.png",
        "images/projects/sportsphere/calender.png",
        "images/projects/sportsphere/admin.png",
        "images/projects/sportsphere/profile.png",
      ];
    } else if (currentPage.includes("workforcenavigator")) {
      images = [
        "images/projects/workforcenavigator/index.png",
        "images/projects/workforcenavigator/addEmployee.png",
        "images/projects/workforcenavigator/analytics.png",
        "images/projects/workforcenavigator/companyPolicies.png",
        "images/projects/workforcenavigator/monthlyReport.png",
        "images/projects/workforcenavigator/payroll.png",
        "images/projects/workforcenavigator/submitAttendance.png",
        "images/projects/workforcenavigator/summary.png",
        "images/projects/workforcenavigator/timeOff.png",
      ];
    } else if (currentPage.includes("nordlandforge")) {
      images = [
        "images/projects/nordlandForge/home-page.png",
        "images/projects/nordlandForge/show-all.png",
        "images/projects/nordlandForge/update.png",
        "images/projects/nordlandForge/remove.png",
        "images/projects/nordlandForge/create.png",
        "images/projects/nordlandForge/about.png",
      ];
    } else if (currentPage.includes("pokemon")) {
      images = [
        "images/projects/pokemon/start.png",
        "images/projects/pokemon/map.png",
        "images/projects/pokemon/map2.png",
        "images/projects/pokemon/battle.png",
        "images/projects/pokemon/pokemart.png",
        "images/projects/pokemon/trainers.png",
      ];
    } else if (currentPage.includes("typingGame")) {
      images = [
        "images/projects/typingGame/first.png",
        "images/projects/typingGame/begin.png",
        "images/projects/typingGame/middle.png",
        "images/projects/typingGame/end.png",
      ];
    } else if (currentPage.includes("bargainBuddy")) {
      images = [
        "images/projects/BargainBuddy/bargainBuddy.png",
        "images/projects/typingGame/first.png",
        "images/projects/typingGame/begin.png",
        "images/projects/typingGame/middle.png",
        "images/projects/typingGame/end.png",
      ];
    } else {
      // Default images for other pages
      images = [];
    }

    //Set Initial Featured Image
    featured.style.backgroundImage = "url(" + images[0] + ")";

    //Set Images for Gallery and Add Event Listeners
    for (var i = 0; i < galleryItems.length; i++) {
      galleryItems[i].style.backgroundImage = "url(" + images[i] + ")";
      galleryItems[i].addEventListener("click", selectItem);
    }
  })();
});
