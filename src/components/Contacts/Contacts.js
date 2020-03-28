import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import styles from './Contacts.module.scss'
import { CONTACT_ICONS } from '../../constants'

const Contact = ({ name, url, icon }) => (
  <a href={url || '#'} target="_blank">
    <div className={styles.contact}>
      <Icon icon={icon} />
      {name ? <span>{name}</span> : null}
    </div>
  </a>
)

const Contacts = ({ showNames, ...props }) => {
  return (
    <div {...props}>
      {Object.entries(CONTACT_ICONS).map(([key, contact]) => (
        <Contact
          key={key.toLowerCase()}
          name={showNames ? contact.name : null}
          url={contact.url}
          icon={{ path: contact.path, viewBox: contact.viewBox }}
        />
      ))}
    </div>
  )
}

Contacts.proptype = {
  showNames: PropTypes.boolean,
}

export default Contacts
