import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "หน้าแรก",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "เกี่ยวกับเรา",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "บทความ",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "ติดต่อเรา",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "หน้าอื่นๆ",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "หน้าเกี่ยวกับเรา",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "หน้าติดต่อเรา",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "หน้าบทความแบบตาราง",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "หน้าบทความแบบมีไซด์บาร์",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "หน้ารายละเอียดบทความ",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "หน้าเข้าสู่ระบบ",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "หน้าสมัครสมาชิก",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "หน้าแจ้งข้อผิดพลาด",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
