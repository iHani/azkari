import azkarList from '../data/allAzkar';

import {
  UPDATE_FONT_SIZE,
  ADD_NEW_ZEKR,
  EDIT_DUAA,
  REMOVE_DUAA,
} from './actions';

const initialState = {
  preferredFontSize: 22,
  azkarList
};

export default (state = initialState, action) => {
  const { type, option, zekr, index } = action;

  switch (type) {
    case UPDATE_FONT_SIZE:
      const fontSize = state.preferredFontSize;
      let newSize = fontSize;
      if (option === 'larger' && fontSize < 40) {
        newSize = fontSize + 3;
      } else if (option === 'smaller' && fontSize > 10) {
        newSize = fontSize - 3;
      }
      return {
        ...state,
        preferredFontSize: newSize
      };

    case ADD_NEW_ZEKR:
      return {
        ...state,
        azkarList: state.azkarList.map(cat => {
          if (cat.id === 'myazkar') {
            cat.azkar.push(zekr);
          }
          return cat;
        })
      }

    case EDIT_DUAA:
      return {
        ...state,
        azkarList: state.azkarList.map(cat => {
          if (cat.id === 'myazkar') {
            cat.azkar[index] = zekr;
          }
          return cat;
        })
      };

    case REMOVE_DUAA:
      console.log("duaindex to remoev", index);
      
      return {
        ...state,
        azkarList: state.azkarList.map(cat => {
          if (cat.id === 'myazkar') {
            cat.azkar = cat.azkar.filter((_, i) => i !== index);
          }
          return cat;
        })
      };

    default:
      return state;
  }
}
