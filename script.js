/* =====================================================
   ASV GLOBAL TECH
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   HEADER MENU
===================================================== */

const menuButton = document.getElementById("menuButton");
const navbar = document.getElementById("navbar");

if (menuButton && navbar) {

    menuButton.addEventListener("click", () => {

        navbar.classList.toggle("active");

        const isOpen = navbar.classList.contains("active");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });

}


/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        if (navbar) {
            navbar.classList.remove("active");
        }

        if (menuButton) {
            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    });

});


/* =====================================================
   BACK BUTTON
===================================================== */

const backButton = document.getElementById("backButton");

if (backButton) {

    backButton.addEventListener("click", () => {

        if (window.history.length > 1) {

            window.history.back();

        } else {

            window.location.hash = "home";

        }

    });

}


/* =====================================================
   SERVICE + SOLUTION DATA
===================================================== */

const solutionData = {


    /* =================================================
       DIGITAL SOLUTIONS
    ================================================= */

    digital: {

        label: "DIGITAL SOLUTIONS",

        title: "Digital Solutions",

        description:
            "We design modern digital platforms that help businesses improve customer experiences, streamline operations and create scalable digital capabilities.",

        details: [
            "Digital transformation strategy",
            "Business process digitization",
            "Customer experience platforms",
            "Enterprise web applications",
            "Workflow automation",
            "Scalable digital platforms"
        ]

    },


    /* =================================================
       TECHNOLOGY SOLUTIONS
    ================================================= */

    technology: {

        label: "TECHNOLOGY SOLUTIONS",

        title: "Technology Solutions",

        description:
            "Technology-driven solutions designed to improve business performance, automation, operational efficiency and long-term digital growth.",

        details: [
            "Enterprise technology solutions",
            "Application modernization",
            "Technology integration",
            "Business automation",
            "Digital architecture",
            "Scalable technology platforms"
        ]

    },


    /* =================================================
       SOFTWARE DEVELOPMENT
    ================================================= */

    software: {

        label: "SOFTWARE DEVELOPMENT",

        title: "Software Development",

        description:
            "Custom software applications designed around business requirements, operational workflows and future scalability.",

        details: [
            "Custom enterprise applications",
            "Business management systems",
            "API development",
            "Application modernization",
            "Software integration",
            "Maintenance and support"
        ]

    },


    /* =================================================
       WEB DEVELOPMENT
    ================================================= */

    web: {

        label: "WEB DEVELOPMENT",

        title: "Web Development",

        description:
            "Responsive and high-performance websites and web applications designed to provide modern digital experiences.",

        details: [
            "Corporate websites",
            "Business web applications",
            "Responsive UI development",
            "E-commerce platforms",
            "Web application integration",
            "Performance optimization"
        ]

    },


    /* =================================================
       ARTIFICIAL INTELLIGENCE
    ================================================= */

    ai: {

        label: "ARTIFICIAL INTELLIGENCE",

        title: "Artificial Intelligence",

        description:
            "AI-powered solutions that help organizations automate repetitive tasks, analyze information and make smarter business decisions.",

        details: [
            "AI automation",
            "Intelligent document processing",
            "Predictive analytics",
            "AI-powered business applications",
            "Natural language solutions",
            "Intelligent decision support"
        ]

    },


    /* =================================================
       IOT
    ================================================= */

    iot: {

        label: "IOT SOLUTIONS",

        title: "IoT Solutions",

        description:
            "Connected technology solutions that enable organizations to monitor assets, automate operations and gain real-time visibility.",

        details: [
            "Connected devices",
            "Real-time monitoring",
            "Asset tracking",
            "Industrial IoT",
            "Sensor data platforms",
            "Operational automation"
        ]

    },


    /* =================================================
       SAP
    ================================================= */

    sap: {

        label: "SAP SOLUTIONS",

        title: "SAP Solutions",

        description:
            "Enterprise technology solutions designed to improve business processes, operational visibility and enterprise resource management.",

        details: [
            "SAP implementation support",
            "Business process integration",
            "Enterprise resource management",
            "SAP application support",
            "Data and reporting",
            "Process optimization"
        ]

    },


    /* =================================================
       CYBER SECURITY
    ================================================= */

    cyber: {

        label: "CYBER SECURITY",

        title: "Cyber Security",

        description:
            "Security-focused solutions designed to protect business systems, networks, applications and critical information from cyber threats.",

        details: [
            "Security monitoring",
            "Threat detection",
            "Vulnerability assessment",
            "Network security",
            "Application security",
            "Security operations support"
        ]

    },


    /* =================================================
       CLOUD
    ================================================= */

    cloud: {

        label: "CLOUD SERVICES",

        title: "Cloud Services",

        description:
            "Flexible cloud solutions that help businesses improve scalability, reliability, infrastructure efficiency and digital agility.",

        details: [
            "Cloud migration",
            "Cloud infrastructure",
            "Cloud application deployment",
            "Infrastructure optimization",
            "Cloud security",
            "Cloud monitoring"
        ]

    },


    /* =================================================
       DATA
    ================================================= */

    data: {

        label: "DATA SOLUTIONS",

        title: "Data Solutions",

        description:
            "Data-driven technology solutions that help organizations transform business information into meaningful insights and better decisions.",

        details: [
            "Data integration",
            "Business intelligence",
            "Data visualization",
            "Data analytics",
            "Reporting solutions",
            "Data management"
        ]

    },


    /* =================================================
       IT CONSULTING
    ================================================= */

    consulting: {

        label: "IT CONSULTING",

        title: "IT Consulting",

        description:
            "Technology consulting services that help businesses plan, optimize and build the right digital technology environment.",

        details: [
            "Technology strategy",
            "Digital transformation consulting",
            "IT architecture",
            "Technology assessment",
            "Solution planning",
            "IT optimization"
        ]

    },


    /* =================================================
       TELECOM
    ================================================= */

    telecom: {

        label: "TELECOM SOLUTIONS",

        title: "Telecom Solutions",

        description:
            "ASV Global Tech provides telecom technology solutions that help organizations improve connectivity, network visibility, infrastructure management, automation and operational efficiency.",

        details: [
            "Telecom network solutions",
            "Network monitoring and management",
            "Fiber and communication infrastructure",
            "OSS and BSS integration",
            "Network automation",
            "Telecom data analytics",
            "Cloud-based telecom platforms",
            "5G-ready technology solutions"
        ]

    },


    /* =================================================
       GIS
    ================================================= */

    gis: {

        label: "GIS SOLUTIONS",

        title: "Geographic Information Systems",

        description:
            "GIS solutions that transform location and spatial data into useful business intelligence for infrastructure, planning, mapping and operational decision-making.",

        details: [
            "Digital mapping solutions",
            "Spatial data management",
            "Asset mapping",
            "Network mapping",
            "Location intelligence",
            "Geospatial analytics",
            "Infrastructure planning",
            "Telecom GIS integration"
        ]

    }

};


/* =====================================================
   SERVICE MODAL ELEMENTS
===================================================== */

const solutionModal =
    document.getElementById("solutionModal");

const modalClose =
    document.getElementById("modalClose");

const modalLabel =
    document.getElementById("modalLabel");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalDetails =
    document.getElementById("modalDetails");


/* =====================================================
   OPEN SERVICE MODAL
===================================================== */

function openSolutionModal(type) {

    const data = solutionData[type];

    if (!data || !solutionModal) {
        return;
    }


    if (modalLabel) {
        modalLabel.textContent = data.label;
    }


    if (modalTitle) {
        modalTitle.textContent = data.title;
    }


    if (modalDescription) {
        modalDescription.textContent =
            data.description;
    }


    if (modalDetails) {

        modalDetails.innerHTML = "";

        data.details.forEach((item, index) => {

            const div =
                document.createElement("div");

            div.className =
                "modal-detail-item";

            div.innerHTML = `
                <span>
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <p>
                    ${item}
                </p>
            `;

            modalDetails.appendChild(div);

        });

    }


    solutionModal.classList.add("active");

    document.body.classList.add("modal-open");

}


/* =====================================================
   CLOSE SERVICE MODAL
===================================================== */

function closeSolutionModal() {

    if (!solutionModal) {
        return;
    }

    solutionModal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


/* =====================================================
   SERVICE LEARN MORE BUTTONS
===================================================== */

document
    .querySelectorAll(
        ".learn-more-btn, .service-learn-more"
    )
    .forEach(button => {

        button.addEventListener("click", event => {

            event.preventDefault();

            const type =
                button.getAttribute("data-type");

            if (!type) {
                return;
            }

            openSolutionModal(type);

        });

    });


/* =====================================================
   SERVICE MODAL CLOSE BUTTON
===================================================== */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeSolutionModal
    );

}


/* =====================================================
   INDUSTRY DATA
===================================================== */

const industryData = {


    healthcare: {

        number: "01",

        title: "Healthcare",

        intro:
            "Technology solutions designed to help healthcare organizations improve patient experiences, operational efficiency, data visibility and digital services.",

        challenges: [
            "Managing large volumes of patient and operational data",
            "Improving digital patient experiences",
            "Connecting systems and information",
            "Maintaining security and privacy",
            "Reducing manual administrative processes"
        ],

        solutions: [
            "Healthcare management platforms",
            "Digital patient experience solutions",
            "Workflow automation",
            "Data analytics and reporting",
            "Secure cloud solutions",
            "IoT-enabled monitoring"
        ],

        impact: [
            "Improved operational efficiency",
            "Better information visibility",
            "Reduced manual processes",
            "Enhanced patient experience",
            "Improved decision-making"
        ],

        technologies: [
            "AI",
            "Cloud",
            "IoT",
            "Data Analytics",
            "Cyber Security",
            "Web Applications"
        ],

        useCases: [
            "Patient management",
            "Hospital operations",
            "Healthcare analytics",
            "Remote monitoring",
            "Digital healthcare platforms"
        ]

    },


    finance: {

        number: "02",

        title: "Finance & Banking",

        intro:
            "Secure and scalable technology solutions for financial institutions, banking operations and digital financial services.",

        challenges: [
            "Protecting sensitive financial information",
            "Meeting regulatory requirements",
            "Managing large transaction volumes",
            "Improving customer experience",
            "Detecting suspicious activity"
        ],

        solutions: [
            "Secure banking platforms",
            "Financial data analytics",
            "Fraud detection solutions",
            "Digital banking applications",
            "Workflow automation",
            "Cloud infrastructure"
        ],

        impact: [
            "Improved security",
            "Faster operations",
            "Better customer experience",
            "Improved risk visibility",
            "Data-driven financial decisions"
        ],

        technologies: [
            "AI",
            "Cyber Security",
            "Cloud",
            "Data Analytics",
            "APIs",
            "Automation"
        ],

        useCases: [
            "Digital banking",
            "Fraud detection",
            "Risk analytics",
            "Customer platforms",
            "Financial automation"
        ]

    },


    retail: {

        number: "03",

        title: "Retail",

        intro:
            "Digital solutions that help retailers create connected customer experiences, improve inventory visibility and optimize business operations.",

        challenges: [
            "Managing inventory across multiple locations",
            "Improving customer engagement",
            "Understanding customer behavior",
            "Optimizing supply chain operations",
            "Creating seamless digital experiences"
        ],

        solutions: [
            "Retail management platforms",
            "Customer analytics",
            "Inventory management systems",
            "E-commerce solutions",
            "AI-powered recommendations",
            "Cloud-based retail applications"
        ],

        impact: [
            "Improved customer experience",
            "Better inventory visibility",
            "Faster business operations",
            "Data-driven decisions",
            "Improved sales opportunities"
        ],

        technologies: [
            "AI",
            "Cloud",
            "Data Analytics",
            "IoT",
            "E-commerce",
            "Cyber Security"
        ],

        useCases: [
            "Smart inventory",
            "Customer analytics",
            "Digital commerce",
            "Retail automation",
            "Store operations"
        ]

    },


    manufacturing: {

        number: "04",

        title: "Manufacturing",

        intro:
            "Connected technology solutions that help manufacturers improve production visibility, automation, asset monitoring and operational efficiency.",

        challenges: [
            "Monitoring production processes",
            "Reducing equipment downtime",
            "Improving operational visibility",
            "Managing supply chain complexity",
            "Optimizing production efficiency"
        ],

        solutions: [
            "Industrial IoT platforms",
            "Predictive maintenance",
            "Production monitoring",
            "Supply chain solutions",
            "Data analytics",
            "Automation platforms"
        ],

        impact: [
            "Reduced operational downtime",
            "Improved production visibility",
            "Better asset utilization",
            "Improved efficiency",
            "Data-driven operations"
        ],

        technologies: [
            "IoT",
            "AI",
            "Cloud",
            "Automation",
            "Data Analytics",
            "Cyber Security"
        ],

        useCases: [
            "Smart factories",
            "Predictive maintenance",
            "Asset monitoring",
            "Production analytics",
            "Industrial automation"
        ]

    },


    education: {

        number: "05",

        title: "Education",

        intro:
            "Technology platforms that support digital learning, academic administration, student engagement and educational operations.",

        challenges: [
            "Managing academic information",
            "Supporting digital learning",
            "Improving student engagement",
            "Managing administrative workflows",
            "Providing secure access to information"
        ],

        solutions: [
            "Learning management platforms",
            "Student management systems",
            "Digital classrooms",
            "Academic analytics",
            "Workflow automation",
            "Cloud-based education platforms"
        ],

        impact: [
            "Improved learning experience",
            "Simplified administration",
            "Better student engagement",
            "Improved data visibility",
            "Scalable digital education"
        ],

        technologies: [
            "AI",
            "Cloud",
            "Web Applications",
            "Data Analytics",
            "Cyber Security",
            "Automation"
        ],

        useCases: [
            "Digital learning",
            "Student management",
            "Academic analytics",
            "Online assessments",
            "Education automation"
        ]

    },


    technology: {

        number: "06",

        title: "Technology",

        intro:
            "Modern technology solutions for software companies, IT organizations and digital businesses looking to improve their technology capabilities.",

        challenges: [
            "Modernizing legacy technology",
            "Scaling digital platforms",
            "Managing technology complexity",
            "Improving security",
            "Accelerating digital innovation"
        ],

        solutions: [
            "Software development",
            "Cloud transformation",
            "AI solutions",
            "Cyber security",
            "Data platforms",
            "Digital engineering"
        ],

        impact: [
            "Faster innovation",
            "Improved scalability",
            "Better technology performance",
            "Improved security",
            "Stronger digital capabilities"
        ],

        technologies: [
            "AI",
            "Cloud",
            "IoT",
            "Cyber Security",
            "Data",
            "Software Engineering"
        ],

        useCases: [
            "Digital transformation",
            "Application modernization",
            "Cloud adoption",
            "AI automation",
            "Technology platforms"
        ]

    },


    /* =================================================
       TELECOM INDUSTRY
    ================================================= */

    telecom: {

        number: "07",

        title: "Telecom",

        intro:
            "ASV Global Tech provides technology solutions for telecom organizations focused on network connectivity, infrastructure, operations, monitoring, automation and digital transformation.",

        challenges: [
            "Managing complex telecom networks",
            "Improving network visibility",
            "Monitoring large-scale infrastructure",
            "Managing fiber and communication assets",
            "Reducing operational complexity",
            "Supporting network automation"
        ],

        solutions: [
            "Telecom network management platforms",
            "Network monitoring solutions",
            "Fiber infrastructure management",
            "Telecom asset mapping",
            "OSS and BSS integration",
            "Network automation",
            "Telecom analytics",
            "Cloud-based telecom platforms"
        ],

        impact: [
            "Improved network visibility",
            "Better infrastructure management",
            "Reduced manual operations",
            "Faster issue identification",
            "Improved operational efficiency",
            "Better decision-making through analytics"
        ],

        technologies: [
            "5G",
            "IoT",
            "Cloud",
            "AI",
            "GIS",
            "Data Analytics",
            "Network Automation",
            "Cyber Security"
        ],

        useCases: [
            "Network monitoring",
            "Fiber network management",
            "Telecom asset management",
            "Network planning",
            "Infrastructure mapping",
            "Network analytics"
        ]

    },


    /* =================================================
       GIS INDUSTRY
    ================================================= */

    gis: {

        number: "08",

        title: "GIS",

        intro:
            "ASV Global Tech provides Geographic Information System solutions that help organizations manage spatial information, create digital maps, analyze locations and make better infrastructure and operational decisions.",

        challenges: [
            "Managing large volumes of spatial data",
            "Maintaining accurate digital maps",
            "Managing distributed infrastructure",
            "Understanding location-based information",
            "Connecting spatial and business data",
            "Improving infrastructure planning"
        ],

        solutions: [
            "Digital mapping solutions",
            "Spatial database management",
            "Asset mapping",
            "Network mapping",
            "Location intelligence",
            "Geospatial analytics",
            "Infrastructure planning",
            "Telecom GIS integration"
        ],

        impact: [
            "Better spatial visibility",
            "Improved infrastructure planning",
            "Faster location-based decisions",
            "Better asset management",
            "Improved operational efficiency",
            "More accurate business insights"
        ],

        technologies: [
            "GIS",
            "Geospatial Analytics",
            "Digital Mapping",
            "Spatial Databases",
            "Cloud",
            "AI",
            "IoT",
            "Data Analytics"
        ],

        useCases: [
            "Telecom network mapping",
            "Fiber route planning",
            "Infrastructure mapping",
            "Asset management",
            "Location intelligence",
            "Geospatial analytics"
        ]

    }

};


/* =====================================================
   CREATE INDUSTRY MODAL
===================================================== */

function createIndustryModal() {

    const modal =
        document.createElement("div");

    modal.id = "industryModal";

    modal.className = "industry-modal";

    modal.innerHTML = `

        <div class="industry-modal-content">

            <button
                type="button"
                class="industry-modal-close"
                id="industryModalClose">

                ×

            </button>


            <div class="industry-modal-header">

                <div
                    class="industry-modal-number"
                    id="industryNumber">
                    01
                </div>

                <p class="section-label">
                    INDUSTRY SOLUTIONS
                </p>

                <h2 id="industryTitle">
                    Healthcare
                </h2>

                <p id="industryIntro">
                    Industry introduction
                </p>

            </div>


            <div class="industry-detail-grid">

                <div class="industry-detail-box">

                    <span>01</span>

                    <h3>
                        Industry Challenges
                    </h3>

                    <div id="industryChallenges"></div>

                </div>


                <div class="industry-detail-box">

                    <span>02</span>

                    <h3>
                        Our Technology Solutions
                    </h3>

                    <div id="industrySolutions"></div>

                </div>


                <div class="industry-detail-box">

                    <span>03</span>

                    <h3>
                        Business Impact
                    </h3>

                    <div id="industryImpact"></div>

                </div>


                <div class="industry-detail-box">

                    <span>04</span>

                    <h3>
                        Technologies
                    </h3>

                    <div
                        class="industry-tech-list"
                        id="industryTech">
                    </div>

                </div>

            </div>


            <div class="industry-usecases">

                <p class="section-label">
                    KEY USE CASES
                </p>

                <h3>
                    How ASV Technology Creates Value
                </h3>

                <div
                    class="industry-usecase-grid"
                    id="industryUseCases">
                </div>

            </div>


            <div class="industry-cta">

                <div>

                    <p class="section-label">
                        ASV GLOBAL TECH
                    </p>

                    <h3>
                        Looking for a technology solution?
                    </h3>

                    <p>
                        Let's discuss your business requirements
                        and create the right technology solution.
                    </p>

                </div>

                <a
                    href="#contact"
                    class="primary-button"
                    id="industryContact">

                    TALK TO OUR TEAM →

                </a>

            </div>

        </div>

    `;

    document.body.appendChild(modal);

    return modal;
}


const industryModal =
    createIndustryModal();


/* =====================================================
   OPEN INDUSTRY MODAL
===================================================== */

function openIndustryModal(type) {

    const data = industryData[type];

    if (!data) {
        return;
    }


    document.getElementById(
        "industryNumber"
    ).textContent = data.number;


    document.getElementById(
        "industryTitle"
    ).textContent = data.title;


    document.getElementById(
        "industryIntro"
    ).textContent = data.intro;


    /* CHALLENGES */

    const challenges =
        document.getElementById(
            "industryChallenges"
        );

    challenges.innerHTML = "";

    data.challenges.forEach(item => {

        const div =
            document.createElement("div");

        div.className =
            "industry-list-item";

        div.innerHTML = `
            <span>✓</span>
            <p>${item}</p>
        `;

        challenges.appendChild(div);

    });


    /* SOLUTIONS */

    const solutions =
        document.getElementById(
            "industrySolutions"
        );

    solutions.innerHTML = "";

    data.solutions.forEach(item => {

        const div =
            document.createElement("div");

        div.className =
            "industry-list-item";

        div.innerHTML = `
            <span>✓</span>
            <p>${item}</p>
        `;

        solutions.appendChild(div);

    });


    /* IMPACT */

    const impact =
        document.getElementById(
            "industryImpact"
        );

    impact.innerHTML = "";

    data.impact.forEach(item => {

        const div =
            document.createElement("div");

        div.className =
            "industry-list-item";

        div.innerHTML = `
            <span>✓</span>
            <p>${item}</p>
        `;

        impact.appendChild(div);

    });


    /* TECHNOLOGIES */

    const technologies =
        document.getElementById(
            "industryTech"
        );

    technologies.innerHTML = "";

    data.technologies.forEach(item => {

        const span =
            document.createElement("span");

        span.textContent = item;

        technologies.appendChild(span);

    });


    /* USE CASES */

    const useCases =
        document.getElementById(
            "industryUseCases"
        );

    useCases.innerHTML = "";

    data.useCases.forEach((item, index) => {

        const div =
            document.createElement("div");

        div.className =
            "industry-usecase";

        div.innerHTML = `
            <span>
                ${String(index + 1).padStart(2, "0")}
            </span>

            <strong>
                ${item}
            </strong>
        `;

        useCases.appendChild(div);

    });


    industryModal.classList.add("active");

    document.body.classList.add("modal-open");

}


/* =====================================================
   INDUSTRY BUTTONS
===================================================== */

document
    .querySelectorAll(".industry-learn")
    .forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();

                const card =
                    button.closest(
                        ".industry-card"
                    );

                if (!card) {
                    return;
                }

                const type =
                    card.getAttribute(
                        "data-industry"
                    );

                openIndustryModal(type);

            }
        );

    });


/* =====================================================
   CLOSE INDUSTRY MODAL
===================================================== */

const industryModalClose =
    document.getElementById(
        "industryModalClose"
    );

if (industryModalClose) {

    industryModalClose.addEventListener(
        "click",
        () => {

            industryModal.classList.remove(
                "active"
            );

            document.body.classList.remove(
                "modal-open"
            );

        }
    );

}


/* =====================================================
   INDUSTRY CONTACT
===================================================== */

const industryContact =
    document.getElementById(
        "industryContact"
    );

if (industryContact) {

    industryContact.addEventListener(
        "click",
        () => {

            industryModal.classList.remove(
                "active"
            );

            document.body.classList.remove(
                "modal-open"
            );

        }
    );

}


/* =====================================================
   BACKDROP CLOSE
===================================================== */

if (solutionModal) {

    solutionModal.addEventListener(
        "click",
        event => {

            if (event.target === solutionModal) {

                closeSolutionModal();

            }

        }
    );

}


if (industryModal) {

    industryModal.addEventListener(
        "click",
        event => {

            if (event.target === industryModal) {

                industryModal.classList.remove(
                    "active"
                );

                document.body.classList.remove(
                    "modal-open"
                );

            }

        }
    );

}


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }

        closeSolutionModal();

        if (industryModal) {

            industryModal.classList.remove(
                "active"
            );

        }

        document.body.classList.remove(
            "modal-open"
        );

    }
);


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );

const formMessage =
    document.getElementById(
        "formMessage"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            if (formMessage) {

                formMessage.textContent =
                    "Thank you. Your enquiry has been received.";

                formMessage.classList.add(
                    "success"
                );

            }

            contactForm.reset();

        }
    );

}


/* =====================================================
   SMOOTH SCROLL
===================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

window.addEventListener(
    "scroll",
    () => {

        const header =
            document.querySelector(".header");

        if (!header) {
            return;
        }

        if (window.scrollY > 40) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }
);


/* =====================================================
   DONE
===================================================== */

console.log(
    "ASV Global Tech website loaded successfully."
);