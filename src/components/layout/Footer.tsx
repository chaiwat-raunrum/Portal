"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-10 text-white">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <Link href="/" className="mb-6 inline-block">
                <Image
                  src="/images/logo-white.svg"
                  alt="Logo"
                  width={140}
                  height={30}
                  className="w-full"
                />
              </Link>
              <p className="mb-7 text-base text-gray-300">
                เราคือบริษัทที่ให้บริการด้านเทคโนโลยีและการพัฒนาเว็บไซต์ที่มีคุณภาพสูง
              </p>
              <div className="flex items-center">
                <Link
                  href="/"
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="/"
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="/"
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="/"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-medium text-white">บริษัท</h4>
              <ul>
                <li>
                  <Link
                    href="/about"
                    className="mb-2 inline-block text-base text-gray-300 hover:text-primary"
                  >
                    เกี่ยวกับเรา
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="mb-2 inline-block text-base text-gray-300 hover:text-primary"
                  >
                    ติดต่อเรา
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="mb-2 inline-block text-base text-gray-300 hover:text-primary"
                  >
                    บล็อก
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="mb-2 inline-block text-base text-gray-300 hover:text-primary"
                  >
                    ผลงาน
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-medium text-white">สนับสนุน</h4>
              <ul>
                <li>
                  <Link
                    href="/"
                    className="mb-2 inline-block text-base text-gray-300 hover:text-primary"
                  >
                    คำถามที่พบบ่อย
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="mb-2 inline-block text-base text-gray-300 hover:text-primary"
                  >
                    นโยบายความเป็นส่วนตัว
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="mb-2 inline-block text-base text-gray-300 hover:text-primary"
                  >
                    เงื่อนไขการใช้งาน
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="mb-2 inline-block text-base text-gray-300 hover:text-primary"
                  >
                    ศูนย์ช่วยเหลือ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-medium text-white">ติดต่อเรา</h4>
              <ul>
                <li>
                  <p className="mb-2 inline-block text-base text-gray-300">
                    info@example.com
                  </p>
                </li>
                <li>
                  <p className="mb-2 inline-block text-base text-gray-300">
                    +66 2 123 4567
                  </p>
                </li>
                <li>
                  <p className="mb-2 inline-block text-base text-gray-300">
                    กรุงเทพมหานคร, ประเทศไทย
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-medium text-white">จดหมายข่าว</h4>
              <p className="mb-4 text-base text-gray-300">
                สมัครรับจดหมายข่าวเพื่อรับข่าวสารและโปรโมชั่นล่าสุด
              </p>
              <form className="w-full">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="อีเมลของคุณ"
                    className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-white outline-none focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-3 mr-5 text-white"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.66669 10H18.3334"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.8333 2.5L18.3333 10L10.8333 17.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-8">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-2/3 lg:w-1/2">
              <div className="mb-6 md:mb-0">
                <p className="text-base text-gray-400">
                  &copy; {new Date().getFullYear()} Portal. สงวนลิขสิทธิ์ทั้งหมด
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3 lg:w-1/2">
              <div className="flex justify-start md:justify-end">
                <p className="text-base text-gray-400">
                  พัฒนาโดย{" "}
                  <a
                    href="/"
                    rel="nofollow noopener"
                    className="text-primary hover:underline"
                  >
                    Portal Team
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
