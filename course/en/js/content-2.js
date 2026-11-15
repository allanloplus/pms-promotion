/* Course content (English, file 2): Part 2 Compliance mapping to security standards */
window.COURSE = window.COURSE || [];

window.COURSE.push({
  id: "s1",
  part: "Part 2 · Compliance Mapping",
  title: "ISO/IEC 27001: Putting A.5.8 into Every Project",
  sub: "Clauses, system features and audit evidence side by side",
  mins: 10,
  sections: [
    {
      h: "What ISO 27001 asks of projects",
      b: [
        ["A", "From this unit on, we put on the auditor's glasses. For each standard I'll answer three questions: <b>What does the standard require? Where does the system do it? What evidence does the auditor look at?</b>"],
        ["std", "ISO/IEC 27001:2022 clauses most relevant to projects", [
          "A.5.8 Information security in project management: information security shall be integrated into project management.",
          "6.1.2 and 8.2 Risk assessment: consistent criteria, comparable results, and identified risk owners.",
          "6.1.3 and 8.3 Risk treatment: a treatment plan, and residual risk accepted by risk owners.",
          "6.3 Planning of changes, and A.8.32 Change management: changes are planned and their impact assessed.",
          "A.5.19 to A.5.22 Supplier relationships: supplier assessment, security in agreements, monitoring and review.",
          "A.5.12 and A.5.13 Classification and labelling; A.5.35 and A.5.36 independent review and compliance."
        ]],
        ["R", "Which clause was A.5.8 in the 2013 version?"],
        ["A", "Good question. It was A.6.1.5, Information security in project management. In 2022 it moved to organizational control A.5.8. The intent is the same, but it stresses security <b>across the whole project life cycle</b>, not just at the requirements stage."]
      ]
    },
    {
      h: "Clause, feature and evidence map",
      b: [
        ["table", ["Clause", "Requirement", "System feature", "Audit evidence"], [
          ["A.5.8", "Security integrated into project management; identified and addressed in each phase", "Security items in five-phase checklists, linked to phase gates", "Checklist completion records, gate review records"],
          ["6.1.2 / 8.2", "Consistent criteria, comparable results, risk owners", "Nine-dimension criticality; risk = impact × likelihood; threat library", "Risk register, security manager approval"],
          ["6.1.3 / 8.3", "Treatment plan; residual risk formally accepted", "Treatment, plan, owner, due date, residual risk, acceptance", "Treatment plans, acceptance reasons and approver"],
          ["6.3, A.8.32", "Changes planned and impact assessed", "Change requests with security-impact flag → mandatory reassessment", "Change log, reassessment records"],
          ["A.5.9, A.5.12, A.5.13", "Asset inventory, classification and handling", "Project document register with four classes and handling rules", "Document register"],
          ["A.5.19 to A.5.22", "Supplier assessment, contract clauses, monitoring", "Outsourcing types → SP-01 to 07 and outsourcing control items", "Supplier assessment and contract evidence"],
          ["A.6.3, A.6.6", "Awareness training and NDAs", "G-M01 and member NDA status", "NDA column in the member list"],
          ["A.8.25 to A.8.29, A.8.31", "Secure development, security testing, environment separation", "M-T05, M-T06, H-T04 and IT project control items", "Test reports, code scanning evidence"],
          ["A.5.35, A.5.36", "Independent review and compliance checks", "Supervision and audit records; verification by non-implementers", "Findings, corrective actions, verifiers"]
        ]],
        ["shot", "img/g-07-guide-controls.jpg", "Methods & Guide › Security requirement library", [
          [6, 50, "Codes: G general, M medium, H high; the middle letter M, T or P means management, technical or physical."],
          [12, 50, "Type tags: management, technical and physical controls."],
          [55, 50, "The requirement itself, for example members sign an NDA and receive security awareness training."],
          [85, 50, "Mapped standards: ISO 27001 Annex A and VDA ISA references."]
        ]],
        ["shot", "img/g-07-guide-flow-std.jpg", "Methods & Guide › Applicable standards", [
          [5, 37, "ISO 27001: A.5.8, risk assessment in 6.1.2 and 8.2, A.5.12 classification, A.8.32 change, A.5.35 independent review."],
          [5, 50, "TISAX: VDA ISA 1.2.3 project security, protection needs, prototype protection."],
          [5, 56, "ISO 27701: privacy impact assessment for projects involving personal data."],
          [5, 66, "ISO 42001: AI usage policy and AI system impact assessment for projects using or building AI."],
          [5, 71, "IEC 62443 and ISO/SAE 21434: TARA, secure development, SBOM and cybersecurity case for product-security projects."]
        ]]
      ]
    },
    {
      h: "Practical advice from consultant and auditor",
      b: [
        ["tip", "audit", "How auditing A.5.8 changes", "I used to ask “How do you make sure projects consider security?” and get a procedure document. Now I can say “Please open the R&D project you closed last month” and follow it from checklist, risk assessment and requirements through findings to closure. <b>The evidence is the system record itself.</b>"],
        ["tip", "consult", "Keep the system and the documents consistent", "During implementation, map your ISMS project, supplier and change management procedures to the system's phase controls and requirement library. Use the same wording, so internal and external audits never find “the procedure says A, the system does B”."],
        ["tip", "ng", "Common pitfall", "The procedure says “major projects require a risk assessment” but never defines “major”. The nine dimensions and the high-water mark give a <b>consistent and repeatable</b> rule, which is exactly what clause 6.1.2 b) asks for."],
        ["check", "Which ISO/IEC 27001:2022 control requires information security to be integrated into project management?", ["A.5.8", "A.5.23", "A.8.32", "A.5.30"], 0, "A.5.8 Information security in project management. A.5.23 is cloud services, A.8.32 change management, and A.5.30 ICT readiness for business continuity."]
      ]
    }
  ]
});

window.COURSE.push({
  id: "s2",
  part: "Part 2 · Compliance Mapping",
  title: "TISAX (VDA ISA): Projects and Prototype Protection in Automotive",
  sub: "Project security requirements, protection needs, suppliers and prototypes",
  mins: 8,
  sections: [
    {
      h: "Why TISAX cares so much about projects",
      b: [
        ["A", "TISAX is the information security assessment exchange of the German automotive association VDA, based on the VDA ISA questionnaire. When carmakers and Tier-1 suppliers hand over drawings and prototypes, what they care about most is <b>whether that project is properly protected</b>."],
        ["R", "So TISAX assessors always ask about projects?"],
        ["A", "Always. VDA ISA 1.2.3 asks directly: to what extent is information security considered in projects? Assessors will ask you to demonstrate it, from project classification and protection needs to how requirements are implemented."],
        ["table", ["VDA ISA topic", "Focus", "In the system"], [
          ["1.2.3 Information security in projects", "Classify projects by protection need; identify and handle requirements", "Nine-dimension assessment (incl. client and contract requirements) and security checklists"],
          ["1.3 Asset classification", "Classify by protection need and handle accordingly", "Document register with four classes and handling rules"],
          ["2.1 People", "Confidentiality obligations, awareness", "G-M01 NDA and briefing; H-M01 background checks and project NDAs"],
          ["4.1, 4.2 Identity and access", "MFA, need-to-know", "M-T02 MFA; H-M02 need-to-know list"],
          ["5.1 Cryptography", "Encryption of confidential data", "M-T01 encryption"],
          ["6.1 Suppliers", "Supplier assessment, contracts, data transfer records", "SP-01 to 07 and outsourcing items"],
          ["7.1 Compliance", "Client contract security requirements", "CU-01 to 06 (client projects)"],
          ["8 Prototype protection", "Secure areas, covered transport, photo control", "H-P01 dedicated secure area; H-P03 prototype storage, transport, testing and display"]
        ]]
      ]
    },
    {
      h: "Seeing the VDA ISA mapping in the system",
      b: [
        ["shot", "img/e1-17-reqs.jpg", "Project security › ③ Requirements (very high R&D project)", [
          [96, 1, "Very high criticality: high-level controls, 52 items including dedicated ones; none verified yet."],
          [20, 19, "After a reassessment, add any new requirements from the latest result."],
          [6, 38, "G-M01 NDA and awareness, mapped to VDA ISA 2.1."],
          [6, 48, "G-M02 roles and a project security contact, mapped to VDA ISA 1.2.3."]
        ]],
        ["list", [
          "<b>Protection needs</b>: the client and contract dimension at 3 means TISAX high protection needs; 4 means very high protection needs or prototype protection.",
          "<b>OEM / ODM subtypes</b>: automatically add control of received client drawings, access and transfer channels, and certificates of return or destruction at closure.",
          "<b>Strategic project subtype</b>: automatically adds planning of a restricted area for highly confidential work.",
          "<b>Client projects</b>: CU-06 “keep evidence of meeting client requirements for client audits or TISAX assessments” is added automatically."
        ]],
        ["tip", "consult", "A shortcut for TISAX preparation", "TISAX assessments often ask you to “walk through a project end to end”. Before the assessment, run a representative project fully in the system; showing the checklist, requirement evidence and verifiers is more convincing than flipping through ten documents."],
        ["tip", "audit", "What assessors will sample", "Prototype protection (VDA ISA chapter 8) is a frequent source of findings: photos of samples, uncovered transport, testers without project NDAs. The R&D case in Part 3 shows a minor nonconformity from being raised to being closed."],
        ["check", "A project scores 4 on “client and contract requirements”. What does that mean?", ["The client only requires a standard confidentiality clause", "No special requirements", "TISAX very high protection needs or prototype protection", "The client wants an ISO certificate every year"], 2, "On that dimension 3 means explicit client security requirements (TISAX high protection needs) and 4 means TISAX very high protection needs or prototype protection. By the high-water mark the project becomes very high and gets high-level controls."]
      ]
    }
  ]
});

window.COURSE.push({
  id: "s3",
  part: "Part 2 · Compliance Mapping",
  title: "ISO 27701 and ISO 42001: Privacy and AI in Projects",
  sub: "Once a dimension reaches its threshold, privacy and AI requirements arrive automatically",
  mins: 8,
  sections: [
    {
      h: "ISO/IEC 27701: projects with personal data",
      b: [
        ["A", "Many IT projects touch personal data: membership systems, HR systems, customer service platforms. ISO 27701 extends ISO 27001 to privacy and requires organizations, as PII controllers or processors, to manage personal data properly."],
        ["table", ["Personal data score", "Situation", "Added automatically"], [
          ["1", "No personal data", "—"],
          ["2", "Small amounts of ordinary PII (staff, contacts)", "PI-01 PII inventory and lawful basis, PI-02 minimization and de-identification, PI-03 processor contracts and monitoring"],
          ["3", "Large amounts of ordinary PII or some sensitive PII", "Plus PI-04 privacy impact assessment (PIA/DPIA)"],
          ["4", "Large amounts of sensitive PII or cross-border transfer", "As above, and the project is at least very high"]
        ]],
        ["shot", "img/e2-03-imp-result.jpg", "Criticality result of the IT project (EDMS)", [
          [72, 1, "Result: high, so medium-level controls apply."],
          [61, 25, "Confidentiality three: confidential information."],
          [61, 80, "Personal data three: large amounts of ordinary PII, so PI-04 privacy impact assessment is added."]
        ], "Let's look at the IT project case from Part 3: the e-signature and document management system."],
        ["tip", "consult", "When a PIA pays off most", "A privacy impact assessment is best done <b>during planning, before the requirements spec is approved</b>. IT projects already have a PIA/DPIA item in their Planning checklist; turning its results into privacy requirements in the spec is far easier than retrofitting after go-live."]
      ]
    },
    {
      h: "ISO/IEC 42001: projects that use or build AI",
      b: [
        ["A", "ISO 42001 is the AI management system standard. Whenever a project uses AI, whether building its own model or buying software with AI features, AI risk must be considered."],
        ["table", ["AI score", "Situation", "Added automatically"], [
          ["1", "No AI", "—"],
          ["2", "Supporting use, no sensitive data", "AI-01 follow the AI usage policy: no confidential data or PII in unapproved external AI services"],
          ["3", "AI processes sensitive data or PII, or affects decisions", "Plus AI-02 AI system impact assessment, AI-03 training and test data management, AI-04 human review of outputs and disclosure of AI use"],
          ["4", "High-risk AI affecting people's rights or safety", "As above, and the project is at least very high"]
        ]],
        ["shot", "img/e2-05-reqs-sp.jpg", "Project security › ③ Requirements › Privacy, AI and supplier items", [
          [4, 9, "AI-01: follow the AI usage policy, ISO 42001 Annex A.2 and A.9."],
          [4, 18, "AI-02: AI system impact assessment, ISO 42001 clause 6.1.4."],
          [4, 25, "AI-04: human review of AI outputs and disclosure of AI use to stakeholders."],
          [4, 55, "PI-04: privacy impact assessment, PIA or DPIA."],
          [4, 62, "From SP-01: supplier requirements, because procurement and maintenance contracts were ticked."]
        ]],
        ["R", "So scoring AI as three makes all four ISO 42001 requirements appear automatically!"],
        ["A", "Yes. And the threat library includes “confidential information entered into external generative AI”. In the last two years almost every company I've worked with has had an incident like that."],
        ["tip", "audit", "The auditor's view: evidence for AI", "Evidence for AI-02 should be an approved AI system impact assessment. For AI-04, check whether screens or user guides disclose the AI feature and whether a human review step exists. “Users were briefed” alone is rarely enough to show effective implementation."],
        ["check", "An IT project introduces a document system with AI summaries that process sensitive documents; AI scores 3. Which item is NOT added automatically?", ["AI-02 AI system impact assessment", "AI-03 management of AI training and test data", "AI-04 human review and disclosure", "PS-01 product TARA"], 3, "AI at 3 adds AI-01 to AI-04. PS-01 TARA comes from the product/system cybersecurity dimension at 3 or more, as an ISO/SAE 21434 and IEC 62443 requirement."]
      ]
    }
  ]
});

window.COURSE.push({
  id: "s4",
  part: "Part 2 · Compliance Mapping",
  title: "IEC 62443 and ISO/SAE 21434: Product Cybersecurity",
  sub: "Where the organization's ISMS meets the product's cybersecurity",
  mins: 9,
  sections: [
    {
      h: "Two product cybersecurity standards",
      b: [
        ["table", ["Standard", "Scope", "Most relevant to projects"], [
          ["IEC 62443-4-1", "Secure development life cycle for industrial and connected product suppliers", "SM security management, SR security requirements, SD secure design, SI secure implementation, SVV verification and validation, DM defect management, SUM update management"],
          ["IEC 62443-4-2", "Technical security requirements for IACS components", "Component capabilities such as device identity, certificates and software integrity"],
          ["ISO/SAE 21434", "Cybersecurity engineering for road vehicle E/E systems", "Clause 6 project cybersecurity management, 7 distributed activities, 8 continual activities, 9 to 11 concept, development and validation, 13 operations and maintenance, 15 TARA"]
        ]],
        ["A", "ISO 27001 covers the <b>organization's</b> information security; 62443 and 21434 cover the <b>product's</b> cybersecurity. R&D projects sit right where they meet: the project must protect its design data, and the product it delivers must be secure."],
        ["R", "How does the system know a project needs product cybersecurity?"],
        ["A", "Through the product/system cybersecurity dimension of the criticality assessment. Three means a connected product, an external service or an industrial component; four means it affects human safety, such as automotive, medical or critical infrastructure."]
      ]
    },
    {
      h: "PS requirements and standard mapping",
      b: [
        ["shot", "img/e1-10-imp-b.jpg", "Criticality assessment of the R&D project (lower half)", [
          [15, 3, "The product and system cybersecurity dimension, mapped to IEC 62443 and ISO/SAE 21434."],
          [85, 15, "Score four: affects human safety. An automotive T-Box belongs here."],
          [35, 35, "AI use two: supporting use, which adds AI-01."],
          [60, 53, "Outsourcing three: the manufacturer can access sensitive information."]
        ]],
        ["table", ["Code", "Requirement", "ISO/SAE 21434", "IEC 62443-4-1"], [
          ["PS-01", "Perform product TARA; define cybersecurity goals and requirements", "Clauses 9, 15", "SR"],
          ["PS-02", "Secure design, implementation and verification testing (scans, fuzzing, penetration tests)", "Clauses 10, 11", "SD, SI, SVV"],
          ["PS-03", "SBOM, vulnerability management and product incident response", "Clause 8", "DM"],
          ["PS-04", "Secure update mechanism; protect signing keys and device certificates", "Clause 13", "SUM, 62443-4-2"],
          ["PS-05", "Supplier cybersecurity interface agreement (CIA) and distributed responsibilities", "Clause 7", "SM"],
          ["PS-06", "Cybersecurity case and pre-release cybersecurity assessment (score 4 only)", "6.4.7 to 6.4.9", "—"]
        ]],
        ["shot", "img/e1-38-risks-treated.jpg", "R&D project risk register (after treatment)", [
          [15, 30, "Exploitable firmware vulnerabilities: impact four, likelihood three, score twelve, very high."],
          [65, 30, "Treatment: apply security requirements from TARA; complete fuzzing and penetration tests before release."],
          [76, 30, "After treatment the residual risk drops to three, low, and the status is treated."],
          [15, 88, "A risk added after a change: compromised cloud OTA platform pushes malicious firmware."]
        ]],
        ["tip", "key", "TARA versus the project risk assessment", "The system's project risk assessment covers <b>project</b> risks, such as leaked drawings or keys. <b>TARA covers the product's threats and attack paths</b>. They complement each other: PS-01 requires a TARA, and the TARA report is registered as a confidential document, serving as evidence for a 21434 audit."],
        ["tip", "consult", "Phase items for R&D projects", "Product development checklists already include design verification and product security testing, product vulnerability and incident monitoring, and post-launch security maintenance and vulnerability reporting, so the SVV, DM and SUM practices of 62443-4-1 fall naturally into Execution, Monitoring and Closure."],
        ["check", "Which item requires an SBOM, vulnerability management and product incident response, and which IEC 62443-4-1 practice does it map to?", ["PS-01; SR security requirements", "PS-03; DM defect management", "PS-05; SM security management", "PS-06; SUM update management"], 1, "PS-03 covers SBOM, vulnerability management and product incident response, mapping to ISO/SAE 21434 clause 8 continual cybersecurity activities and to DM (security defect management) in IEC 62443-4-1."]
      ]
    }
  ]
});

window.COURSE.push({
  id: "s5",
  part: "Part 2 · Compliance Mapping",
  title: "Audit Evidence Map: One System, Evidence for Many Standards",
  sub: "What auditors ask, where to find it, and what evidence to show",
  mins: 8,
  sections: [
    {
      h: "Audit questions and where the evidence is",
      b: [
        ["table", ["The auditor asks", "Where in the system", "Evidence"], [
          ["Did this project do a risk assessment?", "Project security › ② Risk assessment", "Risk register, treatment plans, security manager's approval and time"],
          ["Did the vendor sign an NDA before getting data?", "Phase controls (Initiation) + SP-03 evidence", "Completion time of the control item, evidence text"],
          ["Are the requirements implemented, and who verified them?", "Project security › ③ Requirements", "Evidence, verifier (not the implementer) and verification time"],
          ["Were changes assessed for security impact?", "Project security › Change management", "Security-impact decision, review comments, reassessment"],
          ["Were findings corrected?", "Project security › Supervision & audits", "Corrective action, who confirmed closure"],
          ["Who approved moving to the next phase?", "Phase controls › Gate review records", "Requester, approver, time, comments"],
          ["Was data changed afterwards?", "Project › Log (audit trail)", "Time, user, before and after of every change"]
        ]],
        ["shot", "img/e1-37-reqs-verified.jpg", "Project security › ③ Requirements (all verified)", [
          [93, 56, "Completed and verified: 52 of 52."],
          [50, 70, "The green bar shows the share completed and verified."],
          [40, 93, "Each item has implementation evidence, for example the NDA document numbers and briefing date."],
          [86, 93, "Verified by Huang, who is not the person who implemented it."]
        ]],
        ["shot", "img/e1-43-logs.jpg", "Project › Log (audit trail)", [
          [12, 53, "Time and user: who, and when."],
          [31, 53, "Action code: this entry is a gate approval."],
          [65, 53, "Details: the approval comment."],
          [31, 58, "The entry before it: the project manager requesting the closure review."]
        ]],
        ["shot", "img/e1-44-phases-all.jpg", "Phase controls › Who completed each item, and when", [
          [15, 43, "Initiation: passed, fourteen of fourteen items done."],
          [15, 55, "Each control item records who completed it and when."]
        ]]
      ]
    },
    {
      h: "Audit sampling and implementation advice",
      b: [
        ["list", [
          "<b>Sampling</b>: from the dashboard or project list, pick projects that are high or very high, involve outsourcing, or have just closed.",
          "<b>Sequence</b>: use the log to check order, e.g. whether the NDA came before data was shared, and the risk assessment approval before Execution.",
          "<b>Quality</b>: sample two or three requirements and check that evidence is specific (document numbers, dates, scope), not just “done”.",
          "<b>Segregation of duties</b>: verifiers and approvers differ from implementers.",
          "<b>Closing the loop</b>: findings have corrective actions, and an auditor or security role confirmed closure."
        ]],
        ["table", ["Implementation step", "How"], [
          ["1. Define scope", "Decide which project types within the ISMS scope are covered, and whether to make security management mandatory for all projects"],
          ["2. Tune templates", "Adjust categories, five-phase contents and the requirement library to your procedures"],
          ["3. Set up roles", "Create accounts and system roles; name management, the security manager and auditors"],
          ["4. Pilot", "Run one R&D or IT project end to end and collect feedback"],
          ["5. Include in audits", "Add project sampling to the internal audit plan; use the dashboard and reports in management review"]
        ]],
        ["tip", "consult", "One piece of evidence, many standards", "The same NDA evidence satisfies ISO 27001 A.6.6 and VDA ISA 2.1; the same TARA report is both a 21434 work product and evidence of 27001 risk treatment. That is the value of integrating standards on an ISMS foundation: <b>do it once, use it many times</b>."],
        ["check", "An auditor wants to confirm the vendor got confidential data only after signing an NDA. What is the most direct evidence in the system?", ["The project's budget breakdown", "The dashboard status lights", "The Initiation control item's completion time and SP-03 evidence, checked against the order of events in the audit trail", "The Gantt chart"], 2, "The confidential data exchange outsourcing type adds an Initiation NDA control item and requirement SP-03; their completion times, evidence and the audit trail let you reconstruct the order of events."]
      ]
    }
  ]
});
