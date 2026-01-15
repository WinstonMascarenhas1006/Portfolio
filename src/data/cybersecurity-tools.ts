export type CybersecurityTool = {
  id: number
  name: string
  slug: string
  stack: string
  period: string
  description: string
  tags: string[]
}

export const CYBERSECURITY_REPO =
  'https://github.com/WinstonMascarenhas1006/cybersecurity-projects'

export const cybersecurityTools: CybersecurityTool[] = [
  {
    id: 1,
    name: 'b64tool',
    slug: 'base64-tool',
    stack: 'Python',
    period: 'April 2025',
    description: 'Multi-format encoder/decoder with recursive layer peeling for stacked payloads in CTF and malware analysis.',
    tags: ['Base64', 'Encoding', 'CLI'],
  },
  {
    id: 2,
    name: 'C2 Beacon',
    slug: 'c2-beacon',
    stack: 'Python, FastAPI, React',
    period: 'May – June 2025',
    description: 'Educational command-and-control lab with WebSocket tasking, SQLite persistence, and operator dashboard.',
    tags: ['C2', 'WebSocket', 'MITRE ATT&CK'],
  },
  {
    id: 3,
    name: 'Caesar Cipher',
    slug: 'caesar-cipher',
    stack: 'Python',
    period: 'July 2025',
    description: 'Encrypt, decrypt, and crack Caesar ciphers using chi-squared frequency analysis.',
    tags: ['Cryptanalysis', 'CLI'],
  },
  {
    id: 4,
    name: 'Canary Token Generator',
    slug: 'canary-token-generator',
    stack: 'Go, PostgreSQL, React',
    period: 'August – September 2025',
    description: 'Self-hosted honeytokens with Telegram/webhook alerts, Redis dedup, and seven token types.',
    tags: ['Deception', 'Honeytoken'],
  },
  {
    id: 5,
    name: 'DNS Lookup',
    slug: 'dns-lookup',
    stack: 'Python',
    period: 'October 2025',
    description: 'DNS and WHOIS CLI with batch lookups, trace mode, and JSON export.',
    tags: ['DNS', 'Recon'],
  },
  {
    id: 6,
    name: 'Firewall Rule Engine',
    slug: 'firewall-rule-engine',
    stack: 'V',
    period: 'November 2025',
    description: 'Parse iptables and nftables rulesets, detect shadowed rules, and emit hardened templates.',
    tags: ['Firewall', 'iptables'],
  },
  {
    id: 7,
    name: 'Hash Cracker',
    slug: 'hash-cracker',
    stack: 'C++23, OpenSSL',
    period: 'December 2025',
    description: 'Multi-threaded offline hash recovery with dictionary, brute-force, and rule attacks.',
    tags: ['Hashing', 'OpenSSL'],
  },
  {
    id: 8,
    name: 'Keylogger',
    slug: 'keylogger',
    stack: 'Python',
    period: 'January 2026',
    description: 'Educational keystroke logger with window context tracking for authorized security research.',
    tags: ['Windows', 'Research'],
  },
  {
    id: 9,
    name: 'CIS Hardening Auditor',
    slug: 'linux-cis-hardening-auditor',
    stack: 'Bash',
    period: 'February 2026',
    description: 'Automated CIS benchmark compliance checks for Debian/Ubuntu with JSON and HTML reports.',
    tags: ['Compliance', 'Linux'],
  },
  {
    id: 10,
    name: 'eBPF Security Tracer',
    slug: 'linux-ebpf-security-tracer',
    stack: 'Python, eBPF',
    period: 'March 2026',
    description: 'Real-time syscall tracer with ten detection rules mapped to MITRE ATT&CK.',
    tags: ['eBPF', 'Detection'],
  },
  {
    id: 11,
    name: 'Metadata Scrubber',
    slug: 'metadata-scrubber-tool',
    stack: 'Python',
    period: 'April 2026',
    description: 'Strip EXIF GPS, author names, and document metadata before sharing files.',
    tags: ['Privacy', 'OPSEC'],
  },
  {
    id: 12,
    name: 'Network Traffic Analyzer',
    slug: 'network-traffic-analyzer',
    stack: 'Python, Scapy',
    period: 'May 2026',
    description: 'Live capture and PCAP replay with protocol stats, top talkers, and chart export.',
    tags: ['PCAP', 'Network'],
  },
  {
    id: 13,
    name: 'Port Scanner',
    slug: 'simple-port-scanner',
    stack: 'C++20, Boost.Asio',
    period: 'May 2026',
    description: 'Async TCP connect scanner with configurable concurrency, timeouts, and banner grab.',
    tags: ['TCP', 'Recon'],
  },
  {
    id: 14,
    name: 'Vulnerability Scanner',
    slug: 'simple-vulnerability-scanner',
    stack: 'Go',
    period: 'June 2026',
    description: 'Scan Python dependencies against OSV.dev CVE database with safe update mode.',
    tags: ['CVE', 'Supply Chain'],
  },
  {
    id: 15,
    name: 'Persistence Scanner',
    slug: 'systemd-persistence-scanner',
    stack: 'Go',
    period: 'June 2026',
    description: 'Hunt Linux persistence across systemd, cron, SSH, LD_PRELOAD, and 12 other categories.',
    tags: ['Persistence', 'MITRE ATT&CK'],
  },
]
