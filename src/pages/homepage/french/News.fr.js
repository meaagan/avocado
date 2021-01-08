import React from 'react'
import { Container } from '@components/global'
import styled from 'styled-components'

const News = () => {
    return(
        <StyledContainer style={{textAlign:'center'}}>
            <h2>Annonces</h2>
            <p>
                À compter du samedi 9 janvier 2021, nous ouvrirons à partir de 15h00 et nos livraisons et ramassages seront disponibles de 15h30 à 19h30.
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