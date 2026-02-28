export const cv = {
  name: "Preethika Ajaykumar",
  title:
    "MSc Computer Science @ TU Delft • Computer Vision • Robot Perception • Data-efficient ML",
  location: "Delft, Netherlands",
  phone: "+31 626145908",
  email: "preethikaajay@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://linkedin.com/in/preethika-ajaykumar" },
    { label: "GitHub", href: "https://github.com/preethika-ajay" },
  ],

  objective:
    "MSc Computer Science student at TU Delft with interests in computer vision, robot perception, and data-efficient machine learning. Experienced in software engineering and applied AI, with a focus on understanding and developing visual perception systems for real-world and resource-constrained environments.",

  education: [
    {
      school: "TU Delft",
      dates: "2025 – 2027 (expected)",
      degree: "MSc Computer Science",
      tags: ["Vision", "Embedded", "Robotics", "Distrubted"],
      details: ["Specialisation: Embedded & Software"],
      courses: ["Real-Time Systems", "Machine and Deep Learning", "Embedded Systems Lab", "Software Architecture"],
      highlights: ["Working with TU Delft Lunar Module team for object detection"]
    },
    {
      school: "PES University",
      degree: "B.Tech Computer Science and Engineering",
      dates: "2020 – 2024",
      details: ["CGPA: 9.21/10.0"],
      tags: ["Artificial Intelligence", "High-Performance Computing", "Algorithmics"],
      courses: ["Deep Learning", "Machine Learning", "Research in IOT", "Cloud Computing", "Compiler Design"],
      highlights: ["Awarded M.R.D Scholarship every semester for being in the top 20% of the cohort.", "Bachelor's Thesis: UAV Swarm Optimization published in Springer Nature with 18+ citations"]

    },
  ],

  skills: {
    Programming: ["Python", "C++", "Java", "JavaScript", "PHP", "Bash"],
    "Backend & Systems": ["REST APIs", "gRPC", "Apache Thrift", "Microservices", "Kafka"],
    "AI & ML": ["PyTorch", "TensorFlow", "scikit-learn", "CNNs", "Vision Transformers"],
    "Computer Vision": ["OpenCV", "Viola–Jones", "Image Processing", "GPU Inference"],
    "DevOps & Cloud": ["Kubernetes", "Docker", "Helm", "Harness CI/CD", "Linux"],
    "Parallel Processing": ["Ray", "joblib", "Multithreading"],
    "Hardware Integration": ["Raspberry Pi", "Arduino", "I2C", "GPIO", "Camera Modules"],
    Tools: ["Git", "NumPy", "Pandas"],
  },

  experience: [
    {
      role: "Navigation & Localisation Software and Embedded Engineer",
      org: "LunarZebro",
      location: "Delft, Netherlands",
      dates: "Nov 2025 – Present",
      bullets: [
        "Developing algorithm for obstacle detection for semi-autonomous Lunar Rover of TU Delft.",
      ],
      theme: "robot",
    },
    {
      role: "Associate Software Engineer",
      org: "DigiCert",
      location: "Bengaluru, KA",
      dates: "Jul 2024 – Jul 2025",
      bullets: [
        "Developed the ACME Automatic Renewal Interval (ARI) system (draft-ietf-acme-ari-08), enabling bulk revocation of 10,000+ certificates. Improved automation and backend reliability.",
        "Integrated DigiCert CertCentral with Adobe Commerce, building secure APIs and backend workflows to support seamless business transactions.",
        "Implemented webhooks for real-time microservice communication and benchmarked gRPC vs Apache Thrift for high-performance, low-latency distributed systems.",
        "Built cloud-native infrastructure for microservices using Kubernetes, Docker, and Helm. Configured Harness CI/CD pipelines for automated deployments.",
      ],
      
      theme: "security",
      highlight: "Built JWT/OAuth authorization + ACME ARI automation in global cross-functional team.",
      stack: ["Java", "OAuth2", "JWT", "Kubernetes", "Helm", "Kafka"],
      artifacts: [{ label: "Write-up", href: "..." }]
    },
    {
      role: "Intern Associate Software Engineer",
      org: "DigiCert",
      location: "Bengaluru, KA",
      dates: "Jan 2024 – Jul 2024",
      bullets: [
        "Built and demonstrated gRPC-based communication between microservices, improving reliability and reducing latency for backend services.",
        "Delivered a company-wide technical talk titled “Transforming Microservices Communication with gRPC”, covering performance, serialization, and distributed system design.",
        "Developed Slack notification pipelines using webhook integrations, automating alerts and event-driven updates for CertCentral.",
      ],
      theme: "systems",
    },
    {
      role: "Project Intern",
      org: "Forus Health",
      location: "Bengaluru, KA",
      dates: "Jun 2023 – Aug 2023",
      bullets: [
        "Orchestrated the configuration and provisioning of embedded hardware components, including I2C sensors, camera modules, and GPIO interfaces, for real-time image acquisition.",
        "Improved image capture performance using multithreading and parallel task execution, enabling synchronized flash-camera operations and reducing capture delays.",
        "Implemented computer vision pipelines using OpenCV and classical ML techniques, including Viola–Jones classification, thresholding, edge detection, and circle detection.",
        "Debugged and optimized embedded software modules to improve reliability, reduce latency, and ensure stable real-time system performance.",
      ],
      theme: "vision",
    },
    {
      role: "Summer Research Intern",
      org: "Indian Institute of Science (IISc)",
      location: "Bengaluru, KA",
      dates: "Jun 2022 – Aug 2022",
      bullets: [
        "Optimized the image processing pipeline by reducing per-image processing time from 0.8ms to 0.3ms using GPU acceleration and low-level optimizations.",
        "Parallelized CNN workloads using Ray and implemented batch processing with joblib, reducing dataset processing time from 20 minutes to 3 minutes for 6000 images.",
        "Utilized TensorRT for high-throughput GPU inference, improving latency and real-time model performance.",
        "Designed and evaluated deep learning models (YOLOv5/v7, CNNs) across diverse datasets, analyzing generalization performance and inference robustness under varying data conditions.",
      ],
      theme: "research",
    },
  ],

  projects: [
    {
      name: "Red Reflex Detection System (Forus Health)",
      desc:
        "Raspberry Pi–based cataract and amblyopia screening system using OpenCV, synchronized flash–camera control, and embedded hardware (I2C, GPIO). Designed real-time image processing pipeline for robust detection.",
      tags: ["Raspberry Pi", "OpenCV", "Embedded", "I2C/GPIO"],
    },
    {
      name: "Parkinson’s NeuroScan",
      desc:
        "Developed CNN and MobileNet-based transfer learning models for MRI classification, evaluating robustness under limited data conditions. Analyzed confidence behavior and generalization across validation splits.",
      tags: ["CNN", "MobileNet", "Transfer Learning"],
    },
    {
      name: "PolyCipher – Encryption Toolkit in C++",
      desc:
        "Implemented Enigma machine, Vigenere cipher, and classical cryptographic algorithms in C++ with a modular, extensible architecture for encryption and decryption.",
      tags: ["C++", "Cryptography"],
    },
  ],

  publications: [
    {
      title: "UAV Swarm Objectives: A Critical Analysis and Comprehensive Review",
      venue: "Springer Nature SN Computer Science, 2024",
      href: "",
    },
    {
      title:
        "Synergistic Approach for UAV Target Tracking: Voronoi-GWO-Reinforcement Learning Framework",
      venue: "ICCES, Singapore, 2024",
      href: "",
    },
    {
      title: "Predicting the Number of Fatalities in an Air Crash",
      venue: "IEEE I2CT, 2023",
      href: "",
    },
    {
      title:
        "N-Queens Convergence: Tactical Framework for Target-Directed Drone Formations",
      venue: "IEEE CSITSS, 2023",
      href: "",
    },
  ],

  achievements: [
    "Won DigiCert’s internal hackathon for designing an SBOM/CBOM security framework and developing CodeTRUST, a certificate that validates dependency integrity and strengthens software supply-chain security.",
    "Awarded the MRD Scholarship for all six semesters at PES University for ranking consistently in the top 20%.",
    "Secured a top-three position in Intel’s Connected and Automated Vehicles Ideation Contest.",
  ],

  extracurriculars: [
    "Carnatic Violin – 10+ years of formal training; continuing advanced training and public performances",
    "Carnatic Vocal Music – 5 years of formal training",
    "Classical Indian Dance – 4 years of training",
  ],
};
