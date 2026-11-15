/* 米數Medsig PMS Management Online Course主程式：路由、章節渲染、System screen標註、進度、課後測驗、證書 */
(function () {
  "use strict";

  var COURSE = window.COURSE;
  var QUIZ = window.QUIZ;
  var CH = window.Characters;
  var IMG = { A: CH.CHAR.A.pose, R: CH.CHAR.R.pose };
  function sayHTML(who, html, mood) {
    var m = mood || CH.mood(who, html);
    return '<div class="say ' + who + '"><div class="face"><img src="' + CH.face(who, m) + '" alt=""><b>' + CH.CHAR[who].short + '</b></div><div class="bubble" aria-label="' + CH.CHAR[who].name + '">' + html + "</div></div>";
  }
  var TIP = { consult: "Consultant's tip", audit: "Auditor's view", ng: "Common pitfall", key: "Key point", op: "How-to" };
  var CREDIT = "Course design / System development: Medsig";
  var COPYRIGHT = "Copyright © 2026 Allan Lo. All rights reserved.";
  var SIGNATURE = "../assets/signature.png";
  var COURSE_TITLE = "Medsig ISMS-Based Project Security Management System Online Course";
  var STORE = "medsig-pms-course-en-v1";
  var DRAW = QUIZ.draw || QUIZ.questions.length;

  var $main = document.getElementById("main");
  var $side = document.getElementById("side");

  /* ---------- 儲存（瀏覽器本機，失敗時不影響使用） ---------- */
  var state = { done: {}, passed: null };
  try {
    var saved = JSON.parse(localStorage.getItem(STORE) || "null");
    if (saved) state = Object.assign(state, saved);
  } catch (e) { /* fall back to defaults */ }
  function save() { try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) { } }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function el(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; }
  function chapterIndex(id) { for (var i = 0; i < COURSE.length; i++) if (COURSE[i].id === id) return i; return -1; }
  function totalMins() { return COURSE.reduce(function (s, c) { return s + c.mins; }, 0); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  /* ---------- 側欄與進度 ---------- */
  function renderSide(current) {
    var html = "", lastPart = "";
    COURSE.forEach(function (c, i) {
      if (c.part !== lastPart) {
        var pn = c.part.indexOf("Part 1") === 0 ? 1 : c.part.indexOf("Part 2") === 0 ? 2 : c.part.indexOf("Part 3") === 0 ? 3 : 0;
        html += pn ? '<h4><a class="part-link" href="#part' + pn + '" title="View this part&#39;s overview">' + esc(c.part) + ' <span>Overview ›</span></a></h4>' : "<h4>" + esc(c.part) + "</h4>";
        lastPart = c.part;
      }
      html += '<button class="nav-item' + (state.done[c.id] ? " done" : "") + '" data-go="c-' + c.id + '" aria-current="' + (current === c.id) + '">' +
        '<span class="dot">' + (state.done[c.id] ? "✓" : "") + "</span><span>" + esc(c.title) + "</span><small>" + c.mins + "′</small></button>";
    });
    html += '<button class="nav-item nav-quiz" data-go="quiz" aria-current="' + (current === "quiz") + '"><span class="dot">' + (state.passed ? "✓" : "?") + "</span><span>Final quiz & certificate</span><small>" + DRAW + " Qs</small></button>";
    $side.innerHTML = html;
    var n = Object.keys(state.done).filter(function (k) { return chapterIndex(k) >= 0; }).length;
    document.getElementById("progressText").textContent = n + " / " + COURSE.length + " units";
    document.getElementById("progressBar").style.width = (n / COURSE.length * 100) + "%";
  }

  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-go]");
    if (t) { e.preventDefault(); go(t.getAttribute("data-go")); }
  });
  var $menu = document.getElementById("menuBtn");
  $menu.addEventListener("click", function () {
    var open = document.body.classList.toggle("nav-open");
    $menu.setAttribute("aria-expanded", open);
  });

  function go(route) {
    document.body.classList.remove("nav-open");
    $menu.setAttribute("aria-expanded", "false");
    if (location.hash !== "#" + route) { location.hash = route; } else { route_(); }
  }
  function route_() {
    var h = (location.hash || "#home").slice(1);
    if (h.indexOf("c-") === 0 && chapterIndex(h.slice(2)) >= 0) renderChapter(h.slice(2));
    else if (h === "quiz") renderQuiz();
    else if (/^part[123]$/.test(h)) { renderHome(); var pc = document.getElementById(h); if (pc) { pc.classList.add("focus"); pc.scrollIntoView({ block: "start" }); } markPart(h.slice(4)); return; }
    else renderHome();
    markPart(null);
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route_);

  /* ---------- 首頁 ---------- */
  /* 首頁開頭：Three course parts與Before you start */
  var PARTS = [
    { key: "Part 1", name: "System Features", icon: "①",
      desc: "Why this is a different kind of PMS: <b>built on an ISMS</b>. Real system screens show how management and auditing work in practice.",
      pts: ["Traditional PMS vs. Medsig", "Project nature, categories and five-phase controls", "Criticality, risk assessment, security requirements and audits", "Dashboard, reports, segregation of duties and audit trail"] },
    { key: "Part 2", name: "Compliance Mapping to Security Standards", icon: "②",
      desc: "How the system links to <b>ISO 27001, TISAX, ISO 27701, ISO 42001, IEC 62443 and ISO/SAE 21434</b>, providing secure project management practice and audit evidence.",
      pts: ["Clause → system feature → audit evidence", "TISAX project security and prototype protection", "Privacy (PIA) and AI impact assessment", "Product cybersecurity (TARA, SBOM) and evidence map"] },
    { key: "Part 3", name: "System Operation", icon: "③",
      desc: "Three cases shown on real screens: <b>from project creation through execution to closure</b> in the system.",
      pts: ["R&D project: automotive T-Box (risk assessment required)", "IT project: EDMS implementation (risk assessment required)", "Process reengineering: P2P (no risk assessment needed)", "Sign-in, roles and everyday use"] }
  ];
  function markPart(n) {
    document.querySelectorAll(".partnav a").forEach(function (x) { x.classList.toggle("on", x.getAttribute("data-part") === n); });
  }
  function partsHTML() {
    var cards = PARTS.map(function (P, i) {
      var cs = COURSE.filter(function (c) { return c.part.indexOf(P.key) === 0; });
      var mins = cs.reduce(function (s, c) { return s + c.mins; }, 0);
      var done = cs.filter(function (c) { return state.done[c.id]; }).length;
      return '<article class="part-card p' + (i + 1) + '" id="part' + (i + 1) + '">' +
        '<header><span class="part-no">0' + (i + 1) + '</span><span class="part-key">' + P.key + "</span></header>" +
        "<h3>" + P.name + "</h3>" +
        '<div class="part-meta"><span>' + cs.length + " units</span><span>about " + mins + " min</span>" + (done ? "<span>read " + done + "/" + cs.length + "</span>" : "") + "</div>" +
        '<p class="part-desc">' + P.desc + "</p>" +
        '<ul class="part-list">' + P.pts.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" +
        '<button class="btn primary part-go" data-go="c-' + cs[0].id + '">Start ' + P.key + " →</button></article>";
    }).join("");
    var notes = [
      ["📖", "Two versions", "Interactive version: jump to any unit, click screens to enlarge. Video version: narrated by Allan and Arale, about 1.6 hours."],
      ["📝", "Final quiz", DRAW + " random questions; score " + QUIZ.passScore + " or higher to pass. Retake after reviewing if needed."],
      ["🏅", "Certificate", "Pass, fill in your details, and download a certificate signed by the instructor plus the answer sheet."],
      ["🔒", "Your data", "Screens use demo data; your progress and certificate details stay in your browser."]
    ];
    return '<section class="parts" aria-labelledby="partsTitle">' +
      '<div class="parts-head"><div class="eyebrow">Course map</div><h2 id="partsTitle">Three parts of this course</h2>' +
      '<p>Introduction → <b>Features</b> → <b>Compliance</b> → <b>Operation</b> → Wrap-up and final quiz. Start from any part you like.</p></div>' +
      '<div class="parts-grid">' + cards + "</div>" +
      '<div class="notes-grid" aria-label="Before you start">' + notes.map(function (n) {
        return '<div class="note-tile"><span class="ni" aria-hidden="true">' + n[0] + "</span><div><b>" + n[1] + "</b><p>" + n[2] + "</p></div></div>";
      }).join("") + "</div></section>";
  }

  function renderHome() {
    renderSide("home");
    var next = COURSE.filter(function (c) { return !state.done[c.id]; })[0] || COURSE[0];
    var cards = COURSE.map(function (c, i) {
      return '<button class="card' + (state.done[c.id] ? " done" : "") + '" data-go="c-' + c.id + '">' +
        '<div class="meta"><span class="tag">' + esc(c.part) + '</span><span class="mono">' + c.mins + " min</span></div>" +
        "<h3>" + esc(c.title) + "</h3><p>" + esc(c.sub) + "</p></button>";
    }).join("");
    $main.innerHTML =
      '<div class="wrap wide">' + partsHTML() +
      '<section class="hero">' +
      '<figure class="who" style="margin:0"><figcaption>Instructor Allan Lo</figcaption><img src="' + IMG.A + '" alt="Allan Instructor portrait" width="220"></figure>' +
      '<div class="copy"><div class="eyebrow">ISO 27001 · TISAX · ISO 27701 · ISO 42001 · IEC 62443 · ISO/SAE 21434</div>' +
      "<h1>Medsig Project Security<br>Management System<br>Online Course</h1>" +
      "<p>More than project management: a PMS built on an ISMS, with security requirements embedded in all five project phases. Consultant Allan walks you through features, compliance mapping and complete R&D, IT and general projects on real screens, while AI assistant Arale asks the questions you would ask.</p>" +
      '<div class="stats"><span><b>' + COURSE.length + "</b> units</span><span><b>3</b> end-to-end cases</span><span>about <b>" + Math.round(totalMins() / 60 * 10) / 10 + "</b> hours</span><span><b>" + DRAW + "</b>  quiz questions</span></div>" +
      '<div class="row"><button class="btn primary" data-go="c-' + next.id + '">' + (Object.keys(state.done).length ? "Continue: " + esc(next.title) : "Start learning") + '</button><a class="btn" href="play.html">▶ Video version</a><button class="btn" data-go="quiz">Final quiz</button></div></div>' +
      '<figure class="who" style="margin:0"><figcaption>AI assistant Arale</figcaption><img src="' + IMG.R + '" alt="Arale portrait" width="200"></figure>' +
      "</section>" +
      '<div class="section-title"><h2>Units</h2><span class="note">Jump to any unit; click “Mark as read” when you finish one.</span></div>' +
      '<div class="grid-cards">' + cards + "</div></div>";
  }

  /* ---------- 章節 ---------- */
  function block(b, key) {
    switch (b[0]) {
      case "A": case "R":
        return sayHTML(b[0], b[1]);
      case "p": return '<p class="p">' + b[1] + "</p>";
      case "list": return '<ul class="list">' + b[1].map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>";
      case "std":
        return '<div class="std"><header><span class="lbl">Standard requirement</span>' + b[1] + "</header><ol>" + b[2].map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ol></div>";
      case "tip":
        var face = '<img src="' + CH.face("A", CH.mood("A", "", b[1])) + '" alt="">';
        return '<div class="tip ' + b[1] + '"><div class="t">' + face + '<span class="lbl">' + TIP[b[1]] + "</span>" + b[2] + '</div><div class="body">' + b[3] + "</div></div>";
      case "table":
        return '<div class="tbl"><table><thead><tr>' + b[1].map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr></thead><tbody>" +
          b[2].map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + c + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
      case "ctrl":
        return '<div class="tbl ctrl"><table><thead><tr><th>No.</th><th>Control</th><th>Requirement</th></tr></thead><tbody>' +
          b[1].map(function (r) {
            return "<tr><td>A." + r[0] + "</td><td><b>" + r[1] + "</b>" + "</td><td>" + r[2] + "</td></tr>";
          }).join("") + "</tbody></table></div>";
      case "shot":
        return shotHTML(b);
      case "check":
        return '<div class="check" data-check=""' + key + '"><div class="q"><span class="lbl">Quick check</span><span>' + b[1] + '</span></div><div class="opts">' +
          b[2].map(function (o, i) { return '<button class="opt" data-ans="' + i + '"><span class="k">' + "ABCD"[i] + "</span><span>" + o + "</span></button>"; }).join("") +
          '</div><div class="exp" hidden></div></div>';
    }
    return "";
  }

  /* System screen: 截圖＋No.標註點，點圖可放大 */
  function shotHTML(b) {
    var pts = b[3] || [];
    return '<figure class="shot"><div class="shot-frame" data-zoom="' + b[1] + '"><img src="' + b[1] + '" alt="System screen: ' + esc(PSplain(b[2])) + '" loading="lazy">' +
      pts.map(function (p, i) { return '<span class="mk" style="left:' + p[0] + '%;top:' + p[1] + '%">' + (i + 1) + "</span>"; }).join("") +
      '<span class="zoom-hint">🔍 Click to enlarge</span></div><figcaption><span class="lbl">System screen</span>' + b[2] + "</figcaption>" +
      (pts.length ? '<ol class="shot-notes">' + pts.map(function (p) { return "<li>" + p[2] + "</li>"; }).join("") + "</ol>" : "") + "</figure>";
  }
  function PSplain(h) { return String(h).replace(/<[^>]+>/g, ""); }
  document.addEventListener("click", function (e) {
    var z = e.target.closest("[data-zoom]");
    if (!z) return;
    var box = el('<div class="lightbox" role="dialog" aria-label="Enlarged system screen"><div class="lb-inner">' + z.innerHTML.replace(/<span class="zoom-hint">[^<]*<\/span>/, "") + '</div><button class="lb-close" aria-label="Close">✕</button></div>');
    document.body.appendChild(box);
    function close() { box.remove(); document.removeEventListener("keydown", onKey); }
    function onKey(ev) { if (ev.key === "Escape") close(); }
    box.addEventListener("click", function (ev) { if (ev.target === box || ev.target.closest(".lb-close")) close(); });
    document.addEventListener("keydown", onKey);
  });

  var checks = {};
  function renderChapter(id) {
    var i = chapterIndex(id), c = COURSE[i];
    setTimeout(function () { var mm = c.part.match(/^Part (\d)/); markPart(mm ? mm[1] : null); }, 0);
    renderSide(id);
    checks = {};
    var toc = c.sections.map(function (s, k) { return '<a href="#c-' + id + '" data-sec="s' + k + '">' + esc(s.h) + "</a>"; }).join("");
    var body = c.sections.map(function (s, k) {
      return '<section class="sec" id="s' + k + '"><h2><span class="no">' + (k + 1) + "</span>" + esc(s.h) + "</h2>" +
        s.b.map(function (b, j) {
          var key = id + "-" + k + "-" + j;
          if (b[0] === "check") checks[key] = b;
          return block(b, key);
        }).join("") + "</section>";
    }).join("");
    var prev = COURSE[i - 1], nxt = COURSE[i + 1];
    $main.innerHTML = '<article class="wrap">' +
      '<header class="chapter-head"><div class="eyebrow">' + esc(c.part) + " · Unit " + (i + 1) + " / " + COURSE.length + " · about " + c.mins + " min</div><h1>" + esc(c.title) + "</h1><p>" + esc(c.sub) + '</p><nav class="toc" aria-label="Sections in this unit">' + toc + "</nav></header>" +
      body +
      '<div class="row"><button class="btn ' + (state.done[id] ? "" : "primary") + '" id="markDone">' + (state.done[id] ? "✓ Read (click to undo)" : "Mark as read") + "</button></div>" +
      '<nav class="pager">' +
      (prev ? '<button class="btn small" data-go="c-' + prev.id + '">← ' + esc(prev.title) + "</button>" : '<button class="btn small" data-go="home">← Course home</button>') +
      (nxt ? '<button class="btn small primary" data-go="c-' + nxt.id + '">' + esc(nxt.title) + " →</button>" : '<button class="btn small primary" data-go="quiz">Go to final quiz →</button>') +
      "</nav></article>";

    document.getElementById("markDone").addEventListener("click", function () {
      if (state.done[id]) delete state.done[id]; else state.done[id] = Date.now();
      save(); renderChapter(id);
    });
    $main.querySelectorAll("[data-sec]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById(a.getAttribute("data-sec")).scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
    $main.querySelectorAll(".check").forEach(function (box) {
      var b = checks[box.getAttribute("data-check")];
      box.querySelectorAll(".opt").forEach(function (o) {
        o.addEventListener("click", function () {
          var pick = +o.getAttribute("data-ans");
          box.querySelectorAll(".opt").forEach(function (x) {
            var k = +x.getAttribute("data-ans");
            x.classList.remove("right", "wrong");
            if (k === b[3]) x.classList.add("right");
            else if (k === pick) x.classList.add("wrong");
          });
          var ex = box.querySelector(".exp");
          ex.hidden = false;
          ex.innerHTML = (pick === b[3] ? '<b class="ok">Correct!</b> ' : '<b class="no">Not quite. The answer is ' + "ABCD"[b[3]] + ".</b> ") + b[4];
        });
      });
    });
  }

  /* ---------- 課後測驗 ---------- */
  var attempt = null; // { order:[{qi, opts:[original indexes]}], picks:{} }

  function newAttempt() {
    attempt = {
      order: shuffle(QUIZ.questions.map(function (_, i) { return i; })).slice(0, DRAW).map(function (qi) {
        return { qi: qi, opts: shuffle([0, 1, 2, 3]) };
      }),
      picks: {}
    };
  }

  function renderQuiz() {
    renderSide("quiz");
    if (state.pending) return renderInfoForm();
    if (state.passed && !attempt) return renderPassed();
    if (!attempt || attempt.result) newAttempt();
    var unread = COURSE.filter(function (c) { return !state.done[c.id]; });
    var qs = attempt.order.map(function (o, n) {
      var Q = QUIZ.questions[o.qi];
      return '<div class="qcard" data-n="' + n + '"><div class="qn">Question ' + (n + 1) + " of " + DRAW + "</div><div class=\"qq\">" + Q.q + '</div><div class="opts">' +
        o.opts.map(function (oi, k) {
          return '<button class="opt' + (attempt.picks[n] === oi ? " sel" : "") + '" data-n="' + n + '" data-o="' + oi + '"><span class="k">' + "ABCD"[k] + "</span><span>" + Q.opts[oi] + "</span></button>";
        }).join("") + "</div></div>";
    }).join("");
    $main.innerHTML = '<div class="wrap">' +
      '<section class="quiz-intro"><img src="' + CH.face("R", "fight") + '" alt="Arale" width="120"><div><div class="eyebrow">Final quiz</div><h1 style="font-size:1.6rem">Medsig PMS Final Quiz</h1>' +
      '<p class="p">' + DRAW + ' multiple-choice questions are drawn at random from a bank of ' + QUIZ.questions.length + '. Answer <b>' + Math.ceil(QUIZ.passScore / 100 * DRAW) + ' correctly (' + QUIZ.passScore + ' points)</b> to pass, then enter your details to download the certificate and answer sheet. If you do not pass, review the course and try again; questions and options are reshuffled each time.</p>' +
      (unread.length ? '<p class="note">Note: you have  ' + unread.length + "  units not marked as read. We suggest finishing them first.</p>" : "") +
      "</div></section>" +
      sayHTML("R", "You can do it! Read carefully, words like “not” and “cannot” are easy to miss!", "fight") +
      qs +
      '<div class="row"><button class="btn primary" id="submitQuiz">Submit</button><span class="note" id="quizHint">Answered 0 / ' + DRAW + '</span></div></div>';

    function updateHint() {
      var n = Object.keys(attempt.picks).length;
      document.getElementById("quizHint").textContent = "Answered " + n + " / " + DRAW + (n < DRAW ? ". Please answer all questions before submitting" : "");
    }
    updateHint();
    $main.querySelectorAll(".qcard .opt").forEach(function (b) {
      b.addEventListener("click", function () {
        var n = +b.getAttribute("data-n");
        attempt.picks[n] = +b.getAttribute("data-o");
        b.parentNode.querySelectorAll(".opt").forEach(function (x) { x.classList.toggle("sel", x === b); });
        updateHint();
      });
    });
    document.getElementById("submitQuiz").addEventListener("click", function () {
      var missing = attempt.order.map(function (_, n) { return n; }).filter(function (n) { return !(n in attempt.picks); });
      if (missing.length) {
        var card = $main.querySelector('.qcard[data-n="' + missing[0] + '"]');
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        document.getElementById("quizHint").textContent = missing.length + " unanswered (question " + missing.map(function (n) { return n + 1; }).join(", ") + ")";
        return;
      }
      grade();
    });
  }

  function grade() {
    var correct = 0, wrongRefs = {};
    attempt.order.forEach(function (o, n) {
      var Q = QUIZ.questions[o.qi];
      if (attempt.picks[n] === Q.a) correct++; else wrongRefs[Q.ref] = true;
    });
    var score = Math.round(correct / DRAW * 100);
    attempt.result = { score: score, correct: correct };
    if (score >= QUIZ.passScore) {
      state.pending = { score: score, picks: attempt.order.map(function (o, n) { return [o.qi, attempt.picks[n]]; }), at: Date.now() };
      save();
      renderInfoForm();
    } else {
      renderFail(score, Object.keys(wrongRefs));
    }
    window.scrollTo(0, 0);
  }

  function renderFail(score, refs) {
    var links = refs.map(function (r) { var c = COURSE[chapterIndex(r)]; return c ? '<button class="btn small" data-go="c-' + c.id + '">' + esc(c.title) + "</button>" : ""; }).join("");
    $main.innerHTML = '<div class="wrap">' +
      '<section class="result fail"><img src="' + CH.face("R", "sad") + '" alt="Arale" width="110"><div><div class="eyebrow">Result</div><h2>Not passed yet. Try again!</h2>' +
      '<div class="row" style="margin-top:6px"><span class="score">' + score + '</span><span class="note">points (pass mark ' + QUIZ.passScore + "; " + attempt.result.correct + " / " + DRAW + " correct)</span></div></div></section>" +
      sayHTML("R", "Oh, so close! Let's review the units below and then try the quiz again!", "sad") +
      sayHTML("A", "Systems need a few test rounds before go-live too. To keep the quiz meaningful, answers are not shown when you don't pass. <b>Please review the suggested units</b>, then retake the quiz.", "point") +
      '<section class="form"><h2 style="font-size:1.15rem">Suggested units to review</h2><div class="review-list">' + links + "</div></section>" +
      '<div class="row"><button class="btn" data-go="c-' + (refs[0] || COURSE[0].id) + '">Review the course</button><button class="btn primary" id="retake">Retake quiz</button></div></div>';
    document.getElementById("retake").addEventListener("click", function () { attempt = null; renderQuiz(); window.scrollTo(0, 0); });
  }

  /* ---------- 通過：填寫資料 ---------- */
  var FIELDS = [
    ["company", "Company", "organization", "e.g. Example Technology Co., Ltd."],
    ["dept", "Department", "organization-title", "e.g. IT Division, Security Team"],
    ["name", "Name", "name", "e.g. Alex Wang"],
    ["title", "Job title", "organization-title", "e.g. Security Engineer"],
    ["email", "E-mail", "email", "e.g. name@company.com"]
  ];

  function renderInfoForm() {
    var p = state.pending;
    var prev = (state.passed && state.passed.info) || {};
    $main.innerHTML = '<div class="wrap">' +
      '<section class="result pass"><img src="' + CH.face("A", "laugh") + '" alt="Allan Instructor" width="110"><div><div class="eyebrow">Result</div><h2>Congratulations, you passed!</h2>' +
      '<div class="row" style="margin-top:6px"><span class="score">' + p.score + '</span><span class="note">points (' + Math.round(p.score / 100 * DRAW) + " / " + DRAW + " correct)</span></div></div></section>" +
      sayHTML("A", "Well done! Fill in the details below to generate your <b>Certificate</b>, together with the questions and answers.", "wink") +
      '<form class="form" id="infoForm" novalidate><h2 style="font-size:1.15rem">Your details (all required)</h2><div class="fgrid">' +
      FIELDS.map(function (f) {
        return '<div class="field"><label for="f-' + f[0] + '">' + f[1] + " <i>*</i></label>" +
          '<input id="f-' + f[0] + '" name="' + f[0] + '" type="' + (f[0] === "email" ? "email" : "text") + '" autocomplete="' + f[2] + '" placeholder="' + f[3] + '" value="' + esc(prev[f[0]] || "") + '" maxlength="60" required>' +
          '<div class="err" id="e-' + f[0] + '"></div></div>';
      }).join("") +
      '</div><p class="note">Used only to generate the certificate. Stored in your own browser, never uploaded.</p><div class="row"><button class="btn primary" type="submit">Generate certificate</button></div></form></div>';

    document.getElementById("infoForm").addEventListener("submit", function (e) {
      e.preventDefault();
      var info = {}, ok = true;
      FIELDS.forEach(function (f) {
        var inp = document.getElementById("f-" + f[0]);
        var v = inp.value.trim(), msg = "";
        if (!v) msg = "Please enter " + f[1];
        else if (f[0] === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) msg = "E-mail  is not valid, e.g. name@company.com";
        document.getElementById("e-" + f[0]).textContent = msg;
        inp.setAttribute("aria-invalid", msg ? "true" : "false");
        if (msg && ok) { inp.focus(); ok = false; }
        info[f[0]] = v;
      });
      if (!ok) return;
      var d = new Date(p.at);
      var no = "MPMS-" + d.getFullYear() + String(d.getMonth() + 1).padStart(2, "0") + String(d.getDate()).padStart(2, "0") + "-" + Math.random().toString(36).slice(2, 7).toUpperCase();
      state.passed = { info: info, score: p.score, picks: p.picks, at: p.at, no: no };
      delete state.pending;
      save();
      attempt = null;
      renderPassed();
      window.scrollTo(0, 0);
    });
  }

  /* ---------- 證書與題解 ---------- */
  function fmtDate(t) { var d = new Date(t); return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }); }

  function loadImg(src) {
    return new Promise(function (res) { var i = new Image(); i.onload = function () { res(i); }; i.onerror = function () { res(null); }; i.src = src; });
  }

  function drawCertificate(P) {
    var W = 1754, H = 1240;
    var cv = document.createElement("canvas"); cv.width = W; cv.height = H;
    var g = cv.getContext("2d");
    var info = P.info;
    var text = "CertificateMedsigPMSOnlineCourseThis certifies that has completed the online course and passed the final quiz with a score of Instructor ISMS PIMS Consultant Certificate No. Date of issue 0123456789" + COURSE_TITLE + info.company + info.dept + info.name + info.title + "AllanLo";
    var fontsReady = document.fonts && document.fonts.load ? Promise.all([
      document.fonts.load('900 60px "Noto Serif TC"', text),
      document.fonts.load('700 30px "Noto Sans TC"', text),
      document.fonts.load('400 30px "Noto Sans TC"', text),
      document.fonts.load('400 40px "LXGW WenKai TC"', text)
    ]).catch(function () { }) : Promise.resolve();

    return Promise.all([fontsReady, loadImg(IMG.A), loadImg(IMG.R), loadImg(SIGNATURE)]).then(function (r) {
      var imA = r[1], imR = r[2], imSig = r[3];
      var SERIF = '"Noto Serif TC", "Songti TC", serif', SANS = '"Noto Sans TC", "Microsoft JhengHei", sans-serif', HAND = '"LXGW WenKai TC", "Noto Sans TC", sans-serif';
      var RED = "#0b6e8a", INK = "#16181d";
      g.fillStyle = "#ffffff"; g.fillRect(0, 0, W, H);
      // 網點底紋
      g.fillStyle = "rgba(22,24,29,0.05)";
      for (var y = 0; y < H; y += 16) for (var x = (y / 16) % 2 ? 8 : 0; x < W; x += 16) { g.beginPath(); g.arc(x, y, 1.6, 0, 7); g.fill(); }
      // 外框
      g.fillStyle = "#ffffff"; g.fillRect(60, 60, W - 120, H - 120);
      g.strokeStyle = INK; g.lineWidth = 8; g.strokeRect(50, 50, W - 100, H - 100);
      g.lineWidth = 2; g.strokeRect(72, 72, W - 144, H - 144);
      g.fillStyle = RED; g.fillRect(72, 72, W - 144, 14);

      // 人物（左：Allan，右：Arale），半身
      function portrait(im, x, y, w, h) {
        if (!im) return;
        g.save(); g.beginPath(); g.rect(x, y, w, h); g.clip();
        var s = Math.max(w / im.width, h / im.height);
        g.drawImage(im, x + (w - im.width * s) / 2, y, im.width * s, im.height * s);
        g.restore();
        g.strokeStyle = INK; g.lineWidth = 3; g.strokeRect(x, y, w, h);
      }
      portrait(imA, 110, H - 470, 250, 360);
      portrait(imR, W - 360, H - 470, 250, 360);
      g.fillStyle = INK; g.font = "26px " + HAND; g.textAlign = "center";
      g.fillText("Instructor Allan Lo", 235, H - 488);
      g.fillText("AI assistant Arale", W - 235, H - 488);

      g.textAlign = "center";
      g.fillStyle = RED; g.font = "700 28px " + SANS;
      g.fillText("M E D S I G   P M S   O N L I N E   C O U R S E", W / 2, 175);
      g.fillStyle = INK; g.font = "900 96px " + SERIF;
      g.fillText("Certificate", W / 2, 290);

      g.font = "400 32px " + SANS; g.fillStyle = "#5a6170";
      g.fillText("This certifies that", W / 2, 375);

      function fit(txt, font, size, maxW) { var s = size; do { g.font = font.replace("{s}", s); s -= 2; } while (g.measureText(txt).width > maxW && s > 18); }
      g.fillStyle = INK;
      fit(info.name, "900 {s}px " + SERIF, 84, 900);
      g.fillText(info.name, W / 2, 475);
      g.strokeStyle = INK; g.lineWidth = 2; g.beginPath(); g.moveTo(W / 2 - 330, 500); g.lineTo(W / 2 + 330, 500); g.stroke();

      var line2 = info.title + ", " + info.dept + ", " + info.company;
      g.fillStyle = "#3a3f4a"; fit(line2, "500 {s}px " + SANS, 34, 1000);
      g.fillText(line2, W / 2, 560);

      g.fillStyle = INK; g.font = "400 32px " + SANS;
      g.fillText("has completed the online course", W / 2, 640);
      g.font = "700 40px " + SERIF; fit(COURSE_TITLE, "700 {s}px " + SERIF, 40, 1300);
      g.fillText(COURSE_TITLE, W / 2, 700);
      g.font = "400 32px " + SANS;
      g.fillText("and passed the final quiz with a score of " + P.score + ".", W / 2, 760);

      // 簽名欄
      g.textAlign = "left"; g.font = "400 24px " + SANS; g.fillStyle = "#5a6170";
      var bx = 400;
      g.fillText("Certificate No.", bx, 880); g.fillText("Date of issue", bx, 935);
      g.fillStyle = INK; g.font = "700 26px " + '"JetBrains Mono", monospace';
      g.fillText(P.no, bx + 180, 880);
      g.font = "500 26px " + SANS; g.fillText(fmtDate(P.at), bx + 180, 935);
      g.textAlign = "center";
      // Instructor親筆簽名（壓在簽名線上，下方印Name與Job title）；簽名檔載入失敗時改用手寫字體
      if (imSig) {
        var sw = 230, sh = sw * imSig.height / imSig.width;
        g.drawImage(imSig, 1090 - sw / 2, 953 - sh, sw, sh);
      } else {
        g.font = "400 46px " + HAND; g.fillStyle = INK; g.fillText("Allan Lo", 1090, 930);
      }
      g.strokeStyle = INK; g.lineWidth = 1.5; g.beginPath(); g.moveTo(950, 945); g.lineTo(1230, 945); g.stroke();
      g.font = "500 24px " + SANS; g.fillStyle = INK; g.fillText("Allan Lo", 1090, 985);
      g.font = "400 21px " + SANS; g.fillStyle = "#5a6170"; g.fillText("Instructor / ISMS & PIMS Consultant", 1090, 1014);

      // 印章
      g.save(); g.translate(1330, 1000); g.rotate(-0.18);
      g.strokeStyle = RED; g.fillStyle = RED; g.globalAlpha = 0.85;
      g.lineWidth = 6; g.beginPath(); g.arc(0, 0, 62, 0, Math.PI * 2); g.stroke();
      g.lineWidth = 2; g.beginPath(); g.arc(0, 0, 52, 0, Math.PI * 2); g.stroke();
      g.font = "900 26px " + SERIF; g.fillText("PMS", 0, -8);
      g.font = "900 22px " + SERIF; g.fillText("PASSED", 0, 24);
      g.restore();

      g.textAlign = "center"; g.font = "400 20px " + SANS; g.fillStyle = "#8a909c";
      g.fillText("This certificate confirms course completion and a passed final quiz only. It is not an ISMS certification.", W / 2, H - 100);
      g.fillText(CREDIT + " · " + COPYRIGHT, W / 2, H - 132);
      return cv.toDataURL("image/png");
    });
  }

  function answerRows(P) {
    return P.picks.map(function (pk, n) {
      var Q = QUIZ.questions[pk[0]];
      return { n: n + 1, q: Q.q, opts: Q.opts, a: Q.a, mine: pk[1], exp: Q.exp };
    });
  }

  function answerSheetHTML(P, certURL) {
    var rows = answerRows(P);
    var info = P.info;
    var body = rows.map(function (r) {
      return '<div class="q"><p><b>' + r.n + ". " + esc(r.q) + "</b></p><ol>" + r.opts.map(function (o, i) {
        var cls = i === r.a ? "c" : (i === r.mine ? "w" : "");
        return '<li class="' + cls + '">' + esc(o) + (i === r.a ? "  ✔ Correct answer" : "") + (i === r.mine && i !== r.a ? "  ✘ Your answer" : "") + "</li>";
      }).join("") + "</ol><p class=\"e\">Explanation: " + esc(r.exp) + "</p></div>";
    }).join("");
    return '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Quiz questions and answers - ' + esc(info.name) + "</title>" +
      "<style>body{font-family:'Noto Sans TC','Microsoft JhengHei',sans-serif;max-width:880px;margin:24px auto;padding:0 16px;color:#16181d;line-height:1.7}" +
      "img{width:100%;border:1px solid #ccc}h1{font-size:22px}table{border-collapse:collapse;margin:12px 0}td{border:1px solid #ccc;padding:4px 10px}" +
      ".q{border-top:1px solid #ddd;padding-top:8px;page-break-inside:avoid}ol{list-style:upper-alpha}.c{color:#157a3c;font-weight:700}.w{color:#c8102e}.e{background:#f4f5f7;padding:6px 10px;border-radius:6px}</style></head><body>" +
      (certURL ? '<img src="' + certURL + '" alt="Certificate">' : "") +
      "<h1>" + esc(COURSE_TITLE) + ": quiz questions and answers</h1><table>" +
      "<tr><td>Company</td><td>" + esc(info.company) + "</td></tr><tr><td>Department</td><td>" + esc(info.dept) + "</td></tr><tr><td>Name</td><td>" + esc(info.name) + "</td></tr>" +
      "<tr><td>Job title</td><td>" + esc(info.title) + "</td></tr><tr><td>E-mail</td><td>" + esc(info.email) + "</td></tr><tr><td>Score</td><td>" + P.score + "</td></tr>" +
      "<tr><td>Certificate No.</td><td>" + esc(P.no) + "</td></tr><tr><td>Date</td><td>" + fmtDate(P.at) + "</td></tr></table>" + body +
      '<p style="margin-top:24px;color:#5a6170;font-size:13px;text-align:center">' + esc(CREDIT) + "<br>" + esc(COPYRIGHT) + "</p></body></html>";
  }

  function download(name, url) {
    var a = document.createElement("a");
    a.href = url; a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function () { a.remove(); }, 0);
  }

  function renderPassed() {
    var P = state.passed, info = P.info;
    renderSide("quiz");
    var rows = answerRows(P);
    $main.innerHTML = '<div class="wrap">' +
      '<section class="result pass"><img src="' + CH.face("A", "laugh") + '" alt="Allan Instructor" width="110"><div><div class="eyebrow">Final quiz passed</div><h2>Congratulations, ' + esc(info.name) + "!</h2>" +
      '<div class="row" style="margin-top:6px"><span class="score">' + P.score + '</span><span class="note">points · Certificate No. <span class="mono">' + esc(P.no) + "</span></span></div></div></section>" +
      sayHTML("R", "Ta-da! Your certificate is ready. Remember to download it! The questions and answers are below too!", "thumb") +
      '<section class="cert-box"><div class="section-title"><h2>Certificate</h2><span class="note">' + esc(info.company) + " · " + esc(info.dept) + " · " + esc(info.title) + " · " + esc(info.email) + "</span></div>" +
      '<img id="certImg" alt="Certificate (generating…)">' +
      '<div class="row"><button class="btn primary" id="dlCert" disabled>Download certificate (PNG)</button><button class="btn" id="dlSheet" disabled>Download certificate + answers (HTML)</button><button class="btn" id="printBtn" disabled>Print / Save as PDF</button></div>' +
      '<p class="note" id="dlNote">If the download button does not respond, right-click (or long-press on mobile) the certificate image to save it.</p></section>' +
      '<section class="answers"><h2 style="font-size:1.3rem">Questions and answers</h2>' +
      rows.map(function (r) {
        return '<div class="ans"><div class="qq">' + r.n + ". " + r.q + "</div><ol>" + r.opts.map(function (o, i) {
          return '<li class="' + (i === r.a ? "correct " : "") + (i === r.mine ? "mine" : "") + '">' + o + (i === r.a ? "  ✔" : "") + "</li>";
        }).join("") + '</ol><div class="exp">' + r.exp + "</div></div>";
      }).join("") + "</section>" +
      '<div class="row"><button class="btn" id="redo">Retake quiz (change certificate details)</button><button class="btn" data-go="home">Back to course home</button></div></div>';

    var certURL = null;
    drawCertificate(P).then(function (url) {
      certURL = url;
      var img = document.getElementById("certImg");
      if (!img) return;
      img.src = url; img.alt = "Certificate: " + info.name;
      ["dlCert", "dlSheet", "printBtn"].forEach(function (id) { document.getElementById(id).disabled = false; });
      var pa = document.getElementById("printArea");
      pa.innerHTML = '<img src="' + url + '" alt="">' + "<h2>" + esc(COURSE_TITLE) + ": quiz questions and answers (" + esc(info.name) + ")</h2>" +
        rows.map(function (r) {
          return '<div class="pq"><b>' + r.n + ". " + r.q + "</b><br>" + r.opts.map(function (o, i) { return "ABCD"[i] + ". " + o + (i === r.a ? " ✔" : ""); }).join("<br>") + "<br><i>Explanation: " + r.exp + "</i></div>";
        }).join("") + '<p style="text-align:center;font-size:9pt;margin-top:16pt">' + esc(CREDIT) + "<br>" + esc(COPYRIGHT) + "</p>";
    });
    document.getElementById("dlCert").addEventListener("click", function () {
      if (certURL) download("MedsigPMSCertificate_" + info.name + ".png", certURL);
    });
    document.getElementById("dlSheet").addEventListener("click", function () {
      var blob = new Blob([answerSheetHTML(P, certURL)], { type: "text/html;charset=utf-8" });
      var url = URL.createObjectURL(blob);
      download("MedsigPMSQuiz_Answers_" + info.name + ".html", url);
      setTimeout(function () { URL.revokeObjectURL(url); }, 5000);
    });
    document.getElementById("printBtn").addEventListener("click", function () { window.print(); });
    document.getElementById("redo").addEventListener("click", function () { attempt = null; state.passed = null; save(); renderQuiz(); window.scrollTo(0, 0); });
  }

  route_();
})();
