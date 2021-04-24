import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"/>
      <h1>(Almost) Everything about me </h1>
      <p>I like trains</p>
      <p>To contact me <Link to="/contactUs">click here</Link></p>
    </Layout>
  )
}

export default AboutPage