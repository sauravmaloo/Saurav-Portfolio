
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const projects = {
  multilingual: {
    title: "AI-Assisted Multilingual Learning Production",
    intro: "Approximately 75% less scripting time: around 2 hours with an AI-assisted process, compared with around 8 hours previously for a 2–3 minute video script.",
    sections: [
      {
        heading: "Challenge and outcome",
        bullets: [
          "The earlier process took approximately 8 hours to produce a 2–3 minute video script.",
          "With an AI-assisted process, scripting took approximately 2 hours, including multiple drafts, rework, and approval — a 75% reduction in scripting time."
        ]
      },
      {
        heading: "Approach and tools",
        bullets: [
          "The scripting-time reduction reflects the AI-assisted process; tools supported different parts of the broader production workflow.",
          "ChatGPT, Gemini, ElevenLabs, and Beyond were used across the broader production workflow.",
          "ChatGPT and Beyond supported translation workflows.",
          "Beyond and ElevenLabs supported voiceover production."
        ]
      }
    ]
  },

  operations: {
    title: "Learning Operations Transformation",
    intro: "A 3-person team delivered better work than initially planned for a 5–7-person team, with AI-assisted workflows supporting a leaner production approach.",
    sections: [
      {
        heading: "Challenge and approach",
        text: "The course-development plan initially called for a 5–7-person team. AI-assisted workflows supported delivery by a 3-person team."
      },
      {
        heading: "Outcome",
        text: "The 3-person team delivered better work than initially planned."
      },
      {
        heading: "Operations focus",
        bullets: [
          "Workflow visibility and coordination",
          "Standardized processes and governance",
          "Consistent learning delivery"
        ]
      }
    ]
  },

  delivery: {
    title: "Stakeholder-to-Deployment Learning Delivery Framework",
    intro: "A structured approach connecting learning requirements with development, deployment, and continuous improvement.",
    sections: [
      {
        heading: "Challenge and contribution",
        text: "Connect stakeholder learning requirements to development and deployment through a structured end-to-end delivery approach."
      },
      {
        heading: "Approach",
        bullets: [
          "Requirements intake and discovery",
          "Learning development and deployment",
          "Governance and continuous improvement"
        ]
      }
    ]
  }
};

const experiences = {
  vodafone: {
    employer: "Vodafone Idea Limited",
    role: "Senior Instructional Designer",
    dates: "March 2026 – September 2026",
    intro: "AI-assisted learning production and Q-DAC LMS support contributed to qualitative improvements in operational visibility, turnaround, and perceived content quality.",
    sections: [
      {
        heading: "Approach and contributions",
        bullets: [
          "Developed AI-assisted learning solutions in Storyline and Rise.",
          "Supported Q-DAC LMS operations, reporting, deployment, and backend workflows.",
          "Coordinated with stakeholders on multilingual learning solutions."
        ]
      },
      {
        heading: "Qualitative impact",
        text: "Content-production workflows were streamlined, operational visibility and turnaround improved, and perceived content quality strengthened. These improvements are qualitative; no numerical measurement is available."
      },
      {
        heading: "Relevant tools",
        text: "Storyline, Rise, ChatGPT, Gemini, HeyGen, and ElevenLabs."
      }
    ]
  },
  dow: {
    employer: "Dow Chemical International",
    role: "Learning Specialist",
    dates: "March 2024 – March 2026",
    intro: "Developed 200+ modules supporting 40,000+ learners across 22 languages, in collaboration with 25+ global stakeholders.",
    sections: [
      {
        heading: "Challenge and delivery",
        bullets: [
          "Developed 200+ learning modules across business functions and content in 22 languages, supporting 40,000+ learners.",
          "Collaborated with 25+ global stakeholders.",
          "Created SOPs, templates, and workflows supporting an 8–10-person team."
        ]
      },
      {
        heading: "Approach and impact",
        bullets: [
          "Developed interactive learning using branching, simulations, and gamification.",
          "SOPs, templates, and workflows reduced rework and coordination effort, improved consistency, and generally improved delivery speed."
        ]
      },
      {
        heading: "Quality and learner feedback",
        text: "Stakeholders responded positively to content quality. Learners found content visually engaging and easier to understand. Completion-rate improvement was slight and has not been quantified."
      },
      {
        heading: "Relevant tools",
        text: "Storyline, Rise, ChatGPT, and Microsoft Copilot."
      }
    ]
  },
  lester: {
    employer: "Lester Infoservices",
    role: "Research Analyst & Content Developer",
    dates: "June 2022 – October 2023",
    intro: "Researched more than 100 client products, services, and industries to inform profile and promotional videos and marketplace listings.",
    sections: [
      {
        heading: "Challenge and contribution",
        bullets: [
          "Researched more than 100 client products, services, and industries.",
          "Created scripts and content for profile videos, promotional videos, and marketplace listings.",
          "Collaborated with clients, editors, and production teams."
        ]
      }
    ]
  }
};

const dialog = document.getElementById("caseStudyDialog");
const title = document.getElementById("caseStudyTitle");
const label = document.getElementById("caseStudyLabel");
const intro = document.getElementById("caseStudyIntro");
const details = document.getElementById("caseStudyDetails");
const closeButton = document.getElementById("closeCaseStudy");

function renderDetails(sections) {
  details.replaceChildren();

  sections.forEach((section) => {
    const block = document.createElement("section");
    block.className = "case-study-block";

    const heading = document.createElement("h3");
    heading.textContent = section.heading;
    block.appendChild(heading);

    if (section.bullets) {
      const list = document.createElement("ul");

      section.bullets.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
      });

      block.appendChild(list);
    } else {
      const paragraph = document.createElement("p");
      paragraph.textContent = section.text;
      block.appendChild(paragraph);
    }

    details.appendChild(block);
  });
}

document.querySelectorAll("[data-project], [data-experience]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const project = trigger.dataset.project && projects[trigger.dataset.project];
    const experience = trigger.dataset.experience && experiences[trigger.dataset.experience];

    if (!dialog || !title || !label || !intro || !details) return;

    if (project) {
      title.textContent = project.title;
      label.textContent = "PROJECT CASE STUDY";
      intro.textContent = project.intro;
      renderDetails(project.sections);
    } else if (experience) {
      title.textContent = experience.employer;
      label.textContent = "WORK EXPERIENCE";
      intro.textContent = experience.intro;
      renderDetails([
        { heading: "Role", text: experience.role },
        { heading: "Employment dates", text: experience.dates },
        ...experience.sections
      ]);
    } else {
      return;
    }

    dialog.showModal();
  });
});

if (closeButton && dialog) {
  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      dialog.close();
    }
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}
