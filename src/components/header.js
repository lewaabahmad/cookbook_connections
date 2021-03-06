import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from '../images/cclogo.png'
import Img from "gatsby-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <div style={{ width: '160px', margin: '0 auto' }}>
            <img className='mb-0' src={logo} alt="Logo" />
          </div>
        </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
