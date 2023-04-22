import React, { ReactNode } from "react";

// interface Props {
//   text: string;
// }

interface Props {
  children: ReactNode;
  onClose: () => void;
}

// const Alert = ({ text }: Props) => {
//   return <div>{text}</div>;
// };

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
