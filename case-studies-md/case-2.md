# NOAA Live Weather Radar — Yuzhuo Zhang

Product Design · iOS · 2022–2024

## Designing for protective action, *not weather curiosity*

The original product showed people weather information. It did not help them trust it, work out what it meant, or decide what to do next. I led the redesign around a simpler promise: help people act before severe weather reaches them.

**Lead Product Designer** · Product strategy, interaction design, onboarding, hurricane tracking, alerts, and App Store promotion.

Lead Product Designer 0 → 1 rebuild iOS · Subscription Life-safety

Over two years the product went from one people **openly distrusted** to one they opened during real storms. See what changed in the signals →

---

**Role**

**Lead Product Designer**

**Product**

**NOAA Live Weather Radar · iOS**

**Timeline**

**2022–2024**

**Scope**

**0 → 1 rebuild and continued iteration**

**Product model**

**Subscription weather app**

**Primary users** — People monitoring severe weather for themselves and for the people they care about

---

01 · The stakes

### A product that lost trust on three levels at once.

The app broke down at the moment it was supposed to be most useful.

**01** — Functional trust

**The core features were hard to use** — Hurricane tracking sat among more than 35 interchangeable map layers. Smoke layers sometimes rendered nothing at all. Wind had color but no direction. The data was on screen, but nothing told you what it meant for you.

**02** — Reliability trust

**It failed under pressure** — Black screens on launch. A "Restore Purchases" button that did nothing visible. The product broke at the moment people needed it.

**03** — Commercial trust

**The commerce felt dishonest** — Purchased ratings, and a "50% off" promotion that moved the price from $9.99 to $6.99. Users noticed and said so in the reviews.

“I doubt the developer cares.”

— App Store review, pre-redesign

One sentence that summarized all three failures

Before fixing individual screens, I had to work out what the product should help people *do* when the stakes were high.

---

02 · The reframe

Severe weather was not a feature category. It was the reason people needed the product at all.

**Design tension** — The company was based in Florida, and hurricanes carried much of what the product sold on. But hurricanes are seasonal and they only hit part of the country. Someone in California, Kansas, or Minnesota needs a different reason to care, and needs it all year.

Weather curiosity

“What is happening?”

Protective action

“What does this mean for me, and what should I do next?”

Design principle

Make the threat personal, make the information actionable, and make the source of truth visible.

---

03 · Three decisions

### One mental model, carried through the product.

**01 ──**

**Make severe weather personal** — The first screen had to answer: “Why should I care right now?”

Instead of a generic welcome or a feature list, onboarding used the person's region to show a threat that applied to them: wildfire alerts in California, tornado watches in Oklahoma, hurricane warnings in Florida.

That turned setup into a chain where each ask earned the next one. The app needed location to show a threat near you, and notifications to reach you in time. By the last screen, subscribing read as the final step in protecting yourself rather than a separate sales pitch.

Relevant threat→Location permission

Location permission→Notification permission

Notification permission→Subscription

Constraint: the card had to be static, not animated. Every added megabyte cost us download conversion, so the copy, the hierarchy and the image had to do the work motion would have done.

![Onboarding flow: hurricane threat, location request, notification request, premium](../images/case-2/case%202%20-%20NOAA%20hurricane%20OB.webp)

*Onboarding · 4 screens. The threat comes first, and each permission request arrives only after the reason for it is on screen.*

![Onboarding variants for heat, tornado, hurricane, thunderstorm, fire, wind, flood, air quality and blizzard, in light and dark mode](../images/case-2/case%202%20-%20NOAA%20all%20severe%20weathers.webp)

*The same flow, built as a system: nine threat types across light and dark mode. Remote config matches region to threat, so the first screen is true wherever the app is opened.*

1 / 2

**02 ──**

**Turn awareness into a plan** — The hurricane tracker became a planning tool

Competitors showed a static snapshot: where the storm is now. I designed the tracker around a more useful question. *"If I leave tomorrow morning, what will it be like?"*

Dragging the time scrubber across forecast waypoints moved the cone, the category, the wind speed and the direction together, so time and severity stayed tied to each other instead of sitting in separate readouts. Color on the waypoints let you see the storm strengthening at a glance, and the labels kept the exact numbers for anyone making a real decision.

A static storm location→A time-based forecast

Isolated weather layers→One decision-oriented view

“Where is it?”→“What happens if I wait, or leave?”

![Hurricane tracker flow: map layer, storm list, storm modal, waypoint isolation, expanded detail](../images/case-2/case%202%20-%20NOAA%20hurriance%20tracker%20flow.webp)

Hurricane tracker · map layer → storm list → forecast detail. Selecting a waypoint isolates that moment in time: category, sustained wind, gusts and movement update together.

**03 ──**

**Protect people and places, not only the current user** — The unit of protection expanded from “me” to “people I care about”

People live through severe weather as households, not as individuals. Someone in Chicago may spend the week watching a storm move toward their parents in Florida. So Alerts split into two locations, Current and Favorite, with alerts grouped by city so it stayed obvious which place needed attention.

The alert detail view embedded the official NHC Seven-Day Graphical Tropical Weather Outlook instead of replacing it with our own interpretation. People making real decisions saw the same chart emergency managers see.

Design principle

When the stakes are high, people trust what they can check for themselves. A simpler interface is not enough on its own.

![Radar view for a saved location with an active hurricane watch banner](../images/case-2/case%202%20-%20NOAA%20different%20location%20alert%20on%20map.webp)

A saved location, in its own context. The active watch banner sits above the map for the place you are watching, not just the place you are standing in.

---

Supporting decision · Discovery

### The same promise continued into the App Store.

The hurricane-season App Store promotion used the product's own storm cones and paths, with copy written like a weather alert instead of generic weather imagery. Someone searching the App Store during hurricane season saw the same thing they would see inside the app.

![App Store Connect live events for Hurricane Idalia, Harold and Hilary](../images/case-2/case%202%20-%20NOAA%20App%20Store%20hurricane%20pomotion.webp)

App Store live events, shipped storm by storm: Idalia, Harold, Hilary. Each one ran inside that storm's own window.

Downloads went up about 30% during the promotion window.

---

04 · Outcomes

### Where the numbers ended up.

**4.4 → 4.7★** — App Store rating, after the redesign shipped

**~2% → ~6%** — Subscription conversion, peak during hurricane season

**≈ +30%** — Downloads during the hurricane-season promotion

**Since 2023** — [PCMAG Best Weather Apps](https://www.pcmag.com/picks/best-weather-apps)

How to read these numbers

- Rating and conversion are product-level numbers from two years of continuous work, not the result of any single screen.
- The download figure covers one seasonal campaign, measured inside the promotion window.
- PCMAG is an editorial pick, so it says the repositioning worked. It does not prove what caused it.

The app gives up to date info that affects my specific location. Exactly what I need when the networks just keep replaying the same news over and over.

— App Store review · October 9, 2024

Written during Hurricane Milton, hours before potential landfall

One review is not data. This one is here because it describes the app doing the job it was rebuilt to do.

---

05 · What I learned

The most important decision was choosing the right *mental model*.

The strongest work here was not a component or a screen. It was deciding that the product should help people **act** rather than watch the weather. Once that was settled, the rest of the decisions stopped pulling in different directions:

- Onboarding made the threat personally relevant.
- The tracker connected forecast changes to planning.
- Alerts expanded protection to the people and places users cared about.
- The source of critical information stayed visible.

When the stakes are high, people trust a product that tells them what is happening near them and what to do about it.

Want the rest?

This page covers the decisions. The research, the iterations and the edge cases are easier to talk through than to write up.

If you want the reasoning behind a specific decision, or how I approach life-safety work, I'm happy to walk through it.

Get in touch
