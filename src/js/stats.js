export class Stats {
  constructor(score = 0) {
    this.score = score;
    this.scoreContainer;
  }

  setScoreContainer(scoreContainer) {
    this.scoreContainer = scoreContainer;
    this.render();
  }

  increasePlayerScore() {
    this.score++;
    this.render();
  }

  resetPlayerScore() {
    this.score = 0;
    this.render();
  }

  render() {
    this.scoreContainer.textContent = `Ваш рейтинг: ${this.score}`;
  }
}
