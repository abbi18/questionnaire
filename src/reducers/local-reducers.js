export const localReducer = (
    state = {
        index: 0,
        rightAns: 0,
        totalQs: 10,
        type: "multiple",
        difficulty: "hard",
    }, action) => {
    
    switch(action.type) {
        case "INCREASE_INDEX":
            state = {
                ...state,
                index: state.index + 1,
            }
            break;
        case "CORRECT_ANSWER_COUNT":
            state = {
                ...state,
                rightAns: state.rightAns + 1
            }
            break;
        default:
            break;
    }
    return state;
};