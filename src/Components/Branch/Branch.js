import React from "react";

const Branch = () => {
    return (
        <div>
            <div className="container mx-auto pt-8">
                {/* <h1
                    className="md:text-4xl text-3xl text-blue-900 font-myFont text-center font-bold"
                    style={{ paddingTop: "90px" }}
                >
                    Our Branches Across Cities
                </h1> */}

                <section id="pricing" class="pricing section-bg ">
                    <div class="container mx-auto pt-4" data-aos="fade-up">
                        <div>
                            <img
                                className="flex justify-center items-center mx-auto  img-fluid"
                                src="Images/mapfinal.jpg"
                                alt="slide"
                                style={{
                                    paddingTop: "90px",
                                }}
                            />
                        </div>
                        {/* <div class="b-example-divider"> </div> */}

                        <section class="bg-white dark:bg-gray-900">
                            <div class="container px-6 py-10 mx-auto">
                                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                                    <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                        <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                            <i class="fas fa-map-marker text-warning"></i>{" "}
                                            &nbsp;&nbsp; Vita
                                        </h1>

                                        <p class="text-gray-500 dark:text-gray-300 mb-1">
                                            In front of ST stand,Vita, <br />
                                            Tal- Khanapur, Dist- Sangli.
                                            <br />
                                            PIN Code: 415 311
                                        </p>
                                        <hr />
                                        <p>
                                            IFSC Code: ICIC00MMCBL <br />
                                            MICR Code: 415812476
                                        </p>
                                        <hr />
                                        <button class="ml-2 p-1 pl-5 pr-5 bg-transparent border-1 border-blue-700 text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900">
                                            (02347) 273271
                                        </button>
                                        <button class="ml-2 p-1 pl-5 pr-5 bg-transparent border-1 border-blue-700 text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900">
                                            +91 7774097930
                                        </button>
                                        <button class="ml-2 p-1 pl-5 pr-5 bg-transparent border-1 border-blue-700 text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900">
                                            +91 8767852015
                                        </button>
                                    </div>

                                    <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                        <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                            <i class="fas fa-map-marker text-warning"></i>{" "}
                                            &nbsp;&nbsp; Atpadi
                                        </h1>

                                        <p class="text-gray-500 dark:text-gray-300 mb-1">
                                            Main road,Atpadi,
                                            <br /> Tal-Atpadi, Dist- Sangli,{" "}
                                            <br />
                                            PIN Code: 415 401.
                                        </p>
                                        <hr />
                                        <p>
                                            IFSC Code: ICIC00MMCBL <br />
                                            MICR Code: 415825501
                                        </p>
                                        <hr />
                                        <button class="p-1 pr-5 bg-transparent border-1 border-blue-700 text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900">
                                            (02343) 221114
                                        </button>
                                        <button class="ml-2 p-1 pl-5 pr-5 bg-transparent border-1 border-blue-700 text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900">
                                            +91 7774097915
                                        </button>
                                    </div>

                                    <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                        <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                            <i class="fas fa-map-marker text-warning"></i>{" "}
                                            &nbsp;&nbsp; Sangli
                                        </h1>

                                        <p class="text-gray-500 dark:text-gray-300 mb-1">
                                            Saraf Katta, Sangli <br />
                                            Tal- Miraj, Dist- Sangli
                                            <br />
                                            PIN Code: 416 416.
                                        </p>
                                        <hr />
                                        <p>
                                            IFSC Code: ICIC00MMCBL <br />
                                            MICR Code: 416812151
                                        </p>
                                        <hr />
                                        <button class="p-1 pr-5 bg-transparent border-1 border-blue-700 text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900">
                                            (0233) 2328130
                                        </button>
                                        <button class="ml-2 p-1 pl-5 pr-5 bg-transparent border-1 border-blue-700 text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900">
                                            +91 7774097912
                                        </button>
                                    </div>

                                    <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                        <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                            <i class="fas fa-map-marker text-warning"></i>{" "}
                                            &nbsp;&nbsp; Jat
                                        </h1>

                                        <p class="text-gray-500 dark:text-gray-300 mb-1">
                                            Mangalwar Peth, Jat, <br /> Tal-
                                            Jat, Dist- Sangli <br />
                                            PIN Code: 416 404
                                        </p>
                                        <hr />
                                        <p>
                                            IFSC Code: ICIC00MMCBL <br />
                                            MICR Code: 416812401
                                        </p>
                                        <hr />
                                        <button class="p-1 pr-5 bg-transparent border-1 border-blue-700 text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900">
                                            (02344) 248883
                                        </button>
                                        <button class="ml-2 p-1 pl-5 pr-5 bg-transparent border-1 border-blue-700 text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900">
                                            +91 7774097913
                                        </button>
                                    </div>

                                    <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                        <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                            <i class="fas fa-map-marker text-warning"></i>{" "}
                                            &nbsp;&nbsp; Tasgaon
                                        </h1>

                                        <p class="text-gray-500 dark:text-gray-300 mb-1">
                                            Om Shiv Sagar Complex, <br />
                                            Joshi Galli, Tasgaon,
                                            <br />
                                            Tal- Tasgaon, Dist- Sangli. <br />
                                            PIN Code: 416 312.
                                        </p>
                                        <hr />
                                        <p>
                                            IFSC Code: ICIC00MMCBL <br />
                                            MICR Code: 416812302
                                        </p>
                                        <hr />
                                        <button class="p-1 pr-5 bg-transparent border-1 border-blue-700 text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900">
                                            (02346) 241875
                                        </button>
                                        <button class="ml-2 p-1 pl-5 pr-5 bg-transparent border-1 border-blue-700 text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900">
                                            +91 7774097917
                                        </button>
                                    </div>

                                    <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                        <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                            <i class="fas fa-map-marker text-warning"></i>{" "}
                                            &nbsp;&nbsp; Mayani
                                        </h1>

                                        <p class="text-gray-500 dark:text-gray-300 mb-1">
                                            Vita Road, Mayani, <br />
                                            Tal- Khatav, Dist- Satara
                                            <br />
                                            PIN Code: 415 102
                                        </p>
                                        <hr />
                                        <p>
                                            IFSC Code: ICIC00MMCBL <br />
                                            MICR Code: 415825502
                                        </p>
                                        <hr />
                                        <button class="p-1 pr-5 bg-transparent border-1 border-blue-700 text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900">
                                            (02161) 270311
                                        </button>
                                        <button class="ml-2 p-1 pl-5 pr-5 bg-transparent border-1 border-blue-700 text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900">
                                            +91 7774030948
                                        </button>
                                    </div>
                                    <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                        <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                            <i class="fas fa-map-marker text-warning"></i>{" "}
                                            &nbsp;&nbsp; Mahud(Bk)
                                        </h1>

                                        <p class="text-gray-500 dark:text-gray-300 mb-1">
                                            2101, Yamuna Niwas, Navi Peth,
                                            Pandharpur-Malharpeth Road,
                                            Mahud(Bk),
                                            <br />
                                            Tal- Sangola, Dist- Solapur.
                                            <br /> PIN Code: 413 306.
                                        </p>
                                        <hr />
                                        <p>
                                            IFSC Code: ICIC00MMCBL <br />
                                            MICR Code: 413825501
                                        </p>
                                        <hr />
                                        <button class="p-1 pr-5 bg-transparent border-1 border-blue-700 text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900">
                                            (02187) 246009
                                        </button>
                                        <button class="ml-2 p-1 pl-5 pr-5 bg-transparent border-1 border-blue-700 text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900">
                                            +91 7774005918
                                        </button>
                                    </div>
                                    <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                        <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                            <i class="fas fa-map-marker text-warning"></i>{" "}
                                            &nbsp;&nbsp; Sankh
                                        </h1>

                                        <p class="text-gray-500 dark:text-gray-300 mb-1">
                                            Gra. Mi. No. 1351, Jat Road, Sankh,
                                            <br />
                                            Tal- Jat, Dist- Sangli
                                            <br /> PIN Code: 416 412.
                                        </p>
                                        <hr />
                                        <p>
                                            IFSC Code: ICIC00MMCBL <br />
                                            MICR Code: 416812501
                                        </p>
                                        <hr />
                                        <button class="p-1 pr-5 bg-transparent border-1 border-blue-700 text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900">
                                            (02344) 227050
                                        </button>
                                        <button class="ml-2 p-1 pl-5 pr-5 bg-transparent border-1 border-blue-700 text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900">
                                            +91 7774097929
                                        </button>
                                    </div>
                                    <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                        <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                            <i class="fas fa-map-marker text-warning"></i>{" "}
                                            &nbsp;&nbsp; Kavathe Mahankal
                                        </h1>

                                        <p class="text-gray-500 dark:text-gray-300 mb-1">
                                            552, Bazar-peth, Kavathe Mahankal,
                                            <br />
                                            Tal- Kavathe Mahankal, Dist- Sangli
                                            <br />
                                            PIN Code: 416 405.
                                        </p>
                                        <hr />
                                        <p>
                                            IFSC Code: ICIC00MMCBL <br />
                                            MICR Code: 416812502
                                        </p>
                                        <hr />
                                        <button class="p-1 pr-5 bg-transparent border-1 border-blue-700 text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900">
                                            (02341) 222090
                                        </button>
                                        <button class="ml-2 p-1 pl-5 pr-5 bg-transparent border-1 border-blue-700 text-blue-700 text-sm rounded-lg hover:bg-blue-900  focus:border-4 focus:border-blue-900">
                                            +91 7774097914
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Branch;
