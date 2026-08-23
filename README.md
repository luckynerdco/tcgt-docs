# TCGT.Help

A free, community-run help center for people who sell with **TCGTracking** —
written by sellers, for sellers. 🃏

> **Heads up:** TCGT.Help is an independent community project. It is **not
> affiliated with, endorsed by, or operated by TCGTracking.** It's just sellers
> helping sellers get the most out of the platform.

💬 **Community:** [Join the Discord](https://discord.com/invite/CcZAuw22Q9)

---

## 👋 Want to help? You're in the right place

This site only exists because sellers share what they know. If you've figured out
a workflow, cleared up something confusing, or just spotted a typo — you can make
it better. **You don't need to be a developer**, and no contribution is too small.

There are two easy ways to pitch in:

### ✏️ Edit on GitHub — best for most changes

Great for fixing a typo, clarifying a step, or writing a whole new guide. You
never have to leave your browser:

1. Find the guide you want to change and open its file under `src/content/docs/…`.
2. Click the **pencil icon** (Edit this file) at the top-right.
3. Make your edit and click **Commit changes → "Create a new branch and start a
   pull request."**
4. Describe what you changed. That's it — someone will take it from there!

### 💬 Message me in Discord — best if GitHub isn't your thing

Not ready to edit files? No problem. Join the
[Discord](https://discord.com/invite/CcZAuw22Q9) and message **Chris | Lucky Nerd |
2600** — suggest a topic, point out something that's out of date, or just share your
notes for a guide. I'll help turn it into a page and get it published.

---

## 🔄 How a change goes live

1. You edit a page or add a new one.
2. You open a **pull request** (a proposal of your changes).
3. A maintainer reviews it, chats through any tweaks, and approves.
4. Once merged, it publishes to the live site automatically. 🎉

**Every change is reviewed before it goes live**, so please don't stress about
getting it perfect — that's exactly what the review step is for.

---

## ⭐ The easiest place to start

Any page marked **"Coming soon"** is an open invitation. The structure and styling
are already done — pick a topic you know well and just add the words. Some guides
still waiting for an author:

Returns · Cancelations · Assisted Pick · E-Postage · Assisted Pack · Auto-Price ·
Audits · Purchasing Opportunities · Selling Stats · Employees · APIs

---

## ✍️ Writing a guide

Guides are written in **Markdown** (with a little extra sugar). A few things worth
knowing:

- Pages live in `src/content/docs/…`, organized into category folders that match
  the site's sections.
- Use the **`.mdx`** extension for new pages — it lets you use the nice building
  blocks below.
- Start every page with a title and description block:

  ```mdx
  ---
  title: Your Guide Title
  description: One sentence describing the guide.
  ---
  ```

- Handy components you can drop in: `<Steps>` for numbered instructions,
  `<Aside>` for tip/warning callouts, and `<Card>` / `<CardGrid>` for grids.
  Import them at the top: `import { Steps, Aside } from '@astrojs/starlight/components';`

**The easiest approach:** open a finished guide like **Importing Orders** or
**Printing**, copy its structure, and swap in your content. When in doubt, open the
PR anyway and mention what you're unsure about — we'll polish it together.

---

## 💻 Previewing the site locally (optional)

You only need this if you'd like to see your changes live as you write. For small
edits, the browser method above is easier.

You'll need [Node.js](https://nodejs.org) (LTS version). Then:

```bash
npm install     # one time — installs the tools
npm run dev      # starts a live preview at http://localhost:4321
```

Edit any file under `src/content/docs/…`, save, and the browser refreshes on its
own. Press `Ctrl+C` in the terminal to stop.

---

## 🤝 Be cool

This is a community built on people helping people. Be kind, be patient, and assume
good intent — whether you're writing a guide, reviewing a pull request, or answering
a question in Discord. We're all just trying to make shipping cards a little easier.

---

## About

TCGT.Help is an independent, community-run resource for users of TCGTracking. It is
not affiliated with, endorsed by, or operated by TCGTracking. "TCGTracking" is the
property of its respective owner.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build).
