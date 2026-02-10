const CityBox = () => {
    return (
        <div className="col-lg-2 col-md-4">
            <a href="#" className="cityBox">
                <div className="cover bgFull" style={{ backgroundImage: `url("./images/city/1.jpg")` }}></div>
                <div className="cityMeta label">
                    zhangjiajie
                    <div className="txt">张家界</div>
                </div>
            </a>
        </div>
    );
};

const Section = () => {
    return (
        <div className="section sectionCityList">
            <div className="container">
                <div className="sectionHeader"><h2>Live in China and <span>gain a life </span> <span>changing experience</span></h2></div>
                <div className="row cityList">
                    <CityBox />
                    <CityBox />
                    <CityBox />
                    <CityBox />
                    <CityBox />
                    <CityBox />

                    <CityBox />
                    <CityBox />
                    <CityBox />
                    <CityBox />
                    <CityBox />
                    <CityBox />
                </div>
            </div>
        </div>
    );
};

export default Section;
