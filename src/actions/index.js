import { apiFetchBegin, apiFetchSuccess, apiFetchError, clearAPIState, correctlyAnswered } from './api-actions';
import { increaseIndex, modifyCorrectAnswerCount, renderResultNext, clearLocalState } from './local-actions';

export {
    apiFetchBegin,
    apiFetchSuccess,
    apiFetchError,
    increaseIndex,
    modifyCorrectAnswerCount,
    renderResultNext,
    clearAPIState,
    clearLocalState,
    correctlyAnswered
};