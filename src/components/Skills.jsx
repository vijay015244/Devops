import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Container, GitBranch, Activity, Terminal, Shield, DollarSign, Database } from 'lucide-react';

const skillCategories = [
  {
    title: "Cloud",
    icon: <Cloud size={24} className="accent-color" />,
    skills: ["AWS (EC2, S3, VPC, ROUTE53, LAMBDA, RDS)", "GCP (VPC, COMPUTE, CLOUD STORAGE, SQL)"]
  },
  {
    title: "Containers & Orchestration",
    icon: <Container size={24} className="accent-color" />,
    skills: ["Docker", "Kubernetes (EKS, GKE)", "Rancher", "Helm", "Nomad"]
  },
  {
    title: "CI/CD & IaC",
    icon: <GitBranch size={24} className="accent-color" />,
    skills: ["Jenkins", "Bitbucket", "Terraform", "ArgoCD"]
  },
  {
    title: "Monitoring",
    icon: <Activity size={24} className="accent-color" />,
    skills: ["Grafana", "Prometheus", "Loki"]
  },
  {
    title: "Scripting & Automation",
    icon: <Terminal size={24} className="accent-color" />,
    skills: ["Bash", "Python", "Go (basic)"]
  },
  {
    title: "Security & Tools",
    icon: <Shield size={24} className="accent-color" />,
    skills: ["ClamAV", "Wazuh"]
  },
  {
    title: "FinOps Tools",
    icon: <DollarSign size={24} className="accent-color" />,
    skills: ["Kubecost", "Opencost"]
  },
  {
    title: "Databases",
    icon: <Database size={24} className="accent-color" />,
    skills: ["MySQL", "MongoDB"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">System Capabilities <span className="typing-cursor">_</span></h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="skill-icon">{category.icon}</div>
            <h3 className="skill-title">{category.title}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
