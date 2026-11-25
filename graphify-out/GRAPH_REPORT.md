# Graph Report - FalconsWebsite  (2026-08-30)

## Corpus Check
- 43 files · ~900,090 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 142 nodes · 187 edges · 13 communities (12 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7619af15`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]

## God Nodes (most connected - your core abstractions)
1. `flightLog` - 4 edges
2. `contact` - 4 edges
3. `scripts` - 4 edges
4. `useClickSpark()` - 3 edges
5. `planeSlugOf()` - 2 edges
6. `Gallery()` - 2 edges
7. `Hero()` - 2 edges
8. `stats` - 2 edges
9. `subteams` - 2 edges
10. `GalleryItem` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Hero()` --calls--> `useClickSpark()`  [EXTRACTED]
  src/components/Hero.tsx → src/components/useClickSpark.tsx

## Import Cycles
- None detected.

## Communities (13 total, 1 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.14
Nodes (4): KONAMI, Plane, WANDER_PATH, testimonials

### Community 1 - "Community 1"
Cohesion: 0.10
Nodes (20): dependencies, animejs, motion, react, react-dom, devDependencies, @types/animejs, @types/react (+12 more)

### Community 2 - "Community 2"
Cohesion: 0.12
Nodes (9): Hero(), lineVariants, wordVariants, PALETTES, Star, COMPASS, Spark, SPARK_COLORS (+1 more)

### Community 3 - "Community 3"
Cohesion: 0.14
Nodes (5): results, specs, lineVariants, wordTransition, wordVariants

### Community 4 - "Community 4"
Cohesion: 0.18
Nodes (5): Hue, HUES, Mote, COLORS, SPRING_CONFIGS

### Community 5 - "Community 5"
Cohesion: 0.17
Nodes (9): P0, P1, P2, categories, CATEGORY_COLOR, Gallery(), planeSlugOf(), gallery (+1 more)

### Community 6 - "Community 6"
Cohesion: 0.15
Nodes (7): contact, flightLog, FlightLogEntry, sponsorProof, sponsors, sponsorWays, Testimonial

### Community 11 - "Community 11"
Cohesion: 0.22
Nodes (3): TRANSITIONS, VARIANTS, stats

### Community 12 - "Community 12"
Cohesion: 0.29
Nodes (3): GRAPHICS, DESK_COLOR, subteams

## Knowledge Gaps
- **50 isolated node(s):** `KONAMI`, `WANDER_PATH`, `Plane`, `specs`, `results` (+45 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `KONAMI`, `WANDER_PATH`, `Plane` to the rest of the system?**
  _50 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.13725490196078433 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.12418300653594772 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.14166666666666666 - nodes in this community are weakly interconnected._