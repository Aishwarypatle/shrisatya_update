import React from 'react'
import Service from "../Service/Service";
const Locker = () => {
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
                        <h2 className='pt-3'>Locker Facility</h2>

                        <p className="pt-2">For the safety of your valuables, we offer safe deposit locker facility at almost all the branches of our Bank. The nominal annual rent is charged for the lockers depending on the size of the locker. Kindly contact nearest branch to check locker availability.</p>

                        <h5 className="font-bold">Features of our locker services -</h5>
                        <p>1. Availability of lockers in various sizes and at various branch locations.</p>
                        <p>2. Rent a locker at any branch of your choice.</p>
                        <p>3. Locker Nomination facility.</p>
                        <p>4. Locker rates vary based on the locker size.</p>
                        <p>5. Locker rent is charged annually and rent is payable in advance.</p>
                        <p>6. Savings or Current account with branch is necessary for availing locker with branch.</p>
                        <p>7. Allotment of lockers is on first-come-first served basis.</p>
                        <p>8. Locker nomination facility is compulsory.</p>
                        <p>9. KYC Norms are applicable.</p>
                    </div>

                </div>

        </div>
        </div>
    )
}

export default Locker
