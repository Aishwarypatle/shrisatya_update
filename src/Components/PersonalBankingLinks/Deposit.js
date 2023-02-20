import React from 'react'
import PersonalBanking from '../PersonalBanking/PersonalBanking'
import Accordion from "react-bootstrap/Accordion";

const Deposit = () => {
    return (
        <div>
            <section style={{ paddingTop: "53px"}}>
                <img
                    className="flex justify-center items-center mx-auto pt-5 my_bg img-fluid"
                    src="Images/1.jpg"
                    style={{ height: "400px", width: "100%" }}
                    alt="First slide"
                />
            </section>

            <div class="container-fluid">
                <div class="row  pt-4">
                    <div class="col-sm-3 col-md-3 col-lg-3">

                        <PersonalBanking />
                        {/* <QuickLinks /> */}

                    </div>
                    <div class="col-sm-9 col-md-6 col-lg-8">
                        <h2 className='pt-3'>Deposits</h2>

                        <Accordion defaultActiveKey="1" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">SAVINGS ACCOUNT</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td colspan="2" className='font-bold'>A Savings Account
                                                    may be opened by Individuals, HUFs and Trust.</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" className='font-bold'>Features:</td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left"> Any Branch Banking (ABB).</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">ATM facility / Debit cum ATM card</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Demand Draft (Local and Outstation)</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">RTGS/NEFT</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Nomination facility available</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">DICGC Insurance facility</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Personalized cheque books as per CTS standards</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Transaction alerts by SMS</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Minimum Balance to be maintainted with Cheque book is Rs.1000/- and without Cheque book is Rs.300/-</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="2" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">CURRENT ACCOUNT</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td colspan="2" className='font-bold'>Current A/cs may be opened by Businessmen/Proprietorship/Partnership Firms/Public or
                                                    Private Companies.</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" className='font-bold'>Features:</td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Customer can deposit or withdraw the amount as many times required</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Minimum Balance to be maintainted with Cheque book is Rs.1000/- and without Cheque book is Rs.300/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Account will be operated by Authorized Signatories</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Any Branch Banking (ABB).</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Demand Draft (Local and Outstation).</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">RTGS/NEFT</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left"></div>DICGC Insurance facility</td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Personalized cheque books as per CTS standards</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="3" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">MANMANDIR DEPOSIT SCHEME</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Period of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">1 year to 10 years</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Minimum Amount of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Rs.100/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Additional Interest Rate for Senior Citizen</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">0.50%</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Benefits</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Compounding Interest</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Interest Payment</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Quarterly Compounding,Interest payable on maturity</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Pledging of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Allowed</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Premature Withdrawal</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Allowed</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Auto-renewal Facility</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Available</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="4" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">DAMDUPPAT DEPOSIT</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Period of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">9 Years 8 Months 5 Days</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Minimum Amount of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Rs.100/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Benefits</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Compounding Interest</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Interest Payment</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Quarterly Compounding,Interest payable on maturity</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Pledging of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Allowed</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Premature Withdrawal</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Allowed</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="5" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">MANMANDIR RECURRING DEPOSIT SCHEME(Lakhpati Yojana)</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                        <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Monthly Amount of Deposit</td>
                                                <td width="50%" class="tblifsc pl-2 font-bold"><div align="left">Maturity Value</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rs.691/-</td>
                                                <td width="50%" class="tblifsc pl-2 font-bold"><div align="left">Rs.50,036/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rs.1,382/-</td>
                                                <td width="50%" class="tblifsc pl-2 font-bold"><div align="left">Rs.1,00,072/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rs.2,073/-</td>
                                                <td width="50%" class="tblifsc pl-2 font-bold"><div align="left">Rs.1,50,108/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rs.2,764/-</td>
                                                <td width="50%" class="tblifsc pl-2 font-bold"><div align="left"><p>Rs.2,00,144/-</p></div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rs.4,146/-</td>
                                                <td width="50%" class="tblifsc pl-2 font-bold"><div align="left">Rs.3,00,216/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rs.5,528/-</td>
                                                <td width="50%" class="tblifsc pl-2 font-bold"><div align="left">Rs.4,00,289/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rs.6,910/-</td>
                                                <td width="50%" class="tblifsc pl-2 font-bold"><div align="left">Rs.5,00,361/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rs.13,820/-</td>
                                                <td width="50%" class="tblifsc pl-2 font-bold"><div align="left">Rs.10,00,721/-</div></td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="6" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">MANMANDIR FIX DEPOSIT SCHEME(5 Years)</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Amount of Deposit</td>
                                                <td width="50%" class="tblifsc pl-2 font-bold"><div align="left">Maturity Value</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rs.6,982/-</td>
                                                <td width="50%" class="tblifsc pl-2 font-bold"><div align="left">Rs.10,000/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rs.10,473/-</td>
                                                <td width="50%" class="tblifsc pl-2 font-bold"><div align="left">Rs.15,000/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rs.13,964</td>
                                                <td width="50%" class="tblifsc pl-2 font-bold"><div align="left">Rs.20,000/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rs.17,455/-</td>
                                                <td width="50%" class="tblifsc pl-2 font-bold"><div align="left"><p>Rs.25,000/-</p></div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rs.34,910/-</td>
                                                <td width="50%" class="tblifsc pl-2 font-bold"><div align="left">Rs.50,000/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rs.52,365/-</td>
                                                <td width="50%" class="tblifsc pl-2 font-bold"><div align="left">Rs.75,000/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rs.69,820/-</td>
                                                <td width="50%" class="tblifsc pl-2 font-bold"><div align="left">Rs.1,00,000/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rs.1,39,640/-</td>
                                                <td width="50%" class="tblifsc pl-2 font-bold"><div align="left">Rs.2,00,001/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rs.3,49,099/-</td>
                                                <td width="50%" class="tblifsc pl-2 font-bold"><div align="left">Rs.5,00,001/-</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="8" className="mx-auto pt-4 pb-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">RECURRING DEPOSIT</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Period of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">1 Years to 10 Years</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Monthly Installment</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Deposit in Multiple of Rs.100/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Additional Interest Rate for Senior Citizen</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">0.50%</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Benefits</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Compounding Interest</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Interest Payment</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Quarterly Compounding,Interest payable on maturity</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Pledging of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Allowed</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Premature Withdrawal</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Allowed</div></td>
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

export default Deposit
