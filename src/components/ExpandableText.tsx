import React, { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  //   const [show, setShow] = useState(false);

  //   const handleShow = () => {
  //     const set = show ? false : true;
  //     setShow(set);
  //   };

  const [Expanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p> {children}</p>;

  const text = Expanded ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!Expanded)}>
        {" "}
        {Expanded ? "Less" : "More"}{" "}
      </button>
    </p>
    //  <>
    // <p>
    //     Lorem Ipsum is simply dummy text of the printing and typesetting
    //     industry. Lorem Ipsum has been the industry's standard dummy text ever
    //     since the 1500s, when an unknown printer took a galley of type and
    //     scrambled it to make a type specimen book. It has survived not only five
    //     centuries, but also the leap into electronic typesetting, remaining
    //     essentially unchanged. It was popularised in the 1960s with the release
    //     of Letraset sheets containing Lorem Ipsum passages, and more recently
    //     with desktop publishing software like Aldus PageMaker including versions
    //     of Lorem Ipsum.
    //   </p>
    //  <button onClick={handleShow}> {show ? "Less" : "More"}</button>
    // </>
  );
};

export default ExpandableText;
