import React from 'react';

import Layout from '../components/layout'
import Seo from '../components/seo.js'

const ContactUsPage = () => {
  return (
    <Layout>
      <Seo title="Contacts" description="Qui trovi i contatti utili per comunicare con noi" />
      <h1>Contact Us</h1>
      <h2>Not to frequently</h2>
      <h3>We are very busy you know..</h3>
      <h4>Sorry :D</h4>
      <a href="https://twitter.com/elonmusk" target="_black">To my twitter</a>
    </Layout>
  )
}

export default ContactUsPage