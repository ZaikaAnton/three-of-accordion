import { useState } from "react";
import { FC } from "react";
import styled from "styled-components";

import Accordion from "./components/Accordion";
import { AccordionData } from "./types/types";
import data from "./constants/DataOfAccordion";

const App: FC = () => {
  // Стейт для термина в поисковике
  const [searchTerm, setSearchTerm] = useState("");
  const [openIds, setOpenIds] = useState<number[]>([]);

  // Функция на событие onChange.
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Когда мы что-то вводим в интуп, то значения с инпута мы записываем в стейт searchTerm
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    if (term) {
      // Получает массив с id, который соответствуют значению term
      const openIds = collectOpenIds(data, term);
      // Записывает массив в стейт openIds
      setOpenIds(openIds);
    } else {
      // или пустой массив
      setOpenIds([]);
    }
  };

  // Функция для поиска id по значению с инпута
  const collectOpenIds = (items: AccordionData[], term: string): number[] => {
    let ids: number[] = [];
    for (const item of items) {
      if (item.title.toLowerCase().includes(term)) {
        ids.push(item.id);
        ids = ids.concat(collectOpenIds(item.children, term));
      } else if (item.children.length > 0) {
        const childIds = collectOpenIds(item.children, term);
        if (childIds.length > 0) {
          ids.push(item.id);
          ids = ids.concat(childIds);
        }
      }
    }
    return ids;
  };

  return (
    <MainContainer>
      <Content>
        <h1 style={{ textAlign: "center", fontSize: "30px" }}>
          Accordion of cars
        </h1>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <Accordion data={data} openIds={openIds} />
      </Content>
    </MainContainer>
  );
};

export default App;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  border: 1px solid gray;
  border-radius: 10px;
  width: 500px;
  margin: 20px 0;
  padding: 10px;
`;

const SearchInput = styled.input`
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
`;
