export const fetchData = () => ({
    type: "FETCH",
});

export const populateApiData = (response) => ({
    type: "POPULATE",
    payload: response,
});

export const apiError = () => ({
    type: "ERROR"
})