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
  // Cache section and button elements
  var sections = {
    aboutMe: document.querySelector("#about-me"),
    projects: document.querySelector("#projects"),
    experience: document.querySelector("#experience"),
    banner: document.querySelector("#banner"),
  };

  var buttons = {
    home: document.querySelector("#nav ul li.current a"),
    aboutMe: document.querySelector("#nav ul li:nth-child(2) a"),
    projects: document.querySelector("#nav ul li:nth-child(3) a"),
    experience: document.querySelector("#nav ul li:nth-child(4) a"),
  };

  // Function to hide all sections
  function hideAllSections() {
    Object.values(sections).forEach(function (section) {
      section.classList.add("hidden-section");
      section.classList.remove("visible-section");
    });
  }

  // Function to show a specific section with animation
  function showSection(section, animationClass) {
    section.classList.add("visible-section", animationClass);
    section.classList.remove("hidden-section");
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Event listeners for buttons
  buttons.home.addEventListener("click", function (event) {
    event.preventDefault();
    hideAllSections();
    showSection(sections.banner, "roll-in-left"); // Show banner with roll-in-left animation
  });

  buttons.aboutMe.addEventListener("click", function (event) {
    event.preventDefault();
    hideAllSections();
    showSection(sections.aboutMe, "slide-in-bottom"); // Show about-me with slide-in-bottom animation
  });

  buttons.projects.addEventListener("click", function (event) {
    event.preventDefault();
    hideAllSections();
    showSection(sections.projects, "slide-in-right"); // Show projects with slide-in-right animation
  });

  buttons.experience.addEventListener("click", function (event) {
    event.preventDefault();
    hideAllSections();
    showSection(sections.experience, "tilt-in-fwd-tr"); // Show Experience with tilt-in-fwd-tr animation
  });

  // Initially show banner section only
  hideAllSections();
  showSection(sections.banner, "roll-in-left");
});
