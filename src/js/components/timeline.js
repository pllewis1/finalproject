import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="timeline">
        <Link to="account">Account</Link>
        <h1>Timeline</h1>
      </section>
    )
  }
}

export default Timeline;