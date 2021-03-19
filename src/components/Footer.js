import React from 'react'
import styled, { css } from 'styled-components'

const FooterDiv = styled.div`
  margin-top: 80px;
  color: ${({ theme }) => theme.profileDescriptionText };
  position: sticky;
  display: flex;
  justify-content: center;
  z-index: 1;
  ${({ isMobile }) => isMobile && css`bottom: 0;`}
`
const FooterContent = styled.div``

export const Footer = ({ children }) => (
  <FooterDiv>
    <FooterContent>
      {children}
    </FooterContent>
  </FooterDiv>
)
