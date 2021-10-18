import React from "react";

const Index = (props: { children: any }) => {
  const newChildren = React.cloneElement(props.children, { author: "alien" });
  console.log(newChildren);

  return newChildren;
};

export default Index;
