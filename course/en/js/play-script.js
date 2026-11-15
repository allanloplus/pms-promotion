/* Video version: builds the step-by-step narration script from COURSE (shared by browser and Node)
 * step = { who: "A"|"R", type, show: subtitle (html), speak: text to voice, sec, block, row }
 */
(function (root) {
  "use strict";

  function stripHtml(h) {
    return String(h)
      .replace(/<li[^>]*>/g, ". ").replace(/<br\s*\/?>/g, ", ")
      .replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "and")
      .replace(/&lt;/g, "less than").replace(/&gt;/g, "greater than").replace(/&quot;|&#39;/g, "");
  }

  /* Pronunciation clean-up before text-to-speech */
  function speakify(h) {
    var s = stripHtml(h);
    s = s.replace(/ISO\/IEC/g, "ISO").replace(/ISO\/SAE/g, "ISO SAE");
    s = s.replace(/A\.(\d+)\.(\d+)/g, "A $1.$2");
    s = s.replace(/\b([GMH])-([MTP])(\d)(\d)\b/g, "$1 $2 $3 $4").replace(/\b(SP|CU|PI|AI|PS)-(\d)(\d)\b/g, "$1 $2 $3");
    s = s.replace(/(\d)\s*[~～–]\s*(\d)/g, "$1 to $2");
    s = s.replace(/→/g, ", then ").replace(/×/g, " times ").replace(/≥/g, " at least ").replace(/≤/g, " at most ")
      .replace(/[“”"]/g, "").replace(/\s*\/\s*/g, " or ").replace(/\s+/g, " ").trim();
    return s;
  }

  function plain(h) { return stripHtml(h).replace(/\s+/g, " ").trim(); }

  function build(ch) {
    var steps = [];
    function add(o) { steps.push(o); }
    ch.sections.forEach(function (sec, si) {
      add({ who: "R", type: "title", sec: si, block: -1, show: sec.h, speak: speakify((si === 0 ? "Let's get started! " : "Next up! ") + "The topic is: " + sec.h) });
      sec.b.forEach(function (b, bi) {
        var base = { sec: si, block: bi };
        function put(o) { var x = Object.assign({}, base, o); x.speak = speakify(x.speak); add(x); }
        switch (b[0]) {
          case "A": case "R":
            put({ who: b[0], type: "say", show: b[1], speak: b[1] }); break;
          case "p":
            put({ who: "A", type: "board", show: b[1], speak: b[1] }); break;
          case "std":
            put({ who: "A", type: "board", show: "Standard requirement: " + b[1], speak: "First, the standard requirements: " + b[1] + "." });
            b[2].forEach(function (it, ri) { put({ who: "A", type: "row", row: ri, show: it, speak: it }); });
            break;
          case "list":
            b[1].forEach(function (it, ri) { put({ who: "A", type: "row", row: ri, show: it, speak: it }); });
            break;
          case "tip":
            var lead = { consult: "A consultant's tip: ", audit: "From the auditor's point of view: ", ng: "A common pitfall: ", key: "Key point: ", op: "How-to: " }[b[1]] || "";
            put({ who: "A", type: "board", show: b[2], speak: lead + b[2] + ". " + b[3] });
            break;
          case "table":
            b[2].forEach(function (r, ri) {
              var t = r.map(function (c, ci) {
                var h = plain(b[1][ci] || "");
                return ci === 0 || !h || r.length <= 2 ? c : h + ": " + c;
              }).join(". ");
              put({ who: "A", type: "row", row: ri, show: r.map(plain).join(" | "), speak: t });
            });
            break;
          case "shot":
            put({ who: b[5] || "A", type: "board", show: b[4] || ("Here is the system screen: " + b[2] + "."), speak: b[4] || ("Here is the system screen: " + b[2] + ".") });
            (b[3] || []).forEach(function (it, ri) { put({ who: it[3] || "A", type: "row", row: ri, show: it[2], speak: it[2] }); });
            break;
          case "check":
            put({ who: "R", type: "check", show: b[1], speak: "Quick check! " + b[1] + " Pick your answer!" });
            put({ who: "A", type: "exp", show: b[4], speak: "The correct answer is " + "ABCD"[b[3]] + ". " + b[4] });
            break;
        }
      });
    });
    add({ who: "R", type: "end", sec: ch.sections.length - 1, block: -1, show: "End of unit", speak: "That's the end of this unit! Shall we go on to the next one, or take the final quiz?" });
    return steps;
  }

  var COMMON = [
    { key: "right", who: "R", speak: "Correct! Awesome!" },
    { key: "wrong", who: "R", speak: "Oops, that's not it. Let's hear the explanation!" }
  ];

  var api = { build: build, speakify: speakify, plain: plain, COMMON: COMMON };
  if (typeof module !== "undefined" && module.exports) module.exports = api; else root.PlayScript = api;
})(this);
