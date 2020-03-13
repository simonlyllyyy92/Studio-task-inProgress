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
  // Material - ui Slider can not used the info from the redux as its initial value
  // So here we create a state inside the component
  const [sliderValue, setSliderValue] = useState(70)

  const dispatch = useDispatch()

  /**
   *
   * @LogarithmicSlider rang from {0-100}
   * @Range Slider value from {70 - 100} reflect to {1-100} actual value
   * {0-70} reflect to {-100 - 1} value
   */

  //Star turns to red log ！
  const logUpslider = position => {
    // position will be between 70 and 100
    const minp = 70
    const maxp = 100

    // The result should be between 1 an 100
    const minv = Math.log(1)
    const maxv = Math.log(100)

    // calculate adjustment factor
    const scale = (maxv - minv) / (maxp - minp)

    return Math.exp(minv + scale * (position - minp))
  }
  //Star turns to blue log !
  const logsDownSlider = position => {
    const minp = 0
    const maxp = 70

    // The result should be between 100 an 1
    const minv = Math.log(100)
    const maxv = Math.log(1)

    // calculate adjustment factor
    const scale = (maxv - minv) / (maxp - minp)

    return Math.exp(minv + scale * (position - minp))
  }

  // every time we move the slider, it will set the slider value
  // as well as changing the Velocity value and store the new Velocity value into redux store
  const handleChange = (event, newValue) => {
    let sliderLogValue
    if (newValue > 70) {
      if(newValue === 100){
        dispatch(changingVelValue(newValue))
      }else{
        sliderLogValue = logUpslider(newValue)
        dispatch(changingVelValue(sliderLogValue))
      }
    } else if (newValue < 70) {
      if(newValue === 0){
        dispatch(changingVelValue(-100))
      }else{
        sliderLogValue = logsDownSlider(newValue)
        dispatch(changingVelValue(-Math.abs(sliderLogValue)))
      }
     
    } else if (newValue === 70) {
      dispatch(changingVelValue(0))
    }
    setSliderValue(newValue)
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
