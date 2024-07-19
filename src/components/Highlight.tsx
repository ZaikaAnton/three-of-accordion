import { FC, useContext } from "react";
import styled from "styled-components";

import { SearchContext } from "../App";

interface HighlightProps {
  text: string;
}

const Highlight: FC<HighlightProps> = ({ text }) => {
  const searchTerm = useContext(SearchContext);

  if (!searchTerm.trim()) {
    return <span>{text}</span>;
  }

  const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));
  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === searchTerm.toLowerCase() ? (
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
