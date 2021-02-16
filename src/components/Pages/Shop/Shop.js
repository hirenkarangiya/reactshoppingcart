import React, { Component } from 'react'
import Content from '../../Content/Content';
import Sidebar from '../../Sidebar/Sidebar';

class Shop extends Component {
    render() {
        return (
            <>
               <section className="main row">
                <Sidebar />
                <Content />
                </section> 
            </>
        )
    }
}

export default Shop;