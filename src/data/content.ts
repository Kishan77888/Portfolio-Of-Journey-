export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'ML / Detection' | 'Detection' | 'Network' | 'Product' | 'ML / Network';
  featured: boolean;
  date: string;
  role: string;
  techStack: string[];
  metrics: string[];
  summary: string;
  problem: string;
  approach: string;
  architectureNodes: { id: string; label: string; desc: string; type: 'source' | 'processing' | 'detection' | 'output' }[];
  mitreAttack: { code: string; name: string; tactic: string }[];
  results: string[];
  githubUrl: string;
  demoVideo?: {
    poster: string;
    videoUrl?: string; // [ADD VIDEO LINK]
    chapters: { timestamp: string; title: string }[];
  };
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  description: string;
  skills: string[];
  badgeColor: string;
}

export interface LabWriteup {
  id: string;
  title: string;
  platform: 'TryHackMe' | 'Independent Lab' | 'Forage';
  path: 'SOC Level 1' | 'DFIR' | 'Cloud / Network' | 'Job Simulation';
  completedDate: string;
  description: string;
  mitreMapping: string[];
  keyTakeaways: string[];
  tags: string[];
}

export interface SimulatedAlert {
  id: string;
  timestamp: string;
  sourceIp: string;
  destinationIp: string;
  ruleName: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'INFO';
  technique: string;
  status: 'TRIAGED' | 'ESCALATED' | 'ANALYZING' | 'CONTAINED';
  verdict: string;
  analystNotes: string;
}

export const PERSONAL_INFO = {
  name: 'Kumar Kishan',
  photo: './kumar_kishan.jpg',
  initials: 'KK',
  callsign: 'ANALYST_KISHAN',
  headline: 'SOC Analyst (L1) & Threat Detection Engineer',
  subheadline: 'B.E. Computer Science & Engineering (Information Security) graduate with lab-validated experience in SIEM monitoring, behavioral detection engineering, and incident response mapped to MITRE ATT&CK.',
  location: 'Bareilly, Uttar Pradesh, India',
  relocationTarget: 'Open to relocating to Bengaluru from January 2027',
  availability: 'Available immediately for full-time SOC / Junior Pentester / Security Analyst roles',
  email: 'kkishu181@gmail.com',
  phone: '+91 92679 14452',
  links: {
    github: 'https://github.com/kishan77888',
    linkedin: 'https://linkedin.com/in/kumar-kishan-security',
    tryhackme: 'https://tryhackme.com/p/kumarkishan22595',
    resumePdf: './Kumar_Kishan_Resume.pdf'
  },
  stats: [
    { label: 'TryHackMe Rooms', value: '20+' },
    { label: 'Detection Accuracy', value: '92-95%' },
    { label: 'False-Positive Cut', value: '~20%' },
    { label: 'Degrees & Honors', value: 'B.E. InfoSec' }
  ]
};

export const SKILL_CATEGORIES = [
  {
    category: 'SIEM & Security Monitoring',
    skills: [
      { name: 'Splunk Enterprise', level: 'Advanced Lab', icon: 'Terminal' },
      { name: 'Wazuh EDR/XDR', level: 'Practical', icon: 'ShieldAlert' },
      { name: 'Snort (IDS/IPS)', level: 'Rules & Signatures', icon: 'Cpu' },
      { name: 'Log & PCAP Analysis', level: 'Core', icon: 'FileSearch' }
    ]
  },
  {
    category: 'Security Testing & Tooling',
    skills: [
      { name: 'Wireshark', level: 'Flow & Packet Triage', icon: 'Activity' },
      { name: 'Nmap', level: 'Network Recon', icon: 'Radar' },
      { name: 'Kali Linux', level: 'Primary OS', icon: 'Terminal' },
      { name: 'Burp Suite & Metasploit', level: 'VAPT Essentials', icon: 'KeyRound' }
    ]
  },
  {
    category: 'Frameworks & Standards',
    skills: [
      { name: 'MITRE ATT&CK', level: 'Tactics & Techniques', icon: 'Crosshair' },
      { name: 'NIST IR Framework', level: 'Preparation -> Lessons Learned', icon: 'Workflow' },
      { name: 'OWASP Top-10', level: 'Web Vulnerabilities', icon: 'FileCode2' },
      { name: 'CVE / CVSS Analysis', level: 'Severity Scoring', icon: 'AlertTriangle' }
    ]
  },
  {
    category: 'Languages & Automation',
    skills: [
      { name: 'Python', level: 'Security Scripting & ML', icon: 'Code' },
      { name: 'Bash & Linux CLI', level: 'Sysadmin & Automation', icon: 'TerminalSquare' },
      { name: 'FastAPI / REST', level: 'API Integration', icon: 'Server' },
      { name: 'Git & GitHub', level: 'Open Source Workflow', icon: 'GitBranch' }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'ibm-security-intelligence',
    title: 'Security Intelligence Engineer',
    issuer: 'IBM',
    issueDate: 'November 2024',
    description: 'Covers SIEM fundamentals, log source integration, correlation rule engineering, and threat use-case development in enterprise SOC pipelines.',
    skills: ['SIEM Architecture', 'Log Integration', 'Correlation Rules', 'Threat Use Cases'],
    badgeColor: 'border-blue-500/40 text-blue-400'
  },
  {
    id: 'cisco-cyberops',
    title: 'Cybersecurity Operations Fundamentals (CyberOps Associate)',
    issuer: 'Cisco',
    issueDate: 'November 2025',
    description: 'Hands-on focus on SOC workflows, security monitoring architectures, intrusion analysis, and the incident response lifecycle.',
    skills: ['SOC Workflows', 'Intrusion Analysis', 'Incident Lifecycle', 'Network Telemetry'],
    badgeColor: 'border-emerald-500/40 text-emerald-400'
  },
  {
    id: 'ibm-cloud-security',
    title: 'Cloud Security',
    issuer: 'IBM',
    issueDate: 'November 2025',
    description: 'Comprehensive study of cloud architecture risks, Identity and Access Management (IAM), Zero Trust principles, and cloud-native security controls.',
    skills: ['Cloud Threat Models', 'IAM & Policies', 'Cloud Controls', 'Zero Trust'],
    badgeColor: 'border-cyan-500/40 text-cyan-400'
  },
  {
    id: 'google-cybersecurity',
    title: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google',
    issueDate: 'November 2023',
    description: 'Foundation across network defense, Python automation for cybersecurity tasks, and hands-on detection labs with SIEM and IDS tooling.',
    skills: ['Network Defense', 'Python for Security', 'SIEM/IDS Labs', 'Incident Escalation'],
    badgeColor: 'border-violet-500/40 text-violet-400'
  },
  {
    id: 'deloitte-cyber-simulation',
    title: 'Cyber Job Simulation',
    issuer: 'Deloitte Australia (via Forage)',
    issueDate: 'April 2026',
    description: 'Practical simulation triaging live phishing email campaigns, conducting forensic breach root-cause analysis, and formulating client remediation strategies.',
    skills: ['Phishing Triage', 'Breach Analysis', 'Executive Reporting', 'Root Cause'],
    badgeColor: 'border-amber-500/40 text-amber-400'
  }
];

export const EDUCATION = [
  {
    degree: 'B.E., Computer Science & Engineering (Information Security)',
    institution: 'Chandigarh University, Gharuan, Mohali, Punjab',
    period: 'Aug 2022 – Jul 2026 (Graduated June 2026)',
    score: 'CGPA: 7.39 / 10',
    coursework: [
      'Security Intelligence & SOC Operations',
      'Digital Forensics & Incident Response',
      'Penetration Testing & Ethical Hacking',
      'System & Network Security',
      'Incident Response & Threat Hunting',
      'Malware Analysis & Reverse Engineering'
    ]
  },
  {
    degree: 'Class XII (CBSE Senior Secondary)',
    institution: 'G R S S Vidya Mandir, Bhagalpur, Bihar',
    period: 'Completed 2022',
    score: '66.8%',
    coursework: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science']
  },
  {
    degree: 'Class X (CBSE Secondary)',
    institution: 'G R S S Vidya Mandir, Bhagalpur, Bihar',
    period: 'Completed 2020',
    score: '60.4%',
    coursework: ['Science', 'Mathematics', 'Social Sciences', 'English']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'sentinel-ai',
    title: 'SentinelAI – Insider Threat Detection Platform',
    tagline: 'Real-time insider threat detection & behavioral analytics engine flagging anomalous user actions and C2 traffic.',
    category: 'ML / Detection',
    featured: true,
    date: '2026',
    role: 'Lead Architect & Detection Engineer',
    techStack: ['Python', 'FastAPI', 'scikit-learn', 'MITRE ATT&CK', 'SIEM Workflows'],
    metrics: [
      '92–95% detection accuracy on test attack scenarios',
      '~20% false-positive alert volume reduction via baseline modeling',
      '100% open-source codebase on GitHub'
    ],
    summary: 'An autonomous behavioral analytics platform designed to catch credential misuse, abnormal data exfiltration, and stealthy command-and-control communication before lateral expansion.',
    problem: 'Traditional security rules rely heavily on static threshold signatures that generate overwhelming noise and completely miss authorized accounts behaving maliciously or covert C2 beaconing.',
    approach: 'Built user-behavior baseline models evaluating historical login time windows, resource access frequencies, and outbound transmission payloads. Integrated statistical anomaly scores with FastAPI to stream triage alerts directly into Splunk-style SOC analyst workflows.',
    architectureNodes: [
      { id: '1', label: 'User & Auth Telemetry', desc: 'Windows Security logs, SSH auth, API requests', type: 'source' },
      { id: '2', label: 'Feature Engineering', desc: 'Login timing, access frequency, payload entropy', type: 'processing' },
      { id: '3', label: 'Scikit-Learn Anomaly Classifier', desc: 'Isolation Forest & Behavioral Baseline scoring', type: 'detection' },
      { id: '4', label: 'FastAPI Dispatcher & MITRE Mapping', desc: 'Triage payload generation with mapped techniques', type: 'output' }
    ],
    mitreAttack: [
      { code: 'T1078', name: 'Valid Accounts', tactic: 'Initial Access / Defense Evasion' },
      { code: 'T1071', name: 'Application Layer Protocol', tactic: 'Command and Control' },
      { code: 'T1567', name: 'Exfiltration Over Web Service', tactic: 'Exfiltration' },
      { code: 'T1059', name: 'Command and Scripting Interpreter', tactic: 'Execution' }
    ],
    results: [
      'Successfully benchmarked across simulated insider data theft scenarios with 92-95% recall.',
      'Reduced analyst alert fatigue by filtering routine administrative bursts from genuine out-of-band anomalies.',
      'Architected JSON-based SIEM output schemas ready for Splunk and Wazuh ingestion.'
    ],
    githubUrl: 'https://github.com/kishan77888/SentinelAI',
    demoVideo: {
      poster: './sentinel-preview.png',
      chapters: [
        { timestamp: '00:00', title: 'Architecture & Threat Model' },
        { timestamp: '01:15', title: 'Simulating Malicious Exfiltration' },
        { timestamp: '02:40', title: 'FastAPI Alert Ingestion & Baseline Verdict' },
        { timestamp: '03:50', title: 'MITRE ATT&CK Mapping & SOC Triage' }
      ]
    }
  },
  {
    id: 'encrypted-traffic-threat-detection',
    title: 'ML-Based Encrypted Traffic Threat Detection',
    tagline: 'Flow-level statistical classifier uncovering C2, port scans, and DDoS inside TLS streams without payload decryption.',
    category: 'ML / Network',
    featured: true,
    date: '2026',
    role: 'Security Data Analyst',
    techStack: ['Python', 'scikit-learn', 'Wireshark', 'PCAP Analysis', 'Random Forest', 'Gradient Boosting'],
    metrics: [
      '92–95% classification accuracy across attack families',
      'Zero payload decryption needed (preserves privacy & speed)',
      'Extracted 15+ flow metadata characteristics from PCAPs'
    ],
    summary: 'A statistical flow classification engine detecting malicious network activity hidden within standard TLS/SSL encrypted sessions using packet timing, burst sizes, and inter-arrival intervals.',
    problem: 'With widespread TLS encryption across modern networks, deep packet inspection (DPI) requires costly SSL termination hardware and violates user privacy, leaving security teams blind to encrypted C2 communication.',
    approach: 'Processed large-scale PCAP datasets in Wireshark and Python, transforming raw packet flows into metadata feature vectors (packet size distributions, inter-arrival intervals, directionality ratios). Benchmarked Random Forest, Support Vector Machines, and Gradient Boosting to identify anomalies.',
    architectureNodes: [
      { id: '1', label: 'Encrypted PCAP Stream', desc: 'Raw TLS packets captured via Wireshark/tcpdump', type: 'source' },
      { id: '2', label: 'Flow Extractor Engine', desc: 'Timing intervals, packet sizes, bi-directional ratios', type: 'processing' },
      { id: '3', label: 'Random Forest & Ensembles', desc: 'Multi-class classifier trained on malicious vs benign flows', type: 'detection' },
      { id: '4', label: 'Threat Intelligence Summary', desc: 'Tagged alert feed mapped to MITRE ATT&CK for SOC tier-1 triage', type: 'output' }
    ],
    mitreAttack: [
      { code: 'T1046', name: 'Network Service Discovery', tactic: 'Discovery' },
      { code: 'T1498', name: 'Network Denial of Service', tactic: 'Impact' },
      { code: 'T1573', name: 'Encrypted Channel', tactic: 'Command and Control' }
    ],
    results: [
      'Attained 92–95% accuracy in distinguishing stealthy C2 beaconing from legitimate web browsing.',
      'Proved that packet size variances and timing cadence reveal malicious tooling without breaking TLS integrity.',
      'Documented complete data processing pipeline with reproducibility notebooks.'
    ],
    githubUrl: 'https://github.com/kishan77888',
    demoVideo: {
      poster: './traffic-preview.png',
      chapters: [
        { timestamp: '00:00', title: 'The Problem with TLS Blindspots' },
        { timestamp: '01:10', title: 'PCAP Feature Extraction in Wireshark' },
        { timestamp: '02:30', title: 'Model Benchmarking & Confusion Matrix' }
      ]
    }
  },
  {
    id: '5g-slicing-security',
    title: 'Dynamic 5G Network Slicing Security Analysis',
    tagline: 'Vulnerability assessment and slice isolation testing across simulated 3GPP virtualized network slices.',
    category: 'Network',
    featured: true,
    date: '2026',
    role: 'Network Security Researcher',
    techStack: ['Kali Linux', 'VMware', '3GPP Standards', 'Nmap', 'NIST IR Framework'],
    metrics: [
      'Evaluated eMBB, URLLC, and mMTC slices',
      'Identified cross-slice lateral attack surfaces',
      'Mitigation playbook mapped to NIST Incident Response'
    ],
    summary: 'A virtualized security audit exploring isolation boundaries and attack vectors in 5G network slicing, where diverse vertical services share underlying physical hardware.',
    problem: '5G network slicing provides customized networks for critical infrastructure (URLLC for connected healthcare, mMTC for IoT). A compromise in one slice could potentially compromise adjacent critical services if slice isolation fails.',
    approach: 'Constructed a virtualized testbed using VMware and Kali Linux simulating 3GPP network architectures. Executed systematic Nmap scans and targeted vulnerability assessments across simulated core network functions to expose resource exhaustion and slice-hijacking vectors.',
    architectureNodes: [
      { id: '1', label: 'Virtualized 3GPP Core', desc: 'eMBB, URLLC, and mMTC slice functions', type: 'source' },
      { id: '2', label: 'Penetration Testing Toolkit', desc: 'Nmap vulnerability scripts, packet injection', type: 'processing' },
      { id: '3', label: 'Boundary Leakage Analysis', desc: 'Testing hypervisor & software-defined slice boundaries', type: 'detection' },
      { id: '4', label: 'NIST IR Defense Playbook', desc: 'Formal remediation and isolation enforcement standards', type: 'output' }
    ],
    mitreAttack: [
      { code: 'T1499', name: 'Endpoint Denial of Service', tactic: 'Impact' },
      { code: 'T1046', name: 'Network Service Discovery', tactic: 'Discovery' },
      { code: 'T1190', name: 'Exploit Public-Facing Application', tactic: 'Initial Access' }
    ],
    results: [
      'Documented specific attack surfaces where lack of strict policy enforcement permits cross-slice resource starvation.',
      'Formulated standard mitigation strategies incorporating mutual authentication and strict perimeter access lists.',
      'Drafted a comprehensive academic security report validated against 3GPP release documentation.'
    ],
    githubUrl: 'https://github.com/kishan77888',
    demoVideo: {
      poster: './5g-preview.png',
      chapters: [
        { timestamp: '00:00', title: '5G Slicing Concepts & Topology' },
        { timestamp: '01:45', title: 'Executing Nmap Vulnerability Probes' },
        { timestamp: '03:10', title: 'Slice Boundary Analysis & Findings' }
      ]
    }
  },
  {
    id: 'aegis-sec',
    title: 'AegisSec – Security Scanning SaaS',
    tagline: 'Developer-focused security scanner performing SAST, secrets detection, and dependency vulnerability scanning.',
    category: 'Product',
    featured: false,
    date: '2026 – Present',
    role: 'Founder & Full-Stack Security Developer',
    techStack: ['Python', 'Claude API', 'Agentic Workflows', 'CVSS Scoring', 'OWASP Top 10'],
    metrics: [
      'Multi-engine scanning (SAST, Secrets, SCA)',
      'Severity-ranked triage reporting with CVSS scores',
      'AI-assisted remediation playbooks via Claude API'
    ],
    summary: 'A full-stack, developer-facing security platform that inspects repositories for hardcoded secrets, known vulnerable libraries, and OWASP Top 10 vulnerabilities.',
    problem: 'Early-stage developers often lack dedicated AppSec teams, accidentally committing private credentials or shipping high-severity dependency CVEs into production.',
    approach: 'Engineered a unified scanner that parses source trees, correlates third-party libraries against active CVE feeds, scans regex patterns for high-entropy secrets, and utilizes Claude API to provide context-aware patch recommendations.',
    architectureNodes: [
      { id: '1', label: 'Git Repository Ingestion', desc: 'Codebase checkout & dependency manifest parsing', type: 'source' },
      { id: '2', label: 'Multi-Vector Scanning Core', desc: 'SAST pattern matcher, high-entropy secrets regex, CVE lookup', type: 'processing' },
      { id: '3', label: 'Claude AI Remediation Engine', desc: 'Contextual risk assessment and automated code patches', type: 'detection' },
      { id: '4', label: 'Developer Security Dashboard', desc: 'CVSS scores, OWASP mapping, and exportable reports', type: 'output' }
    ],
    mitreAttack: [
      { code: 'T1552', name: 'Unsecured Credentials', tactic: 'Credential Access' },
      { code: 'T1190', name: 'Exploit Public-Facing Application', tactic: 'Initial Access' },
      { code: 'T1212', name: 'Exploitation for Credential Access', tactic: 'Credential Access' }
    ],
    results: [
      'Successfully flags API keys, tokens, and vulnerable package versions before deployment.',
      'Generates automated, actionable fix suggestions that developers can merge with one click.',
      'Active development integrating agentic security analysis for deeper logic flaw detection.'
    ],
    githubUrl: 'https://github.com/kishan77888/AegisSec'
  },
  {
    id: 'home-soc-lab',
    title: 'Home Security Operations Lab – Detection Engineering',
    tagline: 'Two-VM detection pipeline: Splunk Enterprise on Kali Linux ingesting Sysmon logs from Windows client.',
    category: 'Detection',
    featured: false,
    date: '2026',
    role: 'SOC Analyst & Lab Engineer',
    techStack: ['Splunk Enterprise', 'Windows Sysmon', 'Kali Linux', 'Universal Forwarder', 'Sigma Rules'],
    metrics: [
      '2-VM enterprise environment configured',
      'Real-time Sysmon Event ID ingestion (1, 3, 7, 10)',
      'Custom Splunk search queries and alert triggers'
    ],
    summary: 'A dedicated virtualized SOC testing ground built to simulate live attacker tactics, engineer custom SIEM detection rules, and practice incident response workflows.',
    problem: 'Understanding threat detection requires firsthand experience observing how real attacks generate telemetry in Windows event streams and how SIEM correlation engines catch them.',
    approach: 'Configured a Kali Linux VM hosting Splunk Enterprise as the central SIEM indexer. Deployed a Windows VM configured with Microsoft Sysmon and Splunk Universal Forwarder to collect process creation, network connections, and driver load events.',
    architectureNodes: [
      { id: '1', label: 'Windows Target VM', desc: 'Sysmon telemetry & Universal Forwarder', type: 'source' },
      { id: '2', label: 'Encrypted Forwarder Pipeline', desc: 'Splunk forwarder port 9997 transport', type: 'processing' },
      { id: '3', label: 'Splunk Enterprise Indexer', desc: 'Kali Linux SIEM instance with custom SPL rules', type: 'detection' },
      { id: '4', label: 'SOC Alert Dispatcher', desc: 'Triggered alarms for abnormal PowerShell & privilege escalation', type: 'output' }
    ],
    mitreAttack: [
      { code: 'T1059.001', name: 'PowerShell', tactic: 'Execution' },
      { code: 'T1003', name: 'OS Credential Dumping', tactic: 'Credential Access' },
      { code: 'T1547', name: 'Boot or Logon Autostart Execution', tactic: 'Persistence' }
    ],
    results: [
      'Crafted custom SPL search queries detecting encoded PowerShell commands and anomalous process spawning.',
      'Simulated credential dumping attempts and verified real-time alarm trigger fidelity.',
      'Solidified hands-on competence with enterprise SIEM administration and log parsing.'
    ],
    githubUrl: 'https://github.com/kishan77888'
  }
];

export const LAB_WRITEUPS: LabWriteup[] = [
  {
    id: 'tryhackme-wireshark-traffic-analysis',
    title: 'Wireshark: Traffic Analysis & C2 Beacon Extraction',
    platform: 'TryHackMe',
    path: 'SOC Level 1',
    completedDate: '2026',
    description: 'Investigating malicious PCAP captures to identify malware callbacks, DNS tunneling indicators, and suspicious HTTP/HTTPS data exfiltration.',
    mitreMapping: ['T1071 (Application Layer Protocol)', 'T1048 (Exfiltration Over Alternative Protocol)'],
    keyTakeaways: [
      'Filtered high-volume packet streams using display filters like `http.request.method == "POST"` and `dns.flags.response == 0`.',
      'Extracted base64-encoded command payloads embedded in abnormal DNS TXT queries.',
      'Calculated packet inter-arrival variance to confirm automated C2 beacon jitter.'
    ],
    tags: ['Wireshark', 'PCAP', 'C2 Detection', 'Network Forensics']
  },
  {
    id: 'tryhackme-splunk-threat-hunting',
    title: 'Splunk 101/201: Threat Hunting & Detection Engineering',
    platform: 'TryHackMe',
    path: 'SOC Level 1',
    completedDate: '2026',
    description: 'Mastering Search Processing Language (SPL) to isolate attacker persistence, lateral movement, and privilege escalation events.',
    mitreMapping: ['T1059 (Command and Scripting Interpreter)', 'T1078 (Valid Accounts)'],
    keyTakeaways: [
      'Constructed robust SPL queries utilizing `stats`, `eval`, `rex`, and `transaction` commands.',
      'Established user baseline behavior using `rare` and `top` commands to spot out-of-hours logins.',
      'Configured automated alert notifications for multiple failed authentication attempts followed by a success.'
    ],
    tags: ['Splunk', 'SPL', 'SIEM', 'Threat Hunting']
  },
  {
    id: 'tryhackme-phishing-analysis',
    title: 'Phishing Email Analysis: Headers, Artifacts & Triage',
    platform: 'TryHackMe',
    path: 'SOC Level 1',
    completedDate: '2026',
    description: 'Step-by-step triage of spear-phishing campaigns: parsing RFC 822 headers, authenticating SPF/DKIM/DMARC records, and safely analyzing malicious macro attachments.',
    mitreMapping: ['T1566.001 (Spearphishing Attachment)', 'T1566.002 (Spearphishing Link)'],
    keyTakeaways: [
      'Inspected `Received:` headers to reconstruct the true sender path and detect spoofed domains.',
      'Calculated SHA-256 hashes of attached lure documents and queried VirusTotal and Hybrid Analysis.',
      'Defanged malicious URLs and submitted domains to URLScan.io to inspect landing page infrastructure.'
    ],
    tags: ['Phishing', 'Email Security', 'Incident Response', 'Artifact Triage']
  },
  {
    id: 'tryhackme-windows-event-logs-sysmon',
    title: 'Windows Event Logs & Sysmon Deep Dive',
    platform: 'TryHackMe',
    path: 'DFIR',
    completedDate: '2026',
    description: 'Tracking attacker footprints through Security.evtx and Microsoft-Windows-Sysmon/Operational logs.',
    mitreMapping: ['T1003 (Credential Dumping)', 'T1055 (Process Injection)'],
    keyTakeaways: [
      'Analyzed Event ID 1 (Process Creation) for anomalous parent-child relationships (e.g. `word.exe` spawning `powershell.exe`).',
      'Tracked Event ID 3 (Network Connection) to correlate outbound connections with newly created executables.',
      'Correlated Event ID 10 (ProcessAccess) to spot LSASS memory dumping attempts.'
    ],
    tags: ['Windows Logs', 'Sysmon', 'DFIR', 'Endpoint Security']
  },
  {
    id: 'tryhackme-autopsy-forensics',
    title: 'Digital Forensics Investigation with Autopsy',
    platform: 'TryHackMe',
    path: 'DFIR',
    completedDate: '2026',
    description: 'Forensic image parsing, carving deleted files, extracting browser artifacts, and reconstructing attacker timelines from raw disk dumps.',
    mitreMapping: ['T1070 (Indicator Removal on Host)', 'T1119 (Automated Collection)'],
    keyTakeaways: [
      'Ingested E01 forensic disk images into Autopsy and ran keyword indexing.',
      'Extracted USB device connection history from Windows Registry hives (SYSTEM/NTUSER.DAT).',
      'Correlated web browser cache and shellbags to reconstruct adversary discovery steps.'
    ],
    tags: ['Autopsy', 'Disk Forensics', 'Evidence Handling', 'DFIR']
  },
  {
    id: 'forage-deloitte-job-simulation',
    title: 'Deloitte Cyber Job Simulation: Incident Response & Triage',
    platform: 'Forage',
    path: 'Job Simulation',
    completedDate: 'April 2026',
    description: 'Real-world simulation addressing a client data breach: scoping compromised systems, reviewing firewall logs, and compiling executive briefing reports.',
    mitreMapping: ['T1190 (Exploit Public-Facing Application)', 'T1041 (Exfiltration Over C2 Channel)'],
    keyTakeaways: [
      'Evaluated network firewall connection spikes to discover compromised perimeter servers.',
      'Authored structured executive summary detailing root cause, business impact, and priority containment.',
      'Formulated strategic post-incident hardening recommendations for client executives.'
    ],
    tags: ['Deloitte', 'Incident Response', 'Executive Triage', 'Governance']
  }
];

export const SIMULATED_ALERTS: SimulatedAlert[] = [
  {
    id: 'SEC-2026-8841',
    timestamp: '14:23:09 UTC',
    sourceIp: '192.168.4.112',
    destinationIp: '104.28.19.44',
    ruleName: 'Potential C2 Beaconing - Periodic TLS Stream',
    severity: 'HIGH',
    technique: 'T1071.001 - Web Protocols',
    status: 'TRIAGED',
    verdict: 'Suspicious beaconing interval (60s ± 2s jitter). Mapped to SentinelAI detection baseline.',
    analystNotes: 'Isolated host 192.168.4.112 from primary subnet; initiated packet capture for deep flow inspection.'
  },
  {
    id: 'SEC-2026-8842',
    timestamp: '14:20:41 UTC',
    sourceIp: '10.0.12.85',
    destinationIp: '10.0.0.1 (DC01)',
    ruleName: 'Anomalous Kerberos Ticket Request (Pass-the-Ticket)',
    severity: 'CRITICAL',
    technique: 'T1558 - Steal or Forge Kerberos Tickets',
    status: 'ANALYZING',
    verdict: 'Rapid sequence of service tickets requested from non-standard workstation.',
    analystNotes: 'Validating against Active Directory replication logs and verifying user workstation assignment.'
  },
  {
    id: 'SEC-2026-8843',
    timestamp: '14:15:22 UTC',
    sourceIp: '172.16.8.204',
    destinationIp: 'Internal Subnet 172.16.8.0/24',
    ruleName: 'Rapid TCP SYN Sweep (Nmap Reconnaissance)',
    severity: 'MEDIUM',
    technique: 'T1046 - Network Service Discovery',
    status: 'CONTAINED',
    verdict: 'Port scanning activity detected on ports 22, 445, 3389, and 8080.',
    analystNotes: 'Host identified as dev testing machine; scan halted, developer notified of unauthorized tool usage.'
  },
  {
    id: 'SEC-2026-8844',
    timestamp: '14:02:11 UTC',
    sourceIp: '192.168.1.55',
    destinationIp: 'External API Gateway',
    ruleName: 'High-Entropy Secret Discovered in Outbound POST',
    severity: 'CRITICAL',
    technique: 'T1552.001 - Credentials in Files',
    status: 'TRIAGED',
    verdict: 'Outbound request contained unmasked AWS Access Key ID format.',
    analystNotes: 'AegisSec scanner intercepted payload; secret revoked in AWS IAM console, rotated credentials.'
  },
  {
    id: 'SEC-2026-8799',
    timestamp: '13:48:50 UTC',
    sourceIp: '10.2.4.99',
    destinationIp: '10.2.4.1',
    ruleName: 'Encoded PowerShell Command Execution (Sysmon ID 1)',
    severity: 'HIGH',
    technique: 'T1059.001 - PowerShell',
    status: 'CONTAINED',
    verdict: 'PowerShell launched with `-EncodedCommand` and `-WindowStyle Hidden` parameters.',
    analystNotes: 'Decoded payload revealed benign administrative inventory script; added hash exception.'
  }
];

export const SOC_TERMINAL_COMMANDS: Record<string, string> = {
  'help': `Available commands:
  whoami       - Display analyst identity & credentials
  skills       - Print verified security skillset
  certs        - List industry certifications
  projects     - View active detection & security projects
  threats      - Review active threat matrix summary
  history      - Display visitor telemetry & access ingress stats
  ip           - Show client IP & network perimeter attribution
  contact      - Show direct communication channels
  resume       - Output resume download link
  clear        - Clear terminal screen`,

  'history': `PERIMETER ACCESS & VISITOR TELEMETRY:
  Ingress Hits:       1,429+ Verified Telemetry Events
  Unique Device Nodes: 384+ Endpoints
  Attribution Engine:  IP Geolocation, AS/ISP Resolution & User-Agent Parsing
  View Live Feed:     Scroll to "Visitor Access History" on base page`,

  'ip': `INGRESS ATTRIBUTION:
  Live client IP, Autonomous System, and geolocated hop are actively
  logged in the "Visitor Access History" section on the Home dashboard.`,

  'whoami': `ANALYST RECORD:
  Name:        Kumar Kishan
  Role:        SOC Analyst (L1) / Junior Pentester / Security Analyst
  Status:      MONITORING // ACTIVE FOR HIRE
  Education:   B.E. Computer Science & Eng. (Information Security) - Chandigarh Univ.
  Location:    Bareilly, UP, India (Open to Bengaluru from Jan 2027)`,

  'skills': `VERIFIED COMPETENCIES:
  [SIEM/EDR]     Splunk Enterprise, Wazuh, Snort IDS/IPS, Sysmon
  [Traffic]      Wireshark, PCAP triage, Flow-level statistical analysis
  [Testing]      Nmap, Burp Suite, Metasploit, Kali Linux, VAPT
  [Standards]    MITRE ATT&CK, NIST IR Framework, OWASP Top-10, CVSS
  [Automation]   Python (FastAPI, Scikit-Learn), Bash, Git/GitHub`,

  'certs': `CERTIFICATION MATRIX:
  * IBM: Security Intelligence Engineer (Nov 2024)
  * Cisco: CyberOps Associate Fundamentals (Nov 2025)
  * IBM: Cloud Security (Nov 2025)
  * Google: Cybersecurity Professional (Nov 2023)
  * Deloitte: Cyber Job Simulation (Apr 2026)`,

  'projects': `PRIMARY REPOSITORIES:
  1. SentinelAI: Insider Threat & C2 Behavioral Anomaly Platform (92-95% acc.)
  2. Encrypted Traffic Threat Detection: ML Flow Analysis (Wireshark + Python)
  3. Dynamic 5G Slicing Security: 3GPP Vulnerability Assessment (NIST IR)
  4. AegisSec: Developer Security Scanner (SAST, Secrets, SCA + Claude API)
  5. Home SOC Lab: Splunk Enterprise on Kali + Windows Sysmon Pipeline`,

  'threats': `SIMULATED THREAT RADAR:
  [CRITICAL] T1558: Kerberos Ticket Anomalies (Active Analysis)
  [CRITICAL] T1552: High-Entropy Outbound Credential Intercepted
  [HIGH]     T1071: TLS Periodic Beaconing Detected
  [MEDIUM]   T1046: Network Service Recon Sweep Blocked`,

  'contact': `COMMUNICATION CHANNELS:
  Email:    kkishu181@gmail.com
  Phone:    +91 92679 14452
  LinkedIn: linkedin.com/in/kumar-kishan-security
  GitHub:   github.com/kishan77888
  THM:      tryhackme.com/p/kumarkishan22595`,

  'resume': `DOWNLOADABLE ASSET:
  Link:     ./Kumar_Kishan_Resume.pdf
  Format:   Verified PDF Document`
};

export const operationalSkills = {
  badge: "SOC READINESS & ALIGNMENT",
  title: "Operational Skills & Role Fit",
  subtitle: "Structured triage discipline, operational workflows, and team deployment readiness.",
  
  // 1. Operational Skills (grid of glass chips/cards)
  operationalSkillsBlock: {
    title: "Operational Skills",
    description: "Core day-to-day SOC disciplines validated across lab investigations and incident simulations.",
    skills: [
      {
        id: "ticketing-doc",
        title: "Ticketing and incident documentation",
        detail: "Structured triage logging, IOC cataloging, and comprehensive case notes."
      },
      {
        id: "escalation-sla",
        title: "Escalation handling and prioritization (SLA / severity awareness)",
        detail: "Triaging alerts against impact matrices to meet strict response SLAs."
      },
      {
        id: "shift-workflows",
        title: "Shift-based SOC workflows (triage -> escalate -> close)",
        detail: "Consistent lifecycle management from initial ingestion through closure."
      },
      {
        id: "written-comm",
        title: "Clear written communication (incident notes, analyst handoffs)",
        detail: "Unambiguous shift turnover notes and structured analyst handovers."
      },
      {
        id: "stakeholder-comm",
        title: "Customer/stakeholder-facing communication",
        detail: "Translating technical telemetry into actionable security recommendations."
      },
      {
        id: "it-troubleshooting",
        title: "Basic IT support troubleshooting",
        detail: "Endpoint diagnostics, network connectivity triage, and OS-level debugging."
      }
    ]
  },

  // 2. Environments I'm Targeting (horizontal row of tags)
  environmentsBlock: {
    title: "Environments I'm Targeting",
    tags: [
      "Entry-level SOC Analyst (L1)",
      "MSSP / managed security services SOC",
      "Enterprise SOC",
      "Cybersecurity Analyst / Junior Pentester"
    ],
    relocationNotice: "Open to relocating to Bengaluru from January 2027."
  },

  // 3. Tools I've Worked With (compact list, existing chip style)
  toolsBlock: {
    title: "Tools I've Worked With",
    tools: [
      "Splunk",
      "Wazuh",
      "Wireshark",
      "Snort",
      "Nmap",
      "Burp Suite",
      "Kali Linux"
    ],
    // [ADD ticketing tool, e.g. Jira / ServiceNow / Zendesk] <- placeholder, show only if filled in; otherwise hide the chip
    ticketingTool: "" 
  }
};

