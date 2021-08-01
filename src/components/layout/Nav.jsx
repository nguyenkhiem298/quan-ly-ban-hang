import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './styleNav.css'

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">KiotViet</Link>
              <div className="collapse navbar-collapse main-menu" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Tổng Quan</Link>
                    <div className="sub-nav-1">
                      <ul>
                        <li><Link to="/danh-muc">Danh Mục</Link></li>
                        <li><Link to="/">Thiết Lập Giá</Link></li>
                        <li><Link to="khac-hang">Khac Hang</Link></li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Hàng Hóa</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Giao Dịch</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Đối Tác</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Nhân Viên</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link disabled" to="/" tabIndex={-1} aria-disabled="true">About</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}
