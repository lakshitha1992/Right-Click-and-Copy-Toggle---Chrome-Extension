let isEnabled = false;

chrome.action.onClicked.addListener((tab) => {
  isEnabled = !isEnabled;

  if (isEnabled) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"],
    });
    chrome.action.setTitle({ tabId: tab.id, title: "Disable Protection Bypass" });
  } else {
    chrome.action.setTitle({ tabId: tab.id, title: "Enable Protection Bypass" });
    chrome.tabs.reload(tab.id); // Reload the page to restore original behavior
  }
});
