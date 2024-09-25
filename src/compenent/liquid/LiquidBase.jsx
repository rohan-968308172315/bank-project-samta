import React from 'react'
import './LiquidBase.css'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";

const LiquidBase = () => {
    return (
        <>
            <div className='container-fluid liquid1'>
                <div className='row about1'>
                    <div className='col-md-7'></div>
                    <div className='col-md-5 liquid_part1'>
                        <h1>SLBPF (Liquidity Base Protection Fund)</h1>
                        <p className='text-success'>
                            <NavLink className="nav_links" to={'/'}>  Home <FaAngleRight /></NavLink>
                            <NavLink className="nav_links" >  Deposits <FaAngleRight /></NavLink>
                            SLBPF (Liquidity Base Protection Fund)</p>
                    </div>
                </div>
            </div>

            <div className='container-fluid bg-light'>
                <div className='row liquid2'>
                    <div className='col-md-9'>
                        <div className='card card-body'>
                            <h3 className='text-center text-success'>SLBPF (लिक्विडिटी बेस प्रोटेक्शन)</h3>
                            <table className='main_table1'>
                                <thead> <tr>
                                    <th>ठेव रक्कम मर्यादा</th>
                                    <th>ठेवीदार संख्या</th>
                                    <th>ठेवीची रक्कम(कोटीत)</th>
                                    <th>प्रमाण</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>१ रु ते ५ लाख रु</td>
                                        <td>९३,२६५</td>
                                        <td>२७१.६८</td>
                                        <td>९५.६९%</td>
                                    </tr>
                                    <tr>
                                        <td>५ लाख रु ते १० लाख रु</td>
                                        <td>२५०९</td>
                                        <td>१६९.०४</td>
                                        <td>२.५७%</td>
                                    </tr>
                                    <tr>
                                        <td>१० लाख रु ते ३५ लाख रु</td>
                                        <td>१५०८</td>
                                        <td>२५४.००</td>
                                        <td>१.५५%</td>
                                    </tr>
                                    <tr>
                                        <td>एकुण</td>
                                        <td>९७,२८२</td>
                                        <td>६९४.७२</td>
                                        <td>९९.८१%</td>
                                    </tr>
                                    <tr>
                                        <td>३५ लाख रु ते १० कोटी रु</td>
                                        <td>१८२</td>
                                        <td>२२८.४८</td>
                                        <td>०.१९%</td>
                                    </tr>
                                    <tr>
                                        <td>एकुण</td>
                                        <td>९७,४६४</td>
                                        <td>९२३.२०</td>
                                        <td>१००.००%</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3 className='text-center text-success mt-5'>३१ मार्च २०२४ रोजी ची गुंतवणूक + लिक्विडीटी फंड</h3>
                            <table className='main_table2'>
                                <tr>
                                    <th>गुंतवणूक (SLR)</th>
                                    <td>२६५.३६</td>
                                </tr>
                                <tr>
                                    <th>कॅश + बँक बॅलन्स (CRR)</th>
                                    <td>१४.५६</td>
                                </tr>
                                <tr>
                                    <th>ठेव तारण कर्ज (FDOD)</th>
                                    <td>५१.४७</td>
                                </tr>
                                <tr>
                                    <th>सोनेतारण कर्ज</th>
                                    <td>३५३.१२</td>
                                </tr>
                                <tr>
                                    <th>कायम मालमत्ता</th>
                                    <td>१०.३१</td>
                                </tr>
                                <tr>
                                    <th>एकुण</th>
                                    <td>६९४.८२</td>
                                </tr>
                            </table>

                            <p>बँकाच्या ठेवींना डि.आय.सी.जी.सी. च्या माध्यमातुन ५ लाख रु.पर्यंत सुरक्षितता देण्यात आली आहे परंतु लिक्विडीटी बेस प्रोटेक्शन फंड चे माध्यमातुन समताच्या ९९.८१% ठेवीदारांना रु. ३५ लाख पर्यंतच्या ठेवींना सुरक्षितता मिळाली आहे.<br/>

                                उर्वरित ०.१९% ठेवीदार यांची देय रक्कम २२८ कोटी ४८ लाख <br/>

                                उर्वरित कर्ज २५९ कोटी <br/>

                                उर्वरित २२८ कोटी रुपयांच्या ठेवींकरीता त्यासाठी समता चे २५९ कोटी रुपयांचे सुरक्षित तारणी कर्ज<br/>

                                म्हणजेच सर्व कर्ज वजा जाता समताकडे तब्बल <b>३१ कोटी ची रक्कम सरप्लस असेल.</b></p>
                        </div>
                    </div>
                    <div className='col-md-3 header_head2'>
                        <form>
                            <h5>Enquire Now</h5>
                            <hr />
                            <input type='text' className='form_control mb-3' placeholder='Full Name' />
                            <input type='email' className='form_control mb-3' placeholder='Email Address' />
                            <input type='text' className='form_control mb-3' placeholder='Phone' />
                            <input type='text' className='form_control mb-3' placeholder='City' />
                            <textarea type='text' className='form_control mb-3' placeholder='Message' />
                            <button className='Apply_btn'>SEND NOW</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LiquidBase
