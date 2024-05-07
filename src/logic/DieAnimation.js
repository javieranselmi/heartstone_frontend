import Animation from './Animation.js';

export default class DieAnimation extends Animation{

  constructor(board, metadata) {
    super(board, metadata);
    this.type = 'die';
    this.setTarget()
    this.animationDuration = 500;
  }

  start() {
    this.target.classList.add('shake')
  }

  async end() {
    this.target.classList.remove('shake')
    this.target.style.display = 'None'
  }

}