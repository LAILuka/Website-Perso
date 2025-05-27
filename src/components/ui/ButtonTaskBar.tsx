import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonTaskBar = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <button className="m-3" ref={ref} {...props} />;
  }
);
