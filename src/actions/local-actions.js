export const increaseIndex = () => ({
    type: "INCREASE_INDEX"
});

export const modifyCorrectAnswerCount = (correct) => ({
    type: "CORRECT_ANSWER_COUNT",
    payload: correct
});