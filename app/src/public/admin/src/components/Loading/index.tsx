import * as React from "react";
import "./style.scss";

export const Loading: React.FC<any> = () => {
  return (
    <div className={`loading`}>
      <span>...</span>
    </div>
  );
};
