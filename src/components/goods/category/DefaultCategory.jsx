import React, { Component } from 'react'
import LeftCompoment from './LeftCompoment';
import Products from './products/Products';

export default class DefaultCategory extends Component {
    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-3">
                        <LeftCompoment/>
                    </div>
                    <div className="col-9">
                        <Products/>
                    </div>
                </div>
            </div>
        )
    }
}
