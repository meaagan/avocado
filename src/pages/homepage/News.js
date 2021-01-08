import React from 'react'
import { Container } from '@components/global'
import styled from 'styled-components'

const News = () => {
    return(
        <StyledContainer style={{textAlign:'center'}}>
            <h2>Announcements</h2>
            <p>
                As of Saturday, January 9th 2021, our opening hours for pick-up and delivery will be from 3:00 pm to 7:30pm.
            </p>
        </StyledContainer>
    )
}

const StyledContainer = styled(Container)`
    padding:2%;
    margin-top: 2%;
    margin-bottom: 2%;
`

export default News