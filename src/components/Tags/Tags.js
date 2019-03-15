import React from 'react'
import styles from './Tags.module.scss'

import Icon from "../Icon"
import { BLOG_ICONS } from '../../constants'
console.log(BLOG_ICONS)

const Tags = ({ tags }) => (
  <div className={styles['tags']}>
    <div className={styles['tags__list']}>
      {/* {console.log(tags)} */}
      {tags.map( (tag, index) => (
        <div key={index} className={styles['tags__list-item']}>
          <div className={styles['tags__list-item-icon']}>
            <Icon alt="tag" icon={BLOG_ICONS['TAG']}/>
          </div>
          <div>
            {/* <span className={styles.hashtag}>#</span>  */}
            {tag}
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Tags
