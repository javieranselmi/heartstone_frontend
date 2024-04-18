import Animation from './Animation.js';

export default class AttackAnimation extends Animation{

  constructor(board, metadata) {
    super(board, metadata);
    this.type = 'attack';
    this.setSource()
    this.setTarget()
    this.animationDuration = 1000;
  }

  calculateCoordinates() {
    const startCoordinates = this.source.getBoundingClientRect();
    const endCoordinates = this.target.getBoundingClientRect();
    const deltaX = endCoordinates.left - startCoordinates.left;
    const deltaY = endCoordinates.top - startCoordinates.top;
    return { deltaX, deltaY };
  }

  start() {
    const { deltaX, deltaY } = this.calculateCoordinates()
    this.source.style.backgroundColor = 'red'
    this.target.style.backgroundColor = 'green'
    this.source.style.transition = `transform ${this.animationDuration}ms ease-in-out`;
    this.source.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.1)`;
  }

  async end() {
        this.source.style.transform = 'translate(0, 0) scale(1)';
        this.source.style.backgroundColor = '#ccc';
        this.target.style.backgroundColor = '#ccc';
  }
}