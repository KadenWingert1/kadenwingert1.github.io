document.addEventListener("DOMContentLoaded", function () {
  var featured = document.querySelector(".featured-item");
  var leftBtn = document.querySelector(".move-btn.left");
  var rightBtn = document.querySelector(".move-btn.right");
  var counter = document.querySelector(".gallery-counter");
  var currentIndex = 0;

  function setFeatured(images, index) {
    if (!featured || !images.length) return;
    featured.style.backgroundImage = "url(" + images[index] + ")";
    if (counter) {
      counter.textContent = index + 1 + " / " + images.length;
    }
  }

  function ensureCounter(images) {
    var el = document.querySelector(".gallery-counter");
    if (!el) {
      el = document.createElement("div");
      el.className = "gallery-counter";
      if (featured && featured.parentElement) {
        featured.parentElement.appendChild(el);
      }
    }
    counter = el;
    counter.textContent = "1 / " + images.length;
  }

  function bindControls(images) {
    if (leftBtn) {
      leftBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        setFeatured(images, currentIndex);
      });
    }
    if (rightBtn) {
      rightBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        setFeatured(images, currentIndex);
      });
    }
  }

  (function init() {
    var baseURL = "../images/projects/";

    var currentPage = window.location.pathname;
    if (currentPage.includes("truStar")) {
      images = [
        baseURL + "truStar/auth_screen.PNG",
        baseURL + "truStar/create_account.PNG",
        baseURL + "truStar/feed.PNG",
        baseURL + "truStar/help.PNG",
        baseURL + "truStar/view_contests.PNG",
        baseURL + "truStar/select_contests.PNG",
        baseURL + "truStar/contest_details.PNG",
        baseURL + "truStar/confirm_purchase.PNG",
        baseURL + "truStar/contests.PNG",
        baseURL + "truStar/final_review.PNG",
        baseURL + "truStar/leaderboard.PNG",
        baseURL + "truStar/search_user.PNG",
        baseURL + "truStar/view_profile.PNG",
        baseURL + "truStar/all_messages.PNG",
        baseURL + "truStar/message.PNG",
        baseURL + "truStar/user_profile.PNG",
        baseURL + "truStar/edit_profile.PNG",
      ];
    } else if (currentPage.includes("sportsphere")) {
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

    if (!images.length) return;
    currentIndex = 0;
    setFeatured(images, currentIndex);
    if (images.length > 1) {
      ensureCounter(images);
      bindControls(images);
    } else {
      if (leftBtn) leftBtn.style.display = "none";
      if (rightBtn) rightBtn.style.display = "none";
    }
  })();
});
