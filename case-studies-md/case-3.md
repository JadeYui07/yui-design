# One Language, Thirty Apps — Yuzhuo Zhang

**Product Design · Cross-Platform Design System**

## One Language, Thirty Apps.

A unified global design system for 30 iOS and Android apps, built by 2 designers in 2 months, from first principles.

**Role**

**Mobile UX Lead**

**Timeline**

**Jun – Jul 2024**

**Platforms**

**iOS & Android**

**Team**

**2 Designers**

**screen.background.neutral-base**

**button.background.primary-bold**

**card.content.error-soft**

**line.neutral-soft** — When we started, 30 apps shared a product org and nothing else.

2 separate design systems, one per platform, never speaking to each other

5 designers on the team, only 2 actively maintaining design files

0 shared token vocabulary between iOS, Android, and engineering

**01 · The Trigger**

### When two worlds had to become one

When I joined there was no design system at all. Every app ran on its own styles and fonts. Even inside the same SF family, each product picked its own sizes and weights, and nothing governed the choices.

In the second year we admitted this could not continue. My co-designer and I each built a system, one for iOS and one for Android. Each worked on its own. They were still two languages spoken in two separate rooms.

**Then the strategy shifted.** The iOS and Android dev teams were now expected to build cross-platform apps together. At that point our two systems stopped being merely inefficient and became a problem in the architecture, because adopting either one would bake that platform's assumptions into products meant for both.

We had one choice: rebuild from a shared foundation.

![Old design system — iOS and Android](../images/case-3/case%203%20-%20Old%20design%20system.webp)

**02 · The Reframe**

### Not a missing system. A missing shared language.

"An iOS designer said 'primary blue'. A developer said 'surface container'. An Android designer said 'theme color'. They meant the same thing, and none of them knew it."

The problem was not that we lacked a design system. We had two. The problem was that every discipline had grown its own shorthand, so when the teams finally had to work together, most of the effort went into translation.

A new cross-platform design system would only solve the problem if it gave everyone a **single, unambiguous vocabulary**. That meant token architecture wasn't a technical question. It was a *communication design problem*.

screen.background.neutral-base button.background.primary-bold status.error-base line.neutral-soft state.disabled-70

**03 · The Hardest Call**

### Two philosophies. Three weeks. One token system.

This was the most contested part of the project. My co-designer and I each developed a naming architecture independently, then spent nearly three weeks debating, researching, and aligning with engineering. We studied Material 3, Atlassian's token library, and W3C token formats.

The fundamental question: **should a token name describe where it's used, or how it looks?**

**Idea 1 · Element-anchored**

**Type · Intent · Prominence**

-type What element this color belongs to (surface, button, outline…)

-intent Semantic purpose (neutral, theme, warning, error…)

-prominence Hierarchy level (primary, secondary, tertiary)

-state Interaction state (focused, pressed, disabled…)

surface.theme.primary.light

button.error.primary.pressed

✕ Color vocabulary too narrow for 30 diverse app styles

**Idea 2 · Space × Layer × Tone … Selected**

**Zone · Layer · Tone × 5** — .zone Where in UI space (screen, card, button, dialog…)

.layer Which visual layer (background, content, outline, overlay)

.tone Semantic color × 5 intensity steps: deep / bold / base / soft / light

-variation Prominence modifier (highest / high / low / lowest)

button.background.primary-bold

card.content.error-soft

screen.background.neutral-base

✓ Wide tonal range supports diverse app styles. Token names explain themselves.

**Why we didn't adopt Material 3**

**M3's strengths**

- High developer familiarity, since engineers already knew container and surface naming
- Excellent reuse rates; fewer tokens to maintain
- Well-documented, industry-proven structure

**Why it didn't fit our context**

- Container and surface naming squeezes the color vocabulary into too few slots for 30 apps with distinct identities
- M3's semantic layer assumes a single brand palette. Our apps do not share a brand.
- Designers found token names non-descriptive outside Material's own ecosystem

**The Final Architecture**

**Primitive layer** — Raw color values with neutral names: **red-50, blue-300, neutral-700.** Never used directly in product code. They are the source of truth that semantic tokens point at.

**Semantic layer** — Contextual tokens named by **purpose, not hue** — called *Local Colors*. Each token communicates meaning to designers and developers without guesswork, and maps directly to both light and dark themes.

Background · On Background · Scrim · On Scrim Primary · On Primary · Secondary · On Secondary · Tertiary · On Tertiary Error · On Error · Success · On Success · Warning · On Warning Disabled · Pressed · Selected · Outline · Divider

**One system, both platforms** — Rather than separate iOS and Android token sets, we output **one unified token library.** Engineering on both platforms references identical color vocabulary.

**Deliberate simplification** — After engineering alignment, the Idea 2 structure was **intentionally pruned.** Dev wanted a high reuse rate and we wanted names that read clearly. Both survived the cut.

**03b · Local Colors**

### Semantic tokens named by purpose.

Local Colors are semantic tokens that represent how colors are used in context throughout the product interface. Instead of defining a specific hue, each Local Color communicates **purpose** and **meaning**.

The naming rules follow a consistent hierarchy: surface tokens (Background, Scrim) anchor the canvas, role tokens (Primary, Secondary, Tertiary) carry brand intent, and status tokens (Error, Success, Warning) communicate state. Every token has a paired On {Token} for text and icons placed on top of it.

That structure keeps color usage consistent across all 30 apps. Designers and developers use the same vocabulary whether they are building for light mode, dark mode, iOS or Android.

Background On Background Scrim On Scrim Primary On Primary Secondary On Secondary Tertiary On Tertiary Error On Error Success On Success Warning On Warning Disabled Pressed Selected Outline Divider

![Local Color Structure — full token set](../images/case-3/case%203%20-%20Local%20colors%20final.webp)

**04 · Font Role System**

### Not a type scale. A set of roles.

Cross-platform typography usually gets solved by mapping font sizes. We specified what the text should do instead of what it should look like.

The system defines seven roles: Display, Headline, Title, Subtitle, Body, Label and Button. Each one has a job. iOS and Android use the same role names and render them with the right font family underneath.

A designer starting a new app no longer asks "17px or 18px?" They ask whether the text is doing a Title job or a Headline job, and the answer holds across every app and both platforms.

![Font Role documentation — 7 roles](../images/case-3/case%203%20-%20Font%20Role.webp)

iOS · Android

**Display** — Very large text for banners, hero sections and promotional content, sized to be the first thing you see.

![Display role — app screenshot](../images/case-3/case%203%20-%20Font%20Role%20Display.webp)

iOS · Android

**Headline** — Highlights **major sections** or content areas. Large and bold enough to establish hierarchy without competing with Display text.

![Headline role](../images/case-3/case%203%20-%20Font%20Role%20Headline.webp)

iOS · Android

**Title** — Identifies **pages, screens,** or card-level content with medium emphasis. Balances prominence and readability.

![Title role](../images/case-3/case%203%20-%20Font%20Role%20Title.webp)

iOS · Android

**Subtitle** — Provides **supporting context** under a headline or title. Typically smaller and lighter in weight.

![Subtitle role](../images/case-3/case%203%20-%20Font%20Role%20Subtitle.webp)

iOS · Android

**Body** — Primary text style for **paragraphs and descriptions.** Optimized for clarity at reading sizes.

![Body role](../images/case-3/case%203%20-%20Font%20Role%20Body.webp)

iOS · Android

**Label** — Short descriptors: form labels, tags, chips, helper text.

![Label role](../images/case-3/case%203%20-%20Font%20Role%20Label.webp)

iOS · Android

**Button** — For **interactive elements** like buttons and CTAs. Bold or medium weight, sized for legibility inside UI components.

![Button role](../images/case-3/case%203%20-%20Font%20Role%20Button.webp)

**Why Inter?**

#### A font that disappears into both platforms.

The obvious choices were SF Pro (iOS native) and Roboto (Android native). Either one picks a side: Android users notice SF Pro, iOS users notice Roboto. We needed something neutral that stayed legible on both.

We chose Inter because its core metrics, x-height, stroke width, letter spacing and line height, sit very close to both SF Pro and Roboto. Users don't notice it is a different font. They notice the text is easy to read.

**iOS Native**

**SF Pro** — The quick brown fox jumps over the lazy dog

**Line height · 1.5 × size**

**Letter spacing · Auto (optical)**

**x-height · High**

**Platform · Apple only** — Apple's system font. Excellent on iOS, but the license does not allow it on Android or on the web outside Apple's ecosystem.

**Android Native**

**Roboto** — The quick brown fox jumps over the lazy dog

**Line height · 1.5 × size**

**Letter spacing · 0–0.03em**

**x-height · High**

**Platform · Android / Open** — Google's system font. Slightly wider letterforms. Reads as "Android" to iOS users, which breaks the neutrality we needed.

**✦ Selected**

**Inter** — The quick brown fox jumps over the lazy dog

**Line height 1.5 × size**

**Letter spacing -0.01 – 0em**

**x-height High (≈ SF Pro)**

**Platform iOS + Android + Web** — Metrics nearly identical to SF Pro and Roboto, consistent rendering on both platforms, open license. Nobody feels like they are using the other platform's app.

**05 · Platform Tensions**

### Unified tokens. Respected conventions.

Unifying iOS and Android at the token layer raised a real question. What do you do when the two platforms have different interaction patterns that their users already know by heart?

The search bar was the clearest example. Android users expect a visible focus state that tells them the field is active. iOS users tap and start typing, so the same indicator feels redundant.

**Our decision:** the token layer stays unified and the component layer follows platform convention. Tokens govern the color vocabulary, components govern how things behave. That split is also Jakob's Law applied to a system rather than a screen.

![iOS vs Android search component comparison](../images/case-3/case%203%20-%20Search%20Bar%20comparison.webp)

**Principle Applied** — **Jakob's Law** — people spend most of their time in other apps, so match the conventions they already know, even inside a unified system.

**06 · Component Library**

### Built for reuse. Sourced from evidence.

We did not guess at the component list. We cross-referenced Material 3, the iOS Human Interface Guidelines and Tencent's design system, then checked that against an audit of which components actually appeared most often across the 30 apps. What survived is a small set of building blocks that covers the interaction patterns we use, and not much else.

🔷 Basic UI 5

›Button</>

›FAB</>

›Divider</>

›Chip (Tag)</>

›Image</>

🧭 Navigation 5

›NavBar (Top Bar)</>

›TabBar (Bottom Nav)</>

›Tabs</>

›Segmented Picker</>

›Step Indicator</>

✏️ Input 11

›Checkbox</>

›Radio</>

›Search</>

›Switch (Toggle)</>

›Slider</>

›Text Input</>

›Text Area</>

›Dropdown Menu</>

›Wheel Picker</>

›Date/Time Picker</>

›Rate</>

📊 Data Display 8

›Avatar</>

›Badge</>

›Cell</>

›Swipe Cell</>

›News</>

›Progress</>

›Pagination</>

›Carousel</>

💬 Feedback 5

›Action Sheet</>

›Dialog</>

›Notice Bar (Message)</>

›Bottom Sheet (Modal)</>

›Tooltips</>

📦 Others 6

›Guide</>

›Tutorial</>

›Event Card</>

›Ads</>

›Winback Offer</>

›Landing Page Template</>

**Platform-Specific Components**

#### Same function, different form.

Most components share one design. A handful carry so much platform meaning that forcing a single visual would break what users expect, so those keep separate iOS and Android variants inside the same system: same tokens, different component.

**Segmented Picker** — iOS Segmented Control is a pill-shaped, filled selection. Android's equivalent is a more linear, outlined chip-group. Using the wrong one reads as "ported."

![iOS variant](../images/case-3/case%203%20-%20iOS%20Segmented%20Picker.webp)

**iOS Segmented Control**

![Android variant](../images/case-3/case%203%20-%20Android%20Segmented%20Picker.webp)

**Android Chip Group**

**Search Bar** — Android users expect an explicit focus state when the field is active. iOS users tap directly and begin typing; a focus state feels redundant and creates noise in a familiar iOS context.

![No focus state](../images/case-3/case%203%20-%20iOS%20Search.webp)

**iOS Direct input**

![With focus state](../images/case-3/case%203%20-%20Android%20Search.webp)

**Android Focus indicator**

**Switch (Toggle)** — iOS switch is larger, with a white thumb and smooth slide. Android's M3 switch uses a smaller thumb that grows on press, with a distinct track shape. Each one is instantly recognizable on its home platform, and slightly wrong on the other.

![iOS switch](../images/case-3/case%203%20-%20iOS%20Toggle.webp)

**iOS UISwitch**

![Android switch](../images/case-3/case%203%20-%20Android%20Toggle.webp)

**Android M3 Switch**

**App Store / Play Store Event Card** — App Store and Google Play have distinct promotional card formats and aspect ratio requirements. Using one format on both stores risks rejection or poor display in the app's storefront listing.

![App Store format](../images/case-3/case%203%20-%20iOS%20Event%20Card.webp)

**iOS App Store Event**

![Play Store format](../images/case-3/case%203%20-%20Android%20Event%20Card.webp)

**Android Play Store Event**

**07 · Deliberate Constraints**

### What we chose not to build.

The instinct with design systems is to cover everything. We went the other way. Our first-generation systems specified so much that they became a ceiling, and we did not want to repeat that.

**Out of Scope**

**Dark Mode** — Our 30 apps look very different from each other. Some are dark-mode-first, some have a single dark page inside a light app. Baking dark and light into the global system would have forced a consistency that isn't real, and designers would have inherited wrong values or worked around the system.

**Lesson from v1:** Our first-gen systems included dark mode tokens. On apps with unusual mode logic, designers found them constraining and bypassed them, which defeated the point.

**Out of Scope**

**Shadows & Effects** — Shadow and blur depend on the style of the product. A food delivery app and a fintech dashboard need different elevation logic, and standardizing it would have flattened the variety our creative director wanted to keep.

**Design principle:** A global system should govern shared logic and leave the personality to the product. Effects belong to the app.

"A system that controls too much becomes a ceiling. We built a foundation — then got out of the way."

**08 · Results**

### What changed.

5 new apps launched cross-platform from day one. VQA issue rate down from ~95% to ~80%. Engineering on iOS and Android now reference identical color names.

VQA Issue Rate · Before vs After System Deployment

**Before**

****~95%****

**After**

****~80%** · spacing remains the open problem** — "I don't need to ask what color value to use anymore."

Engineering · iOS team

"Switching from light to dark is just a token swap now."

Engineering · Android team

**Adjacent Impact** — The motion team, who make the promotional videos and animations, said the closer match between design and shipped product cut their revision cycles. When the product looks like the design, they can pull UI references without correcting them by hand.

**09 · Reflection**

### What we'd do differently.

**01**

**Spacing should have been in scope** — VQA data shows spacing is now the most common failure. Color and typography are settled, but without shared spacing tokens the handoff still drifts. Spacing tokens are first in the next iteration.

**02**

**Bring engineering into the token architecture debate earlier** — Two designers spent nearly three weeks debating Idea 1 against Idea 2. Once engineering joined the conversation, their priorities of reuse rate and simplicity settled it within days. That conversation belonged in week one.

**03**

**The constraint strategy was the right call** — Leaving dark mode and effects out felt like a limitation at the time. It is the reason teams adopted the system. Products with their own visual needs took the token foundation and built their personality on top of it.
