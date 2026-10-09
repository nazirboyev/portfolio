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
  Menu
} from 'lucide-react';

// GitHub Icon
const GithubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

// Instagram icon
const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

// Telegram icon
const TelegramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z"/>
    <path d="M22 2 11 13"/>
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
  // Loyihalar holati (LocalStorage)
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

  // Modallar
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

  // Ma'lumotlarni server diskiga (data/portfolio-data.json) saqlash
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

  // Sahifa birinchi marta ochilganda server diskidan eng so'nggi ma'lumotlarni yuklab olish
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

  // LocalStorage ga avtomatik zaxira nusxa saqlash
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
      setLoginError("Login yoki parol noto'g'ri! Iltimos, qayta urinib ko'ring.");
    }
  };

  // Logout funksiyasi
  const handleLogout = () => {
    setIsAdmin(false);
    setShowAdminModal(false);
  };

  // Yangi loyiha qo'shish
  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProject.title.trim() || !newProject.url.trim()) {
      alert("Iltimos, loyiha nomi va havolasini kiriting!");
      return;
    }

    const tagsArray = newProject.tags
      ? newProject.tags.split(',').map((t) => t.trim()).filter(Boolean)
      : ['Web'];

    const projectItem = {
      id: Date.now(),
      title: newProject.title.trim(),
      url: newProject.url.trim().startsWith('http') ? newProject.url.trim() : `https://${newProject.url.trim()}`,
      description: newProject.description.trim() || "Web loyiha.",
      tags: tagsArray
    };

    const updated = [projectItem, ...projects];
    setProjects(updated);
    syncToServer(updated, avatar, messages);
    setNewProject({ title: '', url: '', description: '', tags: '' });
    alert("Yangi loyiha muvaffaqiyatli qo'shildi va server diskiga saqlandi!");
  };

  // Loyihani o'chirish
  const handleDeleteProject = (id) => {
    if (window.confirm("Rostdan ham ushbu loyihani o'chirmoqchimisiz?")) {
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
        alert("Rasm hajmi juda katta (maksimal 2MB)! Kichikroq rasm tanlang.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImg = reader.result;
        setAvatar(newImg);
        syncToServer(projects, newImg, messages);
        alert("Profil rasmi muvaffaqiyatli yangilandi va saqlandi!");
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
      alert("Profil rasmi muvaffaqiyatli saqlandi!");
    }
  };

  // Rasmni o'chirish
  const handleDeleteAvatar = () => {
    if (window.confirm("Profil rasmini o'chirmoqchimisiz?")) {
      setAvatar('');
      syncToServer(projects, '', messages);
    }
  };

  // Kontakt xabarini jo'natish
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!contactName.trim() || !contactInfo.trim() || !contactMessage.trim()) {
      setContactError("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    const newMsg = {
      id: Date.now(),
      name: contactName.trim(),
      contact: contactInfo.trim(),
      message: contactMessage.trim(),
      date: new Date().toLocaleString('uz-UZ')
    };

    const updated = [newMsg, ...messages];
    setMessages(updated);
    syncToServer(projects, avatar, updated);

    setContactSuccess("Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanaman.");
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

          <ul className="nav-links">
            <li><a href="#hero" className="nav-link">Men haqimda</a></li>
            <li><a href="#projects" className="nav-link">Loyihalar</a></li>
            <li><a href="#social" className="nav-link">Tarmoqlar</a></li>
            <li><a href="#contact" className="nav-link">Bog'lanish</a></li>
            <li>
              {isAdmin ? (
                <button
                  className="admin-btn active"
                  onClick={() => setShowAdminModal(true)}
                  title="Admin Panelni ochish"
                >
                  <Lock size={15} />
                  <span>Admin Panel</span>
                </button>
              ) : (
                <button
                  className="admin-btn"
                  onClick={() => setShowLoginModal(true)}
                  title="Admin sifatida kirish"
                >
                  <Lock size={15} />
                  <span>Admin</span>
                </button>
              )}
            </li>
          </ul>

          {/* Mobil ekranlar uchun boshqaruv tugmalari */}
          <div className="mobile-nav-actions">
            {isAdmin ? (
              <button
                className="admin-btn active mobile-admin-icon"
                onClick={() => setShowAdminModal(true)}
                title="Admin Panel"
              >
                <Lock size={15} />
              </button>
            ) : (
              <button
                className="admin-btn mobile-admin-icon"
                onClick={() => setShowLoginModal(true)}
                title="Admin"
              >
                <Lock size={15} />
              </button>
            )}

            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
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
              Men haqimda
            </a>
            <a
              href="#projects"
              className="mobile-nav-item"
              onClick={() => setMobileMenuOpen(false)}
            >
              Loyihalar
            </a>
            <a
              href="#social"
              className="mobile-nav-item"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tarmoqlar
            </a>
            <a
              href="#contact"
              className="mobile-nav-item"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bog'lanish
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
                Web Dasturchi &bull; Yangi loyihalarga tayyor
              </div>

              <h1 className="hero-title">
                Salom, men <br />
                <span>Nazirboyev Xudoyshukur</span>
              </h1>

              <div className="hero-subtitle">
                Web Dasturchi &bull; Fullstack Developer
              </div>

              <p className="hero-bio">
                Men zamonaviy, tezkor va foydalanuvchi uchun qulay web ilovalar, saytlar hamda interaktiv loyihalar yaratish bilan shug'ullanaman. Har bir loyihada toza kod va chiroyli dizaynga katta e'tibor qarataman.
              </p>

              {/* Shaxsiy ma'lumot kartalari */}
              <div className="info-cards">
                <div className="info-card">
                  <div className="info-card-label">To'liq ism (F.I.O)</div>
                  <div className="info-card-value">Nazirboyev Xudoyshukur Xurmatbek o'g'li</div>
                </div>
                <div className="info-card">
                  <div className="info-card-label">Yosh &amp; Tug'ilgan sana</div>
                  <div className="info-card-value">17 yosh (2009-yil 5-iyul)</div>
                </div>
                <div className="info-card">
                  <div className="info-card-label">Tug'ilgan joyi &amp; Yashash manzili</div>
                  <div className="info-card-value">Xorazm viloyati, Xiva shahri</div>
                </div>
                <div className="info-card">
                  <div className="info-card-label">Mutaxassislik</div>
                  <div className="info-card-value">Web Dasturchi (Frontend / Fullstack)</div>
                </div>
              </div>

              <div className="hero-actions">
                <a href="#projects" className="btn-primary">
                  Loyihalarimni ko'rish
                </a>
                <a href="#contact" className="btn-secondary">
                  Bog'lanish
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
                    <span>Profil rasmi kiritilmagan</span>
                    {isAdmin && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>
                        Admin panel orqali rasm yuklang
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOYIHALAR SECTION */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">Mening Loyihalarim</h2>
            <p className="section-desc">
              Men yaratgan va ishlab chiqqan eng so'nggi real web loyihalar ro'yxati.
            </p>
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
                          title="Loyihani o'chirish"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                        title="Saytga o'tish"
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
                    <span>Ko'rish</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IJTIMOIY TARMOQLAR SECTION */}
      <section id="social" className="social-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Tarmoqlar</span>
            <h2 className="section-title">Ijtimoiy Tarmoqlar</h2>
            <p className="section-desc">
              Mening rasmiy sahifalarim va kod omborlarim bilan tanishing.
            </p>
          </div>

          <div className="social-grid">
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
                <p>@nazirboyev_x</p>
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
                <p>@nazirboyev.x</p>
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
                <p>github.com/nazirboyev</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* BOG'LANISH SECTION */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Aloqa</span>
            <h2 className="section-title">Men bilan bog'lanish</h2>
            <p className="section-desc">
              Savolingiz, hamkorlik yoki yangi loyiha bormi? Menga bemalol yozishingiz mumkin.
            </p>
          </div>

          <div className="contact-layout">
            <div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Xabar yuborsangiz, u darhol mening admin panelimga yetib boradi. Shuningdek, to'g'ridan-to'g'ri Telegram orqali ham bog'lanishingiz mumkin.
              </p>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Manzil</div>
                    <div style={{ fontWeight: 600 }}>Xorazm viloyati, Xiva shahri</div>
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
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Kasbi</div>
                    <div style={{ fontWeight: 600 }}>Web Dasturchi (Fullstack)</div>
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
                <label className="form-label">Ismingiz</label>
                <input
                  type="text"
                  required
                  placeholder="Masalan: Sardor"
                  className="form-input"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Telefon yoki Telegram manzilingiz</label>
                <input
                  type="text"
                  required
                  placeholder="@foydalanuvchi yoki +998 90 123 45 67"
                  className="form-input"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Xabaringiz</label>
                <textarea
                  required
                  placeholder="Loyihangiz yoki taklifingiz haqida yozing..."
                  className="form-textarea"
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem' }}>
                <Send size={18} />
                <span>Xabarni yuborish</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Nazirboyev Xudoyshukur. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>

      {/* MOBIL PASTKI BOSHQARUV PANELI (MOBILE BOTTOM BAR) */}
      <nav className="mobile-bottom-nav">
        <a href="#hero" className="mobile-tab-btn">
          <User size={19} />
          <span>Profil</span>
        </a>
        <a href="#projects" className="mobile-tab-btn">
          <FolderGit2 size={19} />
          <span>Loyihalar</span>
        </a>
        <a href="#social" className="mobile-tab-btn">
          <Sparkles size={19} />
          <span>Tarmoqlar</span>
        </a>
        <a href="#contact" className="mobile-tab-btn">
          <Send size={19} />
          <span>Aloqa</span>
        </a>
        <button
          onClick={() => (isAdmin ? setShowAdminModal(true) : setShowLoginModal(true))}
          className={`mobile-tab-btn ${isAdmin ? 'admin-active' : ''}`}
        >
          <Lock size={19} />
          <span>Admin</span>
        </button>
      </nav>

      {/* LOGIN MODAL */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                <Lock size={22} color="var(--accent)" />
                Admin Panelga Kirish
              </h3>
              <button className="close-btn" onClick={() => setShowLoginModal(false)}>
                <X size={20} />
              </button>
            </div>

            {loginError && <div className="form-alert error" style={{ marginBottom: '1rem' }}>{loginError}</div>}

            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div className="form-group">
                <label className="form-label">Login</label>
                <input
                  type="text"
                  required
                  autoFocus
                  placeholder="Loginni kiriting"
                  className="form-input"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Parol</label>
                <input
                  type="password"
                  required
                  placeholder="Parolni kiriting"
                  className="form-input"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem' }}>
                <span>Tizimga kirish</span>
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
                Boshqaruv Paneli (Admin)
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <button
                  onClick={handleLogout}
                  className="btn-secondary"
                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', color: 'var(--danger)' }}
                >
                  <LogOut size={16} />
                  <span>Chiqish</span>
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
                <span>Yangi loyiha qo'shish</span>
              </button>

              <button
                className={`admin-tab-btn ${adminTab === 'avatar' ? 'active' : ''}`}
                onClick={() => setAdminTab('avatar')}
              >
                <ImageIcon size={16} />
                <span>Profil rasmini boshqarish</span>
              </button>

              <button
                className={`admin-tab-btn ${adminTab === 'messages' ? 'active' : ''}`}
                onClick={() => setAdminTab('messages')}
              >
                <MessageSquare size={16} />
                <span>Kelgan xabarlar</span>
                {messages.length > 0 && <span className="badge-count">{messages.length}</span>}
              </button>
            </div>

            {/* TAB 1: YANGI LOYIHA QO'SHISH */}
            {adminTab === 'projects' && (
              <div>
                <form onSubmit={handleAddProject} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Loyiha nomi *</label>
                    <input
                      type="text"
                      required
                      placeholder="Masalan: Yangi CRM Tizim"
                      className="form-input"
                      value={newProject.title}
                      onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Loyiha havolasi (URL manzili) *</label>
                    <input
                      type="url"
                      required
                      placeholder="https://yangi-sayt.vercel.app"
                      className="form-input"
                      value={newProject.url}
                      onChange={(e) => setNewProject({ ...newProject, url: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Tavsifi</label>
                    <textarea
                      placeholder="Loyiha nima haqida ekanligini qisqacha yozing..."
                      className="form-textarea"
                      style={{ minHeight: '80px' }}
                      value={newProject.description}
                      onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Texnologiyalar (vergul bilan ajrating)</label>
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
                    <span>Loyihani qo'shish</span>
                  </button>
                </form>

                <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.2rem' }}>
                  <h4 style={{ marginBottom: '1rem', fontSize: '1rem' }}>Mavjud loyihalar ({projects.length} ta)</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', maxHeight: '220px', overflowY: 'auto' }}>
                    {projects.map((p) => (
                      <div
                        key={p.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          background: '#0d121e',
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
                    <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Hozirgi profil rasmi</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                      {avatar ? "Rasm yuklangan va saytda ko'rinmoqda." : "Rasm hozircha mavjud emas."}
                    </div>
                    {avatar && (
                      <button
                        onClick={handleDeleteAvatar}
                        className="btn-delete-project"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.8rem' }}
                      >
                        <Trash2 size={15} />
                        <span>Rasmni butunlay o'chirish</span>
                      </button>
                    )}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {/* Variant 1: Kompyuterdan fayl yuklash */}
                  <div style={{ background: '#0d121e', padding: '1.25rem', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>1. Kompyuterdan yangi rasm yuklash</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                      JPG, PNG yoki WEBP formatidagi rasmni tanlang.
                    </p>
                    <label className="btn-secondary" style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Upload size={18} />
                      <span>Faylni tanlash</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarFileUpload}
                        style={{ display: 'none' }}
                      />
                    </label>
                  </div>

                  {/* Variant 2: Internetdan URL manzil kiritish */}
                  <form onSubmit={handleSetAvatarUrl} style={{ background: '#0d121e', padding: '1.25rem', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>2. Yoki Rasm havolasini (URL) kiritish</h4>
                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem' }}>
                      <input
                        type="url"
                        placeholder="https://example.com/rasmingiz.jpg"
                        className="form-input"
                        value={avatarUrlInput}
                        onChange={(e) => setAvatarUrlInput(e.target.value)}
                      />
                      <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                        Saqlash
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
                  <h4 style={{ fontSize: '1rem' }}>Foydalanuvchilar qoldirgan xabarlar</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Jami: {messages.length} ta
                  </span>
                </div>

                {messages.length === 0 ? (
                  <div className="empty-state">
                    <MessageSquare size={44} style={{ opacity: 0.3, marginBottom: '0.5rem' }} />
                    <p>Hozircha xabarlar yo'q.</p>
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
                              title="Xabarni o'chirish"
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
