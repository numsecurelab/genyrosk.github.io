import React from 'react'
import Icon from '../Icon'
import styles from './Contacts.module.scss'
import { CONTACT_ICONS } from '../../constants'

const Contacts = () => (
  <div className={styles['contacts__list']}>
      {/* {Object.keys(CONTACT_ICONS).map((name) =>
        <div className={styles['contacts__list-item']} key={name.toLowerCase()}>
          <Icon className={''} icon={CONTACT_ICONS[name]}/>
        </div>
      )} */}
      {Object.entries(CONTACT_ICONS).map( ([name, svg_obj]) =>
        <div className={styles['contacts__list-item']} key={name.toLowerCase()}>
          <Icon className={''} icon={svg_obj}/>
        </div>
      )}
  </div>
)

export default Contacts
