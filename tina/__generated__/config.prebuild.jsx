// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      // ── Global site settings ──
      {
        name: "global",
        label: "Site Settings",
        path: "content/global",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          { name: "companyName", label: "Company Name", type: "string", required: true },
          { name: "phone", label: "Phone Number", type: "string", required: true },
          { name: "email", label: "Email", type: "string", required: true },
          { name: "address", label: "Address", type: "string" },
          { name: "hours", label: "Business Hours", type: "string" }
        ]
      },
      // ── Homepage ──
      {
        name: "home",
        label: "Homepage",
        path: "content/pages",
        format: "json",
        match: { include: "home" },
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          { name: "seoTitle", label: "SEO Title", type: "string", required: true },
          { name: "seoDescription", label: "SEO Description", type: "string" },
          // Hero
          { name: "heroBadge", label: "Hero Badge", type: "string" },
          { name: "heroTitle", label: "Hero Title", type: "string", required: true },
          { name: "heroHighlight", label: "Hero Highlight Word", type: "string" },
          { name: "heroDescription", label: "Hero Description", type: "string", ui: { component: "textarea" } },
          { name: "heroCta1Text", label: "Hero Button 1 Text", type: "string" },
          { name: "heroCta1Link", label: "Hero Button 1 Link", type: "string" },
          { name: "heroCta2Text", label: "Hero Button 2 Text", type: "string" },
          { name: "heroCta2Link", label: "Hero Button 2 Link", type: "string" },
          {
            name: "heroStats",
            label: "Hero Stats",
            type: "object",
            list: true,
            fields: [
              { name: "value", label: "Value", type: "string" },
              { name: "label", label: "Label", type: "string" }
            ]
          },
          // Services grid
          {
            name: "services",
            label: "Services",
            type: "object",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
            fields: [
              { name: "badge", label: "Badge", type: "string" },
              { name: "title", label: "Title", type: "string", required: true },
              { name: "description", label: "Description", type: "string", ui: { component: "textarea" } },
              { name: "link", label: "Link", type: "string" }
            ]
          },
          // Battery split section
          { name: "batterySplitImage", label: "Battery Split Image", type: "image" },
          { name: "batterySplitHeading", label: "Battery Split Heading", type: "string" },
          { name: "batterySplitText", label: "Battery Split Text", type: "string", ui: { component: "textarea" } },
          { name: "batterySplitCtaText", label: "Battery Split CTA Text", type: "string" },
          { name: "batterySplitCtaLink", label: "Battery Split CTA Link", type: "string" },
          // Why Us section
          {
            name: "whyUs",
            label: "Why Us Cards",
            type: "object",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
            fields: [
              { name: "title", label: "Title", type: "string", required: true },
              { name: "description", label: "Description", type: "string", ui: { component: "textarea" } }
            ]
          },
          // Equipment split section
          { name: "equipmentSplitImage", label: "Equipment Split Image", type: "image" },
          { name: "equipmentSplitHeading", label: "Equipment Split Heading", type: "string" },
          { name: "equipmentSplitText", label: "Equipment Split Text", type: "string", ui: { component: "textarea" } },
          { name: "equipmentSplitCtaText", label: "Equipment Split CTA Text", type: "string" },
          { name: "equipmentSplitCtaLink", label: "Equipment Split CTA Link", type: "string" },
          // Image banner
          { name: "bannerImage", label: "Banner Image", type: "image" },
          { name: "bannerHeading", label: "Banner Heading", type: "string" },
          { name: "bannerText", label: "Banner Text", type: "string" },
          // CTA
          { name: "ctaHeading", label: "CTA Heading", type: "string" },
          { name: "ctaText", label: "CTA Text", type: "string" },
          { name: "ctaCta1Text", label: "CTA Button 1 Text", type: "string" },
          { name: "ctaCta1Link", label: "CTA Button 1 Link", type: "string" },
          { name: "ctaCta2Text", label: "CTA Button 2 Text", type: "string" },
          { name: "ctaCta2Link", label: "CTA Button 2 Link", type: "string" }
        ]
      },
      // ── Batteries page ──
      {
        name: "batteries",
        label: "Batteries Page",
        path: "content/pages",
        format: "json",
        match: { include: "batteries" },
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          { name: "seoTitle", label: "SEO Title", type: "string", required: true },
          { name: "seoDescription", label: "SEO Description", type: "string" },
          { name: "heroBadge", label: "Hero Badge", type: "string" },
          { name: "heroTitle", label: "Hero Title", type: "string" },
          { name: "heroHighlight", label: "Hero Highlight Word", type: "string" },
          { name: "heroDescription", label: "Hero Description", type: "string", ui: { component: "textarea" } },
          { name: "heroCta1Text", label: "Hero Button 1 Text", type: "string" },
          { name: "heroCta1Link", label: "Hero Button 1 Link", type: "string" },
          { name: "heroCta2Text", label: "Hero Button 2 Text", type: "string" },
          { name: "heroCta2Link", label: "Hero Button 2 Link", type: "string" },
          // Lithium section
          { name: "lithiumHeading", label: "Lithium Section Heading", type: "string" },
          { name: "lithiumSubtitle", label: "Lithium Section Subtitle", type: "string", ui: { component: "textarea" } },
          {
            name: "lithiumCards",
            label: "Lithium Benefit Cards",
            type: "object",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
            fields: [
              { name: "badge", label: "Badge", type: "string" },
              { name: "title", label: "Title", type: "string", required: true },
              { name: "description", label: "Description", type: "string", ui: { component: "textarea" } }
            ]
          },
          // Split section
          { name: "splitImage", label: "Split Image", type: "image" },
          { name: "splitHeading", label: "Split Heading", type: "string" },
          { name: "splitText", label: "Split Text", type: "string", ui: { component: "textarea" } },
          { name: "splitCtaText", label: "Split CTA Text", type: "string" },
          { name: "splitCtaLink", label: "Split CTA Link", type: "string" },
          // Rejuvenation section
          { name: "rejuvHeading", label: "Rejuvenation Heading", type: "string" },
          { name: "rejuvSubtitle", label: "Rejuvenation Subtitle", type: "string", ui: { component: "textarea" } },
          {
            name: "rejuvCards",
            label: "Rejuvenation Cards",
            type: "object",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
            fields: [
              { name: "title", label: "Title", type: "string", required: true },
              { name: "description", label: "Description", type: "string", ui: { component: "textarea" } }
            ]
          },
          { name: "rejuvCtaText", label: "Rejuvenation CTA Text", type: "string" },
          { name: "rejuvCtaLink", label: "Rejuvenation CTA Link", type: "string" },
          // Equipment types
          { name: "equipHeading", label: "Equipment Section Heading", type: "string" },
          { name: "equipSubtitle", label: "Equipment Section Subtitle", type: "string", ui: { component: "textarea" } },
          {
            name: "equipCards",
            label: "Equipment Type Cards",
            type: "object",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
            fields: [
              { name: "title", label: "Title", type: "string", required: true },
              { name: "description", label: "Description", type: "string", ui: { component: "textarea" } }
            ]
          },
          // CTA
          { name: "ctaHeading", label: "CTA Heading", type: "string" },
          { name: "ctaText", label: "CTA Text", type: "string" }
        ]
      },
      // ── Service page ──
      {
        name: "service",
        label: "Service Page",
        path: "content/pages",
        format: "json",
        match: { include: "service" },
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          { name: "seoTitle", label: "SEO Title", type: "string", required: true },
          { name: "seoDescription", label: "SEO Description", type: "string" },
          { name: "heroBadge", label: "Hero Badge", type: "string" },
          { name: "heroTitle", label: "Hero Title", type: "string" },
          { name: "heroHighlight", label: "Hero Highlight Word", type: "string" },
          { name: "heroDescription", label: "Hero Description", type: "string", ui: { component: "textarea" } },
          { name: "heroCta1Text", label: "Hero Button 1 Text", type: "string" },
          { name: "heroCta1Link", label: "Hero Button 1 Link", type: "string" },
          { name: "heroCta2Text", label: "Hero Button 2 Text", type: "string" },
          { name: "heroCta2Link", label: "Hero Button 2 Link", type: "string" },
          // Services grid
          {
            name: "serviceCards",
            label: "Service Cards",
            type: "object",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
            fields: [
              { name: "badge", label: "Badge", type: "string" },
              { name: "title", label: "Title", type: "string", required: true },
              { name: "description", label: "Description", type: "string", ui: { component: "textarea" } }
            ]
          },
          // Image banner
          { name: "bannerImage", label: "Banner Image", type: "image" },
          { name: "bannerHeading", label: "Banner Heading", type: "string" },
          { name: "bannerText", label: "Banner Text", type: "string" },
          // Equipment we service
          { name: "equipHeading", label: "Equipment Section Heading", type: "string" },
          { name: "equipSubtitle", label: "Equipment Subtitle", type: "string" },
          {
            name: "equipCards",
            label: "Equipment We Service Cards",
            type: "object",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
            fields: [
              { name: "title", label: "Title", type: "string", required: true },
              { name: "description", label: "Description", type: "string", ui: { component: "textarea" } }
            ]
          },
          // CTA
          { name: "ctaHeading", label: "CTA Heading", type: "string" },
          { name: "ctaText", label: "CTA Text", type: "string" }
        ]
      },
      // ── Equipment page ──
      {
        name: "equipment",
        label: "Equipment Page",
        path: "content/pages",
        format: "json",
        match: { include: "equipment" },
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          { name: "seoTitle", label: "SEO Title", type: "string", required: true },
          { name: "seoDescription", label: "SEO Description", type: "string" },
          { name: "heroBadge", label: "Hero Badge", type: "string" },
          { name: "heroTitle", label: "Hero Title", type: "string" },
          { name: "heroHighlight", label: "Hero Highlight Word", type: "string" },
          { name: "heroDescription", label: "Hero Description", type: "string", ui: { component: "textarea" } },
          { name: "heroCta1Text", label: "Hero Button 1 Text", type: "string" },
          { name: "heroCta1Link", label: "Hero Button 1 Link", type: "string" },
          { name: "heroCta2Text", label: "Hero Button 2 Text", type: "string" },
          { name: "heroCta2Link", label: "Hero Button 2 Link", type: "string" },
          // Equipment grid
          {
            name: "equipCards",
            label: "Equipment Cards",
            type: "object",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
            fields: [
              { name: "badge", label: "Badge", type: "string" },
              { name: "title", label: "Title", type: "string", required: true },
              { name: "description", label: "Description", type: "string", ui: { component: "textarea" } }
            ]
          },
          // Image banner
          { name: "bannerImage", label: "Banner Image", type: "image" },
          { name: "bannerHeading", label: "Banner Heading", type: "string" },
          { name: "bannerText", label: "Banner Text", type: "string" },
          // Inventory section
          { name: "inventoryHeading", label: "Inventory Heading", type: "string" },
          { name: "inventorySubtitle", label: "Inventory Subtitle", type: "string", ui: { component: "textarea" } },
          { name: "inventoryPlaceholder", label: "Inventory Placeholder Text", type: "string", ui: { component: "textarea" } },
          // Why buy section
          {
            name: "whyBuyCards",
            label: "Why Buy Cards",
            type: "object",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
            fields: [
              { name: "title", label: "Title", type: "string", required: true },
              { name: "description", label: "Description", type: "string", ui: { component: "textarea" } }
            ]
          },
          // CTA
          { name: "ctaHeading", label: "CTA Heading", type: "string" },
          { name: "ctaText", label: "CTA Text", type: "string" }
        ]
      },
      // ── Racking & Dock Doors page ──
      {
        name: "racking",
        label: "Racking & Dock Doors Page",
        path: "content/pages",
        format: "json",
        match: { include: "racking" },
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          { name: "seoTitle", label: "SEO Title", type: "string", required: true },
          { name: "seoDescription", label: "SEO Description", type: "string" },
          { name: "heroBadge", label: "Hero Badge", type: "string" },
          { name: "heroTitle", label: "Hero Title", type: "string" },
          { name: "heroHighlight", label: "Hero Highlight Word", type: "string" },
          { name: "heroDescription", label: "Hero Description", type: "string", ui: { component: "textarea" } },
          { name: "heroCta1Text", label: "Hero Button 1 Text", type: "string" },
          { name: "heroCta1Link", label: "Hero Button 1 Link", type: "string" },
          // Racking grid
          { name: "rackingHeading", label: "Racking Section Heading", type: "string" },
          { name: "rackingSubtitle", label: "Racking Subtitle", type: "string", ui: { component: "textarea" } },
          {
            name: "rackingCards",
            label: "Racking Cards",
            type: "object",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
            fields: [
              { name: "badge", label: "Badge", type: "string" },
              { name: "title", label: "Title", type: "string", required: true },
              { name: "description", label: "Description", type: "string", ui: { component: "textarea" } }
            ]
          },
          // Image banner
          { name: "bannerImage", label: "Banner Image", type: "image" },
          { name: "bannerHeading", label: "Banner Heading", type: "string" },
          { name: "bannerText", label: "Banner Text", type: "string" },
          // Dock doors section
          { name: "dockHeading", label: "Dock Doors Section Heading", type: "string" },
          { name: "dockSubtitle", label: "Dock Doors Subtitle", type: "string", ui: { component: "textarea" } },
          {
            name: "dockCards",
            label: "Dock Door Cards",
            type: "object",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
            fields: [
              { name: "title", label: "Title", type: "string", required: true },
              { name: "description", label: "Description", type: "string", ui: { component: "textarea" } }
            ]
          },
          // CTA
          { name: "ctaHeading", label: "CTA Heading", type: "string" },
          { name: "ctaText", label: "CTA Text", type: "string" }
        ]
      },
      // ── Parts page ──
      {
        name: "parts",
        label: "Parts Page",
        path: "content/pages",
        format: "json",
        match: { include: "parts" },
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          { name: "seoTitle", label: "SEO Title", type: "string", required: true },
          { name: "seoDescription", label: "SEO Description", type: "string" },
          { name: "heroBadge", label: "Hero Badge", type: "string" },
          { name: "heroTitle", label: "Hero Title", type: "string" },
          { name: "heroHighlight", label: "Hero Highlight Word", type: "string" },
          { name: "heroDescription", label: "Hero Description", type: "string", ui: { component: "textarea" } },
          { name: "heroCta1Text", label: "Hero Button 1 Text", type: "string" },
          { name: "heroCta1Link", label: "Hero Button 1 Link", type: "string" },
          {
            name: "featureCards",
            label: "Feature Cards",
            type: "object",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Card" }) },
            fields: [
              { name: "badge", label: "Badge", type: "string" },
              { name: "title", label: "Title", type: "string", required: true },
              { name: "description", label: "Description", type: "string", ui: { component: "textarea" } }
            ]
          },
          // CTA
          { name: "ctaHeading", label: "CTA Heading", type: "string" },
          { name: "ctaText", label: "CTA Text", type: "string" }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
