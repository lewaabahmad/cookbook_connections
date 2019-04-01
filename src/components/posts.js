import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from '../images/cclogo.jpg'
import Img from "gatsby-image"

class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    fetch('https://www.zapi.app/api/v1/models/99fd801f-5baa-4c02-8b34-089030ec5436/instances?key=zapi_pub_5VB_l3VpCiEtILanHdibtQ')
      .then(function(response) {
        return response.json();
      })
      .then((json) => {
        this.setState({
          posts: json.data
        })
      })
      .catch((request,error) => { alert("Request: "+JSON.stringify(request)); })
  }

  renderPostCard(post) {
    let createdAt = new Date(post.attributes.created_at).toDateString()
    return (
      <div className='card pb-1 card-gold'>
        <h4 className='pb-0 mb-0'>{post.attributes.data.title}</h4>
        <small>{createdAt}</small>
        <p className='pt-3'>{post.attributes.data.caption}</p>
      </div>
    )
  }

  render() {
    console.log(this.state)
    if (this.state.posts) {
      return (
        <div>
          {this.state.posts.map((post) => (this.renderPostCard(post)))}
        </div>
      )
    } else {
      return <h4 className='pb-0 mb-0'>Loading...</h4>
    }
  }
}

Posts.propTypes = {
  siteTitle: PropTypes.string,
}

Posts.defaultProps = {
  siteTitle: ``,
}

export default Posts
