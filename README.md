# Shipify International Website

A modern, responsive website for Shipify International, a freight forwarding and customs clearing company based in Zimbabwe.

## Overview

This website showcases Shipify International's services, team, testimonials, and contact information. It features a clean, professional design with smooth animations and interactive elements.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Shadcn UI**: Component library built on Radix UI and Tailwind CSS
- **TypeScript**: Type-safe JavaScript
- **Lucide React**: Icon library

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
├── app/                  # Next.js app directory
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── globals.css       # Global CSS styles
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Homepage
│   ├── quote/            # Quote request page
│   ├── services/         # Services page
│   ├── team/             # Team page
│   └── testimonials/     # Testimonials page
├── components/           # Reusable components
│   ├── footer.tsx        # Footer component
│   ├── header.tsx        # Header component
│   ├── quote-request-short.tsx  # Short quote request form
│   ├── testimonial-carousel.tsx # Testimonial carousel
│   ├── theme-provider.tsx       # Theme provider
│   └── ui/               # UI components from shadcn
├── public/               # Static assets
│   └── images/           # Image assets
└── README.md             # Project documentation
\`\`\`

## CSS Styling Approach

This project uses Tailwind CSS for styling with a few custom approaches to ensure compatibility and maintainability:

### Custom CSS Classes

We define custom component classes in `globals.css` using Tailwind's `@layer components` directive:

\`\`\`css
@layer components {
  .btn-primary {
    @apply bg-white text-black border border-orange-600 rounded-lg transition-all duration-300 ease-in-out;
  }
  
  /* More component classes... */
}
\`\`\`

### Handling Hover Effects

To avoid Tailwind CSS parser issues with complex hover effects, we use standard CSS for certain hover states instead of `@apply`:

\`\`\`css
/* Using standard CSS for hover effects to avoid Tailwind parsing issues */
.card-animate:hover {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); /* shadow-md equivalent */
  transform: scale(1.02);
}
\`\`\`

For button hover effects:

\`\`\`css
.btn-primary:hover {
  @apply bg-black text-white border-transparent shadow-lg;
  transform: scale(1.05);
}
\`\`\`

This hybrid approach allows us to leverage Tailwind's utility classes while avoiding parser issues with complex combinations of classes.

### Animations

Custom animations are defined using standard CSS `@keyframes` and then applied using utility classes:

\`\`\`css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@layer utilities {
  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }
}
\`\`\`

## Key Components

### Header

Responsive navigation header with mobile menu support.

### Footer

Comprehensive footer with company information, quick links, and contact details.

### Testimonial Carousel

Interactive carousel showcasing client testimonials with autoplay and manual navigation.

### Quote Request Form

Short and full versions of the quote request form for lead generation.

## Color Scheme

The website uses a professional color scheme:

- Primary: Orangered (#FF4500)
- Secondary: Black (#000000)
- Accent: White (#FFFFFF)
- Additional accents: Gold for certain highlights

## Deployment

This website can be deployed on Vercel for optimal performance with Next.js:

1. Push your code to a GitHub repository
2. Connect the repository to Vercel
3. Configure build settings if needed
4. Deploy

## Contact

For questions or support regarding this website, please contact:

- Email: [your-email@example.com](mailto:your-email@example.com)
- GitHub: [your-github-username](https://github.com/your-github-username)

## License

[MIT License](LICENSE)
