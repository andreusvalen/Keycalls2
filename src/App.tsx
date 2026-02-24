/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  CreditCard, 
  Info, 
  Copy, 
  Check, 
  ArrowRight, 
  Mail, 
  QrCode,
  Lock,
  ExternalLink,
  Code,
  BarChart,
  Palette,
  Database,
  PenTool,
  Camera,
  Share2,
  Zap,
  Search,
  Sparkles,
  Star,
  Clock,
  Users,
  ShoppingCart,
  Trash2,
  ChevronRight,
  Sun,
  Moon,
  Upload,
  FileText,
  Download,
  KeyRound,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Quote
} from 'lucide-react';

const PAYPAL_EMAIL = "andreusvalen2004@gmail.com";
const NOTE_TEXT = "I am satisfied with the service received and I am aware that it corresponds to a non-refundable good.";
const QR_CODE_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuBGEFUyC0dxDrPSSLj27bQE1dNYI_esFoAefirsyXh67P_ajUVxs7thf8YpOxtZX8nAbPcbf-UtnKlMP86GetAYuEaC1GiWfCAn5q0g2tGvYSHYZEffDnfP6rvJUKpfjN_CuRWyyRSjpzDkG8jyRavwskTJVgZMcHgIrq4Wa3vGmAvYy_dG2s1alr1P2wnPw2qZ2laEud2TNDN5cB0UrzlTMaF0t_tyv6pgc7AniEsg0EPzzQwv3bNSx7StUbUPcq34Wu-8q464Tccy";
const PAYPAL_BUTTON_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuDBO2s-w0XEG0wZh2A4k_zrm0HDw7D67X3HEgGQ7A6cLvLtcGirgvCRjTUnPFNkdFDwJRPcZY2NEF_HyF9yKIZCb6jmRdvIPrzQliCeclVnxY_7KSCq0iS3XgT53BuxDTHiS_oDd52qWvWIwwOnQnXr4t16YabvAjT1XaJsisH5XorHywfrQFpTBqkmNMWaHoCePcbzvgB6kYbICUmXGjdvKwYnIfKiC_MHX2foVT9ib18FJesADjvlo-iM350lyWMMARszzGhLAbys";

const KKeyIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="7" cy="6" r="3.5" />
    <path d="M7 9.5v10.5" />
    <path d="M7 14.5l7-6" />
    <path d="M7 14.5l7 6" />
  </svg>
);

interface Course {
  id: string;
  title: string;
  category: string;
  price: number;
  icon: React.ElementType;
  description: string;
  rating: number;
  students: string;
  duration: string;
  modules: number;
}

const COURSES: Course[] = [
  { id: '1', title: 'Web Development Mastery', category: 'Technology', price: 15, icon: Code, description: 'Master the modern stack: React, Node.js, and professional deployment.', rating: 4.9, students: '12k', duration: '40h', modules: 12 },
  { id: '2', title: 'Digital Marketing Fundamentals', category: 'Marketing', price: 25, icon: BarChart, description: 'Proven strategies to grow brands in today\'s digital environment.', rating: 4.8, students: '8k', duration: '25h', modules: 10 },
  { id: '3', title: 'Graphic Design for Beginners', category: 'Design', price: 35, icon: Palette, description: 'Learn design principles and tools like Figma and Photoshop.', rating: 4.7, students: '5k', duration: '30h', modules: 15 },
  { id: '4', title: 'Data Science Bootcamp', category: 'Technology', price: 45, icon: Database, description: 'Data analysis, Python, and Machine Learning from scratch.', rating: 4.9, students: '6k', duration: '50h', modules: 20 },
  { id: '5', title: 'Creative Writing Workshop', category: 'Writing', price: 15, icon: PenTool, description: 'Unlock your creativity and master the art of storytelling.', rating: 4.6, students: '3k', duration: '15h', modules: 8 },
  { id: '6', title: 'Photography Essentials', category: 'Art', price: 25, icon: Camera, description: 'Capture incredible moments by mastering your camera and light.', rating: 4.8, students: '4k', duration: '20h', modules: 12 },
  { id: '7', title: 'Social Media Strategies', category: 'Marketing', price: 35, icon: Share2, description: 'Create viral content and manage high-impact communities.', rating: 4.7, students: '9k', duration: '22h', modules: 10 },
  { id: '8', title: 'Native Ads Crash Course', category: 'Marketing', price: 45, icon: Zap, description: 'Non-intrusive advertising that converts: Taboola, Outbrain, and more.', rating: 4.9, students: '2k', duration: '12h', modules: 6 },
  { id: '9', title: 'Google Ads Mastery', category: 'Marketing', price: 15, icon: Search, description: 'Master the search and display network to maximize ROI.', rating: 4.8, students: '7k', duration: '35h', modules: 14 },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Digital Marketer",
    content: "KeyCalls changed my career. The Native Ads course is pure gold. I doubled my ROI in just two weeks!",
    avatar: "https://picsum.photos/seed/alex/100/100"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Full Stack Developer",
    content: "The Web Development Mastery course is the most comprehensive I've found. The community support is amazing.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    id: 3,
    name: "Marco Rossi",
    role: "UI/UX Designer",
    content: "I learned more in the Graphic Design bootcamp than in a year of self-study. Highly recommended!",
    avatar: "https://picsum.photos/seed/marco/100/100"
  }
];

export default function App() {
  const [view, setView] = useState<'catalog' | 'checkout' | 'payment' | 'confirmation' | 'admin'>('catalog');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const [isProcessingProof, setIsProcessingProof] = useState(false);
  const [invoice, setInvoice] = useState<{
    id: string;
    date: string;
    email: string;
    course: string;
    amount: number;
  } | null>(null);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [submissions, setSubmissions] = useState<{email: string, course: string, date: string}[]>([]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('keycalls_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('keycalls_theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/admin') {
      setView('admin');
    }

    // Load submissions from localStorage
    const savedSubmissions = localStorage.getItem('keycalls_submissions');
    if (savedSubmissions) {
      setSubmissions(JSON.parse(savedSubmissions));
    }
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
    setView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPaymentProof(file);
      generateInvoice(file);
    }
  };

  const generateInvoice = (file: File) => {
    setIsProcessingProof(true);
    // Simulate processing time
    setTimeout(() => {
      const newInvoice = {
        id: `INV-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`,
        date: new Date().toLocaleDateString(),
        email: email,
        course: selectedCourse?.title || 'Expert Course',
        amount: selectedCourse?.price || 0
      };
      setInvoice(newInvoice);
      setIsProcessingProof(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0A0F14] text-[#374151] dark:text-[#E0F7FA] font-sans selection:bg-[#3B82F6]/20 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-[#121921] border-b border-[#EFF6FF] dark:border-[#1E293B] sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            className="flex items-center cursor-pointer group bg-[#3B82F6]/5 hover:bg-[#3B82F6]/10 px-3 py-1.5 rounded-2xl transition-all duration-300 border border-transparent hover:border-[#3B82F6]/20" 
            onClick={() => setView('catalog')}
          >
            <div className="relative flex items-center justify-center -mr-3">
              <KKeyIcon className="text-[#3B82F6] w-8 h-8 group-hover:rotate-[15deg] transition-transform duration-500 relative z-10" />
              <div className="absolute inset-0 bg-[#3B82F6]/30 blur-md rounded-full scale-0 group-hover:scale-110 transition-transform duration-500"></div>
            </div>
            <div className="flex font-black text-2xl tracking-tighter">
              <span className="text-[#10B981] group-hover:scale-110 transition-transform cursor-default">e</span>
              <span className="text-[#F59E0B] group-hover:scale-110 transition-transform cursor-default">y</span>
              <span className="text-[#EF4444] ml-0.5 group-hover:scale-110 transition-transform cursor-default">C</span>
              <span className="text-[#8B5CF6] group-hover:scale-110 transition-transform cursor-default">a</span>
              <span className="text-[#EC4899] group-hover:scale-110 transition-transform cursor-default">l</span>
              <span className="text-[#06B6D4] group-hover:scale-110 transition-transform cursor-default">l</span>
              <span className="text-[#F97316] group-hover:scale-110 transition-transform cursor-default">s</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-9 text-sm font-medium text-[#374151]/80 dark:text-[#E0F7FA]/80">
            <a href="#" className="hover:text-[#3B82F6] transition-colors">Courses</a>
            <a href="#" className="hover:text-[#3B82F6] transition-colors">My Learning</a>
            <a href="#" className="hover:text-[#3B82F6] transition-colors">Resources</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-[#374151]/60 dark:text-[#E0F7FA]/60 hover:text-[#3B82F6] transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="p-2 text-[#374151]/60 dark:text-[#E0F7FA]/60 hover:text-[#3B82F6] transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <div className="size-10 rounded-full border-2 border-[#3B82F6] overflow-hidden">
              <img 
                src="https://picsum.photos/seed/user/100/100" 
                alt="User profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {view === 'catalog' && (
            <motion.div
              key="catalog"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Hero Section */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-[#121921] border border-[#EFF6FF] dark:border-[#1E293B] p-8 md:p-16 mb-16 shadow-2xl shadow-[#3B82F6]/5">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 size-96 bg-[#3B82F6]/5 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 size-96 bg-[#10B981]/5 blur-[100px] rounded-full"></div>
                
                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-[#3B82F6]/10 text-[#3B82F6] px-4 py-2 rounded-full text-sm font-bold mb-6">
                      <Sparkles className="w-4 h-4" />
                      <span>New Cohort Starting Soon</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-[#374151] dark:text-[#E0F7FA] mb-6 tracking-tighter leading-[0.9]">
                      Unlock Your <span className="text-[#3B82F6]">Potential</span> with KeyCalls.
                    </h1>
                    <p className="text-xl text-[#374151]/60 dark:text-[#E0F7FA]/60 mb-8 leading-relaxed max-w-lg">
                      Master the most in-demand digital skills with our expert-led courses. From coding to creative design, we provide the keys to your future success.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-[#3B82F6] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#2563EB] transition-all shadow-lg shadow-[#3B82F6]/20 flex items-center gap-2">
                        Explore Courses <ArrowRight className="w-5 h-5" />
                      </button>
                      <button className="bg-white dark:bg-[#1E293B] text-[#374151] dark:text-[#E0F7FA] px-8 py-4 rounded-2xl font-bold text-lg border border-[#EFF6FF] dark:border-[#1E293B] hover:bg-[#F9FAFB] dark:hover:bg-[#2D3748] transition-all">
                        Learn More
                      </button>
                    </div>
                    
                    <div className="mt-12 flex items-center gap-6">
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                          <img 
                            key={i}
                            src={`https://picsum.photos/seed/user${i}/100/100`} 
                            className="size-10 rounded-full border-2 border-white dark:border-[#121921] object-cover"
                            alt="User"
                            referrerPolicy="no-referrer"
                          />
                        ))}
                      </div>
                      <p className="text-sm font-medium text-[#374151]/60 dark:text-[#E0F7FA]/60">
                        Joined by <span className="text-[#374151] dark:text-[#E0F7FA] font-bold">2,000+</span> ambitious students
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative hidden lg:block">
                    <div className="relative z-10 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-[2rem] p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                      <img 
                        src="https://picsum.photos/seed/digital-marketing-strategy/800/600" 
                        className="rounded-[1.8rem] object-cover w-full aspect-[4/3]"
                        alt="Digital Marketing Strategy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Decorative floating cards */}
                    <div className="absolute -top-6 -right-6 bg-white dark:bg-[#1E293B] p-4 rounded-2xl shadow-xl border border-[#EFF6FF] dark:border-[#1E293B] z-20 animate-bounce-slow">
                      <div className="flex items-center gap-3">
                        <div className="size-10 bg-[#10B981]/10 rounded-xl flex items-center justify-center text-[#10B981]">
                          <Check className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#374151]/40 dark:text-[#E0F7FA]/40 uppercase">Status</p>
                          <p className="text-sm font-bold text-[#374151] dark:text-[#E0F7FA]">Course Completed</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-6 -left-6 bg-white dark:bg-[#1E293B] p-4 rounded-2xl shadow-xl border border-[#EFF6FF] dark:border-[#1E293B] z-20 animate-float">
                      <div className="flex items-center gap-3">
                        <div className="size-10 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center text-[#F59E0B]">
                          <Zap className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#374151]/40 dark:text-[#E0F7FA]/40 uppercase">Progress</p>
                          <p className="text-sm font-bold text-[#374151] dark:text-[#E0F7FA]">85% Mastered</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <div className="flex items-center gap-2 text-sm text-[#374151]/60 dark:text-[#E0F7FA]/60 mb-8">
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4" />
                  <span className="font-semibold text-[#374151] dark:text-[#E0F7FA]">Courses</span>
                </div>
                <h1 className="text-4xl font-black text-[#374151] dark:text-[#E0F7FA] mb-2 tracking-tight">
                  Featured Courses
                </h1>
                <p className="text-[#374151]/60 dark:text-[#E0F7FA]/60 text-lg">Secure your spot in the next cohort.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {COURSES.map((course) => (
                  <motion.div
                    key={course.id}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-[#121921] rounded-2xl border border-[#EFF6FF] dark:border-[#1E293B] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#3B82F6]/10 transition-all flex flex-col"
                  >
                    <div className="p-8 flex-1">
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-[#EFF6FF] dark:bg-[#3B82F6]/10 rounded-xl">
                          <course.icon className="text-[#3B82F6] w-6 h-6" />
                        </div>
                        <div className="flex items-center gap-1 bg-[#EFF6FF] dark:bg-[#3B82F6]/10 text-[#3B82F6] px-2 py-1 rounded-lg text-xs font-bold">
                          <Star className="w-3 h-3 fill-current" />
                          {course.rating}
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest mb-2 block">
                        EXPERT COURSE
                      </span>
                      <h3 className="text-xl font-bold mb-1 text-[#374151] dark:text-[#E0F7FA]">{course.title}</h3>
                      <p className="text-[#374151]/60 dark:text-[#E0F7FA]/60 text-sm mb-6">
                        Advanced Digital Skills • {course.modules} Modules
                      </p>
                      <p className="text-[#374151]/80 dark:text-[#E0F7FA]/80 text-sm leading-relaxed mb-6">
                        {course.description}
                      </p>
                    </div>
                    <div className="p-6 bg-[#F9FAFB] dark:bg-[#0D141C] border-t border-[#EFF6FF] dark:border-[#1E293B] flex items-center justify-between">
                      <span className="text-2xl font-black text-[#374151] dark:text-[#E0F7FA]">${course.price}.00</span>
                      <button 
                        onClick={() => handleSelectCourse(course)}
                        className="bg-[#3B82F6] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#2563EB] transition-all shadow-lg shadow-[#3B82F6]/20 flex items-center gap-2"
                      >
                        Enroll Now
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Testimonials Section */}
              <div className="mt-24 mb-12">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-black text-[#374151] dark:text-[#E0F7FA] mb-4 tracking-tight">
                    What Our <span className="text-[#3B82F6]">Students</span> Say
                  </h2>
                  <p className="text-[#374151]/60 dark:text-[#E0F7FA]/60 text-lg">Join thousands of successful professionals.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {TESTIMONIALS.map((testimonial) => (
                    <motion.div
                      key={testimonial.id}
                      whileHover={{ y: -5 }}
                      className="bg-white dark:bg-[#121921] p-8 rounded-[2rem] border border-[#EFF6FF] dark:border-[#1E293B] shadow-sm hover:shadow-xl hover:shadow-[#3B82F6]/5 transition-all relative"
                    >
                      <Quote className="absolute top-6 right-8 w-10 h-10 text-[#3B82F6]/10" />
                      <div className="flex items-center gap-4 mb-6">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="size-12 rounded-full object-cover border-2 border-[#3B82F6]/20"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h4 className="font-bold text-[#374151] dark:text-[#E0F7FA]">{testimonial.name}</h4>
                          <p className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-[#374151]/80 dark:text-[#E0F7FA]/80 italic leading-relaxed">
                        "{testimonial.content}"
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {view === 'checkout' && selectedCourse && (
            <motion.div
              key="checkout"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex items-center gap-2 text-sm text-[#374151]/60 dark:text-[#E0F7FA]/60 mb-8">
                <span className="cursor-pointer hover:text-[#3B82F6]" onClick={() => setView('catalog')}>Home</span>
                <ChevronRight className="w-4 h-4" />
                <span className="cursor-pointer hover:text-[#3B82F6]" onClick={() => setView('catalog')}>Cart</span>
                <ChevronRight className="w-4 h-4" />
                <span className="font-semibold text-[#374151] dark:text-[#E0F7FA]">Checkout</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column: Checkout Details */}
                <div className="lg:col-span-2 space-y-8">
                  <section>
                    <h1 className="text-4xl font-black text-[#374151] dark:text-[#E0F7FA] mb-2 tracking-tight">Checkout</h1>
                    <p className="text-[#374151]/60 dark:text-[#E0F7FA]/60 text-lg">Secure your spot in the next cohort.</p>
                  </section>

                  {/* Item Card */}
                  <section className="bg-[#EFF6FF] dark:bg-[#121921] rounded-2xl p-6 flex gap-6 items-center shadow-sm border border-[#3B82F6]/10 dark:border-[#1E293B]">
                    <div className="size-32 rounded-xl overflow-hidden flex-shrink-0 bg-white dark:bg-[#0D141C] p-2">
                      <div className="w-full h-full bg-[#F9FAFB] dark:bg-[#121921] rounded-lg flex items-center justify-center">
                        <selectedCourse.icon className="w-12 h-12 text-[#3B82F6]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[#3B82F6] text-xs font-bold uppercase tracking-wider">Expert Course</span>
                          <h3 className="text-[#374151] dark:text-[#E0F7FA] text-xl font-bold mt-1">{selectedCourse.title}</h3>
                          <p className="text-[#374151]/60 dark:text-[#E0F7FA]/60 text-sm mt-1">Advanced Digital Skills • {selectedCourse.modules} Modules</p>
                        </div>
                        <p className="text-[#374151] dark:text-[#E0F7FA] text-xl font-black">${selectedCourse.price}.00</p>
                      </div>
                      <button 
                        onClick={() => setView('catalog')}
                        className="mt-4 flex items-center gap-2 text-red-500 text-sm font-semibold hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </button>
                    </div>
                  </section>

                  {/* Payment Method */}
                  <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-[#374151] dark:text-[#E0F7FA]">Payment Method</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="relative flex items-center gap-4 p-4 border-2 border-[#3B82F6] bg-[#EFF6FF] dark:bg-[#3B82F6]/10 rounded-xl cursor-pointer">
                        <input checked readOnly className="accent-[#3B82F6] size-5" type="radio"/>
                        <div className="flex items-center gap-3">
                          <CreditCard className="text-[#3B82F6] w-5 h-5" />
                          <span className="font-bold dark:text-[#E0F7FA]">Credit/Debit Card</span>
                        </div>
                      </label>
                      <label 
                        onClick={() => setView('payment')}
                        className="relative flex items-center gap-4 p-4 border-2 border-transparent bg-white dark:bg-[#121921] rounded-xl cursor-pointer hover:border-[#EFF6FF] dark:hover:border-[#1E293B] transition-all"
                      >
                        <input className="accent-[#3B82F6] size-5" type="radio"/>
                        <div className="flex items-center gap-3">
                          <Zap className="text-[#374151]/40 dark:text-[#E0F7FA]/40 w-5 h-5" />
                          <span className="font-bold dark:text-[#E0F7FA]">PayPal</span>
                        </div>
                      </label>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-8">
                      <div className="col-span-2 space-y-2">
                        <label className="text-sm font-bold text-[#374151]/70 dark:text-[#E0F7FA]/70">Cardholder Name</label>
                        <input className="w-full bg-white dark:bg-[#121921] border-none dark:border dark:border-[#1E293B] rounded-xl p-4 focus:ring-2 focus:ring-[#3B82F6] transition-all dark:text-[#E0F7FA]" placeholder="John Doe" type="text"/>
                      </div>
                      <div className="col-span-2 space-y-2">
                        <label className="text-sm font-bold text-[#374151]/70 dark:text-[#E0F7FA]/70">Card Number</label>
                        <div className="relative">
                          <input className="w-full bg-white dark:bg-[#121921] border-none dark:border dark:border-[#1E293B] rounded-xl p-4 pr-12 focus:ring-2 focus:ring-[#3B82F6] transition-all dark:text-[#E0F7FA]" placeholder="0000 0000 0000 0000" type="text"/>
                          <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 text-[#374151]/30 dark:text-[#E0F7FA]/30 w-5 h-5" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#374151]/70 dark:text-[#E0F7FA]/70">Expiry Date</label>
                        <input className="w-full bg-white dark:bg-[#121921] border-none dark:border dark:border-[#1E293B] rounded-xl p-4 focus:ring-2 focus:ring-[#3B82F6] transition-all dark:text-[#E0F7FA]" placeholder="MM/YY" type="text"/>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#374151]/70 dark:text-[#E0F7FA]/70">CVV</label>
                        <input className="w-full bg-white dark:bg-[#121921] border-none dark:border dark:border-[#1E293B] rounded-xl p-4 focus:ring-2 focus:ring-[#3B82F6] transition-all dark:text-[#E0F7FA]" placeholder="123" type="text"/>
                      </div>
                    </div>
                  </section>
                </div>

                {/* Right Column: Order Summary */}
                <div className="space-y-6">
                  <div className="bg-[#EFF6FF] dark:bg-[#121921] p-8 rounded-2xl sticky top-24 border border-[#3B82F6]/10 dark:border-[#1E293B]">
                    <h2 className="text-2xl font-bold text-[#374151] dark:text-[#E0F7FA] mb-6">Order Summary</h2>
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-[#374151]/60 dark:text-[#E0F7FA]/60">
                        <span>Original Price</span>
                        <span>${selectedCourse.price + 50}.00</span>
                      </div>
                      <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-medium">
                        <span>Discount (20%)</span>
                        <span>-$50.00</span>
                      </div>
                      <div className="flex justify-between text-[#374151]/60 dark:text-[#E0F7FA]/60">
                        <span>Platform Fee</span>
                        <span>$0.00</span>
                      </div>
                      <div className="pt-4 border-t border-[#3B82F6]/20 flex justify-between items-end">
                        <span className="text-[#374151] dark:text-[#E0F7FA] font-bold">Total</span>
                        <span className="text-3xl font-black text-[#374151] dark:text-[#E0F7FA]">${selectedCourse.price}.00</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <button 
                        onClick={() => setView('payment')}
                        className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-[#3B82F6]/20"
                      >
                        Complete Purchase
                      </button>
                      <div className="text-center py-2">
                        <span className="text-[#374151]/40 text-xs font-bold uppercase tracking-widest">Or pay with</span>
                      </div>
                      <button 
                        onClick={() => setView('payment')}
                        className="w-full bg-[#FFC439] hover:bg-[#F2BA36] py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                      >
                        <img 
                          src={PAYPAL_BUTTON_URL} 
                          alt="PayPal" 
                          className="h-6"
                          referrerPolicy="no-referrer"
                        />
                      </button>
                    </div>

                    <div className="mt-8 space-y-4">
                      <div className="flex items-center gap-3 text-[#374151]/60 dark:text-[#E0F7FA]/60 text-sm">
                        <ShieldCheck className="text-[#3B82F6] w-5 h-5" />
                        Secure SSL encrypted payment
                      </div>
                      <div className="flex items-center gap-3 text-[#374151]/60 dark:text-[#E0F7FA]/60 text-sm">
                        <Clock className="text-[#3B82F6] w-5 h-5" />
                        30-day money-back guarantee
                      </div>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="p-6 bg-white dark:bg-[#121921] rounded-2xl border border-[#EFF6FF] dark:border-[#1E293B]">
                    <p className="text-sm font-bold text-[#374151] dark:text-[#E0F7FA] mb-3 uppercase tracking-wider">Promo Code</p>
                    <div className="flex gap-2">
                      <input className="flex-1 bg-[#F9FAFB] dark:bg-[#0D141C] border-none dark:border dark:border-[#1E293B] rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-[#3B82F6] dark:text-[#E0F7FA]" placeholder="Enter code" type="text"/>
                      <button className="bg-[#374151] dark:bg-[#3B82F6] text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-black dark:hover:bg-[#2563EB] transition-colors">Apply</button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {view === 'payment' && selectedCourse && (
            <motion.div
              key="payment"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-3xl mx-auto"
            >
              <button 
                onClick={() => setView('checkout')}
                className="mb-8 text-sm font-medium text-[#374151]/60 dark:text-[#E0F7FA]/60 hover:text-[#3B82F6] flex items-center gap-2 transition-colors"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Back to Checkout
              </button>

              <div className="bg-white dark:bg-[#121921] rounded-3xl shadow-2xl border border-[#EFF6FF] dark:border-[#1E293B] overflow-hidden">
                <div className="bg-[#3B82F6] p-8 text-white text-center">
                  <h2 className="text-3xl font-bold mb-2">PayPal Payment</h2>
                  <p className="opacity-90 tracking-wide uppercase text-xs font-bold">Secure Transaction</p>
                </div>

                <div className="p-8 md:p-12 space-y-12">
                  <section>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-8 h-8 bg-[#EFF6FF] dark:bg-[#3B82F6]/10 text-[#3B82F6] rounded-full flex items-center justify-center font-bold">1</div>
                      <h3 className="text-xl font-bold dark:text-[#E0F7FA]">Choose Payment Method</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-8 bg-[#F9FAFB] dark:bg-[#0D141C] rounded-2xl border border-[#EFF6FF] dark:border-[#1E293B] flex flex-col items-center text-center">
                        <QrCode className="w-10 h-10 text-[#374151]/20 dark:text-[#E0F7FA]/20 mb-4" />
                        <p className="text-sm font-bold text-[#374151]/60 dark:text-[#E0F7FA]/60 mb-6 uppercase tracking-wider">Scan QR Code</p>
                        <img 
                          src={QR_CODE_URL} 
                          alt="QR Code" 
                          className="w-48 h-48 rounded-xl shadow-md border-4 border-white dark:border-[#121921]"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-8 bg-[#F9FAFB] dark:bg-[#0D141C] rounded-2xl border border-[#EFF6FF] dark:border-[#1E293B] flex flex-col items-center text-center justify-center">
                        <Mail className="w-10 h-10 text-[#374151]/20 dark:text-[#E0F7FA]/20 mb-4" />
                        <p className="text-sm font-bold text-[#374151]/60 dark:text-[#E0F7FA]/60 mb-2 uppercase tracking-wider">Send to Email</p>
                        <div className="flex items-center gap-2 bg-white dark:bg-[#121921] px-4 py-3 rounded-xl border border-[#EFF6FF] dark:border-[#1E293B] shadow-sm">
                          <span className="font-mono font-bold text-[#3B82F6]">{PAYPAL_EMAIL}</span>
                          <button 
                            onClick={() => copyToClipboard(PAYPAL_EMAIL)}
                            className="p-1 hover:bg-[#F9FAFB] dark:hover:bg-[#0D141C] rounded-lg transition-colors"
                          >
                            <Copy className="w-4 h-4 text-[#374151]/40 dark:text-[#E0F7FA]/40" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="bg-[#EFF6FF] dark:bg-[#3B82F6]/10 rounded-2xl p-8 border border-[#3B82F6]/10 dark:border-[#3B82F6]/20">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-white dark:bg-[#121921] text-[#3B82F6] rounded-full flex items-center justify-center font-bold">2</div>
                      <h3 className="text-xl font-bold text-[#374151] dark:text-[#E0F7FA]">Important Instructions</h3>
                    </div>
                    
                    <ul className="space-y-4">
                      <li className="flex gap-3">
                        <div className="mt-1 w-5 h-5 bg-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-[#374151]/80 dark:text-[#E0F7FA]/80 font-medium">
                          Select the <strong>"Send"</strong> option in PayPal.
                        </p>
                      </li>
                      <li className="flex gap-3">
                        <div className="mt-1 w-5 h-5 bg-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-[#374151]/80 dark:text-[#E0F7FA]/80 font-medium">
                          Make sure <strong>not to add a shipping address</strong>.
                        </p>
                      </li>
                    </ul>
                  </section>

                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-[#EFF6FF] dark:bg-[#3B82F6]/10 text-[#3B82F6] rounded-full flex items-center justify-center font-bold">3</div>
                      <h3 className="text-xl font-bold dark:text-[#E0F7FA]">Add a Note</h3>
                    </div>
                    
                    <p className="text-[#374151]/60 dark:text-[#E0F7FA]/60 mb-4 font-medium">
                      In the <strong>"Add a note"</strong> section, please copy and paste:
                    </p>

                    <div className="relative group">
                      <div className="bg-[#374151] dark:bg-[#0D141C] text-white/90 dark:text-[#E0F7FA]/90 p-8 rounded-2xl font-medium leading-relaxed italic border-l-4 border-[#3B82F6]">
                        "{NOTE_TEXT}"
                      </div>
                      <button 
                        onClick={() => copyToClipboard(NOTE_TEXT)}
                        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-xl backdrop-blur-sm transition-all flex items-center gap-2 text-sm"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 text-[#3B82F6]" />
                            <span className="text-[#3B82F6]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy Text</span>
                          </>
                        )}
                      </button>
                    </div>
                  </section>

                  <div className="pt-8 border-t border-[#F9FAFB] dark:border-[#1E293B] space-y-4">
                    <a 
                      href="https://www.paypal.com/myaccount/transfer/homepage" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#3B82F6]/20"
                    >
                      Continue to PayPal
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    
                    <button 
                      onClick={() => setView('confirmation')}
                      className="w-full bg-[#374151] dark:bg-[#E0F7FA] text-white dark:text-[#374151] py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:bg-black dark:hover:bg-white shadow-xl"
                    >
                      CONFIRMAR SU COMPRA
                      <Check className="w-5 h-5" />
                    </button>

                    <p className="mt-6 text-center text-sm text-[#374151]/40 dark:text-[#E0F7FA]/40 font-medium">
                      Access to <strong>{selectedCourse.title}</strong> will be granted immediately after verification.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {view === 'confirmation' && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="bg-white dark:bg-[#121921] rounded-3xl p-10 shadow-2xl border border-[#EFF6FF] dark:border-[#1E293B]">
                <div className="size-20 bg-[#EFF6FF] dark:bg-[#3B82F6]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Sparkles className="text-[#3B82F6] w-10 h-10" />
                </div>
                
                <h2 className="text-3xl font-black text-[#374151] dark:text-[#E0F7FA] mb-6">
                  Thank you for your purchase!
                </h2>
                
                <p className="text-[#374151]/80 dark:text-[#E0F7FA]/80 text-lg mb-10 leading-relaxed">
                  To access the course, please enter your email address below. 
                  Access will be manually granted to this address on <strong>Google Drive</strong> within a few minutes.
                  <br /><br />
                  <strong>Important:</strong> Send payment proof by email to this address <span className="text-[#3B82F6] font-bold">andreusvalen2004@gmail.com</span>
                </p>

                {!submitted ? (
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (email) {
                        setSubmitted(true);
                        const newSubmission = {
                          email,
                          course: selectedCourse?.title || 'Unknown',
                          date: new Date().toLocaleString()
                        };
                        const updatedSubmissions = [newSubmission, ...submissions];
                        setSubmissions(updatedSubmissions);
                        localStorage.setItem('keycalls_submissions', JSON.stringify(updatedSubmissions));
                      }
                    }}
                    className="space-y-4"
                  >
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#374151]/30 dark:text-[#E0F7FA]/30 w-5 h-5" />
                      <input 
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full bg-[#F9FAFB] dark:bg-[#0D141C] border-2 border-transparent focus:border-[#3B82F6] rounded-2xl p-5 pl-12 outline-none transition-all dark:text-[#E0F7FA]"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-[#3B82F6]/20"
                    >
                      Submit and Finish
                    </button>
                  </form>
                ) : (
                  <div className="space-y-8">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-emerald-50 dark:bg-emerald-500/10 p-8 rounded-2xl border border-emerald-200 dark:border-emerald-500/20"
                    >
                      <div className="flex items-center justify-center gap-3 text-emerald-600 dark:text-emerald-400 font-bold text-xl mb-2">
                        <Check className="w-6 h-6" />
                        Successfully Received!
                      </div>
                      <p className="text-emerald-600/80 dark:text-emerald-400/80">
                        We have registered your email: <strong>{email}</strong>. 
                        Check your inbox in a few minutes.
                      </p>
                    </motion.div>

                    {!invoice && !isProcessingProof && (
                      <div className="bg-white dark:bg-[#121921] p-8 rounded-2xl border-2 border-dashed border-[#3B82F6]/30">
                        <h3 className="text-xl font-bold mb-4">Invoice Generation System</h3>
                        <p className="text-sm text-[#374151]/60 mb-6">Upload your payment proof (screenshot or PDF) to generate your official invoice automatically.</p>
                        
                        <label className="flex flex-col items-center justify-center gap-4 cursor-pointer group">
                          <div className="size-16 bg-[#EFF6FF] rounded-full flex items-center justify-center group-hover:bg-[#3B82F6] group-hover:text-white transition-all">
                            <Upload className="w-8 h-8" />
                          </div>
                          <span className="font-bold text-[#3B82F6]">Upload Payment Proof</span>
                          <input type="file" className="hidden" accept="image/*,.pdf" onChange={handleFileUpload} />
                        </label>
                      </div>
                    )}

                    {isProcessingProof && (
                      <div className="py-12 text-center">
                        <div className="inline-block size-12 border-4 border-[#3B82F6] border-t-transparent rounded-full animate-spin mb-4"></div>
                        <p className="font-bold text-[#3B82F6]">Generating Invoice based on your proof...</p>
                      </div>
                    )}

                    {invoice && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white dark:bg-[#121921] p-8 rounded-3xl shadow-xl border border-[#EFF6FF] text-left"
                      >
                        <div className="flex justify-between items-start mb-8 border-b border-[#F9FAFB] pb-6">
                          <div>
                            <h3 className="text-2xl font-black text-[#374151]">INVOICE</h3>
                            <p className="text-sm font-bold text-[#3B82F6]">{invoice.id}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs font-bold uppercase text-[#374151]/40">Date</p>
                            <p className="font-bold">{invoice.date}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8 mb-8">
                          <div>
                            <p className="text-xs font-bold uppercase text-[#374151]/40 mb-1">Billed To</p>
                            <p className="font-bold">{invoice.email}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs font-bold uppercase text-[#374151]/40 mb-1">Status</p>
                            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">Pending Verification</span>
                          </div>
                        </div>

                        <div className="bg-[#F9FAFB] p-6 rounded-2xl mb-8">
                          <div className="flex justify-between font-bold text-sm mb-2 border-b border-[#374151]/10 pb-2">
                            <span>Description</span>
                            <span>Amount</span>
                          </div>
                          <div className="flex justify-between py-2">
                            <span>{invoice.course}</span>
                            <span className="font-bold">${invoice.amount}.00</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <button 
                            onClick={() => window.print()}
                            className="flex items-center gap-2 text-[#3B82F6] font-bold hover:underline"
                          >
                            <Download className="w-4 h-4" />
                            Download Invoice (PDF)
                          </button>
                          <div className="text-right">
                            <p className="text-xs font-bold uppercase text-[#374151]/40">Total Amount</p>
                            <p className="text-2xl font-black text-[#374151]">${invoice.amount}.00</p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <button 
                      onClick={() => setView('catalog')}
                      className="mt-6 text-[#374151] dark:text-[#E0F7FA] font-bold hover:underline"
                    >
                      Back to Home
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {view === 'admin' && (
            <motion.div
              key="admin"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto"
            >
              {!isAdminAuthenticated ? (
                <div className="bg-white dark:bg-[#121921] rounded-3xl p-10 shadow-2xl border border-[#EFF6FF] dark:border-[#1E293B] text-center">
                  <Lock className="w-12 h-12 text-[#3B82F6] mx-auto mb-6" />
                  <h2 className="text-2xl font-bold mb-6">Admin Access</h2>
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (adminPassword === 'admin123') { // Simple password for demo
                        setIsAdminAuthenticated(true);
                      } else {
                        alert('Invalid password');
                      }
                    }}
                    className="space-y-4"
                  >
                    <input 
                      type="password"
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      placeholder="Enter admin password"
                      className="w-full bg-[#F9FAFB] dark:bg-[#0D141C] border-2 border-transparent focus:border-[#3B82F6] rounded-2xl p-5 outline-none transition-all dark:text-[#E0F7FA]"
                    />
                    <button 
                      type="submit"
                      className="w-full bg-[#3B82F6] text-white py-4 rounded-2xl font-bold"
                    >
                      Login
                    </button>
                  </form>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-black">Admin Dashboard</h2>
                    <button 
                      onClick={() => {
                        localStorage.removeItem('keycalls_submissions');
                        setSubmissions([]);
                      }}
                      className="text-red-500 font-bold hover:underline"
                    >
                      Clear All
                    </button>
                  </div>
                  
                  <div className="bg-white dark:bg-[#121921] rounded-3xl overflow-hidden shadow-xl border border-[#EFF6FF] dark:border-[#1E293B]">
                    <table className="w-full text-left">
                      <thead className="bg-[#F9FAFB] dark:bg-[#0D141C] border-b border-[#EFF6FF] dark:border-[#1E293B]">
                        <tr>
                          <th className="p-6 font-bold">Email</th>
                          <th className="p-6 font-bold">Course</th>
                          <th className="p-6 font-bold">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {submissions.length === 0 ? (
                          <tr>
                            <td colSpan={3} className="p-10 text-center text-[#374151]/40">No submissions yet.</td>
                          </tr>
                        ) : (
                          submissions.map((sub, i) => (
                            <tr key={i} className="border-b border-[#EFF6FF] dark:border-[#1E293B]">
                              <td className="p-6 font-medium">{sub.email}</td>
                              <td className="p-6">{sub.course}</td>
                              <td className="p-6 text-sm text-[#374151]/60 dark:text-[#E0F7FA]/60">{sub.date}</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                  <button 
                    onClick={() => setView('catalog')}
                    className="text-[#3B82F6] font-bold hover:underline"
                  >
                    Back to Catalog
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-[#EFF6FF] dark:border-[#1E293B] mt-12 bg-white dark:bg-[#121921] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-[#3B82F6]/5 dark:bg-[#3B82F6]/10 px-2 py-1 rounded-xl border border-[#3B82F6]/10">
              <KKeyIcon className="w-5 h-5 text-[#3B82F6] -mr-1.5" />
              <div className="flex font-black text-sm tracking-tighter">
                <span className="text-[#10B981]">e</span>
                <span className="text-[#F59E0B]">y</span>
                <span className="text-[#EF4444] ml-0.5">C</span>
                <span className="text-[#8B5CF6]">a</span>
                <span className="text-[#EC4899]">l</span>
                <span className="text-[#06B6D4]">l</span>
                <span className="text-[#F97316]">s</span>
              </div>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#374151]/40 dark:text-[#E0F7FA]/40">© 2024. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="p-2 bg-[#3B82F6]/5 dark:bg-[#3B82F6]/10 rounded-xl text-[#374151]/60 dark:text-[#E0F7FA]/60 hover:text-[#3B82F6] hover:bg-[#3B82F6]/10 transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-[#3B82F6]/5 dark:bg-[#3B82F6]/10 rounded-xl text-[#374151]/60 dark:text-[#E0F7FA]/60 hover:text-[#E0F7FA] hover:bg-[#EC4899] transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-[#3B82F6]/5 dark:bg-[#3B82F6]/10 rounded-xl text-[#374151]/60 dark:text-[#E0F7FA]/60 hover:text-white hover:bg-[#0A66C2] transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-[#3B82F6]/5 dark:bg-[#3B82F6]/10 rounded-xl text-[#374151]/60 dark:text-[#E0F7FA]/60 hover:text-white hover:bg-[#1877F2] transition-all">
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          <div className="flex gap-8 text-sm font-bold text-[#374151]/60 dark:text-[#E0F7FA]/60 uppercase tracking-widest">
            <a href="#" className="hover:text-[#3B82F6] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#3B82F6] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#3B82F6] transition-colors">Help Center</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
