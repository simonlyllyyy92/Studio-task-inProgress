import { ActionTypes } from "./actionTypes"

/**
 * @VelocityReducer
 * worked as rootReducer
 * because combineReducer is not needed
 */

//initial State
const initialState = {
  inputValue: {
    value: 0
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    //Changing the Input value action
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
