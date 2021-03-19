import React from 'react'
import { ThemeProvider } from 'styled-components'

import { useDarkModeTheme, DarkModeContext } from '../styles/theme'
import { FontsDef } from '../styles/fonts'
import { GlobalStyle } from '../styles/global'

export const Root = ({ children }) => {
  const { isDark, theme, toggleDarkMode, setIsDark } = useDarkModeTheme()

  return (
    <>
      <GlobalStyle />
      <FontsDef />
      <ThemeProvider theme={theme}>
        <DarkModeContext.Provider value={{ isDark, toggleDarkMode, setIsDark }}>
          {children}
        </DarkModeContext.Provider>
      </ThemeProvider>
    </>
  )
}
