import React from "react"
import { CenteredRow } from "./styles/styled-components"

import { Row, Col, Container } from "react-bootstrap"
import star from "./images/star.png"
import Slider from "./components/Sliders"
import Velocity from "./components/Velocity"
import ImageFilter from "react-image-filter"

function App() {
  const filter = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]

  return (
    <Container>
      <Col>
        <CenteredRow>Doppler Effect</CenteredRow>
        <Row style={{ justifyContent: "center" }}>
          <ImageFilter
            image={star}
            filter={filter} // see docs beneath
            style={{ height: 300, width: 300 }}
          />
        </Row>

        <Row>
          <Col>
            <Velocity />
          </Col>
          <Col>
            <Slider />
          </Col>
        </Row>
      </Col>
    </Container>
  )
}

export default App
