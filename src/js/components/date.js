import React from 'react';
import moment from 'moment';
import User from '../models/user';

class Date extends React.Component {
  constructor(props) {
    super(props);
  }

  submitCard() {
    console.log("saved!!!");
  };

  handleDate(e) {
    this.props.updateCard({
      date: e.target.value
    });
    this.submitCard.bind(this)
  };

  handlePostCard(e) {
    User.postCard(this.state, () => {
      this.props.history.pushState(null, "dashboard");
    });
  }

  render() {
    let minTime = moment().add(7, "days").format('YYYY-MM-DD');
    let maxTime = moment().add(373, "days").format('YYYY-MM-DD');
    console.log(minTime);
    let submit;
    return (
      <section>
        <h1>Pick when your card will arrive!</h1>
        <input type="date" min={minTime} max={maxTime} onChange={this.handleDate.bind(this)} />
      </section>
    )
  }
}

export default Date;
