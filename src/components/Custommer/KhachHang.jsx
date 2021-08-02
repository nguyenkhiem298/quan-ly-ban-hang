import React, { Component } from 'react';
import Custommers from './custommers';
export default class KhachHang extends Component {
    
    render() {
        
        return (
            <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-10">
                    <Custommers/>
                </div>
            </div>
        </div>
        ) 
        

        
    }
}
