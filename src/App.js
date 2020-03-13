import React from "react"
import {
  CenteredRow,
  ResponsiveRow,
  CenteredCol
} from "./styles/styled-components"
import { Row, Col, Container } from "react-bootstrap"

import Slider from "./components/Sliders"
import Velocity from "./components/Velocity"
import BeautifulStar from "./components/BeautifulStars"

/**
 * @App Combines Stars Sliders and Velocity Component
 */

function App() {
  return (
    <Container>
      <Col>
        <CenteredRow>Doppler Effect</CenteredRow>
        <CenteredRow>
          <BeautifulStar />
        </CenteredRow>
        <ResponsiveRow>
          <CenteredCol>
            <Velocity />
          </CenteredCol>
          <CenteredCol>
            <Slider />
          </CenteredCol>
        </ResponsiveRow>
      </Col>
    </Container>
  )
}

export default App
