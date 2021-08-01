/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Footer from '../components/layout/Footer';
import Nav from '../components/layout/Nav';
import './style.css'

export default class DefaultLayout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Nav/>
                <main id="mainn">
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        )
    }
}
