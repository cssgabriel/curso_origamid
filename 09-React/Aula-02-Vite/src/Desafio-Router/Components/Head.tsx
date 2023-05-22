import React from "react";

interface Props {
  title: string;
  description: string;
  [key: string]: unknown;
}

const Head = (props: Props) => {
  React.useEffect(() => {
    document.title = props.title;
    document
      .querySelector("meta[name='description']")
      ?.setAttribute("content", props.description);
  });

  return <></>;
};

export default Head;
