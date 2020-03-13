import React from "react"
import { useSelector } from "react-redux"
import { StyledStar } from "../styles/styled-components"
import star from "../images/star.png"

/**
 * @Component Star Image
 * @Returns Star Component with styled-Image
 */

const BeautifulStar = () => {
  //Get the Velocity value from the reducer
  const imageValue = useSelector(state => state.inputValue.value)

  let styling = ""

  //the Styling props will change based on the Velocity value
  //the invert(1) can be changed as hue-rotate(180deg) the result is similar
  //But I prefer using invert
  if (imageValue > 0) {
    styling = `saturate(${imageValue})`
  } else if (imageValue <= 0) {
    styling = `invert(${Math.abs(imageValue) / 100})`
  }

  return (
  <div>
    <StyledStar src={star} styling={styling} />
  </div>
  )
}

export default BeautifulStar
