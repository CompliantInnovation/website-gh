import React, { useContext, useEffect } from 'react'
import { Context } from '../context/context'
import Home from '../nav-pages/home'
import Provider from '../nav-pages/provider'
import MedicalDevice from '../nav-pages/medical-device'
import Company from '../nav-pages/company'

export default function Index() {
  const { state } = useContext(Context)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [state.page])

  if (state) {
    switch (state.page) {
      case 'home':
        return <Home />
      case 'provider':
        return <Provider />
      case 'medical-device':
        return <MedicalDevice />
      case 'company':
        return <Company />
      default:
        return null
    }
  } else {
    return <div></div>
  }
}
