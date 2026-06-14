/* ==========================================
   MTA:: Architecture Website - Complete Scripts
   Chatbot + Lightbox + Inquiry + All Interactions
   ========================================== */

document.addEventListener('DOMContentLoaded', function () {

    // ===================================================
    // I18N TRANSLATION DICTIONARY & LOGIC
    // ===================================================
    window.currentLang = 'en';
    const i18n = {
        en: {
            "nav_home": "Home",
            "nav_about": "About Us",
            "nav_projects": "Projects",
            "nav_arch": "ARCHITECTURE DESIGN",
            "nav_interior": "INTERIOR DESIGN",
            "nav_landscape": "LANDSCAPE DESIGN",
            "nav_urban": "URBAN DESIGN",
            "nav_services": "Services",
            "nav_news": "News & Events",
            "nav_careers": "Careers",
            "nav_contacts": "Contacts",
            "hero_dist": "Distinctive",
            "hero_arch": "Architecture Design",
            "hero_port": "Our Portfolio",
            "hero_uniq": "unique & memorable",
            "hero_space": "spaces",
            "hero_high": "the highest standards of",
            "hero_excel": "excellence",
            "hero_contemp": "contemplative",
            "hero_interiors": "interiors",
            "hero_dream": "when your dream",
            "hero_true": "come true",
            "sec_vision": "Our <strong>Vision</strong>",
            "vis_p1": "We, at M.T Architects, believe that architecture of any type or scale should generate through public experience, whether they work or live in them, visit them, or even if they just encounter them in passing. So, for us every project is a new challenge that we approach from that vision in order to discover the most distinguished & optimum solutions. Our greatest satisfaction comes from designing buildings and spaces that are memorable, unique & leaves a true impact upon those who uses them.",
            "vis_p2": "Involving our clients in the design process allows us to explore and define their needs in order to form them in creative yet practical solutions. We pride ourselves on offering our clients certainty and confidence in combining aesthetic and operational requirements to create the harmonious complete results that they expect. And we always seek to achieve the highest standards of excellence in interior & exterior implementation.",
            "vis_proc": "Our process",
            "proc_1": "Idea & Start",
            "proc_2": "Design & Create",
            "proc_3": "Build & Finish",
            "btn_view_port": "View Our portfolio",
            "sec_facts": "Some Interesting <strong>Facts</strong>",
            "fact_sub": "More than 700 complete successful projects in Egypt & abroad .... and counting.",
            "fact_desc": "Our team takes over everything, from an idea and concept development to realization. We believe in traditions and incorporate them into our innovations. All our projects incorporate a unique artistic image and functional solutions. The client is the soul of the project. Our main goal is to illustrate his/her values and individuality through design.",
            "fact_1": "Residential projects",
            "fact_2": "Commercial Projects",
            "fact_3": "Various buildings",
            "sec_works": "Our featured <strong>Works</strong>",
            
            "btn_check": "Check",
            "btn_ask": "Ask",
            "img_watermark": "We will insert your images here",
            "btn_view_proj": "View Project",
            "btn_view_all": "View All Projects",
            "ft_call": "Call",
            "ft_write": "Write",
            "ft_visit": "Visit",
            "ft_addr": "167 Northern 90st, jasmine 7, New Cairo, Egypt",
            "ft_map": "View on map",
            "ft_top": "To Top",
            "mod_req": "Request a Consultation",
            "mod_sub": "Fill in your details and we'll get back to you within 24 hours",
            "mod_name": "Your Name *",
            "mod_email": "Your Email *",
            "mod_phone": "Phone Number",
            "mod_sel": "Select Service",
            "mod_gen": "General Consultation",
            "mod_msg": "Tell us about your project...",
            "mod_send": "Send Request",
            "mod_thx": "Thank You!",
            "mod_thx_sub": "Your consultation request has been received. Our team will contact you within 24 hours.",
            "dock_book": "Book Consultation",
            "dock_wa": "WhatsApp Chat",
            "dock_ai": "AI Assistant",
            "chat_title": "MTA Assistant",
            "chat_status": "Online",
            "chat_type": "Type your message..."
        },
        ar: {
            "nav_home": "الرئيسية",
            "nav_about": "من نحن",
            "nav_projects": "مشاريعنا",
            "nav_arch": "التصميم المعماري",
            "nav_interior": "التصميم الداخلي",
            "nav_landscape": "تنسيق الحدائق",
            "nav_urban": "التخطيط العمراني",
            "nav_services": "خدماتنا",
            "nav_news": "الأخبار والفعاليات",
            "nav_careers": "الوظائف",
            "nav_contacts": "اتصل بنا",
            "hero_dist": "تميز في",
            "hero_arch": "التصميم المعماري",
            "hero_port": "أعمالنا",
            "hero_uniq": "مساحات فريدة",
            "hero_space": "ولا تُنسى",
            "hero_high": "أعلى معايير",
            "hero_excel": "التميز",
            "hero_contemp": "تصميمات داخلية",
            "hero_interiors": "تأملية",
            "hero_dream": "عندما يصبح حلمك",
            "hero_true": "حقيقة",
            "sec_vision": "رؤيتنا",
            "vis_p1": "نحن في إم تي أركيتكتس نؤمن بأن الهندسة المعمارية يجب أن تولد من خلال التجربة العامة، سواء كانوا يعملون أو يعيشون فيها، أو يزورونها، أو حتى إذا صادفوها عابرين. لذلك، يمثل كل مشروع بالنسبة لنا تحديًا جديدًا نتعامل معه من تلك الرؤية من أجل اكتشاف الحلول الأكثر تميزًا والأمثل. أعظم درجات الرضا لدينا تأتي من تصميم المباني والمساحات التي لا تنسى وفريدة من نوعها وتترك أثرًا حقيقيًا على من يستخدمونها.",
            "vis_p2": "إن إشراك عملائنا في عملية التصميم يسمح لنا باستكشاف وتحديد احتياجاتهم لتشكيلها في حلول إبداعية وعملية. نحن نفخر بتزويد عملائنا باليقين والثقة في الجمع بين المتطلبات الجمالية والتشغيلية لتحقيق النتائج المتكاملة التي يتوقعونها. ونسعى دائمًا لتحقيق أعلى معايير التميز في التنفيذ الداخلي والخارجي.",
            "vis_proc": "عمليتنا",
            "proc_1": "الفكرة والبدء",
            "proc_2": "التصميم والإنشاء",
            "proc_3": "البناء والتشطيب",
            "btn_view_port": "شاهد أعمالنا",
            "sec_facts": "بعض الحقائق <strong>المثيرة للاهتمام</strong>",
            "fact_sub": "أكثر من 700 مشروع ناجح ومكتمل في مصر والخارج... والعدد في ازدياد.",
            "fact_desc": "يتولى فريقنا كل شيء، من تطوير الفكرة والمفهوم إلى التنفيذ. نحن نؤمن بالتقاليد وندمجها في ابتكاراتنا. تتضمن جميع مشاريعنا صورة فنية فريدة وحلول وظيفية. العميل هو روح المشروع، وهدفنا الرئيسي هو توضيح قيمه وفرديته من خلال التصميم.",
            "fact_1": "مشاريع سكنية",
            "fact_2": "مشاريع تجارية",
            "fact_3": "مباني متنوعة",
            "sec_works": "أعمالنا <strong>المميزة</strong>",
            
            "btn_check": "عرض",
            "btn_ask": "اسأل",
            "img_watermark": "سيتم إدراج صورك هنا",
            "btn_view_proj": "عرض المشروع",
            "btn_view_all": "عرض كافة المشاريع",
            "ft_call": "اتصل",
            "ft_write": "راسلنا",
            "ft_visit": "تفضل بزيارتنا",
            "ft_addr": "١٦٧ شارع التسعين الشمالي، الياسمين ٧، القاهرة الجديدة، مصر",
            "ft_map": "عرض على الخريطة",
            "ft_top": "إلى الأعلى",
            "mod_req": "طلب استشارة",
            "mod_sub": "املأ بياناتك وسنعود إليك خلال 24 ساعة",
            "mod_name": "اسمك *",
            "mod_email": "بريدك الإلكتروني *",
            "mod_phone": "رقم الهاتف",
            "mod_sel": "اختر الخدمة",
            "mod_gen": "استشارة عامة",
            "mod_msg": "أخبرنا عن مشروعك...",
            "mod_send": "إرسال الطلب",
            "mod_thx": "شكراً لك!",
            "mod_thx_sub": "تم استلام طلب الاستشارة الخاص بك. سيتواصل معك فريقنا خلال 24 ساعة.",
            "dock_book": "احجز استشارة",
            "dock_wa": "واتساب",
            "dock_ai": "المساعد الذكي",
            "chat_title": "مساعد MTA",
            "chat_status": "متصل",
            "chat_type": "اكتب رسالتك..."
        }
    };

    function updateLanguage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[currentLang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = i18n[currentLang][key];
                } else {
                    el.innerHTML = i18n[currentLang][key];
                }
            }
        });
        
        const langToggleText = document.getElementById('langToggleText');
        if (currentLang === 'ar') {
            document.body.classList.add('rtl-mode');
            document.body.dir = 'rtl';
            if (langToggleText) langToggleText.textContent = 'EN';
        } else {
            document.body.classList.remove('rtl-mode');
            document.body.dir = 'ltr';
            if (langToggleText) langToggleText.textContent = 'AR';
        }
    }

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            window.currentLang = window.currentLang === 'en' ? 'ar' : 'en';
            updateLanguage();
        });
    }


    // ===================================================
    // LOADER
    // ===================================================
    const loader = document.getElementById('monolit-loader');
    window.addEventListener('load', () => setTimeout(() => loader.classList.add('hidden'), 800));
    setTimeout(() => loader.classList.add('hidden'), 3000);

    // ===================================================
    // HEADER SCROLL
    // ===================================================
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 100);
    });

    // ===================================================
    // MOBILE NAV
    // ===================================================
    const navToggle = document.getElementById('nav-toggle');
    const navHolder = document.getElementById('nav-holder');

    navToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        navHolder.classList.toggle('open');
        document.body.style.overflow = navHolder.classList.contains('open') ? 'hidden' : '';
    });

    document.querySelectorAll('.monolit_main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navHolder.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // ===================================================
    // HERO SLIDER
    // ===================================================
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    let currentSlide = 0;
    let slideInterval;

    function goToSlide(index) {
        slides.forEach(s => {
            s.classList.remove('active');
            const h3 = s.querySelector('h3'), h2 = s.querySelector('h2'), lnk = s.querySelector('.hero-link');
            [h3, h2, lnk].forEach(el => { if (el) { el.style.animation = 'none'; el.offsetHeight; el.style.animation = ''; } });
        });
        dots.forEach(d => d.classList.remove('active'));
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlideFn() { goToSlide((currentSlide + 1) % slides.length); }
    function prevSlideFn() { goToSlide((currentSlide - 1 + slides.length) % slides.length); }
    function startAuto() { slideInterval = setInterval(nextSlideFn, 8000); }
    function stopAuto() { clearInterval(slideInterval); }

    nextBtn.addEventListener('click', () => { stopAuto(); nextSlideFn(); startAuto(); });
    prevBtn.addEventListener('click', () => { stopAuto(); prevSlideFn(); startAuto(); });
    dots.forEach(d => d.addEventListener('click', function () { stopAuto(); goToSlide(+this.dataset.index); startAuto(); }));

    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') { stopAuto(); nextSlideFn(); startAuto(); }
        if (e.key === 'ArrowLeft') { stopAuto(); prevSlideFn(); startAuto(); }
    });

    // Touch swipe
    let touchX = 0;
    const heroEl = document.querySelector('.hero-wrap');
    if (heroEl) {
        heroEl.addEventListener('touchstart', e => { touchX = e.changedTouches[0].screenX; }, { passive: true });
        heroEl.addEventListener('touchend', e => {
            const diff = touchX - e.changedTouches[0].screenX;
            if (Math.abs(diff) > 50) { stopAuto(); diff > 0 ? nextSlideFn() : prevSlideFn(); startAuto(); }
        }, { passive: true });
    }

    startAuto();

    // ===================================================
    // COUNTER ANIMATION
    // ===================================================
    let countersAnimated = false;

    function animateCounters() {
        if (countersAnimated) return;
        document.querySelectorAll('.num').forEach(el => {
            const target = +el.dataset.target, step = target / 125;
            let current = 0;
            const update = () => {
                current += step;
                if (current < target) { el.textContent = Math.floor(current); requestAnimationFrame(update); }
                else el.textContent = target;
            };
            update();
        });
        countersAnimated = true;
    }

    // ===================================================
    // SCROLL ANIMATIONS
    // ===================================================
    function isVisible(el, offset = 0.82) {
        return el.getBoundingClientRect().top < window.innerHeight * offset;
    }

    document.querySelectorAll('.section-title, .no-rep, .process-box, .parallax-item, .single-slider-holder, .inline-facts, .footer-item, p').forEach(el => {
        if (!el.closest('.chatbot-widget') && !el.closest('.inquiry-modal') && !el.closest('.lightbox-overlay')) {
            el.classList.add('fade-in-up');
        }
    });

    function onScroll() {
        document.querySelectorAll('.fade-in-up').forEach(el => { if (isVisible(el)) el.classList.add('visible'); });

        const facts = document.getElementById('sec2');
        if (facts && isVisible(facts)) animateCounters();

        document.querySelectorAll('.sect-subtitle').forEach(el => {
            const r = el.parentElement.getBoundingClientRect();
            el.style.transform = `translateY(${r.top * 0.15}px)`;
        });
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) { requestAnimationFrame(() => { onScroll(); ticking = false; }); ticking = true; }
    });
    onScroll();

    // ===================================================
    // SCROLL TO TOP
    // ===================================================
    document.getElementById('toTop')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Smooth anchor scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
        });
    });

    // ===================================================
    // FOOTER CANVAS PARTICLES
    // ===================================================
    const canvas = document.getElementById('footerCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [], mouseX = 0, mouseY = 0;

        function resizeC() { canvas.width = canvas.parentElement.offsetWidth; canvas.height = canvas.parentElement.offsetHeight; }
        resizeC();
        window.addEventListener('resize', resizeC);

        class P {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height;
                this.s = Math.random() * 2 + 0.5; this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5; this.o = Math.random() * 0.5 + 0.1;
            }
            update() {
                this.x += this.vx; this.y += this.vy;
                const dx = mouseX - this.x, dy = mouseY - this.y, dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) { this.x -= dx * 0.02; this.y -= dy * 0.02; }
                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
            }
            draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2); ctx.fillStyle = `rgba(193,155,118,${this.o})`; ctx.fill(); }
        }

        for (let i = 0; i < 50; i++) particles.push(new P());

        canvas.parentElement.addEventListener('mousemove', e => {
            const r = canvas.getBoundingClientRect(); mouseX = e.clientX - r.left; mouseY = e.clientY - r.top;
        });

        (function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            for (let i = 0; i < particles.length; i++)
                for (let j = i + 1; j < particles.length; j++) {
                    const d = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
                    if (d < 120) {
                        ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(193,155,118,${0.1 * (1 - d / 120)})`; ctx.lineWidth = 0.5; ctx.stroke();
                    }
                }
            requestAnimationFrame(animate);
        })();
    }

    // ===================================================
    // LIGHTBOX
    // ===================================================
    const lbOverlay = document.getElementById('lightboxOverlay');
    const lbImage = document.getElementById('lightboxImage');
    const lbTitle = document.getElementById('lightboxTitle');
    const lbCategory = document.getElementById('lightboxCategory');

    document.querySelectorAll('[data-lightbox="true"]').forEach(img => {
        img.addEventListener('click', () => {
            lbImage.src = img.src;
            lbTitle.textContent = img.dataset.title || '';
            lbCategory.textContent = img.dataset.category || '';
            lbOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
    lbOverlay?.addEventListener('click', e => { if (e.target === lbOverlay) closeLightbox(); });

    function closeLightbox() {
        lbOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ===================================================
    // INQUIRY MODAL
    // ===================================================
    const inqOverlay = document.getElementById('inquiryOverlay');

    document.getElementById('openInquiry')?.addEventListener('click', () => {
        inqOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    document.getElementById('inquiryClose')?.addEventListener('click', closeInquiry);
    inqOverlay?.addEventListener('click', e => { if (e.target === inqOverlay) closeInquiry(); });

    function closeInquiry() {
        inqOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.getElementById('inquiryForm')?.addEventListener('submit', function (e) {
        e.preventDefault();
        this.style.display = 'none';
        document.querySelector('.inquiry-header').style.display = 'none';
        document.getElementById('inquirySuccess').style.display = 'block';
        setTimeout(() => {
            closeInquiry();
            this.style.display = '';
            document.querySelector('.inquiry-header').style.display = '';
            document.getElementById('inquirySuccess').style.display = 'none';
            this.reset();
        }, 3000);
    });

    // ===================================================
    // CHATBOT
    // ===================================================
    const chatToggle = document.getElementById('chatbotToggle');
    const chatWindow = document.getElementById('chatbotWindow');
    const chatBody = document.getElementById('chatbotBody');
    const chatInput = document.getElementById('chatbotInput');
    const chatSend = document.getElementById('chatbotSend');
    const chatBadge = document.getElementById('chatBadge');
    const quickRepliesEl = document.getElementById('quickReplies');
    const toggleIcon = document.querySelector('.chatbot-toggle-icon');
    const toggleClose = document.querySelector('.chatbot-toggle-close');
    const chatMinimize = document.getElementById('chatbotMinimize');

    let chatOpen = false;

    
    // ---- KNOWLEDGE BASE ----
    const knowledgeBase = {
        greetings: {
            en: ["Hello! Welcome to M.T Architects. I'm your virtual assistant. How can I help you today?", "Hi there! I'm the MTA Assistant. Feel free to ask me anything about our architecture and design services!"],
            ar: ["مرحباً! أهلاً بك في إم تي أركيتكتس. أنا مساعدك الافتراضي، كيف يمكنني مساعدتك اليوم؟", "أهلاً بك! أنا مساعد MTA. لا تتردد في سؤالي عن أي شيء يخص خدماتنا في التصميم المعماري!"]
        },
        responses: {
            "about|who are you|company|mta|m.t architects|tell me about": {
                en: {
                    answer: "**M.T Architects (MTA)** is a leading architecture and design firm based in **New Cairo, Egypt**, with international presence in **Saudi Arabia**.\n\nFounded by **Architect Mohamed Talaat**, we've successfully completed over **700 projects** across Egypt and abroad.",
                    quickReplies: ["Our Services", "View Projects", "Contact Info"]
                },
                ar: {
                    answer: "**إم تي أركيتكتس (MTA)** هي شركة رائدة في مجال التصميم المعماري مقرها في **القاهرة الجديدة، مصر**، ولها حضور دولي في **السعودية**.\n\nتأسست على يد **المهندس محمد طلعت**، وقد أكملنا بنجاح أكثر من **700 مشروع** في مصر والخارج.",
                    quickReplies: ["خدماتنا", "عرض المشاريع", "معلومات الاتصال"]
                }
            },
            "services|what do you offer|what you do|service|offerings": {
                en: {
                    answer: "We offer comprehensive design services across **four main disciplines**:\n\n🏗️ **Architecture Design**\n🏠 **Interior Design**\n🌳 **Landscape Design**\n🏙️ **Urban Design**",
                    quickReplies: ["Architecture Design", "Interior Design", "Request Consultation"]
                },
                ar: {
                    answer: "نحن نقدم خدمات تصميم شاملة عبر **أربعة تخصصات رئيسية**:\n\n🏗️ **التصميم المعماري**\n🏠 **التصميم الداخلي**\n🌳 **تنسيق الحدائق**\n🏙️ **التخطيط العمراني**",
                    quickReplies: ["التصميم المعماري", "التصميم الداخلي", "طلب استشارة"]
                }
            },
            "caffe vergnano|cafe|coffee": {
                en: {
                    answer: "**Caffè Vergnano** is one of our signature projects combining **Architecture & Interior Design**.\n\nThis Italian café project showcases our ability to create warm, inviting commercial interiors that blend contemporary design with the authentic character of an Italian coffee culture.",
                    quickReplies: ["AER Mall", "Interior Design"]
                },
                ar: {
                    answer: "**كافيه فيرنيانو** هو أحد مشاريعنا المميزة التي تجمع بين **التصميم المعماري والداخلي**.\n\nيُظهر هذا المقهى الإيطالي قدرتنا على خلق تصميمات داخلية تجارية دافئة وجذابة تمزج بين التصميم المعاصر والطابع الأصيل لثقافة القهوة الإيطالية.",
                    quickReplies: ["مول AER", "التصميم الداخلي"]
                }
            },
            "aer mall|mall|shopping": {
                en: {
                    answer: "**AER Mall** is a striking **Architecture Design** project showcasing our commercial expertise.\n\nKey features include contemporary glass and steel facades, energy-efficient building systems, and impressive evening lighting design.",
                    quickReplies: ["Hayat Plaza", "Architecture Design"]
                },
                ar: {
                    answer: "**مول AER** هو مشروع **تصميم معماري** مذهل يعرض خبراتنا التجارية.\n\nتشمل الميزات الرئيسية واجهات زجاجية وفولاذية معاصرة، وأنظمة بناء موفرة للطاقة، وتصميم إضاءة مسائية مبهر.",
                    quickReplies: ["حياة بلازا", "التصميم المعماري"]
                }
            },
            "hayat plaza|plaza": {
                en: {
                    answer: "**Hayat Plaza** combines **Architecture & Landscape Design** in a mixed-use development.\n\nThis project showcases our ability to create developments where modern architecture and green landscape work in harmony.",
                    quickReplies: ["Waterfall Compound", "Landscape Design"]
                },
                ar: {
                    answer: "**حياة بلازا** يجمع بين **التصميم المعماري وتنسيق الحدائق** في تطوير متعدد الاستخدامات.\n\nيُظهر هذا المشروع قدرتنا على خلق تطورات تتناغم فيها العمارة الحديثة والمناظر الطبيعية الخضراء.",
                    quickReplies: ["كمبوند الشلالات", "تنسيق الحدائق"]
                }
            },
            "waterfall compound|waterfall|compound": {
                en: {
                    answer: "**Waterfall Compound Project** is our most comprehensive project, spanning all **four design disciplines** (Architecture, Interior, Landscape, Urban Design).\n\nThis luxury residential compound features master-planned gated community, multiple villa types, and comprehensive green spaces.",
                    quickReplies: ["Opal Project", "Request Consultation"]
                },
                ar: {
                    answer: "**مشروع كمبوند الشلالات** هو مشروعنا الأكثر شمولاً، حيث يمتد عبر **تخصصات التصميم الأربعة** (المعماري، الداخلي، الحدائق، العمراني).\n\nيتميز هذا المجمع السكني الفاخر بمجتمع مسور مخطط بشكل متكامل، وأنواع متعددة من الفيلات، ومساحات خضراء شاملة.",
                    quickReplies: ["مشروع أوبال", "طلب استشارة"]
                }
            },
            "opal|opal project": {
                en: {
                    answer: "**Opal Project** showcases our **Architecture & Landscape Design** expertise in residential development.\n\nIt features contemporary apartment buildings, extensive green park areas, and sustainable urban planning.",
                    quickReplies: ["Box Park", "Architecture Design"]
                },
                ar: {
                    answer: "**مشروع أوبال** يعرض خبراتنا في **التصميم المعماري وتنسيق الحدائق** في التطوير السكني.\n\nيتميز بمباني سكنية معاصرة، ومناطق حدائق خضراء واسعة، وتخطيط حضري مستدام.",
                    quickReplies: ["بوكس بارك", "التصميم المعماري"]
                }
            },
            "box park|boxpark": {
                en: {
                    answer: "**Box Park** is a creative **Architecture & Landscape Design** project.\n\nThis innovative commercial development features creative container-based architecture, colorful dynamic lighting, and integrated public spaces.",
                    quickReplies: ["Our Services", "Contact Us"]
                },
                ar: {
                    answer: "**بوكس بارك** هو مشروع إبداعي يجمع بين **التصميم المعماري وتنسيق الحدائق**.\n\nيتميز هذا التطور التجاري المبتكر بهندسة معمارية إبداعية تعتمد على الحاويات، وإضاءة ديناميكية ملونة، ومساحات عامة متكاملة.",
                    quickReplies: ["خدماتنا", "اتصل بنا"]
                }
            },
            "__default__": {
                en: {
                    answer: "Thank you for your message! I can help you with:\n• 🏗️ Our **services**\n• 📁 Our **portfolio**\n• 📞 **Contact info**\n• 📋 Our **design process**\n\nFeel free to ask about any of these topics!",
                    quickReplies: ["Our Services", "View Projects", "Contact Info"]
                },
                ar: {
                    answer: "شكراً لرسالتك! يمكنني مساعدتك في:\n• 🏗️ **خدماتنا**\n• 📁 **أعمالنا**\n• 📞 **معلومات الاتصال**\n• 📋 **عملية التصميم لدينا**\n\nلا تتردد في السؤال عن أي من هذه المواضيع!",
                    quickReplies: ["خدماتنا", "عرض المشاريع", "معلومات الاتصال"]
                }
            }
        }
    };

    // ---- CHATBOT FUNCTIONS ----
    window.askAbout = function(projectName) {
        if(!chatOpen) {
            chatToggle.click();
        }
        setTimeout(() => {
            handleUserMessage(projectName);
        }, 800);
    };

    function getTimeString() {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    // Translation function
    window.translateChat = function(btn, engText, arText) {
        const bubble = btn.closest('.chat-bubble').querySelector('.chat-text-content');
        const isCurrentlyArabic = btn.dataset.lang === 'ar';
        if (isCurrentlyArabic) {
            bubble.innerHTML = parseMarkdown(engText);
            btn.textContent = window.currentLang === 'ar' ? 'Translate to Arabic' : 'Translate to Arabic';
            btn.dataset.lang = 'en';
            btn.style.display = 'none'; // Only allow translate to Arabic for now as per requirements
        } else {
            bubble.innerHTML = parseMarkdown(arText);
            btn.textContent = window.currentLang === 'ar' ? 'Translate to English' : 'Translate to English';
            btn.dataset.lang = 'ar';
        }
    }

    function parseMarkdown(text) {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/> (.*?)$/gm, '<blockquote style="border-left:2px solid #c19b76;padding-left:10px;margin:6px 0;color:rgba(255,255,255,0.6);font-style:italic;">$1</blockquote>')
            .replace(/\n/g, '<br>');
    }

    function addMessage(text, sender, isBotResponse = false, rawEn = '', rawAr = '') {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-message ${sender}`;

        const avatar = document.createElement('div');
        avatar.className = 'chat-avatar';
        avatar.innerHTML = sender === 'bot' ? '<i class="fa fa-building"></i>' : '<i class="fa fa-user"></i>';

        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble';

        const textContent = document.createElement('div');
        textContent.className = 'chat-text-content';
        bubble.appendChild(textContent);

        const time = document.createElement('span');
        time.className = 'chat-time';
        time.textContent = getTimeString();
        bubble.appendChild(time);

        msgDiv.appendChild(avatar);
        msgDiv.appendChild(bubble);
        chatBody.appendChild(msgDiv);

        if (sender === 'bot') {
            // Typing effect
            let i = 0;
            const parsedHTML = parseMarkdown(text);
            // Quick typing for HTML (not perfect char-by-char for tags, but simulates flow by dumping)
            // For a true typing effect, we'll just set it all at once with a fade, or simulate it.
            // Let's do a simple interval based typing effect for plain text, or just inject HTML in chunks.
            // To prevent breaking HTML tags, we'll use a fast timeout and set innerHTML directly after typing finishes.
            // But the user requested a standard typing effect.
            
            // Simplified Typing Effect
            textContent.innerHTML = '';
            let currentText = '';
            let charIndex = 0;
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = parsedHTML;
            let fullText = tempDiv.textContent; // Plain text length
            
            // To make it look like typing without breaking HTML, we can gradually reveal opacity, or just use innerHTML with a fast delay.
            // Let's use a character slicing approach over the raw text if no HTML, but we have HTML.
            // Best approach: Just reveal it character by character over the innerHTML string very fast, but ensuring tags don't break.
            // Easier: just type it out, but if it encounters '<', skip to '>'.
            
            const typeWriter = setInterval(() => {
                if (charIndex < parsedHTML.length) {
                    if (parsedHTML[charIndex] === '<') {
                        let tagEnd = parsedHTML.indexOf('>', charIndex);
                        if (tagEnd !== -1) {
                            currentText += parsedHTML.substring(charIndex, tagEnd + 1);
                            charIndex = tagEnd + 1;
                        }
                    } else {
                        currentText += parsedHTML[charIndex];
                        charIndex++;
                    }
                    textContent.innerHTML = currentText;
                    chatBody.scrollTop = chatBody.scrollHeight;
                } else {
                    clearInterval(typeWriter);
                    // Add translate button after typing finishes
                    if (isBotResponse && window.currentLang === 'en' && rawAr) {
                        const tBtn = document.createElement('button');
                        tBtn.className = 'chat-translate-btn';
                        tBtn.textContent = 'Translate to Arabic';
                        tBtn.dataset.lang = 'en';
                        tBtn.onclick = function() { window.translateChat(this, rawEn, rawAr); };
                        bubble.appendChild(tBtn);
                    }
                }
            }, 10); // 10ms per char
            
        } else {
            textContent.innerHTML = parseMarkdown(text);
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    }

    function showTyping() {
        const typing = document.createElement('div');
        typing.className = 'chat-message bot';
        typing.id = 'typingIndicator';

        const avatar = document.createElement('div');
        avatar.className = 'chat-avatar';
        avatar.innerHTML = '<i class="fa fa-building"></i>';

        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble';
        bubble.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';

        typing.appendChild(avatar);
        typing.appendChild(bubble);
        chatBody.appendChild(typing);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function removeTyping() {
        const t = document.getElementById('typingIndicator');
        if (t) t.remove();
    }

    function setQuickReplies(replies) {
        quickRepliesEl.innerHTML = '';
        if (!replies || replies.length === 0) return;

        replies.forEach(text => {
            const btn = document.createElement('button');
            btn.className = 'quick-reply-btn';
            btn.textContent = text;
            btn.addEventListener('click', () => {
                handleUserMessage(text);
            });
            quickRepliesEl.appendChild(btn);
        });
    }

    function findResponse(input) {
        const lower = input.toLowerCase().trim();

        const greetWords = ['hello', 'hi', 'hey', 'hola', 'مرحبا', 'اهلا', 'السلام', 'مرحباً'];
        if (greetWords.some(w => lower.includes(w))) {
            const greets = knowledgeBase.greetings[window.currentLang];
            const greet = greets[Math.floor(Math.random() * greets.length)];
            const qr = window.currentLang === 'en' ? ["Our Services", "View Projects", "Contact Info"] : ["خدماتنا", "عرض المشاريع", "معلومات الاتصال"];
            // We need to return raw EN and AR so translate works if needed
            return { answer: greet, quickReplies: qr, rawEn: knowledgeBase.greetings.en[0], rawAr: knowledgeBase.greetings.ar[0] };
        }

        let bestMatch = null;
        let bestScore = 0;

        for (const [keys, data] of Object.entries(knowledgeBase.responses)) {
            if (keys === '__default__') continue;
            const keyArr = keys.split('|');
            let score = 0;

            for (const key of keyArr) {
                if (lower.includes(key.toLowerCase())) {
                    score += key.length;
                }
            }

            if (score > bestScore) {
                bestScore = score;
                bestMatch = data;
            }
        }

        const match = bestMatch || knowledgeBase.responses['__default__'];
        return {
            answer: match[window.currentLang].answer,
            quickReplies: match[window.currentLang].quickReplies,
            rawEn: match.en.answer,
            rawAr: match.ar.answer
        };
    }

    function handleUserMessage(text) {
        addMessage(text, 'user');
        quickRepliesEl.innerHTML = '';

        showTyping();

        const delay = 600 + Math.random() * 800;
        setTimeout(() => {
            removeTyping();
            const response = findResponse(text);
            addMessage(response.answer, 'bot', true, response.rawEn, response.rawAr);
            // Delay quick replies until typing is somewhat done
            setTimeout(() => {
                setQuickReplies(response.quickReplies);
            }, response.answer.length * 10 + 200);
        }, delay);
    }
// ---- CHATBOT EVENT HANDLERS ----
    chatToggle.addEventListener('click', () => {
        chatOpen = !chatOpen;
        chatWindow.classList.toggle('open', chatOpen);
        toggleIcon.style.display = chatOpen ? 'none' : '';
        toggleClose.style.display = chatOpen ? '' : 'none';
        chatBadge.style.display = 'none';

        if (chatOpen && chatBody.children.length === 0) {
            setTimeout(() => {
                
                const qr = window.currentLang === 'en' ? ["Our Services", "View Projects", "About MTA", "Contact Info"] : ["خدماتنا", "عرض المشاريع", "من نحن", "معلومات الاتصال"];
                const greetText = window.currentLang === 'en' ? "Welcome to **M.T Architects**! 🏗️\n\nI'm your virtual assistant. I can help you explore our services, portfolio, and get in touch with our team.\n\nWhat would you like to know?" : "مرحباً بك في **إم تي أركيتكتس**! 🏗️\n\nأنا مساعدك الافتراضي. يمكنني مساعدتك في استكشاف خدماتنا وأعمالنا والتواصل مع فريقنا.\n\nماذا تود أن تعرف؟";
                const greetEn = "Welcome to **M.T Architects**! 🏗️\n\nI'm your virtual assistant. I can help you explore our services, portfolio, and get in touch with our team.\n\nWhat would you like to know?";
                const greetAr = "مرحباً بك في **إم تي أركيتكتس**! 🏗️\n\nأنا مساعدك الافتراضي. يمكنني مساعدتك في استكشاف خدماتنا وأعمالنا والتواصل مع فريقنا.\n\nماذا تود أن تعرف؟";
                
                showTyping();
                setTimeout(() => {
                    removeTyping();
                    addMessage(greetText, 'bot', true, greetEn, greetAr);
                    setTimeout(() => setQuickReplies(qr), greetText.length * 10 + 200);
                }, 800);
}, 400);
        }
    });

    chatMinimize.addEventListener('click', () => {
        chatOpen = false;
        chatWindow.classList.remove('open');
        toggleIcon.style.display = '';
        toggleClose.style.display = 'none';
    });

    chatSend.addEventListener('click', () => {
        const text = chatInput.value.trim();
        if (text) { handleUserMessage(text); chatInput.value = ''; }
    });

    chatInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            const text = chatInput.value.trim();
            if (text) { handleUserMessage(text); chatInput.value = ''; }
        }
    });

    // ===================================================
    // ESC KEY — Close overlays
    // ===================================================
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            closeLightbox();
            closeInquiry();
            if (chatOpen) {
                chatOpen = false;
                chatWindow.classList.remove('open');
                toggleIcon.style.display = '';
                toggleClose.style.display = 'none';
            }
        }
    });

});
