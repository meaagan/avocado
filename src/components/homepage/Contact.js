import React from 'react'
import { Container } from '@components/global'
import styled from 'styled-components'
import AMap from '../../pages/contact/AMap'
import { useContent } from '../../hooks/useContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock, 
  faUsers,
  faUtensils,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  const { content, getContent, language } = useContent('homepage')

  return (
    <ContactSection id="contact">
      <Container>
        <ContactGrid>
          {/* Contact Information */}
          <ContactInfo>
            <ContactCards>
              <ContactCard>
                <CardIcon>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </CardIcon>
                <CardTitle>{language === 'fr' ? 'Emplacement' : 'Location'}</CardTitle>
                <CardContent>
                  <BusinessName>{getContent('contact.businessName', 'Avocado Sushi du Village')}</BusinessName>
                  <Address>{getContent('contact.address', '270 ch. Bord-du-Lac - Lakeshore\nPointe-Claire, QC, H9S 4K9')}</Address>
                </CardContent>
              </ContactCard>

              <ContactCard>
                <CardIcon>
                  <FontAwesomeIcon icon={faPhone} />
                </CardIcon>
                <CardTitle>{language === 'fr' ? 'Contact' : 'Contact'}</CardTitle>
                <CardContent>
                  <ContactLink href={`tel:${getContent('contact.phone', '514.505.4055').replace(/[.\s-]/g, '')}`}>
                    <FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px', fontSize: '0.9rem' }} />
                    {getContent('contact.phone', '514.505.4055')}
                  </ContactLink>
                  <ContactLink href={`mailto:${getContent('contact.email', 'info@avocadosushi.ca')}`}>
                    <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px', fontSize: '0.9rem' }} />
                    {getContent('contact.email', 'info@avocadosushi.ca')}
                  </ContactLink>
                </CardContent>
              </ContactCard>

              <ContactCard>
                <CardIcon>
                  <FontAwesomeIcon icon={faClock} />
                </CardIcon>
                <CardTitle>{language === 'fr' ? 'Heures' : 'Hours'}</CardTitle>
                <CardContent>
                  <Hours>{getContent('contact.hours', language === 'fr' ? 'Mardi - Dimanche: 16h00 - 21h00\nLundi: Fermé' : 'Tuesday - Sunday: 4:00 PM - 9:00 PM\nMonday: Closed')}</Hours>
                  {getContent('contact.reservationNote') && (
                    <Note>{getContent('contact.reservationNote')}</Note>
                  )}
                </CardContent>
              </ContactCard>

              <ContactCard>
                <CardIcon>
                  <FontAwesomeIcon icon={faUsers} />
                </CardIcon>
                <CardTitle>{language === 'fr' ? 'Suivez-nous' : 'Follow Us'}</CardTitle>
                <CardContent>
                  <SocialLinks>
                    <SocialLink 
                      href="https://www.facebook.com/avocado.sushi.du.village/" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      Facebook
                    </SocialLink>
                    <SocialLink 
                      href="https://www.instagram.com/avocadosushiduvillage/" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      Instagram
                    </SocialLink>
                  </SocialLinks>
                </CardContent>
              </ContactCard>
            </ContactCards>

            {/* Action Buttons */}
            <ActionButtons>
              <ActionButton 
                href={getContent('navigation.orderButtonUrl', 'https://avocadosushi-restaurant.order-online.ai/#/')} 
                target="_blank" 
                rel="noreferrer"
                primary
              >
                <FontAwesomeIcon icon={faUtensils} style={{ marginRight: '8px' }} />
                {getContent('navigation.orderButtonText', language === 'fr' ? 'Commander' : 'Order Online')}
              </ActionButton>
              <ActionButton 
                href={getContent('navigation.reserveButtonUrl', 'https://widgets.libroreserve.com/WEB/QC017111388322/book')} 
                target="_blank" 
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '8px' }} />
                {getContent('navigation.reserveButtonText', language === 'fr' ? 'Réserver' : 'Reserve Online')}
              </ActionButton>
            </ActionButtons>
          </ContactInfo>

          {/* Map */}
          <MapWrapper>
            <MapContainer>
              <AMap />
            </MapContainer>
          </MapWrapper>
        </ContactGrid>
      </Container>
    </ContactSection>
  )
}

// Styled Components
const ContactSection = styled.section`
  padding: 80px 0;
  background-color: #1e293b;
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 40px 0;
  }
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  
  h2 {
    color: ${props => props.theme.color.white.regular};
    ${props => props.theme.font_size.larger};
    ${props => props.theme.font_weight.regular};
    margin-bottom: 1rem;
  }
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-bottom: 30px;
    
    h2 {
      ${props => props.theme.font_size.large};
      margin-bottom: 0.5rem;
    }
  }
`

const Subtitle = styled.p`
  color: ${props => props.theme.color.white.dark};
  ${props => props.theme.font_size.regular};
  ${props => props.theme.font_weight.light};
  margin: 0;
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    ${props => props.theme.font_size.small};
  }
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
  
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    gap: 20px;
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    gap: 20px;
  }
`

const ContactCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`

const ContactCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 25px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 15px;
    border-radius: 10px;
    
    &:hover {
      transform: none;
    }
  }
`

const CardIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: ${props => props.theme.color.white.regular};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    font-size: 1.2rem;
    margin-bottom: 8px;
    
    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`

const CardTitle = styled.h3`
  color: ${props => props.theme.color.white.regular};
  ${props => props.theme.font_size.regular};
  ${props => props.theme.font_weight.regular};
  margin-bottom: 15px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 8px;
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    ${props => props.theme.font_size.small};
    margin-bottom: 10px;
    padding-bottom: 5px;
  }
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    gap: 8px;
  }
`

const BusinessName = styled.div`
  color: ${props => props.theme.color.white.regular};
  ${props => props.theme.font_weight.regular};
  ${props => props.theme.font_size.small};
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    ${props => props.theme.font_size.xsmall};
  }
`

const Address = styled.div`
  color: ${props => props.theme.color.white.dark};
  ${props => props.theme.font_size.xsmall};
  line-height: 1.6;
  white-space: pre-line;
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    line-height: 1.4;
    font-size: 11px;
  }
`

const ContactLink = styled.a`
  color: ${props => props.theme.color.white.dark};
  text-decoration: none;
  ${props => props.theme.font_size.xsmall};
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  
  &:hover {
    color: ${props => props.theme.color.white.regular};
    
    svg {
      color: ${props => props.theme.color.white.regular};
    }
  }
  
  svg {
    color: ${props => props.theme.color.white.darker};
    transition: color 0.3s ease;
  }
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    font-size: 11px;
  }
`

const Hours = styled.div`
  color: ${props => props.theme.color.white.dark};
  ${props => props.theme.font_size.xsmall};
  line-height: 1.6;
  white-space: pre-line;
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    line-height: 1.4;
    font-size: 11px;
  }
`

const Note = styled.div`
  color: ${props => props.theme.color.white.darker};
  ${props => props.theme.font_size.xsmall};
  font-style: italic;
  line-height: 1.4;
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    font-size: 10px;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    gap: 8px;
  }
`

const SocialLink = styled.a`
  color: ${props => props.theme.color.white.dark};
  text-decoration: none;
  padding: 6px 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  ${props => props.theme.font_size.xsmall};
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${props => props.theme.color.white.regular};
    border-color: rgba(255, 255, 255, 0.4);
  }
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 4px 8px;
    font-size: 10px;
    border-radius: 10px;
  }
`

const ActionButtons = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    gap: 12px;
  }
`

const ActionButton = styled.a`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  text-decoration: none;
  border-radius: 25px;
  ${props => props.theme.font_weight.regular};
  ${props => props.theme.font_size.small};
  transition: all 0.3s ease;
  text-align: center;
  
  svg {
    transition: all 0.3s ease;
  }
  
  ${props => props.primary ? `
    background: linear-gradient(135deg, #FFFFFF 0%, #F6F6F6 100%);
    color: #222222;
    border: 2px solid rgba(255, 255, 255, 0.3);
    
    &:hover {
      background: linear-gradient(135deg, #F6F6F6 0%, #ADADAD 100%);
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
      
      svg {
        transform: scale(1.1);
      }
    }
  ` : `
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    color: #FFFFFF;
    border: 2px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    
    &:hover {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
      border-color: rgba(255, 255, 255, 0.4);
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
      
      svg {
        transform: scale(1.1);
      }
    }
  `}
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 12px 20px;
    ${props => props.theme.font_size.xsmall};
    border-radius: 20px;
    
    &:hover {
      transform: none;
      box-shadow: none;
      
      svg {
        transform: none;
      }
    }
  }
`

const MapWrapper = styled.div`
  /* Removed sticky positioning */
`

const MapContainer = styled.div`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  .mapboxgl-map {
    height: 400px !important;
    
    @media (max-width: ${props => props.theme.screen.sm}) {
      height: 250px !important;
    }
  }
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`

export default Contact