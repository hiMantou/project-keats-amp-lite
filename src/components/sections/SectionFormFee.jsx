import { Loading as IconLoading } from '@icon-park/react';
import { Icon, Circle, Button } from '@/components';

const Section = () => {
    return (
        <div className="section sectionFee">
            <div className="containerM">

                <div className="sectionHeader">
                    <h2>Program Fee</h2>
                    <h3><span>Small Group Chinese Class</span></h3>
                </div>



                <form className="form" method="post" action-xhr="/documentation/examples/api/submit-form-input-text-xhr" target="_top">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="formItem">
                                <label>City</label>
                                <select>
                                    <option value="1">北京</option>
                                    <option value="2">上海</option>
                                    <option value="3">南京</option>
                                    <option value="4">Chongqing</option>
                                    <option value="5">沈阳</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="formItem">
                                <label>Start Date <span className="extra">Classes start every Monday</span></label>
                                <amp-date-picker
                                    type="single" mode="overlay" layout="container"
                                    input-selector="[name=start_date]"
                                    locale="en"
                                    blocked="FREQ=WEEKLY;WKST=SU;BYDAY=TU,WE,TH,FR,SA,SU" 
                                    format="DD/MM/YYYY">
                                    <input name="start_date" value="02/02/2026" placeholder="Pick a date"/>
                                </amp-date-picker>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="formItem">
                                <label>Number of Weeks</label>
                                <input type="number" name="weeks" value="2" min="2" max="24" />
                                <span className="extra">2-24</span>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="formItem">
                                <label>Accommodation Options</label>
                                <select>
                                    <option value="1">Homestay</option>
                                    <option value="2">None</option>
                                    <option value="3">Hotel</option>
                                    <option value="4">Hotel</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div submitting>
                        <div className="priceRow">
                            Estimated Total <span className="label price"><IconLoading className="spin" /></span>
                        </div>
                    </div>
                    <div submit-success>
                        <template type="amp-mustache">
                            <div className="priceRow">
                                Estimated Total <span className="label price">$ 18,643</span>
                            </div>
                            {/* Success! Thanks {{ name }} for trying the <code>amp-form</code> demo! Try to insert the word "error" as a name input in the form to see how <code>amp-form</code> handles errors. */}
                        </template>
                    </div>
                    
                    <div className="btnGroup">
                        <Button className="btn-block">APPLY</Button>
                    </div>
                    
                </form>

            </div>
        </div>
    );
};

export default Section;
