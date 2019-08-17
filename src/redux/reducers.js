// import myAzkar from '../data/allAzkar';

import {
  UPDATE_FONT_SIZE,
  ADD_NEW_ZEKR,
  UPDATE_ZEKR,
  REMOVE_ZEKR,
} from './actions';

const initialState = {
  preferredFontSize: 22,
  myAzkar: [
    {
      "text": "first",
      "times": 11
    },
    {
      "text": "second",
      "times": 22
    },
    {
      "text": "third",
      "times": 33
    },
    {
      "text": "fourth",
      "times": 44
    },
    {
      "text": "fifth",
      "times": 55
    }
  ]
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
        myAzkar: state.myAzkar.concat(zekr)
      }

    case UPDATE_ZEKR:
      return {
        ...state,
        myAzkar: state.myAzkar.map((_, i) => i === index ? zekr : _)
      };

    case REMOVE_ZEKR:
      return {
        ...state,
        myAzkar: state.myAzkar.filter((_, i) => i !== index)
      }

    default:
      return state;
  }
}
