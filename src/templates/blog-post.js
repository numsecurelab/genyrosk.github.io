import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Tags from "../components/tags"

import styles from "./blog-post.module.scss"

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
    frontmatter: {date, title, tags},
  } = data.markdownRemark

  console.log(data)
  console.log(pageContext)

  return (
    <Layout miniHeader={true}>
      <div className={styles.article}>
        <h1>{title}</h1>
        <Tags tags={tags} />
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
