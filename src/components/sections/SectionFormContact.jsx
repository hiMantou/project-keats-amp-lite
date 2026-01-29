import { Loading as IconLoading, CheckOne as IconCheckOne } from '@icon-park/react';
import { Button } from '@/components';

const Section = () => {
    return (
        <div className="section sectionContact">
            <div className="containerM">
                <div className="sectionHeader">
                    <h2>Contact</h2>
                    Lorem Ipsum is simply dummy text of the printing
                </div>
                <form className="form" method="post" action-xhr="http://localhost:4006/api/contact" target="_top" custom-validation-reporting="show-all-on-submit">
                    <div className="form-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="formItem">
                                    <label>Name *</label>
                                    <input type="text" name="name" placeholder="Name" required />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="formItem">
                                    <label>Email *</label>
                                    <input type="email" name="email" placeholder="Email" required />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="formItem">
                                    <label>Message *</label>
                                    <textarea name="message" placeholder="How can we help you?" required />
                                </div>
                            </div>
                        </div>

                        <div className="btnGroup">
                            <Button htmlType="submit" className="btn-block form-init">SEND</Button>
                            <Button htmlType="submit" className="loading btn-block form-submitting">SEND <IconLoading className="spin" strokeWidth={4} /></Button>
                        </div>
                    </div>
                    <div submit-success="" className="infoPop">
                        <div className="iconCheck"><IconCheckOne strokeWidth={2} /></div>
                        <h4>Lorem Ipsum is simply dummy text </h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Section;
