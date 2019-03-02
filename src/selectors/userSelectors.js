import { createSelector } from 'reselect';

const getUser = (state) => state.user;

export const getName = createSelector(
    getUser,
    (user) => user ? user.name : undefined,
);

export const getAge = createSelector(
    getUser,
    (user) => user ? user.age : undefined,
);
