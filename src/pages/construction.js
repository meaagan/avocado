// React import removed - not needed with React 17+
import styled from "styled-components"

import { Container } from "@components/global"

const Construction = () => {
  return (
    <StyledContainer>
      <h1>Under Construction!</h1>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)`
  padding: 2%;
  background-color: rgba(255, 255, 255, 0.2);
  margin-top: 2%;
  margin-bottom: 2%;
`

export default Construction
