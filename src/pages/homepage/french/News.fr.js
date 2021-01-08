import React from 'react'
import { Container } from '@components/global'
import styled from 'styled-components'

const News = () => {
    return(
        <StyledContainer style={{textAlign:'center'}}>
            <h2>Annonces</h2>
            <p>
                À compter du samedi 9 janvier 2021, nos heures d'ouverture pour le ramassage et la livraison seront de 15h00 à 19h30.
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