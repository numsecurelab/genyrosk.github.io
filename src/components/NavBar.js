import { useContext } from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { FaGithub, FaLinkedin, FaHome, FaMoon, FaSun, FaExternalLinkAlt } from 'react-icons/fa'
import { IoNewspaper } from 'react-icons/io5'

import { DarkModeContext } from '../styles/theme'


const NavBarWrapper = styled.nav`
  max-width: 800px;
  /* min-width: 590px; */
  margin: 0 auto;
  display: flex;
  justify-content: center;
  overflow: scroll;
  /* border-bottom: 2px solid ${({ theme }) => theme.navBtn.text}; */

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  ${({ isMobile }) => isMobile
    ? css`
      margin: 0 auto;
      display: block;
      justify-content: center;
      overflow: scroll;
    `
    : css`
      margin: 0 auto;
      display: flex;
      justify-content: center;
      overflow: scroll;
    `
  }
`

const NavBar = styled.div`
  margin: 12px 0;
  display: inline-flex;

  & > * {
    margin: 0 5px;
  }
`

const NavPageBtn = styled.button`
  border-radius: 8px;
  border: none;
  padding: 10px 10px;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 0px 6px rgb(30, 30, 30, 0.2);

  ${({ active, theme }) => active ? css`` : css``}

  ${({ theme }) => css`
    background: ${theme.navBtn.bg};
    color: ${theme.navBtn.text};
    background-size: 200% auto;
    transition: background 0.135s;
    border: 2px solid ${theme.navBtn.border};

    &:hover, &:focus {
      background: ${theme.navBtn.hoverBg};
      background-position: right bottom;
      color: ${theme.navBtn.hoverText};
    }
  `}
  &:active, &:focus {
    outline: none;
  }

  display: flex;
  align-items: center;
  div {
    margin: 0 4px;
    display: flex;
    align-items: center;
  }

  svg {
    height: 20px;
    width: 20px;
  }
  /* background: linear-gradient(120deg, rgba(0, 120, 190, 0.6) 0%, rgba(255, 126, 147, 1.0) 100%); */
  /* change the direction of the change here */
  /* background-position: right center; */
`

const _Link = styled(Link)``

const SmallIcon = styled.div`
  svg {
    height: 13px;
    width: 13px;
  }
`

const A = styled.a`
  &:active, &:focus {
    outline: none;
  }
`

const ContactBtn = ({ url, children, active }) => {
  return (
    <A href={url || '#'} target="_blank">
      <NavPageBtn active={active}>
        {children}
      </NavPageBtn>
    </A>
  )
}

const ToggleBtn = styled.div`
  display: inline-flex;
  overflow: hidden;
  border-radius: 8px;
  padding: 0;
  cursor: pointer;
  white-space: nowrap;
`

// const HalfBtn = styled.div`
//   border: none;
//   overflow: hidden;
//   display: inline-block;
//   padding: 8px 8px;
//   display: flex;
//   align-items: center;

//   ${({ active, theme }) => active ? css`
//     background: ${theme.navBtn.activeBg};
//     color: ${theme.navBtn.activeText};
//   ` : css`
//     background: ${theme.navBtn.bg};
//     color: ${theme.navBtn.text};
//     &:hover, &:focus {
//       background: ${theme.navBtn.hoverBg};
//       color: ${theme.navBtn.hoverText};
//     }
//   `}
// `

const InvisibleBtn = styled.div`
  border: none;
  overflow: hidden;
  display: inline-block;
  padding: 8px 8px;
  display: flex;
  align-items: center;
`

const FaSunStyled = styled(FaSun)`
  color: ${({ theme }) => theme.navBtn.text};
  &:hover, &:focus {
    color: rgb(449, 199, 111);
  }
`
const FaMoonStyled = styled(FaMoon)`
  color: ${({ theme }) => theme.navBtn.text};
  &:hover, &:focus {
    color: rgb(449, 199, 111);
  }
`

const DarkModeToggleBtn = () => {
  const { setIsDark, isDark } = useContext(DarkModeContext)

  return (
    <ToggleBtn>
      <InvisibleBtn>
        {
          isDark
            ? <FaSunStyled onClick={() => void setIsDark(false)} />
            : <FaMoonStyled onClick={() => void setIsDark(true)}  />
        }
      </InvisibleBtn>
      {/* <HalfBtn onClick={() => void setIsDark(false)} active={!isDark}><FaSun /></HalfBtn>
      <HalfBtn onClick={() => void setIsDark(true)} active={isDark}><FaMoon /></HalfBtn> */}
    </ToggleBtn>
  )
}

export const Nav = ({ isMobile }) => (
  <NavBarWrapper isMobile={isMobile}>
    <NavBar>
      <DarkModeToggleBtn />
      <_Link to="/" activeClassName="active">
        <NavPageBtn>
          <div><FaHome /></div>
          <div>Home</div>
        </NavPageBtn>
      </_Link>
      <_Link to="/posts/" activeClassName="active">
        <NavPageBtn>
          <div><IoNewspaper /></div>
          <div>Blog posts</div>
        </NavPageBtn>
      </_Link>
      <ContactBtn url="https://github.com/genyrosk">
        <div><FaGithub /></div>
        <div>Github</div>
        <SmallIcon><FaExternalLinkAlt /></SmallIcon>
      </ContactBtn>
      <ContactBtn url="https://www.linkedin.com/in/eroskach/">
        <div><FaLinkedin /></div>
        <div>Linkedin</div>
        <SmallIcon><FaExternalLinkAlt /></SmallIcon>
      </ContactBtn>
    </NavBar>
  </NavBarWrapper>
)
