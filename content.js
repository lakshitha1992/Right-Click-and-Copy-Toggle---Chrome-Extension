// Updated content.js
console.log("Content script executed!");

// Remove CSS restrictions
const style = document.createElement("style");
style.textContent = `
  * {
    user-select: text !important;
    -webkit-user-select: text !important;
    -moz-user-select: text !important;
    -ms-user-select: text !important;
  }
  img, p, div {
    -webkit-user-drag: auto !important;
    user-drag: auto !important;
  }
`;
document.head.appendChild(style);

// Remove event listeners that block actions
const removeListeners = (type) => {
  const clone = document.documentElement.cloneNode(true);
  document.replaceChild(clone, document.documentElement);
};

// Remove context menu and other event listeners
document.addEventListener("DOMContentLoaded", () => {
  removeListeners("contextmenu");
  removeListeners("selectstart");
  removeListeners("keydown");
  console.log("Right-click and copy functionalities enabled!");
});

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
