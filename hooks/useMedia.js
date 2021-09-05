import { useState, useEffect } from 'react'

export function useMedia(query) {
  let [matches, setMatches] = useState()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let media = window.matchMedia(query)
      if (media.matches !== matches) {
        setMatches(media.matches)
      }
      let listener = () => setMatches(media.matches)
      media.addListener(listener)
      return () => media.removeListener(listener)
    }
  }, [query])

  return matches
}
