import { useState } from "react";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import {TabCourse} from "./component/TabCourse";
import {TabCoin} from "./component/TabCoin";
import {TabPayment} from "./component/TabPayment";
import {TabProject} from "./component/TabProject";
import {TabInfo} from "./component/TabInfo";

export default function Profile() {

    let { url  } = useRouteMatch()
    console.log(url )

    
    return (
        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span class="text">H</span> */}
                        <img src="img/avatar-lg.png" alt="" />
                        <div className="camera" />
                    </div>
                    <div className="name">trần nghĩa</div>
                    <p className="des">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <NavLink exact to={`${url}/`}>Thông tin tài khoản</NavLink>
                            <NavLink to={`${url}/course`}>Khóa học của bạn</NavLink>
                            <NavLink to={`${url}/project`}>Dự án đã làm</NavLink>
                            <NavLink to={`${url}/payment`}>Lịch sử thanh toán</NavLink>
                            <NavLink to={`${url}/coin`}>Quản lý COIN của tôi</NavLink>
                        </div>
                        <div className="tab-content">
                            <Switch>
                                <Route url ={`${url}/course`} component={TabCourse}/>
                                <Route url ={`${url}/project`} component={TabProject}/>
                                <Route url ={`${url}/payment`} component={TabPayment}/>
                                <Route url ={`${url}/coin`} component={TabCoin}/>
                                <Route component={TabInfo}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}