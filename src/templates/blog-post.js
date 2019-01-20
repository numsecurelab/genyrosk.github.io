import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  const {
    html,
    timeToRead,
    frontmatter: {date, title},
  } = data.markdownRemark
  return (
    <Layout miniHeader={true}>
      <h1>{title}</h1>
      <h3>{date} <span> &#183; </span> {timeToRead} min read</h3>
      <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
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
      }
    }
  }
`
