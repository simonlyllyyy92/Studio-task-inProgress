import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Slider from "@material-ui/core/Slider"
import { changingVelValue } from "../store/action"

/**
 * @Components Slider
 * @Returns Slider Component Layout
 */

const Sliders = () => {
  // Getting the Velocity input value from the reducer
  const VelValue = useSelector(state => state.inputValue.value)
  // Material - ui Slider can not used the info from the redux as its initial value
  // So here we create a state inside the component
  const [sliderValue, setSliderValue] = useState(50)

  const dispatch = useDispatch()

  // every time the Velocity value is changed the slider value will changed as well
  useEffect(() => {
    setSliderValue(VelValue / 2 + 50)
  }, [VelValue])

  // every time we move the slider, it will set the slider value
  // as well as changing the Velocity value and store the new Velocity value into redux store
  const handleChange = (event, newValue) => {
    setSliderValue(newValue)
    dispatch(changingVelValue((newValue - 50) * 2))
  }

  //Slider Component layout
  return (
    <div style={{ width: 300 }}>
      <Typography id="continuous-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2}>
        <Grid item>-100</Grid>
        <Grid item xs>
          <Slider
            value={sliderValue}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </Grid>
        <Grid item>100</Grid>
      </Grid>
    </div>
  )
}

export default Sliders
