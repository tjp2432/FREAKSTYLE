# Freak Style - Architecture

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Fonts | Inter (Google Fonts) |

## Project Structure

```
freak-style/
├── public/          # Static assets (images, fonts, icons)
├── src/
│   ├── app/         # Next.js App Router pages & API routes
│   │   ├── api/     # Future REST API endpoints
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/      # Primitives (Button, Card, etc.)
│   │   ├── layout/  # Header, Footer, Navigation
│   │   └── sections/# Page sections (Hero, Services, etc.)
│   ├── config/      # Site configuration
│   ├── hooks/       # Custom React hooks (future)
│   ├── lib/         # Utilities & helpers
│   ├── services/    # API client & business logic
│   ├── store/       # State management (future)
│   ├── types/       # TypeScript type definitions
│   └── styles/      # Additional global styles
├── mobile/          # Future React Native app
├── docs/            # Documentation
└── tests/           # Test files (future)
```

## Future Extensions

### Mobile App
- The `mobile/` directory is reserved for a React Native app
- Shared types and API client can be extracted to a shared workspace

### APIs & Third-Party Integrations
- `src/services/api.ts` provides a ready-to-use API client
- API routes in `src/app/api/` can host Next.js API endpoints
- Environment variables in `.env.local` control API URLs

### Transactional Operations
- Future e-commerce, payments, and order management
- State management in `src/store/` ready for Zustand/Redux

## Brand Identity

- **Primary**: Black `#000000`, White `#FFFFFF`
- **Surfaces**: Graphite `#2B2B2B`, Light Gray `#E5E5E5`
- **Accents**: Neon Green `#39FF14`, Metallic Pink `#FF1493` (campaigns only)
- **Typography**: Inter (sans-serif)
