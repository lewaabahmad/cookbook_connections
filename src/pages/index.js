import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/posts"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className='d-none'>Cookbook Connections</h1>
    <h2>A community that connects over creations of new, inspiring cookbooks and their authors.</h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <div className='row'>
      <div className='col-8'>
        <Posts />
      </div>
      <div className='col-4'>
        <h3>Upcoming Events</h3>
        <h3>Past Events</h3>
      </div>
    </div>
  </Layout>
)

export default IndexPage
