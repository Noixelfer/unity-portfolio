import drivingSchool from "../assets/img-projects/driving_school.jpg";
import taxiSim from "../assets/img-projects/taxi_simulator.jpg";
import policeSim from "../assets/img-projects/police_simulator.jpg";

export const projects = [
  {
    id: "driving-school-simulator",
    title: "Driving School Simulator : Evo",
    shortDescription: "Core project development from initial production through post-launch updates",
    longDescription: {
      overview: "Worked on Driving School Simulator: Evo from the beginning of the project through launch and multiple post-release updates, contributing to both core gameplay development and long-term live support.",
      responsibilities: [
        "Designed and implemented core gameplay systems (drag race, tuning, cameras)",
        "Built runtime lightmap switching for mobile performance",
        "Optimized performance to keep the game running smoothly across low-end mobile devices",
        "Implemented custom shader stripping to reduce build time and final game size",
        "Created Unity editor tools and pipelines",
        "Integrated Firebase analytics and crash reporting",
        "Delivered post-launch content updates and new features while leading and coordinating a team of developers"
      ],
      impact: [
        "Live mobile title with millions of downloads",
        "Improved development iteration speed",
        "Stable performance across a wide range of devices"
      ]
    },
    image: drivingSchool.src,
    youtubeId: "_EjlbJVTDpQ",
    technologies: ["Unity 6", "URP", "Fusion", "Firebase"],
    stores: [
      {
        platform: "android",
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.ovilex.drivingschoolsimulatorevo",
      },
      {
        platform: "ios",
        label: "App Store",
        url: "https://apps.apple.com/la/app/driving-school-simulator-evo/id1075939556",
      }
    ],
    totalDownloads: "5M+",
    sourceUrl: null, // or remove if not public
    category: "unity",

    gallery: [],
    videos: [
      {
        label: "Intro",
        start: 8
      },
      {
        label: "Multiplayer Interaction",
        start: 27
      },
      {
        label: "Gameplay",
        start: 68
      },
      {
        label: "Drag Race",
        start: 100
      },
      {
        label: "Car Tuning",
        start: 120
      }
    ],
  },
  {
    id: "police-simulator",
    title: "Police Simulator : Car Patrol",
    shortDescription: "Late-stage production work focused on loading, streaming, tooling, and Android delivery",
    longDescription: {
      overview: "Joined Police Simulator: Car Patrol while it was already in production, contributing before release with a focus on loading performance, world streaming, internal tooling, and platform delivery requirements.",
      responsibilities: [
        "Greatly improved loading times using Addressables and better dependency management",
        "Created editor tools to speed up cutscene and mission setup",
        "Implemented a streaming system for terrain, lightmaps, and props",
        "Built a build-pipeline step that prepared scenes for streaming",
        "Updated the project to comply with Google Play requirements using Play Asset Delivery",
        "Handled the Nintendo Switch port, adapting the project for platform-specific technical requirements"
      ],
      impact: [
        "Reduced loading overhead and improved content delivery workflow",
        "Enabled a more scalable open-world setup through streamed scene content",
        "Improved production efficiency with internal tooling for mission and cutscene workflows",
        "Prepared the project for Google Play distribution constraints on Android and expanded release support to Nintendo Switch"
      ]
    },
    image: policeSim.src,
    youtubeId: "Fojw42lMW6w",
    technologies: ["Unity 6", "URP", "Fusion", "Firebase"],
    stores: [
      {
        platform: "android",
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.ovilex.policesim2020",
      },
      {
        platform: "ios",
        label: "App Store",
        url: "https://apps.apple.com/us/app/police-simulator-car-patrol/id1578857252",
      },
      {
        platform: "nintendo",
        label: "Nintendo Switch",
        url: "https://www.nintendo.com/us/store/products/police-simulator-2023-switch/?srsltid=AfmBOooKNDgsw3-I6l8NYwAtonjQDXHxKN5HrZdFQpSvBxTXXpjFRoek",
      },
    ],
    totalDownloads: "8M+",
    sourceUrl: null, // or remove if not public
    category: "unity",

    gallery: [],
    videos: [],
  },
  {
    id: "taxi-sim",
    title: "Taxi Car Simulator : EVO",
    shortDescription: "Major live update focused on progression and player engagement",
    longDescription: {
      overview: "Worked on a major update for Taxi Car Simulator: Evo focused on feature expansion, progression, and player retention for a large-scale live mobile title.",
      responsibilities: [
        "Designed and implemented the new Limousine game mode",
        "Built the Taxi Company system for offline idle income while the app was closed",
        "Added a referral feature to support social growth and player acquisition",
        "Supported ongoing live updates with system maintenance, iteration, and stability improvements"
      ],
      impact: [
        "Expanded the core gameplay loop with new progression systems",
        "Improved long-term engagement through offline rewards",
        "Introduced a referral mechanic to encourage retention and player growth"
      ]
    },
    image: taxiSim.src,
    technologies: ["Unity 6", "URP", "Fusion", "Firebase"],
    youtubeId: "SlwbaMbZBKk",
    stores: [
      {
        platform: "android",
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.ovilex.taxisim2019",
      },
      {
        platform: "ios",
        label: "App Store",
        url: "https://apps.apple.com/us/app/taxi-car-simulator-evo/id1126769121",
      }
    ],
    totalDownloads: "50M+",
    sourceUrl: null, // or remove if not public
    category: "unity",

    gallery: [],
    videos: [],
  }
];
