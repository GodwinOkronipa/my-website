'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import NameTypewriter from '@/components/NameTypewriter';
import Typewriter from '@/components/Typewriter';
import { 
  FaLinkedin,
  FaGithub,
  FaFileAlt,
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaExternalLinkAlt,
  FaChevronDown
} from 'react-icons/fa';
import Image from 'next/image';
import { WebHaptics } from 'web-haptics';

const haptics = typeof window !== 'undefined' ? new WebHaptics() : null;

const navItems = [
  { icon: FaHome, label: 'Home', href: '#home' },
  { icon: FaUser, label: 'My Personal Thesis', href: '#about' },
  { icon: FaBriefcase, label: 'Experience', href: '#experience' },
  { icon: FaEnvelope, label: 'Contact', href: '#contact' },
];

const getAssetPath = (path: string) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}/${path.replace(/^\//, '')}`;
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const slideIn: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const experiences = [
  {
    title: "Yango Africa STEM Fellow 2026",
    period: "2026 – Present",
    points: [
      "<span class=\"accent font-medium\">1 of 24 young Changemakers</span> selected across 6 African countries to tackle the continent's biggest problems through STEM innovation.",
      "Received a <span class=\"accent font-medium\">generous bursary ;)</span> and 1-on-1 mentorship from industry experts and academic leaders.",
      "Collaborating with fellows across 6 nations in an <span class=\"accent font-medium\">inter-country network</span>.",
      "Preparing for a pitch in <span class=\"accent font-medium\">Abidjan, Côte d'Ivoire</span> where my stealth project would receive funding."
    ]
  },
  {
    title: "Product Manager — Flywheel",
    period: "2025 – Present",
    points: [
      "Launched <span class=\"accent font-medium\">20+ apps & websites</span> with cross-functional teams, delivering projects on time and within scope.",
      "Crafted <span class=\"accent font-medium\">product strategies</span> aligned with client goals, resulting in <span class=\"accent font-medium\">measurable efficiency gains</span>.",
      "Engaged directly with SMEs to understand pain points and translate them into <span class=\"accent font-medium\">technical requirements</span>.",
      "Oversaw <span class=\"accent font-medium\">end-to-end product lifecycle</span>: ideation, design, development, deployment, and optimization."
    ]
  },
  {
    title: "Digital Transformation Analyst — Telecel Ghana",
    period: "Sep 2025",
    points: [
      "Spearheaded <span class=\"accent font-medium\">process automation</span> initiatives in TCASH and DT teams.",
      "Analyzed operational data and proposed <span class=\"accent font-medium\">digital workflows</span> that improved cross-department efficiency.",
      "Collaborated with IT and business units to design <span class=\"accent font-medium\">scalable digital solutions</span>.",
      "Supported the rollout of new <span class=\"accent font-medium\">enterprise systems</span>, ensuring smooth adoption through training and documentation."
    ]
  },
  {
    title: "Robotics Instructor — GCTU",
    period: "2024 – Present",
    points: [
      "Mentor and guide students in <span class=\"accent font-medium\">robotics engineering</span> principles, embedded systems, and automation technologies.",
      "Lead hands-on workshops and project-based learning sessions to develop <span class=\"accent font-medium\">practical robotics skills</span>.",
      "Coach student teams for <span class=\"accent font-medium\">national and international robotics competitions</span>.",
      "Organize and judge <span class=\"accent font-medium\">hackathons and tech challenges</span> to foster creativity and collaboration."
    ]
  }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [showContent, setShowContent] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [thesisTypewriter, setThesisTypewriter] = useState(false);
  const [imageHeld, setImageHeld] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const touchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Add schema.org structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Godwin Okronipa",
    "alternateName": "Exornam",
    "jobTitle": ["Product Manager", "Systems Designer", "AI Engineer"],
    "url": "https://godwinokronipa.github.io/my-website",
    "sameAs": [
      "https://www.linkedin.com/in/godwin-okronipa-5b59002b6",
      "https://GitHub.com/GodwinOkronipa",
      "https://substack.com/@godwinnotes"
    ],
    "email": "godwinokro2020@gmail.com",
    "telephone": "+233 200 645 732",
    "description": "Product Manager, Systems Designer, and AI Engineer specializing in ethical and responsible AI solutions.",
    "affiliation": {
      "@type": "Organization",
      "name": "Ghana Communication Technology University"
    }
  };

  useEffect(() => {
    setIsClient(true);
    // Show main content after a brief delay
    const timer = setTimeout(() => setShowContent(true), 100);
    
    // Update clock every second
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Accra',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      };
      const timeString = now.toLocaleTimeString('en-US', options);
      setCurrentTime(timeString);
    };
    
    updateClock();
    const interval = setInterval(updateClock, 1000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(section);
              }
            });
          },
          { threshold: 0.15, rootMargin: '-20% 0px -20% 0px' }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Image reveal handlers
  const triggerImageReveal = () => {
    if (imageHeld) return; // Ignore secondary taps while image is already active

    setImageHeld(true);
    if (haptics) haptics.trigger('medium');
    
    if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
    
    touchTimeoutRef.current = setTimeout(() => {
      setImageHeld(false);
    }, 2500);
  };

  const handlePointerDown = () => {
    triggerImageReveal();
  };

  const handleNavClick = (href: string) => {
    // Add haptic feedback
    if (haptics) {
      haptics.trigger('light');
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="magic-bg text-white min-h-screen pb-24">
        
        {/* Digital Clock */}
        {isClient && (
          <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
            <div className="glass px-4 py-2 rounded-full whitespace-nowrap min-w-max">
              <p className="font-mono text-xs text-white/60 tracking-wider">
                {currentTime} GMT • ACCRA, GHANA
              </p>
            </div>
          </div>
        )}
        
        {/* Hero Section */}
        <section id="home" className="min-h-[90vh] flex flex-col justify-center px-6 sm:px-8 lg:px-12 pt-10">
          <div className="max-w-4xl mx-auto w-full">
            {/* Profile Image Top */}
            <AnimatePresence>
              {showContent && isClient && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                  className="flex justify-center mb-12"
                >
                  <motion.div 
                    className="relative"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {/* Glow effect that appears when image is held */}
                    {imageHeld && (
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] opacity-30 blur-xl z-[-1]" />
                    )}
                    
                    <div className="relative w-96 h-72 sm:w-[28rem] sm:h-[20rem] rounded-3xl overflow-hidden glass p-2">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <Image 
                          src={imageHeld ? getAssetPath("webimage2.webp") : getAssetPath("webimage.webp")} 
                          alt="Godwin Okronipa" 
                          fill 
                          className="object-cover cursor-pointer"
                          onPointerDown={handlePointerDown}
                        />
                        
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                    <p className="text-xs text-white/40 italic text-center mt-2 px-4 min-h-[1.5rem]">
                      {imageHeld ? "Welcome, it's nice to meet you" : "[💡 tap image to say hi ;)]"}
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showContent && isClient && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="space-y-8"
                >
                  {/* Main Headline with Typewriter */}
                  <motion.div variants={fadeInUp} className="space-y-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-center">
                      <NameTypewriter 
                        text="Godwin Okronipa Exornam" 
                        speed={120}
                        delay={100}
                        className="text-white"
                        onComplete={() => setTypingComplete(true)}
                      />
                    </h1>
                    
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: typingComplete ? 1 : 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-lg sm:text-xl text-white/60 max-w-2xl text-center mx-auto"
                    >
                      I build systems that actually work in Africa
                      <br />
                      <span className="text-lg sm:text-xl opacity-70">Product · Systems · AI</span>
                    </motion.p>
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div 
                    variants={fadeInUp}
                    className="flex flex-wrap justify-center gap-3"
                  >
                    <a
                      href="https://www.linkedin.com/in/godwin-okronipa-5b59002b6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost inline-flex items-center gap-2 text-sm px-3 py-2"
                    >
                      <FaLinkedin size={14} />
                      LinkedIn
                    </a>
                    <a
                      href="https://GitHub.com/GodwinOkronipa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost inline-flex items-center gap-2 text-sm px-3 py-2"
                    >
                      <FaGithub size={14} />
                      GitHub
                    </a>
                    <a
                      href="https://substack.com/@godwinnotes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost inline-flex items-center gap-2 text-sm px-3 py-2"
                    >
                      <FaFileAlt size={14} />
                      Substack
                    </a>
                  </motion.div>

                  {/* Avatar + About Link with Image */}
                  <motion.div 
                    variants={fadeInUp}
                    className="flex flex-col items-center gap-4 pt-4"
                  >
                    <button 
                      onClick={() => {
                        handleNavClick('#about');
                        setThesisTypewriter(true);
                        if (haptics) haptics.trigger('medium');
                      }}
                      className="btn-ghost text-sm inline-flex items-center gap-2 group border border-green-500/50 hover:border-green-500 transition-all duration-300 relative w-full sm:w-auto"
                    >
                      <span className="absolute inset-0 rounded-lg animate-pulse border border-green-500/30 pointer-events-none -z-10" />
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2" />
                      My Personal Thesis — Building the Africa we deserve, one system at a time.
                      <FaExternalLinkAlt size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* My Personal Thesis Section */}
        <section id="about" className="px-6 sm:px-8 lg:px-12 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="glass p-8 sm:p-10"
            >
              <motion.h2 
                variants={slideIn}
                className="text-2xl sm:text-3xl font-semibold mb-8"
              >
                My Personal Thesis
              </motion.h2>

              <div className="text-white/80 leading-relaxed">
                {thesisTypewriter ? (
                  <div>
                    <Typewriter 
                      key="thesis-full"
                      text={`<i>Building the Africa we deserve, one system at a time.</i>
> "Even those who want to go to heaven don't want to die to get there."— Steve Jobs
<h2>The Vision</h2>
Everyone wants progress, but nobody wants the friction that usually comes with it. In the context of Ghana and the wider continent, "heaven" is a seamless, digitized economy, where systems work for people, not against them. At least that's how the politicians have been selling it. My work however, centers around removing that friction. <b>I build systems that bridge the gap between where we are and the Africa we deserve.</b>

Currently pursuing Computer Engineering at GCTU, I sit at the intersection of Hardware systems, Software Development and digital product management. My work spans from hands-on engineering to high-level strategy, where I enjoy translating complex technical concepts into solutions that people can actually use.

I translate complex technical hurdles into intuitive solutions that people actually want to use, and I am passionate about building systems that empower people and communities.

<h2>The Impact</h2>
As a Product Manager at <a href="https://bookflywheel.com" target="_blank" rel="noopener noreferrer">Flywheel Technologies</a>, I've led the launch of over 20 apps and websites for SMEs in Ghana, helping businesses digitize operations, automate workflows, and uncover efficiency gains they didn't think were possible.

I have worked with and consulted for several 7/8-figure businesses in Ghana and am open to conversations on digital strategy, intelligent automation and transformation.

Beyond industry, I'm deeply invested in the future of ethical and responsible AI. I see AI as a powerful tool for progress, but only if guided with principles of fairness, transparency, and impact.

At heart, I'm driven by curiosity, creativity, and a commitment to impact. My vision is simple: to contribute to a future where Africa doesn't just consume technology, but builds it, shapes it, and leads with it.

<h2>The Mission</h2>
Technology shouldn’t be a burden. It should be an empowerment. I believe in creating systems that feel like second nature—tools that give people the results they want without the struggle of bad design.
<b>Let’s build the future, one system at a time.</b>`}
                      speed={10}
                      start={true}
                    />
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-white/60 mb-4">Click the &quot;My Personal Thesis&quot; button above to see the story unfold...</p>
                  </div>
                )}
              </div>

            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="px-6 sm:px-8 lg:px-12 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-semibold mb-8"
            >
              Experience
            </motion.h2>

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`glass overflow-hidden transition-all duration-300 ${
                    expandedIndex === index ? 'ring-1 ring-[var(--accent)]/30' : ''
                  }`}
                >
                  <button
                    onClick={() => {
                      setExpandedIndex(expandedIndex === index ? null : index);
                      if (haptics) haptics.trigger('light');
                    }}
                    className="w-full text-left p-6 sm:p-8 flex items-baseline justify-between gap-4 group"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold group-hover:text-[var(--accent)] transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-white/50 mt-1">{exp.period}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white/30 group-hover:text-white/60"
                    >
                      <FaChevronDown size={14} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 sm:px-8 pb-8 pt-0">
                          <ul className="space-y-3 text-white/70 border-t border-white/5 pt-6">
                            {exp.points.map((point, i) => (
                              <li key={i} className="flex gap-3">
                                <span className="text-[var(--accent)] mt-1">•</span>
                                <span dangerouslySetInnerHTML={{ 
                                  __html: point.replace(/<span className="accent font-medium">(.*?)<\/span>/g, '<span class="accent font-medium">$1</span>')
                                    .replace(/<span class="accent font-medium">(.*?)<\/span>/g, '<span class="accent font-medium">$1</span>') 
                                }} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-6 sm:px-8 lg:px-12 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="glass p-8 sm:p-10"
            >
              <motion.h2 
                variants={slideIn}
                className="text-2xl sm:text-3xl font-semibold mb-8"
              >
                Contact Me
              </motion.h2>

              <motion.div 
                variants={staggerContainer}
                className="grid sm:grid-cols-2 gap-4 mb-8"
              >
                <motion.a
                  variants={slideIn}
                  href="mailto:gokronipa@icloud.com"
                  className="glass p-4 flex items-center gap-3 hover:border-white/20 transition-colors"
                >
                  <FaEnvelope size={20} className="text-[var(--accent)]" />
                  <div>
                    <p className="text-sm text-white/50">Email</p>
                    <p className="text-sm font-medium">gokronipa@icloud.com</p>
                  </div>
                </motion.a>

                <motion.div
                  variants={slideIn}
                  className="glass p-4 flex items-center gap-3"
                >
                  <button 
                    onClick={() => window.location.href = 'tel:+233200645732'}
                    className="w-full text-left hover:bg-white/5 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs">�</div>
                    <div>
                      <p className="text-sm text-white/50">Call</p>
                      <p className="font-medium">Tap to call</p>
                    </div>
                  </button>
                </motion.div>
              </motion.div>

              <motion.div variants={slideIn} className="space-y-4">
                <h3 className="text-lg font-medium mb-4">Send a message</h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-white/60">Name</label>
                      <input 
                        id="name" 
                        name="name" 
                        required
                        className="w-full glass bg-transparent px-4 py-3 rounded-xl outline-none focus:border-[var(--accent)]/50 transition-colors" 
                        placeholder="Your name" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-white/60">Email</label>
                      <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required
                        className="w-full glass bg-transparent px-4 py-3 rounded-xl outline-none focus:border-[var(--accent)]/50 transition-colors" 
                        placeholder="you@example.com" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-white/60">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4} 
                      required
                      className="w-full glass bg-transparent px-4 py-3 rounded-xl outline-none focus:border-[var(--accent)]/50 transition-colors resize-none" 
                      placeholder="Say hello..." 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="btn-primary"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="nav-glass rounded-full px-2 py-2 flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`
                    relative p-3 rounded-full transition-all duration-300 group
                    ${isActive 
                      ? 'bg-white/10 text-[var(--accent)]' 
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                    }
                  `}
                  aria-label={item.label}
                >
                  <Icon size={20} />
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white/10 backdrop-blur-md rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </nav>

      </div>
    </>
  );
}
