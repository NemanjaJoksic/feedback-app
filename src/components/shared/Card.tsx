import React from "react";

function Card(props: React.PropsWithChildren) {
  return <div className="card">{props.children}</div>;
}

export default Card;
