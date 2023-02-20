import React from 'react'
import Service from "../Service/Service";

const Executor_Trustee = () => {
    return (
        <div>
            <section style={{ paddingTop: "53px"}}>
            <img
                    className="flex justify-center items-center mx-auto pt-4 my_bg img-fluid"
                    src="Images/slider-03.jpg"
                    style={{ height: "100%", margin: "auto" }}
                    alt="First slide"
                />
            </section>

            <div class="container-fluid">
                <div class="row  pt-4">
                    <div class="col-sm-3 col-md-3 col-lg-3">
                        
                        <Service />

                    </div>
                    <div class="col-sm-9 col-md-6 col-lg-8">
                        <h2 className='pt-3'>Executor &amp; Trustee</h2>

                        <h5 className="font-bold">We offer below services in trustee &amp; executor cell of our Bank -</h5>
                        <p>1) Preparation &amp; Management of Private &amp; Public Trusts.</p>
                        <p>2) Preparation of "WILL"</p>
                        <p>3) Execution of "WILL"</p>
                        <p>4) Safe Custody for "WILL"</p>

                        <h5 className="font-bold">Private Trust:</h5>
                        <p>A Private Trust constituted for the benefit of one or more individuals who are, or within a given time may be, definitely ascertained.</p>

                        <h5 className="font-bold">Public Trust:</h5>
                        <p>A Public Trust is constituted wholly or mainly for the benefit of Public at large, in other words beneficiaries in the Public trust constitute a body which is incapable of ascertainment.</p>

                        <h5 className="font-bold">Will:</h5>
                        <p>A Will is a legal declaration by which a person names one or more persons to manage his or her estate and provides for the distribution of his property at death.</p>

                        <h5 className="font-bold">Why to choose our services:</h5>
                        <p>1. Protection of your wealth</p>
                        <p>2. Reliability, transparency, stability and objectivity</p>
                        <p>3. Perpetual existence</p>
                        <p>4. Years of Professional experience</p>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Executor_Trustee
