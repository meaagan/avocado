import { useState, useEffect } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../lib/firebase'

export const useContent = () => {
  const [content, setContent] = useState({
    en: {
      hero: { title: '', description: '' },
      about: { title: '', description: '' },
      announcements: { title: '', content: '' },
      navigation: { 
        orderButtonText: 'Order Online',
        orderButtonUrl: 'https://avocadosushi-restaurant.order-online.ai/#/',
        reserveButtonText: 'Reserve Online',
        reserveButtonUrl: 'https://widgets.libroreserve.com/WEB/QC017111388322/book'
      },
      contact: { phone: '', email: '', address: '' }
    },
    fr: {
      hero: { title: '', description: '' },
      about: { title: '', description: '' },
      announcements: { title: '', content: '' },
      navigation: { 
        orderButtonText: 'Commander',
        orderButtonUrl: 'https://avocadosushi-restaurant.order-online.ai/#/',
        reserveButtonText: 'Réserver',
        reserveButtonUrl: 'https://widgets.libroreserve.com/WEB/QC017111388322/book?lang=fr'
      },
      contact: { phone: '', email: '', address: '' }
    }
  })

  const [currentLanguage, setCurrentLanguage] = useState('en')

  useEffect(() => {
    const path = typeof window !== 'undefined' ? window.location.pathname : ''
    const isFrench = path.startsWith('/fr')
    setCurrentLanguage(isFrench ? 'fr' : 'en')

    const unsubscribe = onSnapshot(doc(db, 'content', 'homepage'), (doc) => {
      if (doc.exists()) {
        setContent(doc.data())
      }
    })

    return () => unsubscribe()
  }, [])

  return {
    content: content[currentLanguage] || content.en,
    allContent: content,
    language: currentLanguage,
    setLanguage: setCurrentLanguage
  }
}