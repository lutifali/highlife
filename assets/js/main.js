document.addEventListener("DOMContentLoaded", () => {
    const revealTargets = [
        ".features .feature-card",
        ".about-image",
        ".about-copy",
        ".section-heading",
        ".service-card",
        ".process-step",
        ".appointment-copy",
        ".booking-form",
        ".testimonial-card"
    ];
    revealTargets.forEach((selector) => {
        document.querySelectorAll(selector).forEach((element, index) => {
            element.classList.add("reveal");
            if (index < 3) element.classList.add(`reveal-delay-${(index % 3) + 1}`);
        });
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

    const header = document.querySelector(".main-header");
    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 20);
    }, { passive: true });

    const translations = {
        "متاح 24 ساعة طوال أيام الأسبوع": "Available 24 hours every day",
        "اتصل بنا": "Contact Us",
        "الرئيسية": "Home",
        "من نحن": "About Us",
        "الخدمات": "Services",
        "كيف يعمل": "How It Works",
        "احجز موعدًا": "Book an Appointment",
        "عيادتك الصحية في بيتك": "Your trusted clinic at home",
        "صحتك تستحق": "Your health deserves",
        "رعاية أقرب إليك": "care closer to you",
        "فريق من أطباء وتخصصات الرعاية الماهرة يقدم لك رعاية صحية موثوقة ومخصصة في الكويت، في راحة منزلك وبوقت يناسبك.": "A team of experienced doctors and healthcare professionals provides trusted, personalized care in Kuwait, comfortably at your home and at a time that suits you.",
        "اطلب زيارة منزلية": "Request a Home Visit",
        "اكتشف خدماتنا": "Discover Our Services",
        "أكثر من 24 طبيبًا": "More than 24 doctors",
        "موثوقون على مدار الساعة": "Available around the clock",
        "رعاية أساسية احترافية": "Professional Primary Care",
        "فريقًا مؤهلًا يقدم الرعاية بأعلى المعايير.": "A qualified team delivering care at the highest standards.",
        "راحة في منزلك": "Comfort in Your Home",
        "خدمات طبية مرنة دون الحاجة إلى الانتظار.": "Flexible medical services without unnecessary waiting.",
        "استجابة أسرع لعناية طبية": "Fast Medical Response",
        "نصل إليك سريعًا وفي الوقت المناسب.": "We reach you quickly and on time.",
        "من نحن": "About Us",
        "لأن البيت هو المكان": "Because home is the",
        "الأفضل للتعافي": "best place to recover",
        "نقدم رعاية صحية منزلية شاملة، مصممة بعناية لتمنحك راحة وأمانًا من دون التنقل أو الانتظار. صحتك وراحتك هي أولويتنا.": "We provide comprehensive home healthcare, thoughtfully designed to give you comfort and peace of mind without travel or waiting. Your health and comfort are our priorities.",
        "أطباء وممرضون معتمدون": "Certified doctors and nurses",
        "خطط رعاية مخصصة لكل مريض": "Personalized care plans",
        "خدمة متاحة في جميع مناطق الكويت": "Service available across Kuwait",
        "اعرف المزيد": "Learn More",
        "خدماتنا": "Our Services",
        "رعاية صحية متكاملة": "Integrated healthcare",
        "في مكانك": "at your place",
        "اختر الخدمة التي تناسب احتياجاتك، وسيتواصل معك فريقنا للتأكيد.": "Choose the service that fits your needs, and our team will contact you to confirm.",
        "زيارات طبيب منزلي": "Doctor Home Visits",
        "فحص وتشخيص وعلاج على يد طبيب مختص.": "Examination, diagnosis and treatment by a specialist.",
        "التمريض المنزلي": "Home Nursing",
        "رعاية تمريضية مؤهلة على مدار اليوم.": "Qualified nursing care throughout the day.",
        "الفحوصات المختبرية": "Laboratory Tests",
        "عينات وإشراف مختبري دون مغادرة البيت.": "Sample collection and laboratory support without leaving home.",
        "العلاج الطبيعي": "Physiotherapy",
        "جلسات تأهيل وبرامج علاجية شخصية.": "Personal rehabilitation and tailored therapy programs.",
        "احجز الآن": "Book Now",
        "ثلاث خطوات بسيطة": "Three Simple Steps",
        "للحصول على الرعاية": "to receive care",
        "احجز موعدًا": "Book an Appointment",
        "اختر الخدمة والوقت المناسب.": "Choose the service and suitable time.",
        "تأكيد الزيارة": "Visit Confirmation",
        "يتواصل معك فريقنا للتأكيد.": "Our team contacts you to confirm.",
        "تصل الرعاية إليك": "Care Comes to You",
        "يصل المختصون إليك في الوقت المحدد.": "Specialists arrive at the scheduled time.",
        "نحن هنا من أجلك": "We are here for you",
        "وعائلتك": "and your family",
        "أرسل طلب الزيارة وسيتصل بك فريقنا لتأكيد البيانات والترتيب المناسب.": "Send your visit request and our team will contact you to confirm details and arrange the visit.",
        "متاحون 24 ساعة": "Available 24 hours",
        "جميع مناطق الكويت": "Across Kuwait",
        "الاسم الكامل": "Full Name",
        "رقم الهاتف": "Phone Number",
        "اختر الخدمة": "Choose a Service",
        "زيارة طبيب منزلي": "Doctor Home Visit",
        "ملاحظات أو تفاصيل إضافية": "Additional notes or details",
        "إرسال الطلب": "Submit Request",
        "آراء العملاء": "Client Testimonials",
        "ماذا يقولون عن": "What our clients say",
        "رعايتنا؟": "about our care?",
        "الخدمة كانت ممتازة وسريعة. حضر الطبيب في الوقت المحدد وشرح الحالة بهدوء واهتمام كبير، وهذا ما جعلنا نشعر بالأمان.": "The service was excellent and fast. The doctor arrived on time and explained the condition calmly and with great attention, making us feel completely secure.",
        "فاطمة أحمد": "Fatima Ahmed",
        "عميلة في الكويت": "Client in Kuwait",
        "روابط سريعة": "Quick Links",
        "تواصل معنا": "Contact Us",
        "نقدم رعاية صحية موثوقة ومخصصة في منزلك، بجودة عالية واحترافية عالية.": "We provide trusted, personalized healthcare in your home with high quality and professional standards.",
        "جميع الحقوق محفوظة.": "All rights reserved.",
        "سياسة الخصوصية": "Privacy Policy",
        "الشروط والأحكام": "Terms & Conditions",
        "واتساب": "WhatsApp",
        "© 2026 High Life. جميع الحقوق محفوظة.": "© 2026 High Life. All rights reserved.",
        "تم إرسال طلبك بنجاح، سنتواصل معك قريبًا.": "Your request was sent successfully. We will contact you soon."
    };

    let isEnglish = false;
    const switches = [
        document.getElementById("langSwitch"),
        document.getElementById("headerLangSwitch")
    ].filter(Boolean);

    function translatePage() {
        const html = document.documentElement;
        isEnglish = !isEnglish;
        html.setAttribute("lang", isEnglish ? "en" : "ar");
        html.setAttribute("dir", isEnglish ? "ltr" : "rtl");
        document.title = isEnglish ? "High Life | Home Healthcare in Kuwait" : "High Life | الرعاية الصحية المنزلية في الكويت";

        switches.forEach((button) => {
            button.textContent = isEnglish ? "AR" : "EN";
        });

        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        const textNodes = [];
        while (walker.nextNode()) textNodes.push(walker.currentNode);
        textNodes.forEach((node) => {
            const original = node.textValue || node.textContent.trim();
            if (!original) return;
            if (isEnglish && translations[original]) {
                node.textContent = node.textContent.replace(original, translations[original]);
            } else if (!isEnglish) {
                const arabicEntry = Object.entries(translations).find(([, english]) => english === original);
                if (arabicEntry) node.textContent = node.textContent.replace(original, arabicEntry[0]);
            }
        });

        document.querySelectorAll("[placeholder]").forEach((element) => {
            const original = element.getAttribute("placeholder");
            if (isEnglish && translations[original]) element.setAttribute("placeholder", translations[original]);
            else if (!isEnglish) {
                const arabicEntry = Object.entries(translations).find(([, english]) => english === original);
                if (arabicEntry) element.setAttribute("placeholder", arabicEntry[0]);
            }
        });
    }

    switches.forEach((button) => button.addEventListener("click", translatePage));

    document.getElementById("currentYear").textContent = new Date().getFullYear();

    const form = document.getElementById("bookingForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const toast = new bootstrap.Toast(document.getElementById("successToast"));
        toast.show();
        form.reset();
    });

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", () => {
            const nav = document.getElementById("mainNav");
            if (nav.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(nav).hide();
            }
        });
    });
});
