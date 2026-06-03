export type CaseStudy = {
    slug: string;
    category: string;
    industry: string;
    title: string;
    seoTitle: string;
    summary: string;
    description: string;
    image: string;
    imageAlt: string;
    services: string[];
    technologies: string[];
    metrics: { value: string; label: string }[];
    client: {
        name: string;
        overview: string;
        businessModel: string;
    };
    challenges: string[];
    solution: string[];
    process: string[];
    features: string[];
    comparison: { before: string; after: string }[];
    testimonial: string;
    relatedServices: { label: string; href: string }[];
};

const defaultProcess = [
    "Discovery Workshop",
    "Requirement Gathering",
    "Architecture Planning",
    "Salesforce Configuration",
    "Integration & Testing",
    "Go Live & Support",
];

const defaultServices = [
    { label: "Salesforce Consulting", href: "/salesforce-consulting" },
    { label: "Agentforce AI", href: "/salesforce-agentforce-ai-company-india" },
    { label: "Financial Services Cloud", href: "/salesforce-financial-services-cloud-consultant" },
    { label: "CRM Integration", href: "/customer-360-degree" },
    { label: "Education Cloud", href: "/education-cloud" },
    { label: "Staff Augmentation", href: "/contact" },
];

export const caseStudies: CaseStudy[] = [
    {
        slug: "rjim-salesforce-financial-services-cloud",
        category: "Financial Services Cloud",
        industry: "Asset Management",
        title: "RJIM Salesforce Financial Services Cloud Implementation",
        seoTitle: "RJIM Salesforce FSC Case Study | CodM Software",
        summary:
            "A secure Salesforce Financial Services Cloud implementation with role-based access, scalable permission architecture and Sales Cadence automation.",
        description:
            "Explore how CodM Software implemented Salesforce Financial Services Cloud for RJIM with secure role-based access, Sales Cadence automation, and scalable CRM architecture.",
        image: "/assets/img/blog/financial-services-cloud.png",
        imageAlt: "Salesforce Financial Services Cloud dashboard case study",
        services: ["Financial Services Cloud", "Sales Cadence", "Security Architecture", "Workflow Automation"],
        technologies: ["Salesforce FSC", "Sales Cadence", "Permission Sets", "Role Hierarchy", "Lightning Experience", "Automation Flows"],
        metrics: [
            { value: "60%", label: "Productivity Increase" },
            { value: "45%", label: "Faster Onboarding" },
            { value: "35%", label: "Reduced Manual Effort" },
            { value: "Secure", label: "Role-Based Access" },
        ],
        client: {
            name: "Raymond James Investment Management",
            businessModel: "Global asset-management organization",
            overview:
                "Raymond James Investment Management combines specialized investment team agility with the strength of a full-service firm, supporting long-term financial growth and a growing investor ecosystem.",
        },
        challenges: [
            "Complex role-based access requirements across departments",
            "Manual client follow-ups and inconsistent outreach",
            "Profile overload risk while scaling permissions",
            "Limited visibility into client engagement responses",
            "Need for secure object and field-level access",
            "Separate intermediary and institutional user experiences",
        ],
        solution: [
            "Implemented Salesforce Financial Services Cloud with personalized apps for different teams.",
            "Designed Organization-Wide Defaults, role hierarchy, profiles, permission sets and permission set groups.",
            "Created record-type separation for intermediary and institutional workflows.",
            "Built Sales Cadence automation with main, positive and negative response tracks.",
            "Standardized templates, entry rules, exit rules and activity scheduling.",
            "Validated security and cadence logic through testing and user training.",
        ],
        process: defaultProcess,
        features: ["Financial Services Cloud", "Sales Cadence", "Permission Set Groups", "Role Hierarchy", "Client Lifecycle Tracking", "Automated Follow-Ups", "Field-Level Security", "Lightning Apps"],
        comparison: [
            { before: "Manual follow-ups", after: "Automated Sales Cadence workflows" },
            { before: "Complex profile management", after: "Scalable permission set architecture" },
            { before: "Limited response tracking", after: "Clear client engagement visibility" },
            { before: "Shared user experience", after: "Personalized Salesforce apps" },
        ],
        testimonial:
            "CodM Software delivered a secure, scalable and efficient Salesforce FSC implementation that improved operational workflows and client engagement.",
        relatedServices: defaultServices,
    },
    {
        slug: "goeasy-salesforce-digital-transformation",
        category: "Salesforce Integration",
        industry: "Financial Services",
        title: "goeasy Salesforce & Digital Transformation",
        seoTitle: "goeasy Salesforce Digital Transformation Case Study | CodM Software",
        summary:
            "A Salesforce and MuleSoft transformation covering delegated access, easyAdvantage+ quote retrieval, DCEVersion workflows and TA Intake automation.",
        description:
            "Explore how CodM Software helped goeasy modernize Salesforce, MuleSoft integrations, user delegation, easyAdvantage+ quotes, DCEVersion workflows and TA Intake automation.",
        image: "/assets/img/blog/blog2-img4.png",
        imageAlt: "Salesforce and MuleSoft integration case study",
        services: ["Salesforce Automation", "MuleSoft Integration", "Workflow Modernization", "Compliance Support"],
        technologies: ["Salesforce", "MuleSoft", "OAuth2", "REST APIs", "DCEVersion", "TA Intake", "Automation Workflows"],
        metrics: [
            { value: "OAuth2", label: "Secure Integrations" },
            { value: "Live", label: "Quote Retrieval" },
            { value: "Auto", label: "Workflow Orchestration" },
            { value: "Faster", label: "Document Turnaround" },
        ],
        client: {
            name: "goeasy",
            businessModel: "Canadian financial services company",
            overview:
                "goeasy supports customer onboarding, lending eligibility, account servicing and additional product workflows through Salesforce, MuleSoft and connected digital systems.",
        },
        challenges: [
            "Manual access workarounds and governance risk",
            "Tightly coupled Salesforce and FIMC workflows",
            "Delayed TA PDF delivery and resubmission handling",
            "Inconsistent DCEVersion validations",
            "Heavy maintenance caused by static quote handling",
            "Need for secure real-time backend integrations",
        ],
        solution: [
            "Created Salesforce user delegation workflows with restricted persona switching.",
            "Integrated Salesforce with FIMC through MuleSoft and OAuth2-secured APIs.",
            "Built easyAdvantage+ quote retrieval and customer search workflows.",
            "Enhanced DCEVersion handling with version-aware validation states.",
            "Improved TA Intake resubmission logic and button visibility rules.",
            "Centralized error handling, quote selection and loan shell updates.",
        ],
        process: defaultProcess,
        features: ["User Delegation", "easyAdvantage+ Quotes", "MuleSoft APIs", "DCEVersion Validation", "TA Intake Automation", "OAuth2 Security", "Loan Shell Workflows", "Error Logging"],
        comparison: [
            { before: "Manual access workarounds", after: "Governed delegated access" },
            { before: "Static quote references", after: "Live quote retrieval" },
            { before: "Delayed document processing", after: "Streamlined TA Intake flows" },
            { before: "Disconnected integrations", after: "Secure MuleSoft orchestration" },
        ],
        testimonial:
            "CodM Software helped modernize Salesforce workflows with secure integrations and cleaner automation across critical financial-service operations.",
        relatedServices: defaultServices,
    },
    {
        slug: "insurance-salesforce-platform-modernization",
        category: "Insurance Cloud",
        industry: "Insurance",
        title: "Modernizing an Insurance Platform with Salesforce",
        seoTitle: "Salesforce Insurance Platform Modernization Case Study | CodM Software",
        summary:
            "A Salesforce Lightning modernization project focused on org consolidation, LWC, Apex, Visualforce refactoring and secure integrations.",
        description:
            "Discover how CodM Software modernized an insurance platform with Salesforce Lightning, Apex, LWC, integrations and governed org consolidation.",
        image: "/assets/img/blog/Financial_Services_Cloud.png",
        imageAlt: "Insurance Salesforce platform modernization case study",
        services: ["Salesforce Lightning", "Apex", "LWC", "Org Consolidation"],
        technologies: ["Salesforce", "Lightning Experience", "Apex", "LWC", "Visualforce", "REST APIs", "Batch Apex"],
        metrics: [
            { value: "100%", label: "Lightning-First UX" },
            { value: "1", label: "Unified Platform" },
            { value: "Faster", label: "Page Performance" },
            { value: "Stable", label: "Integrations" },
        ],
        client: {
            name: "Large Insurance Organization",
            businessModel: "Insurance and risk-management ecosystem",
            overview:
                "The client managed policies, renewals, contracts, carrier appointments, agent operations, commissions and high-volume insurance data across multiple Salesforce environments.",
        },
        challenges: [
            "Salesforce Classic interfaces slowed adoption",
            "Legacy Visualforce pages limited scalability",
            "Multiple Salesforce orgs created inconsistent data",
            "Tightly coupled Apex logic made change harder",
            "High-data-volume processing required performance tuning",
            "Integrations needed stronger reliability and governance",
        ],
        solution: [
            "Migrated users and workflows toward a Lightning-first Salesforce experience.",
            "Modernized interfaces with Lightning Web Components and dynamic pages.",
            "Refactored Apex into reusable service patterns and async processing.",
            "Supported org consolidation governance and data model alignment.",
            "Improved REST integrations and monitoring for insurance workflows.",
            "Optimized SOQL, batch operations and high-volume data handling.",
        ],
        process: defaultProcess,
        features: ["Lightning Record Pages", "Dynamic Forms", "Lightning Web Components", "Bulkified Apex", "Batch Apex", "REST Integrations", "Security Governance", "Org Consolidation"],
        comparison: [
            { before: "Salesforce Classic UI", after: "Lightning-first experience" },
            { before: "Visualforce-heavy pages", after: "Modern LWC interfaces" },
            { before: "Multiple Salesforce orgs", after: "Single governed platform" },
            { before: "Performance bottlenecks", after: "Optimized queries and async processing" },
        ],
        testimonial:
            "CodM Software helped create a cleaner Salesforce platform that improved usability, governance and long-term scalability.",
        relatedServices: defaultServices,
    },
    {
        slug: "agentforce-ai-automation",
        category: "Agentforce AI",
        industry: "Customer Service",
        title: "Agentforce AI Workflow Transformation",
        seoTitle: "Agentforce AI Automation Case Study | CodM Software",
        summary: "An AI automation program improving customer response speed, task routing and Salesforce service productivity.",
        description: "See how CodM Software uses Agentforce AI to automate workflows, improve service response and increase Salesforce productivity.",
        image: "/assets/img/blog/omniscript-data.png",
        imageAlt: "Agentforce AI automation workflow case study",
        services: ["Agentforce AI", "Service Automation", "Salesforce Consulting"],
        technologies: ["Agentforce AI", "Salesforce CRM", "Service Cloud", "Automation Flows", "Prompt Workflows"],
        metrics: [
            { value: "50%", label: "Faster Response" },
            { value: "40%", label: "Less Manual Work" },
            { value: "24/7", label: "AI Assistance" },
            { value: "Higher", label: "Agent Productivity" },
        ],
        client: {
            name: "Service Operations Team",
            businessModel: "High-volume support organization",
            overview: "The client needed AI-assisted workflows that could answer common questions, route requests and support service agents inside Salesforce.",
        },
        challenges: ["Repeated customer questions", "Manual case triage", "Slow response times", "Inconsistent service guidance", "Limited agent capacity", "Need for governed AI responses"],
        solution: ["Mapped high-volume service journeys.", "Configured Agentforce AI answer workflows.", "Connected CRM data for contextual support.", "Created escalation and lead capture paths.", "Added response governance and fallback rules.", "Trained teams on AI-assisted service operations."],
        process: defaultProcess,
        features: ["AI Answers", "Case Routing", "Lead Capture", "Service Suggestions", "Escalation Logic", "CRM Context", "Workflow Automation", "Analytics"],
        comparison: [
            { before: "Manual case sorting", after: "AI-assisted triage" },
            { before: "Slow customer replies", after: "Fast guided responses" },
            { before: "Disconnected support data", after: "CRM-aware service actions" },
            { before: "Limited availability", after: "Always-on AI assistance" },
        ],
        testimonial: "The AI-assisted Salesforce workflow helped the service team respond faster while keeping customer experience professional and consistent.",
        relatedServices: defaultServices,
    },
    {
        slug: "customer-360-implementation",
        category: "Customer 360",
        industry: "Multi-Team CRM",
        title: "Customer 360 Integration Project",
        seoTitle: "Customer 360 Salesforce Integration Case Study | CodM Software",
        summary: "A connected Salesforce Customer 360 implementation improving visibility across sales, service and customer engagement teams.",
        description: "Learn how CodM Software connected customer data into Salesforce Customer 360 for stronger engagement and better reporting.",
        image: "/assets/img/blog/custom-domains.png",
        imageAlt: "Customer 360 Salesforce integration case study",
        services: ["Customer 360", "CRM Integration", "Data Migration"],
        technologies: ["Salesforce Customer 360", "REST APIs", "Data Migration", "Dashboards", "Automation Flows"],
        metrics: [
            { value: "70%", label: "Better Reporting" },
            { value: "360", label: "Customer View" },
            { value: "Faster", label: "Team Decisions" },
            { value: "Unified", label: "Customer Data" },
        ],
        client: {
            name: "Growth-Focused Enterprise",
            businessModel: "Sales, service and operations teams",
            overview: "The client wanted one reliable CRM view across teams so customer interactions, opportunities and service requests could be managed from a unified source.",
        },
        challenges: ["Scattered customer data", "Incomplete account histories", "Slow reporting", "Duplicate records", "Disconnected sales and support workflows", "Limited executive visibility"],
        solution: ["Mapped customer data sources.", "Designed Customer 360 architecture.", "Migrated and normalized CRM records.", "Built dashboards and role-based views.", "Connected sales and service workflows.", "Implemented data quality checks."],
        process: defaultProcess,
        features: ["Unified Account View", "Data Deduplication", "Real-Time Dashboards", "Service History", "Opportunity Tracking", "API Integrations", "Automated Updates", "Executive Reporting"],
        comparison: [
            { before: "Disconnected customer records", after: "Unified Customer 360 view" },
            { before: "Slow reports", after: "Real-time dashboards" },
            { before: "Duplicate data", after: "Clean governed records" },
            { before: "Team silos", after: "Connected workflows" },
        ],
        testimonial: "CodM Software created a clearer customer view that helped teams make faster decisions and improve engagement.",
        relatedServices: defaultServices,
    },
    {
        slug: "education-cloud-transformation",
        category: "Education Cloud",
        industry: "Education",
        title: "Education Cloud Student Engagement Setup",
        seoTitle: "Salesforce Education Cloud Case Study | CodM Software",
        summary: "A Salesforce Education Cloud setup improving admissions visibility, student communication and lifecycle engagement.",
        description: "Explore how CodM Software implements Salesforce Education Cloud for admissions, student engagement and lifecycle visibility.",
        image: "/assets/img/blog/blog2-img6.png",
        imageAlt: "Salesforce Education Cloud student engagement case study",
        services: ["Education Cloud", "Student Engagement", "CRM Automation"],
        technologies: ["Education Cloud", "Salesforce CRM", "Automation Flows", "Dashboards", "Email Workflows"],
        metrics: [
            { value: "45%", label: "Faster Follow-Up" },
            { value: "Unified", label: "Student Profiles" },
            { value: "Better", label: "Admissions Visibility" },
            { value: "Higher", label: "Engagement" },
        ],
        client: {
            name: "Education Institution",
            businessModel: "Admissions and student success teams",
            overview: "The organization needed a scalable Salesforce setup to manage student inquiries, admissions communication and lifecycle engagement in one place.",
        },
        challenges: ["Manual admissions follow-ups", "Scattered student data", "Limited lifecycle visibility", "Slow inquiry routing", "Inconsistent communication", "Reporting gaps"],
        solution: ["Configured Education Cloud foundations.", "Built student lifecycle workflows.", "Created inquiry routing and follow-up automation.", "Added dashboards for admissions visibility.", "Centralized student profiles.", "Improved communication tracking."],
        process: defaultProcess,
        features: ["Student Profiles", "Inquiry Routing", "Admissions Dashboards", "Communication Workflows", "Lifecycle Tracking", "Automated Follow-Ups", "Advisor Views", "Reporting"],
        comparison: [
            { before: "Manual student follow-ups", after: "Automated engagement workflows" },
            { before: "Scattered inquiry data", after: "Unified student profile" },
            { before: "Limited admissions reporting", after: "Real-time dashboards" },
            { before: "Slow routing", after: "Faster inquiry assignment" },
        ],
        testimonial: "The Salesforce Education Cloud setup improved admissions visibility and made student communication easier to manage.",
        relatedServices: defaultServices,
    },
    {
        slug: "sales-cadence-automation",
        category: "Sales Cadence",
        industry: "Sales Operations",
        title: "Sales Cadence Automation for Consistent Follow-Ups",
        seoTitle: "Sales Cadence Automation Case Study | CodM Software",
        summary: "A Salesforce Sales Cadence implementation reducing manual outreach and improving engagement tracking.",
        description: "Discover how CodM Software uses Salesforce Sales Cadence to automate follow-ups and improve sales productivity.",
        image: "/assets/img/blog/blog2-img5.png",
        imageAlt: "Salesforce Sales Cadence automation case study",
        services: ["Sales Cadence", "Sales Cloud", "Automation"],
        technologies: ["Sales Cloud", "Sales Cadence", "Email Templates", "Task Automation", "Reporting"],
        metrics: [
            { value: "35%", label: "Less Manual Effort" },
            { value: "Faster", label: "Follow-Ups" },
            { value: "Clear", label: "Engagement Tracking" },
            { value: "Higher", label: "Sales Consistency" },
        ],
        client: {
            name: "B2B Sales Organization",
            businessModel: "Relationship-driven sales team",
            overview: "The sales team needed standardized follow-up workflows that reduced missed touchpoints and made outreach performance easier to track.",
        },
        challenges: ["Manual email follow-ups", "Missed tasks", "No standard outreach path", "Weak response visibility", "Template inconsistency", "Time-consuming workflows"],
        solution: ["Designed Sales Cadence tracks.", "Created positive and negative response logic.", "Standardized templates.", "Automated call tasks and emails.", "Configured entry and exit rules.", "Added engagement reporting."],
        process: defaultProcess,
        features: ["Main Track", "Positive Track", "Negative Track", "Email Automation", "Call Tasks", "Exit Rules", "Response Tracking", "Dashboards"],
        comparison: [
            { before: "Manual outreach", after: "Guided cadence workflows" },
            { before: "Missed follow-ups", after: "Automated activity scheduling" },
            { before: "Template inconsistency", after: "Standardized communication" },
            { before: "Limited visibility", after: "Response tracking dashboards" },
        ],
        testimonial: "Sales Cadence helped the team follow up consistently and spend more time on meaningful client conversations.",
        relatedServices: defaultServices,
    },
    {
        slug: "crm-integration-modernization",
        category: "CRM Integration",
        industry: "Enterprise Operations",
        title: "CRM Integration and Reporting Modernization",
        seoTitle: "CRM Integration Modernization Case Study | CodM Software",
        summary: "A Salesforce integration project improving data quality, reporting speed and confidence in customer insights.",
        description: "Read how CodM Software modernized CRM integrations and reporting with Salesforce dashboards, APIs and automation.",
        image: "/assets/img/blog/blog2-img8.png",
        imageAlt: "Salesforce CRM integration and reporting modernization",
        services: ["CRM Integration", "Reporting", "Data Quality"],
        technologies: ["Salesforce CRM", "REST APIs", "Dashboards", "Automation Flows", "Data Loader"],
        metrics: [
            { value: "70%", label: "Better Reporting Accuracy" },
            { value: "Unified", label: "CRM Data" },
            { value: "Faster", label: "Executive Insights" },
            { value: "Lower", label: "Manual Updates" },
        ],
        client: {
            name: "Enterprise Operations Team",
            businessModel: "Sales, finance and service reporting",
            overview: "The client needed cleaner Salesforce data flows and dashboards that gave leadership accurate operational visibility.",
        },
        challenges: ["Disconnected reporting tools", "Manual spreadsheet updates", "Duplicate records", "Slow executive reporting", "Low data trust", "Integration errors"],
        solution: ["Mapped source systems.", "Built API-driven integration flows.", "Cleaned and migrated CRM data.", "Created dashboard reporting layers.", "Automated refresh workflows.", "Added data validation controls."],
        process: defaultProcess,
        features: ["API Integrations", "Data Quality Rules", "Executive Dashboards", "Automated Sync", "Duplicate Management", "Pipeline Reporting", "Service Metrics", "Audit Controls"],
        comparison: [
            { before: "Spreadsheet reporting", after: "Salesforce dashboards" },
            { before: "Disconnected systems", after: "API-connected CRM" },
            { before: "Duplicate data", after: "Governed data quality" },
            { before: "Slow decisions", after: "Faster executive visibility" },
        ],
        testimonial: "The integration modernization created cleaner data and reporting that teams could finally trust.",
        relatedServices: defaultServices,
    },
    {
        slug: "staff-augmentation-salesforce-delivery",
        category: "Staff Augmentation",
        industry: "Salesforce Delivery",
        title: "Salesforce Staff Augmentation for Faster Delivery",
        seoTitle: "Salesforce Staff Augmentation Case Study | CodM Software",
        summary: "A delivery-support engagement helping a Salesforce team scale development, testing and release capacity.",
        description: "Learn how CodM Software supports Salesforce staff augmentation with skilled developers, admins and consultants.",
        image: "/assets/img/blog/blog2-img7.png",
        imageAlt: "Salesforce staff augmentation delivery case study",
        services: ["Staff Augmentation", "Salesforce Development", "QA Support"],
        technologies: ["Salesforce", "Apex", "LWC", "Flows", "QA Automation", "Release Management"],
        metrics: [
            { value: "Faster", label: "Sprint Delivery" },
            { value: "Flexible", label: "Team Scaling" },
            { value: "Lower", label: "Delivery Bottlenecks" },
            { value: "Skilled", label: "Salesforce Talent" },
        ],
        client: {
            name: "Salesforce Product Team",
            businessModel: "Agile CRM delivery organization",
            overview: "The client needed skilled Salesforce resources to support development, testing and release execution without slowing roadmap commitments.",
        },
        challenges: ["Limited internal bandwidth", "Backlogged Salesforce enhancements", "Release pressure", "QA coverage gaps", "Need for specialized skills", "Sprint delivery bottlenecks"],
        solution: ["Provided Salesforce developers and admins.", "Supported Apex, LWC and Flow work.", "Improved QA and regression coverage.", "Helped manage releases.", "Aligned resources to sprint priorities.", "Maintained flexible scaling."],
        process: defaultProcess,
        features: ["Salesforce Developers", "Admins", "QA Support", "Apex", "LWC", "Flows", "Release Support", "Agile Delivery"],
        comparison: [
            { before: "Limited delivery capacity", after: "Flexible Salesforce team support" },
            { before: "Backlogged enhancements", after: "Faster sprint completion" },
            { before: "QA gaps", after: "Stronger regression coverage" },
            { before: "Specialist shortage", after: "Skilled Salesforce resources" },
        ],
        testimonial: "CodM Software provided dependable Salesforce talent that helped the team deliver faster without compromising quality.",
        relatedServices: defaultServices,
    },
    {
        slug: "financial-services-cloud-advisor-productivity",
        category: "Financial Services Cloud",
        industry: "Wealth Management",
        title: "Financial Services Cloud Advisor Productivity Improvement",
        seoTitle: "Financial Services Cloud Advisor Productivity Case Study | CodM Software",
        summary: "A Salesforce FSC optimization improving advisor productivity, client visibility and lifecycle management.",
        description: "See how CodM Software improves advisor productivity and client lifecycle management with Salesforce Financial Services Cloud.",
        image: "/assets/img/blog/blog2-fin1.png",
        imageAlt: "Financial Services Cloud advisor productivity case study",
        services: ["Financial Services Cloud", "Advisor Workflows", "CRM Optimization"],
        technologies: ["Salesforce FSC", "Client 360", "Automation Flows", "Dashboards", "Security Model"],
        metrics: [
            { value: "60%", label: "Advisor Productivity" },
            { value: "360", label: "Client Visibility" },
            { value: "Faster", label: "Task Completion" },
            { value: "Better", label: "Client Engagement" },
        ],
        client: {
            name: "Wealth Advisory Firm",
            businessModel: "Advisor-led financial services",
            overview: "The firm needed an FSC setup that gave advisors clearer client context, automated tasks and secure access to sensitive financial information.",
        },
        challenges: ["Limited client visibility", "Manual advisor tasks", "Sensitive data access needs", "Fragmented lifecycle tracking", "Slow reporting", "Inconsistent follow-ups"],
        solution: ["Configured FSC client profiles.", "Built advisor task automation.", "Designed secure role-based access.", "Created lifecycle dashboards.", "Centralized household and relationship data.", "Added follow-up workflows."],
        process: defaultProcess,
        features: ["Client 360", "Household Management", "Advisor Tasks", "Relationship Groups", "Secure Access", "Lifecycle Dashboards", "Automated Follow-Ups", "FSC Reports"],
        comparison: [
            { before: "Fragmented client context", after: "FSC Client 360" },
            { before: "Manual advisor tasks", after: "Automated workflows" },
            { before: "Slow reporting", after: "Real-time dashboards" },
            { before: "Access complexity", after: "Role-based security" },
        ],
        testimonial: "The FSC optimization made advisor workflows easier, more secure and more productive.",
        relatedServices: defaultServices,
    },
    {
        slug: "future-focus-enterprise-lead-architecture-geospatial-automation",
        category: "Lead Management",
        industry: "Field Sales Operations",
        title: "Project Future Focus - Enterprise Lead Architecture & Geospatial Automation",
        seoTitle: "Future Focus Salesforce Lead Architecture Case Study | CodM Software",
        summary:
            "A Salesforce lead-management architecture using custom objects, Apex geospatial intelligence, Flow synchronization and governance controls for scalable field-agent operations.",
        description:
            "Explore how CodM Software designed Project Future Focus with custom Salesforce lead architecture, geospatial automation, bi-directional synchronization and governed conversion workflows.",
        image: "/assets/img/blog/blog2-img9.png",
        imageAlt: "Salesforce enterprise lead architecture and geospatial automation case study",
        services: ["Salesforce Custom Development", "Apex Automation", "Flow Automation", "CRM Governance"],
        technologies: ["Salesforce CRM", "Apex", "Salesforce Flow", "Custom Objects", "Geocoding APIs", "Field-Level Security", "Approval Process"],
        metrics: [
            { value: "Lower", label: "Total Cost of Ownership" },
            { value: "100%", label: "Geolocation-Based Address Validation" },
            { value: "Real-Time", label: "Bi-Directional Sync" },
            { value: "30%", label: "Lead-to-Opportunity Conversion Lift" },
        ],
        client: {
            name: "Project Future Focus",
            businessModel: "Field-agent lead generation and internal Salesforce operations",
            overview:
                "Future Focus was created to help field agents work efficiently on leads while protecting the main Salesforce data model, reducing licensing costs and giving internal teams stronger governance over lead quality and conversion.",
        },
        challenges: [
            "Full Salesforce CRM licenses for a large external field-agent network created unsustainable operational costs.",
            "External field activity was disconnected from internal lead visibility and administrative control.",
            "Manual address entry created inaccurate locations, territory misrouting and unreliable marketing attribution.",
            "New agent-created leads could affect standard reporting before internal teams validated data quality.",
            "The system needed agent flexibility without compromising data integrity, governance or operational control.",
            "Lead conversion needed to work cleanly even though the solution used a custom lead object instead of the standard Lead object.",
        ],
        solution: [
            "Created a custom Lead__c object to support field-agent workflows without exposing the main CRM lead object directly.",
            "Configured granular field-level security and permissioning so limited-access users could work safely inside a controlled Salesforce experience.",
            "Built an Apex-based geospatial layer that captured latitude and longitude and used geocoding services to auto-populate street, city, state and postal-code fields.",
            "Designed Salesforce Flow automation to synchronize Custom Lead and Standard Lead data while preventing recursive updates and infinite execution loops.",
            "Added an approval-based validation gate so internal admins could review and approve lead quality before synchronized records affected the core pipeline.",
            "Implemented custom conversion logic with a Lead Converted flag, validation rules and record locking before account and contact creation.",
        ],
        process: defaultProcess,
        features: [
            "Custom Lead Object",
            "Field-Level Security",
            "Limited-Access User Model",
            "Apex Geospatial Automation",
            "Latitude and Longitude Capture",
            "Geocoding API Integration",
            "Bi-Directional Flow Sync",
            "Loop Prevention Logic",
            "Approval Validation Gate",
            "Custom Lead Conversion",
        ],
        comparison: [
            { before: "High license cost for external agents", after: "Limited-access custom object model with lower TCO" },
            { before: "Manual and inaccurate address entry", after: "Geolocation-based address validation and auto-fill" },
            { before: "Fragmented agent and admin visibility", after: "Bi-directional sync with real-time updates" },
            { before: "Unvalidated leads impacting reports", after: "Approval gate before core pipeline synchronization" },
            { before: "Standard conversion limitations", after: "Custom conversion logic with locked, governed records" },
        ],
        testimonial:
            "Project Future Focus created a scalable Salesforce lead engine that reduced cost, improved address accuracy and gave internal teams stronger governance without slowing field sales activity.",
        relatedServices: defaultServices,
    },
];

export function getCaseStudy(slug: string) {
    return caseStudies.find((study) => study.slug === slug);
}
