import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { NavLink } from "react-router-dom";

const Faq = () => {
  return (
    <div className="bg-gray-100 pb-2">
      <div className="container mx-auto my-10"  style={{ paddingTop: "35px"}}>
      <h1 className="text-center py-10 md:text-5xl text-3xl font-bold text-blue-900 font-myFont">Frequently Asked Questions...?</h1>
        <Accordion defaultActiveKey="0" className="w-11/12 mx-auto">
         
          <Accordion.Item eventKey="0">
            <Accordion.Header className="font-myFont">RTGS<h6 className="pt-2 text-primary"> (Real Time Gross Settlement)</h6></Accordion.Header>
            <Accordion.Body>
                <p className="font-bold">Q1. What is RTGS System?</p>
                <p><b>Ans.</b>The acronym 'RTGS' stands for Real Time Gross Settlement, which can be defined as the continuous (real-time) settlement of funds transfer individually on an order by order basis (without netting). 'Real Time' means the processing of instructions at the time they are received rather than at some later time; 'Gross Settlement' means the settlement of funds transfer instructions occurs individually (on an instruction by instruction basis). Considering that the funds settlement takes place in the books of the Reserve Bank of India, the payments are final and irrevocable.</p>
                <p className="font-bold">Q2. How RTGS is different from National Electronics Funds Transfer System (NEFT)?</p>
                <p><b>Ans.</b>NEFT is an electronic fund transfer system that operates on a Deferred Net Settlement (DNS) basis which settles transactions in batches. In DNS, the settlement takes place with all transactions received till the particular cut-off time. These transactions are netted (payable and receivables) in NEFT whereas in RTGS the transactions are settled individually. For example, currently, NEFT operates in hourly batches. [There are twelve settlements from 8 am to 7 pm on week days and six settlements from 8 am to 1 pm on Saturdays.] Any transaction initiated after a designated settlement time would have to wait till the next designated settlement time Contrary to this, in the RTGS transactions are processed continuously throughout the RTGS business hours.</p>
                <p className="font-bold">Q3. Is there any minimum / maximum amount stipulation for RTGS transactions?</p>
                <p><b>Ans.</b>The RTGS system is primarily meant for large value transactions. The minimum amount to be remitted through RTGS is ` 2 lakh. There is no upper ceiling for RTGS transactions.</p>
                <p className="font-bold">Q4. Would the remitting customer get back the money if it is not credited to the beneficiary's account? When?</p>
                <p><b>Ans.</b>Yes. Funds, received by a RTGS member for the credit to a beneficiary customer's account, will be returned to the originating RTGS member within one hour of the receipt of the payment at the PI of the recipient bank or before the end of the RTGS Business day, whichever is earlier, if it is not possible to credit the funds to the beneficiary customer's account for any reason e.g. account does not exist, account frozen, etc. Once the money is received back by the remitting bank, the original debit entry in the customer's account is reversed.</p>
                <p className="font-bold">Q5. What is the essential information that the remitting customer would have to furnish to a bank for the remittance to be effected?</p>
                <p><b>Ans.</b>The remitting customer has to furnish the following information to a bank for initiating a RTGS remittance:<br/>1. Amount to be remitted<br/> 2. Remitting customer's account number which is to be debited<br/> 3. Name of the beneficiary bank and branch<br/> 4. The IFSC Number of the receiving branch<br/> 5. Name of the beneficiary customer<br/> 6. Account number of the beneficiary customer<br/> 7. Sender to receiver information, if any</p>
                <p className="font-bold">Q6. How would one know the IFSC number of the receiving branch?</p>
                <p><b>Ans.</b>The beneficiary customer can obtain the IFSC code from his bank branch. The IFSC code is also available on the cheque leaf. This code number and bank branch details can be communicated by the beneficiary to the remitting customer.</p>

            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header className="font-myFont">NEFT<h6 className="pt-2 text-primary"> (National Electronic Funds Transfer)</h6></Accordion.Header>
            <Accordion.Body>
                <p className="font-bold">Q.1. What is NEFT?</p>
                <p><b>Ans.</b>National Electronic Funds Transfer (NEFT) is a nation-wide payment system facilitating one-to-one funds transfer. Under this Scheme, individuals, firms and corporates can electronically transfer funds from any bank branch to any individual, firm or corporate having an account with any other bank branch in the country participating in the Scheme.</p>
                <p className="font-bold">Q.2. Who can transfer funds using NEFT?</p>
                <p><b>Ans.</b>Individuals, firms or corporates maintaining accounts with a bank branch can transfer funds using NEFT.</p>
                <p className="font-bold">Q.3. Who can receive funds through the NEFT system?</p>
                <p><b>Ans.</b>Individuals, firms or corporates maintaining accounts with a bank branch can receive funds through the NEFT system. It is, therefore, necessary for the beneficiary to have an account with the NEFT enabled destination bank branch in the country.</p>
                <p className="font-bold">Q.4. Is there any limit on the amount that could be transferred using NEFT?</p>
                <p><b>Ans.</b>No. There is no limit - either minimum or maximum - on the amount of funds that could be transferred using NEFT.</p>
                <p className="font-bold">Q.5. What is IFSC?</p>
                <p><b>Ans.</b>IFSC or Indian Financial System Code is an alpha-numeric code that uniquely identifies a bank-branch participating in the NEFT system. This is an 11 digit code with the first 4 alpha characters representing the bank, and the last 6 characters representing the branch. The 5th character is 0 (zero). IFSC is used by the NEFT system to identify the originating / destination banks / branches and also to route the messages appropriately to the concerned banks / branches.</p>
                <p className="font-bold">Q.6. Can a transaction be originated to draw (receive) funds from another account?</p>
                <p><b>Ans.</b>No. NEFT is a credit-push system i.e., transactions can be originated only to transfer / remit funds to a beneficiary.</p>
                <p className="font-bold">Q.7. What are the pre-requisites for originating a NEFT transaction?</p>
                <p><b>Ans.</b>Following are the pre-requisites for putting through a funds transfer transaction using NEFT -<br/>1. Originating and destination bank branches should be part of the NEFT network.<br/>2. Beneficiary details such as beneficiary name, account number and account type, name and IFSC of the beneficiary bank branch should be available with the remitter<br/>3. For net banking customers, some banks provide the facility to automatically pop-up the IFSC once name of the destination bank and branch is highlighted / chosen / indicated / keyed in.</p>
                <p className="font-bold">Q.8. What are the benefits of using NEFT?</p>
                <p><b>Ans.</b>NEFT offers many advantages over the other modes of funds transfer:<br/>1. The remitter need not send the physical cheque or Demand Draft to the beneficiary.<br/>2. The beneficiary need not visit his / her bank for depositing the paper instruments.<br/>3. The beneficiary need not be apprehensive of loss / theft of physical instruments or the likelihood of fraudulent encashment thereof.<br/>4. Credit confirmation of the remittances sent by SMS or email.<br/>5. Near real time transfer of the funds to the beneficiary account in a secure manner.<br/>6. Cost Effective</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header className="font-myFont">CTS<h6 className="pt-2 text-primary"> (Cheque Truncation)</h6></Accordion.Header>
            <Accordion.Body>
                <p className="font-bold">Q.1. What is Cheque Truncation?</p>
                <p>Truncation is the process of stopping the flow of the physical cheque issued by a drawer at some point by the presenting bank en-route to the drawee bank branch. In its place an electronic image of the cheque is transmitted to the drawee branch through the clearing house, along with relevant information like data on the MICR band, date of presentation, presenting bank, etc. Cheque truncation thus obviates the need to move the physical instruments across branches, other than in exceptional circumstances for clearing purposes. This effectively eliminates the associated cost of movement of the physical cheques, reduces the time required for their collection and brings elegance to the entire activity of cheque processing.</p>

                <p className="font-bold">Q.2. Why Cheque Truncation in India?</p>
                <p>As explained above, Cheque Truncation speeds up the process of collection of cheques resulting in better service to customers, reduces the scope for clearing-related frauds or loss of instruments in transit, lowers the cost of collection of cheques, and removes reconciliation-related and logistics-related problems, thus benefitting the system as a whole. With the other major products being offered in the form of RTGS and NEFT, the Reserve Bank has created the capability to enable inter-bank and customer payments online and in near-real time. However, as cheques are still the prominent modes of payments in the country. Reserve Bank of India has therefore decided to focus on improving the efficiency of the cheque clearing cycle, offering Cheque Truncation System (CTS) as an alternative. As highlighted earlier, CTS is a more secure system vis-a-vis the exchange of physical documents.</p>
                <p>In addition to operational efficiency, CTS offers several benefits to banks and customers, including human resource rationalisation, cost effectiveness, business process re-engineering, better service, adoption of latest technology, etc. CTS, thus, has emerged as an important efficiency enhancement initiative undertaken by Reserve Bank in the Payments Systems area.</p>

                <p className="font-bold">Q.3. What is the new approach to CTS implementation in the country?</p>
                <p>The new approach envisioned as part of the national roll-out is the grid-based approach. Under this approach the entire cheque volume in the country cleared across numerous MICR Cheque Processing locations will be consolidated into the three grids as mentioned in (3) above.</p>
                <p>Each grid will provide processing and clearing services to all the banks under its jurisdiction, Banks, branches and customers based at small / remote locations falling under the jurisdiction of a grid would be benefitted, irrespective of whether there exists at present a formal arrangement for cheque clearing or otherwise.</p>

                <p className="font-bold">Q.4. Is it possible to briefly explain the entire process flow in CTS?</p>
                <p>Yes. In CTS, the presenting bank (or its branch) captures the data (on the MICR band) and the images of a cheque using their Capture System (comprising of a scanner, core banking or other application) which is internal to them, and have to meet the specifications and standards prescribed for data and images.</p>
                <p>To ensure security, safety and non-repudiation of data / images, end-to-end Public Key Infrastructure (PKI) has been implemented in CTS. As part of the requirement, the collecting bank (presenting bank) sends the data and captured images duly signed and encrypted to the central processing location (Clearing House) for onward transmission to the paying bank (destination or drawee bank). For the purpose of participation the presenting and drawee banks are provided with an interface / gateway called the Clearing House Interface (CHI) that enables them to connect and transmit data and images in a secure and safe manner to the Clearing House (CH).</p>
                <p>The Clearing House processes the data, arrives at the settlement figure and routes the images and requisite data to the drawee banks. This is called the presentation clearing. The drawee banks through their CHIs receive the images and data from the Clearing House for payment processing. The drawee CHIs also generates the return file for unpaid instruments, if any. The return file / data sent by the drawee banks are processed by the Clearing House in the return clearing session in the same way as presentation clearing and return data is provided to the presenting banks for processing. The clearing cycle is treated as complete once the presentation clearing and the associated return clearing sessions are successfully processed. The entire essence of CTS technology lies in the use of images of cheques (instead of the physical cheques) for payment processing.</p>

                <p className="font-bold">Q.5. What type of cheques can be presented for clearing through CTS?</p>
                <p>It is preferable to present cheques complying with CTS-2010 standards for clearing through CTS. Cheques presented as part of Speed Clearing are handled in CTS as well (for more details on Speed Clearing, the related FAQs may be referred to). Incidentally, given the fact that images of cheques (and not the physical cheques) alone need to move in CTS, it is possible for the removal of the restriction of geographical jurisdiction normally associated with the paper cheque clearing. For reaping this benefit, the concept of Grid-CTS clearing has been envisaged at three locations in the country (Chennai, Mumbai and New Delhi). Under the grid clearing, cheques drawn on centres included in the grid will be cleared as part of local clearing.</p>

                <p className="font-bold">Q.6. Will there be any change in the process for the customers?</p>
                <p>No. There is no change in the clearing process for customers. Customers continue to use cheques as at present, except to ensure the use of image-friendly-coloured-inks while writing the cheques. Of course, such of those customers, who are used to receiving the paid instruments (like government departments) would also receive the cheque images. Cheques with alterations in material fields (explained in detail later) are not allowed to be processed under the CTS environment.</p>
                
                <p className="font-bold">Q.7. What are the benefits of CTS to customers of banks?</p>
                <p>The benefits from CTS are as follows -<br/>1. Shorter clearing cycle<br/>2. Superior verification and reconciliation process<br/>3. No geographical restrictions as to jurisdiction<br/>4. Operational efficiency for banks and customers alike</p>
                
                <p className="font-bold">Q.8.. What is Cheque Standardization and what does CTS 2010 Standard mean?</p>
                <p>Standardization of cheque forms (leaves) in terms of size, MICR band, quality of paper, etc., was one of the key factors that enabled mechanisation of cheque processing. Over a period of time, banks have added a variety of patterns and design of cheque forms to aid segmentation, branding, identification, etc., as also incorporated therein a number of security features to reduce the incidence of cheque misuse, tampering, alterations, etc. Growing use of multi-city and payable-at-par cheques for handling of cheques at any branches of a bank, introduction of Cheque Truncation System (CTS), increasing popularity of Speed Clearing, etc., were a few aspects that led to prescription of certain common minimum security features in cheques printed, issued and handled by banks and customers uniformly across the banking industry. Accordingly, certain benchmarks towards achieving standardization of cheques issued by banks across the country have been prescribed like - quality of paper, watermark, bank's logo in invisible ink, void pantograph, etc., and standardization of field placements on cheques. In addition, certain desirable features have also been suggested to be implemented by banks based on their need and risk perception.</p>
                <p>The set of minimum security features would not only ensure uniformity across all cheque forms issued by banks in the country but also help presenting banks while scrutinising / recognising cheques of drawee banks in an image-based processing scenario. The homogeneity in security features is expected to act as a deterrent against cheque frauds, while the standardization of field placements on cheque forms would enable straight-through-processing by use of optical / image character recognition technology. The benchmark prescriptions are collectively known as <b>"CTS-2010 standard"</b>.</p>
                <p>All banks providing cheque facility to their customers have been advised to issue only 'CTS-2010' standard cheques. Cheques not complying with CTS-2010 standards will be cleared at less frequent intervals i.e. twice a week up to October 31, 2014 and weekly once from November 1, 2014 onwards.</p>

                <p className="font-bold">Q.9. What is the prescription relating to alterations / corrections on cheque forms?</p>
                <p>The prescription on prohibiting alterations / corrections on cheques has been introduced to curtail cheque frauds on account of alterations in the various fields of cheques and to give protection to customers as well as banks. No changes / corrections can be carried out on the cheques (other than for date validation purposes, if required). For any change in the payee's name, courtesy amount (amount in figures) or legal amount (amount in words), fresh cheque leaves should be used by customers. This would help banks in identifying and controlling fraudulent alterations. This prohibition is applicable to cheques cleared under the image based Cheque Truncation System (CTS) only and is effective from December 1, 2010. It is not applicable to cheques cleared under other clearing arrangements for the present.</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header className="font-myFont">KYC<h6 className="pt-2 text-primary"> (Know Your Customer)</h6></Accordion.Header>
            <Accordion.Body>
              <p className="font-bold">Q.1. What is KYC?</p>
              <p>KYC is an acronym for "Know your Customer", a term used for customer identification process. It involves making reasonable efforts to determine true identity and beneficial ownership of accounts, source of funds, the nature of customer's business, reasonableness of operations in the account in relation to the customer's business, etc which in turn helps the banks to manage their risks prudently. The objective of the KYC guidelines is to prevent banks being used, intentionally or unintentionally by criminal elements for money laundering.</p>
              <p>KYC has two components - Identity and Address. While identity remains the same, the address may change and hence the banks are required to periodically update their records.</p>

              <p className="font-bold">Q.2. Once KYC requirements are complied with while opening the account, whether the bank can again ask for KYC compliance from me?</p>
              <p>Yes. To ensure that the latest details about the customer are available, banks have been advised to periodically update the customer identification data based upon the risk category of the customers.</p>
              <p>Banks create a customer profile based on details about the customer like social/financial status, nature of business activity, information about his clients' business and their location, the purpose and reason for opening the account, the expected origin of the funds to be used within the relationship and details of occupation/employment, sources of wealth or income, expected monthly remittance, expected monthly withdrawals etc. When the transactions in the account are observed not consistent with the profile, bank may ask for any additional details / documents as required. This is just to confirm that the account is not being used for any Money Laundering/Terrorist/Criminal activities.</p>

              <p className="font-bold">Q.3. What is the detailed list of required documents under KYC?</p>
              <p>To get the detailed list of the documents that the bank can ask, <NavLink to="/KycNorms" className="font-myFont" href="#quicklinks">Click here</NavLink></p>

              <p className="font-bold">Q.4. Can my wife who is not having any address proof in her name, open an account with the bank?</p>
              <p>Yes. In such cases where the utility bills required for address verification are not in the name of the person who wants to open an account ( close relatives, e.g. wife, son, daughter and daughter and parents etc. who live with their husband, father/mother and son, as the case may be) , an identity document and a utility bill of the relative with whom the prospective customer is living along with a declaration from the relative that the said person (prospective customer) wanting to open an account is a relative and is staying with him/her is acceptable. As supplementary evidence bank may ask for a letter received through post for further confirmation.</p>

              <p className="font-bold">Q.5. I am a daily wage earner without any document to satisfy the bank about identity and address. Can I open a bank account?</p>
              <p>A customer belonging to low income group who is not able to produce documents to satisfy the bank about his identity and address, can open bank account with an introduction from another account holder who has been subjected to full KYC procedure provided that the balance in all his accounts taken together is not expected to exceed Rupees Fifty Thousand (Rs. 50,000/-) and the total credit in all the accounts taken together is not expected to exceed Rupees One Lakh (Rs. 1,00,000/-) in a year. The introducer's account with the bank should be at least six months old and should show satisfactory transactions. Photograph of the customer who proposes to open the account and also his address needs to be certified by the introducer,
              <br/><b>or</b><br/>any other evidence as to the identity and address of the customer to the satisfaction of the bank.<br/><br/>If at any point of time, the balance in all his/her accounts with the bank (taken together) exceeds Rupees Fifty Thousand (Rs. 50,000/-) or total credit in the account exceeds Rupees One Lakh (Rs. 1,00,000/-) in a year, no further transactions will be permitted until the full KYC procedure is completed.<br/><br/>In order not to inconvenience the customer, the bank will notify the customer when the balance reaches Rupees Forty Thousand (Rs. 40,000/-) or the total credit in a year reaches Rupees Eighty thousand (Rs. 80,000/-) that appropriate documents for conducting the KYC must be submitted otherwise operations in the account will be stopped.</p>
              
              <p className="font-bold">Q.6. Whether a certificate from my employer is sufficient as identity as well as address proof for opening an account?</p>
              <p>Banks rely on such certification only from corporate and other entities of repute provided that they are aware of the competent authority designated by the concerned employer to issue such certificate. In addition, banks also require at least one of the valid documents indicated above viz. Passport, Driving Licence, PAN Card, Voter's Identity Card etc. or utility bills for KYC purposes for opening bank account of salaried employees of corporate and other entities.</p>

              <p className="font-bold">Q.7. Whether the information given by me to the bank under KYC is treated as confidential?</p>
              <p>Yes. The information collected from the customer for the purpose of opening of account is treated as confidential and details thereof are not divulged for cross selling or any other similar purposes.</p>

              <p className="font-bold">Q.8. If I refuse to give information on KYC asked for by the bank, what action the bank can take against me?</p>
              <p>Where the bank is unable to apply appropriate KYC measures due to non-furnishing of information and /or non-cooperation by the customer, the bank can consider closing the account or terminating the banking/business relationship after issuing due notice to the customer explaining the reasons for taking such a decision.</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header className="font-myFont">DICGC</Accordion.Header>
            <Accordion.Body>
                <p className="font-bold">Q.1. Which banks are insured by the DICGC?</p>
                <p>Commercial Banks: All commercial banks including branches of foreign banks functioning in India, local area banks and regional rural banks are insured by the DICGC.</p>
                <p>Cooperative Banks: All State, Central and Primary cooperative banks, also called urban cooperative banks, functioning in States / Union Territories which have amended the local Cooperative Societies Act empowering the Reserve Bank of India (RBI) to order the Registrar of Cooperative Societies of the State / Union Territory to wind up a cooperative bank or to supersede its committee of management and requiring the Registrar not to take any action regarding winding up, amalgamation or reconstruction of a co-operative bank without prior sanction in writing from the Reserve Bank are covered under the Deposit Insurance System. At present all co-operative banks other than those from the States of Meghalaya, and the Union Territories of Chandigarh, Lakshadweep and Dadra and Nagar Haveli are covered under the deposit insurance system of DICGC.</p>
                <p>Primary cooperative societies are not insured by the DICGC.</p>

                <p className="font-bold">Q.2. What does the DICGC insure?</p>
                <p>In the event of a bank failure, DICGC protects bank deposits that are payable in India.<br/>The DICGC insures all deposits such as savings, fixed, current, recurring, etc. except the following types of deposits.<br/>(i) Deposits of foreign Governments;<br/>(ii) Deposits of Central/State Governments;<br/>(iii)Inter-bank deposits;<br/>(iv) Deposits of the State Land Development Banks with the State co-operative bank;<br/>(v) Any amount due on account of any deposit received outside India<br/>(vi) Any amount, which has been specifically exempted by the corporation with the previous approval of Reserve Bank of India.</p>
                
                <p className="font-bold">Q.3. What is the maximum deposit amount insured by the DICGC?</p>
                <p>Each depositor in a bank is insured upto a maximum of Rs.1,00,000 (Rupees One Lakh) for both principal and interest amount held by him in the same capacity and same right as on the date of liquidation/cancellation of bank's licence or the date on which the scheme of amalgamation/merger/reconstruction comes into force.</p>
            
                <p className="font-bold">Q.4. How will I know whether my bank is insured by the DICGC or not?</p>
                <p>The premium paid receipts are made available with the bank branches and will be made available for confirmation to customers on request.</p>

                <p className="font-bold">Q.5. What is the ceiling on amount of Insured deposits kept by one person in different branches of a bank?</p>
                <p>The deposits kept in different branches of a bank are aggregated for the purpose of insurance cover and a maximum amount upto Rupees one lakh is paid.</p>

                <p className="font-bold">Q.6. Does the DICGC insure just the principal on an account or both principal and accrued interest?</p>
                <p>The DICGC insures principal and interest upto a maximum amount of Rs. One lakh. For example, if an individual had an account with a principal amount of Rs.95,000 plus accrued interest of Rs.4,000, the total amount insured by the DICGC would be Rs.99,000. If, however, the principal amount in that account was Rs. One lakh, the accrued interest would not be insured, not because it was interest but because that was the amount over the insurance limit.</p>

                <p className="font-bold">Q.7. Can deposit insurance be increased by depositing funds into several different accounts all at the same bank?</p>
                <p>All funds held in the same type of ownership at the same bank are added together before deposit insurance is determined. If the funds are in different types of ownership or are deposited into separate banks they would then be separately insured.</p>

                <p className="font-bold">Q.8. What is a single ownership account?</p>
                <p>A single (or inpidual) ownership account is an account owned by one person. Such accounts include those in the owner's name; those established for the benefit of the owner by agents, nominees, guardians, custodians, or conservators; and those established by a business that is a sole proprietorship.</p>

                <p className="font-bold">Q.9. Are deposits in different banks separately insured?</p>
                <p>Yes. If you have deposits with more than one bank, deposit insurance coverage limit is applied separately to the deposits in each bank.</p>

                <p className="font-bold">Q.10. If I have my funds on deposit at two different banks, and those two banks are closed on the same day, are my funds added together, or insured separately?</p>
                <p>Your funds from each bank would be insured separately, regardless of the date of closure.</p>


            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header className="font-myFont">ATM</Accordion.Header>
            <Accordion.Body>
                Will be provided soon
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header className="font-myFont">15G/15H</Accordion.Header>
            <Accordion.Body>
                Will be provided soon
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
