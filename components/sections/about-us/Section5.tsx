"use client";

import { useState } from "react";

type CertificationCard = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

type CertificationCategory = {
  title: string;
  cards: CertificationCard[];
};

const certificationCategories: CertificationCategory[] = [
  {
    title: "Architect Certifications",
    cards: [
      {
        title: "Application Architect",
        description: "Expert in building scalable Salesforce applications.",
        image: "/assets/img/about/Certifications/Application-Architect.avif",
        imageAlt: "Salesforce Certified Application Architect",
      },
      {
        title: "B2C Solution Architect",
        description: "Specialist in end-to-end B2C Salesforce solutions.",
        image: "/assets/img/about/Certifications/B2C-Solution-Architect.avif",
        imageAlt: "Salesforce Certified B2C Solution Architect",
      },
      {
        title: "Data Architect",
        description: "Skilled in designing secure, enterprise-grade data models.",
        image: "/assets/img/about/Certifications/Data-Architect.avif",
        imageAlt: "Salesforce Certified Data Architect",
      },
    ],
  },
  {
    title: "OmniStudio Expertise",
    cards: [
      {
        title: "OmniStudio Consultant",
        description: "Expert in guided digital journeys and OmniStudio delivery.",
        image: "/assets/img/about/Certifications/OmniStudio-Consultant.avif",
        imageAlt: "Salesforce Certified OmniStudio Consultant",
      },
      {
        title: "OmniStudio Developer",
        description: "Builds OmniScripts, DataRaptors, and integration procedures.",
        image: "/assets/img/about/Certifications/OmniStudio-Developer.avif",
        imageAlt: "Salesforce Certified OmniStudio Developer",
      },
    ],
  },
  {
    title: "Platform Expertise",
    cards: [
      {
        title: "Platform App Builder",
        description: "Creates CRM apps using automation, security, and data design.",
        image: "/assets/img/about/certifications/Platform-App-Builder.avif",
        imageAlt: "Salesforce Certified Platform App Builder",
      },
      {
        title: "Platform Developer I",
        description: "Builds reliable Salesforce applications with Apex and LWC.",
        image: "/assets/img/about/Certifications/Platform-Developer-I.avif",
        imageAlt: "Salesforce Certified Platform Developer I",
      },
      {
        title: "Platform Developer II",
        description: "Connects Salesforce with cloud, API, and enterprise systems.",
        image: "/assets/img/about/Certifications/Platform-Developer-II.avif",
        imageAlt: "Salesforce Certified Platform Developer II",
      },
    ],
  },
  {
    title: "BA & Admin Expertise",
    cards: [
      {
        title: "Business Analyst",
        description: "Turns business goals into clear Salesforce solutions.",
        image: "/assets/img/about/certifications/Business-Analyst.avif",
        imageAlt: "Salesforce Certified Business Analyst",
      },
      {
        title: "Administrator",
        description: "Manages users, data, security, reports, and automation.",
        image: "/assets/img/about/certifications/Administrator.avif",
        imageAlt: "Salesforce Certified Administrator",
      },      {
        title: "Advanced Administrator",
        description: "Handles complex configuration and CRM optimization.",
        image: "/assets/img/about/certifications/Advanced-Administrator.avif",
        imageAlt: "Salesforce Certified Advanced Administrator",
      },
    ],
  },
  {
    title: "Financial Services Cloud",
    cards: [
      {
        title: "Financial Services Cloud",
        description: "Implements Salesforce for finance, banking, and advisory teams.",
        image: "/assets/img/about/Certifications/Financial-Services-Cloud.avif",
        imageAlt: "Salesforce Financial Services Cloud",
      },
    ],
  },
  {
    title: "Agentic AI",
    cards: [
      {
        title: "Agentforce Specialist",
        description: "Creates AI-powered CRM experiences for modern teams.",
        image: "/assets/img/about/Certifications/Agentforce-Specialist.avif",
        imageAlt: "Salesforce Agentforce Specialist",
      },
    ],
  },
];

export default function Section5() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = certificationCategories[activeIndex];

  return (
    <section className="codm-certifications-section">
      <div className="codm-certifications-container">
        <div className="codm-certifications-heading">
          <span>Our Certifications</span>
          <h2>Verified Professional Expertise</h2>
        </div>

        <div className="codm-certifications-content">
          <div className="codm-certifications-sidebar">
            <h3>Salesforce Accreditation</h3>

            <div className="codm-certifications-menu">
              {certificationCategories.map((category, index) => (
                <button
                  className={`codm-certifications-menu-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  key={category.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          <div className="codm-certifications-line" />

          <div className="codm-certifications-cards">
            {activeCategory.cards.map((card) => (
              <article className="codm-certifications-card" key={card.title}>
                <div className="codm-certifications-image">
                  <img src={card.image} alt={card.imageAlt} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}