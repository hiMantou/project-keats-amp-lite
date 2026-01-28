import { Button } from '@/components';
import {
    Plus as IconPlus,
    Minus as IconMinus,
} from '@icon-park/react';

const Box = () => {
    return (
        <section className="item">
            <div className="title">
                <div className="icon"><IconPlus className="plus" /><IconMinus className="minus" /></div>
                <h4>Lorem Ipsum is simply dummy text of the printin？</h4>
            </div>
            <div className="text">Lorem Ipsum is simply dummy text of the  standard dummy text ever since the 1500s</div>
        </section>
    );
};
const Section = () => {
    return (
        <div className="section sectionFaq">
            <div className="containerM">
                <div className="sectionHeader"> <h2>FAQ</h2></div>
                <amp-accordion className="faqList" disable-session-states expand-single-section >
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                </amp-accordion>
                <div className="btnGroup">
                    <Button className="btn-block">
                        VIEW MORE <IconPlus strokeWidth={6} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Section;
