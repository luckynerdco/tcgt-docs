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
      // Custom header + footer: top nav and an independence disclaimer.
      components: {
        SiteTitle: './src/components/SiteTitle.astro',
        Footer: './src/components/Footer.astro',
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
          href: 'https://discord.com/invite/CcZAuw22Q9',
        },
      ],
      // Turn off the default "Built with Starlight" note; this is your site.
      credits: false,
      // Sidebar mirrors the community guide structure.
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Overview', slug: 'getting-started/overview' },
          ],
        },
        {
          label: 'Order Management',
          items: [
            { label: 'Importing Orders', slug: 'order-management/importing-orders' },
            { label: 'Splitting Orders', slug: 'order-management/splitting-orders' },
            { label: 'Returns', slug: 'order-management/returns' },
            { label: 'Cancelations', slug: 'order-management/cancelations' },
            { label: 'Assisted Pick', slug: 'order-management/assisted-pick' },
          ],
        },
        {
          label: 'Printing & Shipping',
          items: [
            { label: 'Printing', slug: 'printing-shipping/printing' },
            {
              label: 'E-Postage',
              items: [
                { label: 'Overview', slug: 'printing-shipping/e-postage' },
                { label: 'EasyPost Integration', slug: 'printing-shipping/easypost-integration' },
              ],
            },
            { label: 'IMB Tracking', slug: 'printing-shipping/imb-tracking' },
            { label: 'PIP Insurance', slug: 'printing-shipping/pip-insurance' },
            { label: 'Assisted Pack', slug: 'printing-shipping/assisted-pack' },
          ],
        },
        {
          label: 'Inventory Management',
          items: [
            { label: 'Overview', slug: 'inventory-management/overview' },
            { label: 'Adding Stock', slug: 'inventory-management/adding-stock' },
            { label: 'Locations', slug: 'inventory-management/locations' },
            { label: 'Auto-Price', slug: 'inventory-management/auto-price' },
          ],
        },
        {
          label: 'Utilities & More',
          items: [
            { label: 'Audits', slug: 'utilities/audits' },
            { label: 'Purchasing Opportunities', slug: 'utilities/purchasing-opportunities' },
            { label: 'TCGTracking Utilities', slug: 'utilities/tcgtracking-utilities' },
            { label: 'TCGTracking Bridge', slug: 'utilities/tcgtracking-bridge' },
            { label: 'Selling Stats', slug: 'utilities/selling-stats' },
            { label: 'Employees', slug: 'utilities/employees' },
            { label: 'APIs', slug: 'utilities/apis' },
          ],
        },
        {
          label: 'Stores',
          badge: { text: 'Soon', variant: 'caution' },
          items: [
            { label: 'Overview', slug: 'stores' },
          ],
        },
        { label: 'FAQ', slug: 'faq' },
        {
          label: 'How to Contribute',
          items: [
            { label: 'Overview', slug: 'contribute/overview' },
            { label: 'Editing a Guide', slug: 'contribute/editing-a-guide' },
            { label: 'Style Guide', slug: 'contribute/style-guide' },
          ],
        },
      ],
      // Show a "last updated" line pulled from git history on each page.
      lastUpdated: true,
    }),
    mdx(),
  ],
});
