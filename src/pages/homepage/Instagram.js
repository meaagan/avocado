import React from 'react'
import styled from 'styled-components';
import { Container } from '@components/global'
import 'react-multi-carousel/lib/styles.css';
import Posts from './components/Posts'

const Instagram = () => {
    return (
            <StyledContainer>
              <h2 style={{padding: '2% 0'}}>Follow us on Instagram</h2>
                <Posts />
            </StyledContainer>
    )
}

const StyledContainer = styled(Container)`
  margin-bottom: 25px;
`

export default Instagram;