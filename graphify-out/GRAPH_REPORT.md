# Graph Report - FalconsWebsite  (2026-08-29)

## Corpus Check
- 36 files · ~949,622 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 109 nodes · 139 edges · 11 communities (8 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e4801d24`
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

## God Nodes (most connected - your core abstractions)
1. `contact` - 4 edges
2. `scripts` - 4 edges
3. `useClickSpark()` - 3 edges
4. `flightLog` - 3 edges
5. `Hero()` - 2 edges
6. `stats` - 2 edges
7. `subteams` - 2 edges
8. `GalleryItem` - 2 edges
9. `gallery` - 2 edges
10. `sponsorTiers` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Hero()` --calls--> `useClickSpark()`  [EXTRACTED]
  src/components/Hero.tsx → src/components/useClickSpark.tsx

## Import Cycles
- None detected.

## Communities (11 total, 3 thin omitted)

### Community 1 - "Community 1"
Cohesion: 0.14
Nodes (13): dependencies, animejs, motion, react, react-dom, name, private, scripts (+5 more)

### Community 2 - "Community 2"
Cohesion: 0.12
Nodes (9): Hero(), lineVariants, wordVariants, PALETTES, Star, COMPASS, Spark, SPARK_COLORS (+1 more)

### Community 4 - "Community 4"
Cohesion: 0.12
Nodes (5): COLORS, SPRING_CONFIGS, KONAMI, Plane, flightLog

### Community 5 - "Community 5"
Cohesion: 0.29
Nodes (7): devDependencies, @types/animejs, @types/react, @types/react-dom, typescript, vite, @vitejs/plugin-react

### Community 6 - "Community 6"
Cohesion: 0.11
Nodes (12): categories, TRANSITIONS, VARIANTS, contact, FlightLogEntry, gallery, GalleryItem, sponsors (+4 more)

## Knowledge Gaps
- **36 isolated node(s):** `COLORS`, `SPRING_CONFIGS`, `specs`, `categories`, `lineVariants` (+31 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 5` to `Community 1`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **What connects `COLORS`, `SPRING_CONFIGS`, `specs` to the rest of the system?**
  _36 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.12418300653594772 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `Community 6` be split into smaller, more focused modules?**
  _Cohesion score 0.11396011396011396 - nodes in this community are weakly interconnected._