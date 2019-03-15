import { getIndex } from "selectors";


const getApiState = (state) => state.api;

const getMedia = (state) => getApiState(state).media;

export const getAnswer = (state) => {
    const media = getMedia(state);
    if (getIndex(state) < media.length) {
        return media[getIndex(state)].correct_answer;
    }
    return '';
}

export const getAnswerOptions = (state) => {
    const media = getMedia(state);
    if (getIndex(state) < media.length) {

        return media[getIndex(state)].options;
    }
    return [];
}

export const getQuestion = (state) => {
    const media = getMedia(state);
    if (getIndex(state) < media.length) {
        return media[getIndex(state)].question;
    }
    return '';
}

export const getTotalQuestions = (state) => {
    const media = getMedia(state);
    console.log('abnndn', media);
    return media.length;
}