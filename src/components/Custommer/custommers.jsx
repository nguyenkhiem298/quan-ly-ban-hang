import { Component } from "react";
import data from '../../data/custommerDB.json';
import Custommer from "./custommer";
export default class Custommers extends Component {
    render() {
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
                           { 
                                data.map((custommer) => {
                                    return (
                                        <Custommer custommer={custommer} />
                                    )
                                })
                           }
                        </tbody>
                </table>
            </div>
            )
    }
}