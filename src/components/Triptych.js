import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Triptych = ( props ) => {
    return(
        <TriContainer>
            <Image><Img fluid={props.img1} /></Image>
            <Image><Img fluid={props.img2} /></Image>
            <Image><Img fluid={props.img3} /></Image>
        </TriContainer>
    )
}

const TriContainer = styled.div`
    display:flex; 
    justify-content: center;
    margin: 10px;
    margin-bottom:20px;
`
const Image = styled.figure`
    width: 200px;
    margin: 0;
`

export default Triptych