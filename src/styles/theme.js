import { useState, useEffect, createContext } from 'react'

const DARK = 'dark'
const LIGHT = 'light'

const defaultTheme = {}

const blue = '#3B7CDD'
const darkerBlue = '#2d7fcc'

// default mode text colors
const black = 'rgb(30, 30, 30)'
const lighterblack = 'rgb(100,100,100)'

// dark mode
const darkBg = 'rgba(21, 19, 30, 1)'
const secondaryDarkBg = 'rgba(34, 35, 40, 1)'
const tertiaryDarkBg = 'rgba(47, 49, 54, 1)'
const emphasisWhiteText = 'rgba(255, 255, 255, 0.87)'
const secondaryWhiteText = 'rgba(255, 255, 255, 0.60)'
// const disabledWhiteText = 'rgba(255, 255, 255, 0.38)'

// tags
const purple = 'rgb(150 106 207)'
const lightPurple = 'rgb(247 230 255)'

const colors = {
  blue,
  darkerBlue,
  black,
  lighterblack,
  darkBg,
  secondaryDarkBg,
  tertiaryDarkBg,
  emphasisWhiteText,
  secondaryWhiteText,
  purple,
  lightPurple,
}

const lightTheme = {
  colors,
  ...defaultTheme,

  // bodyBackground: 'linear-gradient(172.88deg, #7CC0FF 0%, #001AFF 47.92%, #D16BA5 100%)',
  bodyBackground: '#f8fafc',
  profileDescriptionText: black,
  profileDescriptionBg: 'transparent',
  profilePictureBg: 'rgba(255, 255, 255, 0.3);',
  mainTextColor: black,
  secondaryTextColor: lighterblack,
  // mainSectionBackground: 'white',
  mainSectionBackground: 'rgba(255, 255, 255, 1)',
  navBtn: {
    bg: 'transparent',
    text: black,
    border: 'transparent',
    activeBg: black,
    activeText: 'white',
    hoverBg: 'rgba(100, 100, 100, 0.1)',
    hoverText: black,
  },
  btn: {
    bg: blue,
    text: 'white',
    hoverBg: darkerBlue,
    hoverText: 'white',
  },
  tag: {
    background: lightPurple,
    color: purple,
  },
}

const darkTheme = {
  colors,
  ...defaultTheme,
  bodyBackground: darkBg,
  profileDescriptionText: emphasisWhiteText,
  profileDescriptionBg: 'transparent',
  profilePictureBg: 'rgba(255, 255, 255, 0.3);',
  mainTextColor: emphasisWhiteText,
  secondaryTextColor: secondaryWhiteText,
  mainSectionBackground: secondaryDarkBg,
  navBtn: {
    bg: tertiaryDarkBg,
    text: emphasisWhiteText,
    border: 'transparent',
    activeBg: emphasisWhiteText,
    activeText: darkBg,
    hoverBg: 'rgba(250, 251, 255, 0.175)',
    hoverText: emphasisWhiteText,
  },
  btn: {
    bg: blue,
    text: emphasisWhiteText,
    hoverBg: darkerBlue,
    hoverText: emphasisWhiteText,
  },
  tag: {
    background: purple,
    color: lightPurple,
  },
}

export const useTheme = (_theme) => {
  const initialTheme = _theme === DARK ? DARK : LIGHT
  const [themeName, setTheme] = useState(initialTheme)
  const theme = themeName === DARK ? darkTheme : lightTheme
  const toggleTheme = () => {
    setTheme(themeName => themeName === LIGHT ? DARK : LIGHT)
  }
  return [theme, toggleTheme]
}

export const DarkModeContext = createContext({})

export const useDarkModeTheme = () => {
  // initialize as false and wait for render
  const [isDark, _setIsDark] = useState(false)
  const theme = isDark ? darkTheme : lightTheme

  // get localStorage value upon render
  useEffect(() => {
    const isLocalDark = window.localStorage.getItem('theme') === 'dark'
    _setIsDark(isLocalDark)
  }, [])

  //
  const toggleDarkMode = () => {
    window.localStorage.setItem('theme', !isDark ? 'light' : 'dark')
    _setIsDark(isDark => !isDark)
  }

  const setIsDark = (isDark) => {
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light')
    _setIsDark(isDark)
  }

  // useEffect(() => {
  //   window.localStorage.setItem('theme', isDark)
  // }, [isDark])

  return { isDark, theme, toggleDarkMode, setIsDark }
}
