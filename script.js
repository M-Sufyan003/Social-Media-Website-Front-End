// Disable F12 key
document.addEventListener("keydown", function (event) {
    if (event.keyCode === 123) {
      // F12 key code
      event.preventDefault();
    }
  });
  
  // Disable right-click context menu
  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });
  
  // Detect and prevent Developer Tools opening
  window.addEventListener("devtoolschange", function (event) {
    if (event.detail.isOpen) {
      alert("Developer Tools are not allowed on this website.");
      window.close(); // or redirect to another page
    }
  });
  
  // Override console.log to prevent logging sensitive information
  console.log = function () {};
  document.addEventListener("keydown", function (event) {
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === "I") {
      event.preventDefault();
      alert("Developer Tools are not allowed on this website.");
    }
  });