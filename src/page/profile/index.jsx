import { useState } from "react";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import {TabCourse} from "./component/TabCourse";
import {TabCoin} from "./component/TabCoin";
import {TabPayment} from "./component/TabPayment";
import {TabProject} from "./component/TabProject";
import {TabInfo} from "./component/TabInfo";

export default function Profile() {

    let [tabActive, setTabActive] = useState(0)

    let { path } = useRouteMatch()

    function setTab(e, index){
        e.preventDefault();
        setTabActive(index)
    }

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
                            <NavLink exact to={`${path}`}>Thông tin tài khoản</NavLink>
                            <NavLink to={`${path}/course`}>Khóa học của bạn</NavLink>
                            <NavLink to={`${path}/project`}>Dự án đã làm</NavLink>
                            <NavLink to={`${path}/payment`}>Lịch sử thanh toán</NavLink>
                            <NavLink to={`${path}/coin`}>Quản lý COIN của tôi</NavLink>
                        </div>
                        <div className="tab-content">
                            <Switch>
                                <Route path={`${path}/course`} component={TabCourse}/>
                                <Route path={`${path}/project`} component={TabProject}/>
                                <Route path={`${path}/payment`} component={TabPayment}/>
                                <Route path={`${path}/coin`} component={TabCoin}/>
                                <Route component={TabInfo}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}