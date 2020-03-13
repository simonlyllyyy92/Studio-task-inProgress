import React from "react"
import { InputGroup } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { changingVelValue } from "../store/action"

/**
 * @Component Velocity Input
 * @Returns  Velcocity Input Component Layout
 */

const Velocity = () => {
  // First of all, we get the Velocity value from the redux store
  // and the inital value is 0
  const inputValue = useSelector(state => state.inputValue.value)
  const dispatch = useDispatch()

  // we only allow the number between -100 to 100 in the input
  let regex = new RegExp(`^$|^[0]$|^-?[1-9][0-9]?$|^100$|^-100$`)

  // If the entered value matched the regex, we will dispatch an action
  // and store the new Velocity value into the redux store
  const handleChange = event => {
    if (regex.test(event.target.value)) {
      dispatch(changingVelValue(event.target.value))
    }
  }

  //the Velocity input component layout
  //the initial value is 0
  return (
    <div>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Velocity (km/s)</InputGroup.Text>
        </InputGroup.Prepend>
        <input type="number" onChange={handleChange} value={inputValue} />
      </InputGroup>
    </div>
  )
}

export default Velocity
