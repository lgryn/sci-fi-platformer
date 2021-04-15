import Game from "./lib/game";
import Config from "./lib/config";

const config = new Config();
const game = new Game(config);
game.init();
