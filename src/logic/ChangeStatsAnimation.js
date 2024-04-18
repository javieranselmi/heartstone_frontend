import Animation from './Animation.js';

export default class ChangeStatsAnimation extends Animation{

  constructor(board, metadata) {
    super(board, metadata);
    this.type = 'change_stats';
    this.setTarget()
    this.animationDuration = 100;
  }

  start() {
    //this.target.classList.add('shake')
    console.log('change_stats start')
  }

  async end() {
    // this.target.classList.remove('shake')
    // this.target.style.display = 'None'
    console.log('change_stats end')
  }

}
