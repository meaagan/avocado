import React from 'react'
import { Container } from '@components/global'
import styled from 'styled-components'

const News = () => {
    return(
        <StyledContainer>
            <h2 style={{textAlign:'center'}}>COVID-19 Mis a jour - 26 juillet, 2020</h2>
            <p>Chers Clients,
                <br /><br />
                Nous continuons notre service de livraison et de commande pour apporter, maintenant offert du Mardi au Samedi à partir de 16h30.
                <br /><br />
                Les commandes peuvent être placées par téléphone au 514-505-4055 à partir de 14hr, ou à l'aide de notre SERVICE DE COMMANDE EN LIGNE à partir de minuit le jour de votre commande.
                <br /><br />
                À cause du peu d'espace dont nous disposons, nous avons choisi de ne pas rouvrir notre salle à manger pour le moment.
                Nous vous sommes extrêmement reconnaissants de votre soutien et espérons que vous et vos famille restez en sécurity.
                <br /><br />
                Sylvie Longtin & Dominique St-Laurent<br />
                <em>Copropriétaires, Avocado Sushi</em>
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