import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Faq from "../Faq/Faq";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Plan from "../Plan/Plan";
import Notice from "../Notice/Notice";
import Branch from "../Branch/Branch";

import Rtgs from "../ServiceLinks/Rtgs_Neft";
import Locker from "../ServiceLinks/Locker";
import Sms from "../ServiceLinks/Sms_banking";
import Abps from "../ServiceLinks/APBS";
import Executor_Trustee from "../ServiceLinks/Executor_Trustee";
import AnyBranch from "../ServiceLinks/AnyBranch";
import UtilityBill from "../ServiceLinks/UtilityBill";

import IfscCode from "../QuickLinks/IfscCode";
import RateOfInterest from "../QuickLinks/RateOfInterest";
import Complaint from "../QuickLinks/Complaint";
import BankHolidays from "../QuickLinks/BankHolidays";
import KycNorms from "../QuickLinks/KycNorms";

import Deposit from "../PersonalBankingLinks/Deposit"
import Loans from "../PersonalBankingLinks/Loans";

const Page = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/about" element={<About />} />

        <Route path="/service" element={<Rtgs />} />
        <Route path="/locker" element={<Locker />} />
        <Route path="/sms" element={<Sms />} />
        <Route path="/Abps" element={<Abps />} />
        <Route path="/Executor-Trustee" element={<Executor_Trustee />} />
        <Route path="/AnyBranch" element={<AnyBranch />} />
        <Route path="/UtilityBill" element={<UtilityBill />} />

        <Route path="/PersonalBanking" element={<Deposit />} />
        <Route path="/Loans" element={<Loans />} />

        <Route path="/IfscCode" element={<IfscCode />} />
        <Route path="/RateOfInterest" element={<RateOfInterest />} />
        <Route path="/Complaint" element={<Complaint />} />
        <Route path="/BankHolidays" element={<BankHolidays />} />
        <Route path="/KycNorms" element={<KycNorms />} />


        <Route path="/branch" element={<Branch />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Page;
