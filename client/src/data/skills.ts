import { Skill, SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    icon: "fas fa-code",
    skills: ["Java", "Spring Boot", "Scala", "Rust (learning)"]
  },
  {
    title: "Databases",
    icon: "fas fa-database",
    skills: ["PostgreSQL", "DynamoDB", "Cassandra"]
  },
  {
    title: "Tools & Platforms",
    icon: "fas fa-tools",
    skills: ["AWS", "Docker", "Kubernetes", "Git"]
  }
];

export const skills: Skill[] = [
  {
    name: "Java & Spring",
    proficiency: 95
  },
  {
    name: "Database Systems",
    proficiency: 90
  },
  {
    name: "Cloud Services (AWS)",
    proficiency: 85
  },
  {
    name: "Containerization",
    proficiency: 80
  },
  {
    name: "Scala",
    proficiency: 75
  },
  {
    name: "Rust",
    proficiency: 40
  }
];
