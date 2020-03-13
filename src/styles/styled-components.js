import styled from "styled-components"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

/**
 * @Styling can be reusable
 */

// Centered React-bootstrap Row
export const CenteredRow = styled(Row)`
  justify-content: center;
  text-align: center;
  font-size: 50px;
  display: flex;
  align-items: center;
`
// Customized Image style
export const StyledStar = styled.img`
  src: ${props => props.src};
  filter: ${props => props.styling};
`
// Responsive Row
export const ResponsiveRow = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`
//Centered Col
export const CenteredCol = styled(Col)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
