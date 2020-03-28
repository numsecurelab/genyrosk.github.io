import React from 'react'
import styles from './Tags.module.scss'

import Icon from '../Icon'
import { BLOG_ICONS } from '../../constants'
console.log(BLOG_ICONS)

const Tags = ({ tags }) => (
  <div className={styles['tags']}>
    <ul className={styles['tags__list']}>
      {/* {console.log(tags)} */}
      {tags.map((tag, index) => (
        <li key={index} className={styles['tags__list-item']}>
          <span className={styles['tags__list-item-icon']}>
            <Icon alt="tag" icon={BLOG_ICONS['TAG']} />
          </span>
          <span>
            {/* <span className={styles.hashtag}>#</span>  */}
            {tag}
          </span>
        </li>
      ))}
    </ul>
  </div>
)

export default Tags
