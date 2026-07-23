export const projectsData = [
  {
    id: "bibliodrop",
    title: "BiblioDrop — Digital Library File Sharing",
    description: "A modern digital library platform for seamless file sharing, uploading, and downloading of academic resources. Features user authentication, file previews, and a clean, responsive UI.",
    image: "/projects/BiblioDrop.png",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Node.js", "Express.js", "JavaScript"],
    github: "https://github.com/cseanwar/bibliodrop-client.git",
    demo: "https://bibliodrop-client-two.vercel.app/",
    challenges: [
      "Handling large file uploads and stream processing reliably across varying network speeds without server memory spikes.",
      "Implementing fine-grained access control and preview generation for multi-format academic documents (PDF, DOCX, EPUB).",
      "Optimizing MongoDB database indexing and search query execution for instant title, subject, and tag filtering."
    ],
    futurePlans: [
      "Add real-time collaborative document annotation and PDF highlight sharing.",
      "Integrate AI-driven automatic summary generation for academic papers using LLM APIs.",
      "Implement chunked multi-part uploading with resume capability for poor network conditions."
    ]
  },
  {
    id: "booknplay",
    title: "BookNPlay — Sports Facility Booking Platform",
    description: "A premium, full-stack sports venue and court booking platform enabling users to seamlessly discover, reserve, and manage football turfs, badminton courts, swimming pools, and tennis courts with instant slot bookings.",
    image: "/projects/BookNPlay.png",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Node.js", "Express.js", "Better Auth"],
    github: "https://github.com/cseanwar/BookNPlay.git",
    demo: "https://book-n-play.vercel.app/",
    challenges: [
      "Preventing double-booking race conditions during simultaneous user checkouts for high-demand time slots.",
      "Building a dynamic schedule matrix generator that dynamically adjusts for venue opening hours and court maintenance times.",
      "Integrating secure authentication workflows and state persistence using Better Auth with server-side validation."
    ],
    futurePlans: [
      "Integrate payment gateway webhooks for instant automated booking confirmation and refund processing.",
      "Build a player matchmaking feature to help individuals find team members for open court reservations.",
      "Introduce an owner dashboard with real-time occupancy graphs and revenue analytics."
    ]
  },
  {
    id: "wanderlust",
    title: "Wanderlust — Travel Booking Platform",
    description: "A premium travel and destination discovery portal where users can explore featured locations, search by budget/duration, manage bookings, and view traveler reviews.",
    image: "/projects/wanderlust.png",
    tags: ["Next.js", "Tailwind CSS", "Better Auth", "MongoDB", "Node.js", "Express.js"],
    github: "https://github.com/cseanwar/wonderlust.git",
    demo: "https://wonderlust-liart.vercel.app/",
    challenges: [
      "Designing complex multi-filter database queries based on location, price range, trip duration, and customer ratings.",
      "Managing multi-step booking modal states with interactive date pickers and guest list management.",
      "Ensuring fast page load times and optimal image rendering for high-resolution destination galleries."
    ],
    futurePlans: [
      "Integrate interactive 3D map views powered by Mapbox for custom itinerary route planning.",
      "Implement an automated email itinerary sender with PDF download capabilities.",
      "Add user-generated travel stories, photo blogs, and community rating badges."
    ]
  },
  {
    id: "tilemax",
    title: "TileMax — Tiles Shop Website",
    description: "A premium e-commerce platform for high-end tiles and ceramics, featuring a sleek modern design and seamless browsing experience.",
    image: "/projects/Tile-Max.png",
    tags: ["Next.js", "Tailwind CSS", "Better Auth", "E-Commerce", "MongoDB"],
    github: "https://github.com/cseanwar/tiles-shop-website.git",
    demo: "https://tiles-shop-website.vercel.app/",
    challenges: [
      "Calculating custom square-footage and box count price estimation logic based on dimensions input by customers.",
      "Creating responsive image grid galleries with smooth hover zoom effects for texture inspection.",
      "Structuring cart and checkout workflows to handle heavy product specifications seamlessly."
    ],
    futurePlans: [
      "Build an AR room visualizer allowing users to preview ceramic tiles on their floor using device cameras.",
      "Add bulk quantity discount pricing calculators and contractor quotation requests.",
      "Implement order tracking and delivery scheduling integration."
    ]
  },
  {
    id: "dragon-news",
    title: "Dragon News",
    description: "A comprehensive news portal with category-based filtering and secure user authentication powered by BetterAuth.",
    image: "/projects/dragon-news.png",
    tags: ["Next.js", "BetterAuth", "Tailwind CSS"],
    github: "https://github.com/cseanwar/dragon-news-next-better-auth.git",
    demo: "https://dragon-news-next-better-auth.vercel.app/",
    challenges: [
      "Configuring server-side data fetching and dynamic routing for news category tags and article detail views.",
      "Implementing smooth authentication session persistence and protected bookmark route handlers.",
      "Designing a grid magazine layout that balances article hierarchy across desktop and mobile screens."
    ],
    futurePlans: [
      "Add personalized news feed customization based on reader interests and viewing history.",
      "Implement text-to-speech audio article readers for enhanced accessibility.",
      "Integrate push notifications for breaking news headlines."
    ]
  },
  {
    id: "friend-keeper",
    title: "Friend Keeper",
    description: "A personal CRM designed to help you nurture and track meaningful connections with friends and family in your busy life.",
    image: "/projects/keen-keeper.png",
    tags: ["React", "Tailwind CSS", "React Router"],
    github: "https://github.com/cseanwar/assignment7-keen-keeper.git",
    demo: "https://friend-keen-keeper.vercel.app/",
    challenges: [
      "Managing complex contact relationship states and interaction logs using React hooks without extra libraries.",
      "Designing reminder frequency notifications and milestone calculations (birthdays, catch-up intervals).",
      "Structuring responsive glassmorphic cards and modal forms for effortless contact entry."
    ],
    futurePlans: [
      "Add calendar sync integration (Google Calendar / iCal) for automated catch-up reminders.",
      "Build tag-based contact categorization and group messaging export functions.",
      "Implement data import/export features (vCard, CSV format support)."
    ]
  },
  {
    id: "digitools",
    title: "DigiTools — Digital Tools Buying Website",
    description: "An interactive, modern electronics and tech gadget buying catalog with real-time cart management, category filtering, and product specification grids.",
    image: "/projects/digitools.png",
    tags: ["React", "Tailwind CSS", "Context API"],
    github: "https://github.com/cseanwar/assignment6-digitools.git",
    demo: "https://assignment6-digitools-buying-website.netlify.app/",
    challenges: [
      "Managing dynamic shopping cart state across sibling components using React Context API.",
      "Building custom modal product detail popups with live spec comparison tags.",
      "Implementing local storage state synchronization to persist cart items across browser reloads."
    ],
    futurePlans: [
      "Implement dynamic tech spec comparison table to compare up to 4 devices side-by-side.",
      "Add real-time price trend alerts and coupon promo code integration at checkout.",
      "Integrate customer rating reviews and video product demonstration embeds."
    ]
  },
  {
    id: "pixgen",
    title: "PixGen — AI Image Generation Platform",
    description: "An innovative AI-powered image generation platform that transforms text prompts into stunning visual art pieces.",
    image: "/projects/pixgen.png",
    tags: ["Next.js", "Better Auth", "Tailwind CSS", "MongoDB", "Node.js"],
    github: "https://github.com/cseanwar/pixgen.git",
    demo: "https://pixgen-chi-pink.vercel.app/",
    challenges: [
      "Handling asynchronous API streaming and loading animations during high-latency AI model inference.",
      "Managing prompt history storage and community showcase galleries with MongoDB.",
      "Implementing credit-based generation limits and user authentication flow using Better Auth."
    ],
    futurePlans: [
      "Add image-to-image variations, inpainting, and outpainting canvas capabilities.",
      "Implement style preset selector templates (Cyberpunk, Photorealistic, Anime, WaterColor).",
      "Add high-resolution AI upscaling and download options for generated artwork."
    ]
  },
  {
    id: "bpl-dream-11",
    title: "BPL Dream 11 — Fantasy Cricket Team Selector",
    description: "A fantasy cricket application for the Bangladesh Premier League, allowing users to build and manage their dream team.",
    image: "/projects/dream11.png",
    tags: ["React", "Context API", "Tailwind CSS"],
    github: "https://github.com/cseanwar/bpl-dream-11.git",
    demo: "https://bpl-dream-11-by-react.netlify.app/",
    challenges: [
      "Enforcing budget constraint algorithms and player role caps (Batsmen, Bowlers, All-rounders) in real time.",
      "Handling coin credit claims and dynamic UI updates upon player selection and removal.",
      "Designing interactive player card toggles with feedback alerts for budget overruns."
    ],
    futurePlans: [
      "Integrate live BPL match scores API to calculate dynamic fantasy points based on match performance.",
      "Implement private leaderboard leagues to compete against friends.",
      "Add player stats breakdown graphs and head-to-head analysis tools."
    ]
  },
  {
    id: "book-vibe",
    title: "Book Vibe — Book Discovery & Reading List App",
    description: "A platform for book lovers to discover, review, and organize their reading lists with a focus on intuitive user experience.",
    image: "/projects/book-vibe.png",
    tags: ["React", "Tailwind CSS", "Local Storage", "Context API"],
    github: "https://github.com/cseanwar/book-vibe.git",
    demo: "https://book-vibe-beta.vercel.app/",
    challenges: [
      "Managing distinct list categories (Read List vs. Wishlist) without data duplication.",
      "Creating custom page sorting algorithms (by page count, rating, publication year).",
      "Structuring responsive tabbed UI navigation for seamless list toggling."
    ],
    futurePlans: [
      "Integrate Google Books API for auto-completing search queries and fetching rich metadata.",
      "Add annual reading target progress bars and reading speed statistics.",
      "Implement book recommendation engine based on user ratings."
    ]
  },
  {
    id: "job-tracker",
    title: "Job Application Tracker",
    description: "An intuitive job tracker dashboard that enables developers and job seekers to monitor application progress across Interview, Rejected, and Offer status with a responsive jobs board.",
    image: "/projects/job-tracker.png",
    tags: ["JavaScript", "DOM Manipulation", "CSS3", "Interactive Dashboard"],
    github: "https://github.com/cseanwar/assignment-4.git",
    demo: "https://interactive-web-for-job-tracker.netlify.app/",
    challenges: [
      "Vanilla JavaScript state management without framework re-rendering abstractions.",
      "Building clean drag-and-drop or modal status changers with dynamic DOM node mutations.",
      "Persisting application filter statistics (Applied, Interviewing, Hired, Rejected) in local memory."
    ],
    futurePlans: [
      "Migrate state model to React/Next.js with MongoDB backend database integration.",
      "Add interview schedule calendar views and follow-up email reminder templates.",
      "Implement resume attachment storage and salary progression graphs."
    ]
  },
  {
    id: "techwave",
    title: "TechWave — Premium Podcast Landing Page",
    description: "A sleek, responsive audio and technology podcast website showcasing episodes on AI, remote work productivity, and expert career roadmaps.",
    image: "/projects/techwave.png",
    tags: ["HTML5", "CSS3", "Responsive Design"],
    github: "https://github.com/cseanwar/assignment-2.git",
    demo: "https://responsive-wep-app.netlify.app/",
    challenges: [
      "Crafting pixel-perfect CSS Flexbox and Grid layouts compatible across legacy mobile browsers.",
      "Designing customized HTML5 media player skins for episode previews.",
      "Optimizing typography contrast and micro-interactions without relying on heavy external libraries."
    ],
    futurePlans: [
      "Add interactive audio player with playlist queuing, playback speed controls, and timestamped transcripts.",
      "Integrate RSS feed ingestion to automatically pull latest published episodes.",
      "Implement podcast newsletter subscription integration."
    ]
  },
  {
    id: "issue-tracker",
    title: "GitHub Issue Tracker",
    description: "A lightweight administrative portal designed to simulate GitHub issue logging, tracking, and status updates, secured with login credentials.",
    image: "/projects/issue-tracker.png",
    tags: ["React", "Tailwind CSS", "JavaScript(ES6+)"],
    github: "https://github.com/cseanwar/assignment-5.git",
    demo: "https://project-for-github-issue-tracker.netlify.app/",
    challenges: [
      "Simulating GitHub REST API issue schema (labels, assignees, milestones, status badges) client-side.",
      "Designing clean issue filtering tab controls (Open vs Closed) with real-time search.",
      "Enforcing role-based action access for issue creation and deletion."
    ],
    futurePlans: [
      "Integrate official GitHub REST/GraphQL API authentication for real repository sync.",
      "Add issue comment threads and markdown preview editor.",
      "Implement Kanban board view mode for issue triage."
    ]
  },
  {
    id: "payoo",
    title: "Payoo – Digital Wallet Simulation",
    description: "A secure mobile wallet interface featuring cash-in, cash-out, send money, bill pay, and interactive transactions logging with custom PIN verification.",
    image: "/projects/payoo.png",
    tags: ["JavaScript", "Tailwind CSS", "DaisyUI"],
    github: "https://github.com/cseanwar/payoo-app.git",
    demo: "https://cseanwar.github.io/payoo-app/",
    challenges: [
      "Implementing strict input validation and numeric PIN verification before updating wallet balance.",
      "Designing a realistic mobile-first financial portal UI using DaisyUI components.",
      "Generating dynamic timestamped transaction history entries for every financial action."
    ],
    futurePlans: [
      "Add multi-currency conversion support and peer-to-peer QR code scanning simulation.",
      "Implement spending category analytics charts (Bills, Transfers, Cashout).",
      "Add biometric mock login option for mobile web view."
    ]
  },
  {
    id: "english-janala",
    title: "English Janala — Language Learning Platform",
    description: "An interactive, accessible e-learning application designed for Bengali speakers to master English grammar, vocabulary lessons, and FAQ pronunciation guides.",
    image: "/projects/english-janala.png",
    tags: ["HTML5", "Tailwind CSS", "API Integration"],
    github: "https://github.com/cseanwar/project-english-janala.git",
    demo: "https://cseanwar.github.io/project-english-janala/",
    challenges: [
      "Designing clear bilingual lesson card UI and phonetic pronunciation tooltips.",
      "Ensuring high accessibility standards and screen reader compatibility for language learners.",
      "Handling external audio API integration for word pronunciation playback."
    ],
    futurePlans: [
      "Integrate speech recognition web API for real-time user pronunciation evaluation.",
      "Add gamified lesson progression badges and daily streak trackers.",
      "Implement interactive vocabulary flashcards with spaced repetition scheduling."
    ]
  },
  {
    id: "green-earth",
    title: "Green Earth — Global Tree Plantation Campaign",
    description: "An environmental awareness landing page and global reforestation store where users can choose trees to support climate action, track community impact, and plant trees.",
    image: "/projects/green-earth.png",
    tags: ["JavaScript", "CSS3", "API Integration"],
    github: "https://github.com/cseanwar/project-green-earth.git",
    demo: "https://cseanwar.github.io/project-green-earth/",
    challenges: [
      "Designing vibrant, nature-themed visuals and responsive grid landing page sections.",
      "Building interactive tree counter metrics with animated counters on scroll.",
      "Structuring modal donation popups with smooth payment option toggles."
    ],
    futurePlans: [
      "Integrate live satellite map overlays showing active reforestation project sites globally.",
      "Add individual carbon footprint calculator tool.",
      "Implement certificate of planting PDF generator for tree donors."
    ]
  }
];
