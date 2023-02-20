import React from 'react'
import PersonalBanking from "../PersonalBanking/PersonalBanking"

const IfscCode = () => {
    return (
        <div>
            <section style={{ paddingTop: "53px"}}>
                <img
                    className="flex justify-center items-center mx-auto pt-5 my_bg img-fluid"
                    src="Images/6.jpg"
                    style={{  height: "400px", width: "100%" }}
                    alt="First slide"
                />
            </section>

            <div class="container-fluid">
                <div class="row  pt-4">
                    <div class="col-sm-3 col-md-3 col-lg-3">
                        <PersonalBanking />
                        

                    </div>
                    <div class="col-sm-9 col-md-6 col-lg-8">
                        <h2 className='pt-3'>IFSC</h2> 

                        <table class="table table-bordered" width="624" align="center" cellpadding="0" cellspacing="5">
                            <tbody><tr>
                                <td width="21%" class="tblifsc font-bold">Name</td> 
                                <td width="3%" class="tblifsc">:</td>
                                <td width="75%" class="tblifsc"><div align="left">The Manmandir Co-operative Bank Limited, Vita</div></td>
                            </tr>
                                <tr>
                                    <td class="tblifsc font-bold">Address </td>
                                    <td class="tblifsc">:</td>
                                    <td class="tblifsc"><div align="left">Op. S.T. Stand, Radhakrushna Complex, Vita, Tal-Khanapur, Dist- Sangli, 415 311</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="tblifsc font-bold">IFSC CODE</td>
                                    <td class="tblifsc">:</td>
                                    <td class="tblifsc"><div align="left">ICIC00MMCBL (5<sup>th</sup> and 6<sup>th</sup> character is zero)</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3"><div align="center"><p class="font-bold"><span>The IFSC Code is
                                        same for all the branches of - The Manmandir Co-operative Bank Limited, Vita</span></p></div></td>
                                </tr>
                            </tbody></table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default IfscCode
