/* Course content (English, file 3): Part 3 System operation (three full cases) and wrap-up */
window.COURSE = window.COURSE || [];

window.COURSE.push({
  id: "o1",
  part: "Part 3 · System Operation",
  title: "Sign-in, Navigation and Accounts",
  sub: "Passwordless sign-in, company workspaces, roles and account types",
  mins: 7,
  sections: [
    {
      h: "Passwordless sign-in",
      b: [
        ["shot", "img/g-01b-login-mail.jpg", "Sign-in page", [
          [75, 20, "System name and standards: ISO 27001, TISAX, ISO 27701, ISO 42001, IEC 62443 and ISO/SAE 21434."],
          [75, 38, "Enter your company e-mail. No password needed."],
          [75, 43, "Request a sign-in code; the system e-mails a one-time code to enter."],
          [75, 54, "Visit request: ask for a guest account to browse the demo data."],
          [73, 68, "Interface language: Traditional Chinese, Simplified Chinese, English and Spanish."]
        ], "In Part 3 we operate the system for real, starting with sign-in."],
        ["list", [
          "<b>No passwords</b>: sign in with a one-time code sent by e-mail; code lifetime and resend intervals are limited.",
          "<b>New members</b>: can self-register if enabled; after verifying their e-mail, an administrator approves them and assigns a role.",
          "<b>Timeouts</b>: idle and absolute session timeouts are configurable.",
          "<b>Emergency procedure</b>: if e-mail fails completely, a server-side emergency code can be issued; every use is logged and administrators are notified."
        ]],
        ["R", "No passwords is so convenient! But is it secure?"],
        ["A", "One-time codes tied to managed e-mail accounts avoid weak and reused passwords. Once an account is disabled it cannot even request a code, so removing access for leavers is cleaner too."]
      ]
    },
    {
      h: "Finding your way around",
      b: [
        ["shot", "img/g-02-dash-nav.jpg", "Main screen and side menu", [
          [8, 22, "Dashboard: progress, risks and costs of all projects, or of the projects you belong to."],
          [8, 26, "Projects: the project list and new project requests."],
          [8, 30, "My work: to-dos and assigned tasks; the orange number is what's waiting for you."],
          [8, 34, "Cost and efficiency analysis: earned value management and people efficiency."],
          [8, 38, "Methods and guide: phase templates, assessment methods, the requirement library, roles and permissions."],
          [33, 4, "Current company: switch workspaces if you can access more than one."],
          [8, 73, "Interface language."]
        ]],
        ["tip", "op", "Works on phones too", "The system is responsive: on phones the menu becomes a tab bar at the bottom, so managers can approve project requests and gate reviews on the go."]
      ]
    },
    {
      h: "Companies, account types and roles",
      b: [
        ["shot", "img/g-08-admin-companies.jpg", "System admin › Companies (workspaces)", [
          [40, 45, "Each company is a separate project workspace."],
          [10, 80, "Current: Demo Company, loaded with sample data."],
          [42, 80, "The company code becomes the start of the project number."],
          [68, 80, "Authorized accounts: an account must be authorized to enter a company."]
        ]],
        ["shot", "img/g-08-admin-users.jpg", "System admin › Accounts", [
          [43, 30, "Company: each account can be authorized for one or more companies."],
          [55, 30, "Account type: standard, client trial, or guest (read-only)."],
          [75, 30, "System role: administrator, management, security manager, auditor or member."],
          [95, 30, "Hourly rate: used for labor cost, visible only to administrators."]
        ]],
        ["p", "Permissions come from three independent settings: <b>company</b> (which workspaces you can enter) → <b>account type</b> (which projects you can see there) → <b>role</b> (what you can do in those projects)."],
        ["table", ["People in the cases", "System role", "Task in the cases"], [
          ["Lin (GM)", "Management / PMO", "Approves project requests and every phase gate"],
          ["Chen (Security)", "Security manager (ISMS)", "Approves risk assessments, verifies security requirements"],
          ["Huang (Audit)", "Auditor", "Performs project security audits, verifies requirements"],
          ["Wang (PM), Zheng (IT), Liu (Admin)", "Members (acting as project managers)", "Request projects, plan and assign work, request gate reviews"],
          ["Li (Firmware), Zhou (Consultant)", "Members (acting as project security contacts)", "Criticality, risk assessment, requirements and document classification"]
        ]],
        ["check", "Wang is a “member” in the system. Why can he see the cost data of the project he manages?", ["Members can see all company costs", "Cost visibility depends on the project role: a project manager can see their project's costs", "He has administrator rights", "Everyone can see cost data"], 1, "System roles and project roles are separate. Cost data is visible to the project manager (a project role), management, auditors and administrators; ordinary members only see non-cost data of their projects."]
      ]
    }
  ]
});

window.COURSE.push({
  id: "o2",
  part: "Part 3 · System Operation",
  title: "Case 1 (Part A) R&D Project: Request, Approval and Members",
  sub: "In-house R&D of the automotive T-Box telematics module V2",
  mins: 10,
  sections: [
    {
      h: "Case background",
      b: [
        ["A", "The first case is an R&D project, and it carries the heaviest security requirements of the three. We'll follow it from the request all the way to closure."],
        ["table", ["Item", "Details"], [
          ["Project", "In-house R&D: Automotive T-Box Telematics Module V2"],
          ["Nature / category", "Internal project / Product development (in-house R&D)"],
          ["Outsourcing", "Confidential data exchange: PCBs made by a contract manufacturer who receives the design files"],
          ["Period / budget", "February to December 2026 / NT$4.8 million"],
          ["Team", "Wang (project manager), Li (project security contact), Zhang, Wu"],
          ["Compliance", "ISO/SAE 21434 cybersecurity; carmaker customer's TISAX AL3 audit"]
        ]],
        ["R", "Automotive, connected, and outsourced manufacturing. Every dimension sounds high!"]
      ]
    },
    {
      h: "Step 1: Request a new project",
      b: [
        ["p", "Under Projects, the project manager clicks <b>+ New project</b> and fills in the name, nature, category and subtype, then department, budget, planned dates, description and objectives."],
        ["shot", "img/e1-02-new-sup.jpg", "New project form (lower half)", [
          [40, 10, "Description and scope: required before submitting."],
          [40, 26, "Objectives and expected benefits."],
          [2, 37, "Product development is already mandatory, so the voluntary opt-in box stays unticked."],
          [2, 59, "Tick confidential data exchange, because the PCB design files go to the manufacturer."]
        ]],
        ["shot", "img/e1-03-draft.jpg", "The project page after saving a draft", [
          [25, 16, "Tags: draft, internal project, product development, outsourcing type, in-house R&D."],
          [40, 25, "Hint: you can keep editing a draft and submit when ready."],
          [87, 10, "Submit the request for management approval."]
        ]],
        ["tip", "op", "Categories lock after approval", "Once approved, the category, subtype and outsourcing types can no longer change, because the checklist was generated from them. While in draft or after rejection you can still change them, and the checklist is regenerated."]
      ]
    },
    {
      h: "Step 2: Management approves the project",
      b: [
        ["shot", "img/e1-04-gm-inbox.jpg", "Lin's “My work”", [
          [7, 25, "A project request appears in the to-do list."],
          [30, 25, "Click the project name to review it."]
        ]],
        ["shot", "img/e1-05-gm-approve.jpg", "Management reviews the request", [
          [4, 15, "Status: under review."],
          [87, 10, "Approve the project; rejecting requires a reason."]
        ]],
        ["shot", "img/e1-06-approved.jpg", "Project overview after approval", [
          [13, 28, "The project enters phase one: Initiation."],
          [8, 70, "Automatic project number: company code, P, year, category and sequence."],
          [35, 90, "Actual start date."]
        ]],
        ["A", "When the project is approved, the system e-mails the project manager with a reminder: this project requires project security management, so please complete the security criticality assessment soon."]
      ]
    },
    {
      h: "Step 3: Add members and record NDAs",
      b: [
        ["shot", "img/e1-07-madd.jpg", "Members & permissions › Add member", [
          [50, 25, "Only active accounts authorized for this company can be added."],
          [50, 34, "Assign a project role: Li becomes the project security contact."]
        ]],
        ["shot", "img/e1-08-members.jpg", "Members & permissions", [
          [44, 56, "Project roles can be changed at any time; there must be at least one project manager."],
          [60, 56, "NDA column: ticked means signed."],
          [64, 72, "Wu has not signed yet. Remember this: it will come up in an audit later."],
          [40, 90, "Role descriptions; removed members lose access to the project immediately."]
        ]],
        ["R", "Wu hasn't signed the NDA. Will he get caught later?"],
        ["A", "Keep that in mind. You'll see it in the audit during the monitoring phase."],
        ["check", "After the R&D project is approved, the project manager realizes the maintenance contract outsourcing type was not ticked. What is correct?", ["Just tick it in the project's basic data", "Outsourcing types are locked after approval because the checklist depends on them; handle it through change management, or confirm before submitting", "Ask the auditor to change it", "Outsourcing types don't affect anything, so ignore it"], 1, "Category, subtype and outsourcing types are locked after approval so the checklist matches what was approved. Confirm them before submitting; a new supplier during execution goes through a change request with a security-impact assessment."]
      ]
    }
  ]
});

window.COURSE.push({
  id: "o3",
  part: "Part 3 · System Operation",
  title: "Case 1 (Part B) R&D Project: Assessment, Risk and Requirements",
  sub: "Criticality, the threat library, security manager approval, requirements, document classification and the Initiation gate",
  mins: 13,
  sections: [
    {
      h: "Step 4: Read the Initiation checklist",
      b: [
        ["shot", "img/e1-09-phase1.jpg", "Phase controls › Initiation", [
          [13, 29, "The project is in Initiation."],
          [35, 52, "Gate review area: eleven required items still open, listed one by one."],
          [30, 80, "Security control: complete the security criticality assessment."],
          [30, 83, "Security control: members sign NDAs and receive a security briefing."]
        ]],
        ["p", "This checklist combines common items, internal project items (such as executive sponsorship), product development items (such as feasibility and client NDA and IP ownership), the R&D subtype item (technology and patent search), the confidential data exchange item, and the security control items."]
      ]
    },
    {
      h: "Step 5: Security criticality assessment",
      b: [
        ["shot", "img/e1-10-imp.jpg", "Project security › ① Criticality (filled in by the project security contact)", [
          [8, 14, "Each dimension has a question and a mapped standard."],
          [84, 22, "Confidentiality four: the OTA signing mechanism and core technology are strictly confidential."],
          [61, 42, "Integrity three: major operational or quality impact."],
          [39, 64, "Availability two: can tolerate one to seven days."],
          [39, 80, "Personal data two: small amounts such as vehicle location data."]
        ], "Li signs in as the project security contact and opens the criticality assessment."],
        ["table", ["Dimension", "Score", "Reason"], [
          ["Confidentiality", "4", "OTA signing and core technology are strictly confidential"],
          ["Integrity", "3", "Tampered designs would cause major quality impact"],
          ["Availability", "2", "Can tolerate 1–7 days"],
          ["Personal data", "2", "Small amounts of vehicle location data"],
          ["Client and contract", "2", "Standard confidentiality clauses"],
          ["Legal compliance", "3", "Vehicle cybersecurity regulations"],
          ["Product / system cybersecurity", "4", "Connected vehicle component affecting road safety"],
          ["AI use", "2", "Supporting use"],
          ["Outsourcing and third parties", "3", "The manufacturer can access design files"]
        ]],
        ["A", "After clicking complete, the result is <b>level four, very high, with high-level controls</b>. The Initiation item “complete the security criticality assessment” is ticked automatically."]
      ]
    },
    {
      h: "Step 6: Risk assessment and security manager approval",
      b: [
        ["shot", "img/e1-12-rlib.jpg", "② Risk assessment › Import from threat library", [
          [42, 32, "Scenarios tagged category-specific belong to product development projects."],
          [2, 57, "Tick the scenarios that apply, such as exploitable firmware vulnerabilities."],
          [25, 61, "Each scenario comes with suggested confidentiality, integrity and availability impacts."],
          [70, 88, "Import the selected scenarios: seven risks at once."]
        ]],
        ["shot", "img/e1-13-redit.jpg", "Edit risk", [
          [35, 19, "Scenario: product firmware contains exploitable vulnerabilities."],
          [80, 48, "Integrity impact four: catastrophic."],
          [80, 57, "Likelihood three: medium, achievable with common skills."],
          [18, 84, "Treatment: reduce, by implementing controls."],
          [80, 84, "Treatment owner: Li."],
          [50, 93, "Plan: apply security requirements from TARA; fuzzing and penetration tests before release."]
        ]],
        ["p", "Li confirms the likelihood of each risk, fills in treatment, plan, owner and due date for every risk scoring above 6, and submits the assessment for review."],
        ["shot", "img/e1-15-ra-approve.jpg", "Security manager Chen reviews the risk assessment", [
          [92, 56, "Status: waiting for the security manager."],
          [80, 65, "Risk matrix: one very high, four high."],
          [12, 82, "Only the security manager sees the approve and reject buttons."]
        ]],
        ["A", "Chen approves with a comment: “The treatment plan is feasible and approved; OTA key protection is the priority.” The approver, time and comment appear at the top of the risk assessment page."]
      ]
    },
    {
      h: "Step 7: Set security requirements",
      b: [
        ["shot", "img/e1-16-reqs-empty.jpg", "③ Requirements (not yet applied)", [
          [90, 56, "Control level: high."],
          [15, 74, "Apply the high-level template: every applicable requirement is added at once."]
        ]],
        ["p", "That gives <b>52 items</b>: 11 general, 12 medium and 12 high-level controls, plus 17 dedicated items (7 supplier SP, 3 privacy PI, 1 AI and 6 product cybersecurity PS). Li then assigns an owner to each."],
        ["tip", "op", "When an item doesn't apply", "Template items cannot be deleted. If one truly doesn't apply, set it to not applicable and give a reason; that reason is audited too. Only custom project requirements can be deleted."]
      ]
    },
    {
      h: "Step 8: Document register and classification",
      b: [
        ["shot", "img/e1-18-dadd.jpg", "④ Documents › Register a project document", [
          [50, 18, "Document: OTA signing key procedure and key register."],
          [80, 26, "Classification: strictly confidential."],
          [50, 55, "Location: HSM room, safe S-2."],
          [50, 67, "Disposal at closure: destroy with certificate."]
        ]],
        ["shot", "img/e1-19-docs.jpg", "④ Documents › Project document register", [
          [15, 6, "Count per class: one public, three confidential, three strictly confidential."],
          [30, 18, "Classification tag."],
          [47, 22, "The handling rules for that class appear automatically."],
          [70, 20, "Custodian, location, retention and disposal."]
        ]]
      ]
    },
    {
      h: "Step 9: Initiation gate review",
      b: [
        ["shot", "img/e1-22-gatereq.jpg", "Request a gate review", [
          [55, 27, "Summarize the phase results: approval, NDAs, assessment, risk assessment, requirements and register are complete."],
          [87, 38, "Submit; management is notified."]
        ], "Once every required Initiation item is done, the button to request Planning appears."],
        ["shot", "img/e1-23-gate-gm.jpg", "Lin reviews the Initiation gate", [
          [40, 25, "Banner: the Initiation gate review is waiting for approval."],
          [30, 57, "Requester, time and phase summary."],
          [8, 67, "Approve; rejecting requires a reason."]
        ]],
        ["tip", "consult", "Assess early", "The criticality assessment must be done by the end of Initiation; risk assessment approval, requirements and the document register by the end of Planning. In this case they were all done in Initiation, leaving Planning free for schedule and budget."],
        ["check", "In this case, who can NOT approve the R&D project's risk assessment?", ["Security manager Chen", "A system administrator", "Project manager Wang", "All of them can"], 2, "Risk assessments and risk acceptance are approved by the security manager (or a system administrator). The project manager and security contact prepare and submit, but cannot approve their own assessment."]
      ]
    }
  ]
});

window.COURSE.push({
  id: "o4",
  part: "Part 3 · System Operation",
  title: "Case 1 (Part C) R&D Project: Execution, Changes, Audit and Closure",
  sub: "Task assignment, Kanban and Gantt, change reassessment, implementation and verification, findings, closure",
  mins: 14,
  sections: [
    {
      h: "Step 10: Planning: tasks and schedule",
      b: [
        ["shot", "img/e1-24-taskadd.jpg", "Tasks › Add and assign", [
          [50, 16, "Task: TARA threat analysis and cybersecurity requirements."],
          [30, 25, "Owner: Li. The system e-mails the assignee."],
          [70, 25, "Phase: Planning."],
          [70, 50, "Estimated hours: used for progress weighting and efficiency analysis."]
        ]],
        ["shot", "img/e1-26-board.jpg", "Tasks › Kanban", [
          [8, 52, "To do."],
          [26, 52, "In progress."],
          [78, 52, "Done."],
          [15, 60, "Overdue due dates are shown in red."]
        ]],
        ["shot", "img/e1-27-gantt.jpg", "Tasks › Gantt chart", [
          [90, 42, "Switch between list, Kanban and Gantt views."],
          [45, 68, "The dark part shows completion; red means overdue."],
          [86, 60, "The vertical line is today."]
        ]],
        ["p", "Once WBS, schedule, budget, TARA and the other required Planning items are done, the project manager requests the gate review and Lin approves the move to Execution. During execution, members report progress and log hours under My work, and the project manager records expenses such as prototyping and licenses."]
      ]
    },
    {
      h: "Step 11: Change requests and continuous risk assessment",
      b: [
        ["shot", "img/e1-28-cadd.jpg", "Change management › Submit a change request (by Zhang)", [
          [50, 18, "Subject: add a cloud OTA update service provider."],
          [30, 27, "Change type: supplier / outsourcing."],
          [50, 57, "Impact on schedule, cost and quality."],
          [14, 66, "Tick “this change affects security”."]
        ]],
        ["shot", "img/e1-29-changes.jpg", "Change management › Project manager review", [
          [58, 77, "Requester's judgment: security is affected."],
          [77, 77, "Status: pending review."],
          [90, 77, "The project manager reviews: approve or reject, and can correct the security-impact judgment."]
        ]],
        ["shot", "img/e1-30-reassess.jpg", "After approval: reassessment required", [
          [50, 25, "Banner: criticality and risk assessment must be redone before any gate review."],
          [50, 88, "The same item appears in the gate checklist."]
        ]],
        ["shot", "img/e1-31-risks-after.jpg", "Risk assessment after reassessment", [
          [40, 56, "Approval record: reassessment after change approved."],
          [30, 43, "Risks grew from seven to eight: the cloud OTA platform scenario was added."],
          [70, 75, "The matrix updates too."]
        ]],
        ["A", "Li raises the outsourcing dimension from three to four, adds the cloud OTA risk and submits; once Chen approves, the banner disappears. Adding requirements from the latest result makes sure the new supplier is covered."],
        ["R", "So a change isn't just a new plan. Security has to be rethought too!"]
      ]
    },
    {
      h: "Step 12: Implement requirements with evidence",
      b: [
        ["shot", "img/e1-32-qedit.jpg", "③ Requirements › Update implementation", [
          [50, 15, "PS-01: perform product TARA and define cybersecurity goals and requirements."],
          [25, 28, "Status: implemented."],
          [70, 28, "Owner: Li."],
          [50, 37, "Evidence: TARA report version and number of cybersecurity goals."],
          [50, 48, "Hint: implemented and not applicable both need text; changes require re-verification."]
        ]],
        ["tip", "ng", "Common evidence pitfall", "Writing only “done” or “per procedure” is as good as nothing in an audit. Good evidence can be found: <b>document number, version, date and scope</b>. For example: “TARA report TBOX-TARA-v1.2 completed, defining 14 cybersecurity goals”."]
      ]
    },
    {
      h: "Step 13: Security audit in Monitoring",
      b: [
        ["shot", "img/e1-33-aadd.jpg", "Supervision & audits › New audit record (Huang)", [
          [55, 20, "Result type: minor nonconformity."],
          [37, 28, "Scope: R&D restricted area, prototype control and project NDAs."],
          [37, 40, "Finding: Wu handled PVT prototypes before signing the project-specific NDA."],
          [18, 57, "Owner: Wu."],
          [55, 57, "Due date."]
        ], "Remember Wu's missing NDA? Huang found it during a spot check of the DVT lab in the monitoring phase."],
        ["shot", "img/e1-35-aclose.jpg", "After the owner enters the corrective action, the auditor confirms closure", [
          [37, 12, "Confirm the corrective action is effective and close the finding."],
          [90, 72, "Each open finding shows its corrective action; the auditor clicks Confirm closure."]
        ]],
        ["tip", "audit", "Correction versus corrective action", "Signing the NDA is only a correction. Revising the entry checklist and re-checking everyone is the corrective action that prevents recurrence. The system requires a corrective action before closure, confirmed by an auditor or security role, never by the owner."],
        ["shot", "img/e1-36-verify.jpg", "③ Requirements › Auditor verifies item by item", [
          [93, 56, "Completed and verified: one of fifty-two."],
          [82, 96, "Implemented, waiting for verification."],
          [96, 95, "The auditor or security manager clicks verify; the implementer never sees this button."]
        ]]
      ]
    },
    {
      h: "Step 14: Closure",
      b: [
        ["shot", "img/e1-39-phase5.jpg", "Phase controls › Closure", [
          [86, 30, "Phase five: Closure."],
          [30, 58, "Closure items: acceptance and handover, closure report, archiving, mass production transfer and more."],
          [30, 85, "Outsourcing item: the manufacturer returns or destroys confidential data with a certificate; security item: data return or destruction and access revocation."]
        ]],
        ["p", "System-judged closure conditions: <b>all requirements implemented and verified, risks treated or accepted, all findings closed</b>, and every task complete."],
        ["shot", "img/e1-40-close-gm.jpg", "Lin approves the closure review", [
          [40, 26, "Banner: the Closure gate review is waiting for approval."],
          [8, 64, "Approve, and the project is formally closed."],
          [20, 77, "All four earlier phases passed with every item complete."]
        ]],
        ["shot", "img/e1-41-closed.jpg", "The closed R&D project", [
          [5, 15, "Status: closed."],
          [50, 26, "All five phases complete."],
          [25, 50, "Schedule performance SPI 1.11, slightly ahead."],
          [35, 90, "Actual start and end dates recorded automatically."]
        ]],
        ["shot", "img/e1-42-cost.jpg", "Cost › Earned value", [
          [10, 48, "Budget BAC."],
          [30, 48, "Actual cost AC: labor plus expenses."],
          [68, 48, "Cost performance CPI."],
          [25, 75, "Labor cost computed from hours and rates."],
          [75, 72, "Actual cost by month."]
        ]],
        ["R", "Every step from request to closure is on record. The auditor must be happy!"],
        ["A", "The auditor is happy, and so is the project manager: no more late nights rebuilding documents the week before an audit."],
        ["check", "Wu has entered a corrective action for the minor nonconformity found in Monitoring. Who can now confirm closure?", ["Wu himself", "Project manager Wang", "An auditor or security manager with audit rights", "Any project member"], 2, "Findings are closed only after an auditor or security role confirms the corrective action is effective; the owner and project manager can only enter or add to the corrective action."]
      ]
    }
  ]
});

window.COURSE.push({
  id: "o5",
  part: "Part 3 · System Operation",
  title: "Case 2: IT Project (System Implementation with Vendors)",
  sub: "E-Signature and Document Management System (EDMS)",
  mins: 10,
  sections: [
    {
      h: "Background and what's different",
      b: [
        ["table", ["Item", "Details"], [
          ["Project", "E-Signature and Document Management System (EDMS)"],
          ["Nature / category", "Internal project / IT project (system development)"],
          ["Outsourcing", "Procurement & implementation (vendor customization) + maintenance contract (annual support)"],
          ["Special needs", "Company-wide approval documents and employee PII; AI document summaries"],
          ["Team", "Zheng (project manager), Zhou (project security contact), Li, Wu"]
        ]],
        ["A", "The second case is an IT project. Compared with R&D, <b>the risk comes mainly from vendors, personal data and AI</b> rather than from a product. Let's focus on the different control items the system brings in."],
        ["shot", "img/e2-01-new.jpg", "New project: two outsourcing types ticked", [
          [40, 10, "Description: buy an EDMS customized by the vendor, integrate single sign-on, HR and ERP, and add AI summaries."],
          [2, 49, "Procurement and implementation is ticked."],
          [2, 64, "Maintenance contract is ticked."]
        ]]
      ]
    },
    {
      h: "IT-specific control items",
      b: [
        ["shot", "img/e2-02-phase1.jpg", "Phase controls › Initiation", [
          [37, 17, "Tags show both outsourcing types and the system development subtype."],
          [40, 74, "IT item: initial identification of security and privacy requirements."],
          [40, 77, "Procurement item: requirements and vendor selection, including security capability assessment."],
          [40, 80, "Maintenance contract item: contract and SLA, including security and confidentiality clauses."]
        ]],
        ["table", ["Phase", "Typical items for IT (system development) projects"], [
          ["Planning", "Requirements spec incl. security, architecture and security design review, test plan incl. security tests, PIA/DPIA, SSDLC"],
          ["Execution", "Separate dev/test/production, code review and source scanning, de-identified test data, third-party components and SBOM, UAT"],
          ["Monitoring & Control", "Vulnerability scanning and penetration testing with fix tracking, go-live security checklist, vendor SLA monitoring"],
          ["Closure", "Go-live handover, account review and removal of test accounts, backup and continuity checks, revoking vendor accounts and access"]
        ]]
      ]
    },
    {
      h: "Assessment, risks and requirements",
      b: [
        ["p", "Zhou completes the criticality assessment: confidentiality, integrity, availability, personal data, legal, AI and outsourcing all score 3 → <b>level three, high, with medium-level controls</b>. A risk assessment is required here too."],
        ["shot", "img/e2-04-risks.jpg", "② Risk assessment › IT project risks", [
          [12, 12, "Real PII in the test environment: score twelve, very high."],
          [62, 12, "Treatment: masked data only for migration tests."],
          [12, 51, "AI summaries send sensitive content to an external service."],
          [12, 90, "Maintenance vendor remote access compromised."],
          [55, 90, "A score of six can stay as it is, with monitoring."]
        ]],
        ["shot", "img/e2-05-reqs.jpg", "③ Requirements › Medium-level controls", [
          [96, 1, "Medium-level controls: 39 items including privacy, AI and supplier requirements."],
          [20, 19, "Add requirements from the latest assessment."],
          [10, 29, "Starting with 11 general controls."]
        ]],
        ["tip", "consult", "The key to vendor implementation projects", "SP-05, “supplier system access uses individual accounts, least privilege, time-limited activation and logging”, is the most audited item in IT projects. Here the evidence is time-limited PAM access, individual vendor accounts and full session recording, and the grant records were actually sampled during monitoring."]
      ]
    },
    {
      h: "Execution, audit and closure",
      b: [
        ["shot", "img/e2-07-gantt.jpg", "Tasks › Gantt chart", [
          [30, 60, "Requirements, vendor selection, customization and AI impact assessment are done."],
          [70, 73, "Code scanning, vulnerability scanning and UAT are under way."],
          [83, 70, "Today."]
        ]],
        ["shot", "img/e2-08-audits.jpg", "Supervision & audits › Test data de-identification check", [
          [12, 75, "Minor nonconformity: one HR table in UAT had unmasked national ID numbers."],
          [12, 92, "Corrective action: re-mask, auto-detect ID fields in the script, and check the whole UAT database."],
          [97, 73, "The auditor confirms closure."]
        ]],
        ["shot", "img/e2-10-phase5.jpg", "Phase controls › Required items at Closure", [
          [30, 75, "Account review and removal of test accounts."],
          [30, 78, "Outsourcing: revoke vendor accounts and access, and hand over at contract end."],
          [30, 84, "Security: return or destroy project data and revoke access."]
        ]],
        ["shot", "img/e2-11-closed.jpg", "The closed IT project", [
          [4, 16, "Closed."],
          [25, 49, "Schedule performance SPI 1.20."],
          [43, 49, "Cost performance CPI 1.48."]
        ]],
        ["check", "An IT project ticks procurement and maintenance contract, and its criticality is “medium”. What is correct?", ["No security requirements are needed", "Security requirements (general controls plus supplier SP items) must still be set and implemented to pass the gates", "High-level controls are required", "The system rejects the project request"], 1, "With any outsourcing (or for external and client projects), security requirements must be set and implemented even at normal or medium criticality. A risk assessment is mandatory only for high and very high."]
      ]
    }
  ]
});

window.COURSE.push({
  id: "o6",
  part: "Part 3 · System Operation",
  title: "Case 3: A General Project Without Risk Assessment",
  sub: "Procure-to-Pay (P2P) process reengineering",
  mins: 9,
  sections: [
    {
      h: "Background",
      b: [
        ["table", ["Item", "Details"], [
          ["Project", "Procure-to-Pay (P2P) Process Reengineering"],
          ["Nature / category", "Internal project / Process reengineering"],
          ["Outsourcing", "None"],
          ["Objectives", "Cut requisition-to-payment time from 21 to 12 days; reduce approval levels from 5 to 3"],
          ["Team", "Liu (project manager), Zheng (member), Wu (observer)"]
        ]],
        ["R", "No outsourcing, not R&D, not IT. Does security not matter here at all?"],
        ["A", "It's not that security doesn't matter; <b>risk decides how much to manage</b>. The system doesn't make it mandatory, but the project manager can still assess criticality voluntarily. Let's see the result."],
        ["shot", "img/e3-01-new.jpg", "New project: no outsourcing", [
          [40, 52, "Description: map the current requisition, purchasing, receiving, invoicing and payment process, and redesign approval authority."],
          [2, 80, "The voluntary security management box is not ticked."],
          [2, 93, "No outsourcing types are ticked."]
        ]]
      ]
    },
    {
      h: "A checklist without security items",
      b: [
        ["shot", "img/e3-03-overview.jpg", "Project overview after approval", [
          [25, 17, "Tags: internal project and process reengineering, with no security criticality tag."],
          [55, 64, "Outsourcing: none."],
          [8, 64, "Automatic project number; the category code is five."]
        ]],
        ["shot", "img/e3-04-phase1.jpg", "Phase controls › Initiation", [
          [30, 45, "Seven required items."],
          [35, 56, "Only common, internal and reengineering items, such as defining the problem and goals and confirming the As-Is scope."]
        ]],
        ["shot", "img/e3-05-sec-optional.jpg", "Project security › Voluntary opt-in notice", [
          [50, 59, "Notice: security management isn't mandatory for this category; completing the assessment counts as opting in and adds security control items."]
        ]]
      ]
    },
    {
      h: "Voluntary assessment: “medium”, so no risk assessment",
      b: [
        ["shot", "img/e3-06-imp-result.jpg", "① Criticality result", [
          [85, 58, "Result: medium, no additional controls, basic management only."],
          [38, 76, "Confidentiality two: internal restricted information."]
        ], "Liu completes the nine dimensions: confidentiality, integrity, availability, personal data and legal at two, the rest at one."],
        ["shot", "img/e3-07-risks-na.jpg", "② Risk assessment", [
          [50, 62, "Notice: criticality is medium, so no formal risk assessment is needed; risks can still be recorded voluntarily."],
          [93, 57, "Status: not started, which does not block any gate."]
        ]],
        ["shot", "img/e3-08-phase1-auto-sec.jpg", "Security items added after opting in", [
          [30, 49, "Criticality assessment complete: system-judged and ticked."],
          [30, 54, "Members' NDA and security briefing becomes a required item after opting in."],
          [30, 73, "Later items such as risk assessment, requirements, the register and audits are judged not applicable for a medium project."]
        ]],
        ["tip", "key", "Risk-based, not one size fits all", "In the same system, the R&D project has 52 requirements, the IT project 39, and the reengineering project, after assessment, only basic management. <b>Effort goes where the risk is.</b> That is the risk-based spirit of ISO 27001, and it keeps security from feeling like a burden on ordinary projects."]
      ]
    },
    {
      h: "From execution to closure",
      b: [
        ["shot", "img/e3-09-tasks.jpg", "Tasks › List", [
          [22, 60, "Each task shows its phase."],
          [42, 93, "Process measurement is overdue, shown in red."],
          [61, 90, "Fifty percent complete."]
        ]],
        ["shot", "img/e3-10-task-detail.jpg", "Task details: report progress and log hours", [
          [20, 40, "The owner reports status, for example in progress."],
          [40, 40, "Drag to set percent complete."],
          [20, 62, "Log hours by date, used for labor cost and hour efficiency."],
          [10, 90, "Comments: talk with the project manager, kept with the task."]
        ]],
        ["shot", "img/e3-11-close-gm.jpg", "Closure review", [
          [40, 22, "The Closure gate review is waiting for approval."],
          [8, 62, "Lin approves the closure."]
        ]],
        ["shot", "img/e3-12-closed.jpg", "The closed reengineering project", [
          [5, 15, "Closed."],
          [60, 15, "Security criticality: medium."],
          [50, 22, "All five phases complete."]
        ]],
        ["check", "The reengineering project voluntarily completes the criticality assessment with a result of “medium”. What happens next?", ["A risk assessment approved by the security manager is required", "Medium-level controls must be applied", "The flow ends after the assessment; no formal risk assessment is needed, though risks can be recorded or general controls applied voluntarily", "An audit is required before closure"], 2, "At normal or medium the flow ends after the assessment; the system judges the risk assessment, requirements, document register and audit items as not applicable. With outsourcing, or for external and client projects, security requirements would still be required."]
      ]
    }
  ]
});

window.COURSE.push({
  id: "outro",
  part: "Wrap-up",
  title: "Wrap-up: Making Security Part of the Project",
  sub: "Key takeaways, next steps and the final quiz",
  mins: 4,
  sections: [
    {
      h: "Key takeaways",
      b: [
        ["list", [
          "<b>Built on an ISMS</b>: nature, category and outsourcing decide the checklist; the nine-dimension assessment decides the control level.",
          "<b>Phase gates</b>: open system-judged security items block the next gate; changes with security impact force reassessment.",
          "<b>Many standards in one place</b>: requirements of ISO 27001, TISAX, ISO 27701, ISO 42001, IEC 62443 and ISO/SAE 21434 arrive automatically based on scores and project conditions.",
          "<b>Audit evidence</b>: implementation evidence, verifiers, approvals, findings and the audit trail form a complete chain.",
          "<b>Risk-based</b>: 52 requirements for the R&D project, 39 for the IT project, basic management for the reengineering project."
        ]],
        ["R", "Allan, any final words for everyone?"],
        ["A", "Implementing an ISMS isn't about passing audits; it's about letting the auditor see that you already do things well. <b>Project management is the same: build security into everyday work, and the evidence will be there.</b>"],
        ["p", "Want to try it? Open the live system at <a href=\"https://pms.medsigtw.com/\" target=\"_blank\" rel=\"noopener\">pms.medsigtw.com</a>, click “Visit request” on the sign-in page, and once you receive a guest account you can browse the Demo Company data used in this course. System development: <a href=\"https://www.medsigtw.com/\" target=\"_blank\" rel=\"noopener\">www.medsigtw.com</a>. Support: isms@medsigtw.com."],
        ["R", "Next up is the final quiz! Pass it and you can download a certificate signed by Allan! Bye-bye!"]
      ]
    }
  ]
});
