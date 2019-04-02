/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Nav from "./nav"
import 'bootstrap/dist/css/bootstrap.css';
import "./layout.css"

const Layout = ({ children }) => (
  // <StaticQuery
  //   query={graphql`
  //     query SiteTitleQuery {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `}
  //   render={data => (
  //     <>
  <div className='container'>
    <Header />
    <Nav />
    <main>
      {children}
      <h6 className='text-center pt-5 pb-2 mb-0'>© {new Date().getFullYear()}, Cookbook Connections - Built with ZAPI</h6>
    </main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
