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
            <ContactLinks>
                <li>
                    {/* <span><FontAwesomeIcon icon={faMapMarkedAlt} /></span>  */}
                    270 ch. Bord-du-Lac - Lakeshore, Pointe-Claire, Quebec, H9S 4K9
                </li>
                <li>
                    {/* <span><FontAwesomeIcon icon={faPhone} /></span> */}
                    (514) 505-4055
                </li>
                <li>
                    {/* <span><FontAwesomeIcon icon={faEnvelope} /></span> */}
                    <StyledButton><StyledLink href="mailto:victorrose2015@gmail.com">info@avocadosushi.ca</StyledLink></StyledButton>
                </li>
                <li>
                    {/* <span><FontAwesomeIcon icon={faFacebook} /></span> */}
                    <StyledButton><StyledLink href="https://www.facebook.com/avocado.sushi.du.village">/Avocado.sushi.du.village</StyledLink></StyledButton>
                </li>
                <li>
                    {/* <span><FontAwesomeIcon icon={faInstagram} /></span> */}
                    <StyledButton><StyledLink href="https://www.instagram.com/avocadosushiduvillage/" target="_blank">@avocadosushiduvillage</StyledLink></StyledButton>
                </li>
            </ContactLinks>
    )
}

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