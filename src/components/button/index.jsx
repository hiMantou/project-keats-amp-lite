import classNames from "classnames";

const Button = (props) => {
  let {
    color = "yellow",
    type = "default",
    border = true,
    className,
    href,
    target,
    on,
    children,
    htmlType,
  } = props;

  let classes = classNames("btn", className, `btn-${type}`, `btn-${color}`, {
    "btn-border-none": !border,
  });

  if (href) {
    return (
      <a className={classes} href={href} target={target}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} on={on} type={htmlType}>
        {children}
      </button>
    );
  }
};

export default Button;
