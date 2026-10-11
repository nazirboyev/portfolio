import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Send,
  Lock,
  LogOut,
  Plus,
  Trash2,
  Upload,
  User,
  MapPin,
  Briefcase,
  X,
  MessageSquare,
  FolderGit2,
  ImageIcon,
  Sparkles,
  Menu,
  Sun,
  Moon,
  Phone,
  Gamepad2,
  Code2,
  GraduationCap,
  Calendar
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

  // Profil rasmi holati
  const [avatar, setAvatar] = useState(() => {
    return localStorage.getItem('nazirboyev_avatar') || '';
  });

  // Kelgan xabarlar holati
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('nazirboyev_messages');
    return saved ? JSON.parse(saved) : [];
  });

  // Admin login holati
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('nazirboyev_is_admin') === 'true';
  });

  // Modallar va menyular
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [adminTab, setAdminTab] = useState('projects'); // 'projects' | 'avatar' | 'messages'

  // Login form
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Yangi loyiha formasi
  const [newProject, setNewProject] = useState({
    title: '',
    url: '',
    description: '',
    tags: ''
  });

  // Avatar o'zgartirish formasi
  const [avatarUrlInput, setAvatarUrlInput] = useState('');

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
        if (typeof data.avatar === 'string') {
          setAvatar(data.avatar);
          if (data.avatar) {
            localStorage.setItem('nazirboyev_avatar', data.avatar);
          } else {
            localStorage.removeItem('nazirboyev_avatar');
          }
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

  useEffect(() => {
    localStorage.setItem('nazirboyev_is_admin', isAdmin ? 'true' : 'false');
  }, [isAdmin]);

  // Login qilish funksiyasi
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginUsername === 'nazirboyev' && loginPassword === 'zuxra') {
      setIsAdmin(true);
      setShowLoginModal(false);
      setShowAdminModal(true);
      setLoginError('');
      setLoginUsername('');
      setLoginPassword('');
    } else {
      setLoginError(lang === 'ru' ? "Неверный логин или пароль!" : (lang === 'en' ? "Invalid login or password!" : "Login yoki parol noto'g'ri!"));
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setShowAdminModal(false);
  };

  // Yangi loyiha qo'shish
  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProject.title.trim() || !newProject.url.trim()) {
      alert(lang === 'ru' ? "Введите название и ссылку!" : (lang === 'en' ? "Please enter project title and link!" : "Iltimos, loyiha nomi va havolasini kiriting!"));
      return;
    }

    const tagsArray = newProject.tags
      ? newProject.tags.split(',').map((t) => t.trim()).filter(Boolean)
      : ['Web'];

    const projectItem = {
      id: Date.now(),
      title: newProject.title.trim(),
      url: newProject.url.trim().startsWith('http') ? newProject.url.trim() : `https://${newProject.url.trim()}`,
      description: newProject.description.trim() || (lang === 'ru' ? "Веб-проект" : (lang === 'en' ? "Web project" : "Web loyiha.")),
      tags: tagsArray
    };

    const updated = [projectItem, ...projects];
    setProjects(updated);
    syncToServer(updated, avatar, messages);
    setNewProject({ title: '', url: '', description: '', tags: '' });
    alert(lang === 'ru' ? "Проект успешно добавлен и сохранен!" : (lang === 'en' ? "Project added and saved successfully!" : "Yangi loyiha muvaffaqiyatli qo'shildi va saqlandi!"));
  };

  // Loyihani o'chirish
  const handleDeleteProject = (id) => {
    const confirmMsg = lang === 'ru' ? "Удалить этот проект?" : (lang === 'en' ? "Delete this project?" : "Rostdan ham ushbu loyihani o'chirmoqchimisiz?");
    if (window.confirm(confirmMsg)) {
      const updated = projects.filter((p) => p.id !== id);
      setProjects(updated);
      syncToServer(updated, avatar, messages);
    }
  };

  // Rasm yuklash (File dan Base64 ga)
  const handleAvatarFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert(lang === 'ru' ? "Файл слишком большой (макс 2MB)!" : (lang === 'en' ? "File too large (max 2MB)!" : "Rasm hajmi juda katta (maksimal 2MB)!"));
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImg = reader.result;
        setAvatar(newImg);
        syncToServer(projects, newImg, messages);
        alert(lang === 'ru' ? "Фото профиля обновлено!" : (lang === 'en' ? "Profile photo updated!" : "Profil rasmi yangilandi!"));
      };
      reader.readAsDataURL(file);
    }
  };

  // Rasm URL kiritish
  const handleSetAvatarUrl = (e) => {
    e.preventDefault();
    if (avatarUrlInput.trim()) {
      const newImg = avatarUrlInput.trim();
      setAvatar(newImg);
      syncToServer(projects, newImg, messages);
      setAvatarUrlInput('');
      alert(lang === 'ru' ? "Фото профиля сохранено!" : (lang === 'en' ? "Profile photo saved!" : "Profil rasmi saqlandi!"));
    }
  };

  // Rasmni o'chirish
  const handleDeleteAvatar = () => {
    const confirmMsg = lang === 'ru' ? "Удалить фото профиля?" : (lang === 'en' ? "Delete profile photo?" : "Profil rasmini o'chirmoqchimisiz?");
    if (window.confirm(confirmMsg)) {
      setAvatar('');
      syncToServer(projects, '', messages);
    }
  };

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

  // Xabarni o'chirish
  const handleDeleteMessage = (id) => {
    const updated = messages.filter((m) => m.id !== id);
    setMessages(updated);
    syncToServer(projects, avatar, updated);
  };

  return (
    <div>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-container">
          <a href="#" className="nav-logo">
            <span className="logo-badge">NX</span>
            <span>Nazirboyev</span>
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
            {/* Til tanlagich (Language Switcher) */}
            <div className="lang-switcher" title="Tilni tanlash / Выбор языка / Select Language">
              <button
                className={`lang-btn ${lang === 'uz' ? 'active' : ''}`}
                onClick={() => setLang('uz')}
              >
                UZ
              </button>
              <button
                className={`lang-btn ${lang === 'ru' ? 'active' : ''}`}
                onClick={() => setLang('ru')}
              >
                RU
              </button>
              <button
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>

            {/* Tungi va Kunduzgi rejim tugmasi (Dark / Light Mode) */}
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={theme === 'dark' ? (lang === 'ru' ? 'Светлая тема' : (lang === 'en' ? 'Light mode' : 'Kunduzgi rejim')) : (lang === 'ru' ? 'Темная тема' : (lang === 'en' ? 'Dark mode' : 'Tungi rejim'))}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Desktop Admin tugmasi */}
            {isAdmin ? (
              <button
                className="admin-btn active"
                onClick={() => setShowAdminModal(true)}
                title={t.nav.adminPanel}
              >
                <Lock size={15} />
                <span>{t.nav.adminPanel}</span>
              </button>
            ) : (
              <button
                className="admin-btn"
                onClick={() => setShowLoginModal(true)}
                title={t.nav.admin}
              >
                <Lock size={15} />
                <span>{t.nav.admin}</span>
              </button>
            )}

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
                    <span>{t.hero.noAvatar}</span>
                    {isAdmin && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>
                        {t.hero.adminUploadHint}
                      </span>
                    )}
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
        <button
          onClick={() => (isAdmin ? setShowAdminModal(true) : setShowLoginModal(true))}
          className={`mobile-tab-btn ${isAdmin ? 'admin-active' : ''}`}
        >
          <Lock size={19} />
          <span>{t.nav.admin}</span>
        </button>
      </nav>

      {/* LOGIN MODAL */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                <Lock size={22} color="var(--accent)" />
                {t.admin.title}
              </h3>
              <button className="close-btn" onClick={() => setShowLoginModal(false)}>
                <X size={20} />
              </button>
            </div>

            {loginError && <div className="form-alert error" style={{ marginBottom: '1rem' }}>{loginError}</div>}

            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div className="form-group">
                <label className="form-label">{t.admin.login}</label>
                <input
                  type="text"
                  required
                  autoFocus
                  placeholder="••••••••"
                  className="form-input"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t.admin.password}</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="form-input"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem' }}>
                <span>{t.admin.loginBtn}</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ADMIN PANEL DASHBOARD MODAL */}
      {showAdminModal && (
        <div className="modal-overlay" onClick={() => setShowAdminModal(false)}>
          <div className="modal-content wide" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                <Sparkles size={22} color="var(--accent)" />
                {t.admin.dashboardTitle}
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <button
                  onClick={handleLogout}
                  className="btn-secondary"
                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', color: 'var(--danger)' }}
                >
                  <LogOut size={16} />
                  <span>{t.admin.logoutBtn}</span>
                </button>
                <button className="close-btn" onClick={() => setShowAdminModal(false)}>
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* TABLAR */}
            <div className="admin-tabs">
              <button
                className={`admin-tab-btn ${adminTab === 'projects' ? 'active' : ''}`}
                onClick={() => setAdminTab('projects')}
              >
                <Plus size={16} />
                <span>{t.admin.tabProjects}</span>
              </button>

              <button
                className={`admin-tab-btn ${adminTab === 'avatar' ? 'active' : ''}`}
                onClick={() => setAdminTab('avatar')}
              >
                <ImageIcon size={16} />
                <span>{t.admin.tabAvatar}</span>
              </button>

              <button
                className={`admin-tab-btn ${adminTab === 'messages' ? 'active' : ''}`}
                onClick={() => setAdminTab('messages')}
              >
                <MessageSquare size={16} />
                <span>{t.admin.tabMessages}</span>
                {messages.length > 0 && <span className="badge-count">{messages.length}</span>}
              </button>
            </div>

            {/* TAB 1: YANGI LOYIHA QO'SHISH */}
            {adminTab === 'projects' && (
              <div>
                <form onSubmit={handleAddProject} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">{t.admin.projName}</label>
                    <input
                      type="text"
                      required
                      placeholder="CRM System"
                      className="form-input"
                      value={newProject.title}
                      onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{t.admin.projUrl}</label>
                    <input
                      type="url"
                      required
                      placeholder="https://yangi-loyiha.vercel.app"
                      className="form-input"
                      value={newProject.url}
                      onChange={(e) => setNewProject({ ...newProject, url: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{t.admin.projDesc}</label>
                    <textarea
                      placeholder="Loyiha haqida..."
                      className="form-textarea"
                      style={{ minHeight: '80px' }}
                      value={newProject.description}
                      onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{t.admin.projTags}</label>
                    <input
                      type="text"
                      placeholder="React, Next.js, Node.js"
                      className="form-input"
                      value={newProject.tags}
                      onChange={(e) => setNewProject({ ...newProject, tags: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                    <Plus size={18} />
                    <span>{t.admin.addProjBtn}</span>
                  </button>
                </form>

                <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.2rem' }}>
                  <h4 style={{ marginBottom: '1rem', fontSize: '1rem' }}>{t.admin.existingProjs} ({projects.length})</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', maxHeight: '220px', overflowY: 'auto' }}>
                    {projects.map((p) => (
                      <div
                        key={p.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          background: 'var(--input-bg)',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          border: '1px solid var(--border-color)'
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 600 }}>{p.title}</div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{p.url}</div>
                        </div>
                        <button
                          onClick={() => handleDeleteProject(p.id)}
                          className="btn-delete-project"
                          title="O'chirish"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: PROFIL RASMINI BOSHQARISH */}
            {adminTab === 'avatar' && (
              <div>
                <div className="avatar-preview-box">
                  {avatar ? (
                    <img src={avatar} alt="Profil rasmi" className="preview-thumb" />
                  ) : (
                    <div className="preview-thumb" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-card)' }}>
                      <User size={36} color="var(--text-muted)" />
                    </div>
                  )}
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
                      {avatar ? "Rasm yuklangan" : "Rasm mavjud emas"}
                    </div>
                    {avatar && (
                      <button
                        onClick={handleDeleteAvatar}
                        className="btn-delete-project"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.8rem', marginTop: '0.4rem' }}
                      >
                        <Trash2 size={15} />
                        <span>{t.admin.deleteAvatarBtn}</span>
                      </button>
                    )}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ background: 'var(--input-bg)', padding: '1.25rem', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>{t.admin.uploadTitle}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                      {t.admin.uploadDesc}
                    </p>
                    <label className="btn-secondary" style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Upload size={18} />
                      <span>{t.admin.selectFile}</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarFileUpload}
                        style={{ display: 'none' }}
                      />
                    </label>
                  </div>

                  <form onSubmit={handleSetAvatarUrl} style={{ background: 'var(--input-bg)', padding: '1.25rem', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>{t.admin.urlTitle}</h4>
                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem' }}>
                      <input
                        type="url"
                        placeholder="https://example.com/avatar.jpg"
                        className="form-input"
                        value={avatarUrlInput}
                        onChange={(e) => setAvatarUrlInput(e.target.value)}
                      />
                      <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                        {t.admin.saveBtn}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* TAB 3: KELGAN XABARLAR */}
            {adminTab === 'messages' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '1rem' }}>{t.admin.messagesTitle}</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {messages.length} ta
                  </span>
                </div>

                {messages.length === 0 ? (
                  <div className="empty-state">
                    <MessageSquare size={44} style={{ opacity: 0.3, marginBottom: '0.5rem' }} />
                    <p>{t.admin.noMessages}</p>
                  </div>
                ) : (
                  <div className="messages-list" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    {messages.map((msg) => (
                      <div key={msg.id} className="message-item">
                        <div className="message-meta">
                          <div>
                            <span className="sender-name">{msg.name}</span>
                            <span style={{ margin: '0 0.5rem', color: 'var(--text-muted)' }}>&bull;</span>
                            <span className="sender-contact">{msg.contact}</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <span className="message-date">{msg.date}</span>
                            <button
                              onClick={() => handleDeleteMessage(msg.id)}
                              className="btn-delete-project"
                              title="O'chirish"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </div>
                        <div className="message-text">{msg.message}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
