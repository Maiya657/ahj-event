export class Stats {
  constructor(score = 0, missed = 0, limitCount = 5) {
    this.score = score;
    this.missed = missed;
    this.scoreContainer;
    this.limitCount = limitCount;
  }

  setScoreContainer(scoreContainer) {
    this.scoreContainer = scoreContainer;
    this.render();
  }

  increasePlayerScore() {
    this.score++;
    this.resetPlayerMissed();
    this.render();
  }

  increasePlayerMissed() {
    this.missed++;
    this.render();
  }

  resetPlayerScore() {
    this.score = 0;
    this.render();
  }

  resetPlayerMissed() {
    this.missed = 0;
  }

  isGameOver() {
    return this.missed > this.limitCount;
  }

  render() {
    this.scoreContainer.textContent = "";
    const playerScoreContent = document.createElement("p");
    playerScoreContent.textContent = `Поймано гоблинов: ${this.score}`;
    this.scoreContainer.appendChild(playerScoreContent);

    const playerMissedContent = document.createElement("p");
    let missed = this.missed - 1;
    if (missed < 0) {
      missed = 0;
    }
    playerMissedContent.textContent = `Пропущено гоблинов: ${missed}`;
    this.scoreContainer.appendChild(playerMissedContent);
  }
}
