export const increaseIndex = () => ({
    type: "INCREASE_INDEX"
});

export const modifyCorrectAnswerCount = (correct) => ({
    type: "CORRECT_ANSWER_COUNT",
    payload: correct
});

export const renderWelcomeNext = () => ({
    type: "RENDER_WELCOME_NEXT"
});

export const renderResultNext = () => ({
    type: "RENDER_RESULT_NEXT"
});