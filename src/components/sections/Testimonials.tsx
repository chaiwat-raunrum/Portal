"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "มุชาร์รอฟ ชาย",
      role: "ผู้ก่อตั้ง TailGrids",
      content:
        "เทมเพลตนี้ช่วยให้เราสามารถสร้างเว็บไซต์ได้อย่างรวดเร็วและมีประสิทธิภาพ ด้วยการออกแบบที่สวยงามและฟีเจอร์ที่ครบครัน",
      image: "/images/testimonials/auth-01.png",
    },
    {
      id: 2,
      name: "ไนมูร์ ราห์มาน",
      role: "ผู้จัดการฝ่ายการตลาด",
      content:
        "ทีมงานให้การสนับสนุนที่ยอดเยี่ยม และเทมเพลตก็มีความยืดหยุ่นสูง ทำให้เราสามารถปรับแต่งได้ตามต้องการ",
      image: "/images/testimonials/auth-02.png",
    },
    {
      id: 3,
      name: "ชาฟิก ฮัมมาด",
      role: "นักพัฒนาซอฟต์แวร์",
      content:
        "โค้ดสะอาดและเป็นระเบียบมาก ทำให้การพัฒนาต่อยอดเป็นเรื่องง่าย ผมขอแนะนำเทมเพลตนี้สำหรับทุกคนที่ต้องการสร้างเว็บไซต์ธุรกิจที่มีคุณภาพ",
      image: "/images/testimonials/auth-03.png",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[570px] text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-[40px]"
          >
            ลูกค้าของเราพูดถึงเราอย่างไร
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base text-body-color"
          >
            ความคิดเห็นจากลูกค้าที่ใช้บริการของเรา
          </motion.p>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="w-full px-4 md:w-1/2 lg:w-1/3"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8 rounded-md bg-white p-8 shadow-md lg:mb-0"
              >
                <div className="mb-5 text-[22px] text-dark">
                  <svg
                    width="28"
                    height="20"
                    viewBox="0 0 28 20"
                    className="fill-current"
                  >
                    <path d="M16.5714 0H21.7143C22.5397 0 23.3315 0.316071 23.9226 0.878681C24.5137 1.44129 24.8571 2.18942 24.8571 2.97143V8.8C24.8571 9.58201 24.5137 10.3301 23.9226 10.8927C23.3315 11.4553 22.5397 11.7714 21.7143 11.7714H18.2857C18.6802 14.8 20.8802 17.1429 24.8571 17.1429V20C17.5429 20 16.5714 14.2857 16.5714 8.8V2.97143C16.5714 2.18942 16.9147 1.44129 17.5059 0.878681C18.097 0.316071 18.8888 0 19.7143 0H16.5714ZM2.85714 0H8C8.82537 0 9.61722 0.316071 10.2083 0.878681C10.7995 1.44129 11.1429 2.18942 11.1429 2.97143V8.8C11.1429 9.58201 10.7995 10.3301 10.2083 10.8927C9.61722 11.4553 8.82537 11.7714 8 11.7714H4.57143C4.96594 14.8 7.16594 17.1429 11.1429 17.1429V20C3.82857 20 2.85714 14.2857 2.85714 8.8V2.97143C2.85714 2.18942 3.20051 1.44129 3.79166 0.878681C4.38281 0.316071 5.17466 0 6 0H2.85714Z" />
                  </svg>
                </div>
                <p className="mb-8 text-base text-body-color">
                  {testimonial.content}
                </p>
                <div className="flex items-center">
                  <div className="relative mr-4 h-[50px] w-[50px] overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-body-color">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
