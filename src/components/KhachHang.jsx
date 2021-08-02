import React, { Component } from 'react'

export default class KhachHang extends Component {

    constructor() {
        super();
        this.state = {
            custommers : [
                {
                id: 1, 
                code : "HYH1234",
                name: "Hương",
                avatar: "",
                gender : "Nữ",
                email: "lilas99@gmail.com",
                birthday : "05/01/1999",
                phone : "0005011999",
                company : "Phonix",
                taxCode : "",
                customer_type : "Cá nhân",
                address : "B1-24 VinHome Hàm Nghi",
                Delivery_area : "",
                creater : " Nguyễn Hùng",
                Create_date : "02/08/2021",
                note: "",
                last_trading : "",
                current_debt : "" ,
                Total_sales :  "",
                Net_sales : "" ,
                status : "",
                    }
                ],             
        }
    }
    
    render() {
        let bodydata = this.state.custommers.map((custommer, index) => {
            let result = '';
           if(custommer.id) {
               result = <tr> 
                            <td className="cell-check">
                                <div className="prettycheckbOX">
                                    <input type="checkbox" name="" id="" />
                                </div>
                            </td>
                            <td className="cell-code"><span className="ng-bining" data-code={custommer.code}>{custommer.code}</span></td>
                            <td className="cell-name">{custommer.name}</td>
                            <td className="customer_type"><span className="ng-binding">{custommer.customer_type}</span></td>
                            <td className="cell-phone ng-binding">{custommer.phone}</td>
                            <td className="cell-customer_type"><span className="ng-binding">{custommer.customer_type}</span></td>
                            <td className="cell_gender"><span className="ng-binding">{custommer.gender}</span></td>
                            <td className="cell-birthday"><span className="ng-binding">{custommer.birthday}</span></td>
                            <td className="cell-email"><span className="ng-binding">{custommer.email}</span></td>
                            <td className="cell-company"><span className="ng-binding">{custommer.company}</span></td>
                            <td className="cell-taxCode"><span className="ng-binding">{custommer.taxCode}</span></td>
                            <td className="cell-address"><span className="ng-binding">{custommer.address}</span></td>
                            <td className="cell-delivery_area"><span className="ng-binding">{custommer.Delivery_area}</span></td>
                            <td className="cell-creater"><span className="ng-binding">{custommer.creater}</span></td>
                            <td className="cell-Create_date"><span className="ng-binding">{custommer.Create_date}</span></td>
                            <td className="cell-note"><span className="ng-binding">{custommer.note}</span></td>
                            <td className="cell-last_trading">{custommer.last_trading}</td>
                            <td className="cell-current_debt">{custommer.current_debt}</td>
                            <td className="cell-Total_sales">{custommer.Total_sales}</td>
                            <td className="cell-Net_sales">{custommer.Net_sales}</td>
                        </tr>
           }
           return result;
        });
        return (
            <div>
                <table className="table table-striped table-inverse table-responsive">
                    <thead className="thead-inverse">
                        <tr>
                            <th>
                                <div className="prettyCheckbox">
                                    <input type="checkbox" name="" id="" />
                                </div>
                            </th>
                            <th data-field="code" data-title="Mã Khách hàng">
                                <a href="#" className="h-link">
                                    Mã khách hàng
                                </a>
                            </th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                           {bodydata}
                        </tbody>
                </table>
            </div>
        )
    }
}
