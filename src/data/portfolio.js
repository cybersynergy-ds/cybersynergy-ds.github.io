// ─────────────────────────────────────────────────────────────
// All portfolio content lives in this one file.
// To add a new project: copy an object inside `projects` and edit it.
// Nothing else in the codebase needs to change.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Abhirup Choudhury",
  title: "Data Engineer",
  quoteLines: [
    "Somewhere between raw data and real insight, there's a pipeline.",
    "I build those.",
  ],
  tagline:
    "Building cloud-native ETL pipelines, real-time streaming systems, and scalable data lake architectures on AWS & GCP.",
  location: "Chennai, India",
  email: "abhirupiiitdmk26@gmail.com",
  github: "https://github.com/cybersynergy-ds",
  linkedin: "https://www.linkedin.com/in/abhirup-choudhury-617b27276",
};

export const summary =
  "Data Engineer with 1.5+ years of experience building cloud-native ETL pipelines, real-time streaming systems, and scalable data lake architectures on AWS and GCP. Skilled in pipeline orchestration with Apache Airflow, data transformation using DBT and PySpark, and serverless computing with Lambda and Cloud Functions. Proficient in BigQuery, Snowflake, PostgreSQL, and data warehousing. Strong collaborator with cross-functional teams including data scientists and analysts. GATE 2025 qualified in Data Science & Artificial Intelligence.";

export const experience = [
  {
    company: "SBSF Agritech",
    role: "Data Engineer Intern",
    location: "Hybrid",
    start: "Jan 2026",
    end: "Present",
    bullets: [
      "Architected a scalable climate data lake on AWS S3, automating ingestion of ERA5-Land reanalysis data across 14 environmental features covering multi-year historical datasets using Python and Bash.",
      "Developed event-driven ETL workflows using AWS Lambda and EC2 to retrieve, decompress, and process GRIB files from the Copernicus CDS API, eliminating 100% of manual data preparation.",
      "Reduced cloud storage costs by 60% through S3 Glacier Deep Archive lifecycle policies and serverless aggregation logic compared to standard storage tiers.",
      "Engineered idempotent download logic with structured error handling, logging, and CloudWatch monitoring, achieving zero data loss across all pipeline executions.",
      "Designed dimensional data models and schema definitions for structured climate storage, enabling efficient SQL querying and downstream analytical workflows.",
    ],
    stack: ["AWS S3", "Lambda", "EC2", "CloudWatch", "Python", "Bash"],
  },
  {
    company: "Earthmetry Decision Systems",
    role: "Product Engineer & Data Engineer Intern",
    location: "Hybrid — Chennai, TN",
    start: "Dec 2024",
    end: "Present",
    bullets: [
      "Built a live AQI monitoring dashboard for the Brihanmumbai Municipal Corporation (BMC), processing real-time streaming data from 2,200+ IoT sensors with sub-minute latency using event-driven architecture on GCP.",
      "Designed a serverless ingestion pipeline using Cloud Functions, Cloud Run, and Cloud Scheduler for automated BigQuery loading, supporting continuous ELT workflows across multiple sensor streams.",
      "Created a custom geo-batching algorithm to bypass Google Maps API's 20-location constraint, enabling retrieval of 1,000+ coordinate points per request for large-scale spatial analysis.",
      "Integrated Folium for geospatial visualization with automated ROI mapping using 500m radius buffers, generating coverage maps across cities including Surat and Bhubaneswar.",
      "Engineered high-throughput collection workflows processing 10,000+ JSON records/hour with 99% validation accuracy.",
      "Optimized transformation workflows using Apache Airflow for orchestration and DBT for modeling, reducing processing time by 40% and delivering structured datasets on automated CI/CD schedules.",
    ],
    stack: ["GCP", "BigQuery", "Cloud Run", "Airflow", "DBT", "Folium"],
  },
];

// ── Climate data lake maps (SBSF Agritech) ─────────────────────
// 2025 annual-average layers derived from the ERA5-Land data lake.
export const climateMaps = [
  {
    id: "temperature",
    title: "Temperature",
    file: "portfolio_temperature_map.jpg",
    metric: "Annual avg 2m temperature · 2025",
    points: [
      "Annual average surface temperature across the region, gridded at ~9km resolution",
      "Averaged ERA5-Land hourly readings → daily → annual means via a PySpark batch job on the AWS data lake",
      "Drives pest pressure, evapotranspiration, and the point a crop starts losing yield to heat stress",
      "Produced heat-stress bands per zone, used to schedule irrigation/shade before yield loss",
    ],
  },
  {
    id: "precipitation",
    title: "Precipitation",
    file: "portfolio_precipitation_map.jpg",
    metric: "Total annual precipitation · 2025",
    points: [
      "Total rainfall distribution across the region for 2025",
      "Ingested hourly ERA5-Land precip fields via event-driven Lambda ETL, aggregated to daily/annual totals",
      "Cross-checked against ground station records",
      "Biggest single driver of irrigation demand and drought/waterlogging risk per plot",
      "Separated rainfall-deficit zones needing irrigation from rainfed-suitable zones",
    ],
  },
  {
    id: "wind_speed",
    title: "Wind Speed",
    file: "portfolio_wind_speed_map.jpg",
    metric: "Annual avg wind speed · 2025",
    points: [
      "Average near-surface wind speed across the region for 2025",
      "Derived from ERA5-Land u/v wind components → √(u²+v²), decompressed from GRIB files",
      "Rendered geospatially with Folium",
      "Drives pesticide-spray drift, evapotranspiration, and structural risk for greenhouses",
      "Set safe-spray-window guidance per zone and flagged areas needing windbreaks",
    ],
  },
  {
    id: "soil_ph",
    title: "Soil pH",
    file: "portfolio_soil_ph_map.jpg",
    metric: "Soil acidity / alkalinity · 2025",
    points: [
      "Spatial variation in soil acidity/alkalinity across the region",
      "Joined ERA5-Land soil-moisture/type layers with regional soil survey data on a geospatial key",
      "Modeled pH at grid level for the coverage area",
      "Controls nutrient availability — wrong pH starves the crop even with correct fertilizer",
      "Flagged acidic zones needing lime amendment, improving fertilizer ROI",
    ],
  },
  {
    id: "elevation",
    title: "Elevation",
    file: "portfolio_elevation_map.jpg",
    metric: "Terrain height (DEM) · static",
    points: [
      "Digital elevation model of terrain height across the region",
      "Extracted geopotential height from ERA5-Land GRIB files, converted to elevation using standard gravity",
      "Gridded into a choropleth layer alongside the other features",
      "Shapes micro-climate — temperature lapse rate, drainage, frost risk",
      "Surfaced flood-prone low-lying plots and highland frost-risk zones for field-siting decisions",
    ],
  },
  {
    id: "growing_degree_days",
    title: "Growing Degree Days",
    file: "portfolio_growing_degree_days_map.jpg",
    metric: "Cumulative GDD · 2025",
    points: [
      "Cumulative heat units available for crop growth — a region's usable growing season",
      "Computed daily GDD from ERA5-Land min/max temperature against each crop's base temperature",
      "Summed across the year in the same PySpark pipeline",
      "Decides if a region can carry a crop through its full cycle — key input for crop-variety selection",
      "Identified zones clearing the GDD threshold, tightening planting-calendar recommendations",
    ],
  },
];

// ── Add new projects here — newest first. ──────────────────────
export const projects = [
  {
    title: "Text-to-Image Generation Pipeline",
    period: "2025",
    description:
      "A generative AI pipeline using Stable Diffusion (dreamlike-diffusion-1.0 and SDXL) via HuggingFace Diffusers, enabling prompt-based image synthesis with configurable inference parameters. Optimized inference using torch.float16 precision on CUDA GPU, reducing generation time while supporting multi-image batch outputs.",
    stack: ["Python", "HuggingFace Diffusers", "Stable Diffusion", "CUDA"],
    github: "https://github.com/cybersynergy-ds",
    demo: "",
    featured: true,
  },
  {
    title: "Medical Chatbot (RAG)",
    period: "2025",
    description:
      "A Retrieval-Augmented Generation medical query bot ingesting structured documents from the Gale Encyclopedia of Medicine using NLP-based chunking and vector retrieval. Leveraged HuggingFace Transformers for NLU-based answer extraction, improving query resolution accuracy over keyword-based baselines.",
    stack: ["Python", "NLP", "HuggingFace Transformers", "RAG", "Vector DB"],
    github: "https://github.com/cybersynergy-ds",
    demo: "",
    featured: true,
  },
  {
    title: "Gym Performance Optimizer",
    period: "2024",
    description:
      "An end-to-end fitness monitoring system using sensor fusion combining accelerometer, gyroscope, and IMU data from ESP32 microcontrollers to analyze gym performance in real time. Implemented AI-driven posture detection using MediaPipe Pose achieving real-time form analysis at 30 FPS.",
    stack: ["Python", "MediaPipe", "ESP32", "TensorFlow", "IoT"],
    github: "https://github.com/cybersynergy-ds",
    demo: "",
    featured: false,
  },
  {
    title: "Gesture-Based Control System",
    period: "2024",
    description:
      "A real-time hand gesture recognition system achieving 90% classification accuracy for laptop control (volume, brightness) using MediaPipe Hands landmarks, with sub-1 second end-to-end response latency.",
    stack: ["Python", "OpenCV", "MediaPipe"],
    github: "https://github.com/cybersynergy-ds",
    demo: "",
    featured: false,
  },
];

export const skills = {
  Languages: ["Python", "SQL", "Java", "Scala", "C", "Bash", "HTML/CSS"],
  "Big Data & Processing": [
    "Apache Spark",
    "PySpark",
    "Apache Kafka",
    "Hadoop",
    "Apache Airflow",
    "DBT",
  ],
  "Cloud Platforms": [
    "AWS (Lambda, S3, EC2, Redshift, Glacier, IAM, CloudWatch)",
    "GCP (Cloud Run, Cloud Functions, Cloud Scheduler, BigQuery, Pub/Sub)",
  ],
  "Databases & Warehousing": [
    "Snowflake",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Data Modeling",
    "Dimensional Modeling",
  ],
  "DevOps & Tools": [
    "Docker",
    "Kubernetes",
    "Git",
    "GitHub Actions",
    "Terraform",
    "CI/CD",
    "REST APIs",
    "FastAPI",
    "Postman",
  ],
  "Data Science & ML": [
    "TensorFlow",
    "OpenCV",
    "MediaPipe",
    "Streamlit",
    "Folium",
    "Pandas",
    "NumPy",
  ],
};

export const education = [
  {
    school: "IIITDM Kancheepuram",
    degree: "B.Tech in Smart Manufacturing",
    period: "2022 – 2026",
    detail: "CGPA: 8.0/10",
  },
  {
    school: "IIT Madras",
    degree: "BS Degree — Diploma in Data Science",
    period: "2023 – Present",
    detail: "CGPA: 8.10/10",
  },
];

export const achievements = [
  "Qualified GATE 2025 in Data Science & Artificial Intelligence (DA) — while in the third year of B.Tech.",
  "Achieved 96 percentile in JEE Mains 2022 among 1M+ candidates.",
];
