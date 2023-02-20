import React from "react";

const Contact = () => {
    return (
        <section id="contact" class="contact  bg-gray-100">
            <div>
                <img style={{marginTop: 80, width: "100%"}} src="Images/Group 120.png"/>
            </div>
            <div class="section-title text-center">
                    <h2
                        className="md:text-4xl text-3xl text-blue-900 font-myFont text-center py-10 font-bold"
                        // style={{ paddingTop: "120px" }}
                    >
                        Contact Us
                    </h2>
                </div>

                <div>
                    <iframe
                        style={{ border: "0", width: "100%", height: "300px" }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1346.9995955583647!2d74.53999062677075!3d17.272546578494346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc16636127248b1%3A0x79c5ecb6be525364!2sThe%20Manmandir%20Co-operative%20Bank%20Limited!5e0!3m2!1sen!2sin!4v1639460754786!5m2!1sen!2sin"
                        frameborder="0"
                        allowfullscreen
                    ></iframe>
                </div>

            <div className="">

                <div className="px-5" style={{"background-color": "", "width": "100%"}}>
                    <div class="row">
                        <div class="col-lg-5 col-md-5 col-sm-12">
                            <div class="info mt-5">
                                <div  style={{marginTop: "20%"}} class="address flex mb-4">
                                    <i
                                        className="fas fa-map-marker-alt mx-4"
                                        style={{ "font-size": "36px" }}
                                    ></i>
                                    <div>
                                        <h4>Address:</h4>
                                        <p>
                                            Floor No. 02, Laxmi Keshav Complex, <br/>
                                            Kalewadi - Empire Estate Road, Pimpri Chinchwad,<br/>
                                            Pune - 411017 (Maharashtra) India
                                        </p>
                                    </div>
                                </div>

                                <div class="email flex mb-4">
                                    <i
                                        class="fas fa-envelope mx-4"
                                        style={{ "font-size": "36px" }}
                                    ></i>
                                    <div>
                                        <h4>Email:</h4>
                                        <p style={{width: "100%"}}>contact@shrisatya.com</p>
                                    </div>
                                </div>

                                <div class="phone flex mb-4">
                                    <i
                                        class="fas fa-phone-alt mx-4"
                                        style={{ "font-size": "36px" }}
                                    ></i>
                                    <div>
                                        <h4>Contact No:</h4>
                                        <p>+91 72180 55055, +91 72183 55355</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-7 col-md-7 col-sm-12 mt-5 mt-lg-0 py-5">
                            <form
                                action="forms/contact.php"
                                method="post"
                                role="form"
                                class="php-email-form"
                            >
                                <div class="row">
                                    <h2 className="md:text-3xl text-2xl text-blue-900 text-center font-myFont py-8 font-bold">
                                        Contact Form
                                    </h2>
                                    <div class="col-md-6 form-group">
                                        <input
                                            style={{"border-radius": "12px", height: 50}}
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
                                        style={{"border-radius": "12px", height: 50}}
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
                                    style={{"border-radius": "12px", height: 50}}
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
                                    style={{"border-radius": "12px", height: 200}}
                                        class="form-control"
                                        name="message"
                                        rows="5"
                                        placeholder="Type your message here"
                                        required
                                    ></textarea>
                                </div>
                                <div class="text-center">
                                    <button
                                    style={{"border-radius": "12px", width: "100%", height: 50, backgroundColor: "rgba(30, 58, 138)"}}
                                        type="submit"
                                        className="btn btn-primary my-4"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
