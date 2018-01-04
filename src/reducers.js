import { combineReducers } from 'redux';

import layoutReducer from './components/layout/reducers';

const reducers = combineReducers({
    layout: layoutReducer,
});

export default reducers;
