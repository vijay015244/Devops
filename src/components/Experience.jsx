import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: "Peak42 innovation labs pvt lmd",
    role: "DevOps Engineer",
    period: "11/2026 - Present",
    achievements: [
      "Implemented cross-account monitoring architecture using Prometheus and Node Exporter via AWS VPC Peering.",
      "Configured Prometheus Alertmanager to trigger alerts on critical metrics, reducing downtime.",
      "Developed a centralized logging solution with Grafana Loki for Nomad clusters.",
      "Migrated a backoffice application from Netlify to in-house infrastructure within 2 weeks.",
      "Developed and maintained CI/CD pipelines using GitHub Actions, reducing deployment time by 60%."
    ]
  },
  {
    company: "OpenBet India Pvt Ltd",
    role: "DevOps Engineer",
    period: "07/2024 - Present",
    achievements: [
      "Worked on GitOps-based deployment pipelines using Argo CD.",
      "Maintained and enhanced Helm-based CI/CD jobs in Jenkins via Harbor.",
      "Managed and scaled Kubernetes clusters on AWS EKS using Rancher.",
      "Led a Kubernetes upgrade on EKS with zero downtime validation.",
      "Configured Prometheus & Grafana to monitor 100+ services.",
      "Implemented Kubecost to track EKS and AWS costs, reducing idle resource usage by ~20%.",
      "Used Terraform to deploy infrastructure components and internal applications."
    ]
  },
  {
    company: "Melorra (August Jewellery Pvt Ltd)",
    role: "DevOps Engineer",
    period: "06/2022 - 07/2024",
    achievements: [
      "Built CI/CD pipelines in Jenkins, accelerating release cycles.",
      "Maintained 20+ microservices across dev, stage, and production clusters.",
      "Reduced infrastructure costs from $70,000 to $10,000 by optimizing cluster usage.",
      "Integrated Kubecost to monitor Kubernetes cluster expenses.",
      "Set up ClamAV in Kubernetes clusters to detect vulnerabilities via S3 CronJobs.",
      "Implemented auto-scaling and automated backups for MongoDB and MySQL.",
      "Set up Prometheus and Grafana dashboards, reducing incident detection time by 40%."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Deployment History <span className="typing-cursor">_</span></h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{exp.role}</h3>
                <span className="company"><Briefcase size={16} className="inline-icon" /> {exp.company}</span>
                <span className="period"><Calendar size={14} className="inline-icon" /> {exp.period}</span>
              </div>
              <ul className="achievements">
                {exp.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
