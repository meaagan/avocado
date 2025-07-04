import styled from 'styled-components'

export const CustomNavButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  color: #FFFFFF;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  margin: 0 8px;
  min-width: 120px;
  
  &:hover {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    color: #FFFFFF;
  }
  
  &:active {
    transform: translateY(0px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 991px) {
    padding: 10px 20px;
    font-size: 13px;
    margin: 0 4px;
    min-width: 100px;
  }
`

export const PrimaryNavButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  color: #222222;
  background: linear-gradient(135deg, #FFFFFF 0%, #F6F6F6 100%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  margin: 0 8px;
  min-width: 120px;
  
  &:hover {
    background: linear-gradient(135deg, #F6F6F6 0%, #ADADAD 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    color: #222222;
  }
  
  &:active {
    transform: translateY(0px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 991px) {
    padding: 10px 20px;
    font-size: 13px;
    margin: 0 4px;
    min-width: 100px;
  }
`

export const TextNavButton = styled.a`
  display: inline-block;
  padding: 12px 16px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  text-align: center;
  color: #F6F6F6;
  background: transparent;
  border: none;
  border-radius: 6px;
  transition: all 0.3s ease;
  cursor: pointer;
  margin: 0 4px;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: #FFFFFF;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover {
    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.1);
    
    &:before {
      width: 80%;
    }
  }

  @media (max-width: 991px) {
    padding: 10px 14px;
    font-size: 13px;
  }
`