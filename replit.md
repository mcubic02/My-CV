# Overview

This is an interactive CV website for Marija Ćubić, a Full-stack Developer from Split, Croatia. The application is built as a single-page portfolio website with smooth scrolling navigation, bilingual support (English/Croatian), and a modern design system. The site showcases professional experience, skills, education, and contact information in an engaging, visually appealing format.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing

**UI Component System:**
- Shadcn/ui component library (New York style variant) providing pre-built, accessible components
- Radix UI primitives as the foundation for complex interactive components
- Tailwind CSS for utility-first styling with custom design tokens
- CSS variables for theming support (light/dark mode capable)
- Framer Motion for declarative animations and scroll-based interactions

**Design System Decisions:**
- Custom spacing framework using Tailwind units (4, 6, 8, 12, 16, 24) for consistent vertical rhythm
- Typography hierarchy with geometric fonts (Space Grotesk/Inter suggested, system fonts used)
- Component-based architecture with section components (HeroSection, SkillsSection, ExperienceSection, etc.)
- Responsive design with mobile-first approach and dedicated mobile navigation

**State Management:**
- React Query (TanStack Query) for server state management and caching
- Local React state with hooks for UI state (language selection, navigation)
- LocalStorage for persisting user preferences (language selection)

**Key Features:**
- Bilingual content system supporting English and Croatian with runtime language switching
- Single-page scroll architecture with persistent sidebar navigation and scroll progress tracking
- PDF CV download functionality from static assets
- Responsive navigation with desktop sidebar and mobile hamburger menu
- Smooth scroll-to-section behavior with active section highlighting

## Backend Architecture

**Server Framework:**
- Express.js server with TypeScript
- Custom Vite middleware integration for SSR-like development experience
- Static file serving for attached assets (CV PDF)

**Development vs Production:**
- Development: Vite dev server integrated as Express middleware with HMR support
- Production: Pre-built static assets served by Express
- Replit-specific plugins for development tooling (cartographer, dev banner, error overlay)

**API Strategy:**
- Minimal backend - primarily serves frontend assets
- Express middleware for request logging and JSON parsing
- No authentication required (public portfolio site)

**Storage Layer:**
- In-memory storage implementation (MemStorage class) for user data schema
- Designed for potential database integration but currently unused
- User schema defined with Drizzle ORM for future PostgreSQL integration

## External Dependencies

**UI & Component Libraries:**
- @radix-ui/* - Comprehensive set of accessible component primitives (accordion, dialog, dropdown, popover, tabs, toast, etc.)
- framer-motion - Animation library for smooth transitions and scroll-based animations
- embla-carousel-react - Carousel component (available but may not be actively used)
- cmdk - Command menu component
- lucide-react - Icon library for consistent iconography

**Form Management:**
- react-hook-form - Form state management
- @hookform/resolvers - Form validation resolvers
- zod - Schema validation
- drizzle-zod - Integration between Drizzle ORM and Zod

**Database & ORM:**
- drizzle-orm - TypeScript ORM for database operations
- drizzle-kit - CLI tooling for migrations
- @neondatabase/serverless - Neon PostgreSQL serverless driver
- Note: Database configured but not actively used in current implementation

**Styling:**
- tailwindcss - Utility-first CSS framework
- tailwind-merge - Utility for merging Tailwind classes
- clsx - Utility for conditional class names
- class-variance-authority - Type-safe variant management for components
- autoprefixer - PostCSS plugin for vendor prefixes

**Development Tools:**
- tsx - TypeScript execution for development
- esbuild - Fast JavaScript bundler for production builds
- @replit/vite-plugin-* - Replit-specific development tooling
- wouter - Minimalist router for React

**Build Configuration:**
- Path aliases configured (@/, @shared/, @assets/)
- Separate client and server build outputs
- ESM module system throughout

**Static Assets:**
- CV PDF stored in attached_assets directory
- Served via Express static middleware at /attached_assets route
- Google Fonts integration for typography (Architects Daughter, DM Sans, Fira Code, Geist Mono)