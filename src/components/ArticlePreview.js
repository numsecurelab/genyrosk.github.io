import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import { rhythm } from '../utils/typography'


const ImageContainer = styled.div`
  padding: 0px 0px;
`
const ImageWrapper = styled.div`
  height: 170px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0px 6px 12px rgb(0 0 0 / 30%);
  transition: all 0.1s ease-in-out;
`
const StyledBackgroundSection = styled(BackgroundImage)`
  /* width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover; */
  /* maxHeight: '170px', maxWidth: '450px', transition: 'all 0.2s ease-in-out' */
  width: 100%;
  height: 100%;
  /* max-height: 170px;
  max-width: 450px; */
  transition: all 0.2s ease-in-out;
  border-radius: 24px;
`
const ArticleInfo = styled.div`
  padding: 0 8px 0px 8px;
`
const ArticleTitle = styled.header`
  color: ${({ theme }) => theme.mainTextColor };
  font-size: ${rhythm(5/7)};
  padding: 8px 6px;
  font-family: Roboto;
`
const ArticleDatetime = styled.div`
  color: ${({ theme }) => theme.secondaryTextColor };
  font-size: ${rhythm(3.5/7)};
  padding: 0px 6px 2px;
  font-weight: 500;
  font-family: Roboto;
`
const TagsWrapper = styled.div``
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Tag = styled.div`
  background: ${({ theme }) => theme.tag.background };
  color: ${({ theme }) => theme.tag.color };
  border-radius: 6px;
  margin: 2px 4px;
  padding: 4px 8px;
  font-size: ${rhythm(3/7)};
`


const Description = styled.div`
  font-size: ${rhythm(4/7)};
  padding: 8px 6px;
  color: ${({ theme }) => theme.mainTextColor };

  ul {
    margin-bottom: 0.8rem;
    li {
      margin-bottom: 0rem;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0.8rem;
    margin-top: 1.2rem;
  }
`

const Article = styled.article`
  margin: 50px 0;
  max-width: 450px;
  border-radius: 24px;

  &:hover {
    ${ArticleTitle} {
      text-decoration: underline;
    }
    ${StyledBackgroundSection} {
      /* transform: scale(1.01); */
      /* transform: scale(1.02) */
    }
  }
`

export const ArticlePreview = ({ article, ...rest }) => {
  const {
    id,
    snippet,
    timeToRead,
    fields,
    frontmatter,
  } = article
  let featuredImgFluid = article.frontmatter.featuredImage?.childImageSharp.fluid

  return (
      <Article key={id} {...rest}>
        <Link key={id} to={fields.slug}>
          <div>
          <ImageContainer>
            <ImageWrapper>
              <StyledBackgroundSection fluid={featuredImgFluid} />
            </ImageWrapper>
          </ImageContainer>
          <ArticleInfo>
            <ArticleTitle>
              <span>{frontmatter.title}</span>
            </ArticleTitle>

            <ArticleDatetime>
              <span>{frontmatter.date} &#183; {timeToRead} min read</span>
            </ArticleDatetime>

            <TagsWrapper>
              <Tags>
                {frontmatter.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Tags>
            </TagsWrapper>
            <Description
              dangerouslySetInnerHTML={{ __html: frontmatter.description || snippet }}
            />
          </ArticleInfo>
          </div>
        </Link>
      </Article>
  )
}
