import React from 'react';
import { motion } from 'framer-motion';
import { Folder, ExternalLink } from 'lucide-react';

const projectsList = [
  {
    title: "Cloud Cost Monitoring with Kubecost",
    period: "04/2025 - 05/2025",
    company: "OpenBet India Pvt Lmd",
    description: "Deployed Kubecost on AWS EKS to monitor resource spend across namespaces and workloads. Integrated with Rancher for multi-cluster visibility and cost optimization.",
    achievements: [
      "Reduced underutilized resource spend by ~20%.",
      "Enabled cost dashboards and chargeback reporting using Grafana."
    ],
    tech: ["Kubecost", "AWS EKS", "Rancher", "Grafana"]
  },
  {
    title: "Kubernetes Upgrade on Amazon EKS",
    period: "01/2025 - 03/2025",
    company: "OpenBet India Pvt Lmd",
    description: "Led a zero-downtime upgrade of production EKS clusters by analyzing deprecated APIs and upgrading components.",
    achievements: [
      "Performed rolling upgrades with node draining.",
      "Updated services like Cert-Manager, ExternalDNS post-upgrade."
    ],
    tech: ["AWS EKS", "Kubernetes", "Cert-Manager", "ExternalDNS"]
  },
  {
    title: "CI/CD Pipeline Automation",
    period: "01/2024 - 05/2024",
    company: "Melorra",
    description: "Designed and maintained Jenkins pipelines integrated with Docker and Kubernetes for streamlined deployments.",
    achievements: [
      "Used Helm charts for standardized deployments to GKE and EKS.",
      "Improved release consistency and reduced manual deployment effort significantly."
    ],
    tech: ["Jenkins", "Docker", "Kubernetes", "Helm", "GKE", "EKS"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Key Infrastructure Projects <span className="typing-cursor">_</span></h2>
      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="project-header">
              <Folder size={32} className="accent-color" />
              <div className="project-links">
                <ExternalLink size={20} className="text-muted hover-accent" style={{cursor:'pointer'}} />
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-company">{project.company} <span className="text-muted">| {project.period}</span></p>
            <p className="project-desc">{project.description}</p>
            <ul className="project-achievements">
              {project.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-badge">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
