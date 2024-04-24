import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Links = () => {
    return(
        <LinkContainer>
            <ContactLinks style={{paddingTop:'2%'}}>
                <li>
                    270 ch. Bord-du-Lac - Lakeshore<br />Pointe-Claire, Quebec<br />H9S 4K9
                </li>
                <li>
                    (514) 505-4055
                </li>
            </ContactLinks>
            <ContactLinks>
                <li>
                    <Button><StyledLink href="mailto:info@avocadosushi.ca">info@avocadosushi.ca</StyledLink></Button>
                </li>
                <li>
                    <Button><StyledLink href="https://www.facebook.com/avocado.sushi.du.village">/Avocado.sushi.du.village</StyledLink></Button>
                </li>
                <li>
                    <Button><StyledLink href="https://www.instagram.com/avocadosushiduvillage/" target="_blank">@avocadosushiduvillage</StyledLink></Button>
                </li>
            </ContactLinks>
        </LinkContainer>
    )
}

const LinkContainer = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 991px) {
        display: block;
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }
`

const StyledLink = styled.a`
    text-decoration: none;
    color: black;
`


const ContactLinks = styled.ul`
    list-style: none;
    padding-left:0;
    color:black;
`

export default Links
