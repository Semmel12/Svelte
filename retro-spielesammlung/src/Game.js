export class Game {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  start() {
    this.score = 0;
  }

  addPoints(points) {
    this.score += points;
  }

  getScore() {
    return this.score;
  }
}
