"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
            >
              <Image
                src="/images/about/about-image.svg"
                alt="เกี่ยวกับเรา"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                    เราคือใคร
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    เราเป็นทีมนักพัฒนาที่มีความเชี่ยวชาญในการสร้างเว็บไซต์และแอปพลิเคชันที่มีประสิทธิภาพสูงด้วย Next.js และเทคโนโลยีล่าสุด
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                    พันธกิจของเรา
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    พันธกิจของเราคือการช่วยให้ธุรกิจเติบโตด้วยเทคโนโลยีดิจิทัลที่ทันสมัย โดยมุ่งเน้นที่การสร้างประสบการณ์ผู้ใช้ที่ยอดเยี่ยมและการพัฒนาที่มีประสิทธิภาพ
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                    วิสัยทัศน์ของเรา
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    เราต้องการเป็นผู้นำในการพัฒนาเว็บไซต์และแอปพลิเคชันที่มีคุณภาพสูง ที่ช่วยให้ธุรกิจสามารถแข่งขันได้ในยุคดิจิทัล
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
