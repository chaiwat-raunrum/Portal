"use client";

import { motion } from "framer-motion";
import { FaCode, FaDesktop, FaMobileAlt, FaRocket, FaShieldAlt, FaTools } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <FaRocket className="h-8 w-8 text-primary" />,
      title: "ประสิทธิภาพสูงสุด",
      description:
        "พัฒนาด้วย Next.js ที่มีประสิทธิภาพสูง รองรับการทำงานแบบ Server-Side Rendering และ Static Generation",
    },
    {
      id: 2,
      icon: <FaDesktop className="h-8 w-8 text-primary" />,
      title: "การออกแบบที่ทันสมัย",
      description:
        "ดีไซน์ที่สวยงามและทันสมัย ด้วย Tailwind CSS ที่ช่วยให้การปรับแต่งเป็นเรื่องง่าย",
    },
    {
      id: 3,
      icon: <FaMobileAlt className="h-8 w-8 text-primary" />,
      title: "รองรับทุกอุปกรณ์",
      description:
        "แสดงผลได้อย่างสมบูรณ์แบบบนทุกอุปกรณ์ ทั้งคอมพิวเตอร์ แท็บเล็ต และสมาร์ทโฟน",
    },
    {
      id: 4,
      icon: <FaCode className="h-8 w-8 text-primary" />,
      title: "โค้ดที่สะอาด",
      description:
        "เขียนด้วย TypeScript ที่ช่วยลดข้อผิดพลาดและเพิ่มความแข็งแกร่งให้กับโค้ด",
    },
    {
      id: 5,
      icon: <FaShieldAlt className="h-8 w-8 text-primary" />,
      title: "ความปลอดภัยสูง",
      description:
        "รองรับการทำงานร่วมกับระบบความปลอดภัยและการยืนยันตัวตนที่ทันสมัย",
    },
    {
      id: 6,
      icon: <FaTools className="h-8 w-8 text-primary" />,
      title: "ปรับแต่งได้ง่าย",
      description:
        "ออกแบบให้ปรับแต่งได้ง่าย เพื่อให้ตรงกับความต้องการของธุรกิจของคุณ",
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
            คุณสมบัติหลัก
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base text-body-color"
          >
            เทมเพลตของเรามาพร้อมกับคุณสมบัติที่ทันสมัยและจำเป็นสำหรับธุรกิจของคุณ
          </motion.p>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {features.map((feature, index) => (
            <div key={feature.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8 rounded-md bg-white p-8 shadow-md hover:shadow-lg md:px-7 xl:px-10"
              >
                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary bg-opacity-10">
                  {feature.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold text-black">
                  {feature.title}
                </h3>
                <p className="text-base text-body-color">{feature.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
