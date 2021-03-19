import { useEffect, useState } from 'react'

const getMobileDetect = (userAgent) => {
  const isAndroid = () => Boolean(userAgent.match(/Android/i))
  const isBB = () => Boolean(userAgent.match(/BlackBerry/i))
  const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i))
  const isOpera = () => Boolean(userAgent.match(/Opera Mini/i))
  const isWindows = () => Boolean(userAgent.match(/IEMobile/i))
  const isSSR = () => Boolean(userAgent.match(/SSR/i))

  const isMobile = () => Boolean(isAndroid() || isBB() || isIos() || isOpera() || isWindows())
  const isDesktop = () => Boolean(!isMobile() && !isSSR())
  return {
    isMobile,
    isDesktop,
    isAndroid,
    isBB,
    isIos,
    isSSR
  }
}

export const useMobileDetect = () => {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent
  const devices = getMobileDetect(userAgent)
  return devices
}

export const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    // Add event listener
    window.addEventListener("resize", handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}


export const useMobileView = () => {
  const { isMobile } = useMobileDetect()
  const windowSize = useWindowSize()
  const isMobileView = isMobile() || (windowSize.width < 600)
  return isMobileView
}
