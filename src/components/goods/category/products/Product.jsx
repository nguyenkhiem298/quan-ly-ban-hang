import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <>
                <tr>
                    <th scope="row">{this.props.pro.id}</th>
                    <td>{this.props.pro.id_product}</td>
                    <td>{this.props.pro.name}</td>
                    <td>{this.props.pro.cost}</td>
                    <td>{this.props.pro.price}</td>
                    <td>{this.props.pro.inventory}</td>
                    <td><button onClick={ this.handleClick } type="button" className="btn btn-secondary">Action</button></td>
                </tr>
            </>
        )
    }
}
