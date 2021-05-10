import Form from "./component/form";
import Policy from "./component/Policy";
import Tuition from "./component/tuition";

export default function Payment(){
    return(
        <main className="paypage" id="main">
            <div className="container">
                <section>
                    <h2 className="main-title">thanh toán</h2>
                    <div className="content">
                        <Form/>
                        <Tuition/>
                        <Policy/>
                    </div>
                </section>
            </div>
        </main>
    )
}