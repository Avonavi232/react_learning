import {createStore, compose, applyMiddleware} from 'redux';

import {reducer} from "../reducers/index";

import logger from 'redux-logger'

const configureStore = () => {
    const enhancer = window.devToolsExtension ? compose(
        applyMiddleware(logger),
        window.devToolsExtension()
    ) : applyMiddleware(logger);

    const store = createStore(
        reducer,
        enhancer
    );

    window.store = store;

    if (process.env.NODE_ENV !== "production") {
        if (module.hot) {
            module.hot.accept('../reducers/index', () => {
                store.replaceReducer(reducer)
            })
        }
    }

    return store
};



export default configureStore();