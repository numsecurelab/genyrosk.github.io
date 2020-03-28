import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const SecondPage = () => (
  <Layout miniHeader={true}>
    <SEO title="About me" />
    <div style={{ maxWidth: `650px`, margin: `0 auto`, padding: `0 0.6rem` }}>
      <h1>About</h1>
      <p>
        Hey there ! Welcome to my site. I am a Software Engineer and Data
        Scientist and you just stumbled upon the place where I like to share my
        posts about Python, Data Science, Machine Learning and a few other
        things that I am passionate about.
      </p>
      <p>Favourite tech: Python, React, GatsbyJS and Docker.</p>
      {/* 💻🐍 */}
      {/* <p>
        Early in my career, as a graduate engineer with a penchant for deep
        learning, I focused on researching, building and productionising ML
        models, a.k.a. curve fitting without domain knowledge. Later I worked in
        Data Science consulting, focusing on distributed cloud infrastructure on
        AWS and a data-processing-heavy tech stack composed of Docker, Airflow
        and Spark.
      </p> */}
      {/* <p>
        For me machine learning goes hand in hand with automation and I simply
        follow the well known emoji equation{' '}
        <span style={{ fontSize: `18px` }}>➕🤖 = 💸</span>. If something can be
        automated, then it has to be automated. At some point. Somewhat. If time
        allows perhaps... it really depends.
      </p> */}
      {/* <p>Hopefully some of the information here will prove useful to you.</p> */}
      {/* <p>
          To quote Jeremy Kepner, Head and Founder of the MIT Lincoln Laboratory Supercomputing Center:
        </p> */}
      {/* <blockquote>
          The power of neural networks is they don’t require you to a priori state
          what the inputs can be. They can be anything.
          People have said "neural networks, machine learning - it’s just curve fitting".  <br/>
          Yes, but it’s <b style={{fontWeight:`1000`, textDecoration:`underline`}}>curve fitting without domain knowledge</b>.
          Domain knowledge is so costly and expensive to create, that having a
          general system is really powerful.
        </blockquote> */}
      {/* <Link to="/">Homepage</Link> */}
    </div>
  </Layout>
)

export default SecondPage
