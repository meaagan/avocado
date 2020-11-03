import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './BootstrapCarousel.css'

class BootstrapCarousel extends React.Component {
    render(children){
        return (
            <Carousel indicators={false}>
                {children}
            </Carousel>
        )
    }
}

export default BootstrapCarousel