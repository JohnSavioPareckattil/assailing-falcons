# Graph Report - FalconsWebsite  (2026-08-27)

## Corpus Check
- 24 files · ~916,533 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 65 nodes · 79 edges · 11 communities (7 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f346475a`
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
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]

## God Nodes (most connected - your core abstractions)
1. `scripts` - 4 edges
2. `contact` - 4 edges
3. `flightLog` - 3 edges
4. `subteams` - 2 edges
5. `GalleryItem` - 2 edges
6. `gallery` - 2 edges
7. `sponsorTiers` - 2 edges
8. `sponsors` - 2 edges
9. `private` - 1 edges
10. `dev` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (11 total, 4 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.40
Nodes (3): FlightLogEntry, stats, subteams

### Community 1 - "Community 1"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, preview, type, version

### Community 2 - "Community 2"
Cohesion: 0.14
Nodes (4): lineVariants, wordVariants, links, sponsors

### Community 5 - "Community 5"
Cohesion: 0.29
Nodes (7): devDependencies, @types/animejs, @types/react, @types/react-dom, typescript, vite, @vitejs/plugin-react

### Community 6 - "Community 6"
Cohesion: 0.40
Nodes (3): categories, gallery, GalleryItem

### Community 8 - "Community 8"
Cohesion: 0.40
Nodes (5): dependencies, animejs, motion, react, react-dom

## Knowledge Gaps
- **24 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+19 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 5` to `Community 1`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Community 8` to `Community 1`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _24 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._