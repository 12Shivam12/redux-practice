import { createStore, applyMiddleware, combineReducers } from 'redux'
import myReducer from './reducer';
import logger from 'redux-logger'
import counterReducer from './counterRedcuer';

const combinedReducer = combineReducers({
    todoReducer: myReducer,
    cReducer: counterReducer
})

const myStore = createStore(combinedReducer,)
myStore.subscribe(() => {
    console.log(myStore.getState())
})
export default myStore;