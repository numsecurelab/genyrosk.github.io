import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Title = ({ className }) => (
  <div className={className}>
    <h1>
      <Link
        to="/"
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        Evgeny Roskach
      </Link>
    </h1>
  </div>
)

export default Title
