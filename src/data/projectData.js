import drivingSchool from "../assets/img-projects/driving_school.jpg";
import taxiSim from "../assets/img-projects/taxi_simulator.jpg";
import policeSim from "../assets/img-projects/police_simulator.jpg";

export const projects = [
  {
    id: "driving-school-simulator",
    title: "Driving School Simulator : Evo",
    shortDescription: "Mobile driving school simulator game",
    longDescription: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: drivingSchool.src,
    technologies: ["Unity 6", "URP", "Fusion", "Firebase"],
    stores: [
      {
        platform: "android",
        label: "Google Play",
        url: "https://play.google.com/store/...",
      },
      {
        platform: "ios",
        label: "App Store",
        url: "https://apps.apple.com/...",
      }
    ],

    sourceUrl: null, // or remove if not public
    category: "unity",

    gallery: [],
    videos: [],
  },
  {
    id: "police-simulator",
    title: "Police Simulator : Car Patrol",
    shortDescription: "Mobile driving school simulator game",
    longDescription: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: policeSim.src,
    technologies: ["Unity 6", "URP", "Fusion", "Firebase"],
    stores: [
      {
        platform: "android",
        label: "Google Play",
        url: "https://play.google.com/store/...",
      },
      {
        platform: "ios",
        label: "App Store",
        url: "https://apps.apple.com/...",
      }
    ],

    sourceUrl: null, // or remove if not public
    category: "unity",

    gallery: [],
    videos: [],
  },
  {
    id: "taxi-sim",
    title: "Taxi Car Simulator : EVO",
    shortDescription: "Mobile driving school simulator game",
    longDescription: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: taxiSim.src,
    technologies: ["Unity 6", "URP", "Fusion", "Firebase"],
    stores: [
      {
        platform: "android",
        label: "Google Play",
        url: "https://play.google.com/store/...",
      },
      {
        platform: "ios",
        label: "App Store",
        url: "https://apps.apple.com/...",
      }
    ],

    sourceUrl: null, // or remove if not public
    category: "unity",

    gallery: [],
    videos: [],
  }
];
