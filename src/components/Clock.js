import React from "react";
import PropTypes from "prop-types";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.clock = props.clock;
    this.onDelete = props.onDelete;
    this.interval = null;
  }

  state = {
    time: null,
  };

  componentDidMount() {
    this.setState({ time: this.getTime(this.clock.timezone) });

    this.interval = setInterval(
      () => this.setState({ time: this.getTime(this.clock.timezone) }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTime(utc) {
    const date = new Date();
    const hours = date.getUTCHours() + parseInt(utc);
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

    return `${hours}:${minutes}:${seconds}`;
  }

  render() {
    return (
      <div className="clock">
        <div className="clock-header">
          <h5 className="clock-name">{this.clock.name}</h5>
        </div>
        <div className="clock-body">
          <p className="clock-value">{this.state.time}</p>
          <button
            className="btn delete-btn"
            onClick={() => this.onDelete(this.clock.id)}
          >
            x
          </button>
        </div>
      </div>
    );
  }
}

Clock.propTypes = {
  clock: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    timezone: PropTypes.string,
  }),
  onDelete: PropTypes.func,
};

export default Clock;
