# Interactive CV Website Design Guidelines for Marija Ćubić

## Design Approach
**Hybrid Modern Portfolio** - Drawing inspiration from contemporary developer portfolios (like those on Read.cv, Bento portfolios) combined with clean design system principles. Focus on sophisticated interactivity without sacrificing clarity.

## Layout Strategy

**Avoid Traditional Hero Pattern** - Lead immediately with identity and value. Use a split-screen or side-by-side introduction:
- Left: Large name display, current role, location with subtle animated greeting
- Right: Professional headshot or abstract geometric visual representing tech stack

**Single-Page Scroll Architecture** with persistent sidebar navigation showing section progress indicators.

**Section Flow:**
1. Introduction (full viewport)
2. Skills Matrix (visual representation)
3. Experience Timeline (chronological)
4. Education Path
5. Contact & Download

## Typography System

**Font Pairing:** 
- Headings: Space Grotesk or Inter (geometric, modern)
- Body: System font stack for optimal readability

**Hierarchy:**
- Name/Hero: text-5xl to text-7xl, font-bold
- Section Headers: text-3xl to text-4xl, font-semibold
- Job Titles: text-xl, font-medium
- Body Text: text-base to text-lg
- Metadata: text-sm, font-normal

## Spacing Framework

**Consistent Tailwind Units:** Use 4, 6, 8, 12, 16, 24 for vertical rhythm
- Section padding: py-16 to py-24
- Component gaps: gap-6 to gap-8
- Card padding: p-6 to p-8
- Tight spacing: space-y-2 to space-y-4

## Component Library

### Skills Matrix
Visual grid showing proficiency levels:
- Frontend/Backend/Tools categories in separate cards
- Each skill as badge with hover state revealing experience level
- Use 3-column grid on desktop, 1-column mobile

### Experience Timeline
Vertical timeline with connection line:
- Date labels on left (fixed width)
- Job cards on right with expandable details
- Subtle hover lift effect (transform scale)
- Click to expand full job description

### Education Cards
Accordion-style collapsible sections:
- Institution name and degree prominent
- Dates and location as metadata
- Expand for additional details

### Language Toggle
Floating pill-style switcher (top-right):
- HR | EN labels
- Smooth transition between languages

### Download CTA
Prominent, fixed-position button:
- "Download PDF" with download icon
- Bottom-right corner on desktop
- Sticky on scroll

## Interactive Elements

**On-Scroll Animations:**
- Fade-in + slide-up for section entries (stagger children)
- Timeline items reveal sequentially
- Skill badges animate in with delay

**Hover States:**
- Skill badges: slight scale + shadow increase
- Timeline cards: lift effect (translateY -2px)
- Contact links: underline animation

**Click Interactions:**
- Experience cards expand to show full description
- Skill items show tooltip with proficiency details

## Responsive Behavior

**Desktop (lg+):** 
- Sidebar navigation visible
- Multi-column layouts for skills (3 cols)
- Split introduction section

**Tablet (md):**
- Collapse to top navigation bar
- 2-column skill grid
- Stacked introduction

**Mobile (base):**
- Single column throughout
- Hamburger menu for navigation
- Full-width cards

## Images

**Introduction Section:**
- Professional headshot in circular frame (right side on desktop, top on mobile)
- Alternative: Abstract geometric composition using tech brand colors (React blue, Node green, PostgreSQL blue) if no photo available

**No large hero image** - this CV format prioritizes content over decorative imagery

## Navigation

**Desktop Sidebar (fixed left):**
- Vertical nav with section names
- Progress indicator showing current section
- Width: w-48 to w-64

**Mobile Header:**
- Sticky top bar with hamburger menu
- Slide-out drawer navigation

## Key Design Principles

1. **Information First:** Every element serves CV clarity
2. **Subtle Sophistication:** Interactions enhance, never distract
3. **Professional Minimalism:** Clean, spacious, purposeful
4. **Technical Credibility:** Design quality reflects coding skill
5. **Scannable Hierarchy:** Recruiters can quickly extract key info

## Accessibility Requirements

- Semantic HTML structure (nav, section, article tags)
- ARIA labels for interactive elements
- Keyboard navigation for all interactions
- Focus states clearly visible
- Sufficient contrast ratios throughout