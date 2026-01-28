import { Loading as IconLoading } from '@icon-park/react';
import { Icon, Circle, Button } from '@/components';

const Section = ({ children }) => {
    return (
        <div className="form">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="formItem">
                        <label>City</label>
                        <select className="jsSelect" defaultValue={4}>
                            <option value="1">北京</option>
                            <option value="2">上海</option>
                            <option value="3">南京</option>
                            <option value="4">Chongqing</option>
                            <option value="5">沈阳</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="formItem">
                        <label>Start Date <span className="extra">Classes start every Monday</span></label>
                        <input type="text" className="jsDatepicker" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="formItem">
                        <label>Number of Weeks</label>
                        <input id="jsSliderText" type="number" />
                        <span className="extra">Classes start every Monday</span>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="formItem">
                        <label>Accommodation Options</label>
                        <select className="jsSelect">
                            <option value="1">Homestay</option>
                            <option value="2">None</option>
                            <option value="3">Hotel</option>
                            <option value="4">Hotel</option>
                        </select>
                    </div>
                </div>
            </div>


            <div className="priceRow">
                Estimated Total <span className="label price">$ 18,643</span>
            </div>

            {children}

        </div>
    );
};

export default Section;
