# Puzzle Game

An interactive drag-and-drop puzzle game featuring beautiful cherry blossom artwork. Challenge yourself to arrange 25 scrambled pieces and complete the puzzle in the fewest moves possible!

<img width="1223" height="748" alt="Screenshot 2026-01-02 at 2 37 33 PM" src="https://github.com/user-attachments/assets/5d946b3a-01fe-4fce-af3d-af8abd667be8" />


<img width="1119" height="754" alt="Screenshot 2026-01-02 at 2 38 26 PM" src="https://github.com/user-attachments/assets/1d1e66f4-f811-4f21-a699-a1126474ab00" />



---

## About The Project

This is a web-based puzzle game built with vanilla JavaScript that challenges players to reconstruct a 5x5 grid puzzle. The game features smooth drag-and-drop mechanics and a victory animation when completed.

---

## Features

- **Intuitive Drag & Drop** - Smooth HTML5 drag-and-drop interface
- **Turn Counter** - Track your progress and challenge yourself
- **Beautiful UI** - Cherry blossom themed design with custom victory modal
-  **Animated Victory Screen** - Celebrate your win with a smooth pop-up animation
- **Random Shuffle** - Each game starts with a new puzzle configuration
- **Win Detection** - Automatic verification when puzzle is complete

---

##  Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No installation or dependencies required!

### Installation & Usage

1. **Download the project files**
```bash
   git clone https://github.com/r3m0lin0/SakuraPuzzleGame.git
```

2. **Navigate to the project folder**
```bash
   cd puzzle-game
```

3. **Open the game**
   - Simply double-click `index.html`
   - Or drag it into your browser
   - Or right-click → Open With → Browser

4. **Play!**
   - Drag puzzle pieces from the right panel
   - Drop them onto the 5x5 grid on the left
   - Complete the cherry blossom image to win!

---

##  How to Play

1. The game board (5x5 grid) appears on the left with empty placeholders
2. Scrambled puzzle pieces are displayed on the right
3. Drag any piece and drop it onto the board
4. Swap pieces around until you complete the image
5. The game automatically detects when you win!
6. Try to complete it in the minimum number of turns

**Tip:** The pieces can be swapped between board positions to rearrange them!

---

## Built With

- **HTML5** - Structure and drag-and-drop API
- **CSS3** - Styling, animations, and responsive design
- **Vanilla JavaScript** - Game logic and interactivity (ES6+)

*No frameworks or libraries - just pure web technologies!*

---

## Project Structure
```
puzzle-game/
│
├── index.html          # Main game page
├── Puzzle.js           # Game logic and drag-drop handlers
├── Puzzle.css          # Styling and animations
├── README.md           # Project documentation
└── img/                # Image assets
    ├── 1.jpg - 25.jpg  # Puzzle pieces
    └── coral.jpg 
    └── sakura.jpg       # Placeholder image
```

## Customization

Want to use your own image? Here's how:

1. Split your image into a 5x5 grid (25 pieces total)
2. Name the pieces `1.jpg` through `25.jpg`
3. Place them in the `img/` folder
4. Update the `winningConditions` array in `Puzzle.js` if needed

You can also change the grid size by modifying the `rows` and `columns` variables in `Puzzle.js`.


---

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

##  Author

**Micaela Videla Melo**

- GitHub: [@micaelavidela](https://github.com/micaelavidela)
- LinkedIn: [Micaela Videla](https://www.linkedin.com/in/micaela-videlamelo/) 

---

##  Contact

Have questions or suggestions? Feel free to reach out!

- Open an issue on GitHub
- Email: micaelavidelamelo@gmail.com

---

⭐️ **If you enjoyed this project, please give it a star!** ⭐️

