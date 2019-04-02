import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from '../images/cclogo.png'
import Img from "gatsby-image"

class Events extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    fetch('https://www.zapi.app/api/v1/models/a9f48acc-8714-46fc-b919-22141d5c940b/instances?key=zapi_pub_5VB_l3VpCiEtILanHdibtQ')
      .then(function(response) {
        return response.json();
      })
      .then((json) => {
        this.setState({
          events: json.data
        })
      })
      .catch((request,error) => { alert("Request: "+JSON.stringify(request)); })
  }

  renderEventCard(event) {
    // let createdAt = new Date(event.attributes.created_at).toDateString()
        // <small>{createdAt}</small>
        // <p className='pt-3'>{event.attributes.data.caption}</p>
    return (
      <div className='card pb-1 card-gold'>
        <h4 className='pb-0 mb-0'>{event.attributes.data.title}</h4>
      </div>
    )
  }

  render() {
    if (this.state.events) {
      let upcomingEvents = this.state.events.filter((event) => {
        let d = new Date(event.attributes.data.dateAndTime)
        return d > Date.now()
      }).sort(function(a,b){
        return new Date(a.attributes.data.dateAndTime) - new Date(b.attributes.data.dateAndTime);
      });
      let pastEvents = this.state.events.filter((event) => {
        let d = new Date(event.attributes.data.dateAndTime)
        return d < Date.now()
      }).sort(function(a,b){
        return new Date(a.attributes.data.dateAndTime) - new Date(b.attributes.data.dateAndTime);
      });

      return (
        <div>
          <h3>Upcoming Events</h3>
          {upcomingEvents.map((event) => (this.renderEventCard(event)))}
          <h3>Past Events</h3>
          {pastEvents.map((event) => (this.renderEventCard(event)))}
        </div>
      )
    } else {
      return <h4 className='pb-0 mb-0'>Loading...</h4>
    }
  }
}

Events.propTypes = {
  siteTitle: PropTypes.string,
}

Events.defaultProps = {
  siteTitle: ``,
}

export default Events
