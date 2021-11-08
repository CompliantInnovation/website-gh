import React, { useContext } from 'react'
import { Context } from '../context/context'
import Home from '../nav-pages/home'
import Provider from '../nav-pages/provider'
import MedicalDevice from '../nav-pages/medical-device'
import Company from '../nav-pages/company'

export default function Index() {
  const { state } = useContext(Context)
  if(state) {  
    switch(state.route) {
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
    return <div>No state?</div>
  }

}
