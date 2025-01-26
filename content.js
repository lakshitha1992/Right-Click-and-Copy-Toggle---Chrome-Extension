(function () {
  console.log("Content script executed!");

  // Re-enable right-click
  document.addEventListener("contextmenu", (e) => e.stopPropagation(), true);

  // Re-enable text selection
  document.addEventListener("selectstart", (e) => e.stopPropagation(), true);

  // Re-enable copy (Ctrl+C, Ctrl+X, Ctrl+V)
  document.addEventListener("keydown", (e) => e.stopPropagation(), true);

  console.log("Right-click and copy functionalities enabled!");
})();
