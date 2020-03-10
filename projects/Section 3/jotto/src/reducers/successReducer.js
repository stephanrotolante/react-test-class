import { actionTypes } from '../actions';
/**
 * @function successReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be reduced
 * @returns {boolean} - new success state
 */
export default (state=false, action ) => {

    const { type } = action;

    const { CORRECT_GUESS } = actionTypes;
    
    switch(type) {

        case CORRECT_GUESS:
            return true;
        default:
            return state


    }
    return null;
}