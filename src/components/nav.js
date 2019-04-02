import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from '../images/cclogo.png'
import Img from "gatsby-image"

const Nav = ({ siteTitle }) => (
  <div className='text-center'>
    <Link
      to="/about"
      className='py-2 px-5'
      style={{
        textDecoration: `none`,
      }}
    >
      About
    </Link>
    <Link
      to="/contact"
      className='py-2 px-5'
      style={{
        textDecoration: `none`,
      }}
    >
      Contact
    </Link>
  </div>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
