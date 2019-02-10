import React from 'react';
// import styles from './Icon.module.scss';

const Icon = ({ icon }) => {
  return (
  <a href={icon.url} target='_blank'>
    <svg className={''} viewBox={icon.viewBox}>
      <path d={icon.path} />
    </svg>
  </a>
)}

export default Icon
