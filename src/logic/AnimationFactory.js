import AttackAnimation from "./AttackAnimation";
import DieAnimation from "./DieAnimation";
import ChangeStatsAnimation from "./ChangeStatsAnimation";
import FocusAnimation from "./FocusAnimation"

export default class AnimationFactory {
    
    createAnimation(metadata, board) {

        const type = metadata['type']

        switch (type) {
            case 'attack':
                return new AttackAnimation(board, metadata);
            case 'change_stats':
                return new ChangeStatsAnimation(board, metadata);
            case 'focus':
                return new FocusAnimation(board, metadata);
            case 'die':
                return new DieAnimation(board, metadata);
            default:
                throw new Error(`Unsupported animation type: ${type}`);
        }
    }

}