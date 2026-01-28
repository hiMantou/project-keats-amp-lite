

import SlickMin from './SlickMin';
import Box from './Box';



const Section = ({ header, len }) => {
    return (
        <div className="section sectionAccommodation" >
            <div className="container">
                {header}
                <div className="sectionSubHeader">
                    <h3>Homestay</h3>
                    Suitable for students aged 1-52 weeks.
                </div>
                <div className="row">
                    <SlickMin len={len} />
                </div>
                <div className="row">
                    <div className="accServiceList infoBoxList">
                        <Box className="dark" title="Location">
                            It's quite close to the school.
                        </Box>
                        <Box title="Location">
                            It's quite close to the school.
                        </Box>
                        <Box className="yellow" title="Location">
                            It's quite close to the school.
                        </Box>
                        <Box className="light" title="Facilities">
                            Single room with private or shared bathroom
                        </Box>
                        <Box title="Location">
                            It's quite close to the school.
                        </Box>
                        <Box className="yellow" title="SA Service">
                            One-time housing search fee: $500
                            <div className="jsToolTip toolTip">
                                <div className="jsContent toolTipCont">
                                    <h6>Includes</h6>
                                    <ul>
                                        <li> Property viewing</li>
                                        <li>Signing the contract</li>
                                        <li>Repair of property defects during the contract period</li>
                                        <li>Repair of property defects during the contract period</li>
                                        <li>Repair of property defects during the contract period</li>
                                        <li>Repair of property defects during the contract period</li>
                                    </ul>
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
