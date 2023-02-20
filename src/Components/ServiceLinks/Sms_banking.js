import React from "react";
import Service from "../Service/Service";

const Sms_banking = () => {
    return (
        <div class="mb-3">
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
                        <h2 className="pt-3">SMS Banking</h2>

                        <h5 className="font-bold">
                            We provide below services -
                        </h5>
                        <p>
                            <p className="font-bold">Alert Facility :</p>The SMS
                            Banking - Mobile Alert facility keeps you informed
                            about the significant transactions in your Accounts.
                            It keeps you updated wherever you go.
                        </p>
                        <p>
                            <p className="font-bold">Request facility :</p>The
                            SMS Banking request facility enables you to check
                            your account balance. You have to send SMS to
                            9975145066 with KEYWORD to get the required details.
                        </p>

                        <p className="px-4">
                            BAL - To get balances of accounts linked to your
                            customer ID
                        </p>
                        <p className="px-4">
                            L5 'space' 'account number' (without quotes) - To
                            get transaction details for last 5 transactions
                        </p>

                        <p>
                            Kindly update your mobile number to activate this
                            facility. The SMS alert application form is
                            available under the link - 'Downloads' and submit it
                            to your nearest branch.
                        </p>
                        <p>
                            <p className="font-bold">
                                Miss Call Alert facility :
                            </p>
                            The SMS Banking – Miss Call Alert facility enables
                            you to check your all account balances through SMS.
                            Just give a missed call from your registered mobile
                            number to 9975145066 and get the account balances
                            through SMS.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sms_banking;
