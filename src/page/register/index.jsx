import { useState } from "react"

export default function Register() {
    let [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        website: '',
        title: ''
    })
    let [error, setError] = useState({
        name: '',
        phone: '',
        email: '',
        website: '',
        title: ''
    })

    function onSubmit(){
        let errorObj = {}
        if(!form.name.trim()){
            errorObj.name = 'Name la bat buoc'
        }
        if(!form.phone.trim()){
            errorObj.phone = 'Phone la bat buoc'
        }

        else if(!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)){
            errorObj.phone = 'Phone khong dung dinh dang'
        }

        if(!form.email.trim()){
            errorObj.email = 'Email la bat buoc'
        }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)){
            error.email='Email khong dung dinh dang'
        }

        if(form.website.trim() && !/^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/.test(form.website.trim())){
            errorObj.website = 'Khong phai link facebook' 
        }
        if(!form.title.trim()){
            errorObj.title = 'Y kien ca nhan la bat buoc'
        }
        setError(errorObj)

        if(Object.keys(errorObj).length === 0){
            console.log(form)
        }
    }
    function inputOnchange(e){
        let name = e.target.name
        let value = e.target.value

        setForm({
            ...form,
            [name]: value
        })
    }


    return(
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">Thực chiến front-end căn bản </h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                            <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
                        </div>
                        <div className="form">
                            <label>
                                <p>Họ và tên<span>*</span></p>
                                <input name="name" value={form.name} onChange={inputOnchange} type="text" placeholder="Họ và tên bạn" />
                                {
                                    error.name && <p className="error-text">{error.name}</p>
                                }
                            </label>
                            <label>
                                <p>Số điện thoại<span>*</span></p>
                                <input name="phone" value={form.phone} onChange={inputOnchange} type="text" placeholder="Số điện thoại" />
                                {
                                    error.phone && <p className="error-text">{error.phone}</p>
                                }
                            </label>
                            <label>
                                <p>Email<span>*</span></p>
                                <input name="email" value={form.email} onChange={inputOnchange} type="text" placeholder="Email của bạn" />
                                {
                                    error.email && <p className="error-text">{error.email}</p>
                                }
                            </label>
                            <label>
                                <p>URL Facebook<span>*</span></p>
                                <input name="website" value={form.website} onChange={inputOnchange} type="text" placeholder="https://facebook.com" />
                                {
                                    error.website && <p className="error-text">{error.website}</p>
                                }
                            </label>
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                    {/* Cần ít nhất 200 COIN để giảm giá */}
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head">Chuyển khoản</div>
                                    <div className="sub">
                                    <a href="#">Chuyển khoản</a>
                                    <a href="#">Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label>
                            <label>
                                <p>Ý kiến cá nhân</p>
                                <input name="title" value={form.title}  onChange={inputOnchange} type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                                {
                                    error.title && <p className="error-text">{error.title}</p>
                                }
                            </label>
                            <div className="btn main rect" onClick={onSubmit}>đăng ký</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}