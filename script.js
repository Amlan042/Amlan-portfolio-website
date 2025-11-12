//==================== NAVBAR ===================

//pop-up navbar marquee highlights when loading
document.addEventListener("DOMContentLoaded", () => {
  const navbarMarquee = document.querySelector(".navbar-marquee");
  const marquee = document.querySelector(".marquee");

  // Pop-up animation
  setTimeout(() => {
    navbarMarquee.classList.add("visible");
    // Start marquee scrolling after a short delay
    setTimeout(() => {
      marquee.style.animationPlayState = "running";
    }, 300);
  }, 800);
});

//handle the nav-menu for smaller devices
const openBtn = document.getElementById("open-menu-button");
const closeBtn = document.getElementById("close-menu-button");
const navMenu = document.getElementById("mainMenu");
openBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu.classList.add("active");
  openBtn.classList.add("active");
  closeBtn.classList.add("active");
});
closeBtn.addEventListener("click", (e) =>{
  e.stopPropagation();
  navMenu.classList.remove("active");
  openBtn.classList.remove("active");
  closeBtn.classList.remove("active");
});

document.addEventListener("click", (e) =>{
  if(!navMenu.contains(e.target) && !closeBtn.contains(e.target) && !openBtn.contains(e.target)){
    navMenu.classList.remove("active");
    openBtn.classList.remove("active");
    closeBtn.classList.remove("active");
  }
});
window.addEventListener("resize", () => {
  if(window.innerWidth >= 1125){
    navMenu.classList.remove("active");
    openBtn.classList.remove("active");
    closeBtn.classList.remove("active");
  }
})



//==================== HOME SECTION ====================

//adding typing effect to the name in the hero section
document.addEventListener("DOMContentLoaded", function () {
  const name = "Amlan Mandal";
  const typedName = document.getElementById("typed-name");
  let index = 0;
  function type() {
    if (index < name.length) {
      typedName.textContent += name.charAt(index);
      index++;
      setTimeout(type, 200); //typing speed
    } else {
      setTimeout(() => erase(), 2000); //wait before erasing
    }
  }
  function erase() {
    typedName.textContent = "";
    index = 0;
    setTimeout(type, 500); //wait before typing again
  }
  type();
});

//get the social toggle button and sidebar
const socialToggle = document.getElementById("socialToggle");
const socialLinks = document.getElementById("socialLinks");
socialToggle.addEventListener("click", (e) => {
  e.stopPropagation(); //prevent the click from propagating to the document
  socialLinks.classList.toggle("active");
  socialToggle.classList.toggle("active");
});
//close the social-media sidebar if clicked outside
document.addEventListener("click", (e) => {
  if (!socialLinks.contains(e.target) && !socialToggle.contains(e.target)) {
    socialLinks.classList.remove("active");
    socialToggle.classList.remove("active");
  }
});
//load the sidebar after profile card animation ends
document.addEventListener("DOMContentLoaded", () => {
  const socialLinks = document.querySelector(".social-links");
  const socialToggle = document.querySelector(".social-toggle");

  // Wait until profile-card animation is done (1.8S)
  setTimeout(() => {
    socialLinks.classList.add("active");
    socialToggle.classList.add("active");
  }, 1800); // match the PHOTO-INTRO duration
});




// =================== ABOUT ME ========================

// Toggle bar functionality in the about me section
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle-btn");
  const panels = document.querySelectorAll(".content-panel");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));
      // Add active to the clicked button
      button.classList.add("active");

      // Hide all content panels
      panels.forEach((panel) => panel.classList.remove("active"));
      // Show selected panel
      const target = button.getAttribute("data-target");
      document.getElementById(target).classList.add("active");
    });
  });
});

// Counter Animation
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 100;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 120);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// Pin float-in animation on gradient-box view
document.addEventListener("DOMContentLoaded", () => {
  const pins = document.querySelectorAll(".pin-wrapper");
  const boxes = document.querySelectorAll(".gradient-box");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pin = entry.target.querySelector(".pin-wrapper");
            if (pin && !pin.classList.contains("pin-in")) {
              pin.classList.add("pin-in");
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    boxes.forEach((box) => observer.observe(box));
  } else {
    // Fallback: animate all pins after load
    pins.forEach((pin) => pin.classList.add("pin-in"));
  }
});

//handling timeline menu for media query(< 1125px)
const timeLineBtn = document.getElementById("open-about-toggle-button");
const toggleBarTimeline = document.querySelector(".toggle-bar");
const about = document.querySelector("#about");

timeLineBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  timeLineBtn.classList.toggle("active");
  toggleBarTimeline.classList.toggle("show");
});
about.addEventListener("click", (e) => {
  if (
    !toggleBarTimeline.contains(e.target) &&
    !timeLineBtn.contains(e.target)
  ) {
    toggleBarTimeline.classList.remove("show");
    timeLineBtn.classList.remove("active");
  }
});
window.addEventListener("resize", () => {
  if(window.innerWidth >= 1125){
    toggleBarTimeline.classList.remove("show");
    timeLineBtn.classList.remove("active");
  }
});




// ======================== SKILLS SECTION =========================

// Load content for Skills Section Toggle Bar
document.addEventListener("DOMContentLoaded", () => {
  const skillData = {
    programming: [
      {
        name: "Python",
        level: "intermediate",
        icon: "fab fa-python",
        img: "assets/images/programming/python.svg",
      },
      {
        name: "C++",
        level: "Beginner",
        icon: "fas fa-code",
        img: "assets/images/programming/c++.svg",
      },
      {
        name: "Java",
        level: "intermediate",
        icon: "fab fa-java",
        img: "assets/images/programming/java.png",
      },
      {
        name: "C",
        level: "Beginner",
        icon: "fas fa-terminal",
        img: "assets/images/programming/c.svg",
      },
      {
        name: "SQL",
        level: "intermediate",
        icon: "fas fa-database",
        img: "assets/images/programming/sql.svg",
      },
      {
        name: "Bash",
        level: "Beginner",
        icon: "fab fa-bash",
        img: "assets/images/programming/bash.png",
      },
    ],
    ai: [
      {
        name: "TensorFlow",
        level: "intermediate",
        icon: "fas fa-brain",
        img: "assets/images/ai-ml/tensorflow-2.svg",
      },
      {
        name: "PyTorch",
        level: "Beginner",
        icon: "fas fa-microchip",
        img: "assets/images/ai-ml/pytorch.svg",
      },
      {
        name: "Computer Vision",
        level: "intermediate",
        icon: "fas fa-layer-group",
        img: "assets/images/ai-ml/cv.png",
      },
      {
        name: "Scikit-learn",
        level: "Advanced",
        icon: "fas fa-chart-line",
        img: "assets/images/ai-ml/sklearn.png",
      },
      {
        name: "Numpy",
        level: "Advanced",
        icon: "fas fa-database",
        img: "assets/images/ai-ml/numpy.svg",
      },
      {
        name: "Pandas",
        level: "Advanced",
        icon: "fas fa-database",
        img: "assets/images/ai-ml/pandas.svg",
      },
    ],
    web: [
      {
        name: "HTML5",
        level: "Advanced",
        icon: "fab fa-html5",
        img: "assets/images/web-dev/html5.svg",
      },
      {
        name: "CSS3",
        level: "Advanced",
        icon: "fab fa-css3-alt",
        img: "assets/images/web-dev/css-3.svg",
      },
      {
        name: "JavaScript",
        level: "intermediate",
        icon: "fab fa-js",
        img: "assets/images/web-dev/js-wdev.svg",
      },
      {
        name: "React",
        level: "Beginner",
        icon: "fab fa-react",
        img: "assets/images/web-dev/react.svg",
      },
      {
        name: "Node.js",
        level: "Beginner",
        icon: "fab fa-node-js",
        img: "assets/images/web-dev/node-js.svg",
      },
      {
        name: "Flask",
        level: "Beginner",
        icon: "fas fa-flask",
        img: "assets/images/web-dev/flask.svg",
      },
    ],

    tools: [
      {
        name: "GitHub",
        level: "Beginner",
        icon: "fab fa-github",
        img: "assets/images/tools/github.svg",
      },
      {
        name: "VS Code",
        level: "intermediate",
        icon: "fas fa-code-branch",
        img: "assets/images/tools/vs-code.svg",
      },
      {
        name: "Jupyter",
        level: "intermediate",
        icon: "fas fa-book",
        img: "assets/images/tools/jupyter.svg",
      },
      {
        name: "Linux",
        level: "Beginner",
        icon: "fab fa-linux",
        img: "assets/images/tools/linux.svg",
      },
      {
        name: "Git",
        level: "intermediate",
        icon: "fab fa-git",
        img: "assets/images/tools/git.svg",
      },
      {
        name: "Google Colab",
        level: "intermediate",
        icon: "fas fa-cloud",
        img: "assets/images/tools/g-colab.png",
      },
    ],
    fundamentals: [
      {
        name: "DSA",
        level: "intermediate",
        icon: "fas fa-network-wired",
        img: "assets/images/fundamentals/DSA.png",
      },
      {
        name: "OOPs",
        level: "intermediate",
        icon: "fas fa-cubes",
        img: "assets/images/fundamentals/oop.png",
      },
      {
        name: "DBMS",
        level: "intermediate",
        icon: "fas fa-database",
        img: "assets/images/fundamentals/DBMS.png",
      },
      {
        name: "Automata Theory",
        level: "Beginner",
        icon: "fas fa-project-diagram",
        img: "assets/images/fundamentals/automata.png",
      },
      {
        name: "Operating Systems",
        level: "Beginner",
        icon: "fas fa-microchip",
        img: "assets/images/fundamentals/os.png",
      },
      {
        name: "Computer Networks",
        level: "Beginner",
        icon: "fas fa-server",
        img: "assets/images/fundamentals/CN.png",
      },
    ],
    soft: [
      {
        name: "Communication",
        level: "intermediate",
        icon: "fas fa-comments",
        img: "assets/images/soft-skills/communication.svg",
      },
      {
        name: "Teamwork",
        level: "intermediate",
        icon: "fas fa-users",
        img: "assets/images/soft-skills/teamwork.svg",
      },
      {
        name: "Leadership",
        level: "intermediate",
        icon: "fas fa-user-tie",
        img: "assets/images/soft-skills/leadership.svg",
      },
      {
        name: "Problem Solving",
        level: "intermediate",
        icon: "fas fa-lightbulb",
        img: "assets/images/soft-skills/problem-solving.svg",
      },
      {
        name: "Creativity",
        level: "intermediate",
        icon: "fas fa-paint-brush",
        img: "assets/images/soft-skills/creativity.png",
      },
      {
        name: "Adaptability",
        level: "intermediate",
        icon: "fas fa-sync-alt",
        img: "assets/images/soft-skills/adaptability.png",
      },
    ],
  };

  const grid = document.getElementById("skillsGrid");
  const buttons = document.querySelectorAll(".skills-toggle-btn");

  function loadSkills(category) {
    grid.classList.remove("show");
    setTimeout(() => {
      grid.innerHTML = "";
      skillData[category].forEach((skill, index) => {
        const card = document.createElement("div");
        card.classList.add("skill-card");

        card.setAttribute("data-aos", "flip-right");
        card.setAttribute("data-aos-delay", 300 + index * 50);

        card.innerHTML = `
          <div class="skill-card-inner">
            <div class="skill-icon">
              <img src="${skill.img}" alt="${skill.name} icon">
            </div>
            <h3 class="skill-name">${skill.name}</h3>
            <span class="skill-level">${skill.level}</span>
          </div>
        `;
        grid.appendChild(card);
      });

      setTimeout(() => {
        grid.classList.add("show");
        //Refresh AOS after adding new elements
        if (AOS) AOS.refresh();
      }, 100);
    }, 200);
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      loadSkills(btn.dataset.category);
    });
  });

  // Default load
  loadSkills("programming");
});

//handling data-aos on media query
window.addEventListener("load", () => {
  const skillsToggle = document.querySelector(".skills-toggle");
  const aboutToggle = document.querySelector(".toggle-bar");

  function handleAOSAttribute() {
    if (window.innerWidth < 1125) {
      // Remove the attribute if it exists
      if (skillsToggle.hasAttribute("data-aos")) {
        skillsToggle.removeAttribute("data-aos");
        skillsToggle.removeAttribute("data-aos-delay");
      }
      if (aboutToggle.hasAttribute("data-aos")) {
        aboutToggle.removeAttribute("data-aos");
        aboutToggle.removeAttribute("data-aos-delay");
      }
    } else {
      // Re-add AOS attributes if needed when resizing back to larger screens
      if (!skillsToggle.hasAttribute("data-aos")) {
        skillsToggle.setAttribute("data-aos", "zoom-in-up");
        skillsToggle.setAttribute("data-aos-delay", "300");
      }
      if (!aboutToggle.hasAttribute("data-aos")) {
        aboutToggle.setAttribute("data-aos", "zoom-in-up");
        aboutToggle.setAttribute("data-aos-delay", "300");
      }
    }
  }
  handleAOSAttribute(); // Run once on page load
  window.addEventListener("resize", handleAOSAttribute); // Run again whenever the window is resized
});

//handling skill-section toggle button click in mediaquery
const skillsCategoryBtn = document.getElementById("open-skills-toggle-button");
const toggleBarSkills = document.querySelector(".skills-toggle");
const skills = document.querySelector("#skills");

skillsCategoryBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  skillsCategoryBtn.classList.toggle("active");
  toggleBarSkills.classList.toggle("show");
});
skills.addEventListener("click", (e) => {
  if (
    !toggleBarSkills.contains(e.target) &&
    !skillsCategoryBtn.contains(e.target)
  ) {
    toggleBarSkills.classList.remove("show");
    skillsCategoryBtn.classList.remove("active");
  }
});
window.addEventListener("resize", ()=>{
  if(window.innerWidth >= 1125){
    toggleBarSkills.classList.remove("show");
    skillsCategoryBtn.classList.remove("active");
  }
});





// ====================== PROJECTS SECTION ======================

// Loding the projects
document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "Brain Tumor Segmentation",
      img: "assets/images/projects/AI-and-ML-projects.png",
      demo: "#",
      github: "#",
      description:
        "An AI-powered model for segmenting brain tumors from MRI scans using U-Net.",
      usage:
        "Helps radiologists identify tumor boundaries for treatment planning.",
      tech: [
        { name: "Python", value: 90 },
        { name: "TensorFlow", value: 85 },
        { name: "U-Net", value: 80 },
        { name: "Flask", value: 75 },
      ],
    },
    {
      title: "Brain Tumor Segmentation",
      img: "assets/images/projects/AI-and-ML-projects.png",
      demo: "#",
      github: "#",
      description:
        "An AI-powered model for segmenting brain tumors from MRI scans using U-Net.",
      usage:
        "Helps radiologists identify tumor boundaries for treatment planning.",
      tech: [
        { name: "Python", value: 90 },
        { name: "TensorFlow", value: 85 },
        { name: "U-Net", value: 80 },
        { name: "Flask", value: 75 },
      ],
    },
    {
      title: "Brain Tumor Segmentation",
      img: "assets/images/projects/AI-and-ML-projects.png",
      demo: "#",
      github: "#",
      description:
        "An AI-powered model for segmenting brain tumors from MRI scans using U-Net.",
      usage:
        "Helps radiologists identify tumor boundaries for treatment planning.",
      tech: [
        { name: "Python", value: 90 },
        { name: "TensorFlow", value: 85 },
        { name: "U-Net", value: 80 },
        { name: "Flask", value: 75 },
      ],
    },
    {
      title: "Brain Tumor Segmentation",
      img: "assets/images/projects/AI-and-ML-projects.png",
      demo: "#",
      github: "#",
      description:
        "An AI-powered model for segmenting brain tumors from MRI scans using U-Net.",
      usage:
        "Helps radiologists identify tumor boundaries for treatment planning.",
      tech: [
        { name: "Python", value: 90 },
        { name: "TensorFlow", value: 85 },
        { name: "U-Net", value: 80 },
        { name: "Flask", value: 75 },
      ],
    },
    {
      title: "Brain Tumor Segmentation",
      img: "assets/images/projects/AI-and-ML-projects.png",
      demo: "#",
      github: "#",
      description:
        "An AI-powered model for segmenting brain tumors from MRI scans using U-Net.",
      usage:
        "Helps radiologists identify tumor boundaries for treatment planning.",
      tech: [
        { name: "Python", value: 90 },
        { name: "TensorFlow", value: 85 },
        { name: "U-Net", value: 80 },
        { name: "Flask", value: 75 },
      ],
    },
    {
      title: "Brain Tumor Segmentation",
      img: "assets/images/projects/AI-and-ML-projects.png",
      demo: "#",
      github: "#",
      description:
        "An AI-powered model for segmenting brain tumors from MRI scans using U-Net.",
      usage:
        "Helps radiologists identify tumor boundaries for treatment planning.",
      tech: [
        { name: "Python", value: 90 },
        { name: "TensorFlow", value: 85 },
        { name: "U-Net", value: 80 },
        { name: "Flask", value: 75 },
      ],
    },
    {
      title: "Brain Tumor Segmentation",
      img: "assets/images/projects/AI-and-ML-projects.png",
      demo: "#",
      github: "#",
      description:
        "An AI-powered model for segmenting brain tumors from MRI scans using U-Net.",
      usage:
        "Helps radiologists identify tumor boundaries for treatment planning.",
      tech: [
        { name: "Python", value: 90 },
        { name: "TensorFlow", value: 85 },
        { name: "U-Net", value: 80 },
        { name: "Flask", value: 75 },
      ],
    },
    {
      title: "Brain Tumor Segmentation",
      img: "assets/images/projects/AI-and-ML-projects.png",
      demo: "#",
      github: "#",
      description:
        "An AI-powered model for segmenting brain tumors from MRI scans using U-Net.",
      usage:
        "Helps radiologists identify tumor boundaries for treatment planning.",
      tech: [
        { name: "Python", value: 90 },
        { name: "TensorFlow", value: 85 },
        { name: "U-Net", value: 80 },
        { name: "Flask", value: 75 },
      ],
    },
    {
      title: "Brain Tumor Segmentation",
      img: "assets/images/projects/educational-site.jpg",
      demo: "#",
      github: "#",
      description:
        "An AI-powered model for segmenting brain tumors from MRI scans using U-Net.",
      usage:
        "Helps radiologists identify tumor boundaries for treatment planning.",
      tech: [
        { name: "Python", value: 90 },
        { name: "TensorFlow", value: 85 },
        { name: "U-Net", value: 80 },
        { name: "Flask", value: 75 },
      ],
    },
  ];

  const container = document.getElementById("projectsContainer");
  const swiperWrapper = document.querySelector(".swiper-wrapper");

  const renderProjects = () => {
    container.innerHTML = "";
    swiperWrapper.innerHTML = "";

    projects.forEach((p, index) => {
      const card = document.createElement("div");
      card.classList.add("project-card");
      card.setAttribute("data-aos", "fade-up");
      card.setAttribute("data-aos-delay", `${350 + 100 * (index % 3)}`); // staggered effect
      card.setAttribute("data-aos-duration", "800");

      card.innerHTML = `
        <img src="${p.img}" alt="${p.title}">
        <div class="project-info">
          <h3>${p.title}</h3>
          <div class="project-links">
            <a href="${p.demo}" title="View Demo" target="_blank" ><i class="fa-regular fa-circle-right"></i></a>
            <button class="view-more-button">View More</button>
            <a href="${p.github}" title="Source Code" target="_blank"><i class="fa-brands fa-github"></i></a>
          </div>
        </div>
      `;
      card.addEventListener("click", () => openModal(index));
      container.appendChild(card);

      //swiper slides
      const slide = card.cloneNode(true);
      slide.classList.add("swiper-slide");
      slide.removeAttribute("data-aos");
      slide.addEventListener("click", () => openModal(index));
      swiperWrapper.appendChild(slide);

      AOS.refresh();
    });
  };

  renderProjects();

  //swiper init
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    allowTouchMove: true,
    speed: 700,
    keyboard: { enabled: true },
    mousewheel: { invert: false, sensitivity: 0.5 },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".custom-button-next",
      prevEl: ".custom-button-prev",
    },
    breakpoints: {720: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
  });

  //Toggle views
  const projButtons = document.querySelectorAll(".projects-toggle-btn");
  const swiperContainerEl = document.getElementById("swiperContainer");
  const projSection = document.getElementById("projects");

  projButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      projButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const view = btn.dataset.view;
      container.className = `projects-container ${view}-view`;
      if (view === "swiper") {
        swiperContainerEl.style.display = "block";
        container.style.display = "none";
        projSection.classList.add("swiper-active");
        if (swiper) swiper.update();
      } else {
        swiperContainerEl.style.display = "none";
        container.style.display = "";
        projSection.classList.remove("swiper-active");
      }
    });
  });


  //Project Modal Handling
  const modal = document.getElementById("projectModal");
  const modalSwiperWrapper = document.getElementById("modalSwiperWrapper");

  //function for reset scroll while opening/swiping to a new modal
  function resetModalScroll(){
    if(modal) modal.scrollTo({top: 0, behaviour: "auto"});
  }


  let modalSwiper = null;

  function openModal(startIndex = 0) {
    modal.style.display = "flex";
    modalSwiperWrapper.innerHTML = "";
    document.body.classList.add("modal-open");

    projects.forEach((p, index) => {
      const modalSlide = document.createElement("div");
      modalSlide.classList.add("swiper-slide");

      modalSlide.innerHTML = `
        <div class="modal-content">
          <span class="close-btn"><i class="fa-solid fa-circle-xmark"></i></span>
          <div class="modal-flex">
            <div class="modal-first-flex">
              <img id="modalImage" src="${p.img}" alt="${p.title}">
              <div class="tech">
                <h4>Technologies Used</h4>
                <div id="techBars">
                  ${p.tech
                    .map(
                      (t) => `
                      <div class="tech-bar">
                        <span>${t.name}</span>
                        <div class="bar">
                          <div class="fill" style="--target-width: ${t.value}%; width: 0%;"></div>
                        </div>
                      </div>
                    `
                    )
                    .join("")}
                </div>
              </div>
            </div>

            <div class="modal-second-flex">
              <h3 id="modalTitle">${p.title}</h3>
              <div class="modal-about-and-link">
                <div class="about-modal">
                  <div class="about-modal-project">
                    <p class="about-modal-title">About</p>
                    <p id="modalDescription">${p.description}</p>
                  </div>
                  <div class="about-modal-project">
                    <p class="about-modal-title">Practical Usage</p>
                    <p id="modalUsage">${p.usage}</p>
                  </div>
                </div>

                <div class="modal-links">
                  <a id="demoLink" href="${p.demo}" target="_blank">Demo</a>
                  <a id="codeLink" href="${p.code}" target="_blank">Code</a>
                </div>    
              </div>  
            </div>
          </div>
        </div>
      `;

      modalSwiperWrapper.appendChild(modalSlide);
      resetModalScroll();

      setTimeout(() => {
        modal.classList.add("modal-arrows-visible");
      }, 600);  
    });

    if (modalSwiper) modalSwiper.destroy(true, true);
    modalSwiper = new Swiper(".projects-modal-swiper", {
      initialSlide: startIndex,
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      allowTouchMove: true,
      speed: 500,
      keyboard: { enabled: true },
      effect: "creative",
      creativeEffect: {
        prev: { translate: ["-120%", 0, -500], opacity: 0.4, scale: 0.9 },
        next: { translate: ["120%", 0, -500], opacity: 0.4, scale: 0.9 },
      },
      navigation: {
        nextEl: ".modal-button-next",
        prevEl: ".modal-button-prev",
      },
    });
  }

  //closing modal when clicking outside modal-content and arrows
  modal.addEventListener("click", (e) => {
    const isCloseBtn = e.target.closest(".close-btn");
    const isOutsideModalContent = !e.target.closest(".modal-content");
    const isOutsideNavArrows = !e.target.closest(".modal-button-prev, .modal-button-next");

    if (isCloseBtn || (isOutsideModalContent && isOutsideNavArrows)) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
      modal.classList.remove("modal-arrows-visible");
    }
  });

  //Maintaining arrow visibility while modal scrolling
  if (modal) {
    const checkScrollPosition = () => {
      const isSmallWidth = window.innerWidth <= 1015;
      const scrollTop = modal.scrollTop;
      const isAtTop = scrollTop < 5;
      const isAtBottom = scrollTop + modal.clientHeight >= modal.scrollHeight - 20;

      if(isSmallWidth){
        // Case 1: At the very top → show arrows normally
        if (isAtTop) {
          modal.classList.add("modal-arrows-visible");
          modal.classList.remove("show-bottom-arrows");
          return;
        }

        // Case 2: In between top and bottom → hide arrows
        if (!isAtBottom) {
          modal.classList.remove("modal-arrows-visible", "show-bottom-arrows");
          return;
        }

        // Case 3: At bottom → show arrows at bottom
        modal.classList.add("show-bottom-arrows", "modal-arrows-visible");
      }
    }

    modal.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", checkScrollPosition);
  }
});



// ===================== CONTACT SECTION =======================

(function () {
  emailjs.init("YJ5zLYnyIxn_xcryd"); //emailjs initialization
})();

//float label handler
document
  .querySelectorAll(".input-group input, .input-group textarea")
  .forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value.trim() !== "") {
        input.classList.add("filled");
      } else {
        input.classList.remove("filled");
      }
    });
  });

//contact form submission
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const btn = contactForm.querySelector(".btn-submit");
  btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending...`;
  btn.disabled = true;

  //collect form data
  const fullName = document.getElementById("fullName").value.trim();
  const phNumber = document.getElementById("phNumber").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const templateParams = {
    fullName: fullName,
    phNumber: phNumber || "Not Provided",
    email: email,
    message: message,
  };

  //use emailJs for getting mail
  emailjs
    .send("service_beyrqb2", "template_gsg1lln", templateParams)
    .then(() => {
      formMsg.textContent = "☑️ Message sent successfully!";
      formMsg.style.color = "#00b4d8";

      contactForm.reset();
      contactForm.querySelectorAll("input, textarea").forEach((field) => {
        field.classList.remove("filled");
      });

      btn.innerHTML = `<i class=""fa-solid fa-paper-plane"></i><span>Send Message</span>`;
      btn.disabled = false;

      setTimeout(() => {
        formMsg.textContent = "";
      }, 3000);
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      formMsg.textContent =
        "❌ Failed to send message. Please try again later.";
      formMsg.style.color = "#f44336";
      btn.innerHTML = `<i class=""fa-solid fa-paper-plane"></i><span>Send Message</span>`;
      btn.disabled = false;
    });
});




// ===============Footer ===============
// Dynamically update year
document.getElementById("year").textContent = new Date().getFullYear();

//adding the effect on nav menu items when they are clicked
const items_menu = document.querySelectorAll(".menu a");
items_menu.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault(); //prevents the default action of the anchor tag
    items_menu.forEach((i) => i.classList.remove("active"));

    const targetid = this.getAttribute("href");
    const targetSection = document.querySelector(targetid);
    this.classList.add("active");
    targetSection.scrollIntoView({ behavior: "smooth" });

    // setTimeout(() => {
    //   this.classList.remove("active");
    // }, 1000);
  });
});




/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 78,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active");
    } else {
      sectionsClass.classList.remove("active");
    }
  });
};
window.addEventListener("scroll", scrollActive);
