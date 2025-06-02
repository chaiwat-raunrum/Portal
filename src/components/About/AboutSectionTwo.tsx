import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  มาตรฐานความปลอดภัยสูงสุด
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  เรายึดมั่นในมาตรฐานความปลอดภัยระดับสากล ทุกขั้นตอนการทำงานผ่านการตรวจสอบคุณภาพอย่างเข้มงวด
                  เพื่อให้มั่นใจว่าระบบไฟฟ้าที่เราติดตั้งมีความปลอดภัยสูงสุดสำหรับผู้ใช้งาน
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  บริการหลังการขายเป็นเลิศ
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  เรามีทีมงานบริการหลังการขายที่พร้อมให้คำปรึกษาและแก้ไขปัญหาตลอด 24 ชั่วโมง
                  ด้วยประสบการณ์และความเชี่ยวชาญ เราพร้อมดูแลลูกค้าอย่างใกล้ชิดและต่อเนื่อง
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  เทคโนโลยีทันสมัย
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  เราใช้เทคโนโลยีและอุปกรณ์ที่ทันสมัยที่สุดในการออกแบบและติดตั้งระบบไฟฟ้า
                  เพื่อประสิทธิภาพสูงสุดและความคุ้มค่าในระยะยาวสำหรับลูกค้าของเรา
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
