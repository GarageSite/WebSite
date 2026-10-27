
const animatedElements = document.querySelectorAll(
    ".hero-content, .hero-visual, .section-heading, " +
    ".service-card, .project-card, .about-content, " +
    ".about-visual, .contact-card, .projects-cta, " +
    ".about-cta, .contact-bottom, .bottom-cta"
);

animatedElements.forEach((element) => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

animatedElements.forEach((element) => {
    observer.observe(element);
});
