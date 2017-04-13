function Game() {
  this.size = START_SIZE;
}

const START_SIZE = 200;
const LOSS_SIZE = 500;

Game.prototype.getSize = function() {
  return this.size
}

Game.prototype.increaseSize = function() {
  if (this.isGameOver()) {
    return;
  }
  this.size += 50;
}

Game.prototype.isGameOver = function() {
  return this.size >= LOSS_SIZE;
}
