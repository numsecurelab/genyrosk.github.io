import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout miniHeader={true}>
    <SEO title="About me"/>
    <div style={{maxWidth: `650px`}}>
      <h1>A little bit more ahout me</h1>
      <p>At a glance, here's a short collection of facts about me:</p>
      <ul>
        <li>
          I can speak 7 languges: Russian, Spanish, French, English,
          Catalan, German and Mandarin. Although, to be honest, it's been a while
          since I last spoke Chinese. It's on my bucket list to get back
          to speaking it regularly.
        </li>
        <li>
          I grew up in Barcelona and I'm an avid FCBarcelona fan. Visca el Barça!
        </li>
        <li>
          Education-wise: I went to a french school and later graduated in
          Computer and Information Engineering from the University of Cambridge.
        </li>
        <li>
          During my Cambridge years I developed a deep love for programming and
          took part in numerous hackathons (coding competitions).
          Winning one of them landed me a trip to Silicon Valley !
        </li>
        <li>
          The purpose of this blog is educational. What motivated me to start it
          was the desire to share interesting insights and knowledge about 
          Python and Data Science.
        </li>
      </ul>
    </div>
    <Link to="/">homepage</Link>
  </Layout>
)

export default SecondPage
