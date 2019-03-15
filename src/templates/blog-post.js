import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Tags from "../components/Tags"
import Icon from "../components/Icon"

import styles from "./blog-post.module.scss"
import tagIcon from '../content/assets/tag.svg'
import calendarIcon from '../content/assets/calendar-clock.svg'

import { BLOG_ICONS } from '../constants'

console.log(BLOG_ICONS)

const NavLink = ({ title, path, type }) => (
  <div className={styles.navlinkdiv}>
    <Link to={path}>
      <span style={{marginRight:`7px`}}>
        { type == 'prev' ? '← previous: ' : 'next: '}
      </span>
      {title}
      <span style={{marginLeft:`7px`}}>
        { type == 'next' ? '→' : ''}
      </span>
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

  // console.log(data)
  // console.log(pageContext)

  return (
    <Layout miniHeader={true}>
      <div className={styles.article}>
        <div style={{marginBottom:`40px`}}>
          <h1>{title}</h1>
          <div className={styles.tagsWrapper}>
            {/* <div className={styles.tagIcon}>
              <img alt="tag" src={tagIcon} width={20}/>
              <Icon alt="tag" icon={BLOG_ICONS['TAG']}/>
            </div>
            <div className={styles.tags}>
              <Tags tags={tags} />
            </div> */}
            <Tags tags={tags} />
          </div>
          <div className={styles.dateWrapper}>
            <div className={styles.dateIcon}>
              {/* <img alt="date" src={calendarIcon} width={20}/> */}
              <Icon alt="tag" icon={BLOG_ICONS['CALENDAR']}/>
            </div>
            <div className={styles.dateText}>
              {date} <span> &#183; </span> {timeToRead} min read
            </div>
          </div>
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      <div className={styles.navlinks}>
        <div className={styles.navprev}>
           { prev && (
            <NavLink
              title={prev.frontmatter.title}
              path={prev.fields.slug}
              type='prev'
            />
          )}
        </div>
        <div className={styles.navnext}>
          { next && (
            <NavLink
              title={next.frontmatter.title}
              path={next.fields.slug}
              type='next'
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
