// src/components/navbar/HideOnScroll.js
import React, { useState, useEffect } from "react"
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    threshold: 100, // Hide after scrolling 100px
  })
  
  const [isHovering, setIsHovering] = useState(false)
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Show navbar when mouse is in top 80px of the screen
      const shouldShow = event.clientY <= 80
      setIsHovering(shouldShow)
    }
    
    const handleMouseLeave = () => {
      setIsHovering(false)
    }
    
    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])
  
  // Show navbar if:
  // 1. Not scrolled (trigger is false), OR
  // 2. Mouse is hovering near top of page
  const shouldShow = !trigger || isHovering
  
  return (
    <Slide appear={false} direction="down" in={shouldShow}>
      {children}
    </Slide>
  )
}

export default HideOnScroll