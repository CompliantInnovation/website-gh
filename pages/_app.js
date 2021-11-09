import React from 'react'
import { ContextProvider } from '../context/context'
import '../styles/global.css'


export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}
