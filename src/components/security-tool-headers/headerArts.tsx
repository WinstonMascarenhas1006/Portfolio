import type { FC } from 'react'

type ArtProps = { className?: string }

const stroke = '#A5E9FF'
const accent = '#FF8C42'

function Base64Art({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 320 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="200" y="18" fill={stroke} opacity="0.25" fontSize="8" fontFamily="monospace">SGVsbG8=</text>
      <text x="230" y="32" fill={stroke} opacity="0.2" fontSize="7" fontFamily="monospace">aGVsbG8gd29ybGQ=</text>
      <text x="210" y="100" fill={stroke} opacity="0.15" fontSize="7" fontFamily="monospace">48656c6c6f</text>
      <rect x="48" y="38" width="44" height="32" rx="4" stroke={stroke} strokeWidth="1.2" opacity="0.7" />
      <text x="58" y="58" fill={accent} fontSize="11" fontFamily="monospace" opacity="0.9">$_</text>
      <path d="M92 54 H118" stroke={accent} strokeWidth="1.2" markerEnd="url(#arrow)" />
      <rect x="122" y="44" width="36" height="20" rx="3" stroke={stroke} strokeWidth="1" opacity="0.6" />
      <text x="128" y="57" fill={stroke} fontSize="7" opacity="0.8">Base32</text>
      <path d="M92 62 H108 V78 H148" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <rect x="152" y="70" width="32" height="18" rx="3" stroke={stroke} strokeWidth="1" opacity="0.6" />
      <text x="160" y="82" fill={stroke} fontSize="7" opacity="0.8">Hex</text>
      <path d="M200 54 L220 54 L220 38 L248 38" stroke={accent} strokeWidth="1" opacity="0.7" />
      <path d="M228 30 L248 38 L228 46 Z" fill={accent} opacity="0.5" />
      <text x="252" y="42" fill={stroke} fontSize="7" opacity="0.7">WAF</text>
      <rect x="252" y="58" width="52" height="36" rx="3" stroke={stroke} strokeWidth="0.8" opacity="0.35" />
      <text x="258" y="72" fill={stroke} fontSize="6" opacity="0.5">LAYER 1</text>
      <text x="258" y="84" fill={accent} fontSize="6" opacity="0.6">LAYER 2</text>
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill={accent} />
        </marker>
      </defs>
    </svg>
  )
}

function C2BeaconArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 320 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="260" cy="40" r="18" stroke={accent} strokeWidth="1.2" opacity="0.6" />
      <circle cx="260" cy="40" r="8" fill={accent} opacity="0.35" />
      <path d="M260 22 L260 10 M278 40 L290 40 M260 58 L260 70 M242 40 L230 40" stroke={accent} strokeWidth="0.8" opacity="0.4" />
      <rect x="40" y="30" width="80" height="50" rx="4" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <text x="52" y="48" fill={stroke} fontSize="7" opacity="0.7">Operator</text>
      <text x="52" y="62" fill={accent} fontSize="6" opacity="0.8">Dashboard</text>
      <path d="M120 55 Q180 20 242 40" stroke={stroke} strokeWidth="1.2" strokeDasharray="4 3" opacity="0.6" />
      <text x="168" y="28" fill={stroke} fontSize="6" opacity="0.5">WebSocket</text>
      <rect x="48" y="72" width="64" height="14" rx="2" stroke={stroke} strokeWidth="0.8" opacity="0.4" />
      <text x="54" y="82" fill={accent} fontSize="6" opacity="0.7">MITRE T1059</text>
    </svg>
  )
}

function CaesarCipherArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 320 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="60" r="42" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <circle cx="200" cy="60" r="28" stroke={accent} strokeWidth="0.8" opacity="0.4" strokeDasharray="3 2" />
      <text x="192" y="48" fill={stroke} fontSize="8" opacity="0.7">A</text>
      <text x="218" y="56" fill={accent} fontSize="8" opacity="0.8">D</text>
      <text x="178" y="72" fill={stroke} fontSize="8" opacity="0.6">X</text>
      <path d="M200 18 L200 8 M242 60 L252 60 M200 102 L200 112" stroke={accent} strokeWidth="1" opacity="0.5" />
      <text x="254" y="64" fill={accent} fontSize="7" opacity="0.7">shift+3</text>
      <rect x="48" y="44" width="72" height="24" rx="3" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <text x="56" y="60" fill={stroke} fontSize="8" fontFamily="monospace" opacity="0.7">HELLO → KHOOR</text>
      <path d="M120 56 H168" stroke={accent} strokeWidth="1.2" opacity="0.6" />
      <text x="48" y="88" fill={stroke} fontSize="6" opacity="0.5">chi-squared analysis</text>
    </svg>
  )
}

function CanaryTokenArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 320 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="180" y="28" width="48" height="56" rx="4" stroke={accent} strokeWidth="1.2" opacity="0.6" />
      <text x="192" y="50" fill={accent} fontSize="7" opacity="0.8">.env</text>
      <text x="188" y="64" fill={stroke} fontSize="6" opacity="0.6">fake cred</text>
      <circle cx="228" cy="56" r="6" fill={accent} opacity="0.5" />
      <path d="M234 56 H270" stroke={accent} strokeWidth="1.2" opacity="0.7" />
      <path d="M270 48 L282 56 L270 64" fill={accent} opacity="0.5" />
      <rect x="286" y="42" width="24" height="28" rx="3" stroke={stroke} strokeWidth="1" opacity="0.6" />
      <path d="M294 50 L302 58 L294 66" stroke={accent} strokeWidth="1.2" />
      <text x="48" y="50" fill={stroke} fontSize="7" opacity="0.6">Honeytoken</text>
      <path d="M48 58 Q120 30 180 56" stroke={stroke} strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
      <circle cx="140" cy="38" r="10" stroke={accent} strokeWidth="1" opacity="0.5" />
      <text x="134" y="42" fill={accent} fontSize="8" opacity="0.7">!</text>
    </svg>
  )
}

function DnsLookupArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 320 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="24" r="8" stroke={accent} strokeWidth="1" opacity="0.6" />
      <text x="196" y="28" fill={accent} fontSize="6" opacity="0.8">.</text>
      <path d="M200 32 V44" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <circle cx="180" cy="52" r="6" stroke={stroke} strokeWidth="0.8" opacity="0.5" />
      <circle cx="220" cy="52" r="6" stroke={stroke} strokeWidth="0.8" opacity="0.5" />
      <path d="M200 44 L180 46 M200 44 L220 46" stroke={stroke} strokeWidth="0.8" opacity="0.4" />
      <path d="M180 58 V72 M220 58 V72" stroke={stroke} strokeWidth="0.8" opacity="0.4" />
      <rect x="160" y="74" width="80" height="28" rx="3" stroke={accent} strokeWidth="1" opacity="0.5" />
      <text x="170" y="88" fill={stroke} fontSize="7" opacity="0.7">A MX TXT SOA</text>
      <text x="170" y="98" fill={accent} fontSize="6" opacity="0.6">WHOIS</text>
      <rect x="48" y="40" width="64" height="40" rx="3" stroke={stroke} strokeWidth="1" opacity="0.4" />
      <text x="56" y="58" fill={stroke} fontSize="7" opacity="0.6">example.com</text>
      <path d="M112 60 H152" stroke={accent} strokeWidth="1" opacity="0.6" />
    </svg>
  )
}

function FirewallArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 320 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="170" y="20" width="12" height="80" fill={stroke} opacity="0.15" stroke={stroke} strokeWidth="1" />
      <rect x="182" y="20" width="12" height="80" fill={accent} opacity="0.1" stroke={accent} strokeWidth="1" />
      <rect x="194" y="20" width="12" height="80" fill={stroke} opacity="0.15" stroke={stroke} strokeWidth="1" />
      <path d="M48 40 H160" stroke={accent} strokeWidth="1.2" opacity="0.7" />
      <path d="M48 60 H140" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <path d="M48 80 H150" stroke={stroke} strokeWidth="1" opacity="0.4" />
      <circle cx="160" cy="40" r="4" fill={accent} opacity="0.6" />
      <circle cx="140" cy="60" r="4" fill={stroke} opacity="0.4" />
      <text x="220" y="50" fill={stroke} fontSize="7" opacity="0.6">iptables</text>
      <text x="220" y="64" fill={accent} fontSize="7" opacity="0.7">nftables</text>
      <path d="M220 78 H280" stroke={accent} strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
      <text x="220" y="90" fill={stroke} fontSize="6" opacity="0.5">shadow detect</text>
    </svg>
  )
}

function HashCrackerArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 320 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="200" y="36" width="40" height="36" rx="4" stroke={accent} strokeWidth="1.2" opacity="0.6" />
      <path d="M210 48 H230 M210 56 H230 M210 64 H224" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <circle cx="248" cy="54" r="14" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <path d="M248 54 L256 62 M248 54 L240 62" stroke={accent} strokeWidth="1.2" opacity="0.6" />
      <text x="48" y="48" fill={stroke} fontSize="6" fontFamily="monospace" opacity="0.5">5d41402abc4b2a76</text>
      <path d="M48 58 H180" stroke={accent} strokeWidth="1" opacity="0.5" />
      <text x="48" y="72" fill={accent} fontSize="7" opacity="0.7">dict → brute → rules</text>
      <rect x="48" y="80" width="100" height="8" rx="2" stroke={stroke} strokeWidth="0.8" opacity="0.4" />
      <rect x="48" y="80" width="62" height="8" rx="2" fill={accent} opacity="0.3" />
      <text x="156" y="88" fill={stroke} fontSize="6" opacity="0.5">SHA256</text>
    </svg>
  )
}

function KeyloggerArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 320 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="160" y="32" width="120" height="56" rx="4" stroke={stroke} strokeWidth="1" opacity="0.5" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <rect
          key={i}
          x={168 + (i % 5) * 22}
          y={40 + Math.floor(i / 5) * 20}
          width="16"
          height="12"
          rx="2"
          stroke={i === 3 ? accent : stroke}
          strokeWidth="0.8"
          fill={i === 3 ? accent : 'none'}
          opacity={i === 3 ? 0.35 : 0.4}
        />
      ))}
      <path d="M48 50 Q80 30 120 50 T192 50" stroke={accent} strokeWidth="1.2" opacity="0.6" fill="none" />
      <circle cx="48" cy="50" r="4" fill={accent} opacity="0.5" />
      <text x="48" y="72" fill={stroke} fontSize="6" opacity="0.5">keystroke stream</text>
      <text x="48" y="84" fill={accent} fontSize="6" opacity="0.6">window context</text>
    </svg>
  )
}

function CisAuditorArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 320 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M220 30 L248 30 L256 50 L238 72 L220 50 Z" stroke={accent} strokeWidth="1.2" opacity="0.6" />
      <path d="M232 46 L236 52 L244 42" stroke={stroke} strokeWidth="1.2" opacity="0.7" />
      <rect x="48" y="32" width="120" height="56" rx="4" stroke={stroke} strokeWidth="1" opacity="0.4" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="58" y={42 + i * 12} width="8" height="8" rx="1" stroke={i < 3 ? accent : stroke} strokeWidth="0.8" opacity="0.6" />
          {i < 3 && <path d={`M60 ${46 + i * 12} L62 ${48 + i * 12} L66 ${44 + i * 12}`} stroke={accent} strokeWidth="0.8" />}
          <text x="72" y={50 + i * 12} fill={stroke} fontSize="6" opacity="0.6">{['SSH', 'Logging', 'Network', 'Accounts'][i]}</text>
        </g>
      ))}
      <text x="180" y="90" fill={accent} fontSize="8" opacity="0.7">104 controls</text>
    </svg>
  )
}

function EbpfTracerArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 320 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="200" cy="60" rx="50" ry="28" stroke={stroke} strokeWidth="1" opacity="0.4" />
      <text x="178" y="64" fill={stroke} fontSize="7" opacity="0.6">kernel</text>
      <circle cx="140" cy="60" r="10" stroke={accent} strokeWidth="1" opacity="0.6" />
      <text x="134" y="64" fill={accent} fontSize="6" opacity="0.8">eBPF</text>
      <path d="M150 60 H170" stroke={accent} strokeWidth="1.2" opacity="0.7" />
      <path d="M250 40 L270 50 L250 60 L270 70 L250 80" stroke={stroke} strokeWidth="1" opacity="0.5" fill="none" />
      <text x="276" y="54" fill={accent} fontSize="6" opacity="0.7">syscall</text>
      <text x="276" y="68" fill={stroke} fontSize="6" opacity="0.5">MITRE</text>
      <rect x="48" y="44" width="56" height="32" rx="3" stroke={stroke} strokeWidth="0.8" opacity="0.4" />
      <text x="56" y="58" fill={accent} fontSize="6" opacity="0.7">CRITICAL</text>
      <text x="56" y="70" fill={stroke} fontSize="6" opacity="0.5">detect</text>
    </svg>
  )
}

function MetadataScrubberArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 320 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="180" y="28" width="44" height="52" rx="3" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <text x="192" y="48" fill={stroke} fontSize="7" opacity="0.6">EXIF</text>
      <text x="188" y="60" fill={accent} fontSize="6" opacity="0.7">GPS</text>
      <text x="186" y="72" fill={stroke} fontSize="6" opacity="0.5">Author</text>
      <path d="M224 54 H260" stroke={accent} strokeWidth="1.5" opacity="0.7" />
      <path d="M252 48 L260 54 L252 60" fill={accent} opacity="0.5" />
      <rect x="264" y="36" width="40" height="36" rx="3" stroke={accent} strokeWidth="1.2" opacity="0.6" />
      <text x="274" y="58" fill={accent} fontSize="8" opacity="0.8">✓</text>
      <rect x="48" y="40" width="56" height="40" rx="3" stroke={stroke} strokeWidth="0.8" opacity="0.4" />
      <text x="58" y="58" fill={stroke} fontSize="7" opacity="0.6">PDF</text>
      <text x="58" y="72" fill={stroke} fontSize="7" opacity="0.5">JPEG</text>
    </svg>
  )
}

function NetworkTrafficArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 320 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="220" cy="60" r="36" stroke={stroke} strokeWidth="1" opacity="0.4" />
      <path d="M220 24 L220 96 M184 60 L256 60" stroke={stroke} strokeWidth="0.6" opacity="0.3" />
      <path d="M220 60 L248 38" stroke={accent} strokeWidth="8" strokeLinecap="round" opacity="0.4" />
      <path d="M220 60 L200 88" stroke={stroke} strokeWidth="6" strokeLinecap="round" opacity="0.3" />
      <path d="M220 60 L192 44" stroke={stroke} strokeWidth="4" strokeLinecap="round" opacity="0.25" />
      <text x="252" y="36" fill={accent} fontSize="6" opacity="0.7">TCP</text>
      <text x="188" y="96" fill={stroke} fontSize="6" opacity="0.5">UDP</text>
      <rect x="48" y="44" width="80" height="32" rx="3" stroke={stroke} strokeWidth="0.8" opacity="0.4" />
      <text x="58" y="58" fill={stroke} fontSize="7" opacity="0.6">.pcap</text>
      <path d="M128 60 H168" stroke={accent} strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
      <circle cx="48" cy="88" r="3" fill={accent} opacity="0.5" />
      <circle cx="64" cy="88" r="3" fill={stroke} opacity="0.4" />
      <circle cx="80" cy="88" r="3" fill={accent} opacity="0.3" />
    </svg>
  )
}

function PortScannerArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 320 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x={180 + (i % 3) * 28}
          y={32 + Math.floor(i / 3) * 28}
          width="20"
          height="20"
          rx="2"
          stroke={i === 1 || i === 4 ? accent : stroke}
          strokeWidth="0.8"
          fill={i === 1 || i === 4 ? accent : 'none'}
          opacity={i === 1 || i === 4 ? 0.25 : 0.35}
        />
      ))}
      <text x="186" y="46" fill={stroke} fontSize="5" opacity="0.7">22</text>
      <text x="214" y="46" fill={accent} fontSize="5" opacity="0.9">80</text>
      <text x="242" y="46" fill={stroke} fontSize="5" opacity="0.6">443</text>
      <path d="M48 60 H160" stroke={accent} strokeWidth="1.5" opacity="0.6" />
      <path d="M160 56 L168 60 L160 64" fill={accent} opacity="0.5" />
      <text x="48" y="48" fill={stroke} fontSize="7" opacity="0.6">TCP connect</text>
      <text x="48" y="80" fill={accent} fontSize="6" opacity="0.6">banner grab</text>
      <rect x="48" y="86" width="72" height="6" rx="2" fill={accent} opacity="0.2" />
    </svg>
  )
}

function VulnScannerArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 320 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="48" y="36" width="56" height="40" rx="3" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <text x="58" y="52" fill={stroke} fontSize="6" opacity="0.7">requirements</text>
      <text x="58" y="64" fill={accent} fontSize="6" opacity="0.7">.txt</text>
      <path d="M104 56 H140" stroke={accent} strokeWidth="1.2" opacity="0.6" />
      <circle cx="180" cy="56" r="24" stroke={stroke} strokeWidth="1" opacity="0.4" />
      <text x="168" y="52" fill={accent} fontSize="7" opacity="0.8">CVE</text>
      <text x="162" y="64" fill={stroke} fontSize="6" opacity="0.5">OSV.dev</text>
      <path d="M204 56 H240" stroke={accent} strokeWidth="1.2" opacity="0.6" />
      <rect x="244" y="40" width="48" height="32" rx="3" stroke={accent} strokeWidth="1" opacity="0.5" />
      <text x="252" y="58" fill={accent} fontSize="7" opacity="0.7">patch</text>
      <text x="252" y="68" fill={stroke} fontSize="5" opacity="0.5">PyPI</text>
    </svg>
  )
}

function PersistenceScannerArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 320 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="220" cy="56" r="28" stroke={stroke} strokeWidth="1" opacity="0.4" />
      <circle cx="220" cy="56" r="8" stroke={accent} strokeWidth="1" opacity="0.6" />
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i * 72 * Math.PI) / 180
        const x = 220 + Math.cos(angle) * 20
        const y = 56 + Math.sin(angle) * 20
        return <circle key={i} cx={x} cy={y} r="3" fill={accent} opacity="0.5" />
      })}
      <text x="206" y="60" fill={stroke} fontSize="6" opacity="0.6">systemd</text>
      <rect x="48" y="32" width="100" height="56" rx="3" stroke={stroke} strokeWidth="0.8" opacity="0.4" />
      <text x="58" y="48" fill={accent} fontSize="6" opacity="0.7">cron</text>
      <text x="58" y="60" fill={stroke} fontSize="6" opacity="0.5">ssh keys</text>
      <text x="58" y="72" fill={stroke} fontSize="6" opacity="0.5">LD_PRELOAD</text>
      <text x="58" y="84" fill={accent} fontSize="6" opacity="0.6">17 modules</text>
      <path d="M148 56 H188" stroke={accent} strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
    </svg>
  )
}

export const HEADER_ARTS: Record<string, FC<ArtProps>> = {
  'base64-tool': Base64Art,
  'c2-beacon': C2BeaconArt,
  'caesar-cipher': CaesarCipherArt,
  'canary-token-generator': CanaryTokenArt,
  'dns-lookup': DnsLookupArt,
  'firewall-rule-engine': FirewallArt,
  'hash-cracker': HashCrackerArt,
  'keylogger': KeyloggerArt,
  'linux-cis-hardening-auditor': CisAuditorArt,
  'linux-ebpf-security-tracer': EbpfTracerArt,
  'metadata-scrubber-tool': MetadataScrubberArt,
  'network-traffic-analyzer': NetworkTrafficArt,
  'simple-port-scanner': PortScannerArt,
  'simple-vulnerability-scanner': VulnScannerArt,
  'systemd-persistence-scanner': PersistenceScannerArt,
}
