const CityBox = ({ index }) => {
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

export default CityBox;
