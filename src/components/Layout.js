import React from 'react'
import styled from 'styled-components'

import { useMobileView } from '../utils/hooks'
import { rhythm } from '../utils/typography'
import { HeaderNav, HeaderNavWithProfile } from './Header'
import { Footer } from './Footer'


const FixedBackground = styled.div``
const Body = styled.div`
  height: 100%;
  width: 100%;
  background: ${({ isMobile, theme }) => !isMobile && theme.bodyBackground };
  min-height: 100vh;

  ${FixedBackground} {
    /* background-image: linear-gradient(
      135deg, #4c7be0 31.82%, #a378de 31.82%,
      #a378de 50%, #4c7be0 50%, #4c7be0 81.82%,
      #a378de 81.82%, #a378de 100%
    );
    background-size: 15.56px 15.56px; */
    background: ${({ isMobile, theme }) => isMobile && theme.bodyBackground };
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
  }
`

//
// Main section
//
const Main = styled.main`
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), -0px -2px 4px rgba(0, 0, 0, 0.05);
  /* border-radius: 28px; */
  /* display: flex; */

  /* background: white; // important */
  background: ${({ theme }) => theme.mainSectionBackground };
  color: ${({ theme }) => theme.mainTextColor };

  // sticky to go over the sticky header
  position: sticky;
  z-index: 100;
`

const MainContent = styled.div`
  width: 100%;
  padding: 20px 0;
`

const MainTitleWrapper = styled.div``
const MainTitleUnderline = styled.div`
  width: 60px;
  height: 6px;
  background: ${({ theme }) => theme.colors.blue};
`
const _MainTitle = styled.div`
  margin: 0 15px 20px;
  font-size: ${rhythm(1)};
  font-weight: 400;
  font-family: Roboto;
`

export const MainTitle = ({ children }) => (
  <_MainTitle>
    <MainTitleWrapper>{children}</MainTitleWrapper>
    <MainTitleUnderline />
  </_MainTitle>
)

export const BaseLayout = ({ children }) => {
  const isMobile = useMobileView()

  return (
    <Body isMobile={isMobile}>
      <FixedBackground />
      { children }
      <Footer isMobile={isMobile}>© Evgeny Roskach</Footer>
    </Body>
  )
}

export const LayoutWithProfile = ({ children }) => {
  const isMobile = useMobileView()

  return (
    <BaseLayout>
      <HeaderNavWithProfile isMobile={isMobile} />
      <Main>
        <MainContent>
          {children}
        </MainContent>
      </Main>
    </BaseLayout>
  )
}

export const LayoutJustNav = ({ children }) => {
  const isMobile = useMobileView()

  return (
    <BaseLayout>
      <HeaderNav isMobile={isMobile} />
      <Main>
        {children}
      </Main>
    </BaseLayout>
  )
}
