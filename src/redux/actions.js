export const UPDATE_FONT_SIZE = 'UPDATE_FONT_SIZE';
export const ADD_NEW_ZEKR = 'ADD_NEW_ZEKR';

export const updateFontSize = (option) => ({
    type: UPDATE_FONT_SIZE,
    option
});


export const addNewZekr = (zekr) => ({
    type: ADD_NEW_ZEKR,
    zekr
});

