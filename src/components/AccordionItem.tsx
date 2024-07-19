import { FC } from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

import { AccordionData } from "../types/types";
import Highlight from "./Highlight";

interface AccordionItemProps {
  item: AccordionData;
  openIds: number[];
  searchTerm: string;
}

const AccordionItem: FC<AccordionItemProps> = ({
  item,
  openIds,
  searchTerm,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(openIds.includes(item.id));
  }, [openIds]);

  return (
    <AccordionWrapper>
      <TitleButton onClick={toggleOpen}>
        {item.children.length > 0 && (
          <IconWrapper>
            <Icon data-isopen={isOpen}>-</Icon>
            <Icon data-isopen={!isOpen}>+</Icon>
          </IconWrapper>
        )}
        <TitleText>
          <Highlight text={item.title} highlight={searchTerm} />
        </TitleText>
      </TitleButton>

      <ContentWrapper data-isopen={isOpen}>
        {item.children.map((child) => (
          <AccordionItem
            key={child.id}
            item={child}
            openIds={openIds}
            searchTerm={searchTerm}
          />
        ))}
      </ContentWrapper>
    </AccordionWrapper>
  );
};

export default AccordionItem;

const AccordionWrapper = styled.div`
  padding: 10px;
`;

const TitleButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const TitleText = styled.div`
  margin-left: 10px;
`;

const IconWrapper = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
`;

const Icon = styled.span<{ "data-isopen": boolean }>`
  position: absolute;
  transition: opacity 0.3s ease-in-out, transform 0.5s ease-in-out;
  opacity: ${({ "data-isopen": isOpen }) => (isOpen ? 1 : 0)};
  transform: ${({ "data-isopen": isOpen }) =>
    isOpen ? "rotate(360deg)" : "rotate(0deg)"};
`;

const ContentWrapper = styled.div<{ "data-isopen": boolean }>`
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  max-height: ${({ "data-isopen": isOpen }) => (isOpen ? "1000px" : "0")};
  padding-left: 20px;
`;
