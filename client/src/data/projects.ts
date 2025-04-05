import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Distributed Cache System",
    description: "A high-performance distributed caching solution for microservices architecture with fault tolerance and horizontal scaling capabilities.",
    gradient: "from-blue-500 to-blue-700",
    icon: "fas fa-database",
    technologies: ["Java", "Redis", "Spring Boot", "AWS"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "Event Sourcing Framework",
    description: "A lightweight framework for implementing event sourcing patterns in Java applications with built-in CQRS support.",
    gradient: "from-indigo-500 to-purple-600",
    icon: "fas fa-code-branch",
    technologies: ["Java", "Kafka", "PostgreSQL", "Docker"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 3,
    title: "Serverless API Gateway",
    description: "A custom API gateway solution for serverless architectures with authentication, rate limiting, and request transformation.",
    gradient: "from-green-500 to-teal-600",
    icon: "fas fa-cloud",
    technologies: ["AWS Lambda", "API Gateway", "Java", "CloudFormation"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 4,
    title: "Cassandra Compaction Optimizer",
    description: "An implementation of my thesis \"Random Compaction Strategy for Cassandra-like systems\" with significant read/write performance improvements.",
    gradient: "from-red-500 to-orange-600",
    icon: "fas fa-cogs",
    technologies: ["Cassandra", "Java", "Benchmarking"],
    githubUrl: "#",
    demoUrl: "#"
  }
];
