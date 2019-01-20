import Typography from "typography"
import stAnnesTheme from "typography-theme-st-annes"
import fairyGateTheme from "typography-theme-fairy-gates"
import funstonTheme from "typography-theme-funston"

const typography = new Typography(stAnnesTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
