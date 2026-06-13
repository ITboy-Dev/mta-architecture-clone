/* ==========================================
   MTA:: Architecture Website - Complete Scripts
   Chatbot + Lightbox + Inquiry + All Interactions
   ========================================== */

document.addEventListener('DOMContentLoaded', function () {

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
        greetings: [
            "Hello! Welcome to M.T Architects. I'm your virtual assistant. How can I help you today?",
            "Hi there! I'm the MTA Assistant. Feel free to ask me anything about our architecture and design services!",
            "Welcome! I'm here to help you explore M.T Architects' services and portfolio. What would you like to know?"
        ],

        responses: {
            // ===== ABOUT THE COMPANY =====
            "about|who are you|company|mta|m.t architects|tell me about": {
                answer: "**M.T Architects (MTA)** is a leading architecture and design firm based in **New Cairo, Egypt**, with international presence in **Saudi Arabia**.\n\nFounded by **Architect Mohamed Talaat**, we've successfully completed over **700 projects** across Egypt and abroad. We specialize in creating distinctive, memorable spaces that leave a lasting impact on everyone who experiences them.\n\nOur philosophy is that great architecture should generate meaningful public experiences, whether people work, live, or simply pass through our designs.",
                quickReplies: ["Our Services", "View Projects", "Contact Info", "Our Process"]
            },

            // ===== SERVICES =====
            "services|what do you offer|what you do|service|offerings": {
                answer: "We offer comprehensive design services across **four main disciplines**:\n\n🏗️ **Architecture Design** — Residential, commercial, and mixed-use buildings\n\n🏠 **Interior Design** — Luxury interiors for homes, offices, restaurants & retail\n\n🌳 **Landscape Design** — Gardens, outdoor spaces, compound landscaping\n\n🏙️ **Urban Design** — Master planning, urban development, community design\n\nFrom concept to completion, our team handles every phase — **idea development, design, construction documentation, and project supervision**.",
                quickReplies: ["Architecture Design", "Interior Design", "Landscape Design", "Request Consultation"]
            },

            "architecture design|architectural": {
                answer: "Our **Architecture Design** service covers the full spectrum:\n\n• **Residential** — Villas, apartments, residential compounds\n• **Commercial** — Shopping malls, office buildings, hotels\n• **Mixed-Use** — Combined commercial & residential developments\n• **Institutional** — Educational & healthcare facilities\n\nWe've completed **350+ residential** and **200+ commercial** projects. Each design prioritizes distinctive aesthetics, functionality, and the client's unique vision.\n\nNotable projects include **AER Mall**, **Hayat Plaza**, and the **Waterfall Compound Project**.",
                quickReplies: ["Interior Design", "View Projects", "Request Consultation"]
            },

            "interior design|interior|interiors": {
                answer: "Our **Interior Design** services create contemplative, unique spaces:\n\n• **Residential Interiors** — Living spaces, bedrooms, kitchens\n• **Commercial Interiors** — Restaurants, cafes, retail stores, offices\n• **Hospitality** — Hotel lobbies, suites, and public areas\n• **Custom Furniture** — Bespoke furniture design and procurement\n\nWe believe interiors should reflect the personality and values of those who use them. Our project **Caffè Vergnano** showcases our expertise in commercial interior design.\n\nEvery interior project integrates aesthetics with practical, operational needs.",
                quickReplies: ["Landscape Design", "View Projects", "Our Process"]
            },

            "landscape design|landscape|garden|outdoor": {
                answer: "Our **Landscape Design** services include:\n\n• **Residential Gardens** — Private gardens and outdoor living spaces\n• **Compound Landscaping** — Community green spaces and parks\n• **Commercial Landscapes** — Plaza gardens, corporate campuses\n• **Hardscape & Softscape** — Pathways, water features, planting design\n\nProjects like **Hayat Plaza**, **Opal Project**, and **Box Park** demonstrate our capability in integrating landscape with architecture seamlessly.",
                quickReplies: ["Urban Design", "Architecture Design", "Contact Us"]
            },

            "urban design|urban|master plan|planning|city": {
                answer: "Our **Urban Design** services focus on creating livable, sustainable communities:\n\n• **Master Planning** — Large-scale community and district planning\n• **Mixed-Use Developments** — Integrated live-work-play environments\n• **Compound Design** — Gated communities with complete amenities\n• **Sustainable Design** — Green building practices and eco-friendly solutions\n\nThe **Waterfall Compound Project** is an excellent example of our comprehensive urban design approach, integrating architecture, interiors, landscape, and urban planning in one cohesive vision.",
                quickReplies: ["Our Services", "View Projects", "Request Consultation"]
            },

            // ===== PORTFOLIO / PROJECTS =====
            "projects|portfolio|work|works|featured|show me": {
                answer: "Here are some of our **featured projects**:\n\n☕ **Caffè Vergnano** — Architecture & Interior Design\n🏬 **AER Mall** — Architecture Design\n🏢 **Hayat Plaza** — Architecture & Landscape Design\n🏘️ **Waterfall Compound** — Full-service (Architecture, Interior, Landscape & Urban)\n🌿 **Opal Project** — Architecture & Landscape Design\n🎪 **Box Park** — Architecture & Landscape Design\n\nWe've completed **700+ successful projects** across residential (350+), commercial (200+), and various other building types (222+).\n\nWould you like details on any specific project?",
                quickReplies: ["Caffè Vergnano", "AER Mall", "Waterfall Compound", "View All Projects"]
            },

            "caffe vergnano|cafe|coffee|restaurant": {
                answer: "**Caffè Vergnano** is one of our signature projects combining **Architecture & Interior Design**.\n\nThis Italian café project showcases our ability to create warm, inviting commercial interiors that blend contemporary design with the authentic character of an Italian coffee culture. The design features:\n\n• Warm material palette — wood, metal, and stone\n• Custom lighting design\n• Elegant seating arrangements\n• Brand-integrated architectural elements\n\nThis project demonstrates our expertise in hospitality and F&B interior design.",
                quickReplies: ["AER Mall", "Other Projects", "Interior Design"]
            },

            "aer mall|mall|shopping": {
                answer: "**AER Mall** is a striking **Architecture Design** project showcasing our commercial expertise.\n\nKey features:\n• Contemporary glass and steel facade\n• Dramatic geometric design elements\n• Energy-efficient building systems\n• Modern retail space planning\n• Impressive evening lighting design\n\nThis project exemplifies our capability in large-scale commercial architecture, creating spaces that are both visually stunning and commercially functional.",
                quickReplies: ["Hayat Plaza", "Other Projects", "Architecture Design"]
            },

            "hayat plaza|plaza": {
                answer: "**Hayat Plaza** combines **Architecture & Landscape Design** in a mixed-use development.\n\nHighlights:\n• Modern architectural language\n• Integrated green landscaping\n• Commercial and community spaces\n• Sustainable design approach\n• Seamless indoor-outdoor transitions\n\nThis project showcases our ability to create developments where architecture and landscape work in harmony.",
                quickReplies: ["Waterfall Compound", "Box Park", "Landscape Design"]
            },

            "waterfall compound|waterfall|compound": {
                answer: "**Waterfall Compound Project** is our most comprehensive project, spanning all **four design disciplines**:\n\n🏗️ Architecture Design\n🏠 Interior Design\n🌳 Landscape Design\n🏙️ Urban Design\n\nThis luxury residential compound features:\n• Master-planned gated community\n• Multiple villa types and designs\n• Swimming pools and water features\n• Comprehensive green spaces and parks\n• Community amenities and facilities\n\nIt represents the pinnacle of our integrated design approach.",
                quickReplies: ["Opal Project", "Our Process", "Request Consultation"]
            },

            "opal|opal project": {
                answer: "**Opal Project** showcases our **Architecture & Landscape Design** expertise in residential development.\n\nFeatures:\n• Contemporary apartment buildings\n• Extensive green park areas\n• Sustainable urban planning\n• Modern architectural aesthetics\n• Integrated landscape design\n\nThis project demonstrates our commitment to creating residential communities that balance modern living with nature.",
                quickReplies: ["Box Park", "Other Projects", "Contact Us"]
            },

            "box park|boxpark": {
                answer: "**Box Park** is a creative **Architecture & Landscape Design** project.\n\nThis innovative commercial development features:\n• Creative container-based commercial architecture\n• Colorful, dynamic evening lighting\n• Integrated landscape and public spaces\n• Unique retail and entertainment zones\n• Modern urban gathering space design\n\nBox Park showcases our ability to think outside conventional design, creating vibrant community destinations.",
                quickReplies: ["Other Projects", "Our Services", "Contact Us"]
            },

            // ===== PROCESS =====
            "process|how do you work|workflow|phases|steps|methodology": {
                answer: "Our **design process** follows three key phases:\n\n**1️⃣ Idea & Start**\n• Client consultation and needs analysis\n• Site evaluation and feasibility studies\n• Concept development and initial sketches\n• Budget estimation\n\n**2️⃣ Design & Create**\n• Detailed architectural drawings\n• 3D visualization and renders\n• Material selection and specifications\n• Engineering coordination\n• Client review and revisions\n\n**3️⃣ Build & Finish**\n• Construction documentation\n• Contractor coordination\n• Site supervision\n• Quality assurance\n• Final handover\n\nThroughout every phase, we involve our clients to ensure the result matches their vision perfectly.",
                quickReplies: ["Our Services", "Request Consultation", "Timeline"]
            },

            // ===== CONTACT =====
            "contact|reach|phone|call|email|address|location|where|office|visit": {
                answer: "You can reach **M.T Architects** through:\n\n📞 **Phone:**\n• (202) 0115 111 5111\n• (202) 281 40001\n• (202) 281 40210\n• (966) 50 702 7111 (Saudi Arabia)\n\n📧 **Email:**\n• info@m-talaat.com\n• mt@m-talaat.com\n\n📍 **Office Address:**\n167 Northern 90th Street, Jasmine 7\nNew Cairo, Egypt\n\n🌐 **Social Media:**\n• Facebook, LinkedIn, Instagram & YouTube\n\nWould you like to schedule a consultation?",
                quickReplies: ["Request Consultation", "View on Map", "Our Services"]
            },

            // ===== CONSULTATION =====
            "consultation|consult|meeting|appointment|schedule|book": {
                answer: "We'd love to discuss your project! Here's how to get a **free consultation**:\n\n1️⃣ **Click the 📅 button** on the right side of the screen to fill out a quick inquiry form\n\n2️⃣ **Call us directly** at (202) 0115 111 5111\n\n3️⃣ **Email us** at info@m-talaat.com with your project details\n\n4️⃣ **WhatsApp** — Click the green button to chat instantly\n\n5️⃣ **Visit our office** at 167 Northern 90th Street, New Cairo\n\nOur team typically responds within **24 hours** for form submissions.",
                quickReplies: ["Contact Info", "Our Services", "Our Process"]
            },

            // ===== PRICING =====
            "price|pricing|cost|how much|budget|fee|fees|charges|rate": {
                answer: "Our pricing depends on several factors:\n\n• **Project type** (residential, commercial, mixed-use)\n• **Project scale** (area in square meters)\n• **Scope of services** (design only vs. full service)\n• **Design complexity** and special requirements\n• **Timeline** and delivery schedule\n\nWe offer **competitive pricing** and can work within various budget ranges. Each project receives a **customized quotation** after our initial consultation.\n\n💡 **Tip:** The best way to get accurate pricing is to schedule a free consultation where we can discuss your specific needs.\n\nWould you like to request a consultation?",
                quickReplies: ["Request Consultation", "Our Process", "Contact Us"]
            },

            // ===== TIMELINE =====
            "timeline|how long|duration|time|when|delivery|deadline": {
                answer: "Project timelines vary based on scope and complexity:\n\n⏱️ **Typical Timelines:**\n• **Small residential interior** — 2-4 months\n• **Villa design** — 3-6 months\n• **Commercial building** — 6-12 months\n• **Compound / Master plan** — 12-24 months\n\nThese include design phases only. Construction timelines are additional and depend on the contractor and project scale.\n\nWe pride ourselves on meeting deadlines while maintaining the highest quality standards. Would you like to discuss your specific project timeline?",
                quickReplies: ["Our Process", "Request Consultation", "Our Services"]
            },

            // ===== CAREERS =====
            "career|careers|job|jobs|hiring|work with you|join|employment|vacancy|vacancies": {
                answer: "We're always looking for talented individuals to join the **MTA team**! 🏢\n\nCommon positions we hire for:\n• **Architects** (Senior & Junior)\n• **Interior Designers**\n• **Landscape Architects**\n• **3D Visualization Artists**\n• **BIM Specialists**\n• **Project Managers**\n• **Site Engineers**\n\nTo apply, send your **CV and portfolio** to:\n📧 **info@m-talaat.com**\n\nMention the position you're applying for in the subject line. We review applications regularly.",
                quickReplies: ["About MTA", "Contact Info", "Our Services"]
            },

            // ===== EXPERIENCE =====
            "experience|years|established|history|track record|how long in business": {
                answer: "M.T Architects has an impressive **track record**:\n\n📊 **By the Numbers:**\n• **700+** total completed projects\n• **350+** residential projects\n• **200+** commercial projects\n• **222+** various building types\n\n🌍 **Geographic Reach:**\n• Headquarters in **New Cairo, Egypt**\n• Active office in **Saudi Arabia**\n• Projects completed internationally\n\nOur experience spans the full range of architecture and design, from intimate residential interiors to large-scale urban master plans. This depth of experience ensures every project benefits from our accumulated knowledge and expertise.",
                quickReplies: ["View Projects", "Our Services", "About MTA"]
            },

            // ===== VISION & PHILOSOPHY =====
            "vision|philosophy|approach|believe|values|mission": {
                answer: "Our **vision** is rooted in a simple but powerful belief:\n\n> *\"Architecture of any type or scale should generate meaningful experiences for everyone who encounters it.\"*\n\n🎯 **Our Core Values:**\n\n• **Client-Centered** — The client is the soul of every project\n• **Distinctive Design** — Every project is unique, never cookie-cutter\n• **Excellence** — We pursue the highest standards in every detail\n• **Innovation** — Blending tradition with contemporary innovation\n• **Collaboration** — Involving clients in the creative process\n\nOur greatest satisfaction comes from designing spaces that are **memorable, unique, and leave a true impact** on those who use them.",
                quickReplies: ["Our Process", "Our Services", "View Projects"]
            },

            // ===== SAUDI ARABIA =====
            "saudi|saudi arabia|ksa|riyadh|jeddah|international": {
                answer: "Yes! We have an **active presence in Saudi Arabia** 🇸🇦\n\n📞 **KSA Contact:** (966) 50 702 7111\n\nWe serve clients across the Kingdom with the same level of excellence and attention to detail that we bring to our Egypt-based projects.\n\nOur Saudi operations cover all our service areas — Architecture, Interior, Landscape, and Urban Design.\n\nWould you like to discuss a project in Saudi Arabia?",
                quickReplies: ["Contact Info", "Our Services", "Request Consultation"]
            },

            // ===== SUSTAINABILITY =====
            "sustainable|green|eco|environment|energy|leed": {
                answer: "Sustainability is integrated into our design approach:\n\n🌿 **Our Sustainable Practices:**\n• Energy-efficient building design\n• Natural ventilation and daylighting optimization\n• Sustainable material selection\n• Water-efficient landscaping\n• Green space integration in all projects\n• Local material sourcing when possible\n\nWe believe that great architecture must be responsible architecture. Our designs balance aesthetic excellence with environmental consciousness.",
                quickReplies: ["Our Services", "Landscape Design", "Urban Design"]
            },

            // ===== THANKS =====
            "thank|thanks|thank you|thx|appreciate": {
                answer: "You're very welcome! 😊 It's been a pleasure assisting you.\n\nRemember, you can always:\n• 📅 Book a consultation using the button on screen\n• 💬 Chat with us on WhatsApp\n• 📞 Call us at (202) 0115 111 5111\n\nWe look forward to helping you bring your architectural vision to life! 🏗️",
                quickReplies: ["Our Services", "Contact Info", "View Projects"]
            },

            // ===== BYE =====
            "bye|goodbye|see you|good night|later": {
                answer: "Goodbye! Thank you for visiting M.T Architects. 👋\n\nWe're here whenever you need us. Don't hesitate to reach out when you're ready to start your project!\n\n*\"Every great building begins with a conversation.\"*\n\nHave a wonderful day! 🌟",
                quickReplies: ["Contact Info", "Our Services"]
            },

            // ===== DEFAULT (no match) =====
            "__default__": {
                answer: "Thank you for your message! While I may not have the specific information you're looking for, I can help you with:\n\n• 🏗️ Our **services** (Architecture, Interior, Landscape, Urban Design)\n• 📁 Our **project portfolio** and featured works\n• 📞 **Contact information** and office details\n• 💼 **Career opportunities**\n• 📋 Our **design process**\n• 💰 **Pricing** information\n• 📅 **Scheduling** a consultation\n\nFeel free to ask about any of these topics, or click one of the quick reply buttons below!",
                quickReplies: ["Our Services", "View Projects", "Contact Info", "Request Consultation"]
            }
        }
    };

    // ---- CHATBOT FUNCTIONS ----
    function getTimeString() {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    function addMessage(text, sender, animate = true) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-message ${sender}`;

        const avatar = document.createElement('div');
        avatar.className = 'chat-avatar';
        avatar.innerHTML = sender === 'bot' ? '<i class="fa fa-building"></i>' : '<i class="fa fa-user"></i>';

        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble';

        // Parse markdown-like formatting
        let html = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/> (.*?)$/gm, '<blockquote style="border-left:2px solid #c19b76;padding-left:10px;margin:6px 0;color:rgba(255,255,255,0.6);font-style:italic;">$1</blockquote>')
            .replace(/\n/g, '<br>');

        bubble.innerHTML = html;

        const time = document.createElement('span');
        time.className = 'chat-time';
        time.textContent = getTimeString();
        bubble.appendChild(time);

        msgDiv.appendChild(avatar);
        msgDiv.appendChild(bubble);

        if (animate) msgDiv.style.animation = 'messageIn 0.3s ease';

        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
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

        // Check greetings
        const greetWords = ['hello', 'hi', 'hey', 'hola', 'greetings', 'good morning', 'good afternoon', 'good evening', 'assalam', 'salam', 'marhaba', 'ahlan'];
        if (greetWords.some(w => lower.includes(w))) {
            const greet = knowledgeBase.greetings[Math.floor(Math.random() * knowledgeBase.greetings.length)];
            return { answer: greet, quickReplies: ["Our Services", "View Projects", "Contact Info", "About MTA"] };
        }

        // Search knowledge base
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

        return bestMatch || knowledgeBase.responses['__default__'];
    }

    function handleUserMessage(text) {
        addMessage(text, 'user');
        quickRepliesEl.innerHTML = '';

        showTyping();

        const delay = 600 + Math.random() * 800;
        setTimeout(() => {
            removeTyping();
            const response = findResponse(text);
            addMessage(response.answer, 'bot');
            setQuickReplies(response.quickReplies);
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
                addMessage("Welcome to **M.T Architects**! 🏗️\n\nI'm your virtual assistant. I can help you explore our services, portfolio, and get in touch with our team.\n\nWhat would you like to know?", 'bot');
                setQuickReplies(["Our Services", "View Projects", "About MTA", "Contact Info", "Our Process", "Careers"]);
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
