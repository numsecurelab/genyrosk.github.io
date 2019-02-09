import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout miniHeader={true}>
    <SEO title="About me"/>
    <div style={{maxWidth: `650px`, padding: `0 0.6rem`}}>
      <h1>About</h1>
        {/* <p>
          Barcelona is my hometown and I'm an avid fan of our football team.
          Visca el Barça! 🔵🔴
        </p> */}
        <p>
          I'm a Data Scientist in market research @Deliveroo.
          I focus on researching, building and
          productionising ML models in a scalable way.
          I don't build AI systems for the sake of it, they serve
          a very specific purpose: automation via curve-fitting.
        </p>
        <p>
          To quote Jeremy Kepner, Head and Founder of the MIT Lincoln Laboratory Supercomputing Center:
        </p>
        <blockquote>
          The power of neural networks is they don’t require you to a priori state
          what the inputs can be. They can be anything.
          People have said "neural networks, machine learning - it’s just curve fitting".  <br/>
          Yes, but it’s <b style={{fontWeight:`1000`, textDecoration:`underline`}}>curve fitting without domain knowledge</b>.
          Domain knowledge is so costly and expensive to create, that having a
          general system is really powerful.
        </blockquote>
        <p>
          For me machine learning goes hand in hand with automation and I simply follow the well known
          emoji equation <span style={{fontSize: `18px`}}>🤖 = 💸</span>. If something can be automated,
          then it must be automated. At some point. Somewhat. Perhaps.
        </p>
        {/* <p>
          I can speak 7 languages: Russian, Spanish, French, English,
          Catalan, German and Mandarin. I could talk to anyone if I flew onboard
          to the International Space Station 🚀. Although, to be honest, it has been a while
          since I last spoke Chinese and it's on my bucket list to get back
          to speaking it regularly. Sadly, some things just can't be automated...
        </p> */}
        {/* <p>
          Education-wise: I went to a french school and later graduated in
          Computer and Information Engineering from the University of Cambridge in 2018. 🎓
          During my Cambridge years I developed a deep love for programming and
          took part in numerous hackathons (coding competitions).
          Winning one of them landed me a trip to Silicon Valley !
          I also took a keen interest in ML and built deep neural
          networks in Tensorflow. 💻
        </p> */}
        <p>
          The purpose of this blog is to spread Python love and to share interesting
          insights into the world of Data Science. 🐍📊
        </p>
        
        <Link to="/">Homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
