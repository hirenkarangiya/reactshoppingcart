import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "../../Button/Button";
import { RangeSlider } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      range_value: [1000, 50000],
    };

    this.handleApplyNow = this.handleApplyNow.bind(this);
  }

  handleApplyNow = (e) => {
    console.log("Apply now Click", this.state.range_value);
    this.props.childdata(this.state.range_value);
  };

  render() {
    const { range_value } = this.state;
    return (
      <>
        <div className="filter__container">
          <h2 className="filter__container-title">Filters</h2>

          <div className="text-center">

            {/* Range Input Label */}
            <div className="range_slider_label">
              <span className="left">&#8377;{range_value[0]}</span>
              <span className="right">&#8377;{range_value[1]}</span>
            </div>

            {/* Range Input Slider */}
            <RangeSlider
              barClassName="range_input"
              handleClassName="range_handle"
              progress
              style={{ marginTop: 10, marginBottom: 10 }}
              defaultValue={[1000, 100000]}
              min={1000}
              max={100000}
              step={1000}
              tooltip={false}
              value={range_value}
              onChange={(value) => {
                this.setState({
                  range_value: value,
                });
              }}
            />

            {/* Range Input Label */}
            <div className="range_slider_label justify-content-center">
              <span><b>Price</b></span>
            </div>

            <div className="clearfix mt-3"></div>

            {/* Apply Now button */}
            <Button
              buttonStyle="btn--rounded"
              buttonColor="btn--primary"
              buttonSize="btn--medium"
              onClick={() => this.props.onApplyFilter(range_value)}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    filterbyprice: store.fp.filterbyprice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onApplyFilter: (value) => dispatch({ type: "FILTER_PRICE", value: value }),
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Filter);
