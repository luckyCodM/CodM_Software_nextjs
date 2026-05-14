
const journeyItems = [
  {
    year: "2023",
    title: "Company Started",
    description:
      "CodM Software began with a clear vision to help businesses build reliable digital products and modern web solutions.",
  },
  {
    year: "2024",
    title: "First Clients",
    description:
      "We partnered with our first clients and delivered practical software solutions focused on quality, speed, and business value.",
  },
  {
    year: "2025",
    title: "Expanded Services",
    description:
      "Our services grew across web development, app development, cloud solutions, CRM support, and custom business platforms.",
  },
  {
    year: "2026",
    title: "AI, Cloud & Salesforce Growth",
    description:
      "We are moving forward with AI-powered solutions, cloud technology, Salesforce services, and smarter automation for growing businesses.",
  },
];

export default function Section4() {
  return (
    <section className="journey-section sp">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto text-center">
            <div className="heading1">
              <span className="span">Our Journey</span>
              <h2>The CodM Software Journey</h2>
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