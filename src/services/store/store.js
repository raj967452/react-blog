import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import rootReducer from './root_reducer';

import { composeWithDevTools } from 'redux-devtools-extension';

const enhancer = composeWithDevTools({ name: 'rock', trace: true })(
    applyMiddleware(promise)
);

export default function configureStore() {
    return createStore(
        rootReducer,
        enhancer
    )
}