import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Posts = () => {
    const data = useStaticQuery(graphql`
        query {
            allInstaNode {
            edges {
                node {
                id
                preview
                localFile {
                    childImageSharp {
                    fixed(width: 200, height: 200, jpegQuality: 100) {
                        ...GatsbyImageSharpFixed
                    }
                }
              }
              original
            }
          }
        }
      }
    `)
        
    const instaPosts = data.allInstaNode.edges

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (

                <StyledCarousel
                    swipeable={true}
                    centerMode={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    keyBoardControl={true}
                >
                    {instaPosts.map(({ node }) => {
                        return(
                          <a href="https://www.instagram.com/avocadosushiduvillage/" target="_blank" rel="noreferrer">
                            <Img fixed = {node.localFile.childImageSharp.fixed} />
                          </a>
                        )
                    })}
                </StyledCarousel>
    )
}

const StyledCarousel = styled(Carousel)`
  transition: all 0.5s ease 0s;
`

export default Posts;