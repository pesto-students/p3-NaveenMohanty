import React from "react";
import { connect } from "react-redux";
import action from "./redux/action";

class StepCounter extends React.Component {
  render() {
    const { count, add, reset } = this.props;
    return (
      <>
        <h1>Steps:</h1>
        <h1>{count}</h1>
        <div>
          <button onClick={add}>ADD</button>{" "}
          <button onClick={reset}>RESET</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (...args) => dispatch(action.add(...args)),
    reset: (...args) => dispatch(action.reset(...args))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepCounter);
