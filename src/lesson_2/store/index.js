import {createStore, compose, applyMiddleware} from 'redux';

import {reducer} from "../reducers/index";

const loggerMiddleware = store => next => action => {
	return next(action);
};

const configureStore = () => {
    const store = createStore(
        reducer,
        compose(
						window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
            applyMiddleware(loggerMiddleware)
        )
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