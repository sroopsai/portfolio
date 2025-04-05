import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Ericsson",
    period: "2020 - Present",
    description: "Led development of cloud-native telecom applications using Java and Spring Boot. Designed and implemented high-throughput data processing pipelines and microservices architecture.",
    achievements: [
      "Improved service performance by 40% through optimized database queries",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Led a team of 5 developers for a critical system upgrade"
    ]
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Infor",
    period: "2017 - 2020",
    description: "Developed and maintained enterprise resource planning (ERP) systems. Built scalable backend services and APIs for large-scale business applications.",
    achievements: [
      "Refactored legacy codebase improving maintainability",
      "Implemented distributed caching solution reducing database load",
      "Developed integration with third-party payment processors"
    ]
  },
  {
    id: 3,
    title: "Freelance Developer",
    company: "Self-employed",
    period: "2015 - 2017",
    description: "Worked with various clients to deliver custom software solutions. Developed backend systems, APIs, and database architectures for startups and medium-sized businesses.",
    achievements: [
      "Built custom e-commerce backend with payment processing",
      "Designed data synchronization system for offline-first application",
      "Implemented ETL processes for business intelligence platform"
    ]
  }
];
