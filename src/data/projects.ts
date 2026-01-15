import { CYBERSECURITY_REPO } from './cybersecurity-tools'

export type Project = {
  id: number
  title: string
  description: string
  image: string
  category: 'full-stack' | 'cybersecurity' | 'cloud' | 'devops'
  organization: string
  technologies: string[]
  features: string[]
  outcomes: string[]
  github: string
  live: string
  status: 'completed' | 'in-progress' | 'planning'
  duration: string
  teamSize: number
}

export const projects: Project[] = [
  {
    id: 6,
    title: 'Cybersecurity Beginner Projects Portfolio',
    description:
      'A 15-tool security portfolio built over 15 months covering encoding analysis, network recon, deception tech, persistence hunting, compliance auditing, kernel observability, and dependency scanning. Python, Go, C++, V, and Bash across Windows and Linux.',
    image: '/api/placeholder/600/400',
    category: 'cybersecurity',
    organization: 'Personal — Open Source',
    technologies: [
      'Python',
      'Go',
      'C++',
      'V',
      'Bash',
      'FastAPI',
      'React',
      'eBPF',
      'SQLite',
      'PostgreSQL',
    ],
    features: [
      '15 standalone CLI and service tools with architecture docs and setup scripts',
      'Daily development cadence from April 2025 through June 2026',
      'MITRE ATT&CK mapping for offensive and defensive tooling',
      'Per-project virtual environments and cross-platform setup orchestration',
    ],
    outcomes: [
      'Published open-source monorepo with 445+ documented commits',
      'Working tools for encoding, DNS, metadata scrubbing, CVE scanning, and persistence hunting',
      'Educational C2 and canary token labs for controlled security research',
    ],
    github: CYBERSECURITY_REPO,
    live: '/projects/cybersecurity',
    status: 'completed',
    duration: 'April 2025 – June 2026',
    teamSize: 1,
  },
  {
    id: 1,
    title: 'Elastic ML Inference Serving',
    description:
      'Autoscaling image-classification inference on Kubernetes using ResNet-18 with sub-0.5s p99 latency under variable load; focused on elasticity, orchestration, and SLOs.',
    image: '/api/placeholder/600/400',
    category: 'cloud',
    organization: 'Technische Universität Ilmenau (RCSE)',
    technologies: [
      'Kubernetes',
      'Docker',
      'Python',
      'FastAPI',
      'PyTorch (ResNet-18)',
      'Prometheus',
      'Grafana',
      'Matplotlib',
      'REST APIs',
    ],
    features: [
      'Microservices on Kubernetes (API gateway, inference pods, monitoring)',
      'Custom autoscaler on latency and queue length (beats HPA at 70%/90% CPU)',
      'Latency SLO 0.5s p99 with end-to-end instrumentation',
      'Benchmarking vs HPA, time-series analysis, reusable autoscaler module',
    ],
    outcomes: [
      '30% reduction in p99 latency vs Kubernetes HPA at 90% CPU target',
      'Reduced over-/under-provisioning by ~25%, improving resource efficiency',
      'Delivered modular autoscaler reusable across ML inference services',
    ],
    github: '',
    live: '',
    status: 'completed',
    duration: 'May 2025 – Jul 2025',
    teamSize: 3,
  },
  {
    id: 2,
    title: 'HISSEC – ABAC-Based Access Control for Hospital Information System',
    description:
      'Formal ABACα policy model with modular mappings, role-driven permissions, and automata-based state transitions ensuring EHR isolation and maintainable policies.',
    image: '/api/placeholder/600/400',
    category: 'cybersecurity',
    organization: 'Technische Universität Ilmenau',
    technologies: ['ABACα', 'Set Theory', 'Automata Theory', 'Formal Spec', 'LaTeX'],
    features: [
      'Modular mapping functions and dynamic vs static attribute separation',
      'Role-based fetch permissions; set-intersection to reduce rule complexity ~40%',
      'Deterministic automaton for user/admin operations',
    ],
    outcomes: [
      'Prevented unauthorized EHR reads with precise, role-driven controls',
      'Reduced rule complexity by ~40% and simplified policy maintenance',
      'Clear separation of dynamic and static policy components',
    ],
    github: '',
    live: '',
    status: 'completed',
    duration: 'Jun 2025 – Jul 2025',
    teamSize: 1,
  },
  {
    id: 3,
    title: 'AES Implementation',
    description:
      'Python implementation of AES with 128/192/256-bit keys, ECB/CBC modes, PKCS#7 padding, validated against NIST test vectors with perf benchmarks.',
    image: '/api/placeholder/600/400',
    category: 'cybersecurity',
    organization: 'Technische Universität Ilmenau',
    technologies: ['Python', 'AES-128/192/256', 'NIST Vectors', 'ECB', 'CBC', 'PKCS#7'],
    features: [
      'SubBytes, ShiftRows, MixColumns, AddRoundKey, Key Expansion',
      'Encryption/decryption modules and correctness verification',
      'Runtime and memory benchmarking',
    ],
    outcomes: [
      'Verified correctness against official NIST test vectors',
      'Benchmarked runtime and memory usage across key sizes/modes',
    ],
    github: '',
    live: '',
    status: 'completed',
    duration: 'Nov 2024 – Dec 2024',
    teamSize: 1,
  },
  {
    id: 4,
    title: 'Pharmacy Management System',
    description:
      'PMS unifying inventory, e‑prescriptions, billing, POS/insurance, with dashboards and security controls for reliable operations.',
    image: '/api/placeholder/600/400',
    category: 'full-stack',
    organization: "St. Joseph's University",
    technologies: ['PHP', 'JavaScript', 'HTML5', 'CSS', 'MySQL', 'RBAC'],
    features: [
      'Real-time stock/expiry tracking, alerts, barcoded dispensing, auto restock',
      'E‑prescriptions and billing, POS and insurance integrations',
      'Dashboards for sales/inventory; RBAC, encryption, access logs',
    ],
    outcomes: [
      'Faster, error-resistant dispensing workflows with automated restocking',
      'Improved visibility via KPI dashboards; stronger security with RBAC and logs',
    ],
    github: '',
    live: '',
    status: 'completed',
    duration: 'Mar 2023 – Aug 2023',
    teamSize: 3,
  },
  {
    id: 5,
    title: 'Weaponization of IoT – The Rise of Microbots',
    description:
      'Research on autonomous microbots: attack surfaces, swarm tactics, C2 patterns; threat model, kill-chain, and mitigations across consumer/industrial IoT.',
    image: '/api/placeholder/600/400',
    category: 'cybersecurity',
    organization: "St. Joseph's University",
    technologies: ['IoT Security', 'Threat Modeling', 'Anomaly Detection', 'Network Segmentation', 'Signed Firmware'],
    features: [
      'Comprehensive literature review across academic/industry/policy sources',
      'Identity-first access, segmentation, signed firmware, supply-chain controls',
      'Proposed anomaly-based detection and response strategies',
    ],
    outcomes: [
      'Produced conceptual threat model and microbot kill chain',
      'Outlined practical mitigations spanning identity, network, and firmware',
    ],
    github: '',
    live: '',
    status: 'completed',
    duration: 'May 2020 – Oct 2020',
    teamSize: 1,
  },
]
