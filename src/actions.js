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

const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

export { INCREMENT, DECREMENT, increment, decrement };
