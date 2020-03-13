import reducers from '../store/reducer'
import {ActionTypes} from '../store/actionTypes'

test ('returns default initial state of velocity value when no action' ,() => {
    const newState = reducers(undefined,{type:'@@INIT'})
    expect(newState).toEqual({
        inputValue: {
        value: 0
      }
    })
})

test('should change the velocity value when new value is entered', () =>{
    const state = {
        inputValue: {
            value: 0
          }
    }
    const action = {
        type: ActionTypes.CHANGE_VEL_VALUE,
        payload: 50
    }
    const newState = reducers(state, action)
    expect(newState).toEqual({
        inputValue: {
            value: 50
        }
    })
})