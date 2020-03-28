import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../Header'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import styles from './Layout.module.scss'

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
        {miniHeader ? (
          <NavBar />
        ) : (
          <Header siteTitle={data.site.siteMetadata.title} />
        )}
        <Sidebar />
        <div className={styles.layout}>
          <div className={styles.content}>
            {children}
          </div>
          <footer
            style={{
              textAlign: `center`,
            }}
          >
            © Evgeny Roskach
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  miniHeader: PropTypes.bool,
}

Layout.defaultProps = {
  miniHeader: false,
}

export default Layout
