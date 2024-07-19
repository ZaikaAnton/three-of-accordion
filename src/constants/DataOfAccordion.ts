import { AccordionData } from "../types/types";

const data: AccordionData[] = [
  {
    id: 1,
    title: "Toyota",
    children: [
      {
        id: 2,
        title: "Corolla",
        children: [
          { id: 3, title: "Sedan", children: [] },
          { id: 4, title: "Hatchback", children: [] },
        ],
      },
      {
        id: 5,
        title: "Camry",
        children: [{ id: 6, title: "Sedan", children: [] }],
      },
      {
        id: 7,
        title: "RAV4",
        children: [{ id: 8, title: "SUV", children: [] }],
      },
    ],
  },
  {
    id: 9,
    title: "Honda",
    children: [
      {
        id: 10,
        title: "Civic",
        children: [
          { id: 11, title: "Sedan", children: [] },
          { id: 12, title: "Coupe", children: [] },
          { id: 13, title: "Hatchback", children: [] },
        ],
      },
      {
        id: 14,
        title: "Accord",
        children: [
          { id: 15, title: "Sedan", children: [] },
          { id: 16, title: "Coupe", children: [] },
        ],
      },
      {
        id: 17,
        title: "CR-V",
        children: [{ id: 18, title: "SUV", children: [] }],
      },
    ],
  },
  {
    id: 19,
    title: "Ford",
    children: [
      {
        id: 20,
        title: "Fiesta",
        children: [
          { id: 21, title: "Sedan", children: [] },
          { id: 22, title: "Hatchback", children: [] },
        ],
      },
      {
        id: 23,
        title: "Focus",
        children: [
          { id: 24, title: "Sedan", children: [] },
          { id: 25, title: "Hatchback", children: [] },
          { id: 26, title: "Wagon", children: [] },
        ],
      },
      {
        id: 27,
        title: "Mustang",
        children: [
          { id: 28, title: "Coupe", children: [] },
          { id: 29, title: "Convertible", children: [] },
        ],
      },
    ],
  },
];

export default data;
