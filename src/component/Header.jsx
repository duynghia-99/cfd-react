import {Link, NavLink} from "react-router-dom"
import useDelayLink from "../hook/useDelayLink"
export function  Header() {
    // let delayLink = useDelayLink()
    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger">
                        <div className="button">
                            <span />
                            <span />
                            <span />  
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <Link to="/" className="logo">
                        <img src="img/logo.svg" alt="" />
                        <h1>CFD</h1>
                    </Link>
                    <div className="right">
                        <div className="have-login">
                            <div className="account">
                                <Link to="/profile" className="info">
                                <div className="name">Trần Lê Trọng Nghĩa</div>
                                <div className="avatar">
                                    <img src="img/avt.png" alt="" />
                                </div>
                                </Link>
                            </div>
                            <div className="hamberger">
                            </div>
                            <div className="sub">
                                <NavLink to="/course">Khóa học của tôi</NavLink>
                                <NavLink to="#">Thông tin tài khoản</NavLink>
                                <NavLink to="#">Đăng xuất</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <a href="#">Đăng nhập</a>
                        <a href="#">Đăng ký</a>
                    </li>
                    <li className="active">
                        <NavLink to="/">Trang chủ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/team">CFD Team</NavLink>
                    </li>
                    <li>
                        <NavLink to="/course">Khóa Học</NavLink>
                    </li>
                    <li>
                        <NavLink to="/project">Dự Án</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cooperate">Liên hệ</NavLink>
                    </li>
                </ul>
            </nav>
            <div class="overlay_nav"></div>
        </>
    )
}