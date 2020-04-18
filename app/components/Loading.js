import React, { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  content: {
    fontSize: "35px",
    position: "absolute",
    left: "0",
    right: "0",
    marginTop: "20px",
    textAlign: "center",
  },
};

export default class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: this.props.text,
    };
  }
  componentDidMount() {
    const { text, speed } = this.props;

    this.setLoading = window.setInterval(() => {
      if (this.state.content === text + "...") {
        this.setState({ content: text });
      } else {
        this.setState(({ content }) => {
          return {
            content: content + ".",
          };
        });
      }
    }, speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.setLoading);
  }

  render() {
    return <p style={styles.content}>{this.state.content}</p>;
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

Loading.defaultProps = {
  text: "Loading",
  speed: 300,
};
