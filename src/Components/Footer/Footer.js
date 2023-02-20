import React from "react";
import { NavLink } from "react-router-dom";
import './footer.css'

const Footer = () => {
    return (
        <div>
            {/* <div>
                <img style={{ width: "100%"}} src="Images/shrisatya8.jpeg"/>
            </div> */}
            <footer style={{"backgroundColor": '#3E54AC', paddingTop: 100}} class="relative bg-gray-100 pb-6">
                <div class="container mx-auto px-4">
                    <div class="d-flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-3/12 px-4 xs:hidden">
                            <img style={{height: "200px"}} src="Images/logo1.png"></img>
                        </div>
                        <div class="w-full lg:w-4/12">
                            <h3
                                className="text-3xl text-blue-600 font-myFont font-bold py-1"
                                style={{ color: "#C21010" }}
                            >
                                SHRISATYA MULTIPURPOSE NIDHI LID.
                            </h3>
                            <h4 class="text-3xl  text-white font-myFont py-1">
                            व्यवहार विश्वासाचा, व्यवहार मित्राचा
                            </h4>
                            {/* <h5 class="text-lg mt-0 mb-2 text-white font-myFont py-1">
                                Find us on any of these platforms, we respond
                                1-2 business days.
                            </h5> */}
                        </div>
                        <div class="w-full lg:w-5/12 px-4 text-light">
                            <div class="d-flex flex-wrap items-top mb-6">
                                <div class="w-1/2 lg:w-4/12 px-4 ml-auto">
                                    <span class="block uppercase text-white text-sm font-semibold pb-6">
                                        Services
                                    </span>
                                    <ul class="list-unstyled">
                                        <li>
                                            <NavLink
                                                to="/service"
                                                className="text-white hover:text-blue-600 font-semibold block pb-2 text-sm"
                                                href="#services"
                                            >
                                                RTGS/NEFT
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/locker"
                                                className="text-white hover:text-blue-600 font-semibold block pb-2 text-sm"
                                                href="#services"
                                            >
                                                Locker
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/sms"
                                                className="text-white hover:text-blue-600 font-semibold block pb-2 text-sm"
                                                href="#services"
                                            >
                                                SMS Banking
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/abps"
                                                className="text-white hover:text-blue-600 font-semibold block pb-2 text-sm"
                                                href="#services"
                                            >
                                                APBS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/anybranch"
                                                className="text-white hover:text-blue-600 font-semibold block pb-2 text-sm"
                                                href="#services"
                                            >
                                                Any Branch Banking
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                {/* <div class="w-1/2 lg:w-4/12 px-4">
                                    <span class="block uppercase text-white text-sm font-semibold pb-6">
                                        Quick Links
                                    </span>
                                    <ul class="list-unstyled">
                                        <li>
                                            <NavLink
                                                to="/ifsccode"
                                                className="text-white hover:text-blue-600 font-semibold block pb-2 text-sm"
                                                href="#quicklinks"
                                            >
                                                IFSC Code
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/rateofinterest"
                                                className="text-white hover:text-blue-600 font-semibold block pb-2 text-sm"
                                                href="#quicklinks"
                                            >
                                                Rate Of Interest
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/bankholidays"
                                                className="text-white hover:text-blue-600 font-semibold block pb-2 text-sm"
                                                href="#quicklinks"
                                            >
                                                Bank Holidays
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/kycnorms"
                                                className="text-white hover:text-blue-600 font-semibold block pb-2 text-sm"
                                                href="#quicklinks"
                                            >
                                                KYC Norms
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/complaint"
                                                className="text-white hover:text-blue-600 font-semibold block pb-2 text-sm"
                                                href="#quicklinks"
                                            >
                                                Complaint Regarding to
                                                Transaction
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div> */}
                                <div class="w-1/2 lg:w-4/12 px-4">
                                    <span class="block uppercase text-white text-sm font-semibold pb-6">
                                        Social Media
                                    </span>
                                    <ul class="list-unstyled">
                                        <li>
                                            <a
                                                class="text-white hover:text-blue-600 font-semibold block pb-2 text-sm"
                                                href="https://www.facebook.com/profile.php?id=100089145458518&mibextid=ZbWKwL"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            >
                                                <i className="fab fa-facebook-f"></i>{" "}
                                                Facebook
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                class="text-white hover:text-blue-600 font-semibold block pb-2 text-sm"
                                                href="https://twitter.com/shrisatyaindia?t=-JDNVBmPBht6Li4o0aq8LA&s=08"
                                            >
                                                <i className="fab fa-twitter"></i>{" "}
                                                Twitter
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                class="text-white hover:text-blue-600 font-semibold block pb-2 text-sm"
                                                href="http://instagram.com/shrisatya_nidhi"
                                            >
                                                <i className="fab fa-instagram"></i>{" "}
                                                Instagram
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                class="text-white hover:text-blue-600 font-semibold block pb-2 text-sm"
                                                href="https://www.linkedin.com/in/shri-satya-india-059028260"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            >
                                                <i className="fab fa-linkedin"></i>{" "}
                                                Linkedin
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-gray-100" />
                    <div class="flex flex-wrap items-center md:justify-between justify-center">
                        <div class="w-full md:w-4/12 mx-auto text-center">
                            <div class="text-sm text-white hover:text-blue-400 font-semibold">
                                © <span id="get-current-year">2022 </span>
                                Shrisatya Multipurpose Nidhi Ltd. | Designed & developed
                                by{" "}
                                <a className="text-white" href="http://5techg.com" target="_blank">
                                    5TechG Lab
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
