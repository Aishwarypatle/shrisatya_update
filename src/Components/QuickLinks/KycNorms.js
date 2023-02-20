import React from 'react'
import PersonalBanking from "../PersonalBanking/PersonalBanking"

const KycNorms = () => {
    return (
        <div>
            <section style={{ paddingTop: "53px" }}>
                <img
                    className="flex justify-center items-center mx-auto pt-5 my_bg img-fluid"
                    src="Images/5.jpg"
                    style={{ height: "400px", width: "100%" }}
                    alt="First slide"
                />
            </section>

            <div class="container-fluid">
                <div class="row  pt-4">
                    <div class="col-sm-3 col-md-3 col-lg-3">

                        <PersonalBanking />

                    </div>
                    <div class="col-sm-9 col-md-6 col-lg-8">
                        {/* <h2 className='pt-3'>KYC Norms</h2> */}
                        <img
                            className="flex justify-center items-center mx-auto my_bg img-fluid"
                            src="Images/kyc1.jpg"
                            alt="First slide"

                            style={{ height: "1250px"}}
                        />

                        <img
                            className="flex justify-center items-center mx-auto py-3 my_bg img-fluid"
                            src="Images/kyc2.jpg"
                            alt="Second slide"

                            style={{ height: "800px"}}
                        />
                        <img
                            className="flex justify-center items-center mx-auto py-3 my_bg img-fluid"
                            src="Images/kyc4.jpg"
                            alt="Third slide"

                            style={{ height: "800px"}}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default KycNorms
