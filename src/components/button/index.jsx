import classNames from "classnames";

const Button = (props) => {
    let {
        color = "green",
        type = "default",
        className,
        href,
        target,
        on,
        id,
        children,
        htmlType,
    } = props;

    let classes = classNames("btn", className, `btn-${type}`, `btn-${color}`);

    if (href) {
        return (
            <a id={id} className={classes} href={href} target={target}>
                {children}
            </a>
        );
    } else {
        return (
            <button id={id} className={classes} on={on} type={htmlType}>
                {children}
            </button>
        );
    }
};

export default Button;
