import React from "react";
import { NavLink } from "react-router-dom";

const Blog = () => {
    return (
        <div>
            <div class="container-fluid">
                <div class="row  pt-4">
                    <div class="col-sm-3 col-md-3 col-lg-12">
                        <nav class="col-sm-3 col-md-3 col-lg-12">
                            <h5 className="bg-dark text-light pl-4 py-2">
                                Services
                            </h5>
                            <ul className="bg-gray-200">
                                <li>
                                    <NavLink
                                        to="/service"
                                        className="nav-link scrollto font-myFont active"
                                        style={{
                                            color: "black",
                                            fontSize: "15px",
                                            padding: "4px",
                                        }}
                                        href="#services"
                                    >
                                        - RTGS/NEFT
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/locker"
                                        className="nav-link scrollto font-myFont"
                                        style={{
                                            color: "black",
                                            fontSize: "15px",
                                            padding: "4px",
                                        }}
                                        href="#services"
                                    >
                                        - Locker
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/sms"
                                        className="nav-link scrollto font-myFont"
                                        style={{
                                            color: "black",
                                            fontSize: "15px",
                                            padding: "4px",
                                        }}
                                        href="#services"
                                    >
                                        - Sms Banking
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/abps"
                                        className="nav-link scrollto font-myFont"
                                        style={{
                                            color: "black",
                                            fontSize: "15px",
                                            padding: "4px",
                                        }}
                                        href="#services"
                                    >
                                        - APBS(Aadhar Card Linking)
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink
                                        to="/executor-trustee"
                                        className="nav-link scrollto font-myFont"
                                        style={{
                                            color: "black",
                                            fontSize: "15px",
                                            padding: "4px",
                                        }}
                                        href="#services"
                                    >
                                        - Executor &amp; Trustee
                                    </NavLink>
                                </li> */}
                                <li>
                                    <NavLink
                                        to="/anybranch"
                                        className="nav-link scrollto font-myFont"
                                        style={{
                                            color: "black",
                                            fontSize: "15px",
                                            padding: "4px",
                                        }}
                                        href="#services"
                                    >
                                        - Any Branch Banking
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink
                                        to="/utilitybill"
                                        className="nav-link scrollto font-myFont"
                                        style={{
                                            color: "black",
                                            fontSize: "15px",
                                            padding: "4px",
                                        }}
                                        href="#services"
                                    >
                                        - Utility Bill Payments
                                    </NavLink>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
