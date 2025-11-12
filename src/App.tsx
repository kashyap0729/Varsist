import React from 'react';
import './App.css';
import logo from './images/logo.png';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LockIcon from '@mui/icons-material/Lock';
import DescriptionIcon from '@mui/icons-material/Description';
import BuildIcon from '@mui/icons-material/Build';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ConstructionIcon from '@mui/icons-material/Construction';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShieldIcon from '@mui/icons-material/Shield';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import RouterIcon from '@mui/icons-material/Router';

function App() {
  const [showContactInfo, setShowContactInfo] = React.useState(false);
  const [showPilotForm, setShowPilotForm] = React.useState(false);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="Varsist Logo" style={{ height: '40px', marginRight: '0.5rem' }} />
            <span style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif", fontWeight: '600', letterSpacing: '-0.02em' }}>Varsist</span>
          </div>
          <nav>
            <ul className="nav">
              <li><a href="#services">Services</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1>Self-hosted ClickHouse on Your Infrastructure</h1>
          <p>
            We design, deploy, and operate ClickHouse inside your VPC. Keep SQL analytics fast and predictable while cutting steady state costs by 30-60% compared to 
            Snowflake or ClickHouse Cloud.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Request Architecture Review</a>
            <a href="#pricing" className="btn btn-secondary">View Pricing</a>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section">
        <h2 className="section-title">What You Get</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><AttachMoneyIcon sx={{ fontSize: 48 }} /></div>
            <h3>Lower Run Rate</h3>
            <p>30–60% steady-state cost reduction for append-heavy workloads.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><FlashOnIcon sx={{ fontSize: 48 }} /></div>
            <h3>Fast Performance</h3>
            <p>p95 latency 300ms–3s on hot partitions with correct keys and part sizing.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><LockIcon sx={{ fontSize: 48 }} /></div>
            <h3>Clear RPO & RTO</h3>
            <p>Baseline RPO 15m and RTO 2h; tighter SLAs available for enterprise tiers.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><DescriptionIcon sx={{ fontSize: 48 }} /></div>
            <h3>Git-Based Control</h3>
            <p>GitOps for schema and config changes, with automated restore evidence and rollbacks.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><BuildIcon sx={{ fontSize: 48 }} /></div>
            <h3>Data Engineering</h3>
            <p>Backfills, transforms, and streaming ingestion patterns (dual writes, CDC) implemented reliably.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><TrendingUpIcon sx={{ fontSize: 48 }} /></div>
            <h3>Observability</h3>
            <p>Prometheus, Grafana, tracing and log correlation to drive SLIs, alerts, and runbooks.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section section-gray">
        <h2 className="section-title">Products and Services</h2>
        <p className="section-subtitle">
          End-to-end ownership of Kubernetes and ClickHouse lifecycle in your VPC
        </p>
        <div className="services-grid">
          <div className="service-card">
            <h3><LightbulbIcon sx={{ fontSize: 28, verticalAlign: 'middle', marginRight: '8px' }} /> Advisory</h3>
            <h4>Outcomes</h4>
            <ul>
              <li>Readiness report and HLD with keys, partitions, projections, and materialized views</li>
              <li>TCO model with scenarios covering storage tiers, merge efficiency, and retention policy</li>
            </ul>
            <h4>Scope</h4>
            <ul>
              <li>Schema and engine design with partition and key strategy</li>
              <li>Capacity and sizing by shards and replicas</li>
              <li>Security and compliance posture with SSO, RBAC, and policy as code</li>
            </ul>
          </div>

          <div className="service-card">
            <h3><ConstructionIcon sx={{ fontSize: 28, verticalAlign: 'middle', marginRight: '8px' }} /> Build</h3>
            <h4>Outcomes</h4>
            <p>Green cluster in your Cloud with dashboards live, backups passing, and GitOps in place.</p>
            <h4>Key Components</h4>
            <ul>
              <li><strong>Kubernetes:</strong> Dedicated node pools for data, Keeper, ingest with anti-affinity and PDBs</li>
              <li><strong>Storage:</strong> NVMe for hot parts, tier to S3/Blob/GCS for cold via TTL</li>
              <li><strong>Security:</strong> Private subnets, NetworkPolicies, OIDC SSO with RBAC, image signing</li>
              <li><strong>Observability:</strong> Prometheus, Grafana, Alertmanager, Loki with comprehensive dashboards</li>
              {/* <li><strong>Backups:</strong> BACKUP TO and clickhouse-backup with cross-region copy</li> */}
            </ul>
          </div>

          <div className="service-card">
            <h3><SyncAltIcon sx={{ fontSize: 28, verticalAlign: 'middle', marginRight: '8px' }} /> Migrate</h3>
            <h4>Outcomes</h4>
            <p>Validated cutover from Snowflake, Redshift or ClickHouse Cloud with measured latency and cost.</p>
            <h4>Migration Steps</h4>
            <ul>
              <li>Plan the mapping and SLAs</li>
              <li>Backfill to columnar on object storage then load to ClickHouse</li>
              <li>Enable dual writes with Kafka or Debezium for OLTP sources</li>
              {/* <li>Replay and compare queries</li> */}
              <li>Cut over reads when counts and checksums match with one-week shadow run</li>
            </ul>
          </div>

          <div className="service-card">
            <h3><SettingsIcon sx={{ fontSize: 28, verticalAlign: 'middle', marginRight: '8px' }} /> Operate</h3>
            <h4>Outcomes</h4>
            <p>SLO-backed managed operations in your VPC.</p>
            <h4>Coverage</h4>
            <ul>
              <li>On-call with severity matrix and error budgets</li>
              <li>Upgrades for Kubernetes and ClickHouse with staging preflight and rollback</li>
              <li>Capacity and performance tuning with controlled merge backlog</li>
              {/* <li>Monthly restore game days with evidence</li> */}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section id="pricing" className="section">
        <h2 className="section-title">Pricing Overview</h2>
        <p className="section-subtitle">
          Cloud spend stays in your account. Below ranges are illustrative.
        </p>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'inline-block', backgroundColor: '#4285F4', color: 'white', padding: '1rem 2rem', borderRadius: '8px', fontSize: '1.25rem', fontWeight: 'bold' }}>
            🎉 Limited Time: 70% OFF + First 3 Months Managed Services FREE
          </div>
        </div>
        <div className="pricing-table">
          <table>
            <thead>
              <tr>
                <th>Package</th>
                <th>Scope Snapshot</th>
                <th>One-time (USD)</th>
                <th>Managed/Month</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Starter</strong></td>
                <td>2x2 shard replica, 3 Keeper, single region, 3 data sources, base dashboards, monthly restore test</td>
                <td>
                  <div><span style={{ textDecoration: 'line-through', color: '#999' }}>$60k - $90k</span></div>
                  <div style={{ color: '#4285F4', fontWeight: 'bold', fontSize: '1.1rem' }}>$18k - $27k</div>
                </td>
                <td>
                  <div><span style={{ textDecoration: 'line-through', color: '#999' }}>$9k - $15k</span></div>
                  <div style={{ color: '#4285F4', fontWeight: 'bold', fontSize: '1.1rem' }}>$2.7k - $4.5k</div>
                  <div style={{ fontSize: '0.85rem', color: '#34A853', fontWeight: 'bold' }}>FREE for 3 months</div>
                </td>
              </tr>
              <tr>
                <td><strong>Growth</strong></td>
                <td>4x2 with Kafka and Debezium, tiered storage, cross-region backups, SSO, quarterly upgrades</td>
                <td>
                  <div><span style={{ textDecoration: 'line-through', color: '#999' }}>$120k - $220k</span></div>
                  <div style={{ color: '#4285F4', fontWeight: 'bold', fontSize: '1.1rem' }}>$36k - $66k</div>
                </td>
                <td>
                  <div><span style={{ textDecoration: 'line-through', color: '#999' }}>$18k - $35k</span></div>
                  <div style={{ color: '#4285F4', fontWeight: 'bold', fontSize: '1.1rem' }}>$5.4k - $10.5k</div>
                  <div style={{ fontSize: '0.85rem', color: '#34A853', fontWeight: 'bold' }}>FREE for 3 months</div>
                </td>
              </tr>
              <tr>
                <td><strong>Enterprise</strong></td>
                <td>8-12x2, multi-region DR, row-level security, advanced compliance, 24x7 on-call</td>
                <td>
                  <div><span style={{ textDecoration: 'line-through', color: '#999' }}>$250k - $500k+</span></div>
                  <div style={{ color: '#4285F4', fontWeight: 'bold', fontSize: '1.1rem' }}>$75k - $150k+</div>
                </td>
                <td>
                  <div><span style={{ textDecoration: 'line-through', color: '#999' }}>$35k - $70k</span></div>
                  <div style={{ color: '#4285F4', fontWeight: 'bold', fontSize: '1.1rem' }}>$10.5k - $21k</div>
                  <div style={{ fontSize: '0.85rem', color: '#34A853', fontWeight: 'bold' }}>FREE for 3 months</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SLO Tiers */}
      <section className="section section-gray">
        <h2 className="section-title">SLO Tiers</h2>
        <div className="pricing-table">
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Starter</th>
                <th>Growth</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Availability (monthly)</td>
                <td>99.5%</td>
                <td>99.95%</td>
                <td>99.99%</td>
              </tr>
              <tr>
                <td>p90 Query Latency (hot)</td>
                <td>10 seconds</td>
                <td>7 seconds</td>
                <td>5 seconds</td>
              </tr>
              <tr>
                <td>Ingest Freshness</td>
                <td>5 minutes</td>
                <td>2 minutes</td>
                <td>1 minute</td>
              </tr>
              <tr>
                <td>Merge Backlog</td>
                <td>&lt; 30 minutes</td>
                <td>&lt; 15 minutes</td>
                <td>&lt; 10 minutes</td>
              </tr>
              <tr>
                <td>Replica Lag</td>
                <td>&lt; 60 seconds</td>
                <td>&lt; 30 seconds</td>
                <td>&lt; 15 seconds</td>
              </tr>
              <tr>
                <td>Backup Success (7-day)</td>
                <td>≥ 99%</td>
                <td>≥ 99.5%</td>
                <td>≥ 99.9%</td>
              </tr>
              <tr>
                <td>RPO and RTO</td>
                <td>15m / 2h</td>
                <td>10m / 1h</td>
                <td>5m / 30m</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>


      {/* How It Works */}
      <section id="how-it-works" className="section section-gray">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Time to first production is 4-12 weeks after design sign-off
        </p>
        <div className="process-steps">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Discovery and Design</h3>
              <p>
                1-2 weeks. We review datasets, queries, and SLAs. We propose keys, partitions, 
                and projections. We size shards and replicas. We agree on SLOs.
              </p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Build</h3>
              <p>
                2-4 weeks. We bootstrap EKS, GKE, or AKS. We install the Operator, Keeper, 
                GitOps, observability, and backups. We prove a restore.
              </p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Migrations & Transformations</h3>
              <p>
                2-8 weeks. We backfill, enable dual writes, replay and validate queries, 
                then cut over with a one-week shadow run.
              </p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Operate</h3>
              <p>
                We run the platform to SLO with upgrades, capacity planning, and monthly 
                restore drills. Full ownership of Ingestions, Transformations, Kubernetes and ClickHouse infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="section">
        <h2 className="section-title">Who We Serve</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><BarChartIcon sx={{ fontSize: 48 }} /></div>
            <h3>Product Analytics</h3>
            <p>Clickstream and behavioral data with fast rollups on fresh data</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><ShieldIcon sx={{ fontSize: 48 }} /></div>
            <h3>SIEM & Security</h3>
            <p>High-volume log ingestion with real-time threat detection</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><ShowChartIcon sx={{ fontSize: 48 }} /></div>
            <h3>Observability</h3>
            <p>Time series metrics and traces at scale</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><SportsEsportsIcon sx={{ fontSize: 48 }} /></div>
            <h3>Gaming Telemetry</h3>
            <p>Real-time player analytics and event tracking</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><CreditCardIcon sx={{ fontSize: 48 }} /></div>
            <h3>Fintech Risk</h3>
            <p>Transaction monitoring and fraud detection</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><RouterIcon sx={{ fontSize: 48 }} /></div>
            <h3>IoT & Edge</h3>
            <p>Device telemetry and sensor data aggregation</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Request a free 45-minute architecture review and TCO model</p>
        <div className="cta-buttons">
          <button 
            onClick={() => setShowContactInfo(!showContactInfo)}
            className="btn btn-primary"
          >
            {showContactInfo ? 'Hide Contact Info' : 'Contact Us'}
          </button>
          <button 
            onClick={() => setShowPilotForm(!showPilotForm)}
            className="btn btn-secondary"
          >
            {showPilotForm ? 'Hide Form' : 'Start a Pilot'}
          </button>
        </div>

        {showContactInfo && (
          <div style={{
            marginTop: '2rem',
            padding: '2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>Contact Information</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              📧 Email: <a href="mailto:kashyapmrc@gmail.com" style={{ color: '#4285F4' }}>kashyapmrc@gmail.com</a>
            </p>
            <p style={{ fontSize: '1.1rem' }}>
              📞 Phone: <a href="tel:+919951378941" style={{ color: '#4285F4' }}>+91 9951378941</a>
            </p>
          </div>
        )}

        {showPilotForm && (
          <div style={{
            marginTop: '2rem',
            padding: '2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Request a Pilot Program</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const email = formData.get('email');
              const company = formData.get('company');
              const message = formData.get('message');
              
              const subject = encodeURIComponent('Pilot Program Request');
              const body = encodeURIComponent(
                `Hi,\n\nI'm interested in starting a pilot program.\n\n` +
                `Name: ${name}\n` +
                `Email: ${email}\n` +
                `Company: ${company}\n\n` +
                `Project Details:\n${message}\n\n` +
                `Please provide more details about the next steps.`
              );
              
              const mailtoLink = `mailto:rohitreddykota@gmail.com,kashyapmrc@gmail.com?subject=${subject}&body=${body}`;
              
              // Try to open mailto link
              const link = document.createElement('a');
              link.href = mailtoLink;
              link.click();
              
              // Show confirmation
              alert(`Thank you ${name}! Your request will open in your email client.\n\nIf your email client doesn't open automatically, please send an email to:\nrohitreddykota@gmail.com, kashyapmrc@gmail.com\n\nInclude the following information:\n- Name: ${name}\n- Email: ${email}\n- Company: ${company}\n- Project Details: ${message}`);
              
              // Reset form
              e.currentTarget.reset();
              setShowPilotForm(false);
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    border: '1px solid #4285F4',
                    backgroundColor: 'white',
                    color: '#333',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    border: '1px solid #4285F4',
                    backgroundColor: 'white',
                    color: '#333',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    border: '1px solid #4285F4',
                    backgroundColor: 'white',
                    color: '#333',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  required
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    border: '1px solid #4285F4',
                    backgroundColor: 'white',
                    color: '#333',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Send Request
              </button>
            </form>
          </div>
        )}
        <div style={{ marginTop: '3rem', opacity: 0.9 }}>
          <p><strong>What you'll get:</strong></p>
          <p>✓ Free architecture and TCO review</p>
          <p>✓ Fixed scope pilot in your cloud account</p>
          <p>✓ Reference dashboards, alert rules, and runbooks</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#contact">Contact</a>
            <a href="mailto:rohitreddykota@gmail.com,kashyapmrc@gmail.com">Email</a>
          </div>
          <p>&copy; 2025 Varsist Services. All rights reserved.</p>
          <p style={{ marginTop: '1rem' }}>
            Evidence over promises. Dashboards, alerts, restore proof, and postmortems are customer owned.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
