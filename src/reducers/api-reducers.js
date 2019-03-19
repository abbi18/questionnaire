export const apiReducer = (
    state = {
        media: [],
        isFetching: false,
        error: undefined,
    }, action) => {
    
    switch(action.type) {
        case "CLEAR_API_STATE":
            state = {
                media: [],
                isFetching: false,
                error: true,
            }
        break; 
        case "FETCH":
            state = {
                ...state,
                isFetching: true,
                error: undefined,
            }
            break;        
        case "POPULATE":
            state = {
                ...state,
                isFetching: false,
                media: action.payload,
                error: undefined,
            }
            break;
        case "ERROR":
            state = {
                ...state,
                isFetching: false,
                error: true,
            }
            break;    
        default:
            break;
    }
    return state;
};