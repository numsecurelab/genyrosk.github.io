import React from 'react'
import { graphql, Link } from 'gatsby'
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import styles from './index.module.scss'

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" keywords={[`evgeny`, `blog`, `python`, `data science`]} />
      <div className={styles.blogpostsList} >
        {data.allMarkdownRemark.edges.map( ({ node }) => {
          return (
            <div key={node.id} className={styles.blogpost}>
              <Link
                to={node.fields.slug}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
                >
                <h3
                  css={css`
                    margin-top: ${rhythm(1/1)};
                    margin-bottom: ${rhythm(1/3)};
                  `}>
                  {node.frontmatter.title}
                </h3>
                <h4
                  css={css`
                    color: #777;
                    margin-top: 0;
                    margin-bottom: ${rhythm(1/2)};
                  `}
                  >
                  {node.frontmatter.date} &#183;{" "}
                  {node.timeToRead} min read
                </h4>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 500)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
