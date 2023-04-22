import React, { ReactNode } from "react";

// interface Props {
//   text: string;
// }

interface Props {
  children: ReactNode;
}

// const Alert = ({ text }: Props) => {
//   return <div>{text}</div>;
// };

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
