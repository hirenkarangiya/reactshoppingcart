import React, { Component } from 'react'
import Filter from './Filter/Filter'

export default class Sidebar extends Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }

    handleChildDataCallback = (childData) =>{
        this.props.filterData(childData);
    }

    render() {

        return (
            <>
                <aside className="sidebar col-12 col-sm-5 col-md-3">
                    <Filter childdata={this.handleChildDataCallback} />
                </aside>
            </>
        )
    }
}
