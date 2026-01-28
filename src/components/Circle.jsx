import classNames from "classnames";
const Circle = ({ className, children, type }) => {
    return (
        <div className={classNames("item", className, type)}>
            <div className="inner">
                <div className="cont">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Circle;
