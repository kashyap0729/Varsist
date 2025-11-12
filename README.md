# Varsist - Self-hosted ClickHouse Solutions

A professional landing page for Varsist, showcasing our self-hosted ClickHouse deployment, management, and optimization services.

## Overview

Varsist provides end-to-end ClickHouse solutions deployed in your VPC, offering 30-60% cost savings compared to Snowflake or ClickHouse Cloud while maintaining fast performance and clear SLAs.

## Features

- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Built with React and Material-UI icons
- **Interactive Components**: Collapsible contact forms and pilot program requests
- **Service Showcase**: Comprehensive display of Advisory, Build, Migrate, and Operate services
- **Pricing Transparency**: Clear pricing tiers with promotional offers
- **SLO Commitments**: Detailed SLO metrics for different service tiers

## Tech Stack

- **React** - Frontend library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Material-UI Icons** - Icon library
- **CSS3** - Modern styling with gradients and animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kashyap0729/Varsist.git
cd Varsist
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

## Project Structure

```
├── src/
│   ├── App.tsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.tsx         # Application entry point
│   └── images/          # Image assets
├── public/              # Public assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Services Offered

### Advisory
- Readiness reports and high-level design
- TCO modeling with multiple scenarios
- Schema and engine design
- Capacity planning and sizing

### Build
- Kubernetes cluster setup (EKS/GKE/AKS)
- ClickHouse deployment with operators
- Observability stack (Prometheus, Grafana, Loki)
- Security implementation (SSO, RBAC, NetworkPolicies)

### Migrate
- Migration from Snowflake, Redshift, or ClickHouse Cloud
- Data backfill and transformation
- Dual-write implementation with CDC
- Query validation and cutover management

### Operate
- 24x7 managed operations
- SLO-backed service delivery
- Automated upgrades and capacity planning
- Monthly disaster recovery drills

## Contact

- **Email**: kashyapmrc@gmail.com, rohitreddykota@gmail.com
- **Phone**: +91 9951378941

## License

Copyright © 2025 Varsist Services. All rights reserved.

## Deployment

This site can be deployed to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

For deployment, simply run `npm run build` and upload the `dist` folder to your hosting provider.
