import React from "react";

import Service from "../Service/Service";

const Rtgs_Neft = () => {
    return (
        <div class="">
            <section style={{ paddingTop: "53px" }}>
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
                        <h2 className="pt-3">RTGS/NEFT</h2>

                        <p className="pt-2">
                            The RTGS system facilitates transfer of funds from
                            accounts in one bank to another on a "real time" and
                            on "gross settlement" basis. The NEFT is a
                            nationwide payment system facilitating one-to-one
                            funds transfer. Bank offers NEFT/RTGS facility under
                            the sub-membership of SBI BANK.
                        </p>
                        <p>
                            RTGS system is the fastest possible interbank money
                            transfer facility available through secure banking
                            channels in India.
                        </p>

                        <h5 className="font-bold">Features of RTGS -</h5>
                        <p>1. Safest and Secure Mode of Fund Transfer</p>
                        <p>
                            2. Credit to Beneficiary's Account on the Same Day
                        </p>
                        <p>
                            3. No Courier/ Postal expenses to Transfer the funds
                        </p>
                        <p>
                            4. Customers can receive money through RTGS to their
                            accounts with Bank from Other Banks
                        </p>
                        <p>
                            5. Credit to the Beneficiary Account will be given
                            by the branch of the Beneficiary's Bank on the same
                            day and in case of holiday / after business hours,
                            credit will be given on next working day.
                        </p>
                        <p>
                            6. Minimum Amount of Remittance - As per RBI
                            guidelines
                        </p>
                        <p>
                            Process for NEFT / RTGS facility - - Funds transfer
                            application form is available with all the Branches.
                            Customers need to fill the details like Date,
                            Beneficiary Name, Amount, Account Number, Bank Name,
                            Bank Branch, IFSC Code etc and submit the form to
                            the Branch.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Rtgs_Neft;
