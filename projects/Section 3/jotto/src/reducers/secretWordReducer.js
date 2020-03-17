import { actionTypes } from "../actions";

/**
 * @function secretWordReducer
 * @param {string} state - State before reducer
 * @param {object} action - Action sent to reducer
 * @returns {string} - returns the new state
 */
export default (state='olive',action) => {
    switch(action.type){
        case actionTypes.SET_SECRET_WORD:
            return action.payload;
        default:
            return state
    }
}