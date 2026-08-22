// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://tcgt.help',
  integrations: [
    starlight({
      title: 'TCGT.help',
      // Custom header: default site title + a horizontal top nav.
      components: {
        SiteTitle: './src/components/SiteTitle.astro',
      },
      // Boxed "T" brand mark shown in the header, matching the help-center design.
      logo: {
        src: './src/assets/tcgt-mark.svg',
        alt: 'TCGT.help',
      },
      // Short tagline shown under the title in the sidebar on desktop.
      tagline: 'Guides & docs for the TCG shipping toolkit',
      // Bundled fonts (installed via npm) + the theme are loaded here.
      // Order matters: fonts first, theme last so it wins.
      // Space Grotesk (display) + Inter (body) + JetBrains Mono (code) — matches tcgt.help.
      customCss: [
        '@fontsource-variable/space-grotesk',
        '@fontsource-variable/inter',
        '@fontsource-variable/jetbrains-mono',
        './src/styles/tcgt.css',
      ],
      // Starlight ships a ⌘K command palette (Pagefind) out of the box.
      // Setting a keyboard hint reinforces the command-bar feel.
      // Social links render as icon buttons in the top-right of the nav.
      social: [
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.gg/your-invite',
        },
      ],
      // Turn off the default "Built with Starlight" note; this is your site.
      credits: false,
      // Sidebar mirrors the live tcgt.help information architecture.
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Overview', slug: 'getting-started/overview' },
            { label: 'Installation', slug: 'getting-started/installation' },
          ],
        },
        {
          label: 'Printing & Shipping',
          items: [
            { label: 'Printing & Shipping', slug: 'printing-shipping' },
            { label: 'IMB Tracking', slug: 'imb-tracking' },
            { label: 'PIP Insurance', slug: 'pip-insurance' },
            { label: 'EasyPost Integration', slug: 'easypost' },
          ],
        },
        {
          label: 'Order Management',
          items: [
            { label: 'Importing Orders', slug: 'order-management/importing-orders' },
            { label: 'Splitting Orders', slug: 'order-management/splitting-orders' },
          ],
        },
        {
          label: 'More',
          items: [
            { label: 'TCGTracking Bridge', slug: 'bridge' },
            { label: 'Managing Locations', slug: 'managing-locations' },
            { label: 'Stores', slug: 'stores', badge: { text: 'Soon', variant: 'caution' } },
          ],
        },
      ],
      // Show a "last updated" line pulled from git history on each page.
      lastUpdated: true,
    }),
    mdx(),
  ],
});
