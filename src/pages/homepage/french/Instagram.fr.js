import React from 'react'
import { Container } from '@components/global'
// import Posts from '../components/Posts'
import styled from 'styled-components';

const Instagram = () => {
    return(
        <StyledContainer>
            <h2>Suivez-nous sur Instagram</h2>
            {/* <Posts /> */}
        </StyledContainer>
    )
}

const StyledContainer = styled(Container)`
    padding-bottom: 20px;
`

export default Instagram