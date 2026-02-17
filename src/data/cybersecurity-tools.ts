export type CybersecurityTool = {
  id: number
  name: string
  slug: string
  stack: string
  period: string
  description: string
  overview: string
  features: string[]
  useCases: string[]
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
    description:
      'Multi-format encoder/decoder with recursive layer peeling for stacked payloads in CTF and malware analysis.',
    overview:
      'A command-line encoding utility for security labs, CTFs, and incident response. Supports multiple formats with auto-detection and recursive layer peeling to strip stacked encodings used in malware and WAF bypass attempts.',
    features: [
      'Encode and decode Base64, Base64URL, Base32, Hex, and URL formats',
      'Auto-detect encoding format with confidence scoring',
      'Recursively peel multi-layered encodings for obfuscation analysis',
      'Chain multiple encoding steps to test obfuscation patterns',
      'Accept input from arguments, files, or stdin for pipeline integration',
    ],
    useCases: [
      'Decode JWT tokens, hex dumps, and URL-encoded payloads during investigations',
      'Analyze stacked encodings in malware or WAF bypass samples',
      'Automate encoding tasks in shell pipelines and scripts',
    ],
    tags: ['Base64', 'Encoding', 'CLI'],
  },
  {
    id: 2,
    name: 'C2 Beacon',
    slug: 'c2-beacon',
    stack: 'Python, FastAPI, React',
    period: 'May – June 2025',
    description:
      'Educational command-and-control lab with WebSocket tasking, SQLite persistence, and operator dashboard.',
    overview:
      'An educational C2 platform demonstrating how modern frameworks operate under the hood. Includes a WebSocket beacon implant, FastAPI server, and React operator dashboard with real-time session management and MITRE ATT&CK-aligned commands.',
    features: [
      'WebSocket C2 protocol with XOR and Base64 encoding',
      'Ten beacon commands mapped to MITRE ATT&CK techniques',
      'Real-time operator dashboard with live heartbeat tracking',
      'Terminal-style session page with command history and autocomplete',
      'Per-beacon async task queues with SQLite persistence',
      'Exponential backoff reconnection with configurable sleep and jitter',
    ],
    useCases: [
      'Study C2 architecture and operator workflows in isolated labs',
      'Demonstrate post-exploitation techniques for security training',
      'Research beacon communication, task queuing, and operator dashboards',
    ],
    tags: ['C2', 'WebSocket', 'MITRE ATT&CK'],
  },
  {
    id: 3,
    name: 'Caesar Cipher',
    slug: 'caesar-cipher',
    stack: 'Python',
    period: 'July 2025',
    description:
      'Encrypt, decrypt, and crack Caesar ciphers using chi-squared frequency analysis.',
    overview:
      'A classical cryptography CLI implementing the Caesar cipher with configurable shift keys. The crack command brute-forces all 26 keys and ranks results using chi-squared frequency analysis — foundational to real cryptanalysis thinking.',
    features: [
      'Encrypt text with a Caesar shift key from 0 to 25',
      'Decrypt ciphertext when the key is known',
      'Brute-force crack unknown ciphertext by testing all 26 shifts',
      'Rank results with chi-squared frequency analysis scoring',
      'Rich table output with file and stdin support',
    ],
    useCases: [
      'Practice classical cryptanalysis in CTF challenges',
      'Teach frequency analysis and brute-force decryption concepts',
      'Quickly encrypt or decrypt Caesar text during security exercises',
    ],
    tags: ['Cryptanalysis', 'CLI'],
  },
  {
    id: 4,
    name: 'Canary Token Generator',
    slug: 'canary-token-generator',
    stack: 'Go, PostgreSQL, React',
    period: 'August – September 2025',
    description:
      'Self-hosted honeytokens with Telegram/webhook alerts, Redis dedup, and seven token types.',
    overview:
      'A self-hosted honeytoken generator for planting deceptive credentials, documents, and URLs that alert when accessed. Seven artifact types with Telegram or HMAC-signed webhook delivery, GeoIP enrichment, and deduplication.',
    features: [
      'Generate seven tripwire types: web bugs, PDFs, DOCX, env files, kubeconfig, and more',
      'Instant alerts via Telegram or HMAC-signed webhooks',
      'GeoIP enrichment with country, region, city, and ASN data',
      'Browser fingerprint capture through delayed redirect interstitials',
      'Cloudflare Turnstile protection and rate limiting on token creation',
      'Operator admin API with manage URLs and optional Cloudflare Tunnel',
    ],
    useCases: [
      'Deploy deceptive credentials to detect unauthorized access',
      'Monitor attackers harvesting fake secrets from shared drives',
      'Gain early warning when stolen kubeconfig or DB credentials are used',
    ],
    tags: ['Deception', 'Honeytoken'],
  },
  {
    id: 5,
    name: 'DNS Lookup',
    slug: 'dns-lookup',
    stack: 'Python',
    period: 'October 2025',
    description: 'DNS and WHOIS CLI with batch lookups, trace mode, and JSON export.',
    overview:
      'A DNS investigation tool for querying records, reverse lookups, resolution path tracing, and WHOIS data. Rich table output for interactive use and JSON export for scripting — every query runs fresh with no caching.',
    features: [
      'Query A, AAAA, MX, NS, TXT, CNAME, and SOA records with colored tables',
      'Reverse DNS lookups to resolve IPs to hostnames',
      'Trace DNS resolution paths from root to authoritative nameservers',
      'Concurrent batch lookups from domain list files',
      'Integrated WHOIS for domain registration information',
      'JSON export with custom DNS server and timeout configuration',
    ],
    useCases: [
      'Investigate domain infrastructure during reconnaissance',
      'Trace DNS paths to diagnose misconfigurations or hijacking',
      'Automate bulk domain and WHOIS lookups in assessment pipelines',
    ],
    tags: ['DNS', 'Recon'],
  },
  {
    id: 6,
    name: 'Firewall Rule Engine',
    slug: 'firewall-rule-engine',
    stack: 'V',
    period: 'November 2025',
    description:
      'Parse iptables and nftables rulesets, detect shadowed rules, and emit hardened templates.',
    overview:
      'A firewall ruleset analyzer parsing iptables-save and nftables configs into a unified model. Detects shadowed and contradictory rules, suggests optimizations, and generates hardened rulesets from scratch with severity-coded output.',
    features: [
      'Parse iptables-save and nftables list formats into a unified rule model',
      'Detect shadowed rules, contradictions, duplicates, and redundant entries',
      'Suggest optimizations: port merging, reordering, missing rate limits',
      'Generate hardened rulesets with default-deny and anti-spoofing policies',
      'Convert rulesets between iptables and nftables formats',
      'Diff two rulesets to identify changes between versions',
    ],
    useCases: [
      'Audit firewall configurations for conflicts and security gaps',
      'Generate baseline hardened rulesets for new server deployments',
      'Compare ruleset versions during change management reviews',
    ],
    tags: ['Firewall', 'iptables'],
  },
  {
    id: 7,
    name: 'Hash Cracker',
    slug: 'hash-cracker',
    stack: 'C++23, OpenSSL',
    period: 'December 2025',
    description:
      'Multi-threaded offline hash recovery with dictionary, brute-force, and rule attacks.',
    overview:
      'A multi-threaded hash cracker recovering plaintext from password hashes via dictionary, brute-force, and rule-based attacks. Supports MD5, SHA1, SHA256, and SHA512 with memory-mapped wordlists and zero-contention work partitioning.',
    features: [
      'Crack MD5, SHA1, SHA256, and SHA512 with auto-detection',
      'Dictionary attacks using memory-mapped wordlists for large files',
      'Brute-force with configurable character sets across all CPU cores',
      'Rule-based mutations: leet speak, capitalization, digit append',
      'Salted hashes with prepend or append positioning',
      'Real-time progress with hashes/sec, ETA, and JSON output',
    ],
    useCases: [
      'Recover weak passwords from hash dumps during authorized pentests',
      'Benchmark cracking performance and attack strategies in labs',
      'Demonstrate hash vulnerability and the need for strong credentials',
    ],
    tags: ['Hashing', 'OpenSSL'],
  },
  {
    id: 8,
    name: 'Keylogger',
    slug: 'keylogger',
    stack: 'Python',
    period: 'January 2026',
    description:
      'Educational keystroke logger with window context tracking for authorized security research.',
    overview:
      'An educational keylogger for understanding input capture, window tracking, and remote log delivery. Records keystrokes with microsecond timestamps, tracks active windows, and supports log rotation and optional webhook delivery.',
    features: [
      'Capture keyboard events with microsecond-precision timestamps',
      'Track active window titles across Windows, macOS, and Linux',
      'Automatic log rotation based on configurable size limits',
      'Runtime pause and resume toggle with F9',
      'Batched webhook delivery for C2 research simulation',
      'Thread-safe operations with proper locking and clean shutdown',
    ],
    useCases: [
      'Study input capture behavior in controlled lab environments',
      'Research remote log exfiltration patterns for defensive analysis',
      'Demonstrate keystroke logging risks in authorized awareness training',
    ],
    tags: ['Windows', 'Research'],
  },
  {
    id: 9,
    name: 'CIS Hardening Auditor',
    slug: 'linux-cis-hardening-auditor',
    stack: 'Bash',
    period: 'February 2026',
    description:
      'Automated CIS benchmark compliance checks for Debian/Ubuntu with JSON and HTML reports.',
    overview:
      'A CIS Benchmark compliance auditor evaluating 104 controls for Debian and Ubuntu. Generates scored reports, compares against saved baselines, and provides remediation commands for failed controls at Level 1 and Level 2.',
    features: [
      'Audit 104 CIS controls covering filesystem, services, network, logging, SSH, and accounts',
      'Scored reports in terminal, JSON, or HTML formats',
      'Baseline comparison to detect compliance regressions over time',
      'Specific remediation commands for every failed control',
      'Level 1 and Level 2 profiles with category filtering',
      'Test mode against mock fixtures without root access',
    ],
    useCases: [
      'Assess Linux hardening posture against CIS Benchmark standards',
      'Track compliance improvements or regressions with baseline diffs',
      'Generate audit reports for security reviews and remediation planning',
    ],
    tags: ['Compliance', 'Linux'],
  },
  {
    id: 10,
    name: 'eBPF Security Tracer',
    slug: 'linux-ebpf-security-tracer',
    stack: 'Python, eBPF',
    period: 'March 2026',
    description:
      'Real-time syscall tracer with ten detection rules mapped to MITRE ATT&CK.',
    overview:
      'A real-time syscall tracer built on eBPF for Linux security observability. Monitors process execution, file access, network connections, and privilege changes with ten MITRE ATT&CK-mapped detection rules for multi-stage attack correlation.',
    features: [
      'Monitor syscalls via eBPF tracepoints across process, file, network, and privilege events',
      'Ten detection rules mapped to MITRE ATT&CK techniques',
      'Cross-step event correlation for multi-stage attack chains',
      'Live color-coded streams, JSON, or table summary output',
      'Filter by severity from LOW through CRITICAL',
      'Event enrichment from /proc with parent process and username context',
    ],
    useCases: [
      'Detect privilege escalation and reverse shells in real time',
      'Monitor hosts for persistence, log tampering, and sensitive file access',
      'Integrate eBPF telemetry into incident response workflows',
    ],
    tags: ['eBPF', 'Detection'],
  },
  {
    id: 11,
    name: 'Metadata Scrubber',
    slug: 'metadata-scrubber-tool',
    stack: 'Python',
    period: 'April 2026',
    description:
      'Strip EXIF GPS, author names, and document metadata before sharing files.',
    overview:
      'A privacy-focused CLI stripping sensitive metadata from images, PDFs, and Office documents before sharing. Removes GPS coordinates, author names, timestamps, and camera data with concurrent batch processing and signature-based format detection.',
    features: [
      'Strip metadata from JPEG, PNG, PDF, Word, Excel, and PowerPoint files',
      'Concurrent processing for efficient batch handling',
      'Dry-run preview mode before making changes',
      'Verification reports with before-and-after metadata comparisons',
      'Format detection by file signature, not extension',
      'Remove GPS, author info, timestamps, and software traces',
    ],
    useCases: [
      'Sanitize documents and images before publishing externally',
      'Remove location and identity metadata in privacy-sensitive workflows',
      'Batch-clean metadata from large collections before archival',
    ],
    tags: ['Privacy', 'OPSEC'],
  },
  {
    id: 12,
    name: 'Network Traffic Analyzer',
    slug: 'network-traffic-analyzer',
    stack: 'Python, Scapy',
    period: 'May 2026',
    description:
      'Live capture and PCAP replay with protocol stats, top talkers, and chart export.',
    overview:
      'Network traffic analysis in C++ and Python implementations capturing packets at the kernel level. C++ provides a high-performance TUI; Python offers scriptable analysis with chart export. Both deliver protocol statistics, top talkers, and bandwidth metrics.',
    features: [
      'Live capture from network interfaces with BPF filter support',
      'Offline .pcap analysis for retrospective investigation',
      'Real-time protocol distribution across TCP, UDP, and ICMP',
      'Top IP addresses and source-to-destination traffic pairs',
      'Interactive TUI in C++ and Matplotlib chart export in Python',
      'Configurable capture limits by packet count and duration',
    ],
    useCases: [
      'Monitor live traffic and identify top talkers during incident triage',
      'Analyze PCAP files to investigate suspicious network activity',
      'Visualize protocol distribution for network security assessments',
    ],
    tags: ['PCAP', 'Network'],
  },
  {
    id: 13,
    name: 'Port Scanner',
    slug: 'simple-port-scanner',
    stack: 'C++20, Boost.Asio',
    period: 'May 2026',
    description:
      'Async TCP connect scanner with configurable concurrency, timeouts, and banner grab.',
    overview:
      'An asynchronous TCP port scanner in C++20 with Boost.Asio probing targets for open, closed, and filtered ports. Parallel connection attempts with configurable concurrency, timeouts, and banner grabbing in verbose mode.',
    features: [
      'TCP connect scans with single ports, comma lists, or ranges',
      'Adjustable thread-based concurrency',
      'Configurable connection timeouts in seconds',
      'Common port-to-service name mapping (SSH, HTTP, HTTPS)',
      'Banner grabbing on open ports in verbose mode',
      'Clear terminal output with port state and banner text',
    ],
    useCases: [
      'Enumerate open services on authorized targets during reconnaissance',
      'Verify firewall rules by confirming expected port states',
      'Identify running services and banners during vulnerability scoping',
    ],
    tags: ['TCP', 'Recon'],
  },
  {
    id: 14,
    name: 'Vulnerability Scanner',
    slug: 'simple-vulnerability-scanner',
    stack: 'Go',
    period: 'June 2026',
    description:
      'Scan Python dependencies against OSV.dev CVE database with safe update mode.',
    overview:
      'A Go CLI scanning Python dependency files for known CVEs and updating packages to latest stable versions. Parses pyproject.toml and requirements.txt, queries PyPI, and checks advisories through OSV.dev with formatting-preserving rewrites.',
    features: [
      'Parse pyproject.toml and requirements.txt for dependency versions',
      'Query OSV.dev for known vulnerabilities in pinned packages',
      'Update dependencies to latest stable releases with PEP 440 handling',
      'Filter out pre-release versions by default',
      'Parallel PyPI lookups with local ETag caching',
      'Preserve comments and formatting when rewriting dependency files',
    ],
    useCases: [
      'Scan Python projects for known CVEs in third-party dependencies',
      'Automate dependency updates while maintaining file formatting',
      'Integrate vulnerability checks into CI/CD supply chain pipelines',
    ],
    tags: ['CVE', 'Supply Chain'],
  },
  {
    id: 15,
    name: 'Persistence Scanner',
    slug: 'systemd-persistence-scanner',
    stack: 'Go',
    period: 'June 2026',
    description:
      'Hunt Linux persistence across systemd, cron, SSH, LD_PRELOAD, and 12 other categories.',
    overview:
      'A Go CLI scanning Linux filesystems for persistence mechanisms: systemd units, cron jobs, shell profile injections, SSH backdoors, and LD_PRELOAD hooks. Each finding includes severity ratings and MITRE ATT&CK references with baseline diff mode.',
    features: [
      '17 scanner modules across persistence categories on a Linux root filesystem',
      'Detect reverse shells, download-and-execute chains, encoded payloads, alias hijacking',
      'Severity levels from info through critical with MITRE ATT&CK mapping',
      'Baseline snapshots with diff mode to surface only new findings',
      'Single static binary with no runtime dependencies',
      'JSON output for pipeline integration',
    ],
    useCases: [
      'Hunt for attacker persistence on compromised or suspect Linux hosts',
      'Establish baselines on clean systems and monitor for unauthorized changes',
      'Integrate persistence scanning into incident response workflows',
    ],
    tags: ['Persistence', 'MITRE ATT&CK'],
  },
]
