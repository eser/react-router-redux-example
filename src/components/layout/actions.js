import { CHANGE_LANGUAGE } from '../../constants';

function changeLanguage(targetLanguage) {
    return {
        type: CHANGE_LANGUAGE,
        targetLanguage: targetLanguage,
    };
}

export {
    changeLanguage,
};
