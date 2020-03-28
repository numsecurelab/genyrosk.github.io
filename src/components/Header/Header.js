import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Title from '../Title'
import Contacts from '../Contacts'
import styles from './Header.module.scss'
// import './Header.scss'
import profileImage from '../../assets/img/profile_pic_888.jpg'

// const DescriptionParagraph = () => (
//   <p>
//     Data Scientist in Market Research @Deliveroo. <br/>
//     In love with Python, Stats, AI/ML, data and surfing. <br/>
//     I automate the boring stuff and build neural nets for fun.
//   </p>
// )

const Header = ({ siteTitle }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <img alt="" style={{borderRadius: `50%`}} src={profileImage}/>
        </div>
        <Title className={styles.title}/>
        <div className={styles.description}>
          <Contacts className={styles['contacts__list']} showNames />
          {/* <div style={{marginTop: `10px`}}>
            <Link style={{}} to="/about-me/">About me</Link>
          </div> */}
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

export default Header
