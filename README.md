# AeroAg Australia - Turnkey Agricultural Drones

B2B agricultural drone supplier for Australian farmers. High-performance spraying, spreading, and multispectral mapping systems.

## Deployment Steps (GitHub + Vercel)

1. **GitHub Setup**
   - Create a new empty GitHub repository.
   - Run the following in your terminal:
     ```bash
     git init
     git remote add origin https://github.com/[username]/[repo-name].git
     git add .
     git commit -m "Initial build — AeroAg Australia v1.0"
     git push -u origin main
     ```

2. **Vercel Deployment**
   - Go to [vercel.com](https://vercel.com) → Add New Project.
   - Import the repository.
   - **CRITICAL:** Framework Preset = "Next.js".
   - (Optional) Configure SMTP env vars for `/api/lead/` if not using Web3Forms.
   - Deploy.

## Post-Deploy Verification

- **Domain:** Update `config/site.js` if the domain was pending.
- **Forms:** Test the lead form at `/dji-agras-t50/#quote`.
- **SEO:** Verify `sitemap.xml` and `robots.txt` are accessible.
- **AI-Ready:** Check `/llms.txt` for agent readability.

## Verify Before Launch Checklist

- [ ] Confirm T50/T40/T25/M3M specs against DJI official product pages.
- [ ] Verify current CASA requirements for aircraft over 25 kg.
- [ ] Check state-based chemical licensing rules for QLD, VIC, NSW, WA, SA, TAS, and NT.
- [ ] Confirm advertised package pricing aligns with supplier agreements and margins.
- [ ] Verify the indicative finance rate used in the calculator matches current market offers.

---
Built with WebForge v9.1
