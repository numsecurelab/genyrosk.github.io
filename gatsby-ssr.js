import React from 'react'
import { Root } from './src/components/Root'

export const wrapPageElement = ({ element }) => {
  return (
    <Root>{element}</Root>
  )
}
