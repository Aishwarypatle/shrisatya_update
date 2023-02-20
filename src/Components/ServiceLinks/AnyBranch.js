import React from 'react'
import Service from "../Service/Service"

const AnyBranch = () => {
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
                        <h2 className='pt-3'>Any Branch Banking</h2>
                        <p>Bank provides the facility to operate deposit and loan accounts through any branch of the bank.
                            This facility offers you the convenience and ease of doing cash transactions, funds transfer and other services from the nearest branch</p>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default AnyBranch
