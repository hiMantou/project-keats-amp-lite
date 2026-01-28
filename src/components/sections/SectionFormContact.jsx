import { Loading as IconLoading } from '@icon-park/react';
import {  Button } from '@/components';

const Section = () => {
    return (
        <form className="form" method="post" action-xhr="/documentation/examples/api/submit-form-xhr" target="_top">
            <div className="row">
                <div className="col-lg-12">
                    <div className="formItem">
                        <label>Name</label>
                        <input type="text" placeholder="Name" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="formItem">
                        <label>Email *</label>
                        <input className="error" type="text" placeholder="Email" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="formItem">
                        <label>Message</label>
                        <textarea placeholder="How can we help you?" />
                    </div>
                </div>
            </div>

            <div className="btnGroup">
                <Button htmlType="submit" className="btn-block" id="btnTest">SEND</Button>
                <Button htmlType="submit" className="loading btn-block">SEND <IconLoading className="spin" strokeWidth={4} /></Button>
            </div>
            <div submit-success>
                Success!
            </div>
            <div submit-error>
                Error!
            </div>
        </form>
    );
};

export default Section;
