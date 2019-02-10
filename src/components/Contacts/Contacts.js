import React from 'react'
import Icon from '../Icon'
import styles from './Contacts.module.scss'
import { ICONS } from '../../constants'

const Contacts = () => (
  <div className={styles['contacts__list']}>
      {Object.keys(ICONS).map((name) =>
        <div className={styles['contacts__list-item']} key={name.toLowerCase()}>
          <Icon className={''} icon={ICONS[name]}/>
        </div>
      )}
  </div>
)

export default Contacts
