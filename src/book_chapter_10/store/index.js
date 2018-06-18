import { createStore, combineReducers, applyMiddleware } from 'redux'
import { colors, sort } from './reducers'
import stateData from '../initialState'

let console = window.console;

const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const saver = store => next => action => {
    let result = next(action)
    localStorage.setItem('redux-store', JSON.stringify(store.getState()));
    return result
}

const storeFactory = (initialState=stateData) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({colors, sort}),
        (localStorage.getItem('redux-store')) ?
            JSON.parse(localStorage.getItem('redux-store')) :
            initialState
    )

export default storeFactory