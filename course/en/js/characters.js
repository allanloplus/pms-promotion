/* Characters: Allan and Arale images and mood rules (English version) */
(function (root) {
  "use strict";

  var CHAR = {
    A: {
      name: "Consultant Allan", short: "Allan",
      pose: "../assets/allan.webp",          // 半身：手持平板、伸手介紹
      full: "../assets/allan-full.webp",
      base: "smile",
      moods: ["smile", "laugh", "think", "confused", "surprised", "point", "wink", "worried"]
    },
    R: {
      name: "AI assistant Arale", short: "Arale",
      pose: "../assets/arale.webp",          // 半身：拿著全息平板、伸手介紹
      tablet: "../assets/arale-tablet.webp",
      full: "../assets/arale-full.webp",
      base: "explain",
      moods: ["laugh", "think", "surprised", "confused", "explain", "sad", "thumb", "fight"]
    }
  };

  function face(who, mood) { return "../assets/" + (who === "A" ? "allan-" : "arale-") + (mood || CHAR[who].base) + ".webp"; }

  /* 依台詞內容挑表情 */
  function mood(who, text, kind) {
    var t = String(text || "").replace(/<[^>]+>/g, "");
    if (kind === "audit" || kind === "key") return "point";
    if (kind === "ng") return "worried";
    if (kind === "consult") return "smile";
    if (kind === "right") return "thumb";
    if (kind === "wrong") return "sad";
    if (who === "R") {
      if (/^(wow|whoa|oh!|so that)/i.test(t) || /awesome|amazing/i.test(t)) return "surprised";
      if (/oops|oh no|tough/i.test(t)) return "sad";
      if (/let's go|let's get started|next up|got it/i.test(t)) return "fight";
      if (/\?/.test(t)) return /different|confus|why/i.test(t) ? "confused" : "think";
      if (/hi there|hello|ta-da|haha/i.test(t)) return "laugh";
      if (/remember|done|complete|ready/i.test(t)) return "thumb";
      return "explain";
    }
    if (/haha/i.test(t)) return "laugh";
    if (/pitfall|worst|fail|cannot/i.test(t)) return "worried";
    if (/good question|great question/i.test(t)) return "surprised";
    if (/exactly|well done|great analogy|thank/i.test(t)) return "wink";
    if (/key|important|must|remember|not /i.test(t)) return "point";
    if (/\?/.test(t)) return "think";
    return "smile";
  }

  var api = { CHAR: CHAR, face: face, mood: mood };
  if (typeof module !== "undefined" && module.exports) module.exports = api; else root.Characters = api;
})(this);
