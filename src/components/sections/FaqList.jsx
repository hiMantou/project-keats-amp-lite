import {
    Plus as IconPlus,
    Minus as IconMinus,
} from '@icon-park/react';

const Box = ({ className, children }) => {
    return (
        <div className="jsItem item">
            <div className="jsTrigger title">
                <div className="icon"><IconPlus className="plus" /><IconMinus className="minus" /></div>
                <h4>Lorem Ipsum is simply dummy text of the printin？</h4>
            </div>
            <div className="jsText text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s</div>
        </div>
    );
};

const Section = () => {
    return (
        <div className="jsCollapse faqList">
            <Box />
            <Box />
            <Box />
            <Box />
        </div>
    );
};

export default Section;
