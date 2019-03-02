import { createSelector } from 'reselect';

const getMath = (state) => state.math;

export const getValue = createSelector(
    getMath,
    (math) => math.value
);
