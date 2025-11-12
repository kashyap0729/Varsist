# Pricing Models

_All amounts in USD. Monthly figures unless noted._

## Model A — Fixed scope build plus flat managed ops

| Item                  | Details                                                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| When to use           | Clear scope, one production cluster, predictable load                                                                                 |
| Coverage              | IaC, GitOps, observability, backups, DR drill, upgrades, SLO management, incident response within agreed windows                      |
| Build fee one time    | Starter 60k to 90k • Growth 120k to 220k • Enterprise 250k to 500k+                                                                   |
| Managed ops per month | Starter 9k to 15k • Growth 18k to 35k • Enterprise 35k to 70k                                                                         |
| Add ons               | 24x7 on call plus 30 to 50 percent • Multi region DR plus 20 to 30 percent • Compliance evidence HIPAA or SOC 2 plus 15 to 25 percent |
| Pros                  | Simple, budgetable                                                                                                                    |
| Cons                  | Less elastic if ingest or scope grows                                                                                                 |
| Guardrails            | Changes and advanced queries are time and materials                                                                                   |

## Model B — Managed node fee plus percent of cloud spend with a cap

| Item               | Details                                                                         |
| ------------------ | ------------------------------------------------------------------------------- |
| When to use        | Multiple clusters or variable usage aligned to infra scale                      |
| Meters             | Node counts from GitOps inventory • Cloud spend tagged to ClickHouse namespaces |
| Per node per month | Data 900 to 1400 • Keeper 300 to 500 • Ingest or aux 400 to 700                 |
| Cloud percent      | 2 to 4 percent of scoped cloud bill, capped at 30k per month                    |
| Minimum monthly    | 15k floor                                                                       |
| Pros               | Tracks footprint, finance friendly                                              |
| Cons               | Requires clean cost allocation and tags                                         |
| Guardrails         | Hard cap on percent fee • Only tagged resources count                           |

## Model C — Volume based by ingest per day

| Item               | Details                                                                                               |
| ------------------ | ----------------------------------------------------------------------------------------------------- |
| When to use        | Single tenant analytics where ingest drives work                                                      |
| Platform retainer  | 12k per month covers SLOs, upgrades, one DR drill per quarter                                         |
| Variable by ingest | First 10 TB per day at 1.8k per TB per day • Next 40 TB at 1.2k • Above 50 TB at 0.8k                 |
| Examples           | 8 TB per day → 12k plus 14.4k equals 26.4k • 25 TB per day → 12k plus 10×1.8k plus 15×1.2k equals 39k |
| Pros               | Aligns with merges, compactions, tuning effort                                                        |
| Cons               | Needs trusted metering and seasonality review                                                         |
| Guardrails         | Floor 18k per month • Ceiling negotiated on 12 month terms                                            |

## Model D — SRE seat model plus SLA tiers

| Item        | Details                                                                                                                                            |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| When to use | Many environments or heavy change velocity                                                                                                         |
| Seat        | One senior SRE seat 17k per month covers about 8 to 12 data nodes depending on tier and change rate                                                |
| SLA uplifts | Gold p95 1 s, RPO 5 m, RTO 30 m plus 40 percent • Silver p95 1.5 s, RPO 10 m, RTO 1 h plus 20 percent • Bronze p95 2 s, RPO 15 m, RTO 2 h included |
| Pros        | Maps to staffing, scales up or down cleanly                                                                                                        |
| Cons        | Seat math can be abstract for procurement                                                                                                          |
| Guardrails  | Seat to node ratio in SOW • Monthly capacity reviews                                                                                               |

## Model E — Hybrid floor with higher of node or volume variable

| Item                    | Details                                                               |
| ----------------------- | --------------------------------------------------------------------- |
| When to use             | Uncertain growth path nodes vs ingest                                 |
| Floor                   | Platform floor 15k per month                                          |
| Variable A node based   | 600 per data node • 250 per aux node • 200 per keeper node            |
| Variable B volume based | 1.0k per TB per day up to 30 TB • 0.7k per TB per day after 30 TB     |
| Billing rule            | Bill the higher of Variable A or Variable B each month                |
| Pros                    | Protects margin and gives elasticity                                  |
| Cons                    | More bookkeeping across two meters                                    |
| Guardrails              | Inventory from GitOps for nodes • Prometheus metrics for volume meter |

## Model F — Outcome backed retainer with error budget credits

| Item        | Details                                                                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| When to use | Mature customers who prioritize SLO outcomes                                                                                 |
| Retainer    | 28k to 55k per month by footprint tier                                                                                       |
| Credits     | If monthly error budget burn exceeds 100 percent on any contracted SLO, issue 10 to 20 percent service credit for that month |
| Pros        | Incentive aligned, simple envelope                                                                                           |
| Cons        | Requires robust SLO telemetry and clear exclusions                                                                           |
| Guardrails  | Exclude upstream faults, planned changes, force majeure, documented change freezes                                           |

If you want, I can add a single comparison table across all six with your preferred meters and a pick list by risk posture.
