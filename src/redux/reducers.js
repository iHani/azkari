import duaaCategoryList from '../data/allAzkar';

import {
  UPDATE_FONT_SIZE,
  ADD_NEW_ZEKR,
} from './actions';

const initialState = {
  duaaCategoryList,
  preferredFontSize: 22,
  myAzkarList: [
    {
      "text": "text here..",
      "times": 1
    },

  ]
};

export default (state = initialState, action) => {
  const { type, option, zekr } = action;

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
        myAzkarList: state.myAzkarList.concat({ ...zekr })
      }

    default:
      return state;
  }
}
