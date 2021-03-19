import React from 'react'
import styled, { css } from 'styled-components'

import { ProfileImage } from './Profile'
import { Nav } from './NavBar'

// const HeaderDiv = styled.div``
const NavWrapper = styled.div`
  width: 100%;
  // making it sticky to the top in mobile view
  position: sticky;
  z-index: 1;
  ${({ isMobile }) => isMobile && css`top: 0;`}
`
const SimpleNavWrapper = styled(NavWrapper)`
  height: 80px;
`
const NavWithProfileWrapper = styled(NavWrapper)`
  margin-bottom: 30px;
`

const ProfileDescription = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  font-family: Roboto;
  padding: 12px;
`
const ProfilePictureWrapper = styled.div`
  margin: 12px;
  display: flex;
  justify-content: flex-start;
`
const ProfilePicture = styled.div`
  width: 212px;
  height: 212px;
  margin-bottom: 4px;
  background: ${({ theme }) => theme.profilePictureBg };
  box-shadow: 0 4px 8px rgba(30, 30, 30, 0.2);
  /* bg-blur */
  backdrop-filter: blur(20px);
  border-radius: 50%;
  overflow: hidden;

  /** image mask */
  /* clip-path: circle(50% at 55% 55%); */

  img {
    border-radius: 50%;
  }
`
const spanStyle = ({ theme }) => css`
  color: ${theme.profileDescriptionText};
  background-color: ${theme.profileDescriptionBg};
  box-shadow:
    4px 4px 0 ${theme.profileDescriptionBg},
    -4px -4px 0 ${theme.profileDescriptionBg},
    4px -4px 0 ${theme.profileDescriptionBg},
    -4px 4px 0 ${theme.profileDescriptionBg};
`
const ProfileH1 = styled.div`
  font-size: 2.0572rem;
  margin-bottom: 0px;
  font-weight: 300;

  span {
    ${spanStyle}
  }
`
const ProfileH2 = styled.div`
  font-size: 1.51572rem;
  margin-bottom: 0px;
  font-weight: 300;

  span {
    ${spanStyle}
  }
`
const ProfilePg = styled.div`
  font-size: 1.09572rem;
  margin: 12px 0 12px 0;
  span {
    ${spanStyle}
  }
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  ${({ isMobile }) => isMobile
  ? css`
    margin: 20px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${ProfilePictureWrapper} {
      order: 1;
    }
    ${ProfileDescription} {
      order: 2;
    }
  `
  : css`
    margin: 40px 0;
  `}
`

const Profile = ({ isMobile }) => {
  return (
    <Wrapper isMobile={isMobile}>
      <ProfileDescription>
        <ProfileH1>
          <span>👋  Hi there !</span>
        </ProfileH1>
        <ProfileH2>
          <span> I'm Evgeny. I'm a software engineer and data scientist.</span>
        </ProfileH2>
        <ProfilePg>
          <span>
            On this site I like to write about programming and all things data. You will find Python tutorials 🐍 &nbsp; and (soon) much more.
          </span>
        </ProfilePg>
      </ProfileDescription>
      <ProfilePictureWrapper>
        <ProfilePicture>
          <ProfileImage />
        </ProfilePicture>
      </ProfilePictureWrapper>
    </Wrapper>
  )
}

export const HeaderNavWithProfile = ({ isMobile }) => {
  return (
    <NavWithProfileWrapper isMobile={isMobile}>
      <Nav isMobile={isMobile} />
      <Profile isMobile={isMobile} />
    </NavWithProfileWrapper>
  )
}

export const HeaderNav = ({ isMobile }) => {
  return (
    <SimpleNavWrapper isMobile={isMobile}>
      <Nav isMobile={isMobile} />
    </SimpleNavWrapper>
  )
}
