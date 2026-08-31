# EdTechLive — Yuzhuo Zhang

**EdTechLive · Web UX Design · Sep – Dec 2021**

## Giving Teachers a *Voice Back*

How do you design for people who are too burned out to trust that feedback will ever lead to change?

**My Role**

**Research, Interaction, Visual Design, Prototyping**

**Team**

**6 UX designers · 4-month engagement**

**Client**

**EdTechLive, LLC – New York**

**Outcome**

**Shipped to production – live product**

**User interview · Educator** — "Give me preliminary tips first. I need to know this is worth my time before I wait."

Mid-career teacher · NYC

The Problem

### Teachers had data. Nobody told them *what to do with it.*

EdTechLive had a survey methodology and a working product. But burnt-out teachers weren't adding another tool to their workflow. Our question: why would they? 8 interviews and a competitive audit gave us the answer.

Double Diamond · User Research · B2B EdTech

Competitive Audit

#### 10 competitors. None closed the loop with teachers.

Two camps: survey-to-report tools (serving admins) and interactive assessment platforms (serving districts). Neither translated data into something a teacher could act on tomorrow.

**Survey → Report**

![](../images/case-4/case%204%20-%20Tripod%20Logo.webp) Tripod ![](../images/case-4/case%204%20-%20Resonant%20Logo.webp) Resonant Panorama Youth Truth

Data aggregated at school/district level. Teachers receive reports, not guidance.

**Interactive / Non-Survey** — Frontline Illuminate K12Insight Qualtrics

Rich data collection, but professional development lives in a separate silo, never tied to daily teaching.

**Key Gap** — Nobody connects: student data → personalized tip → teacher action. Every competitor stops at the report.

**Finding** — Survey tools primarily serve administrative oversight, not individual teaching improvement.

**Finding** — PD resources live in separate "Educator Centers," disconnected from the daily workflow where guidance is actually needed.

**Opportunity** — Embed actionable tips directly into the lesson-planning workflow. Close the loop from data to classroom change.

Research

### Not a data problem. *A support problem.*

8 interviews: 5 teachers, 3 administrators. Teachers weren't struggling with curriculum; they were drowning in anonymous negative feedback with no context and no next step. Affinity mapping revealed a clean split: admins wanted monitoring, educators wanted one actionable thing they could try tomorrow.

**Persona · Administrator**

**Monitor & Report**

- Track performance across classes and schools
- Formal feedback pipelines that scale
- District-level engagement visibility

**Persona · Educator**

**Act & Improve**

- One fast, practical tip — not a 40-page report
- Context for why students gave that feedback
- Progress that's visible across the school year

**Key Insight**

**Trust is the real barrier**

- Negative anonymous feedback felt like an attack
- No tool helped interpret student frustration
- Teachers disengage when follow-through isn't visible

**Design Decision**

> "Educators touch the platform daily. If we nail the educator layer first, the admin view becomes meaningful — not the other way around."

→ Focused on educator persona exclusively for this engagement → Journey scoped to 4 stages: Onboarding → Collecting → Receiving Tips → Integrating → Admin dashboard deferred to next iteration

Design

### Four features, *each earned through research.*

3 rounds of wireframes → mid-fidelity prototype. Every feature traces directly to a specific user pain point.

**01**

**Modular Dashboard** — Teachers manage 3–6 classes daily. The dashboard matches that reality.

Tab-based class switching surfaces the right data in context: no hunting, no lost thread between periods.

**Jakob's Law** — Match the mental model teachers already use. Reduce cognitive load at exactly the moment they're most pressed.

![Modular Dashboard](../images/case-4/case%204%20-%20Dashboard.webp) Dashboard · Tab System

**02**

**Calendar + Tip Requesting**

**Request a tip at the moment you're planning — not after.** — "Request a Tip" embedded directly in the calendar, tied to specific lessons. The client later promoted it to primary CTA; we'd found the right trigger point.

**Zeigarnik Effect** — Pending tips create an open loop that brings teachers back. Lesson planning is the moment of highest motivation.

![Calendar with Tip Request](../images/case-4/case%204%20-%20Calendar%20View.webp) Calendar · Tip Integration

**03**

**Teacher Goals**

**Goals set in September shouldn't disappear by November.** — A persistent goals module, categorized by domain, visible to both teacher and administrator year-round, anchoring tips and feedback to something that matters long-term.

**Goal-Gradient Effect** — Progress feels real when the finish line is visible. Categorical chunking makes complex goals approachable.

![Student Engagement data](../images/case-4/case%204%20-%20Student%20Engagement.webp) Engagement → Goal Setting

**04**

**Student Inventory** — Student preferences visualized, linked directly to teacher goals.

Learning styles shown as a chart, not a raw list. One copy change surfaced in testing: "UPDATE" → "RESEND" implied the survey had actually gone somewhere. Confusion dropped immediately.

**Recognition over Recall** — Patterns at a glance beat categories to memorize. The goal link closes data → action in one view.

![Student Learning Styles](../images/case-4/case%204%20-%20Student%20Preferences.webp) Student Inventory · Preferences

User Testing

### Halfway there. *Testing showed us the other half.*

3 sessions · 6 tasks each · mid-fidelity prototype. The calendar we were proud of failed. The tip flow needed rethinking. Both got fixed.

> "The calendar is confusing. I'm used to a standard monthly view."

→ Custom layout violated mental model · Rebuilt as standard monthly grid with double-click to add

> "Give me a quick tip first. I need to know it's worth waiting for the full one."

→ Added immediate tip on submit · Full analysis delivered asynchronously

Buried→Top Priority

**Engagement Results** — Moved to top of dashboard. More stats visible. Subscale key made interactive.

![Student Engagement Results](../images/case-4/case%204%20-%20Student%20Engagement.webp)

Custom View→Monthly Grid

**Calendar Layout** — Rebuilt to match existing mental model. Double-click to add units and lessons.

![Calendar Monthly View](../images/case-4/case%204%20-%20Calendar%20View.webp)

One Tip→Quick + Deep

**Tip Request Flow** — Immediate tip reduces abandonment. Deeper analysis follows when ready.

![Tip Request Flow](../images/case-4/case%204%20-%20Tip%20Request.webp)

Reflection

### What I'd tell myself on *day one.*

This shipped. It went live. Every decision traces back to something a real person told us. The brief said "survey platform." Research said "teacher confidence." Those aren't the same product; knowing the difference is the job.

**01**

**The brief is never the real problem** — The survey platform existed. Teacher confidence didn't. Research surfaces the difference.

**02**

**Deciding who not to design for is design** — Focusing on educators over admins wasn't a shortcut; it was a strategic bet that the product needed a strong foundation before scaling.

**03**

**What you're proud of is what testing will break** — Custom calendar: we liked it, teachers didn't. Mid-fi testing at 3 sessions saved weeks of rework.
