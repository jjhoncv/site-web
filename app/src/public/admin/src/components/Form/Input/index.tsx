import * as React from "react";
import "./style.scss";

export const Input: React.FC<any> = React.forwardRef(
  ({ fullWidth, error, ...props }, ref) => {
    return (
      <div className="input-wrap">
        <input
          ref={ref}
          className={`input ${fullWidth ? "fullwidth" : ""}`}
          {...props}
        />  
        {error && error.length && <span className="input-error">{error}</span>}
      </div>
    );
  }
);

export const Button: any = ({ outline, handleClick, fullWidth, ...props }) => {
  return (
    <button
      onClick={(e) => handleClick(e)}
      className={`button ${fullWidth ? "fullwidth" : ""} ${
        outline ? "outline" : ""
      } `}
      {...props}
    />
  );
};
