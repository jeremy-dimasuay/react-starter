import { combineReducers } from 'redux';

const appState = {
    label: 'Hello world!'
};

function appReducer(state = appState, action) {
    switch (action.type) {
        case '':
            return state;
        default:
            return state;
    }
}

export default combineReducers({
    app: appReducer
});
