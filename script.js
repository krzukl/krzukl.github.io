document.querySelectorAll('.side-nav-li').forEach(function(item) {
    item.addEventListener('click', function(event) {
      var link = this.querySelector('.side-nav-a');
      if (link) {
        link.click();
      }
    });
  
    // Prevent the default behavior of the anchor tag click event
    item.querySelector('.side-nav-a').addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });

document.addEventListener("DOMContentLoaded", function() {
    var scrollLinks = document.querySelectorAll("a[href^='#']");

    for (var i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener("click", function(e) {
            e.preventDefault();
            
            var targetId = this.getAttribute("href").substring(1); // Get the target id without the #
            var targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const lis = document.querySelectorAll(".side-nav-li");
  const sections = document.querySelectorAll(".h2-besonders");

  // Function to highlight the corresponding li when scrolling
  function highlightOnScroll() {
      const scrollPosition = window.scrollY;

      sections.forEach(function (section, index) {
          const sectionTop = section.getBoundingClientRect().top + scrollPosition - 150; // Subtract 20 pixels

          // Check if the section is in the viewport
          if (scrollPosition >= sectionTop) {
              lis.forEach(function (li) {
                  li.style.backgroundColor = "transparent"; // Reset all li background colors
              });

              lis[index].style.backgroundColor = "#EFF3FE"; // Highlight the corresponding li
          }
      });
  }

  // Initial call to highlightOnScroll
  highlightOnScroll();

  // Add scroll event listener to call highlightOnScroll on scroll
  window.addEventListener("scroll", highlightOnScroll);

  // Add click event listeners to the links to scroll to the corresponding sections
  lis.forEach(function (li, index) {
      const link = li.querySelector(".side-nav-a");
      link.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent the default link behavior
          sections[index].scrollIntoView({ behavior: "smooth" });
      });
  });
});

