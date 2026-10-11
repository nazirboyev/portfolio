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
  Code2
} from 'lucide-react';
import { translations } from './translations';

// SVG Icons (Pixel-perfect & zero export issues)
const GithubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TelegramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z"/>
    <path d="M22 2 11 13"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" fill="currentColor" />
  </svg>
);

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
                    <MapPin size={14} />
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
                    <Briefcase size={14} />
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
                    {skill.name === 'React Js' ? '⚛️' : (skill.name === 'GitHub' ? '🐙' : (skill.name === 'JavaScript' ? 'JS' : (skill.name === 'CSS' ? '🎨' : '🌐')))}
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
                  placeholder="nazirboyev"
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
                  placeholder="zuxra"
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
