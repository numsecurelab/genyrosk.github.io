import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './header.module.scss'
import profileImage from '../content/assets/profile_1.jpg'
import githubIcon from '../content/assets/github-30.svg'
import linkedinIcon from '../content/assets/linkedin-30.svg'
// import Image from './image'

const Title = ({ className }) => (
  <div className={className}>
    <h1>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Evgeny Roskach
      </Link>
    </h1>
  </div>
)

const DescriptionParagraph = () => (
  <p>
    Data Scientist in Market Research @Deliveroo. <br/>
    In love with Python, Stats, AI/ML, data and surfing. <br/>
    I automate the boring stuff and build neural nets for fun.
  </p>
)

const SocialLinks = () => (
  <div className={styles.socialLinkWrapper}>
    <div className={styles.socialLink}>
      <a href='https://github.com/genyrosk' target="_blank">
        <img alt="github" src={githubIcon} />
      </a>
    </div>
    <div className={styles.socialLink} style={{ display: `inline-block`, marginRight: `0.3rem`}}>
      <a href='https://www.linkedin.com/in/eroskach/' target="_blank">
        <img alt="linkedin" src={linkedinIcon} />
      </a>
    </div>
  </div>
)

/**
 *  Header components
 */
const MiniHeader = () => (
  <div className={styles.wrapper}>
    <div className={styles.nav}>
      <div className={styles.miniProfile}>
        <img alt="" style={{borderRadius: `50%`}} src={profileImage}/>
      </div>
      <div style={{justifySelf: `right`}}>
        <SocialLinks />
      </div>
      <Title className={styles.miniTitle}/>
    </div>
  </div>
)

const Header = ({ siteTitle }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <img alt="" style={{borderRadius: `50%`}} src={profileImage}/>
        </div>
        <Title className={styles.title}/>
        <div className={styles.description}>
          <DescriptionParagraph />
          <SocialLinks />
          <div style={{marginTop: `10px`}}>
            <Link style={{color: `#3CE8D4`}} to="/about-me/">About me</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export {
  Header,
  MiniHeader,
}
