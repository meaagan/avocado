import React from 'react'
import { Container } from '@components/global'
import styled from 'styled-components'

const News = () => {
    return(
        <StyledContainer style={{textAlign:'center'}}>
            <h2>Annonces</h2>
            <h3>Holiday Business Hours</h3>
            <p>
                <b>Vendredi 24 décembre:</b> Seulement commandes pour emporter de 14h30 a 17h <br/>
                <b>Samedi 25 décembre à lundi 27 décembre:</b> Fermé <br/>
                <b>Mardi 28 décembre à jeudi 30 décembre:</b> 17h à 21h <br/>
                <b>Vendredi 31 décembre:</b> Seulement commandes pour emporter de 14h30 a 17h <br/>
                <b>Saturday 1 janvier à mardi 4 janvier:</b> Fermé <br/>
                <b>Mercredi 5 janvier:</b> Retour à notre horaire régulier <br/> <br/>

                Joyeuses fêtes!
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