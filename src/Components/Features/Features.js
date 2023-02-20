import React from "react";
import ReactCardSlider from 'react-card-slider-component';
// import FontAwesomeIcon from 'fontawesome'
import { Link } from 'react-router-dom';
import './features.css'

const Features = () => {
    // const slides = [
    //     {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description"},
    //     {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description"},
    //     {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description"},
    //     {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description"},
    //     {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description"},
    // ]
    return (
        <div>
            {/* loans */}
            <link
                rel="stylesheet"
                href="https://cdn.tailgrids.com/tailgrids-fallback.css"
            />


            <div class="py-5">
                <div className="container" style={{ paddingTop: "" }}>
                    <div class="row border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                        <div class="col-sm-2 xs:hidden px-2 py-2 ">
                            <img
                                src="Images/logo1.png"
                                alt=""
                                className="img-fluid p-0 m-0 "
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
                                <h1 className="text-center text-2xl sm:xl text-red-600 md:text-4xl font-myFont">
                                    Shrisatya Multipurpose Nidhi Limited
                                </h1>
                            </div>
                            <div>
                                <h1 className="text-center text-2xl sm:xl md:text-4xl text-blue-900 font-myFont">
                                    Fixed Deposit | Gold Loan | Mortage Loan <br/> Recurring Deposit | Bond Loan | Savings Account
                                </h1>
                            </div>
                            {/* <div className="">
                                <p className="text-black text-center text-lg pt-4 px-4">
                                    Floor No. 02, Laxmi Keshav Complex, Kalewadi - Empire Estate Road,
                                    Pimpri Chinchwad, Pune - 411017 (Maharashtra) India
                                </p>
                            </div> */}
                            {/* <hr className="bg-black" /> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div>
                <img style={{width: "100%"}} src="Images/shrisatya6.jpeg"/>
            </div> */}

            <section style={{ "background": "", paddingTop: 100, paddingBottom: 100 }} class="mb-5 lg:pt-[120px] bg-[#F3F4F6]">
                <div class="container">
                    <div class="d-flex flex-wrap -mx-4 p-3">
                        <div class="rounded-lg w-full md:w-1/2 xl:w-1/4 px-4">
                            <div class="home-cards bg-white rounded-lg">
                                <img
                                    src="Images/deposit-scheme.png"
                                    alt="image"
                                    class="w-full"
                                    style={{height:"200px",width:"200px"}}
                                />
                                <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                    <h3>
                                        <a
                                            href="javascript:void(0)"
                                            class="
                                                font-semibold
                                                text-dark text-xl
                                                sm:text-[22px]
                                                md:text-xl
                                                lg:text-[22px]
                                                xl:text-xl
                                                2xl:text-[22px]
                                                mb-4
                                                block
                                                hover:text-primary
                                                "
                                        >
                                            Deposit Scheme
                                        </a>
                                    </h3>

                                    {/* <a
                                        href="javascript:void(0)"
                                        class="
                                            inline-block
                                            py-2
                                            px-7
                                            border border-[#E5E7EB]
                                            rounded-full
                                            text-base text-body-color
                                            font-medium
                                            hover:border-primary hover:bg-primary hover:text-white
                                            transition
                                            "
                                    >
                                        View Details
                                    </a> */}
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 xl:w-1/4 px-4">
                            <div class="home-cards bg-white rounded-lg overflow-hidden mb-10">
                                <img
                                    src={"Images/loan-scheme.jpg"}
                                    alt="image"
                                    class="w-full"
                                    style={{height:"200px",width:"250px"}}
                                />
                                <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                    <h3>
                                        <a
                                            href="javascript:void(0)"
                                            class="
                                                font-semibold
                                                text-dark text-xl
                                                sm:text-[22px]
                                                md:text-xl
                                                lg:text-[22px]
                                                xl:text-xl
                                                2xl:text-[22px]
                                                mb-4
                                                block
                                                hover:text-primary
                                                "
                                        >
                                            Loan Scheme
                                        </a>
                                    </h3>
                                    {/* <p class="text-base text-body-color leading-relaxed mb-7">
                                        Lorem ipsum dolor sit amet pretium
                                        consectetur adipiscing elit. Lorem
                                        consectetur adipiscing elit.
                                    </p> */}
                                    {/* <a
                                        href="javascript:void(0)"
                                        class="
                                            inline-block
                                            py-2
                                            px-7
                                            border border-[#E5E7EB]
                                            rounded-full
                                            text-base text-body-color
                                            font-medium
                                            hover:border-primary hover:bg-primary hover:text-white
                                            transition
                                            "
                                    >
                                        View Details
                                    </a> */}
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 xl:w-1/4 px-4">
                            <div class="home-cards bg-white rounded-lg overflow-hidden mb-10">
                                <img
                                    src={"Images/bank-account.jpg"}
                                    alt="image"
                                    class="w-full"
                                    style={{height:"200px",width:"250px"}}
                                />
                                <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                    <h3>
                                        <a
                                            href="javascript:void(0)"
                                            class="
                                                font-semibold
                                                text-dark text-xl
                                                sm:text-[22px]
                                                md:text-xl
                                                lg:text-[22px]
                                                xl:text-xl
                                                2xl:text-[22px]
                                                mb-4
                                                block
                                                hover:text-primary
                                                "
                                        >
                                            Bank Account
                                        </a>
                                    </h3>
                                    {/* <p class="text-base text-body-color leading-relaxed mb-7">
                                        Lorem ipsum dolor sit amet pretium
                                        consectetur adipiscing elit. Lorem
                                        consectetur adipiscing elit.
                                    </p>
                                    <a
                                        href="javascript:void(0)"
                                        class="
                                            inline-block
                                            py-2
                                            px-7
                                            border border-[#E5E7EB]
                                            rounded-full
                                            text-base text-body-color
                                            font-medium
                                            hover:border-primary hover:bg-primary hover:text-white
                                            transition
                                            "
                                    >
                                        View Details
                                    </a> */}
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 xl:w-1/4 px-4">
                            <div class="home-cards bg-white rounded-lg overflow-hidden mb-10">
                                <img
                                    src="Images/internet-banking.png"
                                    alt="image"
                                    class="w-full"
                                    style={{height:"180px",width:"250px"}}
                                />
                                <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                    <h3>
                                        <a
                                            href="javascript:void(0)"
                                            class="
                                                font-semibold
                                                text-dark text-xl
                                                sm:text-[22px]
                                                md:text-xl
                                                lg:text-[22px]
                                                xl:text-xl
                                                2xl:text-[22px]
                                                mb-4
                                                block
                                                hover:text-primary
                                                "
                                        >
                                            Internet Banking
                                        </a>
                                    </h3>
                                    {/* <p class="text-base text-body-color leading-relaxed mb-7">
                                        Lorem ipsum dolor sit amet pretium
                                        consectetur adipiscing elit. Lorem
                                        consectetur adipiscing elit.
                                    </p>
                                    <a
                                        href="javascript:void(0)"
                                        class="
                                            inline-block
                                            py-2
                                            px-7
                                            border border-[#E5E7EB]
                                            rounded-full
                                            text-base text-body-color
                                            font-medium
                                            hover:border-primary hover:bg-primary hover:text-white
                                            transition
                                            "
                                    >
                                        View Details
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-aboutus ">
                <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-12 py-10 xs:hidden">
                        <img style={{ height: "480px", margin: "auto", display: "flex", alignItems: "center" }} src="Images/abt_img (1) copy.png"></img>
                    </div>
                    <div style={{paddingLeft: "30px" }} className="col-lg-6 col-md-6 col-sm-12 ">
                        <h1 className="md:text-4xl text-center text-3xl text-blue-900 font-myFont py-8 font-bold">About Us</h1>
                        <p>श्री सत्य निधी लिमिटेड ही भारतीय कंपनी कायदा 1956 च्या कलम 620-A अंतर्गत वर्ष 2023 मध्ये स्थापन झालेली पब्लिक लिमिटेड कंपनी आहे.
                            ही एक निधी (परस्पर लाभ) कंपनी आहे जिथे फक्त सदस्य व्यवहार करू शकतात आणि सुविधांचा लाभ घेऊ शकतात.
                            
                        </p>
                        <p> नम्र सुरुवातीपासून, आम्ही राज्यभर शाखांसह संपूर्ण महाराष्ट्रात उपस्थिती मिळवली आहे.
                            पीएनएल ही केवळ आमच्यासाठी संस्था नाही; हे एक व्हिजन आणि मिशन आहे. सामाजिक बांधिलकी आणि सामाजिक जबाबदारी असलेली आर्थिक संस्था.
                            ही सामान्य माणसांनी सामान्य माणसांसाठी केलेली संस्था आहे. मानवी चेहरा असलेली संस्था, सेवा हे तिचे मुख्य उद्दिष्ट आहे.
                            चला एकत्र कूच करू आणि एकत्र वाढूया.</p>
                        <p>The Corporate Identification Number (CIN) of Shrisatya Multipurpose Nidhi Limited is U65999PN2022PLN217145. The registered office of Shrisatya Multipurpose Nidhi Limited is at S. NO 85/2 LAXMI-KESHV COMPLEX FL 201 BRT ROAD AD PUNE CITY PUNE PUNE Pune , Maharashtra.</p>
                    </div>

                </div>
            </section>

            <div className="">
                <section id="services" className="services section-bg mb-10">
                    <div
                        className="container  justify-center"
                        data-aos="fade-up"
                    >
                        <div class="section-title">
                            <h1 className="md:text-4xl text-3xl text-blue-900 font-myFont text-center py-8 font-bold">
                                Features
                            </h1>
                        </div>

                        <div className="row gy-4">
                            <div
                                className="col-lg-3 col-md-6 d-flex align-items-stretch "
                                data-aos="zoom-in"
                                data-aos-delay="100"
                            >
                                <div className="icon-box pt-1">
                                    <div className="icon mt-0 pt-0">
                                        <img
                                            src="Images/insurance2.png"
                                            alt=""
                                        />
                                        {/* <i class="fa-light fa-car-burst"></i> */}
                                    </div>
                                    <hr />
                                    <h4>
                                        <a href="" className="font-bold">
                                            Insurance
                                        </a>
                                    </h4>
                                </div>
                            </div>

                            <div
                                className="col-lg-3 col-md-6 d-flex align-items-stretch "
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                <div className="icon-box pt-1">
                                    <div className="icon">
                                        <img
                                            src="Images/banking.png"
                                            alt=""
                                        />
                                    </div>
                                    <hr />
                                    <h4>
                                        <a href="" className="font-bold">
                                            Core Banking
                                        </a>
                                    </h4>

                                </div>
                            </div>

                            <div
                                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            >
                                <div className="icon-box pt-1">
                                    <div className="icon">
                                        <img
                                            src="Images/rtgs.png"
                                            alt=""
                                        />
                                    </div>
                                    <hr />
                                    <h4>
                                        <a href="" className="font-bold">
                                            RTGS And NEFT
                                        </a>
                                    </h4>
                                </div>
                            </div>

                            <div
                                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                                data-aos="zoom-in"
                                data-aos-delay="100"
                            >
                                <div className="icon-box pt-1">
                                    <div className="icon">
                                        <img
                                            src="Images/sms.png"
                                            alt=""
                                        />
                                    </div>
                                    <hr />
                                    <h4>
                                        <a href="" className="font-bold px-5">
                                            SMS
                                        </a>
                                    </h4>
                                </div>
                            </div>

                            <div
                                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                <div className="icon-box pt-1">
                                    <div className="icon">
                                        <img
                                            src="Images/cts.png"
                                            alt=""
                                        />
                                    </div>
                                    <hr />
                                    <h4>
                                        <a href="" className="font-bold px-4 mr-5 ml-5">
                                            CTS
                                        </a>
                                    </h4>
                                </div>
                            </div>

                            <div
                                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            >
                                <div className="icon-box pt-1">
                                    <div className="icon">
                                        <img
                                            src="Images/data-center.png"
                                            alt=""
                                        />
                                    </div>
                                    <hr />
                                    <h4>
                                        <a href="" className="font-bold">
                                            Data Center DR Site
                                        </a>
                                    </h4>
                                </div>
                            </div>
                            <div
                                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            >
                                <div className="icon-box pt-1">
                                    <div className="icon">
                                        <img
                                            src="Images/abps.png"
                                            alt=""
                                        />
                                    </div>
                                    <hr />
                                    <h4>
                                        <a href="" className="font-bold">
                                            APBS & DBTL
                                        </a>
                                    </h4>
                                </div>
                            </div>
                            <div
                                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            >
                                <div className="icon-box pt-1">
                                    <div className="icon">
                                        <img
                                            src="Images/interests.png"
                                            alt=""
                                        />
                                    </div>
                                    <hr />
                                    <h4>
                                        <a href="" className="font-bold">
                                            Monthly quarterly interests
                                        </a>
                                    </h4>
                                </div>
                            </div>

                            <div class="b-example-divider1"></div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="home-aboutus">
                <div className="row">
                    <div style={{paddingRight: "30px"}} className="col-lg-6 col-md-6 col-sm-12">
                        <h1 className="md:text-4xl text-center text-3xl text-blue-900 font-myFont py-8 font-bold">About Us</h1>
                        <p>आम्ही आमच्या सर्व भागधारकांच्या हिताचे रक्षण करू आणि अनुकरणीय ग्राहक सेवेद्वारे पारदर्शक ग्राहकांना अनुकूल आर्थिक उत्पादने आणि उपाय प्रदान करून, कर्मचार्‍यांच्या कलागुणांची ओळख करून आणि त्यांना प्रेरणा, ओळख आणि पुरस्कार याद्वारे विकसित करून, भागधारकांना परतावा इष्टतम करून, शाश्वत पद्धती लागू करून आणि व्यक्ती आणि समुदायांचा आदर दाखवून, मूल्य निर्मितीद्वारे समाजाला परत देऊन सभासदांमध्ये बचतीची सवय लावणे श्री सत्य निधी लिमिटेड ही सदस्यांद्वारे,सदस्यांसाठी कंपनी म्हणून परिभाषित केली जाऊ शकते.
                        श्री सत्य निधी लिमिटेड NBFCs पण त्यांना काही अटींच्या अधीन RBI कायदा, 1934 च्या कलम 45-IA अंतर्गत नोंदणीच्या आवश्यकतेतून सूट देण्यात आली आहे.
                        श्री सत्य निधी लिमिटेड हे भारत सरकारच्या कॉर्पोरेट व्यवहार मंत्रालयाद्वारे नियंत्रित केले जाते. ज्या कंपन्या आर्थिक व्यवसाय करतात परंतु त्यांचे नियमन इतर नियामकांद्वारे केले जाते त्यांना नियमनातील दुहेरी टाळण्यासाठी रिझर्व्ह बँकेकडून त्यांच्या नियामक आवश्यकतांमधून विशिष्ट सूट दिली जाते.
                        </p>
                        <p>श्री सत्य निधी लिमिटेड ही भारतीय कंपनी कायदा 1956 च्या कलम 620-A अंतर्गत वर्ष 2022 मध्ये स्थापन झालेली पब्लिक लिमिटेड कंपनी आहे. ही एक निधी (परस्पर लाभ) कंपनी आहे जिथे फक्त सदस्य व्यवहार करू शकतात आणि सुविधांचा लाभ घेऊ शकतात. कंपनीला भारत सरकार, कंपनी व्यवहार विभाग (क्रमांक U65900PN2018PLC178285 दिनांक 24-08-2018) आणि भारतीय रिझर्व्ह बँक (DFC (BG) क्रमांक U65900PN2018PLC178285 ची मान्यता आहे.

नम्र सुरुवातीपासून, आम्ही राज्यभर शाखांसह संपूर्ण महाराष्ट्रात उपस्थिती मिळवली आहे. पीएनएल ही केवळ आमच्यासाठी संस्था नाही; हे एक व्हिजन आणि मिशन आहे. सामाजिक बांधिलकी आणि सामाजिक जबाबदारी असलेली आर्थिक संस्था. ही सामान्य माणसांनी सामान्य माणसांसाठी केलेली संस्था आहे. मानवी चेहरा असलेली संस्था, सेवा हे तिचे मुख्य उद्दिष्ट आहे. चला एकत्र कूच करू आणि एकत्र वाढूया</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 py-8 ">
                        <img  style={{ height: "500px",width:"700px", margin: "auto" }} src="Images/satya 4.png"></img>
                    </div>
                </div>
            </section>

            <section style={{ padding: "20px 30px 20px 30px", "background-color": "", marginBottom: "" }} className="row home-contact-form">
                <div className="col-lg-6 col-md-6 col-sm-12" style={{ margin: "50px auto" }}>
                    <form
                        action="forms/contact.php"
                        method="post"
                        role="form"
                        class="php-email-form"
                    >
                        <div class="row">
                            <h1 className="md:text-4xl text-3xl text-blue-900 text-center font-myFont py-8 font-bold">
                                Contact Form
                            </h1>
                            <div class="col-md-6 form-group">
                                <input
                                    style={{ "border-radius": "12px", height: 50 }}
                                    type="text"
                                    name="name"
                                    class="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div class="col-md-6 form-group mt-3 mt-md-0">
                                <input
                                    style={{ "border-radius": "12px", height: 50 }}
                                    type="email"
                                    class="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                        </div>
                        <div class="form-group mt-3">
                            <input
                                style={{ "border-radius": "12px", height: 50 }}
                                type="text"
                                class="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                required
                            />
                        </div>
                        <div class="form-group mt-3">
                            <textarea
                                style={{ "border-radius": "12px", height: 200 }}
                                class="form-control"
                                name="message"
                                rows="5"
                                placeholder="Type your message here"
                                required
                            ></textarea>
                        </div>
                        <div class="text-center">
                            <button
                                style={{ "border-radius": "12px", width: "100%", height: 50, color: "#fff", backgroundColor: "rgba(30, 58, 138)" }}
                                type="submit"
                                className="btn my-4 text-blue-900"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* <div className="home-slider">
                    <ReactCardSlider style={{"margin": "0 auto"}} slides={slides}/>
            </div> */}



        </div>
    );
};

export default Features;
