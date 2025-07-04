import { useState, useEffect } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../lib/firebase'

export const useContent = (page = 'homepage') => {
  const [content, setContent] = useState({})
  const [allPageContent, setAllPageContent] = useState({})
  const [currentLanguage, setCurrentLanguage] = useState('en')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Detect language from URL
    const path = typeof window !== 'undefined' ? window.location.pathname : ''
    const isFrench = path.startsWith('/fr')
    setCurrentLanguage(isFrench ? 'fr' : 'en')
  }, [])

  useEffect(() => {
    if (!page) return

    setLoading(true)
    
    // Real-time listener for the specific page content
    const unsubscribe = onSnapshot(doc(db, 'content', page), (doc) => {
      if (doc.exists()) {
        const pageData = doc.data()
        setAllPageContent(pageData)
        
        // Set content for current language with fallbacks
        const currentContent = pageData[currentLanguage] || pageData.en || {}
        setContent(currentContent)
      } else {
        // Set default content if document doesn't exist
        setContent(getDefaultContent(page, currentLanguage))
      }
      setLoading(false)
    }, (error) => {
      console.error('Error fetching content:', error)
      setContent(getDefaultContent(page, currentLanguage))
      setLoading(false)
    })

    return () => unsubscribe()
  }, [page, currentLanguage])

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
    
    return defaults[page]?.[lang] || defaults[page]?.en || {}
  }

  // Utility function to get content from multiple pages
  const getPageContent = (pageName, section, field) => {
    if (allPageContent[pageName]) {
      const pageData = allPageContent[pageName][currentLanguage] || allPageContent[pageName].en || {}
      return pageData[section]?.[field] || getDefaultContent(pageName, currentLanguage)[section]?.[field] || ''
    }
    return getDefaultContent(pageName, currentLanguage)[section]?.[field] || ''
  }

  // Helper function to safely get nested content
  const getContent = (path, fallback = '') => {
    const keys = path.split('.')
    let result = content
    
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key]
      } else {
        return fallback
      }
    }
    
    return result || fallback
  }

  return {
    content,
    allPageContent,
    language: currentLanguage,
    setLanguage: setCurrentLanguage,
    loading,
    getPageContent, // Function to get content from other pages
    getContent, // Helper function for safe content access
    // For backward compatibility
    hero: content.hero || {},
    about: content.about || {},
    announcements: content.announcements || {},
    navigation: content.navigation || {},
    contact: content.contact || {},
    oceanwise: content.oceanwise || {},
    story: content.story || {},
    hours: content.hours || {},
    seo: content.seo || {},
    links: content.links || {},
    text: content.text || {}
  }
}

// Hook specifically for multi-page content (useful for components like footer that need data from multiple pages)
export const useMultiPageContent = () => {
  const [contentCache, setContentCache] = useState({})
  const [currentLanguage, setCurrentLanguage] = useState('en')

  useEffect(() => {
    // Detect language from URL
    const path = typeof window !== 'undefined' ? window.location.pathname : ''
    const isFrench = path.startsWith('/fr')
    setCurrentLanguage(isFrench ? 'fr' : 'en')

    // Subscribe to all content pages
    const pages = ['homepage', 'about', 'contact', 'footer']
    const unsubscribes = []

    pages.forEach(page => {
      const unsubscribe = onSnapshot(doc(db, 'content', page), (doc) => {
        if (doc.exists()) {
          setContentCache(prev => ({
            ...prev,
            [page]: doc.data()
          }))
        }
      })
      unsubscribes.push(unsubscribe)
    })

    return () => {
      unsubscribes.forEach(unsub => unsub())
    }
  }, [])

  const getContent = (page, section, field, fallback = '') => {
    const pageData = contentCache[page]
    if (pageData) {
      const langData = pageData[currentLanguage] || pageData.en || {}
      return langData[section]?.[field] || fallback
    }
    return fallback
  }

  return {
    contentCache,
    language: currentLanguage,
    getContent
  }
}