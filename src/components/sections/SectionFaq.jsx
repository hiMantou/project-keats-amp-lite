import { Plus as IconPlus } from '@icon-park/react';
import { Button } from '@/components';
import FaqList from './FaqList';

const Section = () => {
    return (
        <div className="section sectionFaq">
            <div className="containerM">
                <div className="sectionHeader"> <h2>FAQ</h2></div>
                <FaqList />
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
