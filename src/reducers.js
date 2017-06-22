/*
 * A Reducer's job is to transform an action into a change in the application
 * Reducer = pure function
 * (prevState, action) => nextState
 * 
 * MUST NEVER MUTATE STATE, ALWAYS RETURN A NEW OBJECT
 */

import { INCREMENT, DECREMENT } from './actions'

function count(state, action) {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1
            });
        case DECREMENT:
            return Object.assign({}, state, {
                count: state.count - 1
            });
        default:
            return state;
    }
}

/**
 * The reducer function
 * @param {*} state 
 * @param {*} action 
 */
function counter(state = { count: 0 }, action) { //todo: default value
    return count(state, action);
}

export default counter;