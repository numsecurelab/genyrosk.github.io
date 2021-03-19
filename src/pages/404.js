import React from 'react'
import styled from 'styled-components'

import { LayoutJustNav, MainTitle } from '../components/Layout'
import { SEO } from '../components/SEO'

const Content = styled.div`
  max-width: 550px;
  margin: 20px auto;
  padding: 20px;
`

const NotFoundPage = () => (
  <LayoutJustNav>
    <SEO title="404: Not found" />
    <Content>
      <MainTitle>404 Not Found</MainTitle>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Content>
  </LayoutJustNav>
)

export default NotFoundPage
