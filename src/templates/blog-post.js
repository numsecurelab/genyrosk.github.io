import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import styles from "./blog-post.module.scss"

const Tag = ({ tag }) => (
  <span className={styles.tag}>
    {tag}
  </span>
)

const NavLink = ({ title, path }) => (
  <div className={styles.navlinkdiv}>
    <Link to={path}>
      {title}
    </Link>
  </div>
)

export default ({ data, pageContext }) => {

  const { prev, next } = pageContext
  const {
    html,
    timeToRead,
    frontmatter: {date, title},
  } = data.markdownRemark

  console.log(data)
  console.log(next.fields.slug, next.frontmatter.title)

  return (
    <Layout miniHeader={true}>
      <div className={styles.article}>
        <h1>{title}</h1>
        <h4>{date} <span> &#183; </span> {timeToRead} min read</h4>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      <div className={styles.navlinks}>
        <div className={styles.navprev}>
          { prev && (
            <NavLink
              title={prev.frontmatter.title}
              path={prev.fields.slug}
            />
          )}
        </div>
        <div className={styles.navnext}>
          { next && (
            <NavLink
              title={next.frontmatter.title}
              path={next.fields.slug}
            />
          )}
        </div>
      </div>
    </Layout>
  )
}

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
      }
    }
  }
`
