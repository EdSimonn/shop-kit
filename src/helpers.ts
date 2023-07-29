/** @format */
interface AccordionItem {
  length: number;
  title: string;
  links: string[] | { name: string }[];
  isActive: boolean;
}

export const initialAccordionItems: AccordionItem[] = [
  {
    length: 0,
    title: "SHOP",
    links: [
      { name: "Abouts us" },
      { name: "Leadershiip" },
      { name: "Careers" },
      { name: "Article & News" },
      { name: "Legaol Notice" }
    ],
    isActive: false,
  },
  {
    length: 0,
    title: "INFORMATION",
    links: [
      { name: "Abouts us" },
      { name: "Leadershiip" },
      { name: "Careers" },
      { name: "Article & News" },
      { name: "Legaol Notice" }
    ],
    isActive: false
  },
  {
    length: 0,
    title: "CUSTOMER SERVICE",
    links: [
      { name: "Abouts us" },
      { name: "Leadershiip" },
      { name: "Careers" },
      { name: "Article & News" },
      { name: "Legaol Notice" }
    ],
    isActive: false,
  },
];
