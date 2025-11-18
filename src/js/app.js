import { GameController } from "./gameController.js";
import { GameField } from "./gameField.js";
import { Stats } from "./stats.js";

const stats = new Stats();
const gameField = new GameField(stats, "body", 16);
const game = new GameController(gameField);

game.start();
