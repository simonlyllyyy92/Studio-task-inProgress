import {changingVelValue} from '../store/action'
import {ActionTypes} from '../store/actionTypes'

describe('storing Velocity value input', () => {
    it ('return an action with type CHANGE_VEL_VALUE', () => {
        const action = changingVelValue(60)
        expect(action).toEqual({type: ActionTypes.CHANGE_VEL_VALUE, payload: 60})
    })
})