import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo.js'

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About"/>
      <h1>(Almost) Everything about me </h1>
      <p>I like trains</p>
      <p>To contact me <Link to="/contactUs">click here</Link></p>
    </Layout>
  )
}

export default AboutPage