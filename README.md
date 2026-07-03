# NoteDoctor.AI — Marketing Site

> **Cut the Red Tape. Deliver Care Without Delays.**

Marketing website for NoteDoctor.AI — an AI-powered prior authorization screening solution that empowers physicians and health systems with clarity, speed, and compliance.

![NoteDoctor.AI Hero](screenshot.png)

---

## About

Prior authorization wastes valuable time, burdens physicians, and puts patients at risk. NoteDoctor.AI streamlines the PA process so providers can focus on care, not paperwork.

**Key stats driving the mission:**
- **50M+** Medicare Advantage prior auth requests per year
- **80%** of denials later overturned on appeal
- **2hrs** average physician time lost daily to admin

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, static export) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3, Mantine 7, Framer Motion |
| Icons | FontAwesome 6, Tabler Icons |
| Auth | NextAuth.js 4 + Prisma |
| Payments | Stripe |
| Email | Nodemailer |
| Blog | Markdown + gray-matter + Remark |
| Package Manager | Yarn |

---

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn
- PostgreSQL (optional — only needed for auth features)

### Install

```bash
yarn install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `SECRET` | NextAuth secret key |
| `NEXT_PUBLIC_SITE_URL` | Public site URL |
| `GITHUB_CLIENT_ID/SECRET` | GitHub OAuth credentials |
| `GOOGLE_CLIENT_ID/SECRET` | Google OAuth credentials |
| `STRIPE_SECRET_KEY` | Stripe API secret key |
| `DATABASE_URL` | PostgreSQL connection string |
| `EMAIL_SERVER_*` | Nodemailer SMTP config |

### Run

```bash
# Development
yarn dev

# Production build (static export)
yarn build

# Serve production build locally
yarn start

# Lint
yarn lint
```

The static export outputs to `/out` — deploy this directory to any static host (Vercel, Netlify, Cloudflare Pages, etc.).

---

## Project Structure

```
src/
├── app/
│   ├── (site)/               # Page routes
│   │   ├── page.tsx          # Home
│   │   ├── for-physicians/   # Physician landing
│   │   ├── for-health-systems/
│   │   ├── for-healthcare/
│   │   ├── for-you/
│   │   ├── pricing/
│   │   └── contact/
│   └── api/
│       └── auth/             # NextAuth endpoints
├── components/
│   ├── home/                 # Homepage sections (Hero, FAQ, etc.)
│   ├── Navbar/
│   ├── Features/
│   ├── Pricing/
│   ├── Testimonials/
│   ├── Blog/
│   └── Contact/
├── stripe/
│   └── pricingData.ts        # Pricing tier definitions
├── types/                    # Shared TypeScript types
└── styles/
markdown/
└── blogs/                    # Blog posts (Markdown)
prisma/
└── schema.prisma             # DB schema (auth models)
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, problem, features, FAQ, contact |
| `/for-physicians` | Physician-focused landing page |
| `/for-health-systems` | Enterprise / health system landing page |
| `/for-healthcare` | General healthcare landing page |
| `/for-you` | Individual provider landing page |
| `/pricing` | Pricing tiers (Basic / Premium / Business) |
| `/contact` | Contact form |

---

## Deployment

This site is configured as a **static export** (`output: 'export'` in `next.config.js`). After `yarn build`, deploy the `/out` directory.

- Trailing slashes enabled
- Images unoptimized for static hosting compatibility
- No server runtime required

---

## License

See [LICENSE](LICENSE).
