import React from 'react';
import styled from 'styled-components';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPhone, faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Links = () => {
    return(
            <ContactLinks>
                <CLink>
                    {/* <span><FontAwesomeIcon icon={faMapMarkedAlt} /></span>  */}
                    270 ch. Bord-du-Lac - Lakeshore, Pointe-Claire, Quebec, H9S 4K9
                </CLink>
                <CLink>
                    {/* <span><FontAwesomeIcon icon={faPhone} /></span> */}
                    (514) 505-4055
                </CLink>
                <CLink>
                    {/* <span><FontAwesomeIcon icon={faEnvelope} /></span> */}
                    <StyledLink href="mailto:victorrose2015@gmail.com">info@avocadosushi.ca</StyledLink>
                </CLink>
                <CLink>
                    {/* <span><FontAwesomeIcon icon={faFacebook} /></span> */}
                    <StyledLink href="https://www.facebook.com/avocado.sushi.du.village">/Avocado.sushi.du.village</StyledLink>
                </CLink>
                <CLink>
                    {/* <span><FontAwesomeIcon icon={faInstagram} /></span> */}
                    <StyledLink href="https://www.instagram.com/avocadosushiduvillage/" target="_blank">@avocadosushiduvillage</StyledLink>
                </CLink>
            </ContactLinks>
    )
}

const ContactLinks = styled.ul`
  list-style: none;
  padding-left:0;
  color:black;
`

const StyledLink = styled.a`
  background-image: linear-gradient(0deg, rgb(202, 157, 124) 50%, transparent 50%);
  text-decoration: none;
  color: inherit;
`

const CLink = styled.li`
`

export default Links