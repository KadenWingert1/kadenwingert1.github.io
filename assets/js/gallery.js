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
    //Make sure there is element to the left
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
    var baseURL = "../images/projects/";

    var currentPage = window.location.pathname;

    if (currentPage.includes("sportsphere")) {
      images = [
        baseURL + "sportsphere/login-screen.png",
        baseURL + "sportsphere/signup.png",
        baseURL + "sportsphere/sportsphere.png",
        baseURL + "sportsphere/map-game-pin.png",
        baseURL + "sportsphere/map-wide-view.png",
        baseURL + "sportsphere/filter.png",
        baseURL + "sportsphere/view-post.png",
        baseURL + "sportsphere/calender.png",
        baseURL + "sportsphere/admin.png",
        baseURL + "sportsphere/profile.png",
      ];
    } else if (currentPage.includes("workforcenavigator")) {
      images = [
        baseURL + "workforcenavigator/index.png",
        baseURL + "workforcenavigator/addEmployee.png",
        baseURL + "workforcenavigator/analytics.png",
        baseURL + "workforcenavigator/companyPolicies.png",
        baseURL + "workforcenavigator/monthlyReport.png",
        baseURL + "workforcenavigator/payroll.png",
        baseURL + "workforcenavigator/submitAttendance.png",
        baseURL + "workforcenavigator/summary.png",
        baseURL + "workforcenavigator/timeOff.png",
      ];
    } else if (currentPage.includes("groupTab")) {
      images = [
        baseURL + "groupTab/mainScreen.png",
        baseURL + "groupTab/NewGroup.png",
        baseURL + "groupTab/SingleGroup.png",
      ];
    } else if (currentPage.includes("SecureStorage")) {
      images = [
        baseURL + "secureStorage/home.png",
        baseURL + "secureStorage/awsDiagram.png",
        baseURL + "secureStorage/home.png",
        baseURL + "secureStorage/awsDiagram.png",
      ];
    } else if (currentPage.includes("nordlandforge")) {
      images = [
        baseURL + "nordlandForge/home-page.png",
        baseURL + "nordlandForge/show-all.png",
        baseURL + "nordlandForge/update.png",
        baseURL + "nordlandForge/remove.png",
        baseURL + "nordlandForge/create.png",
        baseURL + "nordlandForge/about.png",
      ];
    } else if (currentPage.includes("pokemon")) {
      images = [
        baseURL + "pokemon/start.png",
        baseURL + "pokemon/map.png",
        baseURL + "pokemon/map2.png",
        baseURL + "pokemon/battle.png",
        baseURL + "pokemon/pokemart.png",
        baseURL + "pokemon/trainers.png",
      ];
    } else if (currentPage.includes("typingGame")) {
      images = [
        baseURL + "typingGame/first.png",
        baseURL + "typingGame/begin.png",
        baseURL + "typingGame/middle.png",
        baseURL + "typingGame/end.png",
      ];
    } else if (currentPage.includes("bargainBuddy")) {
      images = [baseURL + "BargainBuddy/bargainBuddy.png"];
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
