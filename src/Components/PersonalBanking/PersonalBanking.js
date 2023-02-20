import React from "react";
import { NavLink } from "react-router-dom";
import QuickLink from "../Service/QuickLink";

const PersonalBanking = () => {
    return (
        <div>
            <div class="container-fluid">
                <div class="row  pt-4">
                    <div class="col-sm-3 col-md-3 col-lg-12">
                        <nav class="col-sm-3 col-md-3 col-lg-12">
                            <h5 className="bg-dark text-light pl-4 py-2">
                                Personal Banking
                            </h5>
                            <ul className="bg-gray-200">
                                <li>
                                    <NavLink
                                        to="/personalbanking"
                                        className="nav-link scrollto font-myFont active"
                                        style={{
                                            color: "black",
                                            fontSize: "15px",
                                            padding: "4px",
                                        }}
                                        href="#services"
                                    >
                                        - Deposit
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/loans"
                                        className="nav-link scrollto font-myFont"
                                        style={{
                                            color: "black",
                                            fontSize: "15px",
                                            padding: "4px",
                                        }}
                                        href="#services"
                                    >
                                        - Loans
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>

                        <QuickLink />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalBanking;
