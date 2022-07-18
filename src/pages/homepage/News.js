import React from 'react'
import { Container } from '@components/global'
import styled from 'styled-components'

const News = () => {
    return(
        <StyledContainer style={{textAlign:'center'}}>
            <h2>Announcements</h2>
            <h3>We have made changes to our pricing. Please refer to our new menu below.</h3>
        </StyledContainer>
    )
}

const StyledContainer = styled(Container)`
    padding:2%;
    margin-top: 2%;
    margin-bottom: 2%;
`

export default News