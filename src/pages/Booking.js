import training from '../pictures/training.jpg';
import logo from '../pictures/logob.png';
import tooltips from '../pictures/tooltips.png';
import {checkValidation} from '../script.js';

const Booking = () => {
    return (
        <main>
            <br/>
            <div className="container">
                <p>Hoopster \ Booking</p>
            </div>
            <div className="container">
                <div className="bg-body container-fluid py-2 mt-3" id="border">
                    <h2 className="featurette-heading"><b>Book a service</b><br/><span className="text-muted">We would love to train you.</span></h2>
                    <div className="row featurette">
                        <div className="col-lg-7">
                            <span className="red">Required Information *</span>
                            <form>
                            <br/>
                                <h4 className="mb-3"><img src="https://img.icons8.com/material/26/000000/form--v1.png" alt="pic"/> General information</h4>
                                <div className="mb-3">
                                    <label for="name" className="form-label">Full name (first / last) <img src={tooltips} style={{width: "18px"}} alt="pic" title="Enter your prefered name to be addressed by."/> <span className="red">*</span></label>
                                    <input type="text" className="form-control" id="name" aria-describedby="Name"/>
                                    <div id="invalid-feedback-name" className="err"></div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Email address <img src={tooltips} style={{width: "18px"}} alt="pic" title="Enter your email so we can send you a receipt."/> <span className="red">*</span></label>
                                        <input type="email" className="form-control" id="email"/>
                                        <div id="invalid-feedback-email" className="err"></div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Phone number <img src={tooltips} style={{width: "18px"}} alt="pic" title="Enter your phone number so we can contact you."/> <span className="red">*</span></label>
                                        <input type="tel" className="form-control" id="telephone"/>
                                        <div id="invalid-feedback-telephone" className="err"></div>
                                    </div>
                                </div>

                                <hr className="mb-4"/>
                                <h4 className="mb-3"><img src={logo} style={{width: "26px"}} alt="pic"/> Services</h4>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Select your service or services <span className="red">*</span></label><br/>
                                        <input type="checkbox" id="media" name="media" value="media"/>
                                        <label for="media"> &nbsp; Open Court (10$)</label><br/>
                                        <input type="checkbox" id="advertisement" name="advertisement" value="advertisement"/>
                                        <label for="advertisement"> &nbsp; Group Training (30$)</label><br/>
                                        <input type="checkbox" id="friend" name="friend" value="friend"/>
                                        <label for="friend"> &nbsp; Individual Training (45$)</label><br/>
                                        <input type="checkbox" id="blog" name="blog" value="blog"/>
                                        <label for="blog"> &nbsp; Organized Games (25$)</label><br/>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Select your skill level<span className="red">*</span></label><br/>
                                        <input type="radio" id="age1" name="age" value="30"/>
                                        <label for="age1"> &nbsp; Beginner (0$)</label><br/>
                                        <input type="radio" id="age2" name="age" value="60"/>
                                        <label for="age2"> &nbsp; Average (5$)</label><br/>  
                                        <input type="radio" id="age3" name="age" value="100"/>
                                        <label for="age3"> &nbsp; Experienced (10$)</label><br/>
                                    </div>
                                </div>

                                <hr className="mb-4"/>
                                <h4 className="mb-3"><img src="https://img.icons8.com/ios-glyphs/26/000000/bank-card-back-side.png" alt="pic"/> Payment information</h4>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Name on card <span className="red">*</span></label>
                                        <input type="text" className="form-control" id="cardname"/>
                                        <div id="invalid-feedback-cardname" classname="err"></div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Credit card number <img src={tooltips} style={{width: "18px"}} alt="pic" title="We ask for the credit card as proof of payment."/> <span className="red">*</span></label>
                                        <input type="text" className="form-control" id="cardnumber"/>
                                        <div id="invalid-feedback-cardnumber" className="err"></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Expiration date <img src={tooltips} style={{width: "18px"}} alt="pic" title="The date on the front of your card: XX/XX"/> <span className="red">*</span></label>
                                        <input type="text" className="form-control" id="cardexpirationdate"/>
                                        <div id="invalid-feedback-cardexpirationdate" className="err"></div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">CVV <img src={tooltips} style={{width: "18px"}} alt="pic" title="The 3 digit number on the back of your card."/> <span className="red">*</span></label>
                                        <input type="text" className="form-control" id="cardcvv"/>
                                        <div id="invalid-feedback-cardcvv" className="err"></div>
                                    </div>
                                </div>
                            </form>
                            <hr className="mb-4"/>
                            <div className="text-center">
                                <button onClick={checkValidation} className="btn btn-primary">Book Now!</button>
                            </div><br/>
                        </div>
                        <div className="col-lg-4"><br/><img src={training} alt="pic"/></div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Booking;