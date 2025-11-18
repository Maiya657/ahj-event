import image from "../img/goblin.png";

export class GameField {
  constructor(
    stats,
    containerSelector = "body",
    itemsCount = 16,
    limitCount = 5,
  ) {
    this.containerSelector = containerSelector;
    this.itemsCount = itemsCount;
    this.fieldItems = [];
    this.currentIndex = 0;
    this.img = null;
    this.intervalID = null;
    this.missedCount = 0;
    this.limitCount = limitCount;
    this.stats = stats;
  }

  init() {
    this.createField();
    this.createGoblinImage();
  }

  createField() {
    const container = document.createElement("div");
    container.className = "field-container";

    for (let i = 0; i < this.itemsCount; i++) {
      const item = document.createElement("div");
      item.className = "field-item";
      container.append(item);
    }

    document.querySelector(this.containerSelector).append(container);
    this.fieldItems = Array.from(document.querySelectorAll(".field-item"));

    const scoreContainer = document.createElement("div");
    document.querySelector(this.containerSelector).append(scoreContainer);
    this.stats.setScoreContainer(scoreContainer);
  }

  createGoblinImage() {
    this.img = document.createElement("img");
    this.img.src = image;
    this.img.alt = "Goblin";
    this.img.addEventListener("click", (e) => {
      e.preventDefault();
      this.missedCount = 0;
      this.clearActiveField();
      this.stats.increasePlayerScore();
    });
  }

  getRandomItem() {
    let newIndex = this.currentIndex;

    while (newIndex === this.currentIndex) {
      newIndex = Math.floor(Math.random() * this.fieldItems.length);
    }

    this.currentIndex = newIndex;
    return this.fieldItems[this.currentIndex];
  }

  activateRandomField() {
    const activeItem = this.getRandomItem();
    this.clearActiveField();
    activeItem.append(this.img);
    this.missedCount++;
    if (this.missedCount > this.limitCount) {
      this.stopGame();
    }
  }

  clearActiveField() {
    this.fieldItems.forEach((item) => {
      if (item.contains(this.img)) {
        item.removeChild(this.img);
      }
    });
  }

  startGame(interval = 1000) {
    this.missedCount = 0;
    this.activateRandomField();
    this.intervalID = setInterval(() => this.activateRandomField(), interval);
  }

  stopGame() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
      this.intervalID = null;
    }
    this.clearActiveField();
  }
}
