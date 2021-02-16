import React, { Component } from 'react'

export default class Footer extends Component {

    currentyear = () => {
        let date = new Date();
        return ( 
            date.getFullYear() 
        );
    }

    render() {
        return (
            <>
                <footer className="footer">
                    <div className="footer__container">
                        <p className="footer__container-copyright">&copy; {this.currentyear()}, Copyright</p>
                    </div>
                </footer>
            </>
        )
    }
}
