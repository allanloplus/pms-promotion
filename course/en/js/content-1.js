/* Course content (English, file 1): Introduction and Part 1 System Features
 * Block formats are the same as the Chinese version (see ../../js/content-1.js).
 */
window.COURSE = window.COURSE || [];

window.COURSE.push({
  id: "intro",
  part: "Introduction",
  title: "Course Tour: Meet Medsig",
  sub: "Your instructor, your assistant, and the three parts of this course",
  mins: 6,
  sections: [
    {
      h: "Welcome to the Medsig course",
      b: [
        ["R", "Hi there! I'm Arale, your AI assistant! Today Allan and I will show you a very different kind of project management system!"],
        ["A", "Hello everyone, I'm Allan. I help companies implement ISMS and PIMS, and I also work as an auditor for a certification body. What I see most often is this: <b>the security documents are complete, but once projects get busy, security is left on the sidelines</b>."],
        ["R", "So what makes Medsig different from an ordinary project management system?"],
        ["A", "In one sentence: <b>it is a project management system built on an ISMS</b>. The moment a project is approved, the system places security requirements into its five phases based on the project's nature and category. If they are not done, the project cannot pass its phase gate. Today we'll see how it works, step by step, on real system screens."],
        ["p", "This course uses the live <b>Medsig ISMS-Based Project Security Management System</b>. All screens come from the system's demo environment (Demo Company); names and data are fictitious."]
      ]
    },
    {
      h: "Your instructor and assistant",
      b: [
        ["table", ["Area", "Experience"], [
          ["ISMS / PIMS consulting", "ISO 27001 and ISO 27701 implementation for private companies, government agencies and healthcare"],
          ["Certification audits", "Auditor for a certification body; knows how auditors sample and look for evidence"],
          ["Automotive and semiconductors", "VDA TISAX compliance consulting; ISO 27001 and SEMI E187 for semiconductor equipment makers"],
          ["Corporate IT management", "Former IT and security manager who has led large IT projects"],
          ["Teaching", "Instructor in a government cybersecurity talent program"]
        ]],
        ["R", "I'm Arale! I'll ask the questions you might be thinking of, and I'll run the quick checks. Wrong answers are fine. Right answers get confetti!"],
        ["A", "I'll speak in two roles: as a <b>consultant</b>, I'll show how to set things up and use them; as an <b>auditor</b>, I'll show how certification audits sample projects and what evidence they look at."]
      ]
    },
    {
      h: "Course structure and how to study",
      b: [
        ["table", ["Part", "Content", "Units"], [
          ["Part 1", "System features: why it differs from a traditional PMS, and how it supports management and auditing in practice, shown on system screens", "4 units"],
          ["Part 2", "Compliance mapping: how ISO 27001, TISAX, ISO 27701, ISO 42001, IEC 62443 and ISO/SAE 21434 are put into practice in the system, with audit evidence", "5 units"],
          ["Part 3", "System operation: an R&D project and an IT project (both with risk assessment) and a process reengineering project (no risk assessment), from creation to closure", "6 units"]
        ]],
        ["list", [
          "<b>Interactive version</b>: jump to any unit; red numbers on each system screen match the notes below it; click a screen to enlarge it.",
          "<b>Video version</b>: narrated by Allan and Arale; system screens zoom in to the point being explained.",
          "Each unit has <b>quick checks</b>. When you finish, take the <b>final quiz</b>; pass it to download a <b>certificate</b> signed by the instructor."
        ]],
        ["tip", "key", "Three keywords for this course", "<b>Security built into projects</b> (requirements arrive automatically based on the project's nature), <b>phase gates</b> (no gate approval until required items are done), and <b>audit evidence</b> (who did it, who verified it, who approved it, all on record)."],
        ["R", "Got it! Let's go!"]
      ]
    }
  ]
});

window.COURSE.push({
  id: "f1",
  part: "Part 1 · System Features",
  title: "A Different PMS: Built on an ISMS",
  sub: "Why project management and the ISMS so often run on parallel tracks",
  mins: 9,
  sections: [
    {
      h: "The blind spot of a traditional PMS",
      b: [
        ["R", "Isn't a project management system just Gantt charts, progress bars and cost tables?"],
        ["A", "A traditional PMS is very good at the iron triangle of <b>scope, schedule and cost</b>. The problem is that security usually lives in a separate set of ISMS documents: procedures sit in the document system, projects run in the PMS, and the two never connect."],
        ["A", "Here is what I see most often in audits: the project is closed but the risk assessment was never done; the vendor got the design drawings two months before anyone signed the NDA; the system architecture changed completely and nobody reassessed the security impact."],
        ["R", "Oh no, those are exactly the findings auditors love to write up!"],
        ["table", ["Aspect", "Traditional PMS", "Medsig (ISMS-based)"], [
          ["Project approval", "Enter basic data, assign a project manager", "Five-phase control checklist generated automatically from nature, category, subtype and outsourcing type, including security items"],
          ["Security requirements", "Separate ISMS documents; relies on memory", "Nine-dimension criticality assessment, then risk assessment, then security requirements applied automatically"],
          ["Phase progress", "The project manager updates the status", "Required items must be done before a phase gate can be requested; management approves the gate"],
          ["Changes", "Just update the plan", "Changes are assessed for security impact; if security is affected, reassessment is required and the next gate is locked until done"],
          ["Audit evidence", "Documents assembled right before the audit", "Implementation evidence, verifiers, audit findings and the audit trail are recorded throughout"],
          ["Segregation of duties", "Rarely designed in", "Risk assessments approved by the security manager; implementers cannot verify their own items; owners cannot close their own findings"]
        ]],
        ["tip", "key", "Core idea: turning A.5.8 into a system", "ISO/IEC 27001:2022 Annex A.5.8, Information security in project management, requires <b>information security to be integrated into project management</b>. Medsig is not a security module bolted onto a PMS; every project carries its security requirements from the day it is approved."]
      ]
    },
    {
      h: "The project security flow at a glance",
      b: [
        ["shot", "img/g-07-guide-flow.jpg", "Methods & Guide › Project security flow", [
          [9, 42, "Start from the project's basic data, nature and category."],
          [30, 42, "Security criticality assessment: nine dimensions, one to four points each; the highest score sets the level."],
          [40, 42, "High or very high criticality requires a project security risk assessment approved by the security manager."],
          [50, 42, "Security requirements are applied automatically according to the control level."],
          [60, 42, "Requirements are management, technical or physical controls, each implemented and verified."],
          [72, 42, "Project documents are classified as public, internal, confidential or strictly confidential."],
          [25, 73, "During execution: change management and continuous risk assessment."],
          [70, 73, "During monitoring: project security supervision and audits, with findings tracked to closure."]
        ], "This is the built-in Methods and Guide page, which draws the whole project security flow as one diagram."],
        ["A", "Note the hint in the middle: for <b>normal or medium</b> criticality, the flow ends after the assessment and you may voluntarily apply general controls. For <b>high or very high</b>, the risk assessment must be approved by the security manager before the project can move from Planning to Execution."],
        ["R", "So not every project has to do the heaviest version. It depends on criticality!"],
        ["A", "Exactly. That's what risk-based means. Buying a copier and developing an automotive chip should not carry the same security requirements."]
      ]
    },
    {
      h: "Security built into every project",
      b: [
        ["shot", "img/e1-25b-overview-exec.jpg", "Project overview › Project security progress", [
          [12, 82, "Every project's overview page has a row called project security progress."],
          [8, 88, "First box: nature and category, for example internal project and product development project."],
          [23, 88, "Second box: the criticality result, here level four, very high."],
          [38, 88, "Third box: the risk assessment is approved."],
          [53, 88, "Fourth box: high-level controls; amber means still being implemented."],
          [85, 88, "Sixth box: supervision and audit not yet done, reminding the project manager to schedule it."]
        ], "Let's look at the overview page of an R&D project."],
        ["A", "When project managers open a project each day, they see more than progress and cost: these six boxes show how far security has come. Green means done, amber means in progress."],
        ["tip", "audit", "The three things auditors care about most", "<b>Was it done</b> (the record exists), <b>when was it done</b> (in the right phase), and <b>who did it and who checked it</b> (segregation of duties). The system is designed so that every project records all three automatically."],
        ["check", "What is the most fundamental difference between Medsig and a traditional PMS?", ["It provides Gantt charts and Kanban boards", "It is built on an ISMS: security requirements are embedded in the five project phases and linked to phase gates", "It can export CSV reports", "It supports a multilingual interface"], 1, "Gantt charts, reports and multiple languages exist in ordinary PMS tools too. The core of this system is turning ISO 27001 A.5.8 into a mechanism: security requirements follow from the project's nature, and incomplete items block the phase gate."]
      ]
    }
  ]
});

window.COURSE.push({
  id: "f2",
  part: "Part 1 · System Features",
  title: "Project Nature, Categories and Five-Phase Controls",
  sub: "Two choices at approval decide what a project must control",
  mins: 9,
  sections: [
    {
      h: "Two dimensions plus outsourcing types",
      b: [
        ["A", "When requesting a new project you must choose a <b>project nature</b> and a <b>project category</b>, and you may tick any number of <b>outsourcing types</b>. These three choices decide which control items the system generates."],
        ["table", ["Dimension", "Options", "Security management mandatory?"], [
          ["Project nature", "Internal / External / Client project", "Mandatory for external and client projects"],
          ["Project category", "Strategy, capital investment, product development, IT, process reengineering, facility renovation, problem solving, operations (8 categories)", "Mandatory for product development and IT projects"],
          ["Subtype", "Product development has 6 (e.g. OEM, ODM, in-house R&D); IT has 4 (consulting/training, system development, operations, cloud services)", "Adds subtype-specific control items"],
          ["Outsourcing type", "Procurement & implementation, confidential data exchange, maintenance contract, other outsourcing (multiple choice)", "Mandatory if any is ticked"]
        ]],
        ["shot", "img/g-07-guide-flow-nature.jpg", "Methods & Guide › Project nature and outsourcing types", [
          [10, 35, "External project: marked as mandatory security management; the focus is contracts, interfaces and RACI responsibilities."],
          [10, 61, "Client project: also mandatory, and brings in the security requirements of the client contract."],
          [15, 87, "Outsourcing types: any project nature can tick one or more."],
          [50, 89, "Ticking any one of them triggers the supplier requirements of ISO 27001 A.5.19 to A.5.22 and VDA ISA 6.1."]
        ]],
        ["R", "So an internal project can still require security management?"],
        ["A", "Yes! Take an internal ERP rollout: if a vendor implements it and can touch your data, you must manage that supplier. The system looks at where the risk comes from, not who started the project."]
      ]
    },
    {
      h: "Five-phase control checklists generated automatically",
      b: [
        ["p", "Every project goes through five phases: <b>Initiation, Planning, Execution, Monitoring & Control, and Closure</b>. At approval, the system assembles a checklist unique to the project from these sources:"],
        ["list", [
          "<b>Common items</b> for every project, such as the charter, WBS, schedule, budget and closure report.",
          "<b>Nature items</b>, such as a billing mechanism for client change requests and the client's final acceptance sign-off.",
          "<b>Category and subtype items</b>, such as design verification testing for product development, or control of client drawings for OEM projects.",
          "<b>Outsourcing items</b>, such as “confidential data may be provided only after the vendor signs an NDA”.",
          "<b>Security control items</b>, added only for projects where security management is mandatory or voluntary; some are judged automatically from actual records."
        ]],
        ["shot", "img/g-07-guide-phases.jpg", "Methods & Guide › Five-phase control contents", [
          [50, 30, "The checklist combines common, nature, category, subtype, outsourcing and security items."],
          [25, 37, "Choose a category, subtype, nature and outsourcing type to preview the checklist."],
          [47, 57, "Items marked required must be completed, or justified as not applicable, before a gate review."],
          [62, 93, "Items tagged security are security controls; system-judged items are ticked automatically from real data."]
        ]],
        ["tip", "consult", "The first thing to do when implementing", "Have the PMO and the security officer review the five-phase contents of each category together. A system administrator can edit or add items, or restore the defaults, under System Admin › Project categories and phase controls, so the system matches your existing project procedures."]
      ]
    },
    {
      h: "System-judged items and phase gates",
      b: [
        ["shot", "img/e1-09-phase1-sec.jpg", "Phase controls › Security items in Initiation", [
          [30, 59, "Because confidential data exchange was ticked, the item “provide confidential data only after an NDA” is added automatically."],
          [30, 65, "Complete the project security criticality assessment: system-judged, ticked automatically once done, and cannot be ticked by hand."],
          [30, 70, "Members sign NDAs and receive a security briefing: a required security item."]
        ], "This is the lower part of the Initiation checklist of an R&D project."],
        ["R", "If system-judged items can't be ticked by hand, nobody can just tick them first and do the work later!"],
        ["A", "That's the point. The system checks the actual data: whether the assessment exists, whether the risk assessment was approved, whether there is an audit record. <b>No record, no tick</b>."],
        ["table", ["Phase", "System-judged security controls (the gate cannot pass until they are done)"], [
          ["Initiation", "Project security criticality assessment completed"],
          ["Planning", "For high or very high criticality, risk assessment approved by the security manager; security requirements set; document register created and classified"],
          ["Execution", "All change requests reviewed and assessed for security impact"],
          ["Monitoring & Control", "At least one project security supervision or audit performed"],
          ["Closure", "All security requirements implemented and verified; risks treated or formally accepted; all audit findings closed"]
        ]],
        ["shot", "img/e1-30-reassess.jpg", "Phase controls › After a change with security impact", [
          [50, 25, "A banner appears: an approved change affects security, so criticality and risk must be reassessed."],
          [50, 88, "The same item appears in the gate checklist; no gate review can be requested until it is done."]
        ], "Now look at a project in execution, right after a change with security impact was approved."],
        ["tip", "audit", "The auditor's view", "I used to compare dates document by document to find out whether data was shared before the NDA was signed. In this system <b>phase gates cannot be skipped</b>, so the audit can move from “was it done?” to “was it done well?”: is the risk assessment reasonable, and is the evidence sufficient?"],
        ["check", "Which of these projects is NOT required by the system to apply project security management?", ["An internal product development project", "An internal facility renovation project with a maintenance contract ticked", "An internal process reengineering project with no outsourcing", "A client project"], 2, "Security management is mandatory for product development or IT projects, external or client projects, and projects with any outsourcing type. An internal reengineering project without outsourcing is not mandatory but can opt in."]
      ]
    }
  ]
});

window.COURSE.push({
  id: "f3",
  part: "Part 1 · System Features",
  title: "Project Security: Assessment, Requirements and Audits",
  sub: "Criticality, risk assessment, security requirements, document classification, changes and audits",
  mins: 12,
  sections: [
    {
      h: "Criticality assessment: nine dimensions, highest score wins",
      b: [
        ["A", "The first step in project security is deciding how critical the project is. The system uses nine dimensions, each scored one to four, and <b>takes the highest score</b> as the project's security criticality. We call this the high-water mark method."],
        ["shot", "img/g-07-guide-risk.jpg", "Methods & Guide › Criticality assessment dimensions", [
          [30, 33, "Level 1 normal, 2 medium, 3 high, 4 very high. Level 3 applies medium-level controls, level 4 high-level controls."],
          [8, 46, "Confidentiality maps to ISO 27001 A.5.12, classification of information."],
          [7, 92, "The personal data dimension maps to ISO 27701."]
        ]],
        ["table", ["Dimension", "Standard", "What a score of 4 means"], [
          ["Confidentiality", "ISO 27001 A.5.12", "Strictly confidential: prototypes, trade secrets, core technology"],
          ["Integrity", "ISO 27001 A.5.8", "Endangers safety, breaks the law or causes major financial loss"],
          ["Availability", "ISO 27001 A.5.30", "Must be restored within 4 hours"],
          ["Personal data", "ISO 27701", "Large volumes of sensitive PII or cross-border transfer"],
          ["Client and contract requirements", "TISAX (VDA ISA)", "TISAX very high protection needs / prototype protection"],
          ["Legal compliance", "ISO 27001 A.5.31", "Violation brings major fines, criminal liability or shutdown"],
          ["Product / system cybersecurity", "IEC 62443, ISO/SAE 21434", "Affects human safety (automotive, medical, critical infrastructure)"],
          ["AI use", "ISO 42001", "High-risk AI affecting people's rights or safety"],
          ["Outsourcing and third parties", "ISO 27001 A.5.19 to A.5.22", "Core development or operations outsourced, or a multi-tier supply chain"]
        ]],
        ["shot", "img/e1-11-imp-result.jpg", "Project security › ① Criticality result", [
          [80, 60, "Result: very high, so high-level controls apply automatically."],
          [40, 66, "The assessor and time are recorded, with a note on how levels 1–2 and 3–4 differ."],
          [84, 81, "High-water mark: confidentiality scored four, so the whole project is level four."]
        ]],
        ["R", "One dimension at four makes the whole project very high? Isn't that too strict?"],
        ["A", "That's intentional. It only takes one failure: if the design drawings leak once, it doesn't matter that every other dimension scored one. The damage can't be undone."]
      ]
    },
    {
      h: "Project security risk assessment",
      b: [
        ["p", "Projects with high or very high criticality need a risk assessment. <b>Risk score = impact (the highest of C, I and A) × likelihood</b>, ranging from 1 to 16."],
        ["table", ["Risk level", "Score", "Rule"], [
          ["Low", "1–3", "Acceptable; keep existing controls and monitor"],
          ["Medium", "4–6", "Generally acceptable; the project manager decides whether to strengthen controls"],
          ["High", "8–9", "Not acceptable; a treatment plan with owner and due date is required"],
          ["Very high", "12–16", "Not acceptable; treat immediately; residual risk must be formally accepted"]
        ]],
        ["shot", "img/e1-14-risks.jpg", "Project security › ② Risk assessment", [
          [70, 20, "Risk matrix: impact on the vertical axis, likelihood on the horizontal; the big number is the count of risks."],
          [10, 16, "Add risks one by one, or import common scenarios from the threat library."],
          [80, 2, "Status: submitted, waiting for the security manager's approval."],
          [60, 62, "Risks scoring above six must have a treatment, plan, owner and due date before submission."]
        ]],
        ["list", [
          "<b>Threat library</b>: common scenarios for general, product development and IT projects, such as vendor leaks, firmware vulnerabilities, key leaks and real PII in test environments.",
          "<b>Treatment options</b>: reduce, avoid, transfer, or accept (with approval).",
          "<b>Residual risk</b>: reassessed after treatment; if still above the acceptable level, the security manager must approve acceptance with a reason.",
          "<b>Resubmission</b>: once approved, adding a risk or changing an inherent score sends the assessment back to draft for re-approval."
        ]],
        ["tip", "ng", "Common pitfall", "The risk assessment is done once and then forgotten, even when the project switches suppliers halfway through. The system prevents this twice over: any change after approval forces resubmission, and any change with security impact forces reassessment."]
      ]
    },
    {
      h: "Security requirements and document classification",
      b: [
        ["table", ["Control level", "Applies to", "Contents (cumulative)"], [
          ["General", "Optional for levels 1–2; required for outsourced or client projects", "11 items: NDA, roles, asset register, change assessment, incident reporting, access authorization, personal accounts, antivirus and patching, backups, clear desk, media disposal"],
          ["Medium", "Criticality “high”", "Up to 13 more: risk assessment, supplier assessment, access reviews, supervision and audit, encryption, MFA, logging, environment separation, secure development, physical access, and more"],
          ["High", "Criticality “very high”", "Up to 12 more: background checks, need-to-know, DLP, privileged accounts, penetration testing, dedicated secure area, prototype protection, and more"]
        ]],
        ["p", "On top of the cumulative levels, the system <b>adds dedicated requirements</b> based on the project's conditions:"],
        ["shot", "img/e1-17-reqs-sp.jpg", "Project security › ③ Requirements › Dedicated requirements", [
          [4, 5, "AI series: AI dimension at two or more brings in ISO 42001 requirements."],
          [4, 13, "PI series: personal data dimension at two or more brings in ISO 27701 requirements."],
          [4, 33, "PS series: product cybersecurity at three or more brings in ISO/SAE 21434 and IEC 62443 requirements."],
          [4, 74, "SP series: any outsourcing type brings in supplier security requirements."]
        ]],
        ["table", ["Code", "Trigger", "Content"], [
          ["SP-01 to 07", "Any outsourcing", "Supplier assessment, contract security clauses, NDA first, encrypted transfer, access control, regular monitoring, return or destruction at termination"],
          ["CU-01 to 06", "Client projects", "Register client requirements, inventory client assets, incident contacts, consent for subcontracting, return or destruction, keep evidence"],
          ["PI-01 to 04", "Personal data 2+ (PI-04 needs 3)", "PII inventory and lawful basis, minimization and de-identification, processor contracts, PIA/DPIA"],
          ["AI-01 to 04", "AI use 2+ (AI-02 to 04 need 3)", "AI usage policy, AI system impact assessment, training data management, human review and disclosure"],
          ["PS-01 to 06", "Product cybersecurity 3+ (PS-06 needs 4)", "TARA, secure design and testing, SBOM and vulnerability management, secure updates and key protection, supplier CIA, cybersecurity case"]
        ]],
        ["table", ["Document class", "Handling rules"], [
          ["Public", "May be published; release approved by the responsible manager"],
          ["Internal", "Internal use only; external sharing needs the project manager's consent"],
          ["Confidential", "Project members only; encrypted in transit and at rest; external sharing requires an NDA and approval; printing controlled"],
          ["Strictly confidential", "Need-to-know list only; no copying or removal; dedicated storage with access logs; destruction certified"]
        ]],
        ["tip", "consult", "The system registers documents, it does not store them", "The document register records name, class, custodian, location and retention. The documents themselves stay in the company's approved storage, so the system never becomes a concentration of sensitive data and does not duplicate document management."]
      ]
    },
    {
      h: "Change management and security audits",
      b: [
        ["p", "Changes to scope, schedule, cost, members, technology or suppliers must be requested in the system, and the requester marks <b>whether security is affected</b>. The project manager can correct that judgment during review."],
        ["list", [
          "Approved with security impact → the system flags “reassessment required” and notifies the project security officer and the security manager.",
          "The flag clears only after the criticality assessment and risk assessment are redone and approved; only then can the next gate be requested.",
          "The request, review comments and security-impact decision all stay in the change log."
        ]],
        ["shot", "img/e1-34-audits.jpg", "Project security › Supervision & audits", [
          [37, 74, "Result types: conforming, observation, minor nonconformity, major nonconformity."],
          [60, 74, "Nonconformities get a responsible owner and a due date."],
          [77, 74, "The owner enters the corrective action; an auditor or security role must confirm before closure."],
          [37, 92, "Conforming checks are recorded too, showing what scope was checked."]
        ]],
        ["R", "The person fixing the problem can't close it themselves. Like not grading your own exam!"],
        ["A", "Great analogy. That's segregation of duties. In unit four we'll summarize every segregation-of-duties rule in the system."],
        ["check", "A project scores 4 on confidentiality and 1 or 2 on every other dimension. Using the high-water mark, what are its criticality and control level?", ["Medium; general controls", "High; medium-level controls", "Very high; high-level controls", "Decided by the average score"], 2, "The highest of the nine dimensions sets the level: a 4 means very high, which applies high-level controls (general plus medium plus high) and requires a risk assessment."]
      ]
    }
  ]
});

window.COURSE.push({
  id: "f4",
  part: "Part 1 · System Features",
  title: "Management and Audit in Practice: Dashboards, Reports and Audit Trail",
  sub: "Management sees the big picture, project managers see their to-dos, auditors see the evidence",
  mins: 11,
  sections: [
    {
      h: "Dashboard: every project on one page",
      b: [
        ["shot", "img/g-02-dash.jpg", "Dashboard (management view)", [
          [8, 21, "Projects in progress, plus projects awaiting approval."],
          [32, 21, "Project status lights: red, amber and green, judged from progress and overdue work."],
          [70, 21, "Open high risks: untreated risks scoring eight or more."],
          [10, 34, "To-dos: project requests and gate reviews waiting for your approval."],
          [63, 64, "SPI schedule performance and CPI cost performance."],
          [96, 64, "Each project's security criticality and number of high risks."]
        ], "First, the dashboard that Lin, the general manager, sees after signing in."],
        ["shot", "img/g-02-dash-charts.jpg", "Dashboard › Distributions and risk matrix", [
          [15, 25, "Distribution by project nature and category."],
          [42, 25, "Which phase the active projects are in."],
          [40, 43, "Security criticality across all projects, including those not yet assessed."],
          [75, 25, "Heat map of all open risks across the company."]
        ]],
        ["A", "Management needs to know where the problems are. This page puts <b>progress, cost and security risk on one screen</b>, so management reviews no longer need separate reports from every department."]
      ]
    },
    {
      h: "My work and cost-efficiency analysis",
      b: [
        ["shot", "img/g-05-my-pm.jpg", "My work (project manager view)", [
          [10, 24, "To-dos, such as a change request waiting for review."],
          [10, 31, "Audit findings to fix also appear here, with the finding text."],
          [57, 52, "Overdue tasks show their due date in red."],
          [92, 52, "Report progress and hours directly from here."]
        ]],
        ["shot", "img/g-06-reports.jpg", "Cost & efficiency analysis", [
          [10, 22, "Budget at completion BAC, actual cost AC and earned value EV."],
          [65, 22, "Overall cost performance CPI; one or more means costs are under control."],
          [86, 42, "Estimate at completion EAC: forecast total cost based on current performance."],
          [95, 42, "Hour efficiency: estimated hours of completed work divided by actual hours."]
        ]],
        ["shot", "img/g-06-reports-people.jpg", "Cost & efficiency › People efficiency and workload", [
          [57, 15, "On-time completion rate."],
          [64, 15, "Tasks currently overdue."],
          [80, 15, "Hour efficiency."],
          [90, 15, "Remaining workload, for staffing decisions."]
        ]],
        ["tip", "consult", "Who can see cost data", "Cost data is visible only to the project manager, management, auditors and system administrators; hourly rates only to administrators. Labor cost = hours × the member's rate at the time of logging, so later pay changes never rewrite historical costs."]
      ]
    },
    {
      h: "Roles, permissions and segregation of duties",
      b: [
        ["table", ["System role", "Main permissions"], [
          ["System administrator", "Approve accounts, assign roles and hourly rates, system settings; full access"],
          ["Management / PMO", "See all projects and costs; approve project requests and phase gates"],
          ["Security manager (ISMS)", "See all projects; approve risk assessments and risk acceptance; security supervision"],
          ["Auditor", "Read-only access to all projects, costs and the audit trail; record findings; verify security requirements"],
          ["Member", "Sees only the projects they belong to"]
        ]],
        ["table", ["Project role", "Responsibilities"], [
          ["Project manager", "Planning, task assignment, member management, requesting gate reviews"],
          ["Project security contact", "Criticality assessment, risk assessment, security requirement tracking, document classification"],
          ["Project member", "Carry out and report assigned tasks; submit change requests"],
          ["Observer", "Read-only"]
        ]],
        ["list", [
          "Project requests and gate reviews are approved by <b>management</b>, not by the project manager.",
          "Risk assessments and risk acceptance are approved by the <b>security manager</b>.",
          "Security requirement verification: <b>nobody may verify an item they implemented</b>.",
          "Audit findings: the owner can only enter corrective actions; <b>an auditor or security role must confirm closure</b>.",
          "Removing a member from a project revokes their access immediately (least privilege)."
        ]],
        ["tip", "op", "Accounts and sign-in security", "There are no passwords: users sign in with a one-time code sent by e-mail. Idle and absolute session timeouts are configurable, and sign-ins, approvals and data changes are all written to the audit trail. If e-mail fails completely, a server-side emergency code procedure exists, and every use notifies the administrators."]
      ]
    },
    {
      h: "Audit trail and system maintenance",
      b: [
        ["shot", "img/g-09b-auditlog.jpg", "System admin › Audit trail (auditor view)", [
          [7, 30, "Time, to the minute."],
          [17, 30, "User, recorded by account e-mail, so actions are attributable."],
          [33, 30, "Action code, for example gate approve for a phase gate approval."],
          [70, 30, "Details: approval comments and status changes."],
          [92, 30, "Source IP address."]
        ]],
        ["shot", "img/g-08-admin-catalog.jpg", "System admin › Configurable rules", [
          [55, 20, "Project categories and phase controls: natures, categories and five-phase contents are editable."],
          [90, 20, "Risk assessment method: dimensions, levels and the threat library."],
          [60, 43, "Each project nature can be set as mandatory for security management or not."]
        ]],
        ["tip", "audit", "How I use these as an auditor", "I start from the dashboard and pick projects that are <b>high criticality, in execution, or just closed</b>, then read the project's log in time order, then sample two or three security requirements and check their evidence. No extra documents need to be prepared, which makes the on-site audit far more efficient."],
        ["check", "Requirement G-T04 “Back up project data regularly and verify restores” was implemented by Li. Who may NOT verify this item?", ["Auditor Huang", "Security manager Chen", "Li himself", "A project security contact with audit rights who did not implement it"], 2, "Segregation of duties: implementers cannot verify their own items, so the verification stays objective."]
      ]
    }
  ]
});
