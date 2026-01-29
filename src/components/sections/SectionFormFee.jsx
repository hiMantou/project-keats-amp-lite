import { Loading as IconLoading } from '@icon-park/react';
import { Button } from '@/components';

const Section = () => {
    return (
        <div className="section sectionFee">
            <div className="containerM">
                <div className="sectionHeader">
                    <h2>Program Fee</h2>
                    <h3><span>Small Group Chinese Class</span></h3>
                </div>

                <form className="form" method="post" action-xhr="https://localhost:4006/api/price" target="_top" custom-validation-reporting="show-all-on-submit">
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
                                    <input name="start_date" defaultValue="02/02/2026" placeholder="Pick a date"/>
                                </amp-date-picker>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="formItem">
                                <label>Number of Weeks</label>
                                <input type="number" name="weeks" defaultValue="2" min="2" max="24" />
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
                    <div className="priceRow">
                        <div className="form-submitting">
                            Estimated Total <span className="label price"><IconLoading className="spin" /></span>
                        </div>
                        <div submit-success="">
                            <template type="amp-mustache">
                                Estimated Total <span className="label price">$ {`{{price}}`}</span>
                            </template>
                        </div>
                    </div>
                    <div className="btnGroup form-init">
                        <Button className="btn-block">APPLY</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Section;
