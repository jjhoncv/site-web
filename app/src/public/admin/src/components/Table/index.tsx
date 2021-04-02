import * as React from "react";
import "./styled.scss";

const Option = ({ id, children }) => {
  return (
    <div className="option">
      {children ? (
        children
      ) : (
        <>
          <span id={id}>Edit</span>
          <span id={id}>Remove</span>
        </>
      )}
    </div>
  );
};

interface Props {
  grid?: any[] | null;
  Component?: any;
}

export const Table: React.FC<Props> = ({ grid, Component }) => {
  return (
    <>
      {grid.length > 0 ? (
        <div className="table">
          <div className="thead">
            {!!grid &&
              Object.keys(grid[0]).map((item, key) => (
                <div key={key} className="col">
                  {item}
                </div>
              ))}
            <div className="col">Options</div>
          </div>

          <div className="tbody">
            {grid?.map((row, key) => (
              <div className="row" key={key}>
                {Object.values(row).map((item, i) => (
                  <div key={i} className="col">
                    {item}
                  </div>
                ))}
                <div className="col">
                  <Option {...row}>
                    {Component && <Component {...row} />}
                  </Option>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="table">
          <div className="thead">
            <div className="col">Not items</div>
          </div>
        </div>
      )}
    </>
  );
};
