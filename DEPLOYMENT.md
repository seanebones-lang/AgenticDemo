# Deployment Guide - Agentic AI Demo

## Vercel Deployment

### Prerequisites
- Vercel account
- GitHub repository connected

### Quick Deploy

1. **Push to GitHub**
```bash
git push -u origin main
```

2. **Import to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "Add New Project"
- Import from GitHub: `seanebones-lang/AgenticDemo`
- Framework Preset: Next.js
- Click "Deploy"

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd /Users/seanmcdonnell/Desktop/AgenticDemo
vercel --prod
```

### Environment Variables

No environment variables required for this demo.

### Custom Domain (Optional)

1. Go to Project Settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Local Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Features

✅ Fully responsive design
✅ Animated components with Framer Motion
✅ Interactive live demo
✅ Market projection charts
✅ Comprehensive legal notices
✅ All links to bizbot.store
✅ Optimized for Vercel deployment

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Deployment**: Vercel

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- SEO Optimized

## Legal

**PROPRIETARY SOFTWARE - ALL RIGHTS RESERVED**

This demonstration is proprietary and confidential. No evaluation, testing, or use without license.

Copyright © 2025 Sean McDonnell. All Rights Reserved.

Contact for acquisition: [bizbot.store](https://bizbot.store)

