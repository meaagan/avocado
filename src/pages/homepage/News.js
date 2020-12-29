import React from 'react'
import { Container } from '@components/global'
import styled from 'styled-components'

const News = () => {
    return(
        <StyledContainer style={{textAlign:'center'}}>
            <h2>2020 – 2021 HOLIDAY SEASON</h2>
            <h3>BUSINESS HOURS</h3>
            <p>
                <strong>DECEMBER - OPEN</strong><br />
                Monday 21: 4-9pm<br />
                Tuesday 22: 4-9pm<br />
                Wednesday 23: 4-9pm<br />
                Thursday 24: 12-5pm<br />
                Monday 28: 4-9pm<br />
                Tuesday 29: 4-9pm<br />
                Wednesday 30: 4-9pm<br />
                Thursday 31: 12-5pm<br />
                <br />
                <strong>FERMÉ/CLOSED</strong><br />
                December 25 - 26 - 27<br />
                January 1 - 2 - 3 - 4
            </p>
            <p>
            *REGULAR BUSINESS HOURS WILL RESUME JANUARY 5TH<br />
            **WE ANSWER OUR PHONES BEGINNING AT 2PM<br />
            ***PLEASE PLACE YOUR ORDERS IN ADVANCE FOR DECEMBER 24 AND 31 BECAUSE WE WILL UNFORTUNATELY BE UNABLE TO FILL SAME DAY ORDERS
            </p>
        </StyledContainer>
    )
}

const StyledContainer = styled(Container)`
    padding:2%;
    background-color: rgba(255,255,255,0.2);
    margin-top: 2%;
    margin-bottom: 2%;
`

export default News