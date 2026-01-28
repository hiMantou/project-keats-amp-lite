import { Circle } from '@/components';

const Section = ({ index }) => {
    return (
        <div className="section sectionAdvantage">
            <div className="container">
                <div className="sectionHeader"><h2>Take a Chinese language Course <span>with Sojourn Abroad</span></h2></div>
                <div className="circleList clear">
                    
                    <Circle type="greenDark">
                        <h4>30+ Cities</h4>
                        1 In China
                    </Circle>
                    <Circle>
                        <h4>Tons of</h4>
                        2 Activities
                    </Circle>
                    <Circle className="expand" type="yellow">
                        <h4>Small Group <br/>Class</h4>
                        3 1-52 weeks
                    </Circle>
                    <Circle>
                        <h4>Duration</h4>
                        4 1-52 weeks
                    </Circle>
                    <Circle type="greenLight">
                        <h4>15 Classes</h4>
                        5 Per week
                    </Circle>
                    <Circle className="expand" type="yellow">
                        <h4>Homestay</h4>
                        6 Add-on
                    </Circle>
                    <Circle type="greenLight">
                        <h4>Start on</h4>
                        7 Any Monday
                    </Circle>
                    <Circle>
                        <h4>US $280</h4>
                        8 Per week
                    </Circle>
                </div>
            </div>
        </div>
    );
};

export default Section;
