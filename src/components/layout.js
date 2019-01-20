import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { Header, MiniHeader } from './header'
// import './layout.css'

const Layout = ({ children, miniHeader }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {miniHeader ? <MiniHeader /> : <Header siteTitle={data.site.siteMetadata.title} />}
        <div
          style={{
            margin: `0 auto`,
            maxWidth: `800px`,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          <footer
            style={{
              textAlign: `center`,
            }}>
            © 2019 Evgeny Roskach
          </footer>
        </div>
      </>
    )}
  />
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
  miniHeader: PropTypes.bool
}

Layout.defaultProps = {
  miniHeader: false,
}

export default Layout
