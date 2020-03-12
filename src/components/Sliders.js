import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Slider from "@material-ui/core/Slider"
import { changingValue } from "../store/action"

const Sliders = props => {
  const VelValue = useSelector(state => state.inputValue.value)
  const [sliderValue, setSliderValue] = useState(50)

  const dispatch = useDispatch()

  useEffect(() => {
    setSliderValue(VelValue / 2 + 50)
  }, [VelValue])

  const handleChange = (event, newValue) => {
    setSliderValue(newValue)
    dispatch(changingValue(newValue))
  }

  return (
    <div>
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
