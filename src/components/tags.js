import React from 'react'

import styles from './tags.module.scss'

const Tags = ({ tags }) => (
  <div className={styles.tagslist}>
    {console.log(tags)}
    {tags.map( (tag, index) => (
      <span key={index} className={styles.tag}>
        {tag}
      </span>
    ))}
  </div>
)

export default Tags
