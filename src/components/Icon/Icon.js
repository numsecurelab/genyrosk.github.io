import React from 'react';
// import styles from './Icon.module.scss';

const Icon = ({ icon }) => {
  const SVG = (
    <svg className={''} viewBox={icon.viewBox}>
      <path d={icon.path} />
    </svg>
  )
  if (icon.url) {
    return (
      <a href={icon.url} target='_blank'>
        {SVG}
      </a>
    )
  } else {
    return SVG
  }
}

export default Icon
