export const UPDATE_FONT_SIZE = 'UPDATE_FONT_SIZE';
export const ADD_NEW_ZEKR = 'ADD_NEW_ZEKR';
export const UPDATE_ZEKR = 'UPDATE_ZEKR';
export const REMOVE_ZEKR = 'REMOVE_ZEKR';

export const updateFontSize = (option) => ({
    type: UPDATE_FONT_SIZE,
    option
});

export const addNewZekr = (zekr) => ({
    type: ADD_NEW_ZEKR,
    zekr
});

export const updateZekr = (index, zekr) => ({
    type: UPDATE_ZEKR,
    index,
    zekr
});

export const removeZekr = (index) => ({
    type: REMOVE_ZEKR,
    index
});


