export const localReducer = (
    state = {
        index: 0,
        rightAns: 0,
        totalQs: 10,
        type: "multiple",
        difficulty: "hard",
        entry: 1,
    }, action) => {
    
    switch(action.type) {
        case "CLEAR_LOCAL_STATE":
            state = {
                ...state,
                entry: 1,
                index: 0,
                rightAns: 0,
                totalQs: 10,
            }
            break;
        case "RENDER_RESULT_NEXT":
            state = {
                ...state,
                entry: 0,
            }
            break;
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