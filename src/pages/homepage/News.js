import React from 'react'
import { Container } from '@components/global'
import styled from 'styled-components'

const News = () => {
    return(
        <StyledContainer style={{textAlign:'center'}}>
            <h2>Announcements</h2>
            <h3>Holiday Business Hours</h3>
            <p>
                <b>Friday, December 24:</b> Pick up only from 2:30PM to 5PM <br/>
                <b>Saturday, December 25 to Monday, December 27:</b> Closed <br/>
                <b>Tuesday, December 28 to Thursday, December 30:</b> 5PM to 9PM <br/>
                <b>Friday, December 31:</b> Pick up only from 2:30PM to 5PM <br/>
                <b>Saturday, January 1 to Tuesday, January 4:</b> Closed <br/>
                <b>Wednesday, January 5:</b> Back to our regular schedule <br/> <br/>

                Happy Holidays!
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