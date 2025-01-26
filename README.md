Below is a `README.md` file you can use for your GitHub repository: 

---

# Right Click and Copy Toggle - Chrome Extension

## Overview
This Chrome extension enables or disables right-click and text copying on protected web pages. It's perfect for situations where websites restrict basic interactions like copying text or accessing context menus.

## Features
- Enable or disable right-click on web pages.
- Restore the ability to select and copy text.
- Simple toggle functionality via the browser action button.
- Clean and user-friendly popup design with a beautiful gradient background.



## Installation
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/lakshitha1992/Right-Click-and-Copy-Toggle---Chrome-Extension.git
   ```
2. Navigate to `chrome://extensions` in your Chrome browser.
3. Enable **Developer Mode** (top-right corner).
4. Click **Load unpacked** and select the cloned repository folder.
5. The extension will be loaded, and you can see it in the extensions bar.

## Usage
1. Click the extension icon in your browser.
2. Use the toggle button to enable or disable right-click and copy functionalities on the current page.

## Files in the Repository
- **manifest.json**: The configuration file for the Chrome extension.
- **background.js**: Handles the toggle functionality for enabling/disabling the content script.
- **content.js**: The script that restores right-click and copy functionalities on web pages.
- **popup.html**: The HTML for the extension popup interface.
- **popup.css**: The CSS for styling the popup.
- **popup.js**: The JavaScript for handling button clicks in the popup.
- **icons/**: Contains icons used for the extension (16x16, 48x48, 128x128).

## Project Structure
```plaintext
.
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   ├── icon128.png
├── manifest.json
├── background.js
├── content.js
├── popup.html
├── popup.css
├── popup.js
└── README.md
```

## How It Works
1. When the extension is toggled on:
   - The `content.js` script re-enables right-click, text selection, and copying.
   - A notification in the console confirms activation.
2. When toggled off:
   - The browser reloads the current page to restore the original behavior.
   - The toggle button updates to reflect the new status.


## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
## 🌐 Connect with Me

- [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lakshitha-dulanjaya/)
- [![GitHub](https://img.shields.io/badge/GitHub-%2312100E.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/lakshitha1992)

Let me know if you'd like to add anything or customize further!