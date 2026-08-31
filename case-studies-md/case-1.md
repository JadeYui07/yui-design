# Sleep Tracker — Yuzhuo Zhang

**iOS · Product Design · Sleep Tracker App**

## Redesigning a broken bedtime ritual

People had a sleep app, but nothing in it added up to a bedtime routine. I redesigned the whole wind-down flow so the pieces worked as one habit. Premium conversion went up 61%.

**Role** Lead Product Designer **Platform** iOS **Scope** Sleep Sounds + Sleep Insights **Team** 1 PM · 1 Dir · 2 Eng · 1 BI

**+61%** — **subscription conversion lift** after the redesign shipped.

+30% trial starts · 70→90% task success · 4.5→7.2% paid rate · −22s per session

**01 — Context**

### A product built around sleep that couldn't feel like sleep

The app had good pieces: curated soundscapes, detailed health data, premium content. They just never connected. People would open a sound, dismiss an insight notification, and leave. Nothing linked one visit to the next.

**Sleep Sounds**

#### The wind-down layer

People use this every night, right before sleep, when they have the least patience for decisions. It is also where the premium offer sits.

**Sleep Insights**

#### The morning layer

A dense page people read after waking. Some want one number, others want the full breakdown.

---

**02 — The Problem**

### The data told a story about disconnection

"I just want to relax."

— Consistent user sentiment across tickle flow feedback & internal interviews

People came to the app tired and wanting to switch off. The interface asked them to make decisions first, and the calm they came for went with it.

**56%** — **Only 56% of users interacted with sounds after opening the screen.** Nearly half opened the feature and left without playing anything. They had found it. Something in the screen stopped them from using it.

**60%+** — **Over 60% of users never scrolled past the first visible row.** The catalogue had dozens of premium sounds. Users were only seeing four.

**Top 4** — **Interactions clustered overwhelmingly around just 4 sounds.** That was not preference. The first row anchored attention (Von Restorff Effect), and the rest of the catalogue may as well not have existed, premium sounds included.

**Insights** — **Users felt overwhelmed by the Sleep Insight page.** With no hierarchy, every data point competed for attention, so people gave up instead of reading it.

![Sound page event tracking data](../images/case-1/case%201%20-%20sound%20page%20event%20tracking%20data.webp)

*Event tracking shows users leaving the sound page without interacting. The drop-off starts at the first scroll, before any premium content is visible.*

![Sound interaction tracking](../images/case-1/case%201%20-%20sound%20interaction%20tracking.webp)

*Interaction data confirms nearly all taps cluster on row 1. Rows 2–5 register almost nothing, and not because users preferred those four sounds. They never saw the rest.*

![Sleep app tickle flow App Store reviews](../images/case-1/case%201%20-%20sleep%20app%20tickle%20flow%20reviews.webp)

*App Store reviews from the trial (tickle) flow surface the same emotional pattern: users expected calm, encountered friction, and left before the premium offer landed.*

#### Mapping the Emotional Gap

The journey map showed frustration building in stages. People arrived calm, and each friction point took a little of that away.

![User Journey Map — Emotional Gap](../images/case-1/case%201%20-%20user%20journey.webp)

---

**03 — Process**

### Two features. Two approaches.

Sleep Sounds and Sleep Insights had different problems, so I ran them as two tracks, each with a method that fit the problem.

**Track A · Sleep Sounds**

#### Linear, goal-oriented flow

Pre-sleep context means cognitive load must be near zero. I designed 5 flow concepts, critiqued them with the design director using an evaluation matrix, then built 3 interactive Figma prototypes.

5 flows → critique → 3 prototypes → usability testing (n=9)

**Track B · Sleep Insights**

#### Hierarchical information design

Morning reflection involves varied data needs. I used card sorting and interviews to find out which metrics users cared about most, and how they grouped them in their heads.

Card sorting + interviews + visual preference testing (n=9)

**Research Design Note** — **Within-subjects design:** Each of 9 participants tested 2 of the 3 Sleep Sounds flows, then completed the card sorting task. This controlled for individual differences and reduced comparative bias, which matters with a sample this small, where one participant's temperament can skew the result.

![User testing preference scores](../images/case-1/case%201%20-%20User%20Testing%20Preference.webp)

*Visual preference testing (n=9) showed a clear lean toward Flow 3's consolidated layout, giving the design rationale quantitative grounding.*

![Card sorting step 1](../images/case-1/case%201%20-%20card%20sorting%20step%201.webp)

*Card sorting step 1: participants received 30 unlabeled metric cards and were asked to group them by perceived importance without prompting.*

![Card sorting step 2](../images/case-1/case%201%20-%20card%20sorting%20step%202.webp)

*Card sorting step 2: clusters emerged naturally. Total sleep time, schedule, and quality score consistently formed a primary group across all 9 participants.*

![Card sorting step 3](../images/case-1/case%201%20-%20card%20sorting%20step%203.webp)

*Card sorting step 3: the final groupings confirmed the mental model, and that hierarchy drove the Insight page redesign.*

---

**04 · The Key Decision**

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

Won: Fastest time to sleep and the highest preference scores. The complexity moved into the system instead of onto the user (Tesler's Law).

[Video — case 1 - Flow 3.mp4](../images/case-1/case%201%20-%20Flow%203.mp4)

**The Design Judgment Call** — "The instinct was to give users more control. The data showed that at 11pm, control is the last thing they want."

Flow 1 scored highest in post-test preference surveys among power users, and worst on actual task completion speed. At bedtime, what people say they want does not predict what they do. Flow 3 cut the number of choices at the point of peak fatigue (Hick's Law) and kept the advanced options one level down rather than hiding them.

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

*Quantitative results: task completion speed and error rates across all three flows. The gap between Flow 3 and Flow 1 is widest at step 2.*

![Sleep Insights page — data visualization feedback](../images/case-1/case%201%20-%20Insight%20page%20data%20visualization%20feedback.webp)

*Insight page feedback: users wanted a clearer hierarchy, with a glanceable summary first and the detailed breakdown on demand. Card sorting guided the restructure.*

---

**04b · Design Rationale**

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

The insight page had no connection to the previous night's session. A direct line back to it, "last night you played Rain Forest for 47 minutes," reinforces the habit and gives people a concrete reason to open the app again.

---

**05 — The Solution**

### From friction to flow

Two rules drove the redesign. Sleep Sounds should ask for fewer decisions, and Sleep Insights should show less data, chosen from what people said they actually read.

#### Before → After

Before · Sleep Sounds

After · Sleep Sounds

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

Category navigation with auto-generated queues means one tap and you drift off, with no playlist to manage.

- →Tap-to-play as default; not add-to-playlist
- →30s preview for free users, which is where the premium pitch lands
- →"Track My Sleep" CTA embedded in player view
- →Screen auto-dims in sleep mode

**Sound → Sleep Tracking Handoff**

#### The moment the ritual starts

The "Track My Sleep" button sits in the player view, so nobody has to navigate anywhere. Once a sound is playing, tracking is one tap away, in the place people are already looking.

- →Player dims to near-zero brightness when sleep starts
- →Wake tap remains accessible without fully exiting sleep mode
- →Sound and tracking run in one session, with no mode switch

**Sleep Insights Redesign**

#### Data that answers instead of overwhelms

The redesigned Insight page fixes two things: there was no clear way in, and nothing was ranked. The new structure starts by picking a session, then shows the few things people said they came for.

- →The insight list is the way in: pick a tracked session or nap before any data appears
- →Full sleep report and phase breakdown by default, so the data people asked for needs no scrolling
- →Weekly and monthly trends sit in the top navigation, one tap away from the main view
- →Data cards now carry supporting text, timestamped snoring and a redesigned Sleep Balance chart, replacing flat numbers nobody could interpret

1 Old — Insight page 2 New — Insight page 3 Old — Data cards 4 New — Data cards

![Old Sleep Insight design — all metrics on one page with no priority hierarchy](../images/case-1/case%201%20-%20old%20sleep%20insight%20design.webp)

![New Sleep Insight design — progressive disclosure with insight list and tiered navigation](../images/case-1/case%201%20-%20new%20sleep%20insight%20design.webp)

![Old data visualization cards — simple cards lacking supporting text](../images/case-1/case%201%20-%20old%20sleep%20insight%20data%20cards.webp)

![New data visualization cards — contextual supporting text, timestamped snoring, sleep balance chart](../images/case-1/case%201%20-%20new%20sleep%20insight%20data%20cards.webp)

---

**06 — Impact**

### Numbers that validated the ritual

The post-launch numbers moved together, which suggests the flow was working as one experience rather than as separate features.

⚠

All metrics below reflect the **Sleep Sounds redesign only**, which shipped in this engagement. The Sleep Insights redesign is finished as a design but still sits in the development pipeline, so there is no impact data for it yet.

**Business · Premium Conversion**

**+61%** — Increase in the sound-to-pitch trigger rate. More people reached the premium offer, because auto-play previews put premium sounds in front of them.

Sound-to-pitch trigger rate ↑

**Business · Renewal Conversion**

**4.5% → 7.2%** — Start Paid Rate increased 60%. People who went through the redesigned flow subscribed at a higher rate.

+60% relative increase in Start Paid Rate

**Usability · Flow Completion**

**70% → 90%** — Flow success rate improved 20 percentage points in the sound-to-sleep-mode flow, from a bare majority finishing to nearly everyone.

Sound selection → sleep mode

**Usability · Task Efficiency**

**−22s** — 22 seconds removed from the sound selection task. That is a long time to spend fiddling with a phone when you are trying to fall asleep.

Task completion time ↓

**What the numbers don't show** — 80% of users found the playback controls more intuitive after the redesign, which says the controls finally worked the way people expected them to.

The ~30% increase in Trial Start Rate says people were not only finishing the task faster, they were choosing to go further into the premium experience.

---

**07 — Reflection**

### What I carry forward

Not general lessons. The specific things this project taught me.

**01**

**Stated preferences lie at bedtime** — Users said they wanted more control. Timed task data showed they did better with fewer choices. When people are that tired, what they say and what they do come apart, which is why I tested within subjects instead of running a survey.

**02**

**Feature scope ≠ design scope** — The PM scoped this as "two feature redesigns." What it actually needed was one nightly routine. Mapping the journey before touching a screen is what showed the two features had to feel continuous.

**03**

**Shipping half beats waiting for perfect** — Sleep Sounds launched and Sleep Insights went into the pipeline. I wanted to hold both back until the whole thing was ready. Shipping the first half with good numbers is what bought the Insights work its slot, so the order things ship in was a design decision as much as an engineering one.
