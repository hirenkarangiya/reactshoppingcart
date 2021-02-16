import React, { Component } from "react";
import { connect } from "react-redux";

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSort: "hightolow",
    };

    this.handleSortOption = this.handleSortOption.bind(this);
  }

  handleSortOption = (e) => {
    const clickedvalue = e.target.attributes["data-value"].nodeValue;

    this.setState({
      activeSort: clickedvalue,
    });
    this.props.parentCallback(clickedvalue);
  };

  render() {
    return (
      <>
        <div className="row sortby__container">
          <div className="col-12 d-flex align-items-center">
            <h5 className="text-bold mr-5">Sort By:</h5>
            
            <ul className="nav">
              {/* <li className="nav-item">
                    <button 
                        data-value="hightolow" 
                        className={`nav-link ${this.state.activeSort === 'hightolow' ? 'active' : ''}`}
                        onClick={this.handleSortOption}
                    >Price -- High Low</button>
                </li>
                <li className="nav-item">
                    <button 
                        data-value="lowtohigh" 
                        className={`nav-link ${this.state.activeSort === 'lowtohigh' ? 'active' : ''}`}
                        onClick={this.handleSortOption}
                    >Price -- Low High</button>
                </li>
                <li className="nav-item">
                    <button 
                        data-value="discount" 
                        className={`nav-link ${this.state.activeSort === 'discount' ? 'active' : ''}`}
                        onClick={this.handleSortOption}
                    >Discount</button>
                </li> */}

              <li className="nav-item">
                <button
                  data-value="hightolow"
                  className={`nav-link ${
                    this.props.sortby === "hightolow" ? "active" : ""
                  }`}
                  onClick={() => this.props.onSort("hightolow")}
                >
                  Price -- High Low
                </button>
              </li>
              <li className="nav-item">
                <button
                  data-value="lowtohigh"
                  className={`nav-link ${
                    this.props.sortby === "lowtohigh" ? "active" : ""
                  }`}
                  onClick={() => this.props.onSort("lowtohigh")}
                >
                  Price -- Low High
                </button>
              </li>
              <li className="nav-item">
                <button
                  data-value="discount"
                  className={`nav-link ${
                    this.props.sortby === "discount" ? "active" : ""
                  }`}
                  onClick={() => this.props.onSort("discount")}
                >
                  Discount
                </button>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    sortby: store.sb.sortby,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSort: (value) => dispatch({ type: "SORT_BY", value: value }),
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Sort);
