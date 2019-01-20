import React from 'react'
import { graphql, Link } from 'gatsby'
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" keywords={[`evgeny`, `blog`, `python`, `data science`]} />
      <div>
        {data.allMarkdownRemark.edges.map( ({ node }) => {
          return (
            <div key={node.id}>
              <Link
                to={node.fields.slug}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
                >
                <h3
                  css={css`
                    margin-bottom: ${rhythm(1/4)};
                  `}>
                  {node.frontmatter.title}{" "}
                  <span
                    css={css`
                      color: #bbb;
                    `}
                  >
                  - {node.frontmatter.date}
                </span>
                </h3>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
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
