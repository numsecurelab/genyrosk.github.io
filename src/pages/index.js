import React from 'react'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'

import { LayoutWithProfile, MainTitle, ArticlePreview, SEO } from '../components'
import { useMobileView } from '../utils/hooks'


const MainContentWrapper = styled.div`
  align-self: flex-start;
`
const MainContent = styled.div`
  max-width: 650px;
  padding: 20px 0;
  margin: 0 auto;
  ${({ isMobile }) => isMobile && css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`
const ArticlesList = styled.div``

const IndexPage = ({ data }) => {
  const isMobile = useMobileView()
  return (
    <LayoutWithProfile>
      <SEO
        title="Home"
        keywords={[`programming`, `blog`, `python`, `data science`, `coding`]}
      />
      <MainContent isMobile={isMobile}>
        <MainContentWrapper>
          <MainTitle>Latest posts</MainTitle>
        </MainContentWrapper>
        <ArticlesList>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <ArticlePreview article={node} key={node.id} />
            )
          })}
        </ArticlesList>
      </MainContent>
    </LayoutWithProfile>
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
