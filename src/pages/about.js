import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h2 className='text-center'>About</h2>
    <p className='text-center'>We are a community that connects over creations of new, inspiring cookbooks and their authors.</p>
  </Layout>
)

export default SecondPage
