import { CHANGE_LANGUAGE } from '../../constants';

const initialState = {
    language: 'tr',
};

function reducer(state = initialState, action) {
    if (action.type === CHANGE_LANGUAGE) {
        return { language: action.targetLanguage };
    }

    return state;
}

export default reducer;
