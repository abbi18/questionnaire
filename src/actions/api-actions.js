export const apiFetchBegin = () => ({
    type: "FETCH",
});

export const apiFetchSuccess = (response) => ({
    type: "POPULATE",
    payload: response,
});

export const apiFetchError = () => ({
    type: "ERROR"
})