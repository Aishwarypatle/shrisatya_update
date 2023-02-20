import React from 'react'
import PersonalBanking from "../PersonalBanking/PersonalBanking"

const Complaint = () => {
    return (
        <div>
            <section style={{ paddingTop: "53px"}}>
                <img
                    className="flex justify-center items-center mx-auto pt-5 my_bg img-fluid"
                    src="Images/4.jpg"
                    style={{ height: "400px", width: "100%" }}
                    alt="First slide"
                />
            </section>

            <div class="container-fluid">
                <div class="row  pt-4">
                    <div class="col-sm-3 col-md-3 col-lg-3">

                    <PersonalBanking />

                    </div>
                    <div class="col-sm-9 col-md-6 col-lg-8 px-4 pb-4">
                        <h2 className='pt-3'>Post Your Complaint</h2>

                        <form class="needs-validation" novalidate>
                            <div class="form-row">
                                <div class="col-md-6 mb-3">
                                    <label for="validationTooltip01">Customer Name</label>
                                    <input type="text" class="form-control" id="validationTooltip01" placeholder="Customer name" required />
                                    <div class="valid-tooltip">
                                        Looks good!
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="validationTooltip02">Customer Mobile</label>
                                    <input type="text" class="form-control" id="validationTooltip02" placeholder="Customer Mobile" required />
                                    <div class="valid-tooltip">
                                        Looks good!
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="validationTooltip02">Customer Account No.</label>
                                    <input type="text" class="form-control" id="validationTooltip02" placeholder="Customer account no" required />
                                    <div class="valid-tooltip">
                                        Looks good!
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-6 mb-3">

                                </div>
                                <div class="col-md-3 mb-3">
                                    <label for="validationTooltip05">Select Branch</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>---Select Branch---</option>
                                        <option value="1">Vita</option>
                                        <option value="2">Aatpadi</option>
                                        <option value="3">Jat</option>
                                        <option value="4">Sangli</option>
                                        <option value="5">Tasgoan</option>
                                        <option value="6">Mayani</option>
                                        <option value="7">Mahud</option>
                                        <option value="8">Sankh</option>
                                        <option value="9">Kavathemahankal</option>
                                    </select>
                                </div>
                                <div class="col-md-8 mb-3">
                                    <label for="validationTooltip05">Describe Your Complaint</label>
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                       
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-primary" type="submit">Submit form</button>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Complaint
