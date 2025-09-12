import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
  faUsers,
  faUtensils,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// React import removed - not needed with React 17+
import styled from "styled-components"

import { Container } from "@components/global"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { useContent } from "../hooks/useContent"

import AMap from "./contact/AMap"

const ContactPage = () => {
  const { content, loading, getContent } = useContent("contact")

  if (loading) {
    return (
      <Layout>
        <LoadingContainer>
          <LoadingText>Loading...</LoadingText>
        </LoadingContainer>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO
        title={getContent(
          "seo.metaTitle",
          "Contact - Avocado Sushi du Village",
        )}
        description={getContent(
          "seo.metaDescription",
          "Contact Avocado Sushi du Village",
        )}
      />

      {/* Hero Section */}
      <HeroSection>
        <Container>
          <HeroContent>
            <h1>{getContent("hero.title", "Contact Us")}</h1>
            {getContent("hero.subtitle") && (
              <Subtitle>{getContent("hero.subtitle")}</Subtitle>
            )}
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Contact Information Section */}
      <ContactInfoSection>
        <Container>
          <ContactGrid>
            {/* Contact Details */}
            <ContactDetails>
              <ContactCard>
                <CardIcon>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </CardIcon>
                <CardTitle>Location</CardTitle>
                <CardContent>
                  <BusinessName>
                    {getContent(
                      "contact.businessName",
                      "Avocado Sushi du Village",
                    )}
                  </BusinessName>
                  <Address>
                    {getContent(
                      "contact.address",
                      "270 ch. Bord-du-Lac - Lakeshore\nPointe-Claire, QC, H9S 4K9",
                    )}
                  </Address>
                </CardContent>
              </ContactCard>

              <ContactCard>
                <CardIcon>
                  <FontAwesomeIcon icon={faPhone} />
                </CardIcon>
                <CardTitle>Phone & Email</CardTitle>
                <CardContent>
                  <ContactLink
                    href={`tel:${getContent("contact.phone", "514.505.4055").replace(/[.\s-]/g, "")}`}
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{ marginRight: "8px", fontSize: "0.9rem" }}
                    />
                    {getContent("contact.phone", "514.505.4055")}
                  </ContactLink>
                  <ContactLink
                    href={`mailto:${getContent("contact.email", "info@avocadosushi.ca")}`}
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ marginRight: "8px", fontSize: "0.9rem" }}
                    />
                    {getContent("contact.email", "info@avocadosushi.ca")}
                  </ContactLink>
                </CardContent>
              </ContactCard>

              <ContactCard>
                <CardIcon>
                  <FontAwesomeIcon icon={faClock} />
                </CardIcon>
                <CardTitle>Hours</CardTitle>
                <CardContent>
                  <Hours>
                    {getContent(
                      "hours.hours",
                      "Tuesday - Sunday: 4:00 PM - 9:00 PM\nMonday: Closed",
                    )}
                  </Hours>
                  {getContent("hours.reservationNote") && (
                    <Note>{getContent("hours.reservationNote")}</Note>
                  )}
                  {getContent("hours.specialInstructions") && (
                    <Note>{getContent("hours.specialInstructions")}</Note>
                  )}
                </CardContent>
              </ContactCard>

              <ContactCard>
                <CardIcon>
                  <FontAwesomeIcon icon={faUsers} />
                </CardIcon>
                <CardTitle>Follow Us</CardTitle>
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
            </ContactDetails>

            {/* Map */}
            <MapWrapper>
              <MapContainer>
                <AMap />
              </MapContainer>
            </MapWrapper>
          </ContactGrid>
        </Container>
      </ContactInfoSection>

      {/* Action Section */}
      <ActionSection>
        <Container>
          <ActionContent>
            <ActionTitle>Ready to Order or Make a Reservation?</ActionTitle>
            <ActionButtons>
              <ActionButton
                href="https://avocadosushi-restaurant.order-online.ai/#/"
                target="_blank"
                rel="noreferrer"
                primary
              >
                <FontAwesomeIcon
                  icon={faUtensils}
                  style={{ marginRight: "8px" }}
                />
                Order Online
              </ActionButton>
              <ActionButton
                href="https://widgets.libroreserve.com/WEB/QC017111388322/book"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  style={{ marginRight: "8px" }}
                />
                Make Reservation
              </ActionButton>
            </ActionButtons>
          </ActionContent>
        </Container>
      </ActionSection>
    </Layout>
  )
}

// Styled Components
const LoadingContainer = styled(Container)`
  margin-top: 5%;
  padding-top: 100px;
  text-align: center;
`

const LoadingText = styled.div`
  font-size: 1.2rem;
  color: ${props => props.theme.color.white.regular};
`

const HeroSection = styled.section`
  padding: 120px 0 80px 0;
  background-color: ${props => props.theme.color.primary};

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 140px 0 60px 0;
  }
`

const HeroContent = styled.div`
  text-align: center;

  h1 {
    color: ${props => props.theme.color.white.regular};
    margin-bottom: 1rem;
    ${props => props.theme.font_size.xlarge};
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    h1 {
      ${props => props.theme.font_size.larger};
    }
  }
`

const Subtitle = styled.h2`
  color: ${props => props.theme.color.white.dark};
  ${props => props.theme.font_weight.light};
  ${props => props.theme.font_size.large};
  margin: 0;

  @media (max-width: ${props => props.theme.screen.sm}) {
    ${props => props.theme.font_size.regular};
  }
`

const ContactInfoSection = styled.section`
  padding: 80px 0;
  background-color: ${props => props.theme.color.secondary};
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const ContactCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }
`

const CardIcon = styled.div`
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: ${props => props.theme.color.white.regular};
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`

const CardTitle = styled.h3`
  color: ${props => props.theme.color.white.regular};
  ${props => props.theme.font_size.large};
  ${props => props.theme.font_weight.regular};
  margin-bottom: 20px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 10px;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const BusinessName = styled.div`
  color: ${props => props.theme.color.white.regular};
  ${props => props.theme.font_weight.regular};
  ${props => props.theme.font_size.regular};
`

const Address = styled.div`
  color: ${props => props.theme.color.white.dark};
  ${props => props.theme.font_size.small};
  line-height: 1.6;
  white-space: pre-line;
`

const ContactLink = styled.a`
  color: ${props => props.theme.color.white.dark};
  text-decoration: none;
  ${props => props.theme.font_size.small};
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
`

const Hours = styled.div`
  color: ${props => props.theme.color.white.dark};
  ${props => props.theme.font_size.small};
  line-height: 1.8;
  white-space: pre-line;
`

const Note = styled.div`
  color: ${props => props.theme.color.white.darker};
  ${props => props.theme.font_size.xsmall};
  font-style: italic;
  line-height: 1.5;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`

const SocialLink = styled.a`
  color: ${props => props.theme.color.white.dark};
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  ${props => props.theme.font_size.xsmall};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${props => props.theme.color.white.regular};
    border-color: rgba(255, 255, 255, 0.4);
  }
`

const MapWrapper = styled.div`
  position: sticky;
  top: 100px;

  @media (max-width: ${props => props.theme.screen.md}) {
    position: relative;
    top: 0;
  }
`

const MapContainer = styled.div`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);

  .mapboxgl-map {
    height: 400px !important;

    @media (max-width: ${props => props.theme.screen.sm}) {
      height: 300px !important;
    }
  }
`

const ActionSection = styled.section`
  padding: 80px 0;
  background-color: ${props => props.theme.color.primary};
`

const ActionContent = styled.div`
  text-align: center;
`

const ActionTitle = styled.h2`
  color: ${props => props.theme.color.white.regular};
  ${props => props.theme.font_size.larger};
  ${props => props.theme.font_weight.regular};
  margin-bottom: 40px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    ${props => props.theme.font_size.large};
    margin-bottom: 30px;
  }
`

const ActionButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  text-decoration: none;
  border-radius: 25px;
  ${props => props.theme.font_weight.regular};
  ${props => props.theme.font_size.small};
  transition: all 0.3s ease;
  min-width: 180px;
  text-align: center;

  svg {
    transition: all 0.3s ease;
  }

  ${props =>
    props.primary
      ? `
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
  `
      : `
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
    padding: 14px 28px;
    min-width: 200px;
  }
`

export default ContactPage
