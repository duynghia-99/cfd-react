import { useState } from "react"

export function  TabInfo() {

    let [form, setForm] = useState({
        name: '',
        phone: '',
        face: '',
        skype: ''
    })
    let [error, setError] = useState({
        name: '',
        phone: '',
        face: '',
        skype: ''
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

        if(form.face.trim() && !/^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/.test(form.face.trim())){
            errorObj.face = 'Khong phai link facebook' 
        }

        if(form.skype.trim() && !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(form.skype.trim())){
            errorObj.skype = 'Khong phai link Skype' 
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

    return (
        <div className="tab1" >
            <label>
                <p>Họ và tên<span>*</span></p>
                <input name="name" value={form.name} onChange={inputOnchange} type="text" placeholder="Nguyễn Văn A" />
                {
                    error.name && <p className="error-text">{error.name}</p>
                }
            </label>
            <label>
                <p>Số điện thoại<span>*</span></p>
                <input name="phone" value={form.phone} onChange={inputOnchange} type="text" placeholder="0949******" />
                {
                    error.phone && <p className="error-text">{error.phone}</p>
                }
            </label>
            <label>
                <p>Email<span>*</span></p>
                <input defaultValue="vuong.dang@dna.vn" disabled type="text" />
            </label>
            <label>
                <p>Facebook<span>*</span></p>
                <input name="face" value={form.face} onChange={inputOnchange} type="text" placeholder="Facebook url" />
                {
                    error.face && <p className="error-text">{error.face}</p>
                }
            </label>
            <label>
                <p>Skype<span>*</span></p>
                <input name="skype" value={form.skype} onChange={inputOnchange} type="text" placeholder="Skype url" />
                {
                    error.skype && <p className="error-text">{error.skype}</p>
                }
            </label>
            <div className="btn main rect" onClick={onSubmit}>LƯU LẠI</div>
        </div>
    )
}