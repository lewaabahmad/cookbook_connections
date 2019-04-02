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
    <main>{children}</main>
    <footer className='text-center'>
      © {new Date().getFullYear()}, Cookbook Connections - Built with ZAPI
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
