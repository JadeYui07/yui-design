# Sleep Tracker — Yuzhuo Zhang

**iOS · Product Design · Sleep Tracker App**

## Redesigning a broken bedtime ritual

Users had a sleep app, but no sleep experience. I redesigned the full wind-down journey to turn scattered features into a coherent nightly habit, driving +61% in premium conversion.

**Role** Lead Product Designer **Platform** iOS **Scope** Sleep Sounds + Sleep Insights **Team** 1 PM · 1 Dir · 2 Eng · 1 BI

**+61%** — **subscription conversion lift** — the headline result.

+30% trial starts · 70→90% task success · 4.5→7.2% paid rate · −22s per session

**01 — Context**

### A product built around sleep that couldn't feel like sleep

The app had strong features: curated soundscapes, detailed health data, premium content. But users weren't connecting the dots. They'd open a sound, dismiss an insight notification, and leave. **The nightly ritual was broken before it could begin.**

**Sleep Sounds**

#### The wind-down layer

High-frequency, action-driven feature. Users interact pre-sleep, where cognitive load must be near zero. This is the premium entry point.

**Sleep Insights**

#### The morning layer

Complex information architecture, varied user needs. Users review sleep quality data after waking — with very different levels of interest in the detail.

---

**02 — The Problem**

### The data told a story about disconnection

"I just want to relax."

— Consistent user sentiment across tickle flow feedback & internal interviews

That phrase captured everything. Users arrived with a simple, emotional need. The interface answered with friction, decisions, and labels that interrupted the very calm they came for.

**56%** — **Only 56% of users interacted with sounds after opening the screen.** Nearly half opened the feature and left without engaging — not a discovery problem, a friction problem.

**60%+** — **Over 60% of users never scrolled past the first visible row.** The catalogue had dozens of premium sounds. Users were only seeing four.

**Top 4** — **Interactions clustered overwhelmingly around just 4 sounds.** This wasn't preference — it was visual anchoring (Von Restorff Effect) combined with poor IA. Premium content was functionally invisible.

**Insights** — **Users felt overwhelmed by the Sleep Insight page.** Without a clear hierarchy, every data point competed equally for attention — users disengaged rather than interpret.

![Sound page event tracking data](../images/case-1/case%201%20-%20sound%20page%20event%20tracking%20data.webp)

*Event tracking shows users leaving the sound page without interacting — the drop-off begins at the first scroll, before premium content is even visible.*

![Sound interaction tracking](../images/case-1/case%201%20-%20sound%20interaction%20tracking.webp)

*Interaction data confirms nearly all taps cluster on row 1. Rows 2–5 register almost nothing — not because users preferred those four sounds, but because they never saw the rest.*

![Sleep app tickle flow App Store reviews](../images/case-1/case%201%20-%20sleep%20app%20tickle%20flow%20reviews.webp)

*App Store reviews from the trial (tickle) flow surface the same emotional pattern: users expected calm, encountered friction, and left before the premium offer landed.*

#### Mapping the Emotional Gap

User journey mapping revealed that **frustration was progressive**. Users arrived calm, and the UI systematically eroded that state across multiple friction points.

![User Journey Map — Emotional Gap](../images/case-1/case%201%20-%20user%20journey.webp)

---

**03 — Process**

### Two features. Two approaches.

Recognizing that Sleep Sounds and Sleep Insights had fundamentally different user needs, I ran them as separate design tracks — each with a methodology matched to the problem type.

**Track A — Sleep Sounds**

#### Linear, goal-oriented flow

Pre-sleep context means cognitive load must be near zero. I designed 5 flow concepts, critiqued them with the design director using an evaluation matrix, then built 3 interactive Figma prototypes.

5 flows → critique → 3 prototypes → usability testing (n=9)

**Track B — Sleep Insights**

#### Hierarchical information design

Morning reflection involves varied data needs. I used card sorting and qualitative interviews to surface which metrics users cared about most — and how they mentally categorized them.

Card sorting + interviews + visual preference testing (n=9)

**Research Design Note** — **Within-subjects design:** Each of 9 participants tested 2 of the 3 Sleep Sounds flows, then completed the card sorting task. This controlled for individual differences and reduced comparative bias — critical with a small sample where personality variance would otherwise distort results.

![User testing preference scores](../images/case-1/case%201%20-%20User%20Testing%20Preference.webp)

*Visual preference testing (n=9) showed a clear lean toward Flow 3's consolidated layout, giving the design rationale quantitative grounding.*

![Card sorting step 1](../images/case-1/case%201%20-%20card%20sorting%20step%201.webp)

*Card sorting step 1: participants received 30 unlabeled metric cards and were asked to group them by perceived importance without prompting.*

![Card sorting step 2](../images/case-1/case%201%20-%20card%20sorting%20step%202.webp)

*Card sorting step 2: clusters emerged naturally. Total sleep time, schedule, and quality score consistently formed a primary group across all 9 participants.*

![Card sorting step 3](../images/case-1/case%201%20-%20card%20sorting%20step%203.webp)

*Card sorting step 3: finalized groupings confirmed the mental model — a clear hierarchy drove the Insight page redesign.*

---

**04 — The Key Decision**

### Three flows tested. One emerged clearly.

Each flow reflected a different navigation philosophy. Testing revealed not just which was faster, but **why the intuitive answer was wrong**.

![3 flows usability prototypes overview](../images/case-1/case%201%20-%203%20flows%20usability%20prototypes.webp)

**Flow 1: Manual Playlist Builder**

**Eliminated** — Users manually add sounds to a blank playlist. Maximum control, maximum steps.

**Cognitive load** — 82%

**Task speed** — 30%

**User satisfaction** — 48%

Failed: Users expected tap → immediate play. Timer units mixed minutes and hours. The "+" button was too hidden to find.

[Video — case 1 - Flow 1.mp4](../images/case-1/case%201%20-%20Flow%201.mp4)

**Flow 2: One-Click Category Player**

**Eliminated** — Select one sound from a category; system auto-generates a playlist. Fast, but ambiguous.

**Cognitive load** — 44%

**Task speed** — 60%

**User satisfaction** — 55%

Failed: No explicit Save/Done button. Users unsure if edits persisted. Good concept, incomplete execution.

[Video — case 1 - Flow 2.mp4](../images/case-1/case%201%20-%20Flow%202.mp4)

**Flow 3: Modular Control Panel**

**✦ Chosen** — Consolidated panel: timer, playback mode, and queue in one view. Fewer screens, smarter defaults.

**Cognitive load** — 28%

**Task speed** — 88%

**User satisfaction** — 84%

Won: Fastest time-to-sleep. Highest preference scores. Aligned with Tesler's Law — complexity transferred to the system, not the user.

[Video — case 1 - Flow 3.mp4](../images/case-1/case%201%20-%20Flow%203.mp4)

**The Design Judgment Call** — "The instinct was to give users more control. The data showed that at 11pm, control is the last thing they want."

Flow 1 scored highest in post-test preference surveys among power users — but performed worst on actual task completion speed. At bedtime, stated preferences don't predict behavior. Flow 3 resolved this by applying **Hick's Law**: reducing the number of choices at the moment of peak fatigue while keeping advanced options accessible, not hidden.

#### What users actually said

**Timer** — "For timer over '60 mins', either change units to hours or get rid of them. And the unit switches between minutes and hours in different screens: super confusing."

Participant #3 · Flow 1 + Flow 3

**Playback** — "When I play music, the playing screen should popup directly. I don't want to see a mini bottom sheet. Just show me I'm playing."

Participant #6 · Flow 1

**Navigation** — "I want to start tracking sleep directly on the sound page. Why do I have to go somewhere else?"

Participant #2 · Flow 2 + Flow 3

**Habit** — "Prefer all sounds were added to the playlist automatically, so I can just use switch button to switch sounds. I'm tired; I don't want to manage a queue."

Participant #8 · Flow 1 + Flow 2

![User interview quotes](../images/case-1/case%201%20-%20Interview%20quotes.webp)

*Interview synthesis: users arrived tired and ready to relax, but the interface demanded cognitive effort before they could start.*

![Open-ended survey answers](../images/case-1/case%201%20-%20openend%20answers.webp)

*Open-ended responses clustered around three themes: navigating the sound library, configuring the timer, and tracking state uncertainty.*

![Open-ended question analysis](../images/case-1/case%201%20-%20Usability%20test%20openend%20question%20analysis.webp)

*Coded analysis: timer confusion and playback uncertainty account for over half of all negative mentions across 9 sessions.*

![Usability test quantitative results](../images/case-1/case%201%20-%20Usability%20test%20data%20result.webp)

*Quantitative results: task completion speed and error rates across all three flows — the performance gap between Flow 3 and Flow 1 is starkest at step 2.*

![Sleep Insights page — data visualization feedback](../images/case-1/case%201%20-%20Insight%20page%20data%20visualization%20feedback.webp)

*Insight page feedback: users wanted a clearer hierarchy — glanceable summary first, detailed breakdown on demand. Card sorting guided the restructure.*

---

**04b — Design Rationale**

### The frameworks that anchored the decisions

⚡

**Hick's Law → Fewer choices at peak fatigue** — Laws of UX · Hick's Law

The bedtime context demands choice reduction. Pre-set queues and smart defaults minimize decision points precisely when users have the least capacity. This is why Flow 3 outperformed Flow 1 in behavior even when users claimed to want control.

🔬

**Tesler's Law → Transfer complexity to the system** — Laws of UX · Tesler's Law (Conservation of Complexity)

The complexity of managing a sleep sound queue doesn't disappear; it either lives in the UI or the system's logic. Auto-generating a playlist from the selected category moves that complexity to the backend, letting the user experience feel effortless.

👁

Progressive Disclosure → Insight hierarchy that respects attention

Nielsen Norman Group · Progressive Disclosure Pattern

Card sorting revealed users prioritized total sleep time, sleep schedule, and quality score above all else. I restructured the Insight page: glanceable summary first, detailed breakdown on demand. Supported both the casual checker and the data-driven user.

🎯

**Von Restorff Effect → Breaking the top-4 trap** — Laws of UX · Von Restorff Effect (Isolation Effect)

The original grid created strong visual anchoring to the first row. The redesign introduced category-based navigation with visual differentiation, distributing attention across the catalogue and surfacing premium content that was previously invisible.

🔁

**Goal-Gradient Effect → Closing the feedback loop** — Laws of UX · Goal-Gradient Effect

The insight page had no continuity with the previous night's session. Surfacing a direct connection — "last night you played Rain Forest for 47 minutes" — reinforced habit formation and gave users a concrete reason to return.

---

**05 — The Solution**

### From friction to flow

The redesign centered on two convictions: Sleep Sounds should require fewer decisions, and Sleep Insights should surface fewer — but more meaningful — data points.

#### Before → After

Before — Sleep Sounds

After — Sleep Sounds

Tap sound → Add to playlist → Navigate to player → Configure → Start sleep mode *(5+ steps)*

Tap sound → Immediate preview → "Track My Sleep" inline *(2 steps)*

Timer with mixed units (minutes and hours). Short presets (5, 10 min) users called "useless".

Standardized labels ("1 hr 30 min"). Presets in 15–60 min range. Remaining time always visible.

Auto vs. Repeat icons unfamiliar. Playback state unclear. Album art static.

Iconography aligned to music app conventions. Auto-play as clear ON/OFF toggle. Animated album art while playing.

Premium sounds buried below fold. Top 4 monopolized all interaction. No queue auto-generated.

Category-based navigation. Auto-generated queue from selected category. "Track My Sleep" shortcut embedded in player view.

**Sleep Sounds Redesign**

#### A sound library that feels like a record crate

Category-based navigation with auto-generated queues means users tap once and drift toward sleep — without managing a playlist.

- →Tap-to-play as default; not add-to-playlist
- →30s preview for free users → natural premium pitch moment
- →"Track My Sleep" CTA embedded in player view
- →Screen auto-dims in sleep mode

**Sound → Sleep Tracking Handoff**

#### The moment the ritual starts

The "Track My Sleep" CTA is embedded directly in the player view — no navigation required. Once a sound starts, tracking is one tap away, placed where attention already is.

- →Player enters ambient dim mode on sleep start — screen near-zero brightness
- →Wake tap remains accessible without fully exiting sleep mode
- →Sound and tracking session run seamlessly — no mode switch friction

**Sleep Insights Redesign**

#### Data that answers instead of overwhelms

The redesigned Insight page resolves two core problems: no clear entry point, and no hierarchy. The new structure starts with selection, then surfaces what matters most — without burying users in data upfront.

- →Insight list as entry point — users first select a specific tracked sleep session or nap before viewing any data
- →Comprehensive sleep report and sleep phase breakdown shown by default — the most meaningful data, no scrolling required
- →Weekly and monthly trends accessible via top navigation — detailed analysis one tap away without cluttering the main view
- →Contextual data cards with supporting text, timestamped snoring, and a redesigned Sleep Balance chart — replacing hard-to-interpret flat metrics

1 Old — Insight page 2 New — Insight page 3 Old — Data cards 4 New — Data cards

![Old Sleep Insight design — all metrics on one page with no priority hierarchy](../images/case-1/case%201%20-%20old%20sleep%20insight%20design.webp)

![New Sleep Insight design — progressive disclosure with insight list and tiered navigation](../images/case-1/case%201%20-%20new%20sleep%20insight%20design.webp)

![Old data visualization cards — simple cards lacking supporting text](../images/case-1/case%201%20-%20old%20sleep%20insight%20data%20cards.webp)

![New data visualization cards — contextual supporting text, timestamped snoring, sleep balance chart](../images/case-1/case%201%20-%20new%20sleep%20insight%20data%20cards.webp)

---

**06 — Impact**

### Numbers that validated the ritual

The post-launch metrics told a coherent story — not just individual feature wins, but evidence that the end-to-end experience was working as a connected system.

⚠

All metrics below reflect the **Sleep Sounds redesign only**, which shipped in this engagement. The Sleep Insights redesign was completed at the design level but remains in the development pipeline — its impact data is not yet available.

**Business · Premium Conversion**

**+61%** — Increase in sound-to-pitch trigger rate. More users reaching the premium offer — driven by auto-play previews surfacing premium content naturally.

Sound-to-pitch trigger rate ↑

**Business · Renewal Conversion**

**4.5% → 7.2%** — Start Paid Rate increased +60%. Users who experienced the redesigned flow converted to paid subscriptions at a meaningfully higher rate.

+60% relative increase in Start Paid Rate

**Usability · Flow Completion**

**70% → 90%** — Flow success rate improved 20 percentage points — from a majority completing to near-universal task completion in the sound-to-sleep-mode flow.

Sound selection → sleep mode

**Usability · Task Efficiency**

**−22s** — 22 seconds removed from the sound selection task. In a bedtime context, 22 seconds of friction reduction is emotionally significant — the difference between a calm start and an anxious one.

Task completion time ↓

**What the numbers don't show** — 80% of users found playback controls more intuitive post-redesign — the qualitative signal that the system's model now matched users' mental models.

The ~30% increase in Trial Start Rate shows users weren't just completing the task faster — they were **choosing to go deeper** into the premium experience. That's habit formation, not just usability improvement.

---

**07 — Reflection**

### What I carry forward

Not general lessons. Things I learned specifically from the moment this project challenged me.

**01**

**Stated preferences lie at bedtime** — Users said they wanted more control. Timed task data showed they performed best with fewer choices. In high-fatigue contexts, behavior and stated preference diverge sharply — which is why within-subjects testing was the right methodology, not just a survey.

**02**

**Feature scope ≠ design scope** — The PM scoped this as "two feature redesigns." The design scope turned out to be a nightly ritual. Running a user journey map before touching any screen unlocked the insight that these features needed to feel continuous, not independent.

**03**

**Shipping half beats waiting for perfect** — Sleep Sounds launched; Sleep Insights went into the pipeline. The instinct to hold both back was real. But launching with strong data created organizational confidence for the Insights work to follow. Sequenced shipping is a design decision, not just an engineering one.
