// src/components/cms/FirebaseCMS.js
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../lib/firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHome, 
  faInfoCircle, 
  faEnvelope, 
  faFooter,
  faCog,
  faLanguage,
  faEdit,
  faBullhorn,
  faLink,
  faFish,
  faUser,
  faMapMarkerAlt,
  faClock,
  faSearch,
  faCopyright,
  faSave,
  faSpinner,
  faUtensils
} from '@fortawesome/free-solid-svg-icons'

const FirebaseCMS = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(false)
  const [editingLanguage, setEditingLanguage] = useState('en')
  const [currentPage, setCurrentPage] = useState('homepage')
  
  const { register, handleSubmit, reset, formState: { isDirty } } = useForm()

  // Define all pages and their editable sections
  const pages = {
    homepage: {
      title: 'Homepage',
      sections: {
        hero: { title: 'Hero Section', fields: ['title', 'description'] },
        announcements: { title: 'Announcements', fields: ['title', 'content'] },
        navigation: { 
          title: 'Navigation Buttons', 
          fields: ['orderButtonText', 'orderButtonUrl', 'reserveButtonText', 'reserveButtonUrl'] 
        },
        menu: {
          title: 'Menu Section',
          fields: ['title', 'description', 'menuUrl', 'linkText']
        },
        oceanwise: { title: 'Ocean Wise Section', fields: ['title', 'description'] },
        contact: { 
          title: 'Contact Section', 
          fields: ['title', 'subtitle', 'businessName', 'address', 'phone', 'email', 'hours', 'reservationNote'] 
        }
      }
    },
    about: {
      title: 'About Page',
      sections: {
        hero: { title: 'Page Header', fields: ['title', 'subtitle'] },
        story: { title: 'Our Story', fields: ['intro', 'dominique_story', 'location_story', 'conclusion'] },
        seo: { title: 'SEO Settings', fields: ['metaTitle', 'metaDescription'] }
      }
    },
    contact: {
      title: 'Contact Page',
      sections: {
        hero: { title: 'Page Header', fields: ['title', 'subtitle'] },
        contact: { 
          title: 'Contact Information', 
          fields: ['phone', 'email', 'address', 'businessName'] 
        },
        hours: { 
          title: 'Hours & Info', 
          fields: ['hours', 'reservationNote', 'specialInstructions'] 
        },
        seo: { title: 'SEO Settings', fields: ['metaTitle', 'metaDescription'] }
      }
    },
    footer: {
      title: 'Footer',
      sections: {
        links: { title: 'Footer Links', fields: ['socialFacebook', 'socialInstagram'] },
        text: { title: 'Footer Text', fields: ['copyright', 'additionalInfo'] }
      }
    }
  }

  useEffect(() => {
    // Check for secret admin parameter
    const urlParams = new URLSearchParams(window.location.search)
    const isAdminUrl = urlParams.get('admin') === 'avocado2024'
    
    if (isAdminUrl) {
      setIsAdmin(true)
      localStorage.setItem('avocado-admin', 'true')
      window.history.replaceState({}, '', window.location.pathname)
      showNotification('Admin mode activated! Click the gear icon to start editing.')
    } else {
      setIsAdmin(localStorage.getItem('avocado-admin') === 'true')
    }
    
    loadContent()
  }, [currentPage, editingLanguage])

  const loadContent = async () => {
    try {
      const docRef = doc(db, 'content', currentPage)
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        const data = docSnap.data()
        reset(data[editingLanguage] || getDefaultContent(currentPage, editingLanguage))
      } else {
        reset(getDefaultContent(currentPage, editingLanguage))
      }
    } catch (error) {
      console.error('Error loading content:', error)
    }
  }

  const getDefaultContent = (page, lang) => {
    const defaults = {
      homepage: {
        en: {
          hero: {
            title: "Avocado Sushi",
            description: "Avocado sushi was founded on the 5th of October, 2012. We serve traditional sushi and traditional creations fusing tradition, creativity and local Quebec products, including our famous sushi desserts."
          },
          announcements: {
            title: "Announcements",
            content: "We have made changes to our pricing. Please refer to our new menu below."
          },
          navigation: {
            orderButtonText: "Order Online",
            orderButtonUrl: "https://avocadosushi-restaurant.order-online.ai/#/",
            reserveButtonText: "Reserve Online",
            reserveButtonUrl: "https://widgets.libroreserve.com/WEB/QC017111388322/book"
          },
          menu: {
            title: "Menu",
            description: "Discover our delicious selection of traditional sushi and creative fusion dishes.",
            menuUrl: "",
            linkText: "Click here to see the full menu"
          },
          oceanwise: {
            title: "Certification Oceanwise",
            description: "Ocean Wise is a conservation program created to educate consumers and businesses on issues related to fisheries and aquaculture practices..."
          },
          contact: {
            title: "Contact Us",
            subtitle: "Get in touch with Avocado Sushi du Village",
            businessName: "Avocado Sushi du Village",
            address: "270 ch. Bord-du-Lac - Lakeshore\nPointe-Claire, QC, H9S 4K9",
            phone: "514.505.4055",
            email: "info@avocadosushi.ca",
            hours: "Tuesday - Sunday: 4:00 PM - 9:00 PM\nMonday: Closed",
            reservationNote: "Reservations are recommended in advance."
          }
        },
        fr: {
          hero: {
            title: "Avocado Sushi",
            description: "Avocado a vu le jour le 5 octobre 2012. Nous servons des sushis traditionnels et des créations fusionnant tradition, créativité et produits québécois locaux, dont nos fameux sushis desserts."
          },
          announcements: {
            title: "Annonces",
            content: "Nous avons apporté des modifications à notre tarification. Veuillez vous référer à notre nouveau menu ci-dessous."
          },
          navigation: {
            orderButtonText: "Commander",
            orderButtonUrl: "https://avocadosushi-restaurant.order-online.ai/#/",
            reserveButtonText: "Réserver",
            reserveButtonUrl: "https://widgets.libroreserve.com/WEB/QC017111388322/book?lang=fr"
          },
          menu: {
            title: "Menu",
            description: "Découvrez notre délicieuse sélection de sushis traditionnels et de plats fusion créatifs.",
            menuUrl: "",
            linkText: "Cliquez ici pour voir le menu complet"
          },
          oceanwise: {
            title: "Certification Oceanwise",
            description: "Ocean Wise est un programme de conservation créé pour informer les consommateurs et les entreprises..."
          },
          contact: {
            title: "Contactez-nous",
            subtitle: "Entrez en contact avec Avocado Sushi du Village",
            businessName: "Avocado Sushi du Village",
            address: "270 ch. Bord-du-Lac - Lakeshore\nPointe-Claire, QC, H9S 4K9",
            phone: "514.505.4055",
            email: "info@avocadosushi.ca",
            hours: "Mardi - Dimanche: 16h00 - 21h00\nLundi: Fermé",
            reservationNote: "Il est recommandé de réserver à l'avance."
          }
        }
      },
      about: {
        en: {
          hero: {
            title: "Our Story",
            subtitle: "The journey of Avocado Sushi du Village"
          },
          story: {
            intro: "It all began in high school, with two childhood friends dreaming that one day, they would open their own cozy restaurant in the heart of historic Pointe Claire Village.",
            dominique_story: "Dominique grew up in Pointe Claire and dreamed of opening her own bistro since the age of 12. After living in Ireland, Westmount and Plateau Mont-Royal, Dominique returned to the West Island.",
            location_story: "There were many vacant spaces, but we knew we had found the perfect location when the owner of 270 Lakeshore Road told us he had two cats named Sushi and Sashimi!",
            conclusion: "Almost a decade later, Avocado continues to be the place to be for local businesspeople, families and even out of towners who have a craving for all things sushi."
          },
          seo: {
            metaTitle: "Our Story - Avocado Sushi du Village",
            metaDescription: "Learn about the story behind Avocado Sushi du Village, from childhood dreams to becoming Pointe-Claire's favorite sushi destination."
          }
        },
        fr: {
          hero: {
            title: "Notre Histoire",
            subtitle: "L'histoire d'Avocado Sushi du Village"
          },
          story: {
            intro: "Tout a commencé à l'école secondaire, avec deux amies d'enfance rêvant qu'un jour, ils ouvriraient leur propre petit restaurant au cœur du village historique de Pointe-Claire.",
            dominique_story: "Dominique a grandi à Pointe-Claire et rêvait d'ouvrir son propre bistro depuis l'âge de 12 ans. Après avoir vécu en Irlande, à Westmount et sur le Plateau Mont-Royal, Dominique est revenue dans l'Ouest-de-l'Île.",
            location_story: "Il y avait de nombreux espaces vacants, mais nous avons su que nous avions trouvé l'emplacement idéal lorsque le propriétaire du 270 Chemin Bord-du-lac nous a dit qu'il avait deux chats nommés Sushi et Sashimi !",
            conclusion: "Près de dix ans plus tard, Avocado continue d'être le lieu de rendez-vous des gens d'affaires locaux, des familles et même des étrangers qui ont envie de sushis."
          },
          seo: {
            metaTitle: "Notre Histoire - Avocado Sushi du Village",
            metaDescription: "Découvrez l'histoire derrière Avocado Sushi du Village, des rêves d'enfance à devenir la destination sushi favorite de Pointe-Claire."
          }
        }
      },
      contact: {
        en: {
          hero: {
            title: "Contact Us",
            subtitle: "Get in touch with Avocado Sushi du Village"
          },
          contact: {
            phone: "514.505.4055",
            email: "info@avocadosushi.ca",
            address: "270 ch. Bord-du-Lac - Lakeshore\nPointe-Claire, QC, H9S 4K9",
            businessName: "Avocado Sushi du Village"
          },
          hours: {
            hours: "Tuesday - Sunday: 4:00 PM - 9:00 PM\nMonday: Closed",
            reservationNote: "Reservations are recommended in advance.",
            specialInstructions: "Please call for large groups or special events."
          },
          seo: {
            metaTitle: "Contact - Avocado Sushi du Village",
            metaDescription: "Contact Avocado Sushi du Village. Phone, email, address, and hours for the best sushi in Pointe-Claire."
          }
        },
        fr: {
          hero: {
            title: "Contactez-nous",
            subtitle: "Entrez en contact avec Avocado Sushi du Village"
          },
          contact: {
            phone: "514.505.4055",
            email: "info@avocadosushi.ca",
            address: "270 ch. Bord-du-Lac - Lakeshore\nPointe-Claire, QC, H9S 4K9",
            businessName: "Avocado Sushi du Village"
          },
          hours: {
            hours: "Mardi - Dimanche: 16h00 - 21h00\nLundi: Fermé",
            reservationNote: "Il est recommandé de réserver à l'avance.",
            specialInstructions: "Veuillez appeler pour les grands groupes ou événements spéciaux."
          },
          seo: {
            metaTitle: "Contact - Avocado Sushi du Village",
            metaDescription: "Contactez Avocado Sushi du Village. Téléphone, courriel, adresse et heures pour le meilleur sushi à Pointe-Claire."
          }
        }
      },
      footer: {
        en: {
          links: {
            socialFacebook: "https://www.facebook.com/avocado.sushi.du.village/",
            socialInstagram: "https://www.instagram.com/avocadosushiduvillage/"
          },
          text: {
            copyright: "All rights reserved.",
            additionalInfo: ""
          }
        },
        fr: {
          links: {
            socialFacebook: "https://www.facebook.com/avocado.sushi.du.village/",
            socialInstagram: "https://www.instagram.com/avocadosushiduvillage/"
          },
          text: {
            copyright: "Tous droits réservés.",
            additionalInfo: ""
          }
        }
      }
    }
    
    return defaults[page]?.[lang] || {}
  }

  const switchLanguage = async (newLang) => {
    setEditingLanguage(newLang)
  }

  const switchPage = async (newPage) => {
    setCurrentPage(newPage)
  }

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const docRef = doc(db, 'content', currentPage)
      const docSnap = await getDoc(docRef)
      
      let existingData = {}
      if (docSnap.exists()) {
        existingData = docSnap.data()
      }

      const updatedData = {
        ...existingData,
        [editingLanguage]: data
      }

      await setDoc(docRef, updatedData)
      showNotification(`${pages[currentPage].title} (${editingLanguage.toUpperCase()}) content saved successfully!`)
    } catch (error) {
      console.error('Error saving content:', error)
      showNotification('Error saving content. Please try again.')
    }
    setLoading(false)
  }

  const showNotification = (message) => {
    const notification = document.createElement('div')
    notification.textContent = message
    notification.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      background: #4a7c59;
      color: white;
      padding: 15px 25px;
      border-radius: 8px;
      z-index: 10000;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    `
    document.body.appendChild(notification)
    setTimeout(() => notification.remove(), 4000)
  }

  const renderFormFields = () => {
    const currentPageConfig = pages[currentPage]
    if (!currentPageConfig) return null

    const sectionIcons = {
      hero: faHome,
      announcements: faBullhorn,
      navigation: faLink,
      menu: faUtensils,
      oceanwise: faFish,
      contact: faEnvelope,
      story: faUser,
      hours: faClock,
      seo: faSearch,
      links: faLink,
      text: faCopyright
    }

    return Object.entries(currentPageConfig.sections).map(([sectionKey, section]) => (
      <Section key={sectionKey}>
        <h4>
          <FontAwesomeIcon icon={sectionIcons[sectionKey] || faEdit} style={{ marginRight: '8px' }} />
          {section.title}
        </h4>
        {section.fields.map(field => (
          <FormGroup key={field}>
            <label>{formatFieldLabel(field)}:</label>
            {field.includes('description') || field.includes('content') || field.includes('story') || field.includes('hours') ? (
              <textarea {...register(`${sectionKey}.${field}`)} rows={4} />
            ) : field.includes('Url') ? (
              <input {...register(`${sectionKey}.${field}`)} type="url" />
            ) : field.includes('email') ? (
              <input {...register(`${sectionKey}.${field}`)} type="email" />
            ) : field.includes('phone') ? (
              <input {...register(`${sectionKey}.${field}`)} type="tel" />
            ) : (
              <input {...register(`${sectionKey}.${field}`)} />
            )}
          </FormGroup>
        ))}
      </Section>
    ))
  }

  const formatFieldLabel = (field) => {
    return field
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .replace('Url', 'URL')
  }

  const logoutAdmin = () => {
    setIsAdmin(false)
    setIsOpen(false)
    localStorage.removeItem('avocado-admin')
    showNotification('Admin mode disabled.')
  }

  return (
    <>
      <AdminToggle 
        onClick={() => setIsOpen(!isOpen)} 
        isAdmin={isAdmin}
        style={{ display: isAdmin ? 'block' : 'none' }}
      >
        <FontAwesomeIcon icon={faCog} />
      </AdminToggle>
      
      {isOpen && (
        <AdminPanel>
          <AdminHeader>
            <h3>Content Manager</h3>
            <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton>
          </AdminHeader>
          
          <AdminContent>
            <AdminSection>
              <AdminButton onClick={() => setIsAdmin(!isAdmin)} primary={isAdmin}>
                {isAdmin ? (
                  <>
                    <FontAwesomeIcon icon={faCog} style={{ marginRight: '8px' }} />
                    Admin Mode ON
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCog} style={{ marginRight: '8px' }} />
                    Admin Mode OFF
                  </>
                )}
              </AdminButton>
              
              {isAdmin && (
                <LogoutButton onClick={logoutAdmin}>
                  Exit Admin Mode
                </LogoutButton>
              )}
            </AdminSection>

            {isAdmin && (
              <>
                {/* Page Switcher */}
                <PageSection>
                  <h4>
                    <FontAwesomeIcon icon={faEdit} style={{ marginRight: '8px' }} />
                    Select Page to Edit
                  </h4>
                  <PageButtons>
                    {Object.entries(pages).map(([pageKey, page]) => (
                      <PageButton 
                        key={pageKey}
                        onClick={() => switchPage(pageKey)}
                        active={currentPage === pageKey}
                      >
                        {page.title}
                      </PageButton>
                    ))}
                  </PageButtons>
                </PageSection>

                {/* Language Switcher */}
                <LanguageSection>
                  <h4>
                    <FontAwesomeIcon icon={faLanguage} style={{ marginRight: '8px' }} />
                    Language
                  </h4>
                  <LanguageButtons>
                    <LanguageButton 
                      onClick={() => switchLanguage('en')}
                      active={editingLanguage === 'en'}
                    >
                      English
                    </LanguageButton>
                    <LanguageButton 
                      onClick={() => switchLanguage('fr')}
                      active={editingLanguage === 'fr'}
                    >
                      Français
                    </LanguageButton>
                  </LanguageButtons>
                </LanguageSection>

                <CurrentEditingInfo>
                  Editing: <strong>{pages[currentPage]?.title}</strong> in <strong>{editingLanguage.toUpperCase()}</strong>
                </CurrentEditingInfo>

                <form onSubmit={handleSubmit(onSubmit)}>
                  {renderFormFields()}

                  <ActionButtons>
                    <SubmitButton type="submit" disabled={!isDirty || loading}>
                      {loading ? (
                        <>
                          <FontAwesomeIcon icon={faSpinner} spin style={{ marginRight: '8px' }} />
                          Saving...
                        </>
                      ) : (
                        <>
                          <FontAwesomeIcon icon={faSave} style={{ marginRight: '8px' }} />
                          Save {pages[currentPage]?.title} ({editingLanguage.toUpperCase()})
                        </>
                      )}
                    </SubmitButton>
                  </ActionButtons>
                </form>
              </>
            )}
          </AdminContent>
        </AdminPanel>
      )}
    </>
  )
}

// Styled Components
const AdminToggle = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  background: ${props => props.isAdmin ? '#ff6b35' : '#4a7c59'};
  color: white;
  border: none;
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  
  &:hover { 
    transform: scale(1.1);
    
    svg {
      transform: rotate(90deg);
    }
  }
  
  svg {
    transition: transform 0.3s ease;
  }
`

const AdminPanel = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 500px;
  height: 100vh;
  background: white;
  box-shadow: -4px 0 20px rgba(0,0,0,0.2);
  z-index: 9998;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100vw;
  }
`

const AdminHeader = styled.div`
  background: #4a7c59;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h3 { margin: 0; font-size: 1.3rem; }
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px;
  border-radius: 3px;
  
  &:hover { background: rgba(255,255,255,0.2); }
`

const AdminContent = styled.div`
  padding: 20px;
`

const AdminSection = styled.div`
  margin-bottom: 25px;
`

const AdminButton = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${props => props.primary ? `
    background: #ff6b35;
    color: white;
    &:hover { background: #ff5722; }
  ` : `
    background: #f5f5f5;
    color: #333;
    &:hover { background: #e0e0e0; }
  `}
  
  svg {
    transition: all 0.3s ease;
  }
`

const LogoutButton = styled.button`
  width: 100%;
  padding: 12px;
  border: 2px solid #ff6b35;
  border-radius: 25px;
  background: white;
  color: #ff6b35;
  cursor: pointer;
  font-weight: 600;
  margin-top: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #ff6b35;
    color: white;
    transform: translateY(-2px);
  }
`

const PageSection = styled.div`
  margin-bottom: 25px;
  border: 2px solid #2196F3;
  border-radius: 10px;
  padding: 20px;
  background: #E3F2FD;
  
  h4 {
    color: #1976D2;
    margin-bottom: 15px;
    text-align: center;
  }
`

const PageButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`

const PageButton = styled.button`
  padding: 12px;
  border: 2px solid #2196F3;
  border-radius: 25px;
  background: ${props => props.active ? '#2196F3' : 'white'};
  color: ${props => props.active ? 'white' : '#2196F3'};
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#1976D2' : '#E3F2FD'};
  }
`

const LanguageSection = styled.div`
  margin-bottom: 25px;
  border: 2px solid #4a7c59;
  border-radius: 10px;
  padding: 20px;
  background: #f0f8ff;
  
  h4 {
    color: #4a7c59;
    margin-bottom: 15px;
    text-align: center;
  }
`

const LanguageButtons = styled.div`
  display: flex;
  gap: 10px;
`

const LanguageButton = styled.button`
  flex: 1;
  padding: 12px;
  border: 2px solid #4a7c59;
  border-radius: 25px;
  background: ${props => props.active ? '#4a7c59' : 'white'};
  color: ${props => props.active ? 'white' : '#4a7c59'};
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#3d6b4a' : '#f0f8ff'};
  }
`

const CurrentEditingInfo = styled.div`
  background: #fff3cd;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 25px;
  border-left: 4px solid #ff6b35;
  font-weight: 500;
  text-align: center;
  color: #ff6b35;
`

const Section = styled.div`
  margin-bottom: 30px;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 20px;
  background: #fafafa;
  
  h4 {
    color: #4a7c59;
    margin-bottom: 15px;
    font-size: 1.1rem;
  }
`

const FormGroup = styled.div`
  margin-bottom: 15px;
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #333;
  }
  
  input, textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-family: inherit;
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: #ff6b35;
      box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
    }
  }
  
  textarea {
    resize: vertical;
    font-family: inherit;
  }
`

const ActionButtons = styled.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid #eee;
`

const SubmitButton = styled.button`
  width: 100%;
  background: #4a7c59;
  color: white;
  border: none;
  padding: 18px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background: #3d6b4a;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(74, 124, 89, 0.3);
  }
  
  svg {
    transition: all 0.3s ease;
  }
`

export default FirebaseCMS