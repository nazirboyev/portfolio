import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Send,
  User,
  MapPin,
  Briefcase,
  X,
  FolderGit2,
  Sparkles,
  Menu,
  Sun,
  Moon,
  Phone,
  Gamepad2,
  Code2,
  GraduationCap,
  Calendar,
  ChevronDown
} from 'lucide-react';
import { translations } from './translations';

// Rasmiy Logo va Ikonkalar (Brand SVGs)
const Html5Icon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path d="M3 2L4.8 20.3L12 22.3L19.2 20.3L21 2H3Z" fill="#E34F26"/>
    <path d="M12 3.8V20.5L17.8 18.9L19.4 3.8H12Z" fill="#EF652A"/>
    <path d="M12 7.7H7.4L7.6 10H12V12.3H7.8L8 14.6L12 15.6V17.9L7.2 16.6L6.8 11.8L6.4 5.5H17.6L17.4 7.7H12Z" fill="#ECECEC"/>
    <path d="M12 12.3V10H15.6L15.4 12.3H12ZM12 15.6V17.9L16.8 16.6L17.1 13.2H14.8L14.6 14.6L12 15.6Z" fill="#FFFFFF"/>
  </svg>
);

const Css3Icon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path d="M3 2L4.8 20.3L12 22.3L19.2 20.3L21 2H3Z" fill="#1572B6"/>
    <path d="M12 3.8V20.5L17.8 18.9L19.4 3.8H12Z" fill="#33A9DC"/>
    <path d="M12 7.7H7.4L7.6 10H12V12.3H7.8L8 14.6L12 15.6V17.9L7.2 16.6L6.8 11.8L6.4 5.5H17.6L17.4 7.7H12Z" fill="#ECECEC"/>
    <path d="M12 12.3V10H15.6L15.4 12.3H12ZM12 15.6V17.9L16.8 16.6L17.1 13.2H14.8L14.6 14.6L12 15.6Z" fill="#FFFFFF"/>
  </svg>
);

const JsIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
    <path d="M6.5 17.8C7.1 18.5 7.9 18.9 9 18.9C10.2 18.9 11 18.3 11 17.1V10.5H9.2V17C9.2 17.5 8.9 17.7 8.5 17.7C8.1 17.7 7.7 17.4 7.4 17L6.5 17.8ZM12.7 18.8C13.8 19.4 15 19.7 16.2 19.7C18.4 19.7 19.8 18.6 19.8 16.8C19.8 15.2 18.8 14.4 17.1 13.6C15.8 13.1 15.2 12.6 15.2 11.9C15.2 11.2 15.8 10.7 16.7 10.7C17.6 10.7 18.4 11.1 18.9 11.7L19.9 10.5C19.1 9.6 18 9.2 16.6 9.2C14.7 9.2 13.4 10.3 13.4 12C13.4 13.5 14.3 14.3 16 15C17.4 15.6 17.9 16.2 17.9 17C17.9 17.8 17.2 18.4 16.1 18.4C15.1 18.4 14.1 17.9 13.5 17.2L12.7 18.8Z" fill="#000000"/>
  </svg>
);

const ReactIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="12" rx="4.2" ry="10" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(30 12 12)"/>
    <ellipse cx="12" cy="12" rx="4.2" ry="10" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(90 12 12)"/>
    <ellipse cx="12" cy="12" rx="4.2" ry="10" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(150 12 12)"/>
    <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <defs>
      <radialGradient id="instaGrad" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#instaGrad)" />
    <path d="M16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4Z" stroke="white" strokeWidth="1.8" fill="none"/>
    <circle cx="12" cy="12" r="3.5" stroke="white" strokeWidth="1.8" fill="none"/>
    <circle cx="16.5" cy="7.5" r="1" fill="white"/>
  </svg>
);

const TelegramIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#2AABEE"/>
    <path d="M5.4 11.8L17.7 7.1C18.3 6.9 18.8 7.3 18.6 7.9L16.5 17.7C16.3 18.5 15.6 18.7 15 18.3L11.8 15.9L10.3 17.4C10.1 17.6 10 17.8 9.7 17.8L9.9 14.6L15.7 9.4C16 9.1 15.6 9 15.3 9.2L8.1 13.7L5 12.7C4.3 12.5 4.3 12 5.4 11.8Z" fill="white"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#FF0000"/>
    <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="white"/>
  </svg>
);

const renderSkillIcon = (name) => {
  switch (name) {
    case 'HTML': return <Html5Icon />;
    case 'CSS': return <Css3Icon />;
    case 'JavaScript': return <JsIcon />;
    case 'React Js': return <ReactIcon />;
    case 'GitHub': return <GithubIcon />;
    default: return <Code2 size={24} />;
  }
};

// Davlat Bayroqlari (Flag SVGs)
const UzbekFlag = () => (
  <svg width="22" height="15" viewBox="0 0 22 15" fill="none" style={{ borderRadius: '3px', flexShrink: 0, display: 'block' }}>
    <rect width="22" height="15" fill="#1EB53A" />
    <rect width="22" height="10" fill="#FFFFFF" />
    <rect width="22" height="5" fill="#0099B5" />
    <rect y="4.7" width="22" height="0.6" fill="#CE1126" />
    <rect y="9.7" width="22" height="0.6" fill="#CE1126" />
    <circle cx="3.8" cy="2.5" r="1.4" fill="#FFFFFF" />
    <circle cx="4.3" cy="2.5" r="1.2" fill="#0099B5" />
    <circle cx="5.8" cy="1.6" r="0.3" fill="#FFFFFF" />
    <circle cx="6.8" cy="1.6" r="0.3" fill="#FFFFFF" />
    <circle cx="7.8" cy="1.6" r="0.3" fill="#FFFFFF" />
    <circle cx="6.3" cy="2.5" r="0.3" fill="#FFFFFF" />
    <circle cx="7.3" cy="2.5" r="0.3" fill="#FFFFFF" />
    <circle cx="6.8" cy="3.4" r="0.3" fill="#FFFFFF" />
  </svg>
);

const RussianFlag = () => (
  <svg width="22" height="15" viewBox="0 0 22 15" fill="none" style={{ borderRadius: '3px', flexShrink: 0, display: 'block' }}>
    <rect width="22" height="5" fill="#FFFFFF" />
    <rect y="5" width="22" height="5" fill="#0039A6" />
    <rect y="10" width="22" height="5" fill="#D52B1E" />
  </svg>
);

const EnglishFlag = () => (
  <svg width="22" height="15" viewBox="0 0 22 15" fill="none" style={{ borderRadius: '3px', flexShrink: 0, display: 'block' }}>
    <clipPath id="uk-flag-clip"><rect width="22" height="15" rx="3"/></clipPath>
    <g clipPath="url(#uk-flag-clip)">
      <rect width="22" height="15" fill="#012169"/>
      <path d="M0 0L22 15M22 0L0 15" stroke="#FFFFFF" strokeWidth="2.5"/>
      <path d="M0 0L22 15M22 0L0 15" stroke="#C8102E" strokeWidth="1.2"/>
      <path d="M11 0V15M0 7.5H22" stroke="#FFFFFF" strokeWidth="4.2"/>
      <path d="M11 0V15M0 7.5H22" stroke="#C8102E" strokeWidth="2.4"/>
    </g>
  </svg>
);

const LANGUAGES = [
  { code: 'uz', name: "O'zbek", Flag: UzbekFlag },
  { code: 'ru', name: "Русский", Flag: RussianFlag },
  { code: 'en', name: "English", Flag: EnglishFlag }
];

// Boshlang'ich default loyihalar
const INITIAL_PROJECTS = [
  {
    id: 1,
    title: '100x Academy',
    url: 'https://100x-academy-six.vercel.app/',
    description: "Zamonaviy IT ta'lim platformasi va onlayn kurslar loyihasi.",
    tags: ['React', 'Tailwind', 'Vercel']
  },
  {
    id: 2,
    title: 'Survival Arena',
    url: 'https://survival-arena-blond.vercel.app',
    description: "Brauzerda ishlovchi survival dinamik o'yin va interaktiv veb dastur.",
    tags: ['JavaScript', 'Game Dev', 'Canvas']
  },
  {
    id: 3,
    title: 'Mashina Savdo',
    url: 'https://mashina-savdo-lime.vercel.app/',
    description: "Avtomobillar sotish va xarid qilish uchun e'lonlar maydoni.",
    tags: ['React', 'Frontend', 'E-Commerce']
  },
  {
    id: 4,
    title: 'Snake Game',
    url: 'https://snake-game-pi-two-39.vercel.app/',
    description: "Klassik retro iloncha o'yinining qulay boshqaruvga ega veb talqini.",
    tags: ['JavaScript', 'Retro Game', 'Vercel']
  },
  {
    id: 5,
    title: 'Shop Frontend',
    url: 'https://shop-frontend-iota-lake.vercel.app/',
    description: "Zamonaviy onlayn internet-do'kon frontend interfeysi va katalog tizimi.",
    tags: ['React', 'Online Shop', 'UI/UX']
  }
];

export default function App() {
  // Til holati (uz, ru, en)
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('nazirboyev_lang') || 'uz';
  });

  // Tungi / Kunduzgi rejim (dark, light)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('nazirboyev_theme') || 'dark';
  });

  // Faol til tarjimalari
  const t = translations[lang] || translations.uz;

  // Loyihalar holati
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('nazirboyev_projects');
    return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
  });

  // Profil rasmi holati (standart rasm /avatar.jpg)
  const [avatar, setAvatar] = useState(() => {
    return localStorage.getItem('nazirboyev_avatar') || '/avatar.jpg';
  });

  const currentLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];
  const otherLangs = LANGUAGES.filter((l) => l.code !== lang);

  // Kelgan xabarlar holati
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('nazirboyev_messages');
    return saved ? JSON.parse(saved) : [];
  });

  // Menyular
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  // Til tanlash dropdownini tashqariga bosganda yopish
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.lang-dropdown-wrapper')) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  // Kontakt formasi
  const [contactName, setContactName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSuccess, setContactSuccess] = useState('');
  const [contactError, setContactError] = useState('');

  // Theme rejimini DOM ga qo'llash
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('nazirboyev_theme', theme);
  }, [theme]);

  // Tilni saqlash
  useEffect(() => {
    localStorage.setItem('nazirboyev_lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Server diskiga (data/portfolio-data.json) saqlash
  const syncToServer = async (updatedProjects, updatedAvatar, updatedMessages) => {
    try {
      await fetch('/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projects: updatedProjects,
          avatar: updatedAvatar,
          messages: updatedMessages
        })
      });
    } catch (err) {
      console.warn('Serverga saqlashda tarmoq xatosi:', err);
    }
  };

  // Sahifa ochilganda server diskidan o'qib olish
  useEffect(() => {
    fetch('/api/data')
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('API mavjud emas');
      })
      .then((data) => {
        if (data.projects && Array.isArray(data.projects)) {
          setProjects(data.projects);
          localStorage.setItem('nazirboyev_projects', JSON.stringify(data.projects));
        }
        if (typeof data.avatar === 'string' && data.avatar) {
          setAvatar(data.avatar);
          localStorage.setItem('nazirboyev_avatar', data.avatar);
        } else {
          setAvatar('/avatar.jpg');
          localStorage.setItem('nazirboyev_avatar', '/avatar.jpg');
        }
        if (data.messages && Array.isArray(data.messages)) {
          setMessages(data.messages);
          localStorage.setItem('nazirboyev_messages', JSON.stringify(data.messages));
        }
      })
      .catch((err) => {
        console.log('Serverdan o\'qilmadi, mahalliy saqlagichdan foydalanilmoqda:', err.message);
      });
  }, []);

  // LocalStorage zaxira saqlash
  useEffect(() => {
    localStorage.setItem('nazirboyev_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    if (avatar) {
      localStorage.setItem('nazirboyev_avatar', avatar);
    } else {
      localStorage.removeItem('nazirboyev_avatar');
    }
  }, [avatar]);

  useEffect(() => {
    localStorage.setItem('nazirboyev_messages', JSON.stringify(messages));
  }, [messages]);




  // Kontakt xabarini jo'natish
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!contactName.trim() || !contactInfo.trim() || !contactMessage.trim()) {
      setContactError(t.contact.errorMsg);
      return;
    }

    const newMsg = {
      id: Date.now(),
      name: contactName.trim(),
      contact: contactInfo.trim(),
      message: contactMessage.trim(),
      date: new Date().toLocaleString(lang === 'ru' ? 'ru-RU' : (lang === 'en' ? 'en-US' : 'uz-UZ'))
    };

    const updated = [newMsg, ...messages];
    setMessages(updated);
    syncToServer(projects, avatar, updated);

    setContactSuccess(t.contact.successMsg);
    setContactError('');
    setContactName('');
    setContactInfo('');
    setContactMessage('');

    setTimeout(() => {
      setContactSuccess('');
    }, 6000);
  };


  return (
    <div>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-container">
          <a href="#" className="nav-logo">
            <img src="/logo.jpg" alt="Nazirboyev Logo" className="nav-logo-img" />
            <span className="nav-logo-text">Nazirboyev</span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            <li><a href="#hero" className="nav-link">{t.nav.about}</a></li>
            <li><a href="#skills" className="nav-link">{t.nav.skills}</a></li>
            <li><a href="#projects" className="nav-link">{t.nav.projects}</a></li>
            <li><a href="#social" className="nav-link">{t.nav.social}</a></li>
            <li><a href="#contact" className="nav-link">{t.nav.contact}</a></li>
          </ul>

          {/* Tungi/Kunduzgi rejim & Til tanlash & Admin */}
          <div className="nav-controls">
            {/* Yagona bayroqli til tanlagich (bosilganda qolgan bayroqlar ochiladi) */}
            <div className="lang-dropdown-wrapper">
              <button
                type="button"
                className="lang-trigger-btn"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                title={currentLang.name}
                aria-label="Tilni tanlash"
              >
                <currentLang.Flag />
                <ChevronDown size={12} className={`lang-chevron ${langDropdownOpen ? 'open' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div className="lang-dropdown-menu">
                  {otherLangs.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      className="lang-dropdown-item"
                      onClick={() => {
                        setLang(item.code);
                        setLangDropdownOpen(false);
                      }}
                      title={item.name}
                    >
                      <item.Flag />
                      <span>{item.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Tungi va Kunduzgi rejim tugmasi (Dark / Light Mode) */}
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={theme === 'dark' ? (lang === 'ru' ? 'Светлая тема' : (lang === 'en' ? 'Light mode' : 'Kunduzgi rejim')) : (lang === 'ru' ? 'Темная тема' : (lang === 'en' ? 'Dark mode' : 'Tungi rejim'))}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>


            {/* Mobil menyu tugmasi */}
            <div className="mobile-nav-actions">
              <button
                className="mobile-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menyu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobil menyu ochilgandagi dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer">
            <a
              href="#hero"
              className="mobile-nav-item"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.about}
            </a>
            <a
              href="#skills"
              className="mobile-nav-item"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.skills}
            </a>
            <a
              href="#projects"
              className="mobile-nav-item"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.projects}
            </a>
            <a
              href="#social"
              className="mobile-nav-item"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.social}
            </a>
            <a
              href="#contact"
              className="mobile-nav-item"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-badge">
                <span className="status-dot"></span>
                {t.hero.badge}
              </div>

              <h1 className="hero-title">
                {t.hero.greeting} <br />
                <span>{t.hero.name}</span>
              </h1>

              <div className="hero-subtitle">
                {t.hero.role}
              </div>

              <p className="hero-bio">
                {t.hero.bio}
              </p>

              {/* Shaxsiy ma'lumot kartalari */}
              <div className="info-cards">
                <div className="info-card">
                  <div className="info-card-label">
                    <User size={14} />
                    <span>{t.hero.fioLabel}</span>
                  </div>
                  <div className="info-card-value">{t.hero.fioValue}</div>
                </div>

                <div className="info-card">
                  <div className="info-card-label">
                    <Calendar size={14} />
                    <span>{t.hero.birthLabel}</span>
                  </div>
                  <div className="info-card-value">{t.hero.birthValue}</div>
                </div>

                <div className="info-card">
                  <div className="info-card-label">
                    <MapPin size={14} />
                    <span>{t.hero.locationLabel}</span>
                  </div>
                  <div className="info-card-value">{t.hero.locationValue}</div>
                </div>

                <div className="info-card">
                  <div className="info-card-label">
                    <GraduationCap size={14} />
                    <span>{t.hero.schoolLabel}</span>
                  </div>
                  <div className="info-card-value">{t.hero.schoolValue}</div>
                </div>

                <div className="info-card">
                  <div className="info-card-label">
                    <Code2 size={14} />
                    <span>{t.hero.itParkLabel}</span>
                  </div>
                  <div className="info-card-value">{t.hero.itParkValue}</div>
                </div>

                <div className="info-card">
                  <div className="info-card-label">
                    <Gamepad2 size={14} />
                    <span>{t.hero.hobbyLabel}</span>
                  </div>
                  <div className="info-card-value">{t.hero.hobbyValue}</div>
                </div>

                {/* Telefon raqamlar kartasi (Full width) */}
                <div className="info-card full-width">
                  <div className="info-card-label">
                    <Phone size={14} />
                    <span>{t.hero.phonesLabel}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginTop: '0.2rem' }}>
                    <a href="tel:+998888571817" className="phone-link">
                      📞 +998 88 857 18 17
                    </a>
                    <a href="tel:+998776040009" className="phone-link">
                      📞 +998 77 604 00 09
                    </a>
                  </div>
                </div>
              </div>

              <div className="hero-actions">
                <a href="#projects" className="btn-primary">
                  {t.hero.viewProjects}
                </a>
                <a href="#contact" className="btn-secondary">
                  {t.hero.contactMe}
                </a>
              </div>
            </div>

            {/* Avatar / Profil rasmi */}
            <div className="hero-avatar-wrapper">
              <div className="avatar-container">
                {avatar ? (
                  <img src={avatar} alt="Nazirboyev Xudoyshukur" className="avatar-img" />
                ) : (
                  <div className="avatar-placeholder">
                    <User size={68} strokeWidth={1.5} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KO'NIKMALAR (SKILLS) SECTION */}
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.skills.tag}</span>
            <h2 className="section-title">{t.skills.title}</h2>
            <p className="section-desc">{t.skills.desc}</p>
          </div>

          <div className="skills-grid">
            {t.skills.items.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-top">
                  <div className="skill-icon-box">
                    {renderSkillIcon(skill.name)}
                  </div>
                  <span className="skill-badge">{skill.level}</span>
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-desc">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOYIHALAR SECTION */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.projects.tag}</span>
            <h2 className="section-title">{t.projects.title}</h2>
            <p className="section-desc">{t.projects.desc}</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div>
                  <div className="project-top">
                    <div className="project-icon-box">
                      <FolderGit2 size={22} />
                    </div>
                    <div className="project-actions">
                      {isAdmin && (
                        <button
                          className="btn-delete-project"
                          onClick={() => handleDeleteProject(project.id)}
                          title="O'chirish"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                        title={project.title}
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                </div>

                <div className="project-footer">
                  <div className="project-tags">
                    {project.tags && project.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-btn"
                  >
                    <span>{t.projects.visit}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IJTIMOIY TARMOQLAR & TELEFONLAR SECTION */}
      <section id="social" className="social-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.social.tag}</span>
            <h2 className="section-title">{t.social.title}</h2>
            <p className="section-desc">{t.social.desc}</p>
          </div>

          <div className="social-grid">
            {/* YouTube Channel (@XudishPlay) */}
            <a
              href="https://www.youtube.com/@XudishPlay"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <div className="social-icon-wrapper youtube">
                <YoutubeIcon />
              </div>
              <div className="social-meta">
                <h4>YouTube</h4>
                <p>{t.social.youtubeSub}</p>
              </div>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/nazirboyev_x"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <div className="social-icon-wrapper">
                <TelegramIcon />
              </div>
              <div className="social-meta">
                <h4>Telegram</h4>
                <p>{t.social.telegramSub}</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/nazirboyev.x/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <div className="social-icon-wrapper">
                <InstagramIcon />
              </div>
              <div className="social-meta">
                <h4>Instagram</h4>
                <p>{t.social.instagramSub}</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/nazirboyev"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <div className="social-icon-wrapper">
                <GithubIcon />
              </div>
              <div className="social-meta">
                <h4>GitHub</h4>
                <p>{t.social.githubSub}</p>
              </div>
            </a>

            {/* Telefon 1 */}
            <a
              href="tel:+998888571817"
              className="social-card"
            >
              <div className="social-icon-wrapper">
                <Phone size={22} />
              </div>
              <div className="social-meta">
                <h4>+998 88 857 18 17</h4>
                <p>{t.social.phone1Sub}</p>
              </div>
            </a>

            {/* Telefon 2 */}
            <a
              href="tel:+998776040009"
              className="social-card"
            >
              <div className="social-icon-wrapper">
                <Phone size={22} />
              </div>
              <div className="social-meta">
                <h4>+998 77 604 00 09</h4>
                <p>{t.social.phone2Sub}</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* BOG'LANISH SECTION */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.contact.tag}</span>
            <h2 className="section-title">{t.contact.title}</h2>
            <p className="section-desc">{t.contact.desc}</p>
          </div>

          <div className="contact-layout">
            <div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                {t.contact.infoText}
              </p>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.contact.address}</div>
                    <div style={{ fontWeight: 600 }}>{t.contact.addressVal}</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.contact.phones}</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <a href="tel:+998888571817" className="phone-link">+998 88 857 18 17</a>
                      <a href="tel:+998776040009" className="phone-link">+998 77 604 00 09</a>
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Send size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Telegram</div>
                    <a
                      href="https://t.me/nazirboyev_x"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontWeight: 600, color: 'var(--accent)' }}
                    >
                      @nazirboyev_x
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.contact.roleLabel}</div>
                    <div style={{ fontWeight: 600 }}>{t.contact.roleVal}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Aloqa formasi */}
            <form onSubmit={handleSendMessage} className="contact-form">
              {contactSuccess && (
                <div className="form-alert success">
                  {contactSuccess}
                </div>
              )}
              {contactError && (
                <div className="form-alert error">
                  {contactError}
                </div>
              )}

              <div className="form-group">
                <label className="form-label">{t.contact.nameLabel}</label>
                <input
                  type="text"
                  required
                  placeholder={t.contact.namePlaceholder}
                  className="form-input"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t.contact.contactLabel}</label>
                <input
                  type="text"
                  required
                  placeholder={t.contact.contactPlaceholder}
                  className="form-input"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t.contact.messageLabel}</label>
                <textarea
                  required
                  placeholder={t.contact.messagePlaceholder}
                  className="form-textarea"
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem' }}>
                <Send size={18} />
                <span>{t.contact.sendBtn}</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Nazirboyev Xudoyshukur. {t.footer}</p>
        </div>
      </footer>

      {/* MOBIL PASTKI BOSHQARUV PANELI (MOBILE BOTTOM BAR) */}
      <nav className="mobile-bottom-nav">
        <a href="#hero" className="mobile-tab-btn">
          <User size={19} />
          <span>{t.nav.about}</span>
        </a>
        <a href="#skills" className="mobile-tab-btn">
          <Code2 size={19} />
          <span>{t.nav.skills}</span>
        </a>
        <a href="#projects" className="mobile-tab-btn">
          <FolderGit2 size={19} />
          <span>{t.nav.projects}</span>
        </a>
        <a href="#social" className="mobile-tab-btn">
          <Sparkles size={19} />
          <span>{t.nav.social}</span>
        </a>
        <a href="#contact" className="mobile-tab-btn">
          <Send size={19} />
          <span>{t.nav.contact}</span>
        </a>
      </nav>
    </div>
  );
}
