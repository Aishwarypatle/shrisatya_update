import React from 'react'
import PersonalBanking from '../PersonalBanking/PersonalBanking'
import Accordion from "react-bootstrap/Accordion";

const Loans = () => {
    return (
        <div>
            <section style={{ paddingTop: "53px" }}>
                <img
                    className="flex justify-center items-center mx-auto pt-5 my_bg img-fluid "
                    src="Images/3.jpg"
                    style={{ height: "400px", width: "100%" }}
                    alt="First slide"
                />
            </section>

            <div class="container-fluid">
                <div class="row  pt-4">
                    <div class="col-sm-3 col-md-3 col-lg-3">

                        <PersonalBanking />

                    </div>
                      <div class="col-sm-9 col-md-6 col-lg-8">
                        <h2 className='pt-3'>Loans</h2>

                        <Accordion defaultActiveKey="1" className="mx-auto pt-3">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">BUSINESS LOAN</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered table-striped">
                                        <tbody>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Purpose</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Working Capital</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Eligibility</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Small Traders</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Loan Amount</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Upto Rs. 5 lakhs</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Margin</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">25%</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Repayment</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">1 Year</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Special Feature</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Cash Credit loan</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Security</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Stock in Hand + 100% collateral security</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Guarantee / Surety</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">2 Guarantors</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Minimum Documents / Requirements</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">KYC, Business Licenses, Income Tax Returns, Financial Statements, Stock Statements etc</div></td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="2" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">VEHICLE LOAN</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Purpose</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">New 2 Wheeler / 4 Wheeler for personal use</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Eligibility</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Individuals</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Loan Amount</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">90% of (Quotation + RTO Tax + Insurance)</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Margin</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">	10% of (Quotation + RTO Tax + Insurance)</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Repayment</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Upto 5 Years</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Special Feature</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Lowest Interest Rate, Term Loan</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Security</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Vehicle</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Guarantee / Surety</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">1 or 2 Guarantors</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Minimum Documents / Requirements</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">KYC, Income Tax Returns, Financial Statements/ Salary Certificate, Quotation etc.</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="3" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">GOLD LOAN</Accordion.Header>
                                <Accordion.Body>
                                    <h6 className='text-primary text-center pt-1'>BULLET REPAYMENT</h6>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Purpose</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Any</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Eligibility</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Individuals</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Loan Amount</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Upto Rs. 2 Lakhs</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Margin</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Rs. 37000/- will be sanctioned per 10gms of Pure Gold in ornaments</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Repayment</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">On Due Date (1 Year)</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Security</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Gold Ornaments</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Guarantee / Surety</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Not required</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Minimum Documents / Requirements</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Saving account with Branch</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rate of Interest</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">11.00%</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="4" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">HOUSING LOAN</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Purpose</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Construction / Purchase of residential house</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Eligibility</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Individuals</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Loan Amount</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Upto Rs. 70 lakhs &amp; Above</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Margin</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">	Upto 35%</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Repayment</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Upto 120 Months</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Special Feature</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Pradhan Mantri Awas Yojana Benefit available</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Security</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">House / Flat for which loan has been taken</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Guarantee / Surety</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">2 Guarantors</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Minimum Documents / Requirements</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">KYC, Income Certificate, Property related documents etc.</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="5" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">LOAN AGAINST FIXED DEPOSITS</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Purpose</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Any</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Eligibility</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Individuals</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Loan Amount</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Upto 90% of (Fixed Deposit Principal
                                                    + Accrued Interest)</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Margin</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">	10%</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Repayment</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Term Loan - Earliest of 2 Years or FD Maturity date
                                                    Cash Credit - Upto FD Maturity date</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Security</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Fixed Deposit Receipt</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Guarantee / Surety</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Not Applicable</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Minimum Documents / Requirements</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Not Applicable</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rate of Interest</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">FD Interest + Additional 2%</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="6" className="mx-auto py-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">CASH CREDIT LOAN</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Purpose</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Working Capital</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Eligibility</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Individuals, Partnership Firm, Companies etc.</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Loan Amount</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">As per requirement</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Margin</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">	25%</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Repayment</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">1 year</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Special Feature</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Not Applicable</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Security</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Stock + Receivables</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Guarantee / Surety</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">2 Guarantors</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Minimum Documents / Requirements</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">KYC, Income Statements, Financial Documents, Stock Statement, Debtors etc.</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Loans
