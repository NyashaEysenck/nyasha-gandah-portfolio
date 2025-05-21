
import { ExternalLink } from "lucide-react";
import { CertificationItem } from "./CertificationItem";

export function Certifications() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <CertificationItem
        title="IBM AI Developer"
        period="July 2024"
        organization="IBM on Coursera"
        description="Comprehensive certification covering AI fundamentals, Python, web development, machine learning, and generative AI. It includes hands-on projects like building chatbots and deploying AI apps"
        verificationUrl="https://www.coursera.org/account/accomplishments/professional-cert/JY8AYYQ3BFTW"
      />
      
      <CertificationItem
        title="Deep Learning Specialization"
        period="July 2024"
        organization="DeepLearning.AI on Coursera"
        description="Five-course specialization taught by Andrew Ng covering neural networks, deep learning, convolutional networks, sequence models, and practical machine learning projects."
        verificationUrl="https://www.coursera.org/account/accomplishments/specialization/VW8K45BHCEPF"
      />
      
      <CertificationItem
        title="IBM Machine Learning"
        period="June 2024"
        organization="IBM on Coursera"
        description="specialization taught by Andrew Ng covering supervised learning, unsupervised learning, anomaly detection and practical machine learning projects."
        verificationUrl="https://www.coursera.org/account/accomplishments/specialization/JAGZV6NNTXE3"
      />

      
    <CertificationItem
        title="Machine Learning Specialization"
        period="May 2024"
        organization="DeepLearning.AI on Coursera"
        description="Certification covering artificial intelligence, machine learning, pytohn programming and practical implementation of artificial intelligence models."
        verificationUrl="https://www.coursera.org/account/accomplishments/specialization/S9FSUKSAR2HS"
      />

      <CertificationItem
        title="CS50's Introduction to Artificial Intelligence with Python"
        period="Mar 2024"
        organization="CS50"
        description="Certification covering artificial intelligence, machine learning, pytohn programming and practical implementation of artificial intelligence models."
        verificationUrl="https://cs50.harvard.edu/certificates/66ce71ed-f8f8-4c1c-a802-ac8505cab9e4"
      />

      
    </div>
  );
}
