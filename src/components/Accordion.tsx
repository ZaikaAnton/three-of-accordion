import styled from "styled-components";
import { FC } from "react";

import { AccordionData } from "../types/types";
import AccordionItem from "./AccordionItem";

interface AccordionProps {
  data: AccordionData[];
  openIds: number[];
}

const Accordion: FC<AccordionProps> = ({ data, openIds }) => {
  return (
    <AccordionWrapper>
      {data.map((item) => (
        <AccordionItem key={item.id} item={item} openIds={openIds} />
      ))}
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  max-height: 80vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgray;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: lightgray;
    border-radius: 10px;
  }
`;
