/**
 * api.ts
 * ไฟล์นี้ใช้สำหรับจัดการการเรียก API ทั้งหมดของเว็บไซต์
 * ประกอบด้วยฟังก์ชันสำหรับเรียกข้อมูลจาก API ต่างๆ
 */

// กำหนด Base URL สำหรับ API (สามารถเปลี่ยนได้ตามสภาพแวดล้อม)
const API_BASE_URL = 'http://localhost:3002/api/website';

/**
 * ฟังก์ชันสำหรับเรียกข้อมูลจาก API
 * @param endpoint - endpoint ของ API ที่ต้องการเรียก
 * @returns ข้อมูลที่ได้จาก API ในรูปแบบ JSON
 */
async function fetchData<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    
    if (!response.ok) {
      throw new Error(`เกิดข้อผิดพลาดในการเรียกข้อมูล: ${response.status} ${response.statusText}`);
    }
    
    return await response.json() as T;
  } catch (error) {
    console.error(`เกิดข้อผิดพลาดในการเรียกข้อมูลจาก ${endpoint}:`, error);
    throw error;
  }
}

// ประเภทข้อมูลสำหรับข้อมูลบริษัท
export interface CompanyInfo {
  id: number;
  name: string;
  shortDescription: string;
  fullDescription: string;
  address: string;
  phone: string;
  email: string;
  businessType: string;
  contactPerson: string;
  logo: string;
  establishedYear: number;
}

// ประเภทข้อมูลสำหรับส่วน Hero
export interface HeroSection {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  backgroundImage: string;
}

// ประเภทข้อมูลสำหรับบริการ
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  order: number;
  isActive: boolean;
}

// ประเภทข้อมูลสำหรับส่วน About
export interface AboutSection {
  id: number;
  title: string;
  description: string;
  image: string;
  keyPoints: string[];
  section: string;
}

// ประเภทข้อมูลสำหรับลิงก์ในส่วน Footer
export interface FooterLink {
  name: string;
  url: string;
}

// ประเภทข้อมูลสำหรับโซเชียลมีเดียในส่วน Footer
export interface SocialLink extends FooterLink {
  icon: string;
}

// ประเภทข้อมูลสำหรับส่วน Footer
export interface Footer {
  id: number;
  companyName: string;
  companyDescription: string;
  address: string;
  phone: string;
  email: string;
  socialLinks: SocialLink[];
  quickLinks: FooterLink[];
  copyright: string;
}

// ประเภทข้อมูลสำหรับตำแหน่งบนแผนที่
export interface MapLocation {
  lat: number;
  lng: number;
}

// ประเภทข้อมูลสำหรับฟิลด์ในฟอร์มติดต่อ
export interface FormField {
  id: string;
  label: string;
  type: string;
  required: boolean;
}

// ประเภทข้อมูลสำหรับส่วนติดต่อ
export interface Contact {
  id: number;
  title: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  contactPerson: string;
  mapLocation: MapLocation;
  formFields: FormField[];
}

// ประเภทข้อมูลสำหรับรายการในเมนู
export interface MenuItem {
  id: number;
  name: string;
  url: string;
  order: number;
  isActive: boolean;
}

// ประเภทข้อมูลสำหรับเมนู
export interface Menu {
  id: number;
  items: MenuItem[];
}

/**
 * ฟังก์ชันสำหรับเรียกข้อมูลบริษัท
 * @returns ข้อมูลบริษัท
 */
export async function getCompanyInfo(): Promise<CompanyInfo> {
  const response = await fetchData<{data: CompanyInfo}>('company-info');
  return response.data;
}

/**
 * ฟังก์ชันสำหรับเรียกข้อมูลส่วน Hero
 * @returns ข้อมูลส่วน Hero
 */
export async function getHeroSection(): Promise<HeroSection> {
  const response = await fetchData<{data: HeroSection}>('hero-section');
  return response.data;
}

/**
 * ฟังก์ชันสำหรับเรียกข้อมูลบริการทั้งหมด
 * @returns รายการบริการทั้งหมด
 */
export async function getServices(): Promise<Service[]> {
  const response = await fetchData<{data: Service[]}>('services');
  return response.data;
}

/**
 * ฟังก์ชันสำหรับเรียกข้อมูลบริการตาม ID
 * @param id - ID ของบริการที่ต้องการ
 * @returns ข้อมูลบริการตาม ID
 */
export async function getServiceById(id: number): Promise<Service> {
  const response = await fetchData<{data: Service}>(`services/${id}`);
  return response.data;
}

/**
 * ฟังก์ชันสำหรับเรียกข้อมูลส่วน About ทั้งหมด
 * @returns รายการข้อมูลส่วน About ทั้งหมด
 */
export async function getAboutSections(): Promise<AboutSection[]> {
  const response = await fetchData<{data: AboutSection[]}>('about');
  return response.data;
}

/**
 * ฟังก์ชันสำหรับเรียกข้อมูลส่วน About ตาม ID
 * @param id - ID ของส่วน About ที่ต้องการ
 * @returns ข้อมูลส่วน About ตาม ID
 */
export async function getAboutById(id: number): Promise<AboutSection> {
  const response = await fetchData<{data: AboutSection}>(`about/${id}`);
  return response.data;
}

/**
 * ฟังก์ชันสำหรับเรียกข้อมูลส่วน About ตามชื่อส่วน
 * @param section - ชื่อส่วนที่ต้องการ (section-one, section-two)
 * @returns ข้อมูลส่วน About ตามชื่อส่วน
 */
export async function getAboutSectionByName(section: string): Promise<AboutSection | undefined> {
  const sections = await getAboutSections();
  return sections.find(item => item.section === section);
}

/**
 * ฟังก์ชันสำหรับเรียกข้อมูลส่วน Footer
 * @returns ข้อมูลส่วน Footer
 */
export async function getFooter(): Promise<Footer> {
  const response = await fetchData<{data: Footer}>('footer');
  return response.data;
}

/**
 * ฟังก์ชันสำหรับเรียกข้อมูลส่วนติดต่อ
 * @returns ข้อมูลส่วนติดต่อ
 */
export async function getContact(): Promise<Contact> {
  const response = await fetchData<{data: Contact}>('contact');
  return response.data;
}

/**
 * ฟังก์ชันสำหรับเรียกข้อมูลเมนู
 * @returns ข้อมูลเมนู
 */
export async function getMenu(): Promise<Menu> {
  const response = await fetchData<{data: Menu}>('menu');
  return response.data;
}

/**
 * ฟังก์ชันสำหรับเรียกข้อมูลทั้งหมดของเว็บไซต์
 * @returns ข้อมูลทั้งหมดของเว็บไซต์
 */
export async function getAllWebsiteData(): Promise<{
  companyInfo: CompanyInfo;
  heroSection: HeroSection;
  services: Service[];
  about: AboutSection[];
  footer: Footer;
  contact: Contact;
  menu: Menu;
}> {
  const response = await fetchData<{
    data: {
      companyInfo: CompanyInfo;
      heroSection: HeroSection;
      services: Service[];
      about: AboutSection[];
      footer: Footer;
      contact: Contact;
      menu: Menu;
    }
  }>('all');
  return response.data;
}

export default {
  getCompanyInfo,
  getHeroSection,
  getServices,
  getAboutSections,
  getAboutSectionByName,
  getFooter,
  getContact,
  getMenu
};
