document.addEventListener("DOMContentLoaded", function() {
  const fontSelect = document.getElementById("font-select");
  const fontSelectWrapper = document.getElementById("font-select-wrapper");
  const bodyElement = document.body;

  // Retrieve font preference from Local Storage
  const selectedFont = localStorage.getItem("selectedFont");
  if (selectedFont) {
    applyFontStyle(selectedFont);
    fontSelect.value = selectedFont;
  }

  // Show font selection dropdown on home screen
  if (window.location.pathname === "/") {
    fontSelectWrapper.style.display = "block";
  }

  // Toggle font selection dropdown visibility while scrolling a post
  window.addEventListener("scroll", function() {
    // if (window.location.pathname !== "/") { # uncomment this if you want font selection active in base
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 200) {
      fontSelectWrapper.style.display = "none";
    } else {
      fontSelectWrapper.style.display = "block";
      // }
    }
  });

  fontSelect.addEventListener("change", function() {
    const selectedFont = fontSelect.value;
    applyFontStyle(selectedFont);
    localStorage.setItem("selectedFont", selectedFont);
  });

  function applyFontStyle(selectedFont) {
    if (selectedFont === "default") {
      bodyElement.style.fontFamily = "sans-serif";
    } else if (selectedFont === "jameel") {
      bodyElement.style.fontFamily = "'Jameel Noori', sans-serif";
    } else if (selectedFont === "mahar") {
      bodyElement.style.fontFamily = "'Mahar Nastaliq', cursive";
    } else if (selectedFont == "nafees") {
      bodyElement.style.fontFamily = "'Nafees', cursive";
    }
  }
});
