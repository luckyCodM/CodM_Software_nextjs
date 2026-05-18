
const journeyItems = [
  {
    year: "2021",
    title: "Company Started",
    description:
      "CodM Software was founded by Anjali Kumari and began operations in 2021 with a vision to drive innovation and deliver tailored solutions that make an impact in the Salesforce ecosystem.",
  },
  {
    year: "2022",
    title: "Becoming a Salesforce Consultant",
    description:
      "With continuous dedication to our work and a commitment to learning, growth and expertise, CodM Software evolved into a Salesforce Consulting Partner within a year of starting its operations.",
  },
  {
    year: "2024",
    title: "Expanding the Team",
    description:
      "By 2024, our team had grown to 20+ skilled and certified professionals, strengthening our capabilities to deliver high-quality Salesforce solutions to our global clients.",
  },
  {
    year: "2025",
    title: "Recognized Growth and Global Presence",
    description:
      "In 2025, CodM Software achieved another milestone of becoming a Salesforce Ridge Partner and expanded its presence on the Salesforce AppExchange, marking a new chapter of innovation and credibility.",
  },
  {
    year: "2026",
    title: "Looking Ahead",
    description:"As we look to the future, CodM Software remains committed to excellence, innovation, and delivering exceptional value to our clients worldwide, continuing our journey of growth and success in the Salesforce ecosystem.",
  },
];

export default function Section4() {
  return (
    <section className="journey-section sp">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto text-center">
            <div className="heading1">
              <span className="span">CodM Story</span>
              <h2>From Vision to Salesforce Success</h2>
              <div className="space16" />
              <p>
                From our beginning to our continued growth, every step reflects
                our commitment to building dependable digital solutions for
                modern businesses.
              </p>
            </div>
          </div>
        </div>

        <div className="space50" />

        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className="journey-timeline">
              {journeyItems.map((item) => (
                <div className="journey-item" key={item.year}>
                  <div className="journey-year">{item.year}</div>
                  <div className="journey-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}