import React from "react";
import { connect } from "react-redux";
import action from "./redux/action";

class Room extends React.Component {
  render() {
    const { isLightOn, flipLight } = this.props;
    const lightedness = isLightOn ? "lit" : "dark";
    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={flipLight}>flip</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLightOn: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    flipLight: (...args) => dispatch(action.flipLight(...args))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
