# Homepage Overview

**Self hosted ClickHouse on your infrastructure.** We design, deploy, and operate ClickHouse inside your VPC. The goal is simple. Keep SQL analytics fast and predictable while cutting steady state cost compared with Snowflake or ClickHouse Cloud for append heavy workloads. We take full ownership of Kubernetes and ClickHouse lifecycle so you do not need to build a data engineering and infrastructure team first.

**What you get**

- Lower run rate in steady state. Typical target is thirty to sixty percent.
- p95 latency between three hundred milliseconds and three seconds on hot partitions when keys and parts are set correctly.
- Clear RPO and RTO. Baseline is fifteen minutes and two hours. Tighter tiers available.
- Git based change control and evidence of restores.

**Primary offerings**

- Advisory. Readiness, sizing, and schema design.
- Build. Production ClickHouse on EKS, GKE, or AKS with the Operator, Keeper quorum, GitOps, observability, and backup and restore.
- Migrate. From Snowflake or ClickHouse Cloud with backfill, dual write, query replay, then cutover.
- Operate. Managed SLOs, on call, upgrades, capacity planning, and monthly restore drills.

**Call to action**

Request a forty five minute architecture review. Ask for a TCO model using your ingest, retention, and query mix. Start a fixed scope pilot.

---

# About Us

**Mission**

Keep analytics fast and predictable at a cost you can audit. Run it where your data lives. Prove it with SLOs and restore drills.

**Background**

We have built and run stateful workloads on Kubernetes across clouds. We know the failure modes of merges, Keeper, storage, and upgrades. We package that into repeatable blueprints and runbooks.

**How we work**

- End to end ownership of Kubernetes and ClickHouse lifecycle in your VPC.
- Opinionated defaults with clear trade offs and a rollback path.
- Evidence over promises. Dashboards, alerts, restore proof, and postmortems are customer owned.

---

# Products and Services

## Advisory

**Outcomes**

- Readiness report and HLD. Keys, partitions, projections, and materialized views matched to the query mix.
- TCO model with scenarios. Storage tiers, merge efficiency, retention policy, and read amplification from joins.

**Scope**

- Schema and engine design. Partition and key strategy. Aggregations and projections. TTL to cold tier.
- Capacity and sizing. Shards and replicas by availability zone. Storage class and IO plan.
- Security and compliance posture. SSO and RBAC, secrets, audit, and policy as code.

## Build

**Outcomes**

- Green cluster in your account. Dashboards live. Backups passing. GitOps in place.

**Scope**

- Kubernetes. Dedicated node pools for data, Keeper, ingest. Anti affinity, topology spread, PDBs, and priority classes.
- Storage. NVMe for hot parts by default. Tier to S3, Blob, or GCS for cold via TTL. Alternative block storage where NVMe is not available.
- Networking and security. Private subnets. NetworkPolicies. OIDC SSO with RBAC and optional row level policies. Secrets through External Secrets Operator with KMS. Image signing and SBOM. Policy as code with Gatekeeper. Audit trails on.
- Observability. Prometheus, Grafana, Alertmanager, Loki, Tempo, and OTel with dashboards and alerts for queries, merges, Keeper, replicas, memory, disk, compactions, slow queries, and backup status.
- Backups and DR. BACKUP TO and clickhouse backup to object storage with cross region copy. Velero for cluster objects. Restore runbooks.

## Migrate

**Outcomes**

- Validated cutover from Snowflake or ClickHouse Cloud with measured latency and cost.

**Steps**

1. Plan the mapping and SLAs.
2. Backfill to columnar on object storage then load to ClickHouse.
3. Enable dual writes with Kafka or Debezium for OLTP sources.
4. Replay and compare queries.
5. Cut over reads when counts and checksums match. Keep a shadow run for one week.

## Operate

**Outcomes**

- SLO backed managed operations in your VPC.

**Scope**

- On call with severity matrix and error budgets.
- Upgrades for Kubernetes and ClickHouse on a clear cadence with staging preflight and rollback.
- Capacity and performance tuning. Merge backlog under control. Replica lag within target.
- Monthly restore game days with evidence.

## Enablement

Workshops, runbooks, and handover. Co manage is available.

## Pricing and plans

Cloud spend stays in your account. Below ranges are illustrative.

| Package    | Scope snapshot                                                                                                    | One time USD      | Managed per month |
| ---------- | ----------------------------------------------------------------------------------------------------------------- | ----------------- | ----------------- |
| Starter    | Two by two shard replica. Three Keeper. Single region. Three data sources. Base dashboards. Monthly restore test. | 60k to 90k        | 9k to 15k         |
| Growth     | Four by two. Kafka and Debezium. Tiered storage. Cross region backups. SSO. Quarterly upgrades.                   | 120k to 220k      | 18k to 35k        |
| Enterprise | Eight to twelve by two. Multi region DR. Row level security. Advanced compliance. Twenty four by seven on call.   | 250k to 500k plus | 35k to 70k        |

Alternate model. Per managed node fee plus a small percent of cloud spend with a cap.

**SLO tiers**

| Metric                           | Starter                       | Growth                                  | Enterprise                              |
| -------------------------------- | ----------------------------- | --------------------------------------- | --------------------------------------- |
| Availability monthly             | 99.9 percent                  | 99.95 percent                           | 99.99 percent                           |
| p95 query latency hot set        | two seconds                   | one point five seconds                  | one second                              |
| Ingest freshness                 | five minutes                  | two minutes                             | one minute                              |
| Merge backlog                    | under thirty minutes          | under fifteen minutes                   | under ten minutes                       |
| Replica lag                      | under sixty seconds           | under thirty seconds                    | under fifteen seconds                   |
| Backup success rolling seven day | at least ninety nine percent  | at least ninety nine point five percent | at least ninety nine point nine percent |
| RPO and RTO                      | fifteen minutes and two hours | ten minutes and one hour                | five minutes and thirty minutes         |

---

# Market Opportunity

**Who it serves**

Product analytics, clickstream, SIEM, observability time series, gaming telemetry, and fintech risk. These are high ingest and mostly append. They benefit from wide scans and fast rollups on fresh data.

**Why now**

- Cost pressure from usage metered warehouses at scale.
- ClickHouse Operator and Keeper are stable and mature.
- Kubernetes add ons make stateful workloads practical.

**Where we fit**

Own the operations in the customer VPC. Deliver the performance profile of ClickHouse with the control of Kubernetes. Provide SLOs, DR evidence, and Git based change control.

---

# How It Works

1. Discovery and design. One to two weeks. We review datasets, queries, and SLAs. We propose keys, partitions, and projections. We size shards and replicas. We agree on SLOs.
2. Build. Two to four weeks. We bootstrap EKS, GKE, or AKS. We install the Operator, Keeper, GitOps, observability, and backups. We prove a restore.
3. Migration. Two to eight weeks. We backfill, enable dual writes, replay and validate queries, then cut over with a one week shadow run.
4. Operate. We run the platform to SLO with upgrades, capacity planning, and monthly restore drills.

Time to first production is four to eight weeks after design sign off.

---

# Testimonials and Case Studies

We publish evidence. Benchmarks that can be reproduced. Redacted postmortems. Screenshots of restore drills. During pilots we share targets and actuals for cost and latency. Customer quotes and case studies will be added as they are approved.

---

# Call to Action

- Request a free architecture and TCO review.
- Start a fixed scope pilot in your cloud account.
- Ask for our reference dashboards, alert rules, and runbooks.

---

# Contact

Email. founders at yourdomain dot com.
Calendar. link to your scheduling page.
Security. request our security baseline and shared responsibility addendum.

If you prefer a marketplace route we can set up a private offer.
