import { ActionTypes } from "./actionTypes"

/**
 * @Velocity action
 * @returns Object
 */

export const changingVelValue = payload => ({
  type: ActionTypes.CHANGE_VEL_VALUE,
  payload
})
