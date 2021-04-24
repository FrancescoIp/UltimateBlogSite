import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
  return (
    <Layout>
      <Head title="Not Found"/>
      <h1>Whooopsy, this page not exsist!</h1>
      <Link to="/"><p>Back Home</p></Link>
    </Layout>
  ) 
}

export default NotFound