import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

// import * as actionCreator from "./store/actions/actions"; // redux-thunk

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Shop from "./components/Pages/Shop/Shop";
import Cart from "./components/Pages/Cart/Cart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FilterValue: "",
      //age: 21
    };
  }

  handleSidebarCallbackFilterValue = (filterValue) => {
    this.setState({ FilterValue: filterValue });
  };

  // onAgeUp = () => {
  // 	this.setState({
  // 		age: this.state.age + 1
  // 	})
  // }

  // onAgeDown = () => {
  // 	this.setState({
  // 		age: this.state.age - 1
  // 	})
  // }

  render() {
    const { FilterValue } = this.state;

    console.log("App Components ", FilterValue);

    return (
      <>
        {/* <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col">
                <h3>Age: {this.props.age}</h3>
                {this.props.loading && <h3>Loading...</h3>}
                <button
                  className="btn btn-primary mx-2"
                  onClick={this.props.onAgeUp}
                >
                  Age Up
                </button>
                <button
                  className="btn btn-primary mx-2"
                  onClick={this.props.onAgeDown}
                >
                  Age Down
                </button>

                <ul className="list-group mt-4">
                  {this.props.history &&
                    this.props.history.map((val) => (
                      <li
                        className="list-group-item"
                        key={val.id}
                        onClick={() => this.props.onAgeDelete(val.id)}
                      >
                        {val.age}
                      </li>
                    ))}
                </ul>
              </div>

              <div className="col">
                <div className="row">
                  <div className="col">
                    <div>
                      <span>A: </span>
                      {this.props.a}
                    </div>
                    <button
                      onClick={() => this.props.onUpdateA(this.props.b)}
                      className="btn btn-secondary"
                    >
                      Update A
                    </button>
                  </div>

                  <div className="col">
                    <div>
                      <span>B: </span>
                      {this.props.b}
                    </div>
                    <button
                      onClick={() => this.props.onUpdateB(this.props.a)}
                      className="btn btn-secondary"
                    >
                      Update B
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="clearfix my-4"></div> */}

        <Header />
        <Switch>
          <Route path="/" component={Shop} exact />
          <Route path="/cart" component={Cart} exact />
        </Switch>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.r1.age,
    history: state.r1.history,
    loading: state.r1.loading,
    a: state.r2.a,
    b: state.r3.b,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onAgeUp: () => dispatch(actionCreator.ageUp(10)), // redux-thunk
    // onAgeDown: () => dispatch(actionCreator.ageDown(5)), // redux-thunk
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }), // redux-saga
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }), // redux-saga
    onAgeDelete: (id) => dispatch({ type: "AGE_DELETE", value: id }),
    onUpdateA: (b) => dispatch({ type: "onUpdateA", value: b }),
    onUpdateB: (a) => dispatch({ type: "onUpdateB", value: a }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
