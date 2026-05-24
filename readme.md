# ✊✋✌️ Rock Paper Scissors

A classic Rock Paper Scissors game built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies, just the fundamentals.

![HTML](https://img.shields.io/badge/HTML-23.9%25-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-25.1%25-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-51.0%25-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

---

## 🎮 Demo

Play directly by opening `rps.html` in your browser — no server needed.

---

## 📁 Project Structure

```
rock-paper-scissors-JS/
├── rps.html       # Main game UI — layout, score board, message area
├── rps.css        # Styling for choices, scoreboard, and layout
├── rps.js         # Game logic — user input, computer move, win detection
├── rpsd.jpg       # Rock image
├── rp.jpg         # Paper image
└── rd.jpg         # Scissors image
```

---

## ✨ Features

- **Click to play** — choose Rock, Paper, or Scissors by clicking the image
- **Computer opponent** — random move generated each round
- **Live scoreboard** — tracks both your score and the computer's score in real time
- **Round result message** — displays win / lose / draw after every move
- **Zero dependencies** — pure vanilla JS, runs in any modern browser

---

## 🚀 Getting Started

**Clone the repo**
```bash
git clone https://github.com/Siddu837/rock-paper-scissors-JS.git
cd rock-paper-scissors-JS
```

**Open in browser**
```bash
# Just double-click rps.html, or:
open rps.html        # macOS
start rps.html       # Windows
xdg-open rps.html   # Linux
```

No build step, no npm install — it just works.

---

## 🧠 How It Works

1. Player clicks one of the three choice images (Rock, Paper, or Scissors)
2. The game generates a random computer choice from the three options
3. Win/loss/draw logic compares the two choices
4. The appropriate score counter increments and a result message is shown
5. Game continues indefinitely — scores accumulate across rounds

---

## 🛠️ Built With

- **HTML5** — semantic structure and game layout
- **CSS3** — styling, flexbox layout, scoreboard design
- **Vanilla JavaScript** — game logic, DOM manipulation, event listeners

---

## 📌 Notes

- Image paths in `rps.html` use absolute paths (`/rpsd.jpg`, `/rp.jpg`, `/rd.jpg`). If images don't load when opening locally, change them to relative paths (`rpsd.jpg`, `rp.jpg`, `rd.jpg`) in the `src` attributes.
- The game is purely client-side with no backend or localStorage — scores reset on page refresh.

---

## 🙋‍♂️ Author

**Siddu Keerthi**  
[GitHub](https://github.com/Siddu837) 
---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).