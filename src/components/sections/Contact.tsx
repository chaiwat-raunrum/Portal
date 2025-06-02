"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ตรงนี้จะเป็นการส่งข้อมูลไปยัง API หรือเซิร์ฟเวอร์
    console.log({ name, email, subject, message });
    // รีเซ็ตฟอร์ม
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    alert("ส่งข้อความเรียบร้อยแล้ว!");
  };

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-[40px]"
              >
                ติดต่อเรา
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-base text-body-color"
              >
                มีคำถามหรือต้องการความช่วยเหลือ? ติดต่อเราได้ตลอดเวลา
              </motion.p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-md bg-white p-8 shadow-md sm:p-10 lg:mb-0">
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        ชื่อ-นามสกุล
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="ชื่อของคุณ"
                        className="w-full rounded-md border border-transparent bg-[#f8f8f8] px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        อีเมล
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="อีเมลของคุณ"
                        className="w-full rounded-md border border-transparent bg-[#f8f8f8] px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-6">
                      <label
                        htmlFor="subject"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        หัวข้อ
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="หัวข้อของคุณ"
                        className="w-full rounded-md border border-transparent bg-[#f8f8f8] px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        ข้อความ
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        placeholder="พิมพ์ข้อความของคุณที่นี่"
                        className="w-full resize-none rounded-md border border-transparent bg-[#f8f8f8] px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-md bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90"
                    >
                      ส่งข้อความ
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="rounded-md bg-white p-8 shadow-md sm:p-10">
              <h3 className="mb-8 text-2xl font-semibold text-black">
                ข้อมูลการติดต่อ
              </h3>
              <div className="mb-8 flex items-center">
                <div className="mr-4 flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-md bg-primary bg-opacity-10 text-primary">
                  <FaEnvelope className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-medium text-black">
                    อีเมล
                  </h4>
                  <p className="text-base text-body-color">E-Mail: warunthon.thai@gmail.com</p>
                </div>
              </div>
              <div className="mb-8 flex items-center">
                <div className="mr-4 flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-md bg-primary bg-opacity-10 text-primary">
                  <FaPhone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-medium text-black">
                    เบอร์โทรศัพท์
                  </h4>
                  <p className="text-base text-body-color">Mobile: 084-7906781</p>
                  <p className="text-base text-body-color">วรันธรณ์ ไชยธนพันธุ์ (Project Manager)</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-md bg-primary bg-opacity-10 text-primary">
                  <FaMapMarkerAlt className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-medium text-black">
                    ที่อยู่
                  </h4>
                  <p className="text-base text-body-color">
                    288 ซอยประชาอุทิศ 27 ถนนประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
