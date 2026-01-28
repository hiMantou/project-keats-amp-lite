import classNames from "classnames";
const Box = ({ title, className, children }) => {
    return (
        <div className="col-lg-6">
            <div className={classNames("infoBox", className)}>
                <h4>{title}</h4>
                <div className="cont">{children}</div>
            </div>
        </div>
    );
};

const Section = ({ header, len }) => {
    return (
        <div className="section sectionAccommodation" >
            <div className="container">
                {header}
                <div className="sectionSubHeader">
                    <h3>Homestay</h3>
                    Suitable for students aged 1-52 weeks.
                </div>
                <div className="cover"><img src="./images/citygallery/small.jpg" /></div>
                    {/* <amp-img src={`https://source.unsplash.com/random/600x300?sign=` + Math.random()} width="600" height="300" layout="responsive" /> */}
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
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
