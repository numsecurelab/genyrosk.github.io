import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { LayoutJustNav, MainTitle, ArticlePreview, SEO } from '../components'

const MainContent = styled.div`
  max-width: 650px;
  padding: 20px 0;
  margin: 0 auto;
`

const IndexPage = ({ data }) => {
  return (
    <LayoutJustNav>
      <SEO
        title="Home"
        keywords={[`programming`, `blog`, `python`, `data science`, `coding`]}
      />
      <MainContent>
        <MainTitle>All posts</MainTitle>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <ArticlePreview article={node} key={node.id} />
          )
        })}
      </MainContent>
    </LayoutJustNav>
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
          snippet
          excerpt(format: HTML, pruneLength: 500)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            description
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
