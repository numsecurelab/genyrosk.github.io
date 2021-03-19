import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { LayoutJustNav, ProfileImage, SEO } from '../components'
import { DarkModeContext } from '../styles/theme'


const maxWidth = '800px'

const ArticleWrapper = styled.div`
  padding: 1px 0 20px;
  margin-bottom: 2rem;

  ${({ isDark, theme }) => css`
    h1, h2, h3, h4, h5, h6 {
      color: ${isDark ? 'white' : theme.mainTextColor};
    }
  `}
`

const Section = styled.div`
  max-width: ${maxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 0.6rem 1.5rem;
`

const Header = styled.header``

const Title = styled.div``

const TagsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0 0 10px;
  padding: 0;
`

const Tag = styled.div`
  display: flex;
  align-items: center;
  padding: 0.10rem 0.37rem;
  margin-top: 0.28rem;
  margin-right: 0.28rem;
  margin-bottom: 0;
  margin-left: 0;
  background-color: #477aff;
  color: white; // #67717D white
  font-size: 13px;
  border-radius: 4px;
  background: ${({ theme }) => theme.tag.background };
  color: ${({ theme }) => theme.tag.color };
`

const Date = styled.div``

const ImgWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0px 6px 12px rgb(0 0 0 / 20%);
  overflow: hidden;
  margin-bottom: 24px;
`

const Article = styled.article``

const Content = styled.div`
  min-height: 80vh;

  blockquote {
    background: #f9f9f9;
    font-style: italic;
    border-left: 10px solid #bbb;
    margin: 1.5em 0.5rem;
    padding: 0.4rem 1rem;
    quotes: "\201C""\201D""\2018""\2019";
    font-size: 1rem;
  }

  blockquote:before {
    color: #ccc;
    content: open-quote;
    // content: close-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.2em;
    vertical-align: -0.4em;
  }

  blockquote p {
    display: inline;
  }
`

const Delimter = styled.div`
  height: 0px;
  max-width: ${maxWidth};
  margin: 0 auto;
  border-top: 2px dashed ${({ theme }) => theme.mainTextColor };
`

const ThankYouForReading = styled.div`
  text-align: center;
  font-size: 1.35rem;
  font-family: Roboto;
  font-weight: 300;
  margin: 20px 0 10px;
`

const Author = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`

const AuthorName = styled.div`
  font-size: 1.05rem;
  font-family: Roboto;
  font-weight: 400;
`

const ProfilePictureWrapper = styled.div`
  margin: 12px;
  display: flex;
  justify-content: flex-start;
`

const ProfilePicture = styled.div`
  width: 62px;
  height: 62px;
  margin-bottom: 4px;
  background: ${({ theme }) => theme.profilePictureBg };
  box-shadow: 0 4px 8px rgba(30, 30, 30, 0.2);
  /* bg-blur */
  backdrop-filter: blur(20px);
  border-radius: 50%;
  overflow: hidden;

  /** image mask */
  /* clip-path: circle(50% at 55% 55%); */

  img {
    border-radius: 50%;
  }
`

const MorePosts = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`
const PostTitle = styled.div``
const Post = styled.article`
  /* box-shadow: 0px 6px 12px rgb(0 0 0 / 20%); */
  margin: 8px 0;
  border-radius: 8px;
  color: ${({ theme }) => theme.mainTextColor };
  display: flex;

  &:hover ${PostTitle} {
    text-decoration: underline;
  }
`

const NavLink = ({ title, path }) => (
  <Link to={path}>
    <Post>
      <div>👉&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <PostTitle>{title}</PostTitle>
    </Post>
  </Link>
)

const Page = ({ data, pageContext }) => {
  const { prev, next } = pageContext
  const { isDark } = useContext(DarkModeContext)

  const {
    html,
    timeToRead,
    frontmatter: { date, title, tags, featuredImage },
  } = data.markdownRemark
  let featuredImgFluid = featuredImage?.childImageSharp.fluid

  return (
    <LayoutJustNav>
      <SEO
        // title="Home"
        // keywords={[`programming`, `blog`, `python`, `data science`, `coding`]}
      />
      <ArticleWrapper isDark={isDark}>
        <Section>
          <Header>
            <Title>
              <h1>{title}</h1>
            </Title>
            <TagsContainer>
              {tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagsContainer>
            <Date>{date} <span> &#183; </span> {timeToRead} min read</Date>
          </Header>
        </Section>

        {/* <StyledBackgroundSection fluid={featuredImgFluid} /> */}
        <ImgWrapper>
          <Img fluid={featuredImgFluid} />
        </ImgWrapper>
        <Section>
          <Article>
            <Content dangerouslySetInnerHTML={{ __html: html }} />
          </Article>
        </Section>

        <Section>
          <Delimter />
          <Author>
            <ProfilePictureWrapper>
              <ProfilePicture>
                <ProfileImage />
              </ProfilePicture>
            </ProfilePictureWrapper>
            <AuthorName>Evgeny Roskach</AuthorName>
          </Author>
          <ThankYouForReading>
            🙌 &nbsp; Thank you for reading ! Check out more posts.
          </ThankYouForReading>
        </Section>

        <Section>
          <MorePosts>
            {prev && (
              <NavLink
                title={prev.frontmatter.title}
                path={prev.fields.slug}
              />
            )}
            {next && (
              <NavLink
                title={next.frontmatter.title}
                path={next.fields.slug}
              />
            )}
          </MorePosts>
        </Section>

      </ArticleWrapper>
    </LayoutJustNav>
  )
}

export default Page

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
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
`
