import React from 'react'
import useFormValidate from "../../hook/useFormValidate"

export default function Cooperate() {

    let { form, error, inputChange, check} = useFormValidate({
        name: '',
        phone: '',
        email: '',
        website: '',
        title: '',
        content: '',
    },{
        rule: {
            name: {
                required: true
            },
            phone: {
                required: true,
                pattern: '/(84|0[3|5|7|8|9])+([0-9]{8})\b/i'
            },
            email: {
                required: true,
                pattern: 'email'
            },
            website: {
                required: true,
                pattern: 'url'
            },
            title: {
                required: true,
            },
            content: {
                required: true,
            }
        },
        message: {
            name:{
                required: 'Ho va ten khong duoc de trong'
            },
            phone: {
                required: 'So dien thoai khong dung',
                pattern: 'Phai la so vietnam'
            },
            website: {
                pattern: 'Link sai dinh dang'
            }
        }
    })

    function onSubmit(){
        let errorObj = check()

        if(Object.keys(errorObj).length === 0){
            console.log("ok",form)
        }
    }
    return (
        <main className="register-course" id="main">
            <section className="section-1 wrap container">
                <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
                <p className="top-des">Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.</p>
                <div className="form">
                    <label> 
                        <p>Họ và tên<span>*</span></p>
                        <input value={form.name} name="name" onChange={inputChange} type="text" placeholder="Họ và tên bạn" />
                        {
                            error.name ? <p className="error-text">{error.name}</p> : null
                        }
                    </label>
                    <label>
                        <p>Số điện thoại<span>*</span></p>
                        <input value={form.phone} name="phone" onChange={inputChange} type="text" placeholder="Số điện thoại" />
                        {
                            error.phone ? <p className="error-text">{error.phone}</p> : null
                        }
                    </label>
                    <label>
                        <p>Email<span>*</span></p>
                        <input value={form.email} name="email" onChange={inputChange} type="text" placeholder="Email của bạn" />
                        {
                            error.email ? <p className="error-text">{error.email}</p> : null
                        }
                    </label>
                    <label>
                        <p>Website</p>
                        <input value={form.website} name="website" onChange={inputChange} type="text" placeholder="Đường dẫn website http://" />
                        {
                            error.website ? <p className="error-text">{error.website}</p> : null
                        }
                    </label>
                    <label>
                        <p>Tiêu đề<span>*</span></p>
                        <input value={form.title} name="title" onChange={inputChange} type="text" placeholder="Tiêu đề liên hệ" />
                        {
                            error.title ? <p className="error-text">{error.title}</p> : null
                        }
                    </label>
                    <label>
                        <p>Nội dung<span>*</span></p>
                        <textarea value={form.content} name="content" onChange={inputChange} id cols={30} rows={10} defaultValue={""} />
                        {
                            error.content ? <p className="error-text">{error.content}</p> : null
                        }
                    </label>
                    <div className="btn main rect" onClick={onSubmit}>đăng ký</div>
                </div>
            </section>
        </main>
    )
}