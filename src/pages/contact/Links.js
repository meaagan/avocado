import React from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPhone, faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Links = () => {
    const StyledButton = withStyles({
        root: {
            fontFamily:'inherit',
            color: 'inherit',
            backgroundColor: 'none',
              '&:hover': {
                backgroundColor: 'rgb(0, 0, 0, 0.1)',
              },
          },
        })(Button);  

    return(
        <LinkContainer>
            <ContactLinks style={{paddingTop:'7px'}}>
                <li>
                    270 ch. Bord-du-Lac - Lakeshore<br />Pointe-Claire, Quebec<br />H9S 4K9
                </li>
                <li>
                    (514) 505-4055
                </li>
            </ContactLinks>
            <ContactLinks>
                <li>
                    <StyledButton><StyledLink href="mailto:info@avocadosushi.ca">info@avocadosushi.ca</StyledLink></StyledButton>
                </li>
                <li>
                    <StyledButton><StyledLink href="https://www.facebook.com/avocado.sushi.du.village">/Avocado.sushi.du.village</StyledLink></StyledButton>
                </li>
                <li>
                    <StyledButton><StyledLink href="https://www.instagram.com/avocadosushiduvillage/" target="_blank">@avocadosushiduvillage</StyledLink></StyledButton>
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
    }
`

const ContactLinks = styled.ul`
    list-style: none;
    padding-left:0;
    color:black;
`

const StyledLink = styled.a`
    text-decoration: none;
    color: inherit;
`

export default Links
