import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../lib/firebase'

const FirebaseCMS = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(false)
  const [editingLanguage, setEditingLanguage] = useState('en')
  
  const { register, handleSubmit, reset, formState: { isDirty } } = useForm()

  useEffect(() => {
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
  }, [])

  const loadContent = async () => {
    try {
      const docRef = doc(db, 'content', 'homepage')
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        const data = docSnap.data()
        reset(data[editingLanguage] || getDefaultContent(editingLanguage))
      } else {
        reset(getDefaultContent(editingLanguage))
      }
    } catch (error) {
      console.error('Error loading content:', error)
    }
  }

  const getDefaultContent = (lang) => {
    const defaults = {
      en: {
        hero: {
          title: "Avocado Sushi",
          description: "Avocado sushi was founded on the 5th of October, 2012. We serve traditional sushi and traditional creations fusing tradition, creativity and local Quebec products, including our famous sushi desserts."
        },
        about: {
          title: "Our Story",
          description: "It all began in high school, with two childhood friends dreaming that one day, they would open their own cozy restaurant in the heart of historic Pointe Claire Village."
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
        contact: {
          phone: "514.505.4055",
          email: "info@avocadosushi.ca",
          address: "270 ch. Bord-du-Lac - Lakeshore\nPointe-Claire, QC, H9S 4K9"
        },
        oceanwise: {
          title: "Certification Oceanwise",
          description: "Ocean Wise is a conservation program created to educate consumers and businesses on issues related to fisheries and aquaculture practices..."
        },
      },
      fr: {
        hero: {
          title: "Avocado Sushi",
          description: "Avocado a vu le jour le 5 octobre 2012. Nous servons des sushis traditionnels et des créations fusionnant tradition, créativité et produits québécois locaux, dont nos fameux sushis desserts."
        },
        about: {
          title: "Notre Histoire",
          description: "Tout a commencé à l'école secondaire, avec deux amies d'enfance rêvant qu'un jour, ils ouvriraient leur propre petit restaurant au cœur du village historique de Pointe-Claire."
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
        contact: {
          phone: "514.505.4055",
          email: "info@avocadosushi.ca",
          address: "270 ch. Bord-du-Lac - Lakeshore\nPointe-Claire, QC, H9S 4K9"
        },
        oceanwise: {
          title: "Certification Oceanwise", 
          description: "Ocean Wise est un programme de conservation créé pour informer les consommateurs et les entreprises..."
        },
      }
    }
    return defaults[lang]
  }

  const toggleAdmin = () => {
    const newStatus = !isAdmin
    setIsAdmin(newStatus)
    localStorage.setItem('avocado-admin', newStatus.toString())
  }

  const logoutAdmin = () => {
    setIsAdmin(false)
    setIsOpen(false)
    localStorage.removeItem('avocado-admin')
    showNotification('Admin mode disabled. Website is now in visitor mode.')
  }

  const switchLanguage = async (newLang) => {
    setEditingLanguage(newLang)
    
    try {
      const docRef = doc(db, 'content', 'homepage')
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        const data = docSnap.data()
        reset(data[newLang] || getDefaultContent(newLang))
      } else {
        reset(getDefaultContent(newLang))
      }
    } catch (error) {
      console.error('Error loading content for language:', error)
    }
  }

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const docRef = doc(db, 'content', 'homepage')
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
      showNotification(`${editingLanguage.toUpperCase()} content saved successfully! Changes are now live.`)
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

  return (
    <>
      <AdminToggle 
        onClick={() => setIsOpen(!isOpen)} 
        isAdmin={isAdmin}
        style={{ display: isAdmin ? 'block' : 'none' }}
      >
        ⚙️
      </AdminToggle>
      
      {isOpen && (
        <AdminPanel>
          <AdminHeader>
            <h3>Content Manager</h3>
            <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton>
          </AdminHeader>
          
          <AdminContent>
            <AdminSection>
              <AdminButton onClick={toggleAdmin} primary={isAdmin}>
                {isAdmin ? '✅ Admin Mode ON' : '⭕ Admin Mode OFF'}
              </AdminButton>
              
              {isAdmin && (
                <LogoutButton onClick={logoutAdmin}>
                  🚪 Exit Admin Mode (Hide Gear Icon)
                </LogoutButton>
              )}
              
              {isAdmin && (
                <HelpText>
                  Currently editing: <strong>{editingLanguage.toUpperCase()}</strong> content
                </HelpText>
              )}
            </AdminSection>

            {isAdmin && (
              <>
                {/* Language Switcher */}
                <LanguageSection>
                  <h4>🌐 Editing Language</h4>
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

                <form onSubmit={handleSubmit(onSubmit)}>
                  <Section>
                    <h4>🏠 Hero Section</h4>
                    <FormGroup>
                      <label>Title:</label>
                      <input {...register('hero.title')} />
                    </FormGroup>
                    <FormGroup>
                      <label>Description:</label>
                      <textarea {...register('hero.description')} rows={4} />
                    </FormGroup>
                  </Section>

                  <Section>
                    <h4>ℹ️ About Section</h4>
                    <FormGroup>
                      <label>Title:</label>
                      <input {...register('about.title')} />
                    </FormGroup>
                    <FormGroup>
                      <label>Description:</label>
                      <textarea {...register('about.description')} rows={4} />
                    </FormGroup>
                  </Section>

                  <Section>
                    <h4>📢 Announcements</h4>
                    <FormGroup>
                      <label>Title:</label>
                      <input {...register('announcements.title')} />
                    </FormGroup>
                    <FormGroup>
                      <label>Content:</label>
                      <textarea {...register('announcements.content')} rows={3} />
                    </FormGroup>
                  </Section>

                  <Section>
                    <h4>🔗 Navigation Buttons</h4>
                    <FormGroup>
                      <label>Order Button Text:</label>
                      <input {...register('navigation.orderButtonText')} />
                    </FormGroup>
                    <FormGroup>
                      <label>Order Button URL:</label>
                      <input {...register('navigation.orderButtonUrl')} type="url" />
                    </FormGroup>
                    <FormGroup>
                      <label>Reserve Button Text:</label>
                      <input {...register('navigation.reserveButtonText')} />
                    </FormGroup>
                    <FormGroup>
                      <label>Reserve Button URL:</label>
                      <input {...register('navigation.reserveButtonUrl')} type="url" />
                    </FormGroup>
                  </Section>
                  <Section>
                    <h4>🌊 Ocean Wise Section</h4>
                    <FormGroup>
                      <label>Title:</label>
                      <input {...register('oceanwise.title')} />
                    </FormGroup>
                    <FormGroup>
                      <label>Description:</label>
                      <textarea {...register('oceanwise.description')} rows={5} />
                    </FormGroup>
                  </Section>

                  <ActionButtons>
                    <SubmitButton type="submit" disabled={!isDirty || loading}>
                      {loading ? '💾 Saving...' : `💾 Save ${editingLanguage.toUpperCase()} Content`}
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
  
  &:hover { transform: scale(1.1); }
`

const AdminPanel = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 450px;
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
  
  ${props => props.primary ? `
    background: #ff6b35;
    color: white;
    &:hover { background: #ff5722; }
  ` : `
    background: #f5f5f5;
    color: #333;
    &:hover { background: #e0e0e0; }
  `}
`

const HelpText = styled.p`
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
  margin-top: 10px;
  text-align: center;
  background: #fff3cd;
  padding: 10px;
  border-radius: 5px;
  border-left: 4px solid #ff6b35;
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
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background: #3d6b4a;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(74, 124, 89, 0.3);
  }
`

export default FirebaseCMS