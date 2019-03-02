export const userReducer = (state = {
    name: 'abhi',
    age: 40,
}, action) => {
    switch(action.type) {
        case "SETNAME":
            state = {
                ...state,
                name: action.payload,
            }
            break;
        case "SETAGE":
            state = {
                ...state,
                age: action.payload,
            }
            break;
        default :
            break;
    }
    return state;
};