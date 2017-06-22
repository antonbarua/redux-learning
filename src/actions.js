/*
 * Actions = payloads of information that sends data from the app to the store
 *    app-->action(info)-->store
 * Actions = plain JS objects
 * Actions must have a type property
 */

/*
 * Action Types
 */

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = (text) => ({ type: INCREMENT, text: text });
const decrement = (text) => ({ type: DECREMENT, text: text });

export { INCREMENT, DECREMENT, increment, decrement };
