import { ActionTypes } from "./actionTypes"

const initialState = {
  sliderValue: {
    value: 50
  },
  inputValue: {
    value: 0
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_SLIDER_VALUE:
      return {
        ...state,
        sliderValue: {
          value: action.payload
        }
      }
    case ActionTypes.CHANGE_VEL_VALUE:
      return {
        ...state,
        inputValue: {
          value: action.payload
        }
      }
    default:
      return state
  }
}
