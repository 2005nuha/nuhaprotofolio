document.addEventListener('DOMContentLoaded', () => {

  // ========== THEME TOGGLE ==========
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeToggle');
  const themeIcon = themeBtn.querySelector('i');

  root.setAttribute('data-theme', 'dark');
  themeIcon.className = 'fa-solid fa-moon';

  themeBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    if (current === 'dark') {
      root.setAttribute('data-theme', 'light'); 
      themeIcon.className = 'fa-solid fa-sun';
    } else {
      root.setAttribute('data-theme', 'dark');
      themeIcon.className = 'fa-solid fa-moon';
    }
  });

  // ========== MOBILE MENU ==========
  const menuBtn = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('show'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('show')));

  // ========== PORTFOLIO ==========
  const portfolioData = {
    get all() { return [...this.mobile, ...this.web, ...this.ui]; },
    mobile: [
      { 
        title: 'Movie App Design & Development', 
        description: 'A full-stack movie app featuring user authentication, personalized profiles, and a dynamic categorization and rating system.',
        tags: ['Mobile App', 'UI Design'], 
        color: '#59c2ff',
        link: 'https://github.com/2005nuha/MovieApp.git',      
        image: 'photos/movieApp.png'               
      },
      { 
        title: 'Restaurant login interface', 
        description: 'A modern restaurant login UI featuring seamless social media integration for quick access and an enhanced user onboarding experience.',
        tags: ['Mobile App', 'UI Design'], 
        color: '#7c5cff',
        link: 'https://github.com/2005nuha/Restaurant-app-login-interface.git',
        image: 'photos/rest.png'
      },
      { 
        title: 'WebRegistry Mobile', 
        description: 'A web-link management tool for saving and rating favorite websites with a seamless "direct-launch" navigation feature.',
        tags: ['Mobile App', 'UI Design'], 
        color: '#10b981',
        link: 'https://github.com/2005nuha/WebRegistry-Mobile.git',
        image: 'photos/reg.png'
      }
    ],
    web: [
      { 
        title: 'protofolio of programmer', 
        description: 'An end-to-end web project (Design & Development) showcasing professional identity through a sleek UI and robust front-end implementation.',
        tags: ['Web', 'Development'], 
        color: '#8b5cf6',
        link: 'https://nuhaalhadad.netlify.app/',
        image: 'photos/web1.png'
      },
      { 
        title: 'My prtofolio', 
        description: 'A comprehensive end-to-end portfolio project (Design & Development) featuring a bold visual identity and interactive UI, tailored to showcase expertise in mobile development and UX/UI.',
        tags: ['Web', 'Development'], 
        color: '#06b6d4',
        link: 'https://your-link.com/my-portfolio',
        image: 'photos/web2.png'
      }
    ],
    ui: [
      { 
        title: 'Coffee App UI/UX design', 
        description: 'A complete coffee shop app design project, featuring interactive interfaces for ordering, payment, and tracking with a sleek and seamless user experience.',
        tags: ['UI/UX', 'Research'], 
        color: '#22c55e',
        link: 'https://www.figma.com/design/mRQe0Qwlgl79dObB9AzmQK/chat-app?m=auto&t=jzrhppJBPNTGZ3b8-6',
        image: 'photos/coffeApp1.png'
      },
      { 
        title: 'Messaging App UI/UX', 
        description: 'An advanced messaging platform featuring real-time communication, contact management, and calls, crafted with a high-performance UI focused on speed and user security.',
        tags: ['UI/UX', 'Research'], 
        color: '#eab308',
        link: 'https://www.figma.com/design/mRQe0Qwlgl79dObB9AzmQK/chat-app?m=auto&t=jzrhppJBPNTGZ3b8-6',
        image: 'photos/chatApp.png'
      },
      { 
        title: 'E-commerce mobile interface', 
        description: 'A complete e-commerce design showcasing a bold visual identity and intuitive user flows tailored for modern digital shopping.',
        tags: ['UI/UX', 'Research'], 
        color: '#f43f5e',
        link: 'https://www.figma.com/design/6QgoZGNy1QD2fq4dPBOXOT/Queen-store?m=auto&t=jzrhppJBPNTGZ3b8-6',
        image: 'photos/storeApp.png'
      },
      { 
        title: 'Workflow Dashboard', 
        description: 'A professional dashboard UI design featuring smart task organization and data analytics, crafted with a visual hierarchy that ensures management efficiency and ease of use.',
        tags: ['UI/UX', 'Research'], 
        color: '#f43f5e',
        link: 'https://www.figma.com/design/FHxb4nFQEdC7ATQLvp0pKo/dashBoard1?m=auto&t=jzrhppJBPNTGZ3b8-6',
        image: 'photos/dashBoard.png'
      },
      { 
        title: 'Analyst Dashboards', 
        description: 'A dashboard UI design showcasing advanced data visualization skills and a user-centric layout, crafted to handle complex datasets with high clarity and visual hierarchy.',
        tags: ['UI/UX', 'Research'], 
        color: '#f43f5e',
        link: 'https://www.figma.com/design/QMKvU5bN8aaF0vEniTdPJ4/dash-Bored-2?m=auto&t=jyfb50sTuqYAIiiF-6',
        image: 'photos/dashBoard2.png'
      }
    ]
  };

  const grid = document.getElementById('portfolioGrid');
  const tabs = document.querySelectorAll('#portfolioTabs .tab');
  const icons = ['mobile-screen', 'chart-line', 'palette', 'bullhorn', 'rocket', 'gem'];

  function renderPortfolio(cat) {
    grid.innerHTML = portfolioData[cat].map((p, i) => {
      const thumbStyle = p.image && p.image.trim() !== ''
        ? `background-image: url('${p.image}'); background-size: cover; background-position: center;`
        : `background: linear-gradient(135deg, ${p.color}, ${p.color}99);`;

      const iconHtml = (p.image && p.image.trim() !== '') ? '' : `<i class="fa-solid fa-${icons[i % icons.length]}"></i>`;

      const cardContent = `
        <div class="port-card" ${p.link ? `data-link="${p.link}"` : ''}>
          <div class="port-thumb" style="${thumbStyle}">
            ${iconHtml}
          </div>
          <div class="port-meta">
            <div class="port-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}<span class="port-like">♡ 280</span></div>
            <h4>${p.title}</h4>
            ${p.description ? `<p style="font-size:0.9em; color:#999; margin-top:4px;">${p.description}</p>` : ''}
          </div>
        </div>
      `;
      return cardContent;
    }).join('');

    document.querySelectorAll('.port-card[data-link]').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        window.open(card.getAttribute('data-link'), '_blank');
      });
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderPortfolio(tab.dataset.cat);
    });
  });

  renderPortfolio('all');

  // ========== CONTACT FORM ==========
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const original = btn.textContent;
    btn.textContent = 'SENT ✓';
    btn.style.background = '#10b981';
    setTimeout(() => { e.target.reset(); btn.textContent = original; btn.style.background = ''; }, 2000);
  });

  // ========== SCROLL REVEAL ==========
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.section, .service-card, .port-card, .exp-item, .price-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity .8s ease, transform .8s ease';
    observer.observe(el);
  });

});

// ======= TYPING EFFECT =======
const typingElement = document.getElementById('typingText');
const words = ["Mobile developer","UX UI designer" ];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 120;  
const deletingSpeed = 50; 
const delayBetweenWords = 1500;

function type() {
  const currentWord = words[wordIndex];
  if (!isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenWords);
      return;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}
type();
