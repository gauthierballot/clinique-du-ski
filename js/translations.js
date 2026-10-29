/**
 * translations.js
 * ===============
 * Tous les textes du site en français et en anglais.
 *
 * COMMENT MODIFIER UN TEXTE ?
 * Trouve la clé correspondante ci-dessous et change la valeur entre guillemets.
 * Les balises HTML (<strong>, <br>) sont autorisées dans les valeurs.
 *
 * COMMENT AJOUTER UNE LANGUE ?
 * Duplique le bloc "fr" ou "en", change le code de langue (ex: "de"),
 * traduis toutes les valeurs, puis ajoute le code dans le sélecteur HTML.
 */

const translations = {

  /* ============================================================
     FRANÇAIS
  ============================================================ */
  fr: {

    // ----- Barre de navigation -----
    nav: {
      home:     "Accueil",
      services: "Services & Prix",
    },

    // ----- Hero (grande bannière d'accueil) -----
    hero: {
      title:    "La Clinique<br>du Ski",
      subtitle: "Je soigne tes skis.",
      tagline:  "Fartage · Affûtage · Pays de Gex",
      cta:      "Voir les services & prix",
    },

    // ----- Section "Qui suis-je" -----
    about: {
      sectionLabel: "À propos",
      title: "QUI SUIS-JE",
      p1: "Je m'appelle <strong>Gauthier Ballot</strong>, ancien skieur de compétition passionné par la glisse depuis toujours. J'ai longtemps chaussé les skis sur les pistes du Pays de Gex et au-delà.",
      p2: "Aujourd'hui je mets cette expertise au service des skieurs d'ici : familles, jeunes, compétiteurs de club, ou simples amoureux de la poudreuse. Tes skis méritent le même soin que ceux des pros — je m'en occupe.",
    },

    // ----- Section "Pourquoi faire préparer ses skis ?" -----
    why: {
      sectionLabel: "Les bénéfices",
      title: "Pourquoi faire préparer ses skis ?",
      cards: [
        {
          icon:  "zap",
          title: "Plus de glisse",
          text:  "Un fartage régulier, c'est la garantie d'une semelle qui glisse vraiment. Fini les skis lents ou qui accrochent à mi-pente.",
        },
        {
          icon:  "crosshair",
          title: "Contrôle & Sécurité",
          text:  "Des carres bien affûtées, c'est ta sécurité et une précision totale dans les virages. Tu gardes l'accroche même sur neige dure ou glacée, et tu commandes vraiment ta trajectoire.",
        },
        {
          icon:  "shield",
          title: "Skis qui durent",
          text:  "Un entretien régulier protège la semelle et les carres. Tes skis restent performants saison après saison.",
        },
      ],
    },

    // ----- Section "Comment ça marche ?" -----
    how: {
      sectionLabel: "Le processus",
      title: "Comment ça marche ?",
      steps: [
        {
          num:   "01",
          title: "Tu me contactes",
          text:  "Un SMS, un appel, un e-mail — comme tu préfères. Tu m'expliques ce dont tu as besoin et je te dis quand passer.",
        },
        {
          num:   "02",
          title: "Tu passes chez moi",
          text:  "Tu viens déposer tes skis directement chez moi dans le Pays de Gex. Dépôt rapide, sans prise de tête.",
        },
        {
          num:   "03",
          title: "Tu récupères, tu glisses",
          text:  "Tes skis sont traités avec soin et rendus prêts à repartir sur les pistes. Simple et efficace.",
        },
      ],
    },

    // ----- Accordéon de contact (présent sur chaque page) -----
    contact: {
      title:      "Me contacter",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
    },

    // ----- Pied de page -----
    footer: {
      tagline:   "L'atelier de préparation des skis du Pays de Gex.",
      copyright: "© La Clinique du Ski — Gauthier Ballot",
      legal:     "Mentions légales",
    },

    // ----- Page Services : Hero mini -----
    servicesHero: {
      title:    "Nos soins",
      subtitle: "Des prestations claires, des prix honnêtes.",
    },

    // ----- Page Services : Cartes tarifaires -----
    services: {
      sectionLabel:      "Tarifs",
      badge:             "⭐ Le plus populaire",
      competitorBanner:  "🎽 Tarif compétiteur : sur présentation de ta licence de compétition ou de ton club",
      cards: [
        {
          // Carte 0 — Fartage simple
          title:       "Fartage simple",
          price:       "10 €",
          description: "Application d'un fart adapté aux conditions du moment.",
          detail:      "Idéal pour entretenir ta semelle régulièrement et conserver une glisse optimale. Conseillé toutes les 5 à 8 sorties. Pour tous les skieurs.",
        },
        {
          // Carte 1 — Fartage + Affûtage (mise en avant)
          title:       "Fartage + Affûtage",
          price:       "25 €",
          priceAlt:    "20 € pour les compétiteurs",
          description: "Fartage complet + affûtage des carres à la machine.",
          detail:      "La préparation complète : semelle propre et rapide, carres précises. Recommandé en début et milieu de saison, ou quand tu sens tes virages moins accrocheurs.",
        },
        {
          // Carte 2 — Rebouchage semelle
          title:       "Rebouchage semelle",
          price:       "+ 5 €",
          description: "Réparation des trous et rayures profondes de la semelle.",
          detail:      "En supplément de toute autre prestation. Indispensable si ta semelle a pris des coups de cailloux ou de bord de piste. Je répare les blessures de ta semelle.",
        },
        {
          // Carte 3 — Pass Fartage
          title:         "Pass Fartage",
          price:         "40 €",
          priceOriginal: "50 €",
          description:   "5 fartages simples pour le prix de 4, valable toute la saison.",
          detail:        "L'offre fidélité pour les habitués. Tu prépares ta saison en avance, tu économises 10 €. Non cumulable avec le tarif compétiteur.",
        },
      ],
    },

  }, // fin fr


  /* ============================================================
     ENGLISH
  ============================================================ */
  en: {

    // ----- Navigation -----
    nav: {
      home:     "Home",
      services: "Services & Prices",
    },

    // ----- Hero -----
    hero: {
      title:    "La Clinique<br>du Ski",
      subtitle: "I take care of your skis.",
      tagline:  "Waxing · Tuning · Pays de Gex",
      cta:      "See services & prices",
    },

    // ----- About -----
    about: {
      sectionLabel: "About",
      title: "WHO I AM",
      p1: "I'm <strong>Gauthier Ballot</strong>, a former competitive skier who's been passionate about skiing his whole life. I spent years racing on the slopes of the Pays de Gex and beyond.",
      p2: "Now I put that expertise to work for the skiers around here — families, young riders, club competitors, powder enthusiasts. Your skis deserve pro-level care, and I'll make sure they get it.",
    },

    // ----- Why -----
    why: {
      sectionLabel: "The benefits",
      title: "Why get your skis tuned?",
      cards: [
        {
          icon:  "zap",
          title: "Better glide",
          text:  "Regular waxing means a base that actually glides. No more slow or sticky skis on the way down.",
        },
        {
          icon:  "crosshair",
          title: "Control & Safety",
          text:  "Sharp edges mean total safety and precision in every turn. You maintain solid grip even on hard snow or ice, fully in control of your line.",
        },
        {
          icon:  "shield",
          title: "Skis that last",
          text:  "Regular maintenance protects your base and edges from wear. Your skis stay fast and precise season after season.",
        },
      ],
    },

    // ----- How -----
    how: {
      sectionLabel: "The process",
      title: "How does it work?",
      steps: [
        {
          num:   "01",
          title: "Get in touch",
          text:  "Text, call, or email — whatever works best. Tell me what you need and I'll tell you when to drop by.",
        },
        {
          num:   "02",
          title: "Drop by my place",
          text:  "Bring your skis directly to my place in the Pays de Gex. Quick and hassle-free.",
        },
        {
          num:   "03",
          title: "Pick them up, hit the slopes",
          text:  "Your skis are tuned with care and ready to fly. Clean, fast, and simple.",
        },
      ],
    },

    // ----- Contact -----
    contact: {
      title:      "Get in touch",
      emailLabel: "Email",
      phoneLabel: "Phone",
    },

    // ----- Footer -----
    footer: {
      tagline:   "Ski prep workshop in the Pays de Gex.",
      copyright: "© La Clinique du Ski — Gauthier Ballot",
      legal:     "Legal notice",
    },

    // ----- Services hero -----
    servicesHero: {
      title:    "Services",
      subtitle: "Clear services, honest prices.",
    },

    // ----- Services cards -----
    services: {
      sectionLabel:     "Pricing",
      badge:            "⭐ Most popular",
      competitorBanner: "🎽 Competitor rate: show your competition license or club card",
      cards: [
        {
          title:       "Simple wax",
          price:       "10 €",
          description: "Wax application suited to current snow conditions.",
          detail:      "Great for keeping your base in shape and maintaining good glide. Recommended every 5–8 ski days. For all skiers.",
        },
        {
          title:       "Wax + Edge tune",
          price:       "25 €",
          priceAlt:    "20 € for competitors",
          description: "Full wax + machine edge sharpening.",
          detail:      "The complete treatment: clean fast base, sharp precise edges. Recommended at the start of the season or when your turns feel off.",
        },
        {
          title:       "Base repair",
          price:       "+ 5 €",
          description: "Repair of holes and deep gouges in the base.",
          detail:      "Add-on to any other service. Essential if your base has taken hits from rocks or trail edges. I fix the damage.",
        },
        {
          title:         "Wax Pass",
          price:         "40 €",
          priceOriginal: "50 €",
          description:   "5 simple waxes for the price of 4, valid all season.",
          detail:        "The loyalty offer for regulars. Lock in your season upfront and save €10. Cannot be combined with competitor pricing.",
        },
      ],
    },

  }, // fin en

}; // fin translations
