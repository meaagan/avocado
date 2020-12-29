import React from 'react'
import { Container } from '@components/global'
import styled from 'styled-components'

const News = () => {
    return(
        <StyledContainer style={{textAlign:'center'}}>
            <h2>SAISON DES FÊTES 2020 – 2021</h2>
            <h3>HEURES D’AFFAIRE</h3>
            <p>
                <strong>DÉCEMBRE - OUVERT</strong><br />
                Lundi 21: 4-9pm<br />
                Mardi 22: 4-9pm<br />
                Mercredi 23: 4-9pm<br />
                Jeudi 24: 12-5pm<br />
                Lundi 28: 4-9pm<br />
                Mardi 29: 4-9pm<br />
                Mercredi 30: 4-9pm<br />
                Jeudi 31: 12-5pm<br />
                <br />
                <strong>FERMÉ/CLOSED</strong><br />
                25 - 26 - 27 décembre<br />
                1 - 2 - 3 - 4 janvier
            </p>
            <p>
            *NOUS REPRENDRONS NOTRE HORAIRE REGULIER LE 5 JANVIER<br />
            **NOUS REPONDONS AU TELEPHONE À PARTIR DE 2PM <br />
            ***NOUS VOUS DEMANDONS, S’IL VOUS PLAIT, DE PLACER VOS COMMANDES A L’AVANCE POUR LES 24 ET 31 DECEMBRE CAR NOUS NE POURRONS MALHEUREUSEMENT PAS REMPLIR DE NOUVELLES COMMANDES LES JOURS MEMES
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