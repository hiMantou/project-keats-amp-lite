const CityBox = () => {
    return (
        <a href="#" className="cityBox">
            <div className="cover bgFull" style={{ backgroundImage: `url("./images/city/1.jpg")` }}></div>
            <div className="cityMeta label">
                zhangjiajie
                <div className="txt">张家界</div>
            </div>
        </a>
    );
};

const Section = () => {
    return (
        <div className="section sectionCityList">
            <div className="container">
                <div className="sectionHeader"><h2>Live in China and <span>gain a life </span> <span>changing experience</span></h2></div>
                <div className="row">
                    <div className="cityList">
                        <div className="col-lg-4">
                            <CityBox />
                        </div>
                        <div className="col-lg-4">
                            <CityBox />
                        </div>
                        <div className="col-lg-4">
                            <CityBox />
                        </div>
                        <div className="col-lg-4">
                            <CityBox />
                        </div>
                        <div className="col-lg-4">
                            <CityBox />
                        </div>
                        <div className="col-lg-4">
                            <CityBox />
                        </div>


                        <div className="col-lg-4">
                            <CityBox />
                        </div>
                        <div className="col-lg-4">
                            <CityBox />
                        </div>
                        <div className="col-lg-4">
                            <CityBox />
                        </div>
                        <div className="col-lg-4">
                            <CityBox />
                        </div>
                        <div className="col-lg-4">
                            <CityBox />
                        </div>
                        <div className="col-lg-4">
                            <CityBox />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
