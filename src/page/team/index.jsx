import CardItem from "./component/CarItem"

export default function Team() {
    return (
        <main className="team" id="main">
            <section>
                <div className="container">
                    <div className="top">
                        <h2 className="main-title">cfd team</h2>
                        <p className="top-des">Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt
                            elementum
                            sem non luctus
                        </p>
                    </div>
                    <div className="list row">
                        <div className="item col-md-6 col-sm-6">
                            <CardItem
                                name="trần nghĩa"
                                image="img/thumb-member.jpg"
                                title="Founder &amp; Creative Front-End Developer"
                            />
                        </div>
                        <div className="item col-md-6 col-sm-6">
                            <CardItem
                                name="đặng thuyền vương"
                                image="img/thumb-member.jpg"
                                title="Co-Founder &amp; Fullstack Developer"
                            />
                        </div>
                        <div className="item col-md-6 col-sm-6">
                            <CardItem
                                name="đặng thuyền vương"
                                image="img/thumb-member.jpg"
                                title="Co-Founder &amp; Backend Developer"
                            />
                        </div>
                        <div className="item col-md-6 col-sm-6">
                            <CardItem
                                name="nguyễn đức huy"
                                image="img/thumb-member.jpg"
                                title="Co-Founder &amp; Front-End Developer"
                            />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <CardItem
                                name="Diệp anh thy"
                                image="img/thumb-member.jpg"
                                title="CFD1-Offline"
                            />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <CardItem
                                name="đặng thuyền vương"
                                image="img/thumb-member.jpg"
                                title="Co-Founder &amp; Backend Developer"
                            />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <CardItem
                                name="nguyễn đức huy"
                                image="img/thumb-member.jpg"
                                title="Co-Founder &amp; Front-End Developer"
                            />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <CardItem
                                name="nguyễn đức huy"
                                image="img/thumb-member.jpg"
                                title="Co-Founder &amp; Front-End Developer"
                            />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <CardItem
                                name="trần nghĩa"
                                image="img/thumb-member.jpg"
                                title="Founder &amp; Creative Front-End Developer"
                            />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <CardItem
                                name="Diệp anh thy"
                                image="img/thumb-member.jpg"
                                title="CFD1-Offline"
                            />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <CardItem
                                name="nguyễn đức huy"
                                image="img/thumb-member.jpg"
                                title="Co-Founder &amp; Front-End Developer"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}