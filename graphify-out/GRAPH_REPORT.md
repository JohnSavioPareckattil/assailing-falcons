# Graph Report - FalconsWebsite  (2026-08-27)

## Corpus Check
- 20 files · ~254,179 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 33 nodes · 40 edges · 8 communities (2 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `828487a2`
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

## God Nodes (most connected - your core abstractions)
1. `flightLog` - 2 edges
2. `subteams` - 2 edges
3. `sponsors` - 2 edges
4. `leadership` - 2 edges
5. `contact` - 2 edges
6. `specs` - 1 edges
7. `lineVariants` - 1 edges
8. `wordVariants` - 1 edges
9. `links` - 1 edges
10. `stats` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (8 total, 6 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.28
Nodes (4): contact, FlightLogEntry, sponsors, stats

## Knowledge Gaps
- **6 isolated node(s):** `specs`, `lineVariants`, `wordVariants`, `links`, `stats` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `specs`, `lineVariants`, `wordVariants` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._