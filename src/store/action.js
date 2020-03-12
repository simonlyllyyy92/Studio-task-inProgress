import { ActionTypes } from "./actionTypes"

export const changingValue = payload => ({
  type: ActionTypes.CHANGE_SLIDER_VALUE,
  payload
})

export const changingVelValue = payload => ({
  type: ActionTypes.CHANGE_VEL_VALUE,
  payload
})
