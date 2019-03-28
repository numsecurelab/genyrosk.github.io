import React from 'react'
import Title from '../Title'
import Contacts from '../Contacts'
import styles from './NavBar.module.scss'
import profileImage from '../../assets/img/profile_pic_888.jpg'

const NavBar = () => (
  <div className={styles.wrapper} style={{boxShadow: `10px 9px 14px rgba(0,0,0,.04)`}}>
    <div className={styles.nav}>
      <div className={styles.miniProfile}>
        <img alt="" style={{borderRadius: `50%`}} src={profileImage}/>
      </div>
      <div style={{justifySelf: `right`}}>
        <Contacts />
      </div>
      <Title className={styles.miniTitle}/>
    </div>
  </div>
)

export default NavBar
