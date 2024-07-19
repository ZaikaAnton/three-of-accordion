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
          {
            id: 3,
            title: "1st Generation",
            children: [
              { id: 4, title: "Sedan", children: [] },
              { id: 5, title: "Hatchback", children: [] },
            ],
          },
          {
            id: 6,
            title: "2nd Generation",
            children: [
              { id: 7, title: "Sedan", children: [] },
              { id: 8, title: "Hatchback", children: [] },
            ],
          },
        ],
      },
      {
        id: 9,
        title: "Camry",
        children: [
          {
            id: 10,
            title: "1st Generation",
            children: [{ id: 11, title: "Sedan", children: [] }],
          },
          {
            id: 12,
            title: "2nd Generation",
            children: [{ id: 13, title: "Sedan", children: [] }],
          },
        ],
      },
      {
        id: 14,
        title: "RAV4",
        children: [
          {
            id: 15,
            title: "1st Generation",
            children: [{ id: 16, title: "SUV", children: [] }],
          },
          {
            id: 17,
            title: "2nd Generation",
            children: [{ id: 18, title: "SUV", children: [] }],
          },
        ],
      },
    ],
  },
  {
    id: 19,
    title: "Honda",
    children: [
      {
        id: 20,
        title: "Civic",
        children: [
          {
            id: 21,
            title: "1st Generation",
            children: [
              { id: 22, title: "Sedan", children: [] },
              { id: 23, title: "Coupe", children: [] },
              { id: 24, title: "Hatchback", children: [] },
            ],
          },
          {
            id: 25,
            title: "2nd Generation",
            children: [
              { id: 26, title: "Sedan", children: [] },
              { id: 27, title: "Coupe", children: [] },
              { id: 28, title: "Hatchback", children: [] },
            ],
          },
        ],
      },
      {
        id: 29,
        title: "Accord",
        children: [
          {
            id: 30,
            title: "1st Generation",
            children: [
              { id: 31, title: "Sedan", children: [] },
              { id: 32, title: "Coupe", children: [] },
            ],
          },
          {
            id: 33,
            title: "2nd Generation",
            children: [
              { id: 34, title: "Sedan", children: [] },
              { id: 35, title: "Coupe", children: [] },
            ],
          },
        ],
      },
      {
        id: 36,
        title: "CR-V",
        children: [
          {
            id: 37,
            title: "1st Generation",
            children: [{ id: 38, title: "SUV", children: [] }],
          },
          {
            id: 39,
            title: "2nd Generation",
            children: [{ id: 40, title: "SUV", children: [] }],
          },
        ],
      },
    ],
  },
  {
    id: 41,
    title: "Ford",
    children: [
      {
        id: 42,
        title: "Fiesta",
        children: [
          {
            id: 43,
            title: "1st Generation",
            children: [
              { id: 44, title: "Sedan", children: [] },
              { id: 45, title: "Hatchback", children: [] },
            ],
          },
          {
            id: 46,
            title: "2nd Generation",
            children: [
              { id: 47, title: "Sedan", children: [] },
              { id: 48, title: "Hatchback", children: [] },
            ],
          },
        ],
      },
      {
        id: 49,
        title: "Focus",
        children: [
          {
            id: 50,
            title: "1st Generation",
            children: [
              { id: 51, title: "Sedan", children: [] },
              { id: 52, title: "Hatchback", children: [] },
              { id: 53, title: "Wagon", children: [] },
            ],
          },
          {
            id: 54,
            title: "2nd Generation",
            children: [
              { id: 55, title: "Sedan", children: [] },
              { id: 56, title: "Hatchback", children: [] },
              { id: 57, title: "Wagon", children: [] },
            ],
          },
        ],
      },
      {
        id: 58,
        title: "Mustang",
        children: [
          {
            id: 59,
            title: "1st Generation",
            children: [
              { id: 60, title: "Coupe", children: [] },
              { id: 61, title: "Convertible", children: [] },
            ],
          },
          {
            id: 62,
            title: "2nd Generation",
            children: [
              { id: 63, title: "Coupe", children: [] },
              { id: 64, title: "Convertible", children: [] },
            ],
          },
        ],
      },
    ],
  },
];

export default data;
