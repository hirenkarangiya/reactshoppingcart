import React, { Component } from 'react'
import ShoppingList from '../ShoppingList/ShoppingList'
import Sort from '../Sort/Sort'

export default class Content extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: 'hightolow',
            filterAmt: this.props.filterData
        }
    }

    handleCallback = (childData) =>{
        this.setState({data: childData})
    }

    componentDidUpdate(prevProps) {
        if (prevProps.filterData !== this.props.filterData) {
            this.setState({
                filterAmt : this.props.filterData
            });
        }
    }

    render() {

        const { filterAmt, data } = this.state;

        console.log('Content Component ', filterAmt);

        return (
            <>
                <article className="content col-12 col-sm-7 col-md-9">
                    <Sort parentCallback = {this.handleCallback} />
                    <div className="clearfix"></div>
                    <ShoppingList sortby={data} filter={filterAmt}/>
                </article>
            </>
        )
    }
}
