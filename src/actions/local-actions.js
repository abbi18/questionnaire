export const increaseIndex = () => ({
    type: "INCREASE_INDEX"
});

export const modifyCorrectAnswerCount = (correct) => ({
    type: "CORRECT_ANSWER_COUNT",
    payload: correct
});

export const clearLocalState = () => ({
    type: "CLEAR_LOCAL_STATE"
});

export const renderResultNext = () => ({
    type: "RENDER_RESULT_NEXT"
});