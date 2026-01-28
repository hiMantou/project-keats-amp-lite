

import { Icon } from '@/components';
const Box = ({ type, children }) => {
    return (
        <div className="col-lg-6">
            <div className="box">
                <div className="icon"><Icon type={type} /></div>
                <h4>{children}</h4>
            </div>
        </div>
    );
};

const Section = () => {
    return (
        <div className="section SectionAssistant" >
            <div className="container">
                <div className="sectionHeader">
                    <h2>Your SA Assistant <span>will<br /> help you with</span></h2>
                </div>
                <div className="row">
                    <div className="assistantList">
                        <Box type="Edit">1 Accommodation</Box>
                        <Box type="Dinner">2 Welcome Dinner Dinner Dinner Dinner</Box>
                        <Box type="Card">3 SIM card & Metro</Box>
                        <Box type="Medical">4 Purchase medical insurance</Box>
                        <Box type="Hospital">5 See a doctor</Box>
                        <Box type="Glass">6 Organize activities</Box>
                        <Box type="Luggage">7 Travel planning</Box>
                        <Box type="Book">8 Tracking your satisfaction</Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
