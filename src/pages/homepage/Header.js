import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image';
 
const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        header: file(
          sourceInstanceName: { eq: "images" }
          name: { eq: "header" }
        ) {
          childImageSharp {
            fluid(maxWidth: 3000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

      }
    `)

  return(
    <HeaderWrapper>
      <Parallax
        Tag="section"
        fluid={data.header.childImageSharp.fluid}
      >
      </Parallax>
    </HeaderWrapper>
  )
};



const Parallax = styled(BackgroundImage)`
  background-attachment: fixed; 
  background-position: 60% 50%; 
  background-repeat: no-repeat; 
  background-size: cover; 
  height: 100vh; 
  margin: 0;
`;

const HeaderWrapper = styled.div`
    height: 100vh;
`

export default Header;