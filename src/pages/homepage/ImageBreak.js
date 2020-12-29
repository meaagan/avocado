import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image';
 
const ImageBreak = () => {
  const data = useStaticQuery(
    graphql`
      query {
        header: file(
          sourceInstanceName: { eq: "images" }
          name: { eq: "break2" }
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
      <Parallax
        Tag="section"
        fluid={data.header.childImageSharp.fluid}
      >
      </Parallax>
  )
};

const Parallax = styled(BackgroundImage)`
  background-position: 60% 50%; 
  background-repeat: no-repeat; 
  background-size: cover; 
  height: 60vh; 
  margin: 0;
`;

export default ImageBreak;