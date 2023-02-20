import React from 'react'
import Service from "../Service/Service"

const APBS = () => {
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
                        <h2 className='pt-3'>APBS (AADHAR Card Linking)</h2>

                        <p>Aadhaar is a valid Know your Customer (KYC) document to open bank accounts. We have launched the facility of Aadhaar number linking with saving accounts.</p>
                        <p className='font-bold'>Benefits of AADHAR Card Linking -</p>
                        <p>1. Direct credit of subsidies from government (LPG, Kerosene etc)</p>
                        <p>2. Direct credit of welfare funds, pensions, scholarships etc. from government.</p>

                        <p className='font-bold'>Steps for AADHAR linking to Bank Account</p>
                        <p className='font-bold'>1. For Existing Accounts</p>
                        <p>Kindly update your mobile number to activate this facility. The SMS alert application form is available under the link - 'Downloads' and submit it to your nearest branch.</p>
                        <p className="font-bold">2. For New Accounts</p>
                        <p>(a) Open a Savings Account with us</p>
                        <p>(b) Give self-attested AADHAR card Xerox as the Identity proof along with other identity document</p>
                        <p>(c) Fill Mandate Form to link your account to Government Subsidy through AADHAR Number.</p>

                        <p className='font-bold'>3. Customers who have not yet applied AADHAR Card can also link bank account number while applying for ADHAR card.</p>
                        <p className='font-bold'>4. Customer who have applied for AADHAR card but not in receipt of AADHAR Number / Card</p>
                        <p>(a) Give your Aadhaar Letter or Aadhaar Acknowledgment receipt copy to Bank for existing account or customer can open new account with this Aadhaar letter.</p>
                    </div>

                </div>

        </div>
 
        </div>
    )
}

export default APBS
