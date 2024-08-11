document.addEventListener('DOMContentLoaded', function () {

    var bounceElements = document.querySelectorAll('.bounceElement');

    bounceElements.forEach(function (bounceElement) {
        var icon = bounceElement.querySelector('i');

        bounceElement.addEventListener('mouseenter', function () {
            icon.classList.add('animate__animated', 'animate__bounce');
        });

        bounceElement.addEventListener('mouseleave', function () {
            icon.classList.remove('animate__animated', 'animate__bounce');
        });
    });

});


document.addEventListener("DOMContentLoaded", function () {
  // Selectors for sections and buttons
  var aboutMeSection = document.querySelector("#about-me");
  var projectsSection = document.querySelector("#projects");
  var experienceSection = document.querySelector("#experience");
  var bannerSection = document.querySelector("#banner");

  var homeButton = document.querySelector("#nav ul li.current a");
  var aboutMeButton = document.querySelector("#nav ul li:nth-child(2) a");
  var projectsButton = document.querySelector("#nav ul li:nth-child(3) a");
  var experienceButton = document.querySelector("#nav ul li:nth-child(4) a");

  // Function to hide all sections and the banner
  function hideAllSections() {
    aboutMeSection.style.display = "none";
    projectsSection.style.display = "none";
    experienceSection.style.display = "none";
    bannerSection.style.display = "none";
  }

  // Function to show a specific section
  function showSection(section) {
    section.style.display = "block";
  }

  // Event listeners for navigation buttons
  homeButton.addEventListener("click", function (event) {
    event.preventDefault();
    hideAllSections();
    bannerSection.style.display = "block"; // Show the banner when Home is clicked
  });

  aboutMeButton.addEventListener("click", function (event) {
    event.preventDefault();
    hideAllSections();
    showSection(aboutMeSection);
  });

  projectsButton.addEventListener("click", function (event) {
    event.preventDefault();
    hideAllSections();
    showSection(projectsSection);
  });

  experienceButton.addEventListener("click", function (event) {
    event.preventDefault();
    hideAllSections();
    showSection(experienceSection);
  });

  // Initially hide all sections except the banner
  hideAllSections();
  bannerSection.style.display = "block"; // Initially show the banner
});


