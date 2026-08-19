// Scrollspy functionality (IntersectionObserver)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const navLink = document.querySelector(`[href="#${id}"]`);

      if (!navLink) return; // Falls kein passender Link existiert, abbrechen

      if (entry.isIntersecting) {
        // Use Tailwind classes to highlight the active link
        navLink.classList.add(
          "dark:text-primary",
          "font-semibold",
          "border-b-2",
          "dark:border-primary",
          "border-brand-primary",
          "pb-1",
        );
      } else {
        navLink.classList.remove(
          "dark:text-primary",
          "font-semibold",
          "border-b-2",
          "dark:border-primary",
          "border-brand-primary",
          "pb-1",
        );
      }
    });
  },
  { threshold: 0.5 },
);

document
  .querySelectorAll("section")
  .forEach((section) => observer.observe(section));

// Modal functionality
function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
  document.body.style.overflow = "auto";
}

document.querySelectorAll(".btn-read-more, #btnImprint").forEach((button) => {
  button.addEventListener("click", (event) => {
    openModal(event.target.dataset.projectId);
  });
});

document
  .querySelectorAll(".modal-close-btn, #btnCloseImprint")
  .forEach((button) => {
    button.addEventListener("click", (event) => {
      closeModal(event.target.dataset.projectId);
    });
  });

// Light/Dark mode
const themeToggleBtn = document.getElementById("themeToggleBtn");
const htmlElement = document.documentElement;

// Check for saved theme preference or default to dark
themeToggleBtn.addEventListener("click", () => {
  if (htmlElement.classList.contains("dark")) {
    htmlElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    htmlElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

// Mobile Navigation
const toggle = document.getElementById("drawer-toggle");
const menuLinks = document.querySelectorAll("#mobile-nav-links a");

menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Prevent immediate navigation to show closing animation
    const targetHref = link.getAttribute("href");
    if (targetHref && targetHref !== "#") {
      e.preventDefault();

      // Uncheck toggle to trigger closing animation
      toggle.checked = false;

      // Navigate after animation completes (approx 400ms based on CSS transition)
      setTimeout(() => {
        if (link.getAttribute("target") === "_blank") {
          window.open(targetHref, "_blank");
        } else {
          window.location.href = targetHref;
        }
      }, 100);
    }
  });
});

// Career Show More / Show Less Toggle
const toggleCareerBtn = document.getElementById("toggleCareerBtn");
if (toggleCareerBtn) {
  toggleCareerBtn.addEventListener("click", () => {
    const extraSteps = document.querySelectorAll(".extra-career-step");
    let isHidden = false;
    
    extraSteps.forEach(step => {
      if (step.classList.contains("hidden")) {
        step.classList.remove("hidden");
        isHidden = true;
      } else {
        step.classList.add("hidden");
      }
    });

    if (isHidden) {
      toggleCareerBtn.innerText = "Show Less";
    } else {
      toggleCareerBtn.innerText = "Show More";
      const careerSection = document.getElementById("career");
      if (careerSection) {
        careerSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
}


