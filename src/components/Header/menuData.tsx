import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },

  // {
  //   id: 3,
  //   title: "Services",
  //   path: "/services",
  //   newTab: false,
  // },
  // {
  //   id: 5,
  //   title: "Solutions",
  //   path: "/solutions",
  //   newTab: false,
  // },
  // {
  //   id: 5,
  //   title: "How it works",
  //   path: "/blogs",
  //   newTab: false,
  // },
  {
    id: 6,
    title: "How it works",
    path: "/how-it-works",
    newTab: false,
    // submenu: [
    //   {
    //     id: 61,
    //     title: "Solutions",
    //     path: "/solutions",
    //     newTab: false,
    //   },
    //   {
    //     id: 62,
    //     title: "Services",
    //     path: "/services",
    //     newTab: false,
    //   },
    //   // {
    //   //   id: 63,
    //   //   title: "Contact Page",
    //   //   path: "/contact",
    //   //   newTab: false,
    //   // },
    //   // {
    //   //   id: 64,
    //   //   title: "Blog Grid Page",
    //   //   path: "/blogs",
    //   //   newTab: false,
    //   // },
    //   // {
    //   //   id: 66,
    //   //   title: "Sign Up Page",
    //   //   path: "/signup",
    //   //   newTab: false,
    //   // },
    //   // {
    //   //   id: 67,
    //   //   title: "Sign In Page",
    //   //   path: "/signin",
    //   //   newTab: false,
    //   // },
    //   // {
    //   //   id: 68,
    //   //   title: "Error Page",
    //   //   path: "/error",
    //   //   newTab: false,
    //   // },
    // ],
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 63,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
