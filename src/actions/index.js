import { apiFetchBegin, apiFetchSuccess, apiFetchError, clearAPIState, correctlyAnswered } from './api-actions';
import { increaseIndex, modifyCorrectAnswerCount, clearLocalState, modifytotalQs, modifyDifficulaty, modifyType } from './local-actions';

export {
    apiFetchBegin,
    apiFetchSuccess,
    apiFetchError,
    increaseIndex,
    modifyCorrectAnswerCount,
    clearAPIState,
    clearLocalState,
    correctlyAnswered,
    modifytotalQs,
    modifyDifficulaty,
    modifyType
};