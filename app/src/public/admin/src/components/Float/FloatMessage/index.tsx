import * as React from "react";
import { Box } from "../../Box";
import { Button } from "../../Form/Input";
import { Float } from "../Float";
import "./style.scss";
import { useDispatch } from "react-redux";

interface Props {
  show?: boolean;
  handleClick?: Function;
  title?: string;
  children?: any;
  hide?: Function;
  align?: string;
}

export const FloatMessageBody = ({ children }) => {
  return <div className="float-message-body">{children}</div>;
};

export const FloatMessageOptions: React.FC<Props> = ({ align, children }) => {
  return (
    <div className={`float-message-foot ${align ? align : ""}`}>{children}</div>
  );
};

export const FloatMessage: React.FC<Props> = ({
  show: _show,
  children,
  hide,
  title,
}) => {
  const [show, setShow] = React.useState(_show);
  const handleHideClick = () => {
    setShow(false);
    hide && hide();
  };

  React.useEffect(() => {
    setShow(_show);
  }, [_show]);

  return (
    <>
      <Float show={show} handleClick={() => handleHideClick()}>
        <div className="float-message">
          <Box type="box-middle" scope="box-float-message">
            <div className="float-message-head">
              <h6>{title ? title : "Dashboard"}</h6>
              <div onClick={() => handleHideClick()} className="box-float-close" />
            </div>

            {React.Children.map(children, (child) => {
              if (child.type === FloatMessageOptions) {
                return React.cloneElement(child, { ...child.props });
              }
              if (child.type === FloatMessageBody) {
                return React.cloneElement(child, { ...child.props });
              }
              return (
                <>
                  <FloatMessageBody>{children}</FloatMessageBody>
                  <FloatMessageOptions>
                    <Button handleClick={() => handleHideClick()}>
                      Aceptar
                    </Button>
                  </FloatMessageOptions>
                </>
              );
            })}
          </Box>
        </div>
      </Float>
    </>
  );
};
