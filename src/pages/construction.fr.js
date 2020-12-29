import React from 'react'
import { Container } from '@components/global'
import styled from 'styled-components'

const Construction = () => {
    return(
        <StyledContainer>
            <h1>Under Construction!</h1>
        </StyledContainer>
    )
}

const StyledContainer = styled(Container)`
    padding:2%;
    background-color: rgba(255,255,255,0.2);
    margin-top: 2%;
    margin-bottom: 2%;
`

export default Construction