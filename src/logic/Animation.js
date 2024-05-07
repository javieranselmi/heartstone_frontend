import _ from 'lodash'

export default class Animation {

    constructor(board, metadata) {
      if (new.target === Animation) {
        throw new Error("Animation class cannot be instantiated directly.");
      }
      this.board = board
      this.metadata = metadata
      this.afterEndTime = 0
    }

    findReference(key) {
       return this.board[this.metadata[key]].current
    }

    setTarget() {
        this.target = this.findReference('target_id')
    }

    setSource() {
        this.source = this.findReference('source_id')
    }
  
    async run() {
        console.log("STARTING..")
        this.start();
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("ENDING..")
                this.end();
                if (this.afterEndTime > 0) {
                    setTimeout(() => {
                        resolve();
                    }, this.afterEndTime);
                } else {
                    resolve();
                }
            }, this.animationDuration);     
        })
      }
  }