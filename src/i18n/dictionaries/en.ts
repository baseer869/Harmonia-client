import type { Dictionary } from './fr';

/** English dictionary — mirrors the French structure. */
export const en: Dictionary = {
  brand: { name: "HARMONIA", tagline: "Residence & Concierge" },

  nav: {
    owners: "Owners",
    ownersDrops: {
      presentation: "Overview & Benefits",
      formulas: "Our 3 Plans",
      services: "Included Services",
    },
    travelers: "Travelers",
    travelersDrops: {
      catalogue: "Service Catalogue",
      book: "Book a Service",
    },
    invest: "Investment",
    investDrops: {
      harmonia: "Harmonia Invest",
      steps: "End-to-End Support",
      forWho: "For Whom?",
    },
    about: "About",
    aboutDrops: {
      story: "Our Story",
      team: "The Founding Team",
      values: "Our Values",
    },
    partners: "Partners",
    partnersDrops: {
      broker: "Business Referrals",
      harmoniaPartners: "Harmonia Partners",
    },
    conditions: "Terms",
    contact: "Contact Us",
    cart: "Cart",
  },

  footer: {
    home: "Home",
    owners: "Owners",
    travelers: "Travelers",
    invest: "Investment",
    about: "About",
    partners: "Partners",
    contact: "Contact",
    tagline: "Residence & Concierge · Marrakech",
    rights: "All rights reserved · Marrakech, Morocco",
  },

  cart: {
    title: "Your Cart",
    currency: "Currency:",
    empty: "Your cart is empty",
    item: "Harmonia Service",
    total: "Total",
    depositLine: "30% Deposit",
    depositNote:
      "The balance is paid on arrival. Free cancellation up to 48h before.",
    viewCart: "View Cart & Book →",
    continue: "← Continue shopping",
  },

  home: {
    hero: {
      badge: "Premium Concierge · Marrakech",
      title1: "EXPERIENCE",
      titleHighlight: "MARRAKECH",
      title2: "DIFFERENTLY",
      subtitle: "Your stay, our priority.",
      ctaBook: "Book a service",
      ctaOwners: "Owners area",
      cardQuote:
        '"Your property,\nour expertise,\ntheir unforgettable experience."',
      cardLabel: "Harmonia · The art of concierge",
      stats: [
        { n: "+40%", l: "Average revenue" },
        { n: "95%", l: "Satisfaction rate" },
        { n: "24/7", l: "Availability" },
        { n: "+50", l: "Team members" },
      ],
    },
    owners: {
      eyebrow: "For Owners",
      title1: "We maximize your revenue.",
      titleHighlight: "You manage nothing.",
      desc: "Harmonia is a premium concierge specialized in property management and the creation of unique experiences in Marrakech. A bespoke, human and flawless service.",
      checks: [
        "Up to +40% revenue on average",
        "Optimized occupancy rate",
        "No day-to-day management",
        "Secure and transparent payments",
        "Detailed monthly reporting",
      ],
      cta: "Learn more",
      metrics: [
        { n: "+40%", l: "Revenue" },
        { n: "100%", l: "Transparency" },
        { n: "24/7", l: "Support" },
        { n: "0", l: "Constraint" },
      ],
    },
    catalog: {
      eyebrow: "For Travelers",
      title: "Our",
      titleHighlight: "Service Catalogue",
      sub: "Bespoke, authentic and unforgettable experiences in Marrakech.",
      book: "Book",
      viewAll: "See the full catalogue →",
    },
    invest: {
      tag: "Harmonia Invest",
      title1: "Turnkey real-estate",
      titleHighlight: "investment",
      title2: "in Marrakech",
      desc: "We handle everything — you collect your returns.",
      kpis: [
        { n: "Turn", l: "Key" },
        { n: "0", l: "Constraint" },
        { n: "20%", l: "Guaranteed margin" },
      ],
      cta: "Discover Harmonia Invest",
      exampleTitle: "Concrete Example",
      rows: [
        { l: "Total investment", v: "€200,000", gold: false },
        { l: "Target monthly income", v: "€2,500", gold: true },
        { l: "Estimated occupancy", v: "70%", gold: false },
        { l: "Estimated annual income", v: "€21,000", gold: true },
      ],
      highlight: "Guaranteed management margin: 20%",
    },
    team: {
      eyebrow: "The Founders",
      title: "A",
      titleHighlight: "French-Moroccan Team",
      sub: "Local & international expertise, a shared passion for excellence.",
      members: [
        {
          i: "H",
          n: "HICHAM",
          r: "Co-founder · French-Moroccan",
          b: "Master’s in real-estate management. Expertise in consulting, management, fit-out and property yield.",
        },
        {
          i: "M",
          n: "MOHAMED",
          r: "Co-founder · French-Tunisian",
          b: "5 years of team management experience in France. Customer-satisfaction expert.",
        },
        {
          i: "N",
          n: "NICOLAS",
          r: "Co-founder · French",
          b: "Hospitality-school graduate, entrepreneur for 10 years. Brings his network and expertise.",
        },
      ],
      cta: "Discover our story →",
    },
    contact: {
      tagline1: "Let’s talk about",
      taglineEm: "your project.",
      desc: "Our team is available 24/7.",
      phoneLabel: "Phone & WhatsApp",
      phone: "+212 6 00 00 00 00",
      emailLabel: "Email",
      email: "contact@harmonia-conciergerie.ma",
      addressLabel: "Address",
      address: "Marrakech, Morocco",
      form: {
        firstName: "First name",
        lastName: "Last name",
        email: "Email",
        phone: "Phone / WhatsApp",
        rolePlaceholder: "I am…",
        roles: ["Owner", "Investor", "Traveler", "Partner", "Other"],
        message: "Your message or project…",
        submit: "Send my request →",
      },
    },
  },

  pages: {
    voyageurs: {
      heroEyebrow: "For Travelers",
      heroTitle: "Service Catalogue",
      intro:
        "Bespoke, authentic and unforgettable experiences in Marrakech. Book in a few clicks, pay a 30% deposit, settle the balance on site.",
      bookCta: "Book",
      details: "View details",
    },
    service: {
      tabDescription: "Description",
      tabIncluded: "Included",
      tabInfo: "Practical Info",
      tabReviews: "Reviews",
      optionsTitle: "Available options",
      extrasTitle: "Optional extras",
      add: "+ Add",
      remove: "Remove",
      bookNow: "Book now",
      addToCart: "+ Add to cart",
      deposit: "30% deposit",
      depositNote:
        "on booking. Balance paid on arrival. Free cancellation up to 48h before.",
      bookingNote: "Instant confirmation · Secure payment",
      person: "person",
      persons: "people",
      dateConfirm: "Date to confirm",
    },
    panier: {
      eyebrow: "My Cart",
      titleA: "Your",
      titleB: "Selection",
      emptyTitle: "Your cart is empty",
      emptySub: "Discover our services and add some to your cart.",
      explore: "Explore our services",
      selected: "Selected services",
      itemCat: "Harmonia Service",
      remove: "Remove",
      summary: "Summary",
      currency: "Currency:",
      total: "Total",
      depositLbl: "30% deposit due",
      depositNote:
        "The balance is paid on arrival. Free cancellation up to 48h before.",
      checkout: "Confirm & Pay deposit →",
    },
  },

  categories: {
    excursions: {
      name: "Excursions & Adventures",
      items: [
        "Agafay / Sahara desert",
        "Quad, Buggy & Camel",
        "Hot-air balloon",
      ],
      price: "From 250 MAD / person",
    },
    bienetre: {
      name: "Wellness & Relaxation",
      items: [
        "Traditional hammam",
        "Massages & Treatments",
        "Moroccan spa & rituals",
      ],
      price: "From 200 MAD / person",
    },
    transport: {
      name: "Transport & Transfers",
      items: ["Airport transfer", "Private driver", "Car rental"],
      price: "From 150 MAD / trip",
    },
    gastro: {
      name: "Gastronomy",
      items: ["Private chef at home", "Cooking class", "Traditional dinner"],
      price: "From 300 MAD / person",
    },
    activites: {
      name: "Activities & Leisure",
      items: ["Majorelle Garden", "Private parties & clubs", "Photo shoot"],
      price: "From 150 MAD / person",
    },
    domicile: {
      name: "Home Services",
      items: ["Cleaning & Maintenance", "Breakfast", "Babysitting"],
      price: "On quote",
    },
    shopping: {
      name: "Shopping & Crafts",
      items: ["Shopping guide", "Personal shopper", "Crafts & Souvenirs"],
      price: "On quote",
    },
    evenements: {
      name: "Events & Celebrations",
      items: ["Birthday & Bachelor(ette)", "Wedding proposal", "Private party"],
      price: "On quote",
    },
    packs: {
      name: "Bespoke Packages",
      items: ["Turnkey stays", "100% personalized", "All inclusive"],
      price: "Contact us",
    },
    cadeaux: {
      name: "Products & Gifts",
      items: ["Argan oil", "Gift boxes", "Local produce"],
      price: "From 120 MAD",
    },
  },
};
