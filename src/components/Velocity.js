import React, { useState, useEffect } from "react"
import { InputGroup } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { changingVelValue } from "../store/action"

const Velocity = props => {
  const sliderValue = useSelector(state => state.sliderValue.value)
  const [inputValue, setInputValue] = useState(0)
  const dispatch = useDispatch()

  let regex = new RegExp(`^$|^[0]$|^-?[1-9][0-9]?$|^100$|^-100$`)

  useEffect(() => {
    setInputValue((sliderValue - 50) * 2)
  }, [sliderValue])

  const handleChange = event => {
    if (regex.test(event.target.value)) {
      setInputValue(event.target.value)
      dispatch(changingVelValue(event.target.value))
    }
  }

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Velocity (km/s)</InputGroup.Text>
        </InputGroup.Prepend>
        <input type="number" onChange={handleChange} value={inputValue} />
      </InputGroup>
    </div>
  )
}

export default Velocity
