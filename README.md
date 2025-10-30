# ⚡ Zeus Autoclick
_Tampermonkey_ script to automatically select your group in Zeus.

## 🚀 Installation

### Step 1: Install Tampermonkey
_Tampermonkey_ is a browser extension that allows you to run custom scripts on websites.

**Choose your browser:**
- **Chrome / Edge / Brave**: [Install Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Firefox**: [Install Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- **Safari**: [Install Tampermonkey](https://apps.apple.com/app/tampermonkey/id1482490089)
- **Opera**: [Install Tampermonkey](https://addons.opera.com/extensions/details/tampermonkey-beta/)

### Step 2: Install the script
1. **Click on the Tampermonkey icon** in your browser (top right corner)
2. Click on **"Create a new script..."**
3. **Delete all** the default content
4. **Copy-paste** the complete script from `zeus-autoclick.user.js`
5. Press **Ctrl+S** (or Cmd+S on Mac) to save
6. Close the editor tab

### Step 3: Configuration
⚠️ **Important**: You must adapt the script to your group!

Open the script in the Tampermonkey editor and modify this line:
```javascript
if(contentSpan && contentSpan.textContent.trim() === 'APPING1_C2') {
```
Replace `'APPING1_C2'` with **your group** (for example: `'APPING1_C1'`, `'CYCLE INGENIEUR'`, etc.)

**And also these lines for the parent menus:**
```javascript
findAndExpandNode('EPITA');              // school
findAndExpandNode('EPITAPPRENTISSAGE');  // program
findAndExpandNode('APPING 1');           // level
```

### Step 4: You're all set!
Now, every time you open Zeus, your group will be **automatically selected**!

## 📝 Configuration example
For a student in **APPING1_C2**:
```javascript
// In the autoSelectSequence() function:
findAndExpandNode('EPITA');              // School
findAndExpandNode('EPITAPPRENTISSAGE');  // Program
findAndExpandNode('APPING 1');           // Level

// In the findAndCheckAPPING1_C2() function:
if(contentSpan && contentSpan.textContent.trim() === 'APPING1_C2') {
```

## 🤝 Contributing
Contributions are welcome! Feel free to:
- Report bugs
- Suggest improvements
- Submit pull requests

## 📜 License
MIT License - Use and modify freely!

## ⚠️ Disclaimer
This script is a personal tool to improve your experience on Zeus. It is not affiliated with IONIS and is provided "as is" without warranty.

## 📞 Support
If you encounter any issues, open an issue on GitHub with:
- Your browser and its version
- Console error messages (F12)
- The group you're trying to select

---
Made with ❤️ for IONIS students who are tired of clicking 5 times every time they open Zeus
