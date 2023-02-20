import React from "react";
import { Link } from "react-router-dom";

const Notice = () => {
    return (
        <>
            <div class="padding">
                <div className="container" style={{ paddingTop: "40px" }}>
                    <div class="row border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                        <div class="col-md-2 px-2 py-2">
                            <img
                                src="Images/logo1.png"
                                alt=""
                                className="img-fluid p-0 m-0"
                            />
                        </div>
                        <div class="col-md-10">
                            {" "}
                            <div>
                                <div className="container mx-auto flex justify-center items-center pt-4">
                                    <p className="text-center sm:xl md:text-3xl text-xl text-black font-myFont">
                                        "Leading all the common people to
                                        prosperity"
                                    </p>
                                </div>
                            </div>
                            <div className="container mx-auto flex justify-center items-center">
                                {/* <img src="/Images/bank1.jpeg" alt="" style={{ height: "55px", width: "70px" }}/> */}
                                <h1 className="text-center text-2xl sm:xl md:text-4xl text-black font-myFont">
                                    Shrisatya Multipurpose Nidhi Limited
                                </h1>
                            </div>
                            <div className="">
                                <p className="text-black text-center text-lg pt-4 px-4">
                                   Floor No. 02, Laxmi Keshav Complex, Kalewadi - Empire Estate Road,
                                   Pimpri Chinchwad, Pune - 411017 (Maharashtra) India
                                </p>
                            </div>
                            <hr className="bg-black" />
                            <ul className="mx-auto">
                                <Link to="/">
                                    <li
                                        className="link text-right justify-content-around text-blue-700 hover:text-blue-400 px-5 font-myFont md:block"
                                        style={{
                                            display: "inline-flex"
                                        }}
                                    >
                                        www.Shrisatya.com
                                    </li>
                                </Link>
                                <Link to="/">
                                    <li
                                        className="link text-right justify-content-around text-blue-700 hover:text-blue-400 px-5 font-myFont md:block"
                                        style={{
                                            display: "inline-flex"
                                        }}
                                    >
                                        contact@shrisatya.com
                                    </li>
                                </Link>
                                {/* <Link to="/">
                                    <li
                                        className="link text-right justify-content-around text-blue-700 hover:text-blue-400 px-5 font-myFont md:block"
                                        style={{ display: "inline-flex" }}
                                    >
                                        mmcb@manmandirbank.com
                                    </li>
                                </Link> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="notice">
                {/* Instruction Div */}
                
                    <div className="section-title">
                        <h1 className="md:text-4xl text-3xl text-blue-900 font-myFont text-center font-bold pt-5 pb-2">
                            CYBER SECURITY - IT DEPARTMENT
                        </h1>
                    </div>
                    
                    <div className="container mx-auto">
                    <h1 className="font-myFont text-grey-200 hover:text-blue-400 text-3xl text-left py-3"
                        style={{ paddingLeft: "15px" }}
                    >
                        Notice To Account Holder Customers
                    </h1>

                    <ul style={{ listStyle: "disc" }}>
                        <li className="text-red-600 text-xl font-bold">
                            {" "}
                            Be careful
                            <hr className="custom_hr -mt-0" />
                        </li>
                    </ul>
                    <p className="max-w-4xl text-left py-2 ml-10">
                        Checkbook, passbook, ATM card, PIN and other banking
                        reference information, you must follow the instructions
                        given below. This will help keep your bank account safe
                        and secure from fraud.
                    </p>
                    <ul style={{ listStyle: "disc" }}>
                        <li className="text-red-600 text-xl font-bold">
                            Don't do this
                            <hr className="custom_hr1 -mt-0" />
                        </li>
                    </ul>
                    <ol style={{ listStyle: "number" }}>
                        <li className="max-w-4xl text-left py-2 mx-4">
                            Keep checkbook and ATM card together.
                        </li>
                        <li className="max-w-4xl text-left py-2 mx-4">
                            Signing blank check in check book.
                        </li>
                        <li className="max-w-4xl text-left py-2 mx-4">
                            To use your PIN password card or other banking
                            related confidential information for another person.
                        </li>
                        <li className="max-w-4xl text-left py-2 mx-4">
                            Keep your own password / PIN or confidential
                            information in writing in diary, table or other
                            place.
                        </li>
                    </ol>
                    <ul style={{ listStyle: "disc" }}>
                        <li className="text-red-600 text-xl font-bold">
                            Do this
                            <hr className="custom_hr2 -mt-0" />
                        </li>
                    </ul>
                    <ol style={{ listStyle: "number" }}>
                        <li className="max-w-4xl text-left py-2 mx-4">
                            Write the name of the person making the payment
                            clearly and completely on the check.
                        </li>
                        <li className="max-w-4xl text-left py-2 mx-4">
                            If you are sending by check post, use carbon paper
                            as protection against fraud Be done Changes should
                            not be made using chemicals.
                        </li>
                        <li className="max-w-4xl text-left py-2 mx-4">
                            Remember PIN / Password and if it is in written form
                            then delete it Account / ATM security information
                            will remain secure.
                        </li>
                        <li className="max-w-4xl text-left py-2 mx-4">
                            Never give out CVV number of your bank account
                            number / card information to anyone by phone /
                            e-mail.
                        </li>
                        <li className="max-w-4xl text-left py-2 mx-4">
                            If anyone says that we have come to you on behalf of
                            the bank, If you are coming, make sure to call the
                            branch or head office bricks immediately.
                        </li>
                        <li className="max-w-4xl text-left py-2 mx-4">
                            <b>
                                Do not share your account information,
                                information on ATM card, cvv number, OTP. No
                                such phone call is ever made by any branch of
                                Manmandir Co Bank Vita.
                            </b>{" "}
                            E-mail / sms showing the lure of money. Don't be
                            fooled by sms / email / calls.
                        </li>
                    </ol>
                </div>
                {/* <div className="py-10 my-10">
                    <h1 className="container text-xl text-left text-danger font-myFont">
                        Note: Free advice and information on how to keep your
                        bank account safe is provided at all our offices.
                    </h1>
                </div> */}

                {/* Contact Div */}

                {/* <section id="contact" class="contact section-bg mx-4">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 pb-3 px-5">
                            <div class="info-box space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                <h3>Head Office</h3>
                                <p className="text-xl font-myFont">Phone No.</p>
                                <h1 className="my_h1 px-2">
                                    <button
                                        href="tel:02347-276438"
                                        className="p-1 pl-5 pr-5 text-sm bg-transparent border-1 border-blue-700 rounded-lg text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900"
                                    >
                                        02347-276438
                                    </button>
                                </h1>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 pb-3 px-5">
                            <div class="info-box space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                <h3>Nilesh Barsingh</h3>
                                <p className="text-xl font-myFont">
                                    (Cyber ​​Security Officer)
                                </p>
                                <h1 className="my_h1 px-2">
                                    <button
                                        href="tel:+917021638815"
                                        className="p-1 pl-5 pr-5 text-sm bg-transparent border-1 border-blue-700 rounded-lg text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900"
                                    >
                                        +91 7021638815
                                    </button>
                                </h1>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 pb-3 px-5">
                            <div class="info-box space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                <h3>Vikram Nikam</h3>
                                <p className="text-xl font-myFont">
                                    (Chief IT Officer)
                                </p>
                                <h1 className="my_h1 px-2">
                                    <button
                                        href="tel:+918275913992"
                                        className="p-1 pl-5 pr-5 text-sm bg-transparent border-1 border-blue-700 rounded-lg text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900"
                                    >
                                        +91 8275913992
                                    </button>
                                </h1>
                            </div>
                        </div>
                        {/* <div class="col-lg-3 col-md-6 pb-3">
                            <div class="info-box space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                <h3> Ganesh Patil</h3>
                                <p className="text-xl font-myFont">
                                    (Head of IT Liaison)
                                </p>
                                <h1 className="my_h1 px-2">
                                    {" "}
                                    <button
                                        href="tel:+919175522752"
                                        className="p-1 pl-5 pr-5 text-sm bg-transparent border-1 border-blue-700 rounded-lg text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900"
                                    >
                                        +91 9175522752
                                    </button>
                                </h1>
                            </div>
                        </div> 
                    </div>
                </section> */}
            </div>
        </>
    );
};

export default Notice;
