import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [likeStatus, setLikeStatus] = useState(true);

  const toggle = () => {
    setLikeStatus(!likeStatus);
    onClick();
  };

  if (likeStatus)
    return <AiFillHeart color="#ff6b81" size={40} onClick={toggle} />;
  return <AiOutlineHeart size={40} onClick={toggle} />;
  //return <AiOutlineHeart size={40} onClick={() => setLikeStatus(true)} />;
};

export default Like;
