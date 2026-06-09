const P = "phonesfarmbox.com";
const card = (name: string) => `/images/card_800x800/${P}-${name}-card_800x800.webp`;
const hero = (name: string) => `/images/hero_1600x900/${P}-${name}-hero_1600x900.webp`;
const detail = (name: string) => `/images/detail_1200x900/${P}-${name}-detail_1200x900.webp`;

/** Real product / factory photos imported from provided asset libraries (watermarks OK). */
export const IMPORTED = {
  homeHero: "/images/hero-import/hero-04.jpg",
  factoryHero: "/images/factory/factory-04.jpg",
  factoryGallery: [
    { src: "/images/factory/factory-01.png", label: "Phone farm box — white background" },
    { src: "/images/factory/factory-02.png", label: "Motherboard rack chassis" },
    { src: "/images/factory/factory-03.png", label: "Multi-slot assembly reference" },
    { src: "/images/factory/factory-04.jpg", label: "Stacked phone farm units" },
    { src: "/images/factory/factory-07.jpg", label: "Production batch layout" },
    { src: "/images/factory/factory-09.jpg", label: "Export-ready hardware" },
    { src: "/images/factory/factory-11.jpg", label: "Chassis detail reference" },
    { src: "/images/factory/factory-12.jpg", label: "Room-scale deployment example" },
  ],
  productShowcase: [
    "/images/products/import/product-14.png",
    "/images/products/import/product-15.png",
    "/images/products/import/product-12.png",
  ],
} as const;

export const IMAGES = {
  homeHero: IMPORTED.homeHero,
  phoneFarmBox: {
    card: card("product-box-2025-10-25-11-27-img-0551-a9b35"),
    hero: "/images/products/import/product-01.png",
    detail: detail("product-box-2025-10-25-11-27-img-0551-a9b35"),
  },
  motherboardBox: {
    card: card("components-electronicscomponentslayout-64e0d"),
    hero: "/images/products/import/product-03.png",
    detail: detail("components-electronicscomponentslayout-64e0d"),
  },
  androidFarm: {
    card: card("product-box-2025-10-25-11-28-img-0553-47327"),
    hero: hero("product-box-2025-10-25-11-28-img-0553-47327"),
    detail: detail("product-box-2025-10-25-11-28-img-0553-47327"),
  },
  iphoneFarm: {
    card: card("product-box-2025-10-25-11-37-img-0566-ee21b"),
    hero: hero("product-box-2025-10-25-11-37-img-0566-ee21b"),
    detail: detail("product-box-2025-10-25-11-37-img-0566-ee21b"),
  },
  realDevice: {
    card: card("product-box-0f5501e1584de9a625d220f62951bc6d-d04df"),
    hero: "/images/products/import/product-02.jpg",
    detail: detail("product-box-0f5501e1584de9a625d220f62951bc6d-d04df"),
  },
  emptyBox: {
    card: card("components-electronicsassembly-detail-f936c"),
    hero: hero("components-electronicsassembly-detail-f936c"),
    detail: detail("components-electronicsassembly-detail-f936c"),
  },
  usbHub: {
    card: card("components-electronicscomponentsassembly-19059"),
    hero: hero("components-electronicscomponentsassembly-19059"),
    detail: detail("components-electronicscomponentsassembly-19059"),
  },
  power: {
    card: card("components-electronicsassemblylabworkbench-9e7df"),
    hero: hero("components-electronicsassemblylabworkbench-9e7df"),
    detail: detail("components-electronicsassemblylabworkbench-9e7df"),
  },
  cooling: {
    card: card("components-electronics-workbenchdetail-6f814"),
    hero: hero("components-electronics-workbenchdetail-6f814"),
    detail: detail("components-electronics-workbenchdetail-6f814"),
  },
  network: {
    card: card("accessories-networkdevice-accessories-36665"),
    hero: hero("accessories-networkdevice-accessories-36665"),
    detail: detail("accessories-networkdevice-accessories-36665"),
  },
  customCabinet: {
    card: card("accessories-computeraccessories-showcase-2b3e3"),
    hero: hero("accessories-computeraccessories-showcase-2b3e3"),
    detail: detail("accessories-computeraccessories-showcase-2b3e3"),
  },
  remoteControl: {
    card: card("service-scenes-moderndevicemanagementcontrol-ae6b9"),
    hero: hero("service-scenes-moderndevicemanagementcontrol-ae6b9"),
    detail: detail("service-scenes-moderndevicemanagementcontrol-ae6b9"),
  },
  serviceScene: hero("service-scenes-moderntechoffice-devicecontrol-2663b"),
  factory: IMPORTED.factoryHero,
  workshop: IMPORTED.factoryHero,
  office: hero("service-scenes-moderntechofficeworkspace-23aa6"),
  meeting: hero("service-scenes-modernoffice-lab-28010"),
  warehouse: hero("accessories-electronics-accessories-1cc0b"),
  diyParts: {
    card: card("accessories-techaccessories-showcase-80dfb"),
    hero: hero("accessories-techaccessories-showcase-80dfb"),
    detail: detail("accessories-techaccessories-showcase-80dfb"),
  },
} as const;
