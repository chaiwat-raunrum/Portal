"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "การสำรวจ MERN Stack: พลังแห่งการพัฒนาเว็บสมัยใหม่",
      image: "/images/blog/blog-01.jpg",
      excerpt:
        "เรียนรู้เกี่ยวกับ MERN Stack (MongoDB, Express, React, Node.js) และวิธีการใช้งานเพื่อสร้างแอปพลิเคชันเว็บที่ทันสมัย",
      author: {
        name: "สมชาย ใจดี",
        image: "/images/blog/author-01.png",
        role: "นักพัฒนาเว็บ",
      },
      date: "15 พ.ค. 2023",
      tags: ["MERN", "Web Development", "JavaScript"],
      slug: "exploring-the-mern-stack-powering-modern-web-development",
    },
    {
      id: 2,
      title: "คอมโพเนนต์ UI ที่ดีที่สุดสำหรับเว็บไซต์สมัยใหม่",
      image: "/images/blog/blog-02.jpg",
      excerpt:
        "การรวบรวมคอมโพเนนต์ UI ที่ดีที่สุดที่จะช่วยให้เว็บไซต์ของคุณดูทันสมัยและใช้งานง่าย",
      author: {
        name: "สมหญิง รักเรียน",
        image: "/images/blog/author-02.png",
        role: "นักออกแบบ UI/UX",
      },
      date: "20 เม.ย. 2023",
      tags: ["UI", "Design", "Components"],
      slug: "best-ui-components-for-modern-websites",
    },
    {
      id: 3,
      title: "พลังของ UI/UX: ยกระดับประสบการณ์ดิจิทัล",
      image: "/images/blog/blog-03.jpg",
      excerpt:
        "เรียนรู้วิธีการออกแบบ UI/UX ที่ดีเพื่อสร้างประสบการณ์ผู้ใช้ที่น่าประทับใจ",
      author: {
        name: "วิชัย เก่งกล้า",
        image: "/images/blog/author-03.png",
        role: "ผู้จัดการผลิตภัณฑ์",
      },
      date: "05 มี.ค. 2023",
      tags: ["UI/UX", "Design", "User Experience"],
      slug: "the-power-of-uiux-elevating-digital-experiences",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[570px] text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-[40px]"
          >
            บทความล่าสุดจากบล็อกของเรา
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base text-body-color"
          >
            อัปเดตข่าวสารและบทความที่น่าสนใจเกี่ยวกับการพัฒนาเว็บไซต์และเทคโนโลยีล่าสุด
          </motion.p>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {blogPosts.map((post, index) => (
            <div key={post.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-[37/22] w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </Link>
                <div className="p-8 sm:p-9 md:p-7 xl:p-9">
                  <div className="mb-5 flex items-center">
                    {post.tags.map((tag, tagIndex) => (
                      <div key={tagIndex} className="mr-2">
                        <Link
                          href={`/blog/tag/${tag.toLowerCase()}`}
                          className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary"
                        >
                          {tag}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <h3>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mb-4 block text-xl font-bold text-black hover:text-primary sm:text-2xl"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mb-7 text-base leading-relaxed text-body-color">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4 h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={post.author.image}
                        alt={post.author.name}
                        width={40}
                        height={40}
                        className="w-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-dark">
                        {post.author.name}
                      </h4>
                      <p className="text-xs text-body-color">{post.date}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-primary/90"
          >
            ดูบทความทั้งหมด
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
