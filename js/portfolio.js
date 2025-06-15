// Skill bar animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const skillLevel = bar.getAttribute('data-skill');
        setTimeout(() => {
            bar.style.width = skillLevel + '%';
        }, 500);
    });
}

// Intersection Observer for animations
function createObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skills')) {
                    animateSkillBars();
                }
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Smooth scrolling for scroll indicator
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    document.querySelector('.skills').scrollIntoView({
        behavior: 'smooth'
    });
});

// Language translations
const translations = {
    ko: {
        subtitle: "Frontend Developer",
        skillsTitle: "기술 스택",
        projectsTitle: "프로젝트",
        careerGoalTitle: "나의 희망 직무",
        careerGoalSubtitle: "프론트엔드 개발자",
        careerGoalText: "사용자 경험을 최우선으로 생각하며, 창의적이고 직관적인 웹 인터페이스를 구현하는 것이 저의 목표입니다. 최신 기술 트렌드를 활용하여 사용자가 만족할 수 있는 서비스를 만들어나가겠습니다.",
        contactTitle: "연락처",
        emailLabel: "이메일",
        phoneLabel: "전화번호",
        AppTitle: "ChapChap Pay",
        AppDesc: "OCR기술과 NLP기술을 활용한 영수증 인식 어플입니다. 영수증 사진의 텍스트 데이터를 인식 후 자연어 처리 기술로 보다 정확한 데이터 추출을 가능하게 하여 개인사업자들의 세금 정산 업무에 도움을 줄 수 있도록 제작하였습니다.",
        GameTitle: "지렁이게임",
        GameDesc: "C언어로 연결리스트를 활용해 진행한 지렁이게임 프로젝트입니다. 방향키로 조작하여 @에 닿을 시 몸집과 스코어가 늘어나는 최고점수를 갱신하는 게임입니다.",
        AduinoTitle: "거짓말탐지기",
        AduinoDesc: "아두이노 심박수 센서를 이용해 거짓말탐지기를 만들었습니다. 받은 심박수가 마지막보다 높을 때 빨간색으로 빛나고, 마지막보다 낮을 때 초록색으로 빛나도록 제작해봤습니다.",
        DataTitle: "전기차 충전소 데이터분석",
        DataDesc: "(향후 예정) 현재 진행 중인 전기차와 전기차 전용 충전소를 지역 별로 데이터를 분석한 뒤 어디에 충전소가 있는지 조회하기 쉽도록 하는 프로젝트를 진행중입니다.",
        App2Title: "물품 위치 정보 시스템",
        App2Desc: "(향후 예정) 주변의 마트 정보를 받아 원하는 품목의 위치 정보와 해당 마트의 정보를 전달하는 등의 역할을 하는 어플이 제작 중에 있습니다."
      },
    en: {
        subtitle: "Frontend Developer",
        skillsTitle: "Technical Skills",
        projectsTitle: "Projects",
        careerGoalTitle: "My Career Goal",
        careerGoalSubtitle: "Frontend Developer",
        careerGoalText: "My goal is to implement creative and intuitive web interfaces with user experience as the top priority. I will create services that users can be satisfied with by utilizing the latest technology trends.",
        contactTitle: "Contact",
        emailLabel: "Email",
        phoneLabel: "Phone",
        AppTitle: "ChapChap Pay",
        AppDesc: "An OCR and NLP-based receipt recognition application. It recognizes text data from receipt photos and uses natural language processing technology to enable more accurate data extraction, helping small business owners with tax settlement tasks.",
        GameTitle: "Worm Game",
        GameDesc: "A worm game project using C language with linked lists. The game is controlled by arrow keys, and when the worm reaches '@', its size and score increase, aiming to achieve the highest score.",
        AduinoTitle: "Lie Detector",
        AduinoDesc: "A lie detector made using an Arduino heart rate sensor. The device lights up red when the received heart rate is higher than the last one, and green when it is lower, indicating a potential lie.",
        DataTitle: "Electric Vehicle Charging Station Data Analysis",
        DataDesc: "(Upcoming) Currently working on a project analyzing data on electric vehicles and their dedicated charging stations by region, making it easy to find where charging stations are located.",
        App2Title: "Item Location Information System",
        App2Desc: "(Upcoming) An application in development that provides location information for desired items and details about nearby stores, based on local market data."
      }
};

let currentLang = 'ko';

// Language toggle function
function toggleLanguage() {
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    const langBtn = document.getElementById('languageToggle');
    langBtn.querySelector('.lang-text').textContent = currentLang === 'ko' ? 'EN' : 'KO';
    
    updateLanguage();
}

function updateLanguage() {
    const t = translations[currentLang];
    
    // Update text content
    document.querySelector('.subtitle').textContent = t.subtitle;
    document.querySelector('#skills .section-title').textContent = t.skillsTitle;
    document.querySelector('#projects .section-title').textContent = t.projectsTitle;
    document.querySelector('#contact .section-title').textContent = t.contactTitle;
    document.querySelector('.career-text h2').textContent = t.careerGoalTitle;
    document.querySelector('.career-text h3').textContent = t.careerGoalSubtitle;
    document.querySelector('.career-text p').textContent = t.careerGoalText;
    
    // Update contact labels
    document.querySelectorAll('.contact-item h3')[0].textContent = t.emailLabel;
    document.querySelectorAll('.contact-item h3')[3].textContent = t.phoneLabel;
    
    // Update project titles and descriptions
    const projectTitles = document.querySelectorAll('.project-card h3');
    const modalTitles = document.querySelectorAll('.modal-content h2');
    const modalDescs = document.querySelectorAll('.modal-content p');
    
    projectTitles[0].textContent = t.AppTitle;
    modalTitles[0].textContent = t.AppTitle;
    modalDescs[0].textContent = t.AppDesc;
    
    projectTitles[1].textContent = t.GameTitle;
    modalTitles[1].textContent = t.GameTitle;
    modalDescs[1].textContent = t.GameDesc;
    
    projectTitles[2].textContent = t.AduinoTitle;
    modalTitles[2].textContent = t.AduinoTitle;
    modalDescs[2].textContent = t.AduinoDesc;
    
    projectTitles[3].textContent = t.DataTitle;
    modalTitles[3].textContent = t.DataTitle;
    modalDescs[3].textContent = t.DataDesc;

    projectTitles[4].textContent = t.App2Title;
    modalTitles[4].textContent = t.App2Title;
    modalDescs[4].textContent = t.App2Desc;
}

// Dark mode toggle function
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const darkModeBtn = document.getElementById('darkModeToggle');
    const icon = darkModeBtn.querySelector('i');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.className = 'fas fa-moon';
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Loading screen function
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createObserver();
    
    // Hero section is always visible
    document.querySelector('.hero').style.opacity = '1';
    document.querySelector('.hero').style.transform = 'translateY(0)';
    
    // Event listeners for control buttons
    document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
    document.getElementById('languageToggle').addEventListener('click', toggleLanguage);
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').querySelector('i').className = 'fas fa-sun';
    }
    
    // Hide loading screen
    hideLoadingScreen();
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
});