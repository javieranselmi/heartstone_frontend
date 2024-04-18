import Animation from './Animation.js';

export default class FocusAnimation extends Animation{

  constructor(board, metadata) {
    super(board, metadata);
    this.type = 'focus';
    this.setTarget()
    this.animationDuration = 200;
  }

  start() {
    this.target.style.transition = `transform ${this.animationDuration}ms ease-in-out`;
    this.target.style.transform = `scale(1.1)`;
  }

  async end() {
    this.target.style.transform = `scale(1)`;
  }

}