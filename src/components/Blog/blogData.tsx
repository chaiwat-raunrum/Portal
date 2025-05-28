import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "คอมโพเนนต์ UI ที่ดีที่สุดสำหรับเว็บไซต์สมัยใหม่",
    paragraph:
      "เรียนรู้เกี่ยวกับคอมโพเนนต์ UI ที่ดีที่สุดที่จะช่วยให้เว็บไซต์ของคุณมีความทันสมัยและใช้งานง่าย พร้อมตัวอย่างการนำไปใช้",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "สมชาย ใจดี",
      image: "/images/blog/author-01.png",
      designation: "นักออกแบบกราฟิก",
    },
    tags: ["สร้างสรรค์"],
    publishDate: "2568",
  },
  {
    id: 2,
    title: "9 วิธีง่ายๆ ในการพัฒนาทักษะการออกแบบของคุณ",
    paragraph:
      "เคล็ดลับและเทคนิคที่จะช่วยให้คุณพัฒนาทักษะการออกแบบได้อย่างรวดเร็วและมีประสิทธิภาพ เหมาะสำหรับทั้งมือใหม่และมืออาชีพ",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "วิชัย เรียนรู้",
      image: "/images/blog/author-02.png",
      designation: "นักเขียนเนื้อหา",
    },
    tags: ["คอมพิวเตอร์"],
    publishDate: "2568",
  },
  {
    id: 3,
    title: "เทคนิคการเขียนโค้ดให้เร็วขึ้นอย่างมีประสิทธิภาพ",
    paragraph:
      "เรียนรู้วิธีการเขียนโค้ดให้เร็วขึ้นและมีประสิทธิภาพมากขึ้น ด้วยเทคนิคและเครื่องมือที่นักพัฒนาระดับมืออาชีพใช้กัน",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "มานี คิดเป็น",
      image: "/images/blog/author-03.png",
      designation: "นักออกแบบกราฟิก",
    },
    tags: ["ออกแบบ"],
    publishDate: "2568",
  },
];
export default blogData;
