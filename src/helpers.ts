/** @format */
import { hero1 } from "../public/assets";

interface FooterItem {
  length: number;
  title: string;
  links: string[] | { name: string }[];
  isActive: boolean;
}

export const initialFooterItems: FooterItem[] = [
  {
    length: 0,
    title: "SHOP",
    links: [
      { name: "New In" },
      { name: "" },
      { name: "Collections" },
      { name: "Top Brands" },
      { name: "Sales" },
      { name: "Special Offer" }
    ],
    isActive: false,
  },
  {
    length: 0,
    title: "INFORMATION",
    links: [
      { name: "About" },
      { name: "Customer Service" },
      { name: "Reward Program" },
      { name: "Shippings & Returns" },
      { name: "Privacy Policy" },
      { name: "Terms & Conditions" },
      { name: "Blog" },
    ],
    isActive: false
  },
  {
    length: 0,
    title: "CUSTOMER SERVICE",
    links: [
      { name: "Search Terms" },
      { name: "Advanced Search" },
      { name: "Orders & Returns" },
      { name: "Contact Us" },
      { name: "Theme FAQS" },
      { name: "Consultant" }
    ],
    isActive: false,
  },
];

export const bannerData = [
  {
    img: hero1,
    title: "The Home Collection"
  },
  {
    img: hero1,
    title: "The Away Collection"
  },
]

export const category = [
  {
    img: hero1,
    name: 'Soccer',
  },
  {
    img: hero1,
    name: 'NBA',
  },
  {
    img: hero1,
    name: 'Baseball',
  },
  {
    img: hero1,
    name: 'NFL',
  },
]