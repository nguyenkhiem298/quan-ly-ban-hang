import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayProductDetail: 'none'
        }
    }

    handleClick = () => {
        if(this.state.displayProductDetail === 'none') {
            this.setState({displayProductDetail: 'table-row'})
        }else {
            this.setState({displayProductDetail: 'none'})
        }
    }

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
                <tr style={{display: this.state.displayProductDetail}} id={this.props.pro.id}>
                    <td colSpan="7">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Thông Tin</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Thẻ Kho</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tồn Kho</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Liên Kết Kênh Bán Hàng</a>
                            </li>
                        </ul>
                    </td>
                </tr>
            </>
        )
    }
}
