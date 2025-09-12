// React import removed - not needed with React 17+
import styled from "styled-components"

import { Container } from "@components/global"

const Instagram = () => {
  return (
    <StyledContainer>
      <h2>Follow us on Instagram</h2>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)`
  padding-bottom: 20px;
`

export default Instagram
