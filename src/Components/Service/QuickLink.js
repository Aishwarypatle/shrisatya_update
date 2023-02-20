import React from "react";
import { NavLink } from "react-router-dom";

const QuickLink = () => {
    return (
        <div>
            <nav class="col-sm-3 col-md-3 col-lg-12 pt-3">
                <h5 className="bg-dark text-light pl-4 py-2">Quick Links</h5>
                <ul className="bg-gray-200">
                    <li>
                        <NavLink
                            to="/ifsccode"
                            className="nav-link scrollto font-myFont"
                            style={{
                                color: "black",
                                fontSize: "15px",
                                padding: "4px",
                            }}
                            href="#quicklinks"
                        >
                            - IFSC Code
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/rateofinterest"
                            className="nav-link scrollto font-myFont"
                            style={{
                                color: "black",
                                fontSize: "15px",
                                padding: "4px",
                            }}
                            href="#quicklinks"
                        >
                            - Rate Of Interest
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/complaint"
                            className="nav-link scrollto font-myFont"
                            style={{
                                color: "black",
                                fontSize: "15px",
                                padding: "4px",
                            }}
                            href="#quicklinks"
                        >
                            - Complaint Regarding to Transaction
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/bankholidays"
                            className="nav-link scrollto font-myFont"
                            style={{
                                color: "black",
                                fontSize: "15px",
                                padding: "4px",
                            }}
                            href="#quicklinks"
                        >
                            - Bank Holidays
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/kycnorms"
                            className="nav-link scrollto font-myFont "
                            style={{
                                color: "black",
                                fontSize: "15px",
                                padding: "4px",
                            }}
                            href="#quicklinks"
                        >
                            - KYC Norms
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default QuickLink;
