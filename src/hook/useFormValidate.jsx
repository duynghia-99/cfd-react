import { useState } from "react";


let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let   phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/i;
let     urlPattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i

export default function useFormValidate(initialForm, validate){
    let [form, setForm] = useState(initialForm)
    let [error, setError] = useState({})

    function inputChange(e){
        let name = e.target.name
        let value = e.target.value

        setForm({
            ...form,
            [name]: value
        })
    }
    function check(){
        let errorObj = {}
        let { rule, message } = validate

        for( let i in rule){
            let r = rule[i]
            let m = message[i] || {}
            
            if(r.required && !form[i]?.trim()){
                errorObj[i] = m.required || 'Truong nay khong dc de trong'
            }
            if(r.pattern && form[i]){
                let { pattern } = r
            
                if(pattern === 'email'){ pattern = emailPattern}
                if(pattern === 'phone'){ pattern = phonePattern ;console.log(pattern);}
                if(pattern === 'url'){ pattern = urlPattern}
                
                if(!pattern?.test(form[i])){
                    errorObj[i] = m?.pattern || 'Truong nay khong dung dinh dang'
                }
            }
        }
        // if(!form.name.trim()){
        //     errorObj.name = 'Name la bat buoc'
        // }
        // if(!form.phone.trim()){
        //     errorObj.phone = 'Phone la bat buoc'
        // }

        // else if(!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)){
        //     errorObj.phone = 'Phone khong dung dinh dang'
        // }

        // if(!form.email.trim()){
        //     errorObj.email = 'Email la bat buoc'
        // }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)){
        //     error.email='Email khong dung dinh dang'
        // }

        // if(form.website.trim() && !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(form.website)){
        //     errorObj.website = 'Website khong dung dinh dang' 
        // }
        // if(!form.title.trim()){
        //     errorObj.title = 'Title la bat buoc'
        // }
        // if(!form.content.trim()){
        //     errorObj.content = 'Content la bat buoc'
        // }

        setError(errorObj)

        return errorObj
    }

    return{
        form,
        error,
        inputChange, 
        check
    }
}