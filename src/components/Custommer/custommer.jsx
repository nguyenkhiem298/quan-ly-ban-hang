import React, { Component } from 'react'

export default class Custommer extends Component {
    render() {
        return (
            <tr> 
            <td className="cell-check">
                <div className="prettycheckbOX">
                    <input type="checkbox" name="" id="" />
                </div>
            </td>
            <td className="cell-code"><span className="ng-bining" data-code={this.props.custommer.code}>{this.props.custommer.code}</span></td>
            <td className="cell-name">{this.props.custommer.name}</td>
            <td className="customer_type"><span className="ng-binding">{this.props.custommer.customer_type}</span></td>
            <td className="cell-phone ng-binding">{this.props.custommer.phone}</td>
            <td className="cell-customer_type"><span className="ng-binding">{this.props.custommer.customer_type}</span></td>
            <td className="cell_gender"><span className="ng-binding">{this.props.custommer.gender}</span></td>
            <td className="cell-birthday"><span className="ng-binding">{this.props.custommer.birthday}</span></td>
            <td className="cell-email"><span className="ng-binding">{this.props.custommer.email}</span></td>
            <td className="cell-company"><span className="ng-binding">{this.props.custommer.company}</span></td>
            <td className="cell-taxCode"><span className="ng-binding">{this.props.custommer.taxCode}</span></td>
            <td className="cell-address"><span className="ng-binding">{this.props.custommer.address}</span></td>
            <td className="cell-delivery_area"><span className="ng-binding">{this.props.custommer.Delivery_area}</span></td>
            <td className="cell-creater"><span className="ng-binding">{this.props.custommer.creater}</span></td>
            <td className="cell-Create_date"><span className="ng-binding">{this.props.custommer.Create_date}</span></td>
            <td className="cell-note"><span className="ng-binding">{this.props.custommer.note}</span></td>
            <td className="cell-last_trading">{this.props.custommer.last_trading}</td>
            <td className="cell-current_debt">{this.props.custommer.current_debt}</td>
            <td className="cell-Total_sales">{this.props.custommer.Total_sales}</td>
            <td className="cell-Net_sales">{this.props.custommer.Net_sales}</td>
        </tr>
        )
    }
}
