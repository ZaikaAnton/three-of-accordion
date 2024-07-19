import { FC } from "react";

import styled from "styled-components";

interface HighlightProps {
  text: string;
  highlight: string;
}

const Highlight: FC<HighlightProps> = ({ text, highlight }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }

  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <HighlightedText key={index}>{part}</HighlightedText>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default Highlight;

const HighlightedText = styled.span`
  background-color: yellow;
`;
