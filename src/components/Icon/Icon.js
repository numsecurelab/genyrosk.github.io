import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ icon }) => {
  return (
    <svg viewBox={icon.viewBox}>
      <path d={icon.path} />
    </svg>
  )
}

Icon.proptype = {
  icon: PropTypes.shape(
    PropTypes.objectOf({
      path: PropTypes.string.isRequired,
      viewBox: PropTypes.string.isRequired,
    })
  ),
}

export default Icon
