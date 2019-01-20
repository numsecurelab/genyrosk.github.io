import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout miniHeader={true}>
    <SEO title="About me"/>
    <div style={{maxWidth: `650px`}}>
      <h1>A little bit more ahout me</h1>
        <p>
          Barcelona is my hometown and I'm an avid fan of our football team.
          Visca el Barça! 🔵🔴
        </p>
        <p>
          If time is money and markets value efficiency, then automation is all about improving
          efficiency by saving time. In today's words: <span style={{fontSize: `18px`}}>🤖 = 💸</span>.
          I thus believe that if something can be automated, then it <b>must</b> be
          automated. At some point. Somewhat. Perhaps.
        </p>
        <p>
          I can speak 7 languages: Russian, Spanish, French, English,
          Catalan, German and Mandarin. Although, to be honest, it's been a while
          since I last spoke Chinese. It's on my bucket list to get back
          to speaking it regularly.
        </p>
        <p>
          Education-wise: I went to a french school and later graduated in
          Computer and Information Engineering from the University of Cambridge in 2018.
          During my Cambridge years I developed a deep love for programming and
          took part in numerous hackathons (coding competitions).
          Winning one of them landed me a trip to Silicon Valley !
          I also took a keen interest in ML techniques and built neural
          networks using Tensorflow.
        </p>
        <p>
          The purpose of this blog is educational. What motivated me to start it
          was the desire to share interesting insights and knowledge about
          Python and Data Science.
        </p>

    </div>
    <Link to="/">Homepage</Link>
  </Layout>
)

export default SecondPage
