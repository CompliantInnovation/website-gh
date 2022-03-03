import React, {useEffect} from 'react'
import { useRouter } from 'next/router'
import { ContextProvider } from '../context/context'
import '../styles/global.css'


export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}
