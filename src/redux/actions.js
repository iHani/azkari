export const UPDATE_FONT_SIZE = 'UPDATE_FONT_SIZE';
export const ADD_NEW_ZEKR = 'ADD_NEW_ZEKR';
export const EDIT_DUAA = 'EDIT_DUAA';
export const REMOVE_DUAA = 'REMOVE_DUAA';

export const updateFontSize = (option) => ({
    type: UPDATE_FONT_SIZE,
    option
});

export const addNewZekr = (zekr) => ({
    type: ADD_NEW_ZEKR,
    zekr
});

export const editDuaa = (index, zekr) => ({
    type: EDIT_DUAA,
    index,
    zekr
});

export const removeDuaa = (index) => ({
    type: REMOVE_DUAA,
    index
});

