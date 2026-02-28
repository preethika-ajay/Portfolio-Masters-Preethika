export const cv = {
  name: "Preethika Ajaykumar",
  title:
    "MSc Computer Science @ TU Delft • Computer Vision • Embedded Software • Data-efficient ML",
  location: "Delft, Netherlands",
  phone: "+31 626145908",
  email: "preethikaajay@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/preethika-ajaykumar-6980861b6/" },
    { label: "GitHub", href: "https://github.com/preethika-ajay" },
  ],

  objective:
    "MSc Computer Science student at TU Delft with interests in computer vision, embedded systems and data-efficient machine learning. Experienced in software engineering and applied AI, with a focus on understanding and developing visual perception systems for real-world and resource-constrained environments.",

  education: [
    {
      school: "TU Delft",
      dates: "2025 – 2027 (expected)",
      degree: "MSc Computer Science",
      tags: ["Vision", "Embedded", "Robotics", "Distrubted"],
      details: ["Specialisation: Computer Systems & Software Engineering"],
      courses: ["Real-Time Systems", "Machine and Deep Learning", "Embedded Systems Lab", "Software Architecture", "Web-Scale Data Management", "Design and Development of Distributed Applications", "Sustainable Software Engineering", "Computer Graphics"],
      highlights: ["Working with TU Delft Lunar Module team for object detection"]
    },
    {
      school: "PES University",
      degree: "B.Tech Computer Science and Engineering",
      dates: "2020 – 2024",
      details: ["CGPA: 9.21/10.0", "Specialisation: Artificial Intelligence and Machine Learning  "],
      tags: ["Artificial Intelligence", "High-Performance Computing", "Algorithmics"],
      courses: ["Deep Learning", "Machine Intelligence", "Data Analytics", "Object Oriented Analysis and Design", "Microprocessor and Computer Architecture", "Operating Systems", "Computer Networks", "Design and Analysis of Algorithms", "Cloud Computing", "Compiler Design", ""],
      highlights: ["Awarded M.R.D Scholarship every semester for being in the top 20% of the cohort.", "Bachelor's Thesis: UAV Swarm Optimization published in Springer Nature with 18+ citations"]

    },
  ],

  skills: {
    "Embedded & Hardware Systems": [
      "Raspberry Pi",
      "Arduino",
      "I2C",
      "GPIO",
      "Camera Modules"
    ],

    "Computer Vision & AI": [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "CNNs",
      "Vision Transformers",
      "OpenCV",
      "Image Processing",
      "GPU Inference",
      "Viola–Jones"
    ],

    "Distributed & Backend Systems": [
      "REST APIs",
      "gRPC",
      "Apache Thrift",
      "Microservices",
      "Kafka"
    ],

    "DevOps & Infrastructure": [
      "Kubernetes",
      "Docker",
      "Helm",
      "Harness CI/CD",
      "Linux"
    ],

    "Parallel & High-Performance Computing": [
      "Ray",
      "joblib",
      "Multithreading"
    ],

    "Programming Languages": [
      "Python",
      "C++",
      "Java",
      "JavaScript",
      "PHP",
      "Bash"
    ],

    "Data & Scientific Computing": [
      "NumPy",
      "Pandas"
    ]
  }, 

  skillsMeta: {
    "Embedded & Hardware Systems": "Low-level control, sensor integration and real-time interfaces.",
    "Computer Vision & AI": "Deep learning, perception pipelines and GPU inference.",
    "Distributed & Backend Systems": "Service-oriented architectures and event-driven systems.",
    "DevOps & Infrastructure": "Container orchestration, CI/CD and Linux systems.",
    "Parallel & High-Performance Computing": "Concurrency and scalable computation.",
    "Programming Languages": "Primary implementation languages across systems and ML.",
    "Data & Scientific Computing": "Numerical computing and data analysis."
  },

  experience: [

    {
      role: "Navigation and Localisation Software & Embedded Engineer",
      org: "LunarZebro",
      location: "Delft, Netherlands",
      dates: "Nov 2025 – Present",
      bullets: [
        "Developing obstacle detection and navigation algorithms for a semi-autonomous lunar rover at TU Delft.",
        "Designing perception pipelines for real-time terrain understanding under resource-constrained conditions.",
        "Integrating sensor data and embedded control modules for robust rover mobility.",
      ],
      theme: "robot",
      highlight:
        "Designing embedded perception algorithms for semi-autonomous lunar rover navigation.",
      stack: ["C++", "Embedded Systems", "Sensor Fusion", "Computer Vision"],
      artifacts: []
    },

    {
      role: "Associate Software Engineer",
      org: "DigiCert",
      location: "Bengaluru, KA",
      dates: "Jul 2024 – Jul 2025",
      bullets: [
        "Developed the ACME Automatic Renewal Interval (ARI) system (draft-ietf-acme-ari-08), enabling bulk revocation of 10,000+ certificates and improving backend reliability.",
        "Integrated DigiCert CertCentral with Adobe Commerce by building secure REST APIs and backend workflows.",
        "Implemented webhooks for real-time microservice communication and benchmarked gRPC vs Apache Thrift for high-performance distributed systems.",
        "Built and deployed microservices using Kubernetes, Docker, and Helm with automated CI/CD pipelines via Harness.",
      ],
      theme: "security",
      highlight:
        "Built ACME ARI automation and secure backend workflows in a global cross-functional engineering team.",
      stack: ["Java", "REST APIs", "gRPC", "Apache Thrift", "Kubernetes", "Docker", "Helm", "Harness CI/CD"],
      artifacts: []
    },

    {
      role: "Intern Associate Software Engineer",
      org: "DigiCert",
      location: "Bengaluru, KA",
      dates: "Jan 2024 – Jul 2024",
      bullets: [
        "Built and demonstrated gRPC-based communication between microservices, improving reliability and reducing backend latency.",
        "Delivered a company-wide technical talk titled 'Transforming Microservices Communication with gRPC', covering serialization and distributed systems performance.",
        "Developed Slack notification pipelines using webhook integrations for event-driven backend workflows.",
      ],
      theme: "systems",
      highlight:
        "Improved distributed system communication efficiency through gRPC-based microservices architecture.",
      stack: ["Java", "gRPC", "Microservices", "Webhooks", "Distributed Systems"],
      artifacts: []
    },

    {
      role: "Project Intern",
      org: "Forus Health",
      location: "Bengaluru, KA",
      dates: "Jun 2023 – Aug 2023",
      bullets: [
        "Configured and provisioned embedded hardware components including I2C sensors, camera modules, and GPIO interfaces for real-time image acquisition.",
        "Optimized synchronized flash-camera operations using multithreading, reducing capture latency and improving system responsiveness.",
        "Implemented computer vision pipelines using OpenCV and classical ML techniques including Viola–Jones classification and edge detection.",
        "Debugged and optimized embedded software modules to improve stability and reduce real-time system delays.",
      ],
      theme: "vision",
      highlight:
        "Built real-time embedded vision pipeline for medical image acquisition using Raspberry Pi and OpenCV.",
      stack: ["Raspberry Pi", "OpenCV", "I2C", "GPIO", "Multithreading", "Embedded Systems"],
      artifacts: []
    },

    {
      role: "Summer Research Intern",
      org: "Indian Institute of Science (IISc)",
      location: "Bengaluru, KA",
      dates: "Jun 2022 – Aug 2022",
      bullets: [
        "Optimized an image processing pipeline, reducing per-image processing time from 0.8ms to 0.3ms using GPU acceleration.",
        "Parallelized CNN workloads using Ray and joblib, reducing dataset processing time from 20 minutes to 3 minutes for 6000 images.",
        "Utilized TensorRT for high-throughput GPU inference, improving real-time model performance.",
        "Designed and evaluated deep learning models (YOLOv5/v7, CNNs) to analyze inference robustness and computational efficiency.",
      ],
      theme: "research",
      highlight:
        "Accelerated deep learning inference pipelines through GPU optimization and parallel processing.",
      stack: ["PyTorch", "YOLOv5/v7", "TensorRT", "Ray", "joblib", "GPU Acceleration"],
      artifacts: []
    },

  ],

  projects: [

    {
      name: "Red Reflex Detection System (Forus Health)",
      desc:
        "Raspberry Pi–based embedded vision system for early cataract and amblyopia screening using synchronized flash–camera control and real-time OpenCV image processing.",
      tags: ["Raspberry Pi", "OpenCV", "Embedded", "I2C/GPIO", "Medical AI"],
      github: ""
    },

    {
      name: "Parkinson’s NeuroScan",
      desc:
        "MRI classification system using CNN and MobileNet-based transfer learning models, evaluating robustness and generalization under limited-data conditions.",
      tags: ["CNN", "MobileNet", "Transfer Learning", "Medical Imaging"],
      github: "https://github.com/preethika-ajay/Parkinson-s-NeuroScan-MRI-based-Prediction-with-Transfer-Learning"
    },

    {
      name: "PolyCipher – Encryption Toolkit in C++",
      desc:
        "Modular C++ framework implementing Enigma machine, Vigenère cipher, and classical cryptographic algorithms with extensible encryption–decryption architecture.",
      tags: ["C++", "Cryptography", "Systems Programming"],
      github: "https://github.com/preethika-ajay/Ciphers"
    },
  ],

  publications: [
    {
      title: "UAV Swarm Objectives: A Critical Analysis and Comprehensive Review",
      authors: "Preethika Ajay Kumar, Nandana Manoj, Neeraj Sudheer, Pranamya P Bhat, Arti Arya, Richa Sharma",
      venue: "Springer Nature SN Computer Science, 2024",
      year: 2024,
      kind: "journal",
      href: "https://link.springer.com/article/10.1007/s42979-024-03156-x",
      doi: "10.1007/s42979-024-03156",
      citations: 17,            // you fill this
      downloads: 1052,            // optional
      tags: ["UAV", "Target Tracking", "Path Planning", "Maximal Area Coverage"],

      // bibt
    },
      {
        title: "Synergistic Approach for UAV Target Tracking: A Voronoi-GWO-Reinforcement Learning Framework",
        authors: "P. P. Bhat, N. Sudheer, N. Manoj, P. Ajay Kumar, R. Sharma, A. Arya",
        venue: "30th International Conference on Computational & Experimental Engineering and Sciences (ICCES)",
        location: "Singapore",
        year: 2024,
        kind: "conference", // conference | journal | award | note
        href: "https://link.springer.com/chapter/10.1007/978-3-031-82907-9_16",     // publisher/landing page
        doi: "10.1007/978-3-031-82907-9_16",     // optional
        citations: 0,            // you fill this
        downloads: 461,            // optional
        tags: ["UAV", "Target Tracking", "Voronoi", "GWO", "Reinforcement Learning"],
        // badges: [{ kind: "note", label: "Oral" }] // optional extra badges
      },
      {
      title: "Predicting the Number of Fatalities in an Air Crash",
      authors: "TR Prajwala, Nandana Manoj, Preethika Ajay Kumar, R Harshita",
      venue: "IEEE I2CT, 2023",
      location: "Pune, India",
      href: "https://ieeexplore.ieee.org/abstract/document/10126440/",
      year: "2023",
      kind: "conference",
      doi: "10.1109/I2CT57861.2023.10126440",
      citations: 2,
      downloads: 137,
      tags: ["EDA", "Data Analysis", "Machine Learning", "Parameter Tuning"]
    },
    {
      title:
        "N-Queens Convergence: Tactical Framework for Target-Directed Drone Formations",
      authors: "Preethika Ajaykumar",
      location: "Bangalore, India",
      venue: "IEEE CSITSS, 2023",
      href: "https://ieeexplore.ieee.org/abstract/document/10334215",
      year: "2023",
      kind: "conference",
      doi: "10.1109/CSITSS60515.2023.10334215",
      citations: 1,
      downloads: 53,
      tags: ["Algorithms", "Optimization", "Data Structures", "UAV"]
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
  arts: {
    violin: {
      title: "Carnatic Violin",
      years: "10+ years",
      video: { kind: "mp4", src: "/media/violin_h264.mp4", title: "Carnatic Violin" }
    },
    dance: {
      title: "Bharatanatyam",
      years: "4 years",
      // video: {
      //   kind: "youtube",
      //   id: "",
      //   title: "Bharatanatyam Performance"
      // }
    }
  },
};
