export const mathReducer = (state = {
    value: 100,
}, action) => {
    switch(action.type) {
        case "ADD":
            state = {
                ...state,
                value: state.value + action.payload,
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                value: state.value - action.payload,
            };
            break;
        default:
            break;
    }
    return state;
};
