import Obstacle from './obstacle.js';
import Tire from './tire.js';

class Barrier extends Obstacle {
  constructor(x, y, width, height) {
    super(x, y, width, height)
  }

  draw() {
    const c = canvas.getContext('2d');
    c.fillStyle = 'transparent'
    c.save();
    c.translate(-this.width / 2, -this.height / 2)
    c.fillRect(this.x, this.y, this.width, this.height);
    c.restore();
  }
}

export default Barrier;