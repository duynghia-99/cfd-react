import { CourseItem } from "../../../component";

export default function ListSection() {
    return (
        <>
            <section className="section-1">
                <div className="container">
                    <h2 className="main-title">KHÓA HỌC CFD</h2>
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has
                        a more-or-less normal
                    </p>
                    <div className="textbox">
                        <h3 className="sub-title">KHÓA HỌC</h3>
                        <h2 className="main-title">ONLINE</h2>
                    </div>
                    <div className="list row">
                    <CourseItem 
                            name="React Js"
                            description="One of the best corporate fashion brands in Sydney"
                            image="img/img1.png"
                            teacher_avt="img/avt.png"
                            teacher_name="Đặng Thuyền Vương"
                            status="da-ket-thuc"
                        />
                        <CourseItem 
                            name="Front-end căn bản"
                            description="One of the best corporate fashion brands in Sydney"
                            image="img/img2.png"
                            teacher_avt="img/avt.png"
                            teacher_name="Đặng Thuyền Vương"
                            status="sap-dien-ra"
                        />
                        <CourseItem 
                            name="Animation"
                            description="One of the best corporate fashion brands in Sydney"
                            image="img/img3.png"
                            teacher_avt="img/avt.png"
                            teacher_name="Đặng Thuyền Vương"
                            status="dang-dien-ra"
                        />
                        <CourseItem 
                            name="Scss, Grunt JS và Boostrap 4"
                            description="One of the best corporate fashion brands in Sydney"
                            image="img/img4.png"
                            teacher_avt="img/avt.png"
                            teacher_name="Đặng Thuyền Vương"
                            status="da-ket-thuc"
                        />
                        <CourseItem 
                            name="UX/UI Design"
                            description="One of the best corporate fashion brands in Sydney"
                            image="img/img5.png"
                            teacher_avt="img/avt.png"
                            teacher_name="Đặng Thuyền Vương"
                            status="da-ket-thuc"
                        />
                        <CourseItem 
                            name="Web Responsive"
                            description="One of the best corporate fashion brands in Sydney"
                            image="img/img.png"
                            teacher_avt="img/avt.png"
                            teacher_name="Đặng Thuyền Vương"
                            status="da-ket-thuc"
                        />
                    </div>
                </div>
            </section>
            <section className="section-2 section-blue">
                <div className="container">
                    <div className="textbox">
                        <h3 className="sub-title">KHÓA HỌC</h3>
                        <h2 className="main-title">OFFLINE</h2>
                    </div>
                    <div className="list row">
                        <CourseItem 
                            name="React Js"
                            description="One of the best corporate fashion brands in Sydney"
                            image="img/img6.png"
                            teacher_avt="img/avt.png"
                            teacher_name="Đặng Thuyền Vương"
                            status="da-ket-thuc"
                        />
                        <CourseItem 
                            name="React Js"
                            description="One of the best corporate fashion brands in Sydney"
                            image="img/img7.png"
                            teacher_avt="img/avt.png"
                            teacher_name="Đặng Thuyền Vương"
                            status="da-ket-thuc"
                        />
                        <CourseItem 
                            name="React Js"
                            description="One of the best corporate fashion brands in Sydney"
                            image="img/img8.png"
                            teacher_avt="img/avt.png"
                            teacher_name="Đặng Thuyền Vương"
                            status="da-ket-thuc"
                        />
                    </div>
                    <div className="text-deco">C</div>
                </div>
            </section>
        </>
    )
}