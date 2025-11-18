export class GameController {
  constructor(gameField) {
    this.gameField = gameField;
    this.isRunning = false;
  }

  initialize() {
    this.gameField.init();
    this.gameField.startGame(1000);
  }

  start() {
    document.addEventListener("DOMContentLoaded", () => {
      this.initialize();
    });
    document.addEventListener("beforeunload", () => {
      this.stop();
    });
    this.isRunning = true;
  }

  stop() {
    if (this.gameField) {
      this.gameField.stopGame();
      this.isRunning = false;
    }
  }

  restart() {
    this.stop();
    this.start();
  }
}
