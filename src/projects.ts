export const projects: any[] = [
  {
    id: 1,
    name: 'Image Filter',
    summary: 'An image manipulation application written in C++.',
    description:
      '<p>A C++ application using the OpenCV and Magick++ libraries to manipulate image files. Currently capable of' +
      ' neon-laser outline, laser-etched wood, and glass-cut effects.</p>',
    thumbnail: 'assets/thumbnails/filter_thumb.jpg',
    images: [
      'assets/projects/filter/Darth_Vader.jpg',
      'assets/projects/filter/wood.png',
      'assets/projects/filter/glass3.png',
      'assets/projects/filter/neon.jpg'
    ],
    source: 'https://github.com/sigiltenebrae/Trench-3',
  },
  {
    id: 5,
    name: 'Commander Recommendation System',
    summary: 'Angular web application to recommend EDH Commanders',
    description: '<p>Angular web application for recommending EDH Commanders to build. Uses market-basket analysis on user submitted' +
      ' decks and find external decks with the greatest commonality. Stores data in a Postgres db accessible with a custom made API.</p>',
    thumbnail: 'assets/thumbnails/commanderdash.png',
    images: [
      'assets/projects/commanderdash/commanderdash-decklist.png',
      'assets/projects/commanderdash/commanderdash-edit.png',
      'assets/projects/commanderdash/commanderdash-charts.png',
      'assets/projects/commanderdash/commanderdash-recs.png',
    ],
    source: 'https://github.com/sigiltenebrae/CommanderDash3',
  },
  {
    id: 3,
    name: 'Automated Garden',
    summary: 'Garden management utility on a Raspberry Pi',
    description: '<p>A python script running on a Raspberry Pi that uses sensors to determine when to automatically water ' +
      'plants. Connects to OpenWeather API to get the weekly weather forecast and cancel hydration if rain is ' +
      'predicted.</p>',
    thumbnail: 'assets/thumbnails/garden_thumb.png',
    images: [],
    source: 'https://github.com/sigiltenebrae/AutoGarden',
  },
  {
    id: 4,
    name: 'Home Lab',
    summary: 'A home server running Proxmox.',
    description: '<p>A Dell r710 running Proxmox hosting 14 VMs and over 30 Docker containers. Routes home internet using pfSense. ' +
      'Hosts a BitWarden password manager, BookStacks wiki, NextCloud storage, and a set of DBMS\'s.</p>',
    thumbnail: 'assets/thumbnails/proxmox_thumbnail.png',
    images: [
      'assets/projects/homelab/proxmox_screen.png',
      'assets/projects/homelab/portainer_screen.png',
    ],
    source: '',
  },
  {
    id: 2,
    name: 'Custom DBMS',
    summary: 'A miniature SQL clone written in Java',
    description: '<p>An ACID compliant DBMS capable of handling variable-length records and B+ Tree parsing. ' +
      'Implements a page buffer for faster access time and writes all data to disk for persistent storage. Written in ' +
      'Java.</p>',
    thumbnail: '',
    images: [],
    source: '',
  },
  /*  {
      id: 5,
      name: 'Home Dashboard',
      summary: 'Custom home dashboard.',
      description: '<p>A home dashboard written with Angular and NodeJS, integrating with service APIs and running custom Node APIs for ' +
        'TCP service pings and reading log files.</p>',
      thumbnail: 'assets/thumbnails/dashboard_thumb.png',
      images: [
        'assets/projects/dashboard/dashboard-1.png',
        'assets/projects/dashboard/dashboard-2.png',
        'assets/projects/dashboard/dashboard-3.png',
        'assets/projects/dashboard/dashboard-4.png',
        'assets/projects/dashboard/dashboard-5.png',
      ],
      source: '',
    },*/
  {
    id: 6,
    name: '3D Printers',
    summary: 'Machines that print in 3D',
    description: '<p>3D Printers fully customized: </p>' +
      '<ul>' +
      '<li>An Ender 5 Mercury One conversion to CoreXY running Klipper</li>' +
      '<li>An Ender 3 Dual-Z Linear Rail Mod running Klipper</li>' +
      '<li>An Ender 5 dual extruder mod running Marlin</li>' +
      '<li>A Qidi X-Smart with glass bed mod and custom cooling ducts</li>' +
      '</ul>',
    thumbnail: 'assets/thumbnails/printer_thumb.png',
    images: [
      'assets/projects/printer/merc_one_enclosed.jpg',
      'assets/projects/printer/ender_3.jpg',
      'assets/projects/printer/ender_5.jpg',
      'assets/projects/printer/qidi.jpg',
    ],
    source: '',
  },
  {
    id: 7,
    name: 'CAD Projects',
    summary: 'Misc Designs',
    description: '<p>Just a quick look at some of my designs. Most are upgrades for my printers, or ' +
      'mods on others\' upgrades. For more information, check out my Thingiverse page <a href="https://www.thingiverse.com/sigiltenebrae/designs">here</a>.</p>',
    thumbnail: 'assets/thumbnails/cad_thumb.png',
    images: [
      'assets/projects/cad/deckbox.png',
      'assets/projects/cad/e3tense.png',
      'assets/projects/cad/Hydra_Sherpa.png',
      'assets/projects/cad/enclosure.png',
      'assets/projects/cad/qidi_hydra.png',
      'assets/projects/cad/x_smart.png',
    ],
    source: '',
  },
  /*  {
      id: 8,
      name: 'M.A.M.E.',
      summary: 'Multiple Arcade Machine Emulator',
      description: '<p>A Raspberry Pi 3 based arcade emulator running RetroPie, with custom side panels, housing, ' +
        'and splash screen. Wired in functional buttons and joysticks, with USB controller support as well.</p>',
      thumbnail: 'assets/thumbnails/mame_thumb.png',
      images: ['assets/projects/mame/mame.png'],
      source: '',
    },*/
  {
    id: 9,
    name: 'Angular WebApp',
    summary: 'Node.js & Angular Web Server',
    description: '<p>A node web server using the angular framework hosting my personal website.</p>',
    thumbnail: 'assets/thumbnails/web_thumb.png',
    images: [],
    source: 'https://github.com/sigiltenebrae/ckobb_angular',
  },
];
