export const site = {
  name: 'Earl Salimbot',
  role: 'Game Developer · 3D Artist',
  location: 'Bulacan, Philippines',
  email: 'juhniarl@gmail.com',
  resume:
    'https://drive.google.com/uc?export=download&id=19CSC7Tvw8nLWa_Dn5hGhTZYDJy5ZNzcc',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Skills', href: '/skills/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Contact', href: '/contact/' },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/urlsalimbot', handle: 'urlsalimbot' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/earl-salimbot-568598239/',
    handle: 'in/earl-salimbot',
  },
  {
    label: 'ArtStation',
    href: 'https://www.artstation.com/user-941842',
    handle: 'artstation.com/user-941842',
  },
  { label: 'Email', href: 'mailto:juhniarl@gmail.com', handle: 'juhniarl@gmail.com' },
];

export const highlights = [
  {
    title: 'Game Development',
    text: 'Building interactive experiences in Godot and Unity, with a focus on responsive controls, game feel, and systems that hold up under play.',
  },
  {
    title: '3D Asset Production',
    text: 'High-quality models, textures, and animation in Blender, optimized for real-time rendering and built for production pipelines.',
  },
  {
    title: '2D Art & Design',
    text: 'Digital painting, sprites, and interface design in Krita and Aseprite, assembled into cohesive pipelines for 2D game art.',
  },
];

export const updates = [
  {
    date: 'Jan 2026',
    title: 'ShroomNet Surfer demo released',
    text: 'A vertical slice built around fast-paced movement, now available on itch.io.',
    href: 'https://jeraquel.itch.io/shroomnet-surfer',
  },
  {
    date: 'Dec 2025',
    title: '3D character series on YouTube',
    text: 'A tutorial series on recreating anime characters in Blender, streamed live.',
    href: 'https://www.youtube.com/live/VQ7qZEA6j-os',
  },
  {
    date: 'Nov 2025',
    title: 'Command Line Tetris published',
    text: 'An open-source Windows terminal Tetris game, built with the Windows API.',
    href: 'https://github.com/urlsalimbot/tetriscmdline',
  },
];

export const projects = [
  {
    title: 'ShroomNet Surfer',
    year: '2024',
    image: '/work/shroomnet.webp',
    alt: 'ShroomNet Surfer key art',
    summary:
      'A vertical slice showcasing fast-paced movement mechanics and atmospheric world-building, built around responsive controls and visual feedback.',
    detail:
      'Developed in Godot Engine with custom shaders and procedural elements.',
    tags: ['Godot', 'Shaders', 'Level Design'],
    href: 'https://jeraquel.itch.io/shroomnet-surfer',
    cta: 'Play the demo',
  },
  {
    title: 'Command Line Tetris',
    year: '2023',
    image: '/work/tetris.svg',
    alt: 'Terminal window running a block-based Tetris game',
    summary:
      'A command-line recreation of Tetris that runs inside the Windows command prompt, with a playable field, score, and next-piece preview.',
    detail:
      'Built in C++ using the Windows.h console API to render a GUI inside the terminal.',
    tags: ['C++', 'Windows API', 'Game Loop'],
    href: 'https://github.com/urlsalimbot/tetriscmdline',
    cta: 'View repository',
  },
  {
    title: '3D Recreation of Anime Characters',
    year: '2023',
    image: '/work/characters.webp',
    alt: '3D recreation of an anime character in Blender',
    summary:
      'A series of fan character assets produced end to end: modeled, retopologized, rigged, textured, and ready for animation.',
    detail:
      'Built in Blender with custom shaders and hand-painted textures, published as a live series.',
    tags: ['Blender', 'Rigging', 'Texturing'],
    href: 'https://www.youtube.com/live/VQ7qZEA6j-os',
    cta: 'Watch the series',
  },
];

export const skills = [
  {
    category: 'Technical',
    items: [
      {
        name: '3D Game Asset Production',
        meta: 'Blender · Substance Painter',
        text: 'High-quality models, textures, and animation for real-time games. Low-poly and stylized work, optimized for engine budgets.',
      },
      {
        name: '2D Game Asset Production',
        meta: 'Krita · Aseprite',
        text: 'Digital painting, sprite creation, and UI design across pixel and vector pipelines.',
      },
      {
        name: 'Python',
        meta: 'Tools · Automation · Pygame',
        text: 'Game tools, automation scripts, and backend systems, including automating repetitive 3D asset tasks.',
      },
      {
        name: 'Godot',
        meta: 'GDScript · Shaders',
        text: '2D and 3D development with a node-based architecture, custom shaders, and particle systems.',
      },
      {
        name: 'C++',
        meta: 'C++11–20 · Systems',
        text: 'High-performance systems and memory management, with STL optimization and multithreaded design.',
      },
      {
        name: 'C#',
        meta: '.NET · Unity',
        text: 'Backend services, asynchronous patterns, and LINQ, plus game logic in Unity.',
      },
      {
        name: 'Unreal Engine',
        meta: 'UE5 · Blueprints',
        text: 'Blueprints and C++ integration, Nanite and Lumen environments, draw-call and shader optimization.',
      },
      {
        name: 'Unity',
        meta: 'C# · Components',
        text: 'Gameplay mechanics, UI systems, and animation and physics workflows.',
      },
      {
        name: 'Git & Version Control',
        meta: 'GitHub · Branching',
        text: 'Collaborative workflows, branching strategies, pull requests, and clean commit histories.',
      },
    ],
  },
  {
    category: 'Creative',
    items: [
      {
        name: 'Game Design & Development',
        meta: 'Mechanics · Systems',
        text: 'Designing mechanics, balancing systems, and shaping player-centric experiences from concept to prototype.',
      },
    ],
  },
  {
    category: 'Professional',
    items: [
      {
        name: 'Problem Solving',
        meta: 'Debugging · Systems thinking',
        text: 'A systematic approach to technical challenges, from debugging complex systems to finding creative solutions.',
      },
      {
        name: 'Communication & Collaboration',
        meta: 'Teams · Agile',
        text: 'Explaining technical ideas to varied audiences and collaborating in agile, feedback-driven teams.',
      },
    ],
  },
];

export const details = [
  { label: 'Education', value: 'BS Computer Science', sub: 'Graduating 2027' },
  { label: 'Location', value: 'Bulacan, Philippines', sub: 'Remote / On-site' },
  { label: 'Focus', value: 'Game Development, 3D Art', sub: 'Level design & systems' },
  { label: 'Interests', value: 'Immersive gameplay', sub: 'Production & visual design' },
];
