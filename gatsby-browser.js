/*
 * Prism default themes:
 * -----------------------
 * - default (prism.css)
 * - coy (prism-coy.css)
 * - dark
 * - funky
 * - okaidia
 * - solarizedlight
 * - tomorrow
 * - twilight
 */
/*
 * Prism additional themes:
 * ------------------------
 * - a11y-dark
 * - atom-dark
 * - base16-ateliersulphurpool.light
 * - cb
 * - dracula
 * - duotone-dark
 * - duotone-earth
 * - duotone-forest
 * - duotone-light
 * - duotone-sea
 * - duotone-space
 * - ghcolors
 * - material-dark
 * - material-light
 * - material-oceanic
 * - pojoaque
 * - shades-of-purple
 * - synthwave84
 * - vs
 * - xonokai
 */
// require("prismjs/themes/prism-dark.css")
require("prism-themes/themes/prism-dracula.css")
// require("prismjs/themes/prism.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("prismjs/plugins/command-line/prism-command-line.css")

/*
 * Base css
 */
require('./src/assets/scss/init.scss')

import React from 'react'
import { Root } from './src/components/Root'

export const wrapRootElement = ({ element }) => {
  return (
    <Root>{element}</Root>
  )
}
